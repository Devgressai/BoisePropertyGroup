import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialPage from "@/components/seo/CommercialPage";
import { commercialClaim } from "@/data/commercial-claims";
import { graph, breadcrumbSchema, commercialPageSchema } from "@/lib/seo/schema";
import { COMMERCIAL_PAGES, commercialPage } from "@/data/commercial-content";
import { decideCommercialIndexationBySlug } from "@/lib/seo/commercialIndexation";

export function generateStaticParams() {
  return COMMERCIAL_PAGES.map((p) => ({ asset: p.slug }));
}

/**
 * The gate now lives in lib/seo/commercialIndexation.ts, because sitemap.ts had
 * a hand-maintained copy of it and the link graph needed a third. See that
 * module for why one copy matters.
 */
const gate = decideCommercialIndexationBySlug;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ asset: string }>;
}): Promise<Metadata> {
  const { asset } = await params;
  const content = commercialPage(asset);
  if (!content) return {};
  const decision = gate(asset);
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: `/commercial/${content.slug}` },
    robots: { index: decision.indexable, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ asset: string }> }) {
  const { asset } = await params;
  const content = commercialPage(asset);
  if (!content) notFound();

  const siblings = [
    ...COMMERCIAL_PAGES.filter((p) => p.slug !== content.slug).map((p) => ({
      href: `/commercial/${p.slug}`,
      label: p.eyebrow,
    })),
    { href: "/commercial", label: "All commercial" },
    { href: "/what-we-buy", label: "Everything we buy" },
  ];

  const sources = new Map<string, { title: string; url: string; publisher: string }>();
  for (const id of content.citedClaims) {
    for (const s of commercialClaim(id)?.sources ?? []) sources.set(s.url, s);
  }

  const jsonLd = graph(
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Commercial", href: "/commercial" },
      { label: content.eyebrow, href: `/commercial/${content.slug}` },
    ]),
    commercialPageSchema({
      slug: content.slug,
      title: content.title,
      description: content.description,
      about:
        content.kind === "explainer"
          ? "Commercial property valuation"
          : content.eyebrow === "Multifamily"
            ? "Multifamily property"
            : "Industrial property",
      sources: [...sources.values()],
    }),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CommercialPage content={content} siblings={siblings} />
    </>
  );
}

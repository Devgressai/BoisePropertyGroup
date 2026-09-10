import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialPage from "@/components/seo/CommercialPage";
import { commercialClaim } from "@/data/commercial-claims";
import { graph, breadcrumbSchema, commercialPageSchema } from "@/lib/seo/schema";
import { COMMERCIAL_PAGES, commercialPage } from "@/data/commercial-content";
import { claimsUniqueToAssetClass, commercialClaimsByTopic } from "@/data/commercial-claims";
import { MIN_UNIQUE_CLAIMS, MIN_WORDS, countWords } from "@/lib/seo/indexation";

export function generateStaticParams() {
  return COMMERCIAL_PAGES.map((p) => ({ asset: p.slug }));
}

/**
 * The same quality gate the location pages run, applied to asset class.
 *
 * A page always renders and always passes link equity — `follow` is never
 * false. Indexing is earned by having enough evidence that is true of THIS
 * asset class and not of every commercial building, plus enough hand-written
 * content to be worth a reader's time.
 */
function gate(slug: string) {
  const content = commercialPage(slug);
  if (!content) return { indexable: false, reason: "no content" };
  // An explainer is not about a kind of building, so counting claims that
  // differentiate an asset class would measure the wrong thing. It is gated on
  // the topics it is actually about instead.
  const unique =
    content.kind === "explainer"
      ? new Set(
          (content.gateTopics ?? []).flatMap((t) => commercialClaimsByTopic(t).map((c) => c.id)),
        ).size
      : claimsUniqueToAssetClass(content.assetClass).length;
  const words = countWords(
    ...content.intro,
    ...content.sections.flatMap((s) => [s.heading, ...s.body]),
  );
  if (unique < MIN_UNIQUE_CLAIMS)
    return { indexable: false, reason: `${unique} differentiating claims, needs ${MIN_UNIQUE_CLAIMS}` };
  if (words < MIN_WORDS) return { indexable: false, reason: `${words} words, needs ${MIN_WORDS}` };
  return { indexable: true, reason: `${unique} differentiating claims, ${words} words` };
}

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

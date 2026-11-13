import type { Metadata } from "next";
import Link from "next/link";
import ArticleBody, { LinkList } from "@/components/seo/ArticleBody";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import EvidenceAppendix from "@/components/seo/EvidenceAppendix";
import { claim as residentialClaim } from "@/data/claims";

import { guides, guideBySlug } from "@/data/guides";
import { guideContentFor } from "@/data/guide-content";
import { articleSchema } from "@/lib/seo/schema";
import { pageMetadata, metaDescription } from "@/lib/seo/meta";
import PageSchema from "@/components/seo/PageSchema";
import NextSteps from "@/components/NextSteps";
import { situationForGuide } from "@/lib/seo/registry";
import { placesForGuide } from "@/lib/seo/internalLinks";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) return {};
  return pageMetadata({
    path: `/guides/${slug}`,
    title: g.title,
    description: g.description,
    type: "article",
    // A guide indexes only when it has hand-written content behind it.
    robots: { index: !!guideContentFor(slug), follow: true },
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  const content = guideContentFor(slug);
  if (!g || !content) notFound();


  /**
   * Claims cited by this page's sections, de-duplicated in first-appearance
   * order. place-content.ts and guide-content.ts have carried these ids since
   * the beginning, annotated "Kept for audit, not rendered" — so the evidence
   * was tracked and never shown. Withheld claims are absent from the generated
   * module entirely, so an unresolvable id simply drops out here.
   */
  const appendixClaims = [
    ...new Set(content.sections.flatMap((s) => s.claims ?? [])),
  ]
    .map((id) => residentialClaim(id))
    .filter((c) => c !== undefined);

  /** Places whose own claims carry a topic in this guide's cluster. */
  const relatedPlaces = placesForGuide(g.cluster);
  /** The funnel's TOFU→BOFU edge: the page that buys what this guide explains. */
  const sellPage = situationForGuide(g.slug);

  const path = `/guides/${g.slug}`;
  const sources = new Map<string, { title: string; url: string; publisher: string }>();
  for (const c of appendixClaims) for (const src of c.sources) sources.set(src.url, src);
  const article = articleSchema({
    path,
    headline: g.h1,
    description: g.description,
    published: g.published,
    updated: g.updated,
    sources: [...sources.values()],
  });
  const fmt = (d: string) =>
    new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--bpg-muted)]">
              <Link href="/" className="no-underline hover:text-[var(--bpg-ink)]">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/guides" className="no-underline hover:text-[var(--bpg-ink)]">Guides</Link>
            </nav>
            <p className="eyebrow text-[var(--bpg-warm)]">Idaho guide</p>
            <h1 className="display-xl mt-4 max-w-[20ch] text-[var(--bpg-ink)]">{g.h1}</h1>
            {/* The same dates as the Article schema — they must always agree. */}
            <p className="mt-5 text-sm text-[var(--bpg-muted)]">
              Published <time dateTime={g.published}>{fmt(g.published)}</time>
              {g.updated !== g.published && (
                <> · Updated <time dateTime={g.updated}>{fmt(g.updated)}</time></>
              )}
              {" "}· {sources.size} sources cited
            </p>
            <div className="mt-7 max-w-[44rem] space-y-4">
              {content.intro.map((p) => (
                <p key={p.slice(0, 40)} className="lede text-[var(--bpg-muted)]">{p}</p>
              ))}
            </div>
          </div>
        </header>

        <ArticleBody sections={content.sections}>
          {sellPage && (
            <div className="mt-16 rounded-2xl bg-[var(--bpg-navy)] p-7 text-[var(--bpg-on-navy-muted)] sm:p-9">
              <p className="eyebrow text-[var(--bpg-brass)]">Ready to sell?</p>
              <p className="serif mt-3 text-[1.5rem] font-semibold leading-snug text-white">{sellPage.h1}</p>
              <p className="mt-2 leading-relaxed">{sellPage.description}</p>
              <Link href={`/${sellPage.slug}`} className="btn btn-brass mt-6">
                How a direct sale works for this <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
          <div className="mt-16 space-y-10 border-t-2 border-[var(--bpg-ink)] pt-8">
            <LinkList
              heading="Other guides"
              cols={1}
              items={guides
                .filter((o) => o.slug !== g.slug && guideContentFor(o.slug))
                .map((o) => ({ href: `/guides/${o.slug}`, label: o.h1 }))}
            />
            <LinkList
              heading="Where this applies in Ada County"
              cols={2}
              items={relatedPlaces.map((l) => ({ href: l.href, label: `Selling property in ${l.label}` }))}
            />
          </div>
        </ArticleBody>
        <EvidenceAppendix claims={appendixClaims} />

        <NextSteps path={path} />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
      <PageSchema path={path} name={g.title} description={metaDescription(g.description)} extra={[article]} />
    </>
  );
}

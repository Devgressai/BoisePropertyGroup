import type { Metadata } from "next";
import Link from "next/link";
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
import { placesForGuide } from "@/lib/seo/internalLinks";
import Inline from "@/lib/content/Inline";

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

  const anchor = (h: string) => h.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
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
            <h1 className="display-lg max-w-[22ch] text-[var(--bpg-ink)]">{g.h1}</h1>
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

        <article className="wrap py-16 sm:py-20">
          <div className="max-w-[46rem] space-y-14">
            {content.sections.map((s) => (
              <section key={s.heading} aria-labelledby={anchor(s.heading)}>
                <hr className="rule-accent" />
                <h2 id={anchor(s.heading)} className="display-md mt-5 text-[var(--bpg-ink)]">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 40)} className="leading-relaxed"><Inline text={p} /></p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/*
            Siblings are filtered on HAVING CONTENT, not merely on not being
            this page. A guide with no written content renders a stub, and the
            place pages shipped exactly that bug — sibling links sent readers to
            four empty pages. All four guides are written today, so this filter
            changes nothing now; it is here so writing a fifth guide cannot
            reintroduce it.

            The places block is the reverse of knowledgeLinksForPlace(): a guide
            links back only to places whose OWN claims carry a topic in this
            guide's cluster. Guides, places and commercial pages were three
            sealed islands joined only through the navbar and footer.
          */}
          <aside className="mt-16 max-w-[46rem] border-t border-[var(--bpg-border)] pt-8">
            <h2 className="eyebrow text-[var(--bpg-muted)]">Other guides</h2>
            <ul className="mt-4 space-y-2.5">
              {guides
                .filter((o) => o.slug !== g.slug && guideContentFor(o.slug))
                .map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/guides/${o.slug}`}
                      className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]"
                    >
                      {o.h1}
                    </Link>
                  </li>
                ))}
            </ul>

            {relatedPlaces.length > 0 && (
              <>
                <h2 className="eyebrow mt-8 text-[var(--bpg-muted)]">
                  Where this applies in Ada County
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {relatedPlaces.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]"
                      >
                        Selling property in {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </aside>
        </article>
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

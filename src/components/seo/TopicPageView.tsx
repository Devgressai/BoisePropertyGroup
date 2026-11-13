import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import NextSteps from "@/components/NextSteps";
import EvidenceAppendix from "@/components/seo/EvidenceAppendix";
import Inline from "@/lib/content/Inline";
import ArticleBody, { LinkList } from "@/components/seo/ArticleBody";
import type { TopicPage } from "@/data/topic-pages";
import { guideBySlug } from "@/data/guides";
import { guideContentFor } from "@/data/guide-content";
import { citedClaims } from "@/lib/seo/topicIndexation";
import { publishedPlaces } from "@/lib/seo/registry";

/**
 * Template for BOFU situation pages and MOFU decision pages. Same skeleton as a
 * guide — answer-first intro, sourced sections, evidence appendix — with the
 * offer form high on situation pages, where the reader has come to sell.
 */
export default function TopicPageView({ page }: { page: TopicPage }) {
  const guides = page.guides
    .map(guideBySlug)
    .filter((g): g is NonNullable<typeof g> => !!g && !!guideContentFor(g.slug));
  const places = page.kind === "situation" ? publishedPlaces() : [];
  const parent = page.kind === "situation" ? { href: "/what-we-buy", label: "What we buy" } : { href: "/how-it-works", label: "How it works" };
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
              <Link href={parent.href} className="no-underline hover:text-[var(--bpg-ink)]">{parent.label}</Link>
            </nav>
            <p className="eyebrow text-[var(--bpg-warm)]">{page.eyebrow}</p>
            <h1 className="display-xl mt-4 max-w-[20ch] text-[var(--bpg-ink)]">{page.h1}</h1>
            <p className="mt-5 text-sm text-[var(--bpg-muted)]">
              Updated <time dateTime={page.updated}>{fmt(page.updated)}</time>
            </p>
            <div className="mt-7 max-w-[44rem] space-y-4">
              {page.intro.map((p, i) => (
                <p key={p.slice(0, 40)} className={i === 0 ? "lede text-[var(--bpg-ink)]" : "text-sm leading-relaxed text-[var(--bpg-muted)]"}>
                  <Inline text={p} />
                </p>
              ))}
            </div>
            {page.kind === "situation" && (
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="#offer" className="btn btn-primary">Get an offer</Link>
                <Link href="/how-we-calculate-an-offer" className="btn btn-secondary">How we price it</Link>
              </div>
            )}
          </div>
        </header>

        <ArticleBody sections={page.sections}>
          {(guides.length > 0 || places.length > 0) && (
            <div className="mt-16 space-y-10 border-t-2 border-[var(--bpg-ink)] pt-8">
              <LinkList heading="The law in full" cols={1} items={guides.map((g) => ({ href: `/guides/${g.slug}`, label: g.h1 }))} />
              <LinkList heading="Where we buy" cols={3} items={places.map((p) => ({ href: `/${p.slug}`, label: p.name }))} />
            </div>
          )}
        </ArticleBody>

        <EvidenceAppendix claims={citedClaims(page)} />
        <NextSteps path={`/${page.slug}`} />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import NextSteps from "@/components/NextSteps";
import EvidenceAppendix from "@/components/seo/EvidenceAppendix";
import Inline from "@/lib/content/Inline";
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
  const anchor = (h: string) => h.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
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
            <p className="eyebrow text-[var(--bpg-accent)]">{page.eyebrow}</p>
            <h1 className="display-lg mt-4 max-w-[22ch] text-[var(--bpg-ink)]">{page.h1}</h1>
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

        <article className="wrap py-16 sm:py-20">
          <div className="max-w-[46rem] space-y-14">
            {page.sections.map((s) => (
              <section key={s.heading} aria-labelledby={anchor(s.heading)}>
                <hr className="rule-accent" />
                <h2 id={anchor(s.heading)} className="display-md mt-5 text-[var(--bpg-ink)]">{s.heading}</h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 40)} className="leading-relaxed"><Inline text={p} /></p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {(guides.length > 0 || places.length > 0) && (
            <aside className="mt-16 grid max-w-[46rem] gap-10 border-t border-[var(--bpg-border)] pt-8 sm:grid-cols-2">
              {guides.length > 0 && (
                <div>
                  <h2 className="eyebrow text-[var(--bpg-muted)]">The law in full</h2>
                  <ul className="mt-4 space-y-2.5">
                    {guides.map((g) => (
                      <li key={g.slug}>
                        <Link href={`/guides/${g.slug}`} className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]">
                          {g.h1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {places.length > 0 && (
                <div>
                  <h2 className="eyebrow text-[var(--bpg-muted)]">Where we buy</h2>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {places.map((p) => (
                      <li key={p.slug}>
                        <Link href={`/${p.slug}`} className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]">
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          )}
        </article>

        <EvidenceAppendix claims={citedClaims(page)} />
        <NextSteps path={`/${page.slug}`} />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

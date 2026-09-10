import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import OfferForm from "@/components/OfferForm";
import type { CommercialPageContent } from "@/data/commercial-content";
import { commercialClaim } from "@/data/commercial-claims";

/**
 * A commercial asset page.
 *
 * The evidence block at the foot is not decoration. Everything factual on these
 * pages comes from a claim registry, and the registry knows where each claim
 * came from, so the page can show its working. A reader who wants to check a
 * height limit against the city's own table should be one click away.
 */
export default function CommercialPage({
  content,
  siblings,
}: {
  content: CommercialPageContent;
  siblings: { href: string; label: string }[];
}) {
  const anchor = (h: string) => h.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

  const cited = content.citedClaims.map((id) => commercialClaim(id)).filter((c) => c !== undefined);

  // One entry per source, so a source cited by six claims is listed once.
  const sources = new Map<string, { title: string; url: string; publisher: string }>();
  for (const c of cited) for (const s of c.sources) sources.set(s.url, s);

  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="bg-[var(--bpg-ink)] py-16 text-white sm:py-20">
          <div className="wrap">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
              <Link href="/" className="no-underline hover:text-white">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/commercial" className="no-underline hover:text-white">Commercial</Link>
            </nav>
            <p className="eyebrow text-[var(--bpg-accent)]">{content.eyebrow}</p>
            <h1 className="display-xl mt-4 max-w-[20ch] text-white">{content.h1}</h1>
            <div className="mt-8 max-w-[42rem] space-y-4">
              {content.intro.map((p) => (
                <p key={p.slice(0, 40)} className="lede text-white/80">{p}</p>
              ))}
            </div>
            <div className="mt-9 max-w-[34rem]">
              <OfferForm tone="dark" />
            </div>
          </div>
        </header>

        <div className="wrap py-16 sm:py-20">
          <div className="max-w-[46rem] space-y-14">
            {content.sections.map((s) => (
              <section key={s.heading} aria-labelledby={anchor(s.heading)}>
                <hr className="rule-accent" />
                <h2 id={anchor(s.heading)} className="display-md mt-5 text-[var(--bpg-ink)]">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 40)} className="leading-relaxed">{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <section
          className="border-t border-[var(--bpg-border)] bg-[var(--bpg-surface)] py-14"
          aria-labelledby="sources"
        >
          <div className="wrap max-w-[46rem]">
            <h2 id="sources" className="eyebrow text-[var(--bpg-muted)]">
              Where this comes from
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">
              Every factual statement on this page is traced to a published source. Zoning
              and assessment rules change; the dates below are when each was last checked.
            </p>
            <ul className="mt-6 space-y-3 text-[0.95rem]">
              {[...sources.values()].map((s) => (
                <li key={s.url} className="leading-relaxed">
                  <a
                    href={s.url}
                    className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]"
                    rel="noopener"
                  >
                    {s.title}
                  </a>
                  <span className="text-[var(--bpg-muted)]"> — {s.publisher}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {siblings.length > 0 && (
          <section className="border-t border-[var(--bpg-border)] py-14">
            <div className="wrap">
              <h2 className="eyebrow text-[var(--bpg-muted)]">Also here</h2>
              <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
                {siblings.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

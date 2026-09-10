import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import { COMMERCIAL_PAGES } from "@/data/commercial-content";

export const metadata: Metadata = {
  title: "Commercial property acquisition — Boise and Ada County",
  description:
    "What we buy on the commercial side, and what actually changes when a property is valued on its income rather than by comparison to nearby sales.",
  alternates: { canonical: "/commercial" },
  robots: { index: true, follow: true },
};

/**
 * The commercial hub.
 *
 * A hub is a routing page and is judged on whether the pages beneath it exist,
 * not on unique claims of its own. Two pages sit under it today. Office and
 * retail are absent because the evidence does not yet distinguish them from
 * each other — see scripts/research/commercial-ia-eligibility.mjs, which makes
 * that decision from the registry rather than from preference.
 */
export default function CommercialHub() {
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="bg-[var(--bpg-ink)] py-16 text-white sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-accent)]">Commercial</p>
            <h1 className="display-xl mt-4 max-w-[20ch] text-white">
              Commercial property, valued on what it earns
            </h1>
            <div className="mt-8 max-w-[42rem] space-y-4">
              <p className="lede text-white/80">
                Above four units, and across office, industrial and retail, a property stops
                being valued by comparison to its neighbours and starts being valued on the
                income it produces. That single change is behind almost everything else that
                is different about selling one.
              </p>
              <p className="lede text-white/80">
                We buy industrial, multifamily from five units up, office and commercial land
                in Boise and across Ada County.
              </p>
            </div>
          </div>
        </header>

        <div className="wrap py-16 sm:py-20">
          <div className="max-w-[46rem]">
            <hr className="rule-accent" />
            <h2 className="display-md mt-5 text-[var(--bpg-ink)]">By asset class</h2>
            <p className="mt-4 leading-relaxed">
              Two pages here go into detail, because those are the two where we have
              something specific to Boise to say. Where we do not, we have not written a page
              — a page that repeats what is true of every commercial building is not worth
              your time.
            </p>
          </div>

          <div className="mt-9 grid gap-px overflow-hidden rounded-sm border border-[var(--bpg-border)] bg-[var(--bpg-border)] sm:grid-cols-2">
            {COMMERCIAL_PAGES.map((p) => (
              <Link
                key={p.slug}
                href={`/commercial/${p.slug}`}
                className="block bg-[var(--bpg-surface)] p-8 no-underline transition-colors hover:bg-[var(--bpg-sand)]"
              >
                <h3 className="text-[1.15rem] font-semibold text-[var(--bpg-ink)]">{p.eyebrow}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-14 max-w-[46rem] space-y-4">
            <hr className="rule-accent" />
            <h2 className="display-md mt-5 text-[var(--bpg-ink)]">Office, retail and land</h2>
            <p className="leading-relaxed">
              We buy all three. We have not written pages about them, because everything we
              could say about office property in Boise today is equally true of retail
              property in Boise, and a page that cannot distinguish itself from the page next
              to it is not information — it is filler with a heading.
            </p>
            <p className="leading-relaxed">
              If you own office, retail or commercial ground and want to talk about it, the
              form is the same one. Tell us the address.
            </p>
          </div>
        </div>

        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

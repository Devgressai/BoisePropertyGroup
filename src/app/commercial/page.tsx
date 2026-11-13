import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/meta";
import NextSteps from "@/components/NextSteps";
import PageSchema from "@/components/seo/PageSchema";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import { COMMERCIAL_PAGES } from "@/data/commercial-content";

const ASSETS = COMMERCIAL_PAGES.filter((p) => p.kind === "asset");
const EXPLAINERS = COMMERCIAL_PAGES.filter((p) => p.kind === "explainer");

const TITLE = "Commercial Property Buyers in Ada County";
const DESCRIPTION =
  "What we buy on the commercial side, and what actually changes when a property is valued on its income rather than by comparison to nearby sales.";

export const metadata: Metadata = pageMetadata({ path: "/commercial", title: TITLE, description: DESCRIPTION });

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
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-warm)]">Commercial</p>
            <h1 className="display-xl mt-4 max-w-[20ch] text-[var(--bpg-ink)]">
              Commercial property, valued on what it earns
            </h1>
            <div className="mt-8 max-w-[42rem] space-y-4">
              <p className="lede text-[var(--bpg-muted)]">
                Above four units, and across office, industrial and retail, a property stops
                being valued by comparison to its neighbours and starts being valued on the
                income it produces. That single change is behind almost everything else that
                is different about selling one.
              </p>
              <p className="lede text-[var(--bpg-muted)]">
                We buy industrial, multifamily from five units up, office and commercial land
                in Boise and across Ada County.
              </p>
            </div>
          </div>
        </header>

        <div className="wrap py-16 sm:py-20">
          <div className="max-w-[46rem]">
            <h2 className="display-lg text-[var(--bpg-ink)]">By asset class</h2>
            <p className="mt-4 leading-relaxed">
              Two pages here go into detail, because those are the two where we have
              something specific to Boise to say. Where we do not, we have not written a page
              — a page that repeats what is true of every commercial building is not worth
              your time.
            </p>
          </div>

          <div className="mt-9 grid gap-x-12 sm:grid-cols-2">
            {ASSETS.map((p) => (
              <Link
                key={p.slug}
                href={`/commercial/${p.slug}`}
                className="group block border-t border-[var(--bpg-border)] py-7 no-underline"
              >
                <h3 className="serif text-[1.35rem] font-semibold text-[var(--bpg-ink)] group-hover:underline group-hover:decoration-[var(--bpg-brass)] group-hover:underline-offset-4">{p.eyebrow}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>

          {EXPLAINERS.length > 0 && (
            <div className="mt-14">
              <div className="max-w-[46rem]">
                <h2 className="display-lg text-[var(--bpg-ink)]">Before any of that</h2>
                <p className="mt-4 leading-relaxed">
                  One mechanism sits underneath every asset class here. It is the difference
                  between a house and a commercial building, and it is why the assessor&rsquo;s
                  number and a transaction price are rarely the same figure.
                </p>
              </div>
              <div className="mt-7 grid">
                {EXPLAINERS.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/commercial/${p.slug}`}
                    className="group block border-t border-[var(--bpg-border)] py-7 no-underline"
                  >
                    <h3 className="serif text-[1.35rem] font-semibold text-[var(--bpg-ink)] group-hover:underline group-hover:decoration-[var(--bpg-brass)] group-hover:underline-offset-4">
                      {p.h1}
                    </h3>
                    <p className="mt-2 max-w-[46rem] text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 max-w-[46rem] space-y-4">
            <h2 className="display-lg text-[var(--bpg-ink)]">Land, and a note on office versus retail</h2>
            <p className="leading-relaxed">
              There is no separate office page and no separate retail page, and that is
              deliberate rather than unfinished. The codes themselves do not separate them —
              Meridian governs both in one table, Boise delivers both through the same
              mixed-use series — so two pages would have been one page written twice. They
              share the districts page above.
            </p>
            <p className="leading-relaxed">
              We buy commercial and development land as well, and have not written a page
              about it: almost everything we hold that touches land is an overlay applying to
              every asset class equally, which distinguishes nothing. If you own commercial
              ground and want to talk about it, the form is the same one. Tell us the address.
            </p>
          </div>
        </div>

        <NextSteps path="/commercial" />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
      <PageSchema path="/commercial" name={TITLE} description={DESCRIPTION} type="CollectionPage" />
    </>
  );
}

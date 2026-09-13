import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import { site, hasLegalEntity } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "A property acquisition group in Ada County, Idaho. What we buy, how we underwrite, and why this market.",
  alternates: { canonical: "/about" },
};

/**
 * HONESTY CONSTRAINT ON THIS PAGE.
 *
 * No track record, no assets under management, no fund, no years in business,
 * no transaction count, no team bios. None of it exists yet and none may be
 * implied. What CAN be said is what we buy, how we underwrite, and why this
 * market — all of which is either policy or sourced evidence.
 */
export default function About() {
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="bg-[var(--bpg-ink)] py-16 text-white sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-accent)]">About</p>
            <h1 className="display-xl mt-4 max-w-[18ch] text-white">
              A property acquisition group in Ada County.
            </h1>
          </div>
        </header>

        <div className="wrap py-16 sm:py-20">
          <div className="max-w-[46rem] space-y-14">
            <section>
              <hr className="rule-accent" />
              <h2 className="display-md mt-5 text-[var(--bpg-ink)]">What we are</h2>
              <div className="mt-4 space-y-4">
                <p className="leading-relaxed">
                  We buy property directly in Ada County and the Treasure Valley — single houses
                  through apartment buildings, office and industrial, and land with complications
                  attached. We use our own capital.
                </p>
                <p className="leading-relaxed">
                  For a seller that means an offer that closes on a date you choose. For a broker it
                  means a counterparty who will look at a building that does not show well and give
                  a straight answer quickly.
                </p>
              </div>
            </section>

            <section>
              <hr className="rule-accent" />
              <h2 className="display-md mt-5 text-[var(--bpg-ink)]">Why Ada County</h2>
              <div className="mt-4 space-y-4">
                <p className="leading-relaxed">
                  Because the county is not one market. Between the 2020 census base and the 2024
                  estimate, Star grew 61.4% and Kuna 21.0%, while Boise grew 1.0%. Those are
                  different property markets inside one assessor&rsquo;s jurisdiction, and they
                  reward being underwritten differently.
                </p>
                <p className="leading-relaxed">
                  The projections then reverse parts of it. COMPASS expects Kuna to grow a further
                  128.7% by 2050 while Star adds 12.3%, and expects unincorporated Ada County to
                  lose 36% of its population — not through decline, but on the assumption that
                  cities annex the Areas of City Impact they already plan for. Ground that is county
                  jurisdiction today and inside a city&rsquo;s planning area is a different asset
                  from ground that is neither.
                </p>
                <p className="leading-relaxed">
                  Most of what is written about buying and selling here does not engage with any of
                  that. That gap is the opportunity.
                </p>
              </div>
            </section>

            <section>
              <hr className="rule-accent" />
              <h2 className="display-md mt-5 text-[var(--bpg-ink)]">How we work</h2>
              <div className="mt-4 space-y-4">
                <p className="leading-relaxed">
                  Every factual claim on this site cites the statute or county record it came from,
                  and each one was checked against a stored copy of the source page rather than
                  remembered. Where the evidence is thin or disputed, the page says so or does not
                  make the claim.
                </p>
                <p className="leading-relaxed">
                  The same discipline is what underwriting is. An offer is arithmetic you can check
                  &mdash; see <Link href="/how-it-works" className="underline decoration-[var(--bpg-border-strong)] underline-offset-4">how it works</Link>{" "}
                  for the four numbers that decide one, and{" "}
                  <Link href="/guides" className="underline decoration-[var(--bpg-border-strong)] underline-offset-4">the guides</Link>{" "}
                  for what Idaho law actually says about probate sales, foreclosure timelines and
                  selling with tenants.
                </p>
              </div>
            </section>

            <section>
              <hr className="rule-accent" />
              <h2 className="display-md mt-5 text-[var(--bpg-ink)]">Where we are</h2>
              <div className="mt-4 space-y-4">
                <p className="leading-relaxed">
                  {hasLegalEntity ? site.legalEntity : "Boise Property Group"} buys in Ada County
                  and, selectively, wider across the Treasure Valley. We are early, and we would
                  rather say that than manufacture a track record.
                </p>
                <p className="leading-relaxed">
                  What we will not do is claim transactions we have not closed, reviews nobody
                  wrote, or awards nobody gave us. If a number appears on this site, it is real and
                  it names its source.
                </p>
              </div>
            </section>
          </div>
        </div>
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

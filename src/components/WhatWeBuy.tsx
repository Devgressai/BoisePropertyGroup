/**
 * Business scope, stated by the owner (2026-09-10), as four property groups.
 *
 * "What the property is" is asked here; "why the owner is selling" is a
 * separate, optional section (Situations). A seller should be able to find
 * their property type without naming a hardship.
 *
 * The unit count is on the page ON PURPOSE. Search treats "sell rental property
 * Boise" as a wholly residential query and "sell apartment building Boise" as a
 * mixed one, so a multifamily line written in landlord-exit language reads as
 * another residential listing and competes with our own house pages. Rent roll
 * and NOI are what mark it as commercial. Do not add "tired of managing
 * tenants", "no repairs, no fees" or equivalent to the multifamily line.
 * See data/commercial/queries/commercial-query-ownership.json.
 */
import Link from "next/link";
import { entryFor } from "@/lib/seo/registry";

const GROUPS = [
  {
    t: "Houses and small rentals",
    lines: ["Any condition, as it stands", "Inherited or in probate", "Rentals up to a fourplex, occupied or vacant"],
    href: "/sell-house-as-is-idaho",
    cta: "Selling a house as-is",
  },
  {
    t: "Manufactured homes",
    lines: ["On their own land", "Sold as they stand"],
    href: "/sell-manufactured-home-idaho",
    cta: "Selling a manufactured home",
  },
  {
    t: "Land and lots",
    lines: ["Raw parcels and acreage", "Infill and buildable lots", "Parcels with access, easement or floodplain questions"],
    href: "/sell-land-idaho",
    cta: "Selling land",
  },
  {
    t: "Multifamily and commercial",
    lines: ["Multifamily, five units and up, priced on rent roll and NOI", "Office buildings", "Industrial, flex and yard space"],
    href: "/commercial",
    cta: "The commercial side",
  },
];

export default function WhatWeBuy() {
  return (
    <section className="section bg-white" aria-labelledby="what-we-buy">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">What we buy</p>
          <h2 id="what-we-buy" className="display-lg mt-4 text-[var(--bpg-ink)]">
            Four kinds of property, in Ada County.
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            We buy as it stands, so condition does not rule a property out. Not every property
            fits, and we will say so quickly when one does not.
          </p>
        </div>
        <ul className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g) => (
            <li key={g.t} className="flex flex-col border-t-2 border-[var(--bpg-ink)] pb-8 pt-5">
              <h3 className="serif text-[1.3rem] font-semibold leading-snug text-[var(--bpg-ink)]">{g.t}</h3>
              <ul className="mt-3 flex-1 space-y-1.5 text-[0.95rem] leading-snug text-[var(--bpg-muted)]">
                {g.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              {entryFor(g.href) && (
                <Link
                  href={g.href}
                  className="group mt-4 inline-flex min-h-[44px] items-center gap-2 text-[0.95rem] font-semibold text-[var(--bpg-ink)] no-underline"
                >
                  <span className="underline decoration-[var(--bpg-brass)] underline-offset-4">{g.cta}</span>
                  <span aria-hidden="true" className="text-[var(--bpg-accent)] transition-transform group-hover:translate-x-1">→</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[0.95rem] text-[var(--bpg-muted)]">
          The full criteria are on{" "}
          <Link href="/what-we-buy" className="font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4">
            what we buy
          </Link>
          . We buy in Boise, Meridian, Eagle, Kuna, Star, Garden City and unincorporated Ada County.
        </p>
      </div>
    </section>
  );
}

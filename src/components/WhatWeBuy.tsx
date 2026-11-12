/**
 * Business scope, stated by the owner (2026-09-10).
 *
 * The unit count is on the page ON PURPOSE. Search treats "sell rental property
 * Boise" as a wholly residential query and "sell apartment building Boise" as a
 * mixed one, so a multifamily line written in landlord-exit language reads as
 * another residential listing and competes with our own house pages. Rent roll
 * and NOI are what mark it as commercial. Do not add "tired of managing
 * tenants", "no repairs, no fees" or equivalent to the multifamily line.
 * See data/commercial/queries/commercial-query-ownership.json.
 *
 * Layout (2026-11-12): a two-column hairline list, no cards and no icons.
 */
import Link from "next/link";

const ITEMS = [
  { t: "Houses in any condition", d: "Deferred maintenance, dated, or mid-repair" },
  { t: "Inherited and probate property", d: "Estates, probate, several heirs" },
  { t: "Rentals, up to a fourplex", d: "Occupied or vacant; leases and deposits handled properly" },
  { t: "Manufactured homes", d: "Sold as they stand" },
  { t: "Land and acreage", d: "Raw parcels, rural ground, well and septic property" },
  { t: "Infill and buildable lots", d: "Splits, and ground never built on" },
  { t: "Difficult parcels", d: "Access issues, easements, floodplain, code violations" },
  { t: "Multifamily, five units and up", d: "Priced on rent roll and NOI; occupied or mid-turnaround" },
  { t: "Office buildings", d: "Single tenant, multi-tenant, or sitting empty" },
  { t: "Industrial", d: "Warehouse, flex, shop and yard space" },
];

export default function WhatWeBuy() {
  return (
    <section className="section bg-[var(--bpg-sand)]" aria-labelledby="what-we-buy">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">What we buy</p>
          <h2 id="what-we-buy" className="display-lg mt-4 text-[var(--bpg-ink)]">
            Houses are only part of it.
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            We buy as it stands, so condition is not a disqualifier &mdash; and neither are the things
            most buyers walk away from: ground without access, tenants in place, an estate still being
            settled.
          </p>
        </div>
        <ul className="mt-12 grid gap-x-12 md:grid-cols-2">
          {ITEMS.map((i) => (
            <li key={i.t} className="border-t border-[var(--bpg-border)] py-6">
              <h3 className="serif text-[1.3rem] font-semibold leading-snug text-[var(--bpg-ink)]">{i.t}</h3>
              <p className="mt-1.5 text-[0.95rem] text-[var(--bpg-muted)]">{i.d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[0.95rem] text-[var(--bpg-muted)]">
          <Link
            href="/commercial"
            className="font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4"
          >
            More on the commercial side
          </Link>{" "}
          &mdash; how industrial districts differ across Boise, and where multifamily actually begins.
        </p>
      </div>
    </section>
  );
}

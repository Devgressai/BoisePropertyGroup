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
 * Layout (2026-11-13): an index. One row per type, name left, scope right.
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
    <section className="section bg-white" aria-labelledby="what-we-buy">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">What we buy</p>
          <h2 id="what-we-buy" className="display-lg mt-4 text-[var(--bpg-ink)]">
            Houses are only part of it.
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            We buy as it stands, so condition does not rule a property out. Neither do the things
            most buyers walk away from: ground without access, tenants in place, an estate still
            being settled.
          </p>
        </div>
        <ul className="section-body mt-10">
          {ITEMS.map((i) => (
            <li
              key={i.t}
              className="grid gap-x-8 gap-y-0.5 border-t border-[var(--bpg-border)] py-4 last:border-b md:grid-cols-[19rem_1fr] md:items-baseline"
            >
              <h3 className="serif text-[1.15rem] font-semibold leading-snug text-[var(--bpg-ink)]">{i.t}</h3>
              <p className="text-[0.95rem] text-[var(--bpg-muted)]">{i.d}</p>
            </li>
          ))}
        </ul>
        <p className="section-body mt-8 text-[0.95rem] text-[var(--bpg-muted)]">
          <Link
            href="/commercial"
            className="font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4"
          >
            More on the commercial side
          </Link>
          : how industrial districts differ across Boise, and where multifamily begins.
        </p>
      </div>
    </section>
  );
}

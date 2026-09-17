/**
 * Business scope, stated by the owner (2026-09-10).
 *
 * NOTE: office, industrial and 5+ unit multifamily are confirmed acquisition
 * targets, but the Ada County evidence system holds no commercial-specific
 * research yet. That is why they appear here and NOT as dedicated pages — what
 * the business buys is a fact the owner supplies; what a page may claim needs
 * sourced evidence. The two are tracked separately on purpose.
 *
 * The unit count is on the page ON PURPOSE. Search treats "sell rental property
 * Boise" as a wholly residential query and "sell apartment building Boise" as a
 * mixed one, so a multifamily block written in landlord-exit language reads as
 * another residential listing and competes with our own house pages. Rent roll
 * and NOI are what mark this block as commercial. Do not add "tired of managing
 * tenants", "no repairs, no fees" or equivalent here — that copy belongs on the
 * residential side, which keeps duplex through fourplex deliberately.
 * See data/commercial/queries/commercial-query-ownership.json.
 */
import Link from "next/link";
import { IconHouse, IconKeys, IconLand, IconBuilding, IconPin, IconScale, IconShield, IconOffice, IconWarehouse } from "./Icons";

const RESIDENTIAL = [
  { t: "Houses", d: "Any condition. Deferred maintenance, dated, or mid-repair.", Icon: IconHouse },
  { t: "Rentals", d: "Occupied or vacant, up to a fourplex. Tenants, leases and deposits handled properly.", Icon: IconKeys },
  { t: "Inherited property", d: "Estates, probate, multiple heirs.", Icon: IconScale },
];

const LAND = [
  { t: "Land & acreage", d: "Raw parcels, rural ground, well and septic property.", Icon: IconLand },
  { t: "Infill lots", d: "Buildable lots, splits, previously undeveloped ground.", Icon: IconPin },
  { t: "Problem property", d: "Access issues, easements, floodplain, code violations.", Icon: IconShield },
];

const COMMERCIAL = [
  { t: "Multifamily", d: "Five units and up, priced on rent roll and NOI. Occupied, partly vacant, or mid-turnaround.", Icon: IconBuilding },
  { t: "Office buildings", d: "Single tenant, multi tenant, or sitting empty.", Icon: IconOffice },
  { t: "Industrial", d: "Warehouse, flex, shop and yard space.", Icon: IconWarehouse },
];

/**
 * Each group carries its own tint and chip colour. Three quiet hues rather than
 * one repeated: the groups are genuinely different kinds of property, and the
 * colour is doing that work rather than decorating.
 */
const GROUPS = [
  { label: "Residential", items: RESIDENTIAL, tint: "var(--bpg-tint-res)", chip: "#DCEBF9", ink: "var(--bpg-accent-ink)" },
  { label: "Land", items: LAND, tint: "var(--bpg-tint-land)", chip: "#D8EFE3", ink: "var(--bpg-success)" },
  { label: "Commercial", items: COMMERCIAL, tint: "var(--bpg-tint-com)", chip: "#E7DEF6", ink: "#5B3FA8" },
];

export default function WhatWeBuy() {
  return (
    <section className="wrap py-20 sm:py-24" aria-labelledby="what-we-buy">
      <div className="text-center">
        <hr className="rule-accent centered" />
        <h2 id="what-we-buy" className="display-lg mt-6 text-[var(--bpg-ink)]">
          What we buy
        </h2>
        <p className="lede mx-auto mt-4 max-w-[36rem] text-[var(--bpg-muted)]">
          Houses, ground and commercial buildings, in any condition.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {GROUPS.map((g) => (
          <div key={g.label}>
            <h3 className="eyebrow text-[var(--bpg-accent-ink)]">{g.label}</h3>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((i) => (
                <div key={i.t} className="card card-tint card-lift p-7" style={{ background: g.tint }}>
                  <span className="chip" style={{ background: g.chip, color: g.ink }}>
                    <i.Icon />
                  </span>
                  <h4 className="mt-4 text-[1.05rem] font-semibold text-[var(--bpg-ink)]">{i.t}</h4>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-[0.95rem] text-[var(--bpg-muted)]">
        <Link
          href="/commercial"
          className="text-[var(--bpg-accent-ink)] underline decoration-[var(--bpg-accent)] underline-offset-4 hover:decoration-[var(--bpg-accent-ink)]"
        >
          More on the commercial side
        </Link>{" "}
        — how industrial districts differ across Boise, and where multifamily actually begins.
      </p>
    </section>
  );
}

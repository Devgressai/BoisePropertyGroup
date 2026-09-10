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
const RESIDENTIAL = [
  { t: "Houses", d: "Any condition. Deferred maintenance, dated, or mid-repair." },
  { t: "Rentals", d: "Occupied or vacant, up to a fourplex. Tenants, leases and deposits handled properly." },
  { t: "Inherited property", d: "Estates, probate, multiple heirs." },
];

const LAND = [
  { t: "Land & acreage", d: "Raw parcels, rural ground, well and septic property." },
  { t: "Infill lots", d: "Buildable lots, splits, previously undeveloped ground." },
  { t: "Problem property", d: "Access issues, easements, floodplain, code violations." },
];

const COMMERCIAL = [
  { t: "Multifamily", d: "Five units and up, priced on rent roll and NOI. Occupied, partly vacant, or mid-turnaround." },
  { t: "Office buildings", d: "Single tenant, multi tenant, or sitting empty." },
  { t: "Industrial", d: "Warehouse, flex, shop and yard space." },
];

function Grid({ items }: { items: { t: string; d: string }[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-[var(--bpg-border)] bg-[var(--bpg-border)] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <div key={i.t} className="bg-[var(--bpg-surface)] p-7">
          <h3 className="text-[1.05rem] font-semibold text-[var(--bpg-ink)]">{i.t}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">{i.d}</p>
        </div>
      ))}
    </div>
  );
}

export default function WhatWeBuy() {
  return (
    <section className="wrap py-20 sm:py-24" aria-labelledby="what-we-buy">
      <hr className="rule-accent" />
      <h2 id="what-we-buy" className="display-lg mt-6 max-w-[24ch] text-[var(--bpg-ink)]">
        What we buy
      </h2>

      <h3 className="eyebrow mt-11 text-[var(--bpg-muted)]">Residential</h3>
      <div className="mt-4"><Grid items={RESIDENTIAL} /></div>

      <h3 className="eyebrow mt-12 text-[var(--bpg-muted)]">Land</h3>
      <div className="mt-4"><Grid items={LAND} /></div>

      <h3 className="eyebrow mt-12 text-[var(--bpg-muted)]">Commercial</h3>
      <div className="mt-4"><Grid items={COMMERCIAL} /></div>
    </section>
  );
}

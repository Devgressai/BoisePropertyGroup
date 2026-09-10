const ITEMS = [
  { t: "Houses", d: "Any condition. Deferred maintenance, dated, or mid-repair." },
  { t: "Rentals", d: "Occupied or vacant. Tenants, leases and deposits handled properly." },
  { t: "Inherited property", d: "Estates, probate, multiple heirs." },
  { t: "Land & acreage", d: "Raw parcels, rural ground, well and septic property." },
  { t: "Infill lots", d: "Buildable lots, splits, previously undeveloped ground." },
  { t: "Problem property", d: "Access issues, easements, floodplain, code violations." },
];

export default function WhatWeBuy() {
  return (
    <section className="wrap py-20 sm:py-24" aria-labelledby="what-we-buy">
      <hr className="rule-accent" />
      <h2 id="what-we-buy" className="display-lg mt-6 max-w-[24ch] text-[var(--bpg-ink)]">
        What we buy
      </h2>
      <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-[var(--bpg-border)] bg-[var(--bpg-border)] sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((i) => (
          <div key={i.t} className="bg-[var(--bpg-surface)] p-7">
            <h3 className="text-[1.05rem] font-semibold text-[var(--bpg-ink)]">{i.t}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

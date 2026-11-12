"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * "How we calculate your offer" — the four lines, as a working tool.
 *
 * ⚠️ NO MARGIN OR RATIO IS STATED HERE. The owner has not confirmed a margin,
 * a percentage of value, or a holding-cost rate, and /how-it-works says we do
 * not present the margin as a percentage markup. So every line is a slider the
 * READER sets, the starting values are labelled placeholders, and the result is
 * labelled an illustration. Do not add a default that implies our terms (e.g.
 * "about 70% of ARV") without the owner's written confirmation.
 */
const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

const LINES = [
  { k: "arv", label: "Value once the work is done", note: "What a finished version would sell for, from comparable sales", min: 150000, max: 1200000, step: 5000, start: 450000 },
  { k: "repairs", label: "The work it needs", note: "Priced room by room, never as a lump sum", min: 0, max: 250000, step: 2500, start: 45000 },
  { k: "holding", label: "Holding and resale costs", note: "Taxes, insurance, utilities, and the cost of selling it again", min: 0, max: 120000, step: 1000, start: 30000 },
  { k: "margin", label: "The buyer's margin", note: "What the business needs for taking on the work, the time and the risk", min: 0, max: 200000, step: 2500, start: 40000 },
] as const;

type Key = (typeof LINES)[number]["k"];

export default function OfferMath() {
  const [v, setV] = useState<Record<Key, number>>(
    Object.fromEntries(LINES.map((l) => [l.k, l.start])) as Record<Key, number>,
  );
  const offer = Math.max(0, v.arv - v.repairs - v.holding - v.margin);

  return (
    <section className="on-navy section bg-[var(--bpg-navy)] text-[var(--bpg-on-navy-muted)]" aria-labelledby="offer-math">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-brass)]">The part nobody shows you</p>
          <h2 id="offer-math" className="display-lg mt-4 text-white">
            How an offer is calculated.
          </h2>
          <p className="lede mt-5">
            Every direct buyer&rsquo;s number comes from the same four lines. Most hand you the
            answer and hope you don&rsquo;t ask. Move the lines yourself and watch it change &mdash; then
            ask any buyer, including us, for theirs.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-14">
          <div className="space-y-8">
            {LINES.map((l) => (
              <div key={l.k}>
                <div className="flex items-baseline justify-between gap-4">
                  <label htmlFor={`om-${l.k}`} className="font-semibold text-white">{l.label}</label>
                  <span className="serif text-[1.35rem] text-white tabular-nums">{fmt(v[l.k])}</span>
                </div>
                <p className="mt-0.5 text-sm">{l.note}</p>
                <input
                  id={`om-${l.k}`}
                  type="range"
                  className="range mt-3"
                  min={l.min}
                  max={l.max}
                  step={l.step}
                  value={v[l.k]}
                  onChange={(e) => setV((x) => ({ ...x, [l.k]: Number(e.target.value) }))}
                />
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/12 bg-[var(--bpg-navy-soft)] p-7 sm:p-8">
            <dl className="rule-list">
              {LINES.map((l, i) => (
                <div key={l.k} className="flex items-baseline justify-between gap-4 py-4">
                  <dt className="text-[0.95rem] text-white">{l.label}</dt>
                  <dd className="serif text-[1.15rem] text-white tabular-nums">
                    {i === 0 ? "" : "−"}
                    {fmt(v[l.k])}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex items-end justify-between gap-4" aria-live="polite">
              <p className="eyebrow text-[var(--bpg-brass)]">The offer</p>
              <p className="serif text-[clamp(2.2rem,4.5vw,3rem)] font-semibold leading-none text-white tabular-nums">{fmt(offer)}</p>
            </div>
            <p className="mt-6 border-t border-white/12 pt-5 text-sm leading-relaxed">
              An illustration of the arithmetic, not a quote. The starting values are placeholders,
              not our terms. A real offer names the comparable sales behind the value and lists the
              work, so you can check every line.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href="#offer" className="btn btn-brass">
            Have us run these numbers on your property <span aria-hidden="true">→</span>
          </a>
          <Link href="/how-we-calculate-an-offer" className="text-sm font-semibold text-white underline decoration-[var(--bpg-brass)] underline-offset-4">
            Read how each line is worked out
          </Link>
        </div>
      </div>
    </section>
  );
}

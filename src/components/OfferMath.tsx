"use client";

import { useId, useState } from "react";
import Link from "next/link";
import OfferForm from "./OfferForm";
import {
  CONDITION_TIERS,
  calculateOffer,
  calculateAsIsListing,
  calculateListing,
  range,
  formatUsd,
  clampArv,
  ARV_MIN,
  ARV_MAX,
  ARV_DEFAULT,
  CONDITION_DEFAULT,
  type ConditionKey,
} from "@/lib/offer-math";

/**
 * "How an offer is calculated": the four lines, as a working tool, plus what
 * the same house nets under the two listing paths.
 *
 * Rates come from src/lib/offer-math.ts, which the owner set on 2026-11-13 to
 * the same model as their Sierra Property Buyers site. Everything shown is
 * arithmetic on two inputs the reader sets; the result is labelled an
 * illustration, and a firm number still comes from the address.
 *
 * WHAT IT IS AND IS NOT (redesign, 2026-11-13). An illustrative worksheet for
 * a house or small rental. It is not an estimate of the visitor's property and
 * not an offer, and the page says so beside the total. It does not apply to
 * land or income property, and says that too. The "sell to us" column shows
 * no line for the seller's closing costs because none has been confirmed by
 * the owner; they are named in the note as stated in the written offer.
 * The ± band is a rounding band on an illustration, never a confidence range.
 */
function Line({ label, value, minus = false, strong = false }: { label: string; value: number; minus?: boolean; strong?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3.5">
      <dt className={strong ? "font-semibold text-white" : "text-[0.95rem] text-white"}>{label}</dt>
      <dd className="serif whitespace-nowrap text-[1.12rem] text-white tabular-nums">
        {minus && value > 0 ? "−" : ""}
        {formatUsd(value)}
      </dd>
    </div>
  );
}

function Band({ value }: { value: number }) {
  const r = range(value);
  return (
    <p className="serif text-[1.6rem] leading-tight text-white tabular-nums">
      {formatUsd(r.low)}
      <span className="text-[var(--bpg-on-navy-muted)]"> – </span>
      {formatUsd(r.high)}
    </p>
  );
}

export default function OfferMath() {
  const [arv, setArvState] = useState(ARV_DEFAULT);
  /** What is typed in the box. Committed (clamped) on blur or Enter, so a half-typed figure is not corrected mid-keystroke. */
  const [arvText, setArvText] = useState(formatUsd(ARV_DEFAULT));
  const [condition, setCondition] = useState<ConditionKey>(CONDITION_DEFAULT);
  const sliderId = useId();
  const inputId = useId();

  const setArv = (n: number) => {
    setArvState(n);
    setArvText(formatUsd(n));
  };
  const commitText = () => setArv(clampArv(arvText));
  const isDefault = arv === ARV_DEFAULT && condition === CONDITION_DEFAULT;
  const reset = () => {
    setArv(ARV_DEFAULT);
    setCondition(CONDITION_DEFAULT);
  };

  const cash = calculateOffer(arv, condition);
  const asIs = calculateAsIsListing(arv, condition);
  const reno = calculateListing(arv, condition);

  const read =
    condition === "ready" || condition === "cosmetic"
      ? "On a house in this shape, listing will usually net you more than selling to us, and we will tell you so."
      : reno.net > range(cash.offer).high
        ? "Doing the work and listing nets the most on paper here, if you can fund the repairs, wait the months and carry the risk that the market moves."
        : "On a house needing this much work, selling to us and listing as it stands net about the same. The difference is the months, and who carries the risk.";

  const paths = [
    {
      t: "Sell to us",
      sub: "As it stands · your closing date",
      net: cash.offer,
      rows: [["Our offer", cash.offer, false], ["Repairs you pay", 0, true], ["Listing commission", 0, true]] as const,
    },
    {
      t: "List it as it stands",
      sub: `No work first · about ${asIs.months + 1}–${asIs.months + 2} months`,
      net: asIs.net,
      rows: [["Sale price", asIs.price, false], ["Commission", asIs.commission, true], ["Your closing costs", asIs.closing, true], [`Holding it ~${asIs.months} months`, asIs.carrying, true]] as const,
    },
    {
      t: "Do the work, then list",
      sub: `Full value · about ${reno.months}–${reno.months + 2} months`,
      net: reno.net,
      rows: [["Sale price", reno.price, false], ["Repairs you pay first", reno.repairs, true], ["Commission", reno.commission, true], ["Your closing costs", reno.closing, true], [`Holding it ~${reno.months} months`, reno.carrying, true]] as const,
    },
  ];

  return (
    <section className="on-navy section bg-[var(--bpg-navy)] text-[var(--bpg-on-navy-muted)]" aria-labelledby="offer-math">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-brass)]">The arithmetic</p>
          <h2 id="offer-math" className="display-lg mt-4 text-white">
            How an offer is calculated.
          </h2>
          <p className="lede mt-5">
            Our offer on a house comes from four lines. These are the rates we use. Set the value
            and the condition to see how the figure moves. It is an illustration, not a quote for
            your property.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-14">
          <div className="space-y-10">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <label htmlFor={inputId} className="font-semibold text-white">Value once the work is done</label>
                <input
                  id={inputId}
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  className="serif h-12 w-[10.5rem] rounded-lg border border-white/30 bg-transparent px-3 text-right text-[1.4rem] text-white tabular-nums focus:border-[var(--bpg-brass)]"
                  value={arvText}
                  aria-describedby={`${inputId}-hint`}
                  onChange={(e) => setArvText(e.target.value)}
                  onBlur={commitText}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      commitText();
                    }
                  }}
                />
              </div>
              <p id={`${inputId}-hint`} className="mt-1 text-sm">
                Not today&rsquo;s value: what a finished, updated version would sell for. Type a
                figure between $150,000 and $1,500,000, or drag.
              </p>
              <input
                id={sliderId}
                type="range"
                className="range mt-3"
                min={ARV_MIN}
                max={ARV_MAX}
                step={10_000}
                value={arv}
                aria-label="Value once the work is done, slider"
                aria-valuetext={formatUsd(arv)}
                onChange={(e) => setArv(Number(e.target.value))}
              />
              <div className="mt-1 flex justify-between text-xs"><span>$150k</span><span>$1.5M</span></div>
            </div>

            <fieldset>
              <legend className="font-semibold text-white">What shape is it in now?</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {CONDITION_TIERS.map((t) => {
                  const on = t.key === condition;
                  return (
                    <label
                      key={t.key}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-colors ${
                        on ? "border-[var(--bpg-brass)] bg-[var(--bpg-navy-soft)]" : "border-white/15 hover:border-white/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="om-condition"
                        value={t.key}
                        checked={on}
                        onChange={() => setCondition(t.key)}
                        className="mt-1 h-4 w-4 shrink-0 accent-[var(--bpg-brass)]"
                      />
                      <span>
                        <span className="block text-sm font-semibold text-white">{t.label}</span>
                        <span className="mt-0.5 block text-[0.8rem] leading-snug">{t.hint}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <button
                type="button"
                onClick={reset}
                disabled={isDefault}
                className="min-h-[44px] font-semibold text-white underline decoration-[var(--bpg-brass)] underline-offset-4 disabled:cursor-default disabled:opacity-50 disabled:no-underline"
              >
                Reset the example
              </button>
              <p>
                For houses and small rentals.{" "}
                <Link href="/sell-land-idaho" className="text-white underline underline-offset-2">Land</Link> and{" "}
                <Link href="/commercial" className="text-white underline underline-offset-2">income property</Link>{" "}
                are worked out differently.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-[var(--bpg-navy-soft)] p-7 sm:p-8">
            <dl className="rule-list">
              <Line label="Value once the work is done" value={cash.arv} />
              <Line label="The work it needs" value={cash.repairs} minus />
              <Line label={`Holding ~${cash.months} months, and reselling`} value={cash.holding} minus />
              <Line label="Our margin" value={cash.margin} minus />
            </dl>
            <div className="mt-6 flex items-end justify-between gap-4">
              <p className="eyebrow text-[var(--bpg-brass)]">Example offer</p>
              <p className="serif text-[clamp(2.2rem,4.5vw,3rem)] font-semibold leading-none text-white tabular-nums">{formatUsd(cash.offer)}</p>
            </div>
            <p className="mt-6 border-t border-white/12 pt-5 text-sm leading-relaxed">
              An illustration from the two inputs you set. It is not an estimate of your property
              and not an offer. A real offer names the comparable sales behind the value and lists
              the work line by line, so you can check every figure.
            </p>
          </div>
        </div>

        {/* The same house, three ways */}
        <div className="mt-16">
          <h3 className="serif text-[1.5rem] font-semibold text-white">What you keep, three ways</h3>
          <div className="mt-6 grid gap-x-10 md:grid-cols-3">
            {paths.map((p, i) => (
              <div key={p.t} className="pb-8">
                {/* Bar: what you keep as a share of the finished value. */}
                <div aria-hidden="true" className="mb-5 h-[5px] bg-white/12">
                  <div
                    className={`h-full transition-[width] duration-300 ${i === 0 ? "bg-[var(--bpg-brass)]" : "bg-white/70"}`}
                    style={{ width: `${Math.max(0, Math.min(100, (p.net / arv) * 100))}%` }}
                  />
                </div>
                <p className="font-semibold text-white">{p.t}</p>
                <p className="mt-0.5 text-[0.82rem]">{p.sub}</p>
                <p className="eyebrow mt-4 text-[var(--bpg-brass)]">Example proceeds</p>
                <div className="mt-1"><Band value={p.net} /></div>
                <dl className="mt-4 text-[0.88rem]">
                  {p.rows.map(([k, v, minus]) => (
                    <div key={k} className="flex justify-between gap-3 border-b border-white/10 py-2">
                      <dt>{k}</dt>
                      <dd className="whitespace-nowrap tabular-nums text-white">{minus && v > 0 ? "−" : ""}{formatUsd(v)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="serif max-w-[46rem] text-[1.25rem] leading-snug text-white">{read}</p>
          <p className="mt-4 max-w-[46rem] text-sm leading-relaxed">
            Each &ldquo;you keep&rdquo; figure is before any mortgage payoff, liens and taxes on the
            sale, which come out of the same number at closing. The ranges are the figure plus or
            minus 4%, to avoid false precision; they are not a forecast. Listing figures assume a
            5% commission and 1% seller closing costs. Both are assumptions for the example:
            commissions are negotiable and yours may differ. The first column shows no listing
            commission because no listing agent is involved, and any closing costs that fall to
            you in a sale to us are stated in the written offer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/25 pt-9 lg:grid-cols-[1fr_minmax(0,34rem)] lg:items-center lg:gap-14">
          <div>
            <p className="serif text-[1.5rem] font-semibold leading-snug text-white">
              Ask for the real figures, for your address.
            </p>
            <p className="mt-2 text-sm">
              <Link href="/how-we-calculate-an-offer" className="font-semibold text-white underline decoration-[var(--bpg-brass)] underline-offset-4">
                Read how each line is worked out
              </Link>
            </p>
          </div>
          <div data-offer-form>
            <OfferForm bar dark />
          </div>
        </div>
      </div>
    </section>
  );
}

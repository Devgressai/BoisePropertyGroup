import Image from "next/image";
import Link from "next/link";
import OfferForm from "./OfferForm";

/**
 * Hero, rebuilt 2026-11-12 as an editorial layout: headline and address bar on
 * warm paper to the left, the foothills photograph full-bleed to the right,
 * fading into the paper. On a phone the photograph sits above as a band.
 *
 * ⚠️ THE FACT STRIP IS OWNER-CONFIRMED FACTS, NOT MARKETING.
 * Own capital, closing through a local title company, the seller choosing the
 * date and any condition were each confirmed by the owner (2026-09-13) as true
 * and publishable. Nothing may join them that has not cleared the same bar —
 * in particular nothing about volume, speed records or past sellers, of which
 * this business has no publishable record. check-vocabulary.mjs enforces the
 * social-proof half of that rule; the rest is judgement, so read this first.
 */
const FACTS = [
  { t: "Our own capital", d: "No lender to wait on" },
  { t: "Local title company", d: "Holds the money, records the deed" },
  { t: "Your closing date", d: "Three weeks, or three months" },
  { t: "Any condition", d: "Sold as it stands" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--bpg-sand)]">
      {/* Photograph: a band on phones, the right half from lg up. */}
      <div className="relative h-44 sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]">
        <Image
          src="/images/hero-foothills.webp"
          alt="The Boise foothills meeting a residential neighbourhood at golden hour"
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[var(--bpg-sand)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[var(--bpg-sand)] lg:via-[rgba(247,244,238,0.25)] lg:to-transparent"
        />
      </div>

      <div className="wrap relative pb-14 pt-4 sm:pb-16 lg:py-24">
        <div className="max-w-[38rem]">
          <p className="eyebrow text-[var(--bpg-warm)]">Direct property buyer &middot; Ada County, Idaho</p>
          <h1 className="display-xl mt-5 text-[var(--bpg-ink)]">
            Sell the property{" "}
            <br className="hidden sm:block" />
            on your terms.
          </h1>
          <p className="lede mt-6 max-w-[34rem] text-[var(--bpg-muted)]">
            An inherited house, a rental you are done with, ground you have never walked. We buy
            houses, land, multifamily and commercial property across Boise and the Treasure Valley
            &mdash; and we show you the arithmetic behind every number.
          </p>

          <div id="offer" className="mt-9 scroll-mt-28">
            <OfferForm bar note="Next, a name and a phone number so we can send you the number. No obligation." />
          </div>

          <p className="mt-5 text-sm font-semibold text-[var(--bpg-ink)]">
            <Link href="/how-we-calculate-an-offer" className="no-underline hover:underline">
              See exactly how we calculate an offer <span aria-hidden="true">↓</span>
            </Link>
          </p>

          <dl className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--bpg-border)] bg-[var(--bpg-border)] shadow-[var(--bpg-shadow)] sm:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.t} className="bg-white px-4 py-4">
                <dt className="text-[0.92rem] font-semibold text-[var(--bpg-ink)]">{f.t}</dt>
                <dd className="mt-1 text-[0.82rem] leading-snug text-[var(--bpg-muted)]">{f.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

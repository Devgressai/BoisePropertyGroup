import Image from "next/image";
import Link from "next/link";
import OfferForm from "./OfferForm";
import { site, hasPhone } from "@/data/site";

/**
 * Hero (2026-11-13): headline and address bar on warm paper to the left, the
 * foothills photograph as a hard-edged block to the right, and the four facts
 * as a ruled strip across the full measure underneath. No gradients, no cards.
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
  { t: "A local title company", d: "Holds the money, records the deed" },
  { t: "Your closing date", d: "Three weeks, or three months" },
  { t: "Any condition", d: "Sold as it stands" },
];

export default function Hero() {
  return (
    <section className="bg-[var(--bpg-sand)]">
      <div className="relative isolate overflow-hidden">
        {/* Photograph: a band on phones, the right 46% from lg up. */}
        <div className="relative h-40 sm:h-64 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[46%]">
          <Image
            src="/images/hero-foothills.webp"
            alt="The Boise foothills meeting a residential neighbourhood at golden hour"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="wrap relative pb-12 pt-8 sm:pb-16 sm:pt-12 lg:py-28">
          <div className="max-w-[34rem] lg:w-[48%]">
            <p className="eyebrow text-[var(--bpg-warm)]">Direct property buyer &middot; Ada County, Idaho</p>
            <h1 className="display-xl mt-5 text-[var(--bpg-ink)]">
              Sell the property{" "}
              <br className="hidden sm:block" />
              on your terms.
            </h1>
            <p className="lede mt-6 text-[var(--bpg-muted)]">
              We buy houses, land, multifamily and commercial property in Boise and the Treasure
              Valley with our own capital, and we show you the arithmetic behind the number.
            </p>

            <div id="offer" data-offer-form className="mt-8 scroll-mt-28">
              <OfferForm bar note="Then a name and a phone number. No obligation." />
            </div>

            <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[var(--bpg-ink)]">
              {hasPhone && (
                <a href={site.phoneHref} className="no-underline hover:underline">
                  Or call {site.phone}
                </a>
              )}
              <Link href="#offer-math" className="no-underline hover:underline">
                See how we calculate an offer <span aria-hidden="true">↓</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--bpg-ink)] bg-white">
        <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f, i) => (
            <div
              key={f.t}
              className={`py-5 pr-4 lg:py-6 ${i % 2 ? "pl-5 border-l border-[var(--bpg-border)]" : ""} ${i > 1 ? "max-lg:border-t max-lg:border-[var(--bpg-border)]" : ""} ${i === 2 ? "lg:border-l lg:border-[var(--bpg-border)] lg:pl-5" : ""}`}
            >
              <dt className="serif text-[1.08rem] font-semibold leading-snug text-[var(--bpg-ink)]">{f.t}</dt>
              <dd className="mt-1 text-[0.86rem] leading-snug text-[var(--bpg-muted)]">{f.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

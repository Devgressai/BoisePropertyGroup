import Link from "next/link";
import OfferForm from "./OfferForm";
import OfferSheet from "./OfferSheet";
import { site, hasPhone } from "@/data/site";

/**
 * Hero (2026-11-13, redesign): typography and the worksheet, no photograph.
 *
 * The site holds no authentic photography. The four images it carried were
 * generated, and one was captioned as the Boise foothills, so they were
 * removed (docs/design/REDESIGN-2026-11.md). The picture here is the product:
 * a sample offer worksheet, labelled as an example, beside the address field.
 *
 * ⚠️ THE FACT STRIP IS OWNER-CONFIRMED FACTS, NOT MARKETING.
 * Own capital, closing through a local title company, the seller choosing the
 * date and any condition were each confirmed by the owner (2026-09-13) as true
 * and publishable. Nothing may join them that has not cleared the same bar,
 * in particular nothing about volume, speed records or past sellers, of which
 * this business has no publishable record.
 */
const FACTS = [
  { q: "Whose money is it?", t: "Our own capital", d: "No lender to wait on" },
  { q: "Who holds it?", t: "A local title company", d: "Holds the money, records the deed" },
  { q: "Who sets the date?", t: "You do", d: "Three weeks is realistic, or take three months" },
  { q: "What condition?", t: "Any", d: "Sold as it stands" },
];

export default function Hero() {
  return (
    <section className="bg-[var(--bpg-sand)]">
      <div className="wrap grid gap-x-16 gap-y-12 pb-14 pt-10 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:items-center lg:pb-24 lg:pt-24">
        <div className="max-w-[40rem]">
          <p className="eyebrow text-[var(--bpg-warm)]">Direct property buyer &middot; Boise, Idaho</p>
          <h1 className="display-xl mt-5 text-[var(--bpg-ink)] [text-wrap:balance]">
            We buy property in Ada County. You see the arithmetic.
          </h1>
          <p className="lede mt-6 max-w-[36rem] text-[var(--bpg-muted)]">
            Houses, land, small rentals, multifamily and commercial property, bought with our own
            capital. Every offer arrives with the figures behind it, so you can check them.
          </p>

          <div id="offer" data-offer-form className="mt-8 max-w-[36rem] scroll-mt-28">
            <OfferForm bar />
          </div>

          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[var(--bpg-ink)]">
            {hasPhone && (
              <a href={site.phoneHref} className="no-underline hover:underline">
                Or call {site.phone}
              </a>
            )}
            <Link href="#offer-math" className="no-underline hover:underline">
              See how an offer is calculated <span aria-hidden="true">↓</span>
            </Link>
          </p>
        </div>

        {/* The worksheet, set on a ruled ground like a sheet on a desk. */}
        <div className="relative lg:justify-self-end">
          <div aria-hidden="true" className="absolute -inset-x-5 -inset-y-6 hidden border border-[var(--bpg-border)] lg:block" />
          <OfferSheet className="relative w-full lg:w-[25rem]" />
        </div>
      </div>

      <div className="border-y border-[var(--bpg-ink)] bg-white">
        <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f, i) => (
            <div
              key={f.t}
              className={`py-5 pr-4 lg:py-6 ${i % 2 ? "pl-5 border-l border-[var(--bpg-border)]" : ""} ${i > 1 ? "max-lg:border-t max-lg:border-[var(--bpg-border)]" : ""} ${i === 2 ? "lg:border-l lg:border-[var(--bpg-border)] lg:pl-5" : ""}`}
            >
              <dt>
                <span className="eyebrow block !text-[0.68rem] text-[var(--bpg-warm)]">{f.q}</span>
                <span className="serif mt-1.5 block text-[1.2rem] font-semibold leading-snug text-[var(--bpg-ink)]">{f.t}</span>
              </dt>
              <dd className="mt-1 text-[0.86rem] leading-snug text-[var(--bpg-muted)]">{f.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

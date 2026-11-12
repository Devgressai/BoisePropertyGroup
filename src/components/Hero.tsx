import Image from "next/image";
import OfferForm from "./OfferForm";
import { IconCheck } from "./Icons";

/**
 * Hero, rebuilt 2026-11-12 (Palette E).
 *
 * The form is no longer a field in the middle of a centred column: it is a
 * raised panel beside the headline, the heaviest object on the screen, with
 * the one brass button on it. On a phone it comes straight after the headline,
 * before the reassurance list, so the action is on the first screen.
 *
 * ⚠️ THE CHECKLIST IS OWNER-CONFIRMED FACTS, NOT MARKETING.
 * Own capital, closing through a local title company, the seller choosing the
 * date and any condition were each confirmed by the owner (2026-09-13) as true
 * and publishable. Nothing may join them that has not cleared the same bar —
 * in particular nothing about volume, speed records or past sellers, of which
 * this business has no publishable record. check-vocabulary.mjs enforces the
 * social-proof half of that rule; the rest is judgement, so read this first.
 */
const FACTS = [
  { t: "We buy with our own capital", d: "No lender to wait on." },
  { t: "Closed by a local title company", d: "A neutral third party handles the money and the paperwork." },
  { t: "You choose the closing date", d: "Three weeks or three months." },
  { t: "Any condition, any situation", d: "Sold as it stands." },
];

export default function Hero() {
  return (
    <section className="glow-hero relative isolate overflow-hidden border-b border-[var(--bpg-border)]">
      <div className="wrap grid gap-x-14 gap-y-9 pt-12 pb-14 sm:pt-16 lg:grid-cols-[1fr_minmax(0,27.5rem)] lg:pt-20 lg:pb-20">
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <p className="eyebrow text-[var(--bpg-warm)]">Ada County &middot; Treasure Valley, Idaho</p>
          <h1 className="display-xl mt-5 text-[var(--bpg-ink)]">
            {/* The explicit space matters: with the break hidden below sm the
                two lines join, and without it they join as "propertyon". */}
            Sell the property{" "}
            <br className="hidden sm:block" />
            on your terms.
          </h1>
          <p className="lede mt-6 max-w-[36rem] text-[var(--bpg-muted)]">
            We buy houses, land, multifamily, office and industrial property across Boise, Meridian,
            Eagle, Kuna, Star and Garden City &mdash; in any condition, in any situation. You pick
            the closing date.
          </p>
        </div>

        <div id="offer" className="scroll-mt-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div className="form-panel overflow-hidden">
            <Image
              src="/images/hero-foothills.webp"
              alt="The Boise foothills meeting a residential neighbourhood at golden hour"
              width={1920}
              height={1080}
              priority
              sizes="(min-width: 1024px) 440px, 100vw"
              className="h-28 w-full object-cover object-center sm:h-36"
            />
            <div className="p-6 sm:p-7">
              <p className="display-md text-[var(--bpg-ink)]">Get your offer</p>
              <p className="mt-1.5 mb-5 text-[0.95rem] text-[var(--bpg-muted)]">
                Start with the address. One field, and we take it from there.
              </p>
              <OfferForm bare stack />
            </div>
          </div>
        </div>

        <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-start-1 lg:row-start-2 lg:self-start">
          {FACTS.map((f) => (
            <li key={f.t} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--bpg-navy)] text-[var(--bpg-primary)]">
                <IconCheck className="h-3.5 w-3.5" />
              </span>
              <span>
                <span className="block font-semibold leading-snug text-[var(--bpg-ink)]">{f.t}</span>
                <span className="mt-0.5 block text-[0.92rem] leading-relaxed text-[var(--bpg-muted)]">{f.d}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

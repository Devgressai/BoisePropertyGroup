import Image from "next/image";
import OfferForm from "./OfferForm";
import { IconWallet, IconShield, IconCalendar, IconHouse } from "./Icons";

/**
 * Light hero, 2026-09-16; warmed and given its reassurance row 2026-09-17.
 *
 * The previous version was a full-bleed photograph behind a near-black scrim.
 * The copy and the form now sit on a sunrise wash, centred, and the foothills
 * photograph sits below them at full strength.
 *
 * ⚠️ THE PILLS ARE OWNER-CONFIRMED FACTS, NOT MARKETING.
 * Own capital, closing through a local title company and the seller choosing
 * the date were each confirmed by the owner (2026-09-13) as true and
 * publishable. Nothing may join them that has not cleared the same bar — in
 * particular nothing about volume, speed records or past sellers, of which this
 * business has no publishable record. check-vocabulary.mjs enforces the
 * social-proof half of that rule; the rest is judgement, so read this first.
 */
const PILLS = [
  { Icon: IconWallet, label: "We buy with our own capital" },
  { Icon: IconShield, label: "Closing with a local title company" },
  { Icon: IconCalendar, label: "You choose the closing date" },
  { Icon: IconHouse, label: "Any condition, any situation" },
];

export default function Hero() {
  return (
    <section className="glow-hero relative isolate overflow-hidden">
      <div className="wrap pt-16 pb-10 text-center sm:pt-24">
        <p className="eyebrow text-[var(--bpg-accent-ink)]">Ada County &middot; Treasure Valley, Idaho</p>
        <h1 className="display-xl mx-auto mt-5 text-[var(--bpg-ink)]">
          {/* The explicit space matters: with the break hidden below sm the two
              lines join, and without it they join as "propertyon your terms". */}
          Sell the property{" "}
          <br className="hidden sm:block" />
          on your terms.
        </h1>
        <p className="lede mx-auto mt-6 max-w-[40rem] text-[var(--bpg-muted)]">
          We buy houses, land, multifamily, office and industrial property across Boise, Meridian,
          Eagle, Kuna, Star and Garden City &mdash; in any condition, in any situation. You pick
          the closing date.
        </p>

        <div className="mx-auto mt-9 max-w-[36rem] text-left">
          <OfferForm />
        </div>

        <ul className="mx-auto mt-8 flex max-w-[70rem] flex-wrap justify-center gap-2.5">
          {PILLS.map(({ Icon, label }) => (
            <li key={label} className="pill">
              <Icon className="text-[var(--bpg-accent-ink)]" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap pb-6 sm:pb-10">
        <div className="card overflow-hidden">
          <Image
            src="/images/hero-foothills.webp"
            alt="The Boise foothills meeting a residential neighbourhood at golden hour"
            width={1920}
            height={1080}
            priority
            sizes="(min-width: 1200px) 1160px, 100vw"
            className="h-[16rem] w-full object-cover object-center sm:h-[24rem] lg:h-[30rem]"
          />
        </div>
      </div>
    </section>
  );
}

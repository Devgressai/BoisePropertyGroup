import Image from "next/image";
import OfferForm from "./OfferForm";

/**
 * Light hero, 2026-09-16. The previous version was a full-bleed photograph
 * behind a near-black scrim; the owner asked for a lighter, happier page, so
 * the copy and the form now sit on white, centred, and the foothills
 * photograph sits below them in a rounded frame at full strength.
 */
export default function Hero() {
  return (
    <section className="glow relative isolate overflow-hidden">
      <div className="wrap pt-16 pb-10 text-center sm:pt-24">
        <p className="eyebrow text-[var(--bpg-accent-ink)]">Ada County &middot; Treasure Valley, Idaho</p>
        <h1 className="display-xl mx-auto mt-5 text-[var(--bpg-ink)]">
          Sell the property
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

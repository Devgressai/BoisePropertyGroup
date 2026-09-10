import Image from "next/image";
import OfferForm from "./OfferForm";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--bpg-ink)]">
      <Image
        src="/images/hero-foothills.webp"
        alt="The Boise foothills meeting a residential neighbourhood at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      {/* Gradient carries text contrast without washing the photograph out. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[var(--bpg-ink)] via-[var(--bpg-ink)]/85 to-[var(--bpg-ink)]/35"
      />
      <div className="wrap relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-[46rem]">
          <p className="eyebrow text-[var(--bpg-accent)]">
            Ada County &middot; Treasure Valley, Idaho
          </p>
          <h1 className="display-xl mt-5 text-white">
            Sell the property
            <br />
            on your terms.
          </h1>
          <p className="lede mt-6 max-w-[38rem] text-white/85">
            We buy houses, land and problem property across Boise, Meridian, Eagle, Kuna, Star and
            Garden City &mdash; in any condition, in any situation. You pick the closing date.
          </p>

          <div className="mt-9 max-w-[34rem]">
            <OfferForm tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}

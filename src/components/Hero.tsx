import Image from "next/image";
import OfferForm from "./OfferForm";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--bpg-ink)]">
      {/* Photograph renders at FULL strength — no opacity, no colour tint.
          Legibility comes from a scrim confined to the text column instead, so
          the image itself is never washed out. */}
      <Image
        src="/images/hero-foothills.webp"
        alt="The Boise foothills meeting a residential neighbourhood at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Desktop: solid behind the copy, fully transparent across the right of
          the frame, so the photograph is genuinely untinted where it shows. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, var(--bpg-ink) 0%, var(--bpg-ink) 30%, rgba(26,33,28,0.72) 46%, rgba(26,33,28,0) 68%)",
        }}
      />
      {/* Small viewports: the copy spans the full width, so the scrim has to as
          well. Bottom-weighted keeps the sky and hills clear. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,33,28,0.55) 0%, rgba(26,33,28,0.80) 42%, var(--bpg-ink) 100%)",
        }}
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
          <p className="lede mt-6 max-w-[38rem] text-white/90">
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

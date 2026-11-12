import Image from "next/image";
import Link from "next/link";

/**
 * A photograph-and-copy band between the process and the evidence sections.
 *
 * ⚠️ THIS IS NOT A TESTIMONIAL, AND MUST NEVER BECOME ONE.
 *
 * The people in these photographs are not our clients, are not our staff, and
 * are not real. There is no transaction history on this site — the PRIME
 * CONSTRAINT in docs/COMMERCIAL-MASTER-RUNTIME.md prohibits implying one — so
 * no image may carry a name, a quote, a star rating, a location caption, a
 * "sold in X days" line, or any framing that presents it as a record of
 * something that happened.
 *
 * Illustrative photography is ordinary and honest. Photography dressed as
 * evidence is not, and on a site whose entire differentiator is that every
 * claim is checkable, it would cost more than it earns.
 * scripts/validation/check-vocabulary.mjs enforces this.
 */
export default function HumanScale() {
  return (
    <section className="section bg-white" aria-labelledby="human-scale">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-[34rem]">
          <p className="eyebrow text-[var(--bpg-warm)]">Before anything else</p>
          <h2 id="human-scale" className="display-lg mt-4 text-[var(--bpg-ink)]">
            Most of this is a conversation, not a transaction.
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            A property sale usually arrives mid-something — an estate to settle, a rental someone is done
            with, ground inherited and never seen. The property question is usually the
            easiest part of it.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--bpg-muted)]">
            You can ask us what a number would look like without deciding anything, and we will
            tell you when selling to a buyer like us is the wrong move.
          </p>
          <Link href="/how-it-works" className="btn btn-secondary mt-8 inline-flex !min-h-[46px] !px-6">
            How it actually works
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/porch-conversation.webp"
            alt="Two people talking on the covered porch of a single-storey Idaho house at the end of the day"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-[18rem] w-full object-cover object-center sm:h-[24rem] lg:h-[26rem]"
          />
        </div>
      </div>
    </section>
  );
}

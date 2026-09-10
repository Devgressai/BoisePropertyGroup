import Image from "next/image";
import Link from "next/link";

/**
 * A full-bleed image band between the process and the evidence sections.
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
    <section className="relative isolate overflow-hidden" aria-labelledby="human-scale">
      <div className="relative min-h-[26rem] lg:min-h-[32rem]">
        <Image
          src="/images/porch-conversation.webp"
          alt="Two people talking on the covered porch of a single-storey Idaho house at the end of the day"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,33,28,0.92) 0%, rgba(26,33,28,0.82) 34%, rgba(26,33,28,0.28) 62%, rgba(26,33,28,0.05) 100%)",
          }}
        />
        <div className="wrap relative flex min-h-[26rem] items-center py-16 lg:min-h-[32rem]">
          <div className="max-w-[34rem]">
            <hr className="rule-accent" />
            <h2 id="human-scale" className="display-lg mt-6 text-white">
              Most of this is a conversation, not a transaction.
            </h2>
            <p className="lede mt-5 text-white/80">
              People come to us mid-something — an estate to settle, a rental they are done with,
              ground they inherited and have never seen. The property question is usually the
              easiest part of it.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              You can ask us what a number would look like without deciding anything, and we will
              tell you when selling to a buyer like us is the wrong move. That happens more than
              you would expect.
            </p>
            <Link
              href="/how-it-works"
              className="btn btn-onDark mt-8 inline-flex !min-h-[46px] !px-6"
            >
              How it actually works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

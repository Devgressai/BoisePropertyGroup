import Link from "next/link";
import { site, hasPhone } from "@/data/site";

/**
 * "Who you are dealing with": the accountability section.
 *
 * A seller should not have to read the About page to learn who receives the
 * enquiry. Everything here is already published elsewhere on the site and true
 * of the code: own capital and the title company (owner, 2026-09-13), the
 * early-stage statement (/about), and where an enquiry goes (/privacy-policy,
 * src/app/api/offer/route.ts: one inbox, no partners).
 *
 * ⚠️ There are no names, portraits, reviews, counts or years here because the
 * owner has published none (the site is anonymous by the owner's decision).
 * Do not add any. If the owner supplies a name or a photograph, it goes here.
 */
const POINTS = [
  {
    t: "We are the buyer",
    d: "We purchase with our own capital. Your enquiry is not passed to another company to bid on.",
  },
  {
    t: "We are early, and we say so",
    d: "You will find no reviews, sold counts or awards on this site, because we will not invent them. Judge us on the offer and its arithmetic.",
  },
  {
    t: "A title company stands in the middle",
    d: "A local title company holds the money, records the deed and pays you. You never hand a deed to us directly.",
  },
  {
    t: "Your details stay here",
    d: "The form goes to our inbox and nowhere else. No marketing partners, no tracking scripts.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="section bg-white" aria-labelledby="who-we-are">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">Who you are dealing with</p>
          <h2 id="who-we-are" className="display-lg mt-4 text-[var(--bpg-ink)]">
            A direct buyer in Ada County, and what we will not claim.
          </h2>
        </div>
        <dl className="section-body mt-10 grid gap-x-12 md:grid-cols-2">
          {POINTS.map((p) => (
            <div key={p.t} className="border-t border-[var(--bpg-border)] py-6">
              <dt className="serif text-[1.2rem] font-semibold leading-snug text-[var(--bpg-ink)]">{p.t}</dt>
              <dd className="mt-2 leading-relaxed text-[var(--bpg-muted)]">{p.d}</dd>
            </div>
          ))}
        </dl>
        <p className="section-body mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.95rem]">
          {hasPhone && (
            <a href={site.phoneHref} className="serif text-[1.35rem] font-semibold text-[var(--bpg-ink)] no-underline hover:underline">
              {site.phone}
            </a>
          )}
          <Link href="/about" className="font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4">
            About us
          </Link>
          <Link href="/how-to-check-a-cash-buyer-in-idaho" className="font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4">
            How to check any cash buyer
          </Link>
          <Link href="/privacy-policy" className="font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4">
            Privacy policy
          </Link>
        </p>
      </div>
    </section>
  );
}

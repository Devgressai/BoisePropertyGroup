import Link from "next/link";

/**
 * "You will usually net more by listing" — stated plainly.
 *
 * A trust mechanism and the most citable thing on the site: competitors will
 * not write it. The figures live in the calculator above (OfferMath) and on
 * /cash-offer-vs-listing-idaho; this section is the three cases in words.
 */
const CASES = [
  {
    t: "The house is in good shape and you have time",
    d: "A tidy, financeable house with a few months of runway will almost always net more on the open market, even after commission.",
  },
  {
    t: "Price is the only thing that matters",
    d: "We are not the highest bidder. We are the certain one: our own capital, no lender, your date.",
  },
  {
    t: "You already have a strong offer",
    d: "If a financed buyer has offered near asking and can close, take it. We will not beat that number.",
  },
];

export default function WhenNotToSell() {
  return (
    <section className="section bg-white" aria-labelledby="wrong-move">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">When not to sell to us</p>
          <h2 id="wrong-move" className="display-lg mt-4 text-[var(--bpg-ink)]">
            You will usually net more by listing.
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            A direct sale buys certainty and time, and costs some of the price. In three cases that
            trade is wrong. If your property is one of them, we will tell you.
          </p>
        </div>

        <ol className="section-body mt-10">
          {CASES.map((c) => (
            <li
              key={c.t}
              className="grid gap-x-8 gap-y-1 border-t border-[var(--bpg-border)] py-5 last:border-b md:grid-cols-[19rem_1fr]"
            >
              <h3 className="serif text-[1.15rem] font-semibold leading-snug text-[var(--bpg-ink)]">{c.t}</h3>
              <p className="leading-relaxed text-[var(--bpg-muted)]">{c.d}</p>
            </li>
          ))}
        </ol>

        <div className="section-body mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/cash-offer-vs-listing-idaho" className="btn btn-secondary">
            Compare the two for your property
          </Link>
          <Link href="/how-to-check-a-cash-buyer-in-idaho" className="text-sm font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4">
            How to check any cash buyer
          </Link>
        </div>
      </div>
    </section>
  );
}

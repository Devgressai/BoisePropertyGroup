import Link from "next/link";

/**
 * "You will usually net more by listing" — stated plainly, then compared.
 *
 * A trust mechanism and the most citable thing on the site: competitors will
 * not write it. The comparison is qualitative ON PURPOSE — no commission rate,
 * day count or dollar figure appears, because none is owner-confirmed or
 * sourced. The worked arithmetic lives on /cash-offer-vs-listing-idaho.
 */
const CASES = [
  {
    t: "The house is in good shape and you have time",
    d: "A tidy, financeable house with a few months of runway will almost always net more on the open market, even after commission.",
  },
  {
    t: "Price is the only thing that matters",
    d: "We are not the highest bidder. We are the certain one. Those are different products.",
  },
  {
    t: "You already have a strong offer",
    d: "If a financed buyer has offered near asking and can close, take it. We will not beat that number.",
  },
];

const ROWS: [string, string, string][] = [
  ["Repairs before selling", "None — we buy it as it stands", "Usually what a financed buyer's lender requires"],
  ["Showings", "No open houses or public showings", "Ongoing, often on short notice"],
  ["Certainty of closing", "No lender involved: we use our own capital", "Can fall through on the buyer's loan or inspection"],
  ["Condition accepted", "Any", "Any — but one a lender won't finance reaches mostly cash buyers"],
  ["Closing date", "Yours to choose", "Negotiated, and tied to the buyer's loan"],
  ["What you clear", "Lower", "Usually the highest"],
];

export default function WhenNotToSell() {
  return (
    <section className="section bg-white" aria-labelledby="wrong-move">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">The comparison, run honestly</p>
          <h2 id="wrong-move" className="display-lg mt-4 text-[var(--bpg-ink)]">
            You will usually net more by listing.
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            A direct sale buys certainty and time, and it costs you some of the price. Sometimes
            that trade is wrong. Here is when &mdash; and if your property is one of these, we will
            say so.
          </p>
        </div>

        <div className="mt-12 grid gap-x-12 md:grid-cols-3">
          {CASES.map((c) => (
            <div key={c.t} className="border-t-2 border-[var(--bpg-ink)] pt-5 pb-8">
              <h3 className="serif text-[1.25rem] font-semibold leading-snug text-[var(--bpg-ink)]">{c.t}</h3>
              <p className="mt-2.5 leading-relaxed text-[var(--bpg-muted)]">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-[0.95rem]">
            <caption className="sr-only">Selling to a direct buyer compared with listing through an agent</caption>
            <thead>
              <tr className="border-b border-[var(--bpg-ink)]">
                <th scope="col" className="w-[26%] py-4 pr-4 font-semibold text-[var(--bpg-muted)]"><span className="sr-only">Factor</span></th>
                <th scope="col" className="serif py-4 pr-4 text-[1.15rem] font-semibold text-[var(--bpg-ink)]">Selling to us</th>
                <th scope="col" className="serif py-4 text-[1.15rem] font-semibold text-[var(--bpg-ink)]">Listing with an agent</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([k, us, them]) => (
                <tr key={k} className="border-b border-[var(--bpg-border)] align-top">
                  <th scope="row" className="py-4 pr-4 font-semibold text-[var(--bpg-ink)]">{k}</th>
                  <td className="py-4 pr-4 text-[var(--bpg-muted)]">{us}</td>
                  <td className="py-4 text-[var(--bpg-muted)]">{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/cash-offer-vs-listing-idaho" className="btn btn-secondary">
            Compare the two for your property
          </Link>
          <a href="#offer" className="text-sm font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4">
            or ask us which applies to yours
          </a>
        </div>
      </div>
    </section>
  );
}

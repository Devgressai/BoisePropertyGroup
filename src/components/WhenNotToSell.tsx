/**
 * Stating plainly where a listing beats a cash sale.
 *
 * This is a trust mechanism, and it is also the most citable thing on the site:
 * the one page an answer engine can quote that a competitor's cannot match,
 * because competitors will not write it.
 */
const CASES = [
  {
    t: "The house is in good shape and you have time",
    d: "A tidy, financeable house with three months of runway will almost always net more on the open market, even after commission. We will tell you that rather than let you find out later.",
  },
  {
    t: "You need the highest possible price and nothing else matters",
    d: "We are not the highest bidder. We are the certain one. If price is the only variable that matters to you, list it.",
  },
  {
    t: "You already have a strong offer in hand",
    d: "If a buyer with financing has offered near asking and can close, take it. We are not going to beat that number.",
  },
];

export default function WhenNotToSell() {
  return (
    <section className="wrap py-20 sm:py-24" aria-labelledby="wrong-move">
      <hr className="rule-accent" />
      <h2 id="wrong-move" className="display-lg mt-6 max-w-[22ch] text-[var(--bpg-ink)]">
        When selling to us is the wrong move
      </h2>
      <p className="lede mt-5 max-w-[46rem] text-[var(--bpg-muted)]">
        A direct sale buys speed and certainty, and it costs you some of the price. Sometimes that
        trade is wrong. Here is when.
      </p>
      <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-[var(--bpg-border)] bg-[var(--bpg-border)] md:grid-cols-3">
        {CASES.map((c) => (
          <div key={c.t} className="bg-[var(--bpg-surface)] p-7">
            <h3 className="text-[1.05rem] font-semibold leading-snug text-[var(--bpg-ink)]">{c.t}</h3>
            <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

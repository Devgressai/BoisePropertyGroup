import Link from "next/link";

/**
 * The questions sellers ask before they send an address, answered in the open
 * (not folded into an accordion: an answer nobody opens answers nothing).
 *
 * ⚠️ EVERY ANSWER IS AN OWNER-CONFIRMED FACT OR SITE POLICY ALREADY PUBLISHED.
 * Own capital, local title company, seller's date, three weeks realistic, any
 * condition (owner, 2026-09-13); no partners and no sale of details (owner,
 * 2026-11-13, /privacy-policy); the method on /how-we-calculate-an-offer.
 * Do NOT add a promise that is not confirmed: nothing about the price never
 * changing, response times, fees, or not assigning contracts.
 */
/** `text` is the plain-text form of an answer that contains a link, for structured data. */
export const QA: { q: string; a: React.ReactNode; text?: string }[] = [
  {
    q: "Will your offer be lower than listing would get me?",
    a: "Usually, yes. A direct sale trades some of the price for certainty and time. The calculator above shows the difference in dollars, and on a house in good shape we will tell you to list it.",
  },
  {
    q: "What can change the number?",
    a: "Facts. An inspection report, receipts for a new roof, a survey, a rent roll. Each one replaces an assumption of ours with a fact, and you can see which line moved.",
  },
  {
    q: "Do I have to fix anything first?",
    a: "No. We buy the property as it stands, in any condition.",
  },
  {
    q: "How long does it take?",
    a: "You pick the closing date. Three weeks is realistic, and if you need three months for a move or a probate hearing, the date is still yours.",
  },
  {
    q: "What does it commit me to?",
    a: "Nothing. Asking for a number carries no obligation, and neither does hearing it. Take it to family or an agent and compare.",
  },
  {
    q: "What happens to my details?",
    text: "They stay with us. We do not sell them or pass them to other companies for marketing. The privacy policy is one page.",
    a: (
      <>
        They stay with us. We do not sell them or pass them to other companies for marketing. The{" "}
        <Link href="/privacy-policy" className="text-[var(--bpg-accent-ink)] underline underline-offset-2">privacy policy</Link>{" "}
        is one page.
      </>
    ),
  },
];

/** The same questions and answers, as text, for the page's FAQPage node. */
export const QA_TEXT = QA.map((x) => ({ q: x.q, a: x.text ?? (x.a as string) }));

export default function Questions() {
  return (
    <section className="section bg-[var(--bpg-sand)]" aria-labelledby="questions">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">Before you send it</p>
          <h2 id="questions" className="display-lg mt-4 text-[var(--bpg-ink)]">
            What sellers ask first.
          </h2>
        </div>
        <dl className="section-body mt-10 grid gap-x-12 md:grid-cols-2">
          {QA.map((x) => (
            <div key={x.q} className="border-t border-[var(--bpg-border)] py-6">
              <dt className="serif text-[1.2rem] font-semibold leading-snug text-[var(--bpg-ink)]">{x.q}</dt>
              <dd className="mt-2 leading-relaxed text-[var(--bpg-muted)]">{x.a}</dd>
            </div>
          ))}
        </dl>
        <p className="section-body mt-6 text-[0.95rem] text-[var(--bpg-muted)]">
          Checking us out first is sensible.{" "}
          <Link href="/how-to-check-a-cash-buyer-in-idaho" className="font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4">
            How to check any cash buyer in Idaho
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

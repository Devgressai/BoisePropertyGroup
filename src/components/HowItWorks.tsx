import Link from "next/link";

/**
 * The process as a numbered timeline.
 *
 * Time labels are deliberately conditional ("When you accept", "Your call").
 * The owner has confirmed the seller picks the date and that three weeks is
 * realistic; no response-time or same-day promise has been confirmed, so none
 * appears here.
 */
const STEPS = [
  { when: "Day one", t: "You send the address", d: "Then a name and a phone number. That is the whole of what we ask to start." },
  { when: "Before we call", t: "We look the property up", d: "Parcel record, assessed value, zoning, floodplain maps. Most of it is public, and we do it before we bother you." },
  { when: "Next", t: "We value it", d: "For a house, comparable sales nearby — and since Idaho does not publish sale prices, we tell you which ones we used. For income property, the rent roll and the real operating costs." },
  { when: "With the number", t: "You get the working, not just the answer", d: "The value we used, the work we priced, the holding costs and the margin. If the number disappoints you, the working shows where we might be wrong." },
  { when: "As long as you need", t: "You decide", d: "No obligation. Talk to family, get a second opinion, compare it with listing." },
  { when: "When you accept", t: "Escrow opens with a local title company", d: "A neutral third party holds the money and handles the paperwork. We fund the purchase with our own capital." },
  { when: "Your call", t: "You pick the closing date", d: "A three-week close is realistic. If you need longer — a move, a school year, a probate hearing — the date is yours." },
  { when: "Closing day", t: "Title records the sale and pays you", d: "The deed is recorded and the title company pays out the proceeds." },
];

export default function HowItWorks() {
  return (
    <section className="section bg-[var(--bpg-sand)]" aria-labelledby="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">The process</p>
          <h2 id="how-it-works" className="display-lg mt-4 text-[var(--bpg-ink)]">
            Eight steps, from the address to the money.
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            Most of the stress in selling comes from not knowing what happens next. Here is the
            whole thing, including the parts where nothing is expected of you.
          </p>
        </div>

        <ol className="mt-12">
          {STEPS.map((s, i) => (
            <li
              key={s.t}
              className="grid gap-x-8 gap-y-1 border-t border-[var(--bpg-border)] py-7 last:border-b md:grid-cols-[4rem_11rem_1fr]"
            >
              <span aria-hidden="true" className="serif text-[1.6rem] leading-none text-[var(--bpg-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="eyebrow pt-1 text-[var(--bpg-warm)]">{s.when}</span>
              <div>
                <h3 className="serif text-[1.3rem] font-semibold text-[var(--bpg-ink)]">{s.t}</h3>
                <p className="mt-2 max-w-[42rem] leading-relaxed text-[var(--bpg-muted)]">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-[40rem] text-[1.02rem] leading-relaxed text-[var(--bpg-muted)]">
          Nothing above obligates you, including the offer. Walking away at any stage is a normal
          outcome, not a failure.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href="#offer" className="btn btn-primary">
            Start with step one <span aria-hidden="true">→</span>
          </a>
          <Link href="/how-it-works" className="text-sm font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4">
            Read the longer version
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

/**
 * The process in four steps. The long version (eight) lives on /how-it-works.
 *
 * Time labels are deliberately conditional. The owner has confirmed the seller
 * picks the date and that three weeks is realistic; no response-time or
 * same-day promise has been confirmed, so none appears here.
 */
const STEPS = [
  { t: "You send the address", d: "Then a name and a phone number. That is all we ask to start." },
  { t: "We send the number, with the working", d: "The comparable sales we used, the work priced line by line, the holding costs and our margin. Idaho does not publish sale prices, so we tell you which sales we relied on." },
  { t: "You decide", d: "No obligation. Take it to family, get a second opinion, compare it with listing." },
  { t: "A local title company closes it", d: "It holds the money, records the deed and pays you. We buy with our own capital, on the date you pick. Three weeks is realistic." },
];

export default function HowItWorks() {
  return (
    <section className="section bg-white" aria-labelledby="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">The process</p>
          <h2 id="how-it-works" className="display-lg mt-4 text-[var(--bpg-ink)]">
            Four steps, from the address to the money.
          </h2>
        </div>

        <ol className="mt-10 grid gap-x-8 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.t}
              className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-t border-[var(--bpg-border)] py-6 lg:block lg:border-t-2 lg:border-[var(--bpg-ink)] lg:pb-0 lg:pt-5"
            >
              <span aria-hidden="true" className="serif text-[1.5rem] leading-none text-[var(--bpg-accent)] lg:text-[2.4rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-5">
                <h3 className="serif text-[1.25rem] font-semibold leading-snug text-[var(--bpg-ink)]">{s.t}</h3>
                <p className="mt-1.5 leading-relaxed text-[var(--bpg-muted)] lg:text-[0.95rem]">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap lg:mt-12 items-center gap-x-6 gap-y-3">
          <a href="#offer" className="btn btn-primary">
            Start with the address <span aria-hidden="true">→</span>
          </a>
          <Link href="/how-it-works" className="text-sm font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4">
            The full process, step by step
          </Link>
        </div>
      </div>
    </section>
  );
}

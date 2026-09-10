import Image from "next/image";
const STEPS = [
  {
    n: "01",
    t: "Tell us the address",
    d: "That is the whole first step. We pull the parcel record, comparable sales and what the property actually is before we ask you anything else.",
  },
  {
    n: "02",
    t: "We show you the number and the maths",
    d: "Not just an offer — the after-repair value we used, the work we think it needs, our holding costs and the spread we run on. You can check every line.",
  },
  {
    n: "03",
    t: "You choose the date",
    d: "Accept, and we open escrow with a local title company. Need three weeks, or three months? Your call, not ours.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[var(--bpg-sand)] py-20 sm:py-24" aria-labelledby="how-it-works">
      <div className="wrap">
        <hr className="rule-accent" />
        <h2 id="how-it-works" className="display-lg mt-6 text-[var(--bpg-ink)]">
          How it works
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span
                className="display-md block text-[var(--bpg-accent-ink)]"
                aria-hidden="true"
              >
                {s.n}
              </span>
              <h3 className="mt-3 text-[1.15rem] font-semibold text-[var(--bpg-ink)]">{s.t}</h3>
              <p className="mt-2.5 leading-relaxed text-[var(--bpg-muted)]">{s.d}</p>
            </li>
          ))}
        </ol>

        {/* Illustrative photography. Not a client, not a completed sale — see
            the note in HumanScale.tsx. It sits here because the third step is
            the one people picture, and a wall of text about escrow does not. */}
        <div className="mt-14 overflow-hidden rounded-sm border border-[var(--bpg-border)]">
          <Image
            src="/images/keys-handover.webp"
            alt="A house key being passed from one person to another across a wooden table"
            width={1024}
            height={768}
            sizes="(min-width: 1200px) 1152px, 100vw"
            className="h-[16rem] w-full object-cover object-center sm:h-[20rem]"
          />
        </div>
      </div>
    </section>
  );
}

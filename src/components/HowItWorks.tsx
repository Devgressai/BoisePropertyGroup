import Image from "next/image";
import { IconPin, IconMath, IconCalendar } from "./Icons";

const STEPS = [
  {
    n: "1",
    t: "Tell us the address",
    d: "That is the whole first step. We pull the parcel record, comparable sales and what the property actually is before we ask you anything else.",
    Icon: IconPin,
    chip: "#DCEBF9",
    ink: "var(--bpg-accent-ink)",
  },
  {
    n: "2",
    t: "We show you the number and the maths",
    d: "Not just an offer — the after-repair value we used, the work we think it needs, our holding costs and the spread we run on. You can check every line.",
    Icon: IconMath,
    chip: "#D8EFE3",
    ink: "var(--bpg-success)",
  },
  {
    n: "3",
    t: "You choose the date",
    d: "Accept, and we open escrow with a local title company. Need three weeks, or three months? Your call, not ours.",
    Icon: IconCalendar,
    chip: "#FBE8CE",
    ink: "var(--bpg-warm)",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[var(--bpg-sand)] py-20 sm:py-24" aria-labelledby="how-it-works">
      <div className="wrap">
        <div className="text-center">
          <hr className="rule-accent centered" />
          <h2 id="how-it-works" className="display-lg mt-6 text-[var(--bpg-ink)]">
            How it works
          </h2>
          <p className="lede mx-auto mt-4 max-w-[36rem] text-[var(--bpg-muted)]">
            Three steps, and you are in charge of the last one.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="card card-lift p-7">
              <div className="flex items-center gap-3.5">
                <span className="chip" style={{ background: s.chip, color: s.ink }}>
                  <s.Icon />
                </span>
                <span className="eyebrow text-[var(--bpg-muted)]" aria-hidden="true">
                  Step {s.n}
                </span>
              </div>
              <h3 className="mt-4 text-[1.15rem] font-semibold text-[var(--bpg-ink)]">{s.t}</h3>
              <p className="mt-2.5 leading-relaxed text-[var(--bpg-muted)]">{s.d}</p>
            </li>
          ))}
        </ol>

        {/* Illustrative photography. Not a client, not a completed sale — see
            the note in HumanScale.tsx. It sits here because the third step is
            the one people picture, and a wall of text about escrow does not. */}
        <div className="card mt-10 overflow-hidden">
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

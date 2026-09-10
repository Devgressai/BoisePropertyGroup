import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How we underwrite a property in Ada County: what we look at, how we reach a number, and what we show you about it.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  {
    n: "01",
    t: "You give us the address",
    d: [
      "That is genuinely the whole first step. Before asking you anything else we pull the parcel record, the assessed value and history, comparable sales, and what the property actually is — zoning, lot, structure, and whether it sits in a mapped floodplain or an overlay.",
      "Most of that is public. We would rather do the work than make you describe it.",
    ],
  },
  {
    n: "02",
    t: "We underwrite it",
    d: [
      "Four numbers decide an offer: what the property is worth once it is fixed, what fixing it costs, what it costs us to hold it while that happens, and the spread we need to make the transaction worth doing.",
      "For income property the same discipline applies to rent roll, vacancy, and what the operating expenses actually are rather than what a pro forma claims.",
    ],
  },
  {
    n: "03",
    t: "We show you the arithmetic",
    d: [
      "You get the number and the working behind it — the after-repair value we used, the scope we priced, the holding period we assumed, and the margin. Every input is one you can check against the same public records we used.",
      "We do not label that margin profit and we do not present it as a percentage markup. It is the spread the business runs on, and stating it plainly is the point.",
    ],
  },
  {
    n: "04",
    t: "You choose the date, and we close",
    d: [
      "If you accept, we open escrow with a local title company. Timing is yours — a fast close where speed is the point, or months where it is not.",
      "We do not tie a property up and shop the contract to someone else. If we agree a number, we are the buyer.",
    ],
  },
];

export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="bg-[var(--bpg-ink)] py-16 text-white sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-accent)]">Process</p>
            <h1 className="display-xl mt-4 max-w-[16ch] text-white">How it works</h1>
            <p className="lede mt-6 max-w-[44rem] text-white/85">
              An offer is arithmetic, not a negotiating position. Here is the arithmetic.
            </p>
          </div>
        </header>

        <div className="wrap py-16 sm:py-20">
          <ol className="max-w-[46rem] space-y-14">
            {STEPS.map((s) => (
              <li key={s.n}>
                <span className="display-md block text-[var(--bpg-accent-ink)]" aria-hidden="true">{s.n}</span>
                <h2 className="display-md mt-2 text-[var(--bpg-ink)]">{s.t}</h2>
                <div className="mt-4 space-y-4">
                  {s.d.map((p) => <p key={p.slice(0, 30)} className="leading-relaxed">{p}</p>)}
                </div>
              </li>
            ))}
          </ol>
        </div>
        {/* Illustrative photography — not a client and not a completed sale.
          See the note in components/HumanScale.tsx. */}
      <div className="wrap pb-16">
        <div className="overflow-hidden rounded-sm border border-[var(--bpg-border)]">
          <Image
            src="/images/people-kitchen-table.webp"
            alt="Two people sitting at a kitchen table with an open folder of paperwork between them"
            width={1024}
            height={768}
            sizes="(min-width: 1200px) 1152px, 100vw"
            className="h-[18rem] w-full object-cover object-center sm:h-[24rem]"
          />
        </div>
      </div>

      <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

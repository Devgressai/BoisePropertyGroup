import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides — Selling Property in Idaho",
  description:
    "What Idaho statutes actually say about probate sales, foreclosure and tax deeds, selling with tenants, and disclosure. Sourced, quoted and dated.",
  alternates: { canonical: "/guides" },
};

export default function GuidesHub() {
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="bg-[var(--bpg-ink)] py-16 text-white sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-accent)]">Idaho property</p>
            <h1 className="display-xl mt-4 max-w-[14ch] text-white">Guides</h1>
            <p className="lede mt-6 max-w-[46rem] text-white/85">
              What the statutes actually say — quoted, attributed and dated. Written because most of
              what is published about selling property in Idaho is either generic or wrong, and a
              seller making a decision deserves better than either.
            </p>
          </div>
        </header>

        <div className="wrap py-16">
          <ul className="grid gap-px overflow-hidden rounded-sm border border-[var(--bpg-border)] bg-[var(--bpg-border)] md:grid-cols-2">
            {guides.map((g) => (
              <li key={g.slug} className="bg-[var(--bpg-surface)]">
                <Link href={`/guides/${g.slug}`} className="block h-full p-8 no-underline">
                  <h2 className="display-md text-[var(--bpg-ink)]">{g.h1}</h2>
                  <p className="mt-3 leading-relaxed text-[var(--bpg-muted)]">{g.description}</p>
                  <span className="eyebrow mt-5 block text-[var(--bpg-accent-ink)]">Read</span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-[60ch] text-sm leading-relaxed text-[var(--bpg-muted)]">
            These pages describe Idaho statutes and Ada County procedures and cite their sources.
            They are not legal advice and are not applied to your circumstances.
          </p>
        </div>
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

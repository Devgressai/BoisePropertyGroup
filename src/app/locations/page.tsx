import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import { county, renderablePlaces } from "@/data/geography";

export const metadata: Metadata = {
  title: "Areas We Buy In — Ada County, Idaho",
  description:
    "We buy property across Ada County, Idaho — Boise, Meridian, Eagle, Kuna, Star, Garden City and unincorporated county.",
  alternates: { canonical: "/locations" },
};

export default function Locations() {
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-accent)]">Ada County, Idaho</p>
            <h1 className="display-xl mt-4 max-w-[16ch] text-[var(--bpg-ink)]">Where we buy</h1>
            <p className="lede mt-6 max-w-[42rem] text-[var(--bpg-muted)]">
              Six incorporated cities and the unincorporated balance of the county. Which side of a
              city limit a property falls on changes who governs almost everything about it.
            </p>
          </div>
        </header>

        <div className="wrap py-16">
          {/* Hubs summarise and link. They never reproduce the child page — that
              is the top source of duplication in a location silo. */}
          <Link
            href={`/${county.slug}`}
            className="card card-lift block p-8 no-underline"
          >
            <h2 className="display-md text-[var(--bpg-ink)]">{county.name}</h2>
            <p className="mt-2 max-w-[52ch] text-[var(--bpg-muted)]">
              How property is administered county-wide, and where city jurisdiction takes over.
            </p>
          </Link>

          <h2 className="eyebrow mt-14 text-[var(--bpg-muted)]">Cities</h2>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-[var(--bpg-radius)] border border-[var(--bpg-border)] bg-[var(--bpg-border)] sm:grid-cols-2 lg:grid-cols-3">
            {renderablePlaces.map((p) => (
              <li key={p.slug} className="bg-[var(--bpg-surface)]">
                <Link href={`/${p.slug}`} className="block p-6 no-underline">
                  <span className="text-[1.1rem] font-semibold text-[var(--bpg-ink)]">{p.name}</span>
                  {p.population2024Census && (
                    <span className="mt-1 block text-sm text-[var(--bpg-muted)]">
                      {p.population2024Census.toLocaleString()} residents
                      {p.spansMultipleCounties ? " · spans two counties" : ""}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

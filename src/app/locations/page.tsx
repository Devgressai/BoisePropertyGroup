import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/meta";
import NextSteps from "@/components/NextSteps";
import PageSchema from "@/components/seo/PageSchema";
import EvidenceAppendix from "@/components/seo/EvidenceAppendix";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import { county } from "@/data/geography";
import { publishedPlaces } from "@/lib/seo/registry";
import { itemListSchema } from "@/lib/seo/schema";
import { claim as residentialClaim } from "@/data/claims";
import Inline from "@/lib/content/Inline";
import { LOCATIONS_INTRO, LOCATIONS_COUNTYWIDE, LOCATIONS_COUNTY_LINE, LOCATIONS_LINES } from "@/data/hub-content";

const TITLE = "Areas We Buy In: Ada County, Idaho";
const DESCRIPTION =
  "Where we buy in Ada County, Idaho, and what changes at each city limit: water, sewer and irrigation providers, liens at sale, flood sources and who keeps the permit file.";

export const metadata: Metadata = pageMetadata({ path: "/locations", title: TITLE, description: DESCRIPTION });

const lineFor = (slug: string) => LOCATIONS_LINES.find((l) => l.slug === slug);

export default function Locations() {
  // Only places that have earned an index, in the order the hub lists them.
  const places = publishedPlaces();
  const cited = [
    ...new Set([
      ...LOCATIONS_COUNTYWIDE.flatMap((l) => l.claims),
      ...LOCATIONS_COUNTY_LINE.claims,
      ...places.flatMap((p) => lineFor(p.slug)?.claims ?? []),
    ]),
  ]
    .map((id) => residentialClaim(id))
    .filter((c) => c !== undefined);

  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-warm)]">Ada County, Idaho</p>
            <h1 className="display-xl mt-4 max-w-[16ch] text-[var(--bpg-ink)]">Where we buy</h1>
            <div className="mt-6 max-w-[42rem] space-y-4">
              {LOCATIONS_INTRO.map((p) => (
                <p key={p.slice(0, 40)} className="lede text-[var(--bpg-muted)]"><Inline text={p} /></p>
              ))}
            </div>
          </div>
        </header>

        <div className="wrap py-16">
          {/* Hubs summarise and link. They never reproduce the child page — that
              is the top source of duplication in a location silo. One line per
              child, each resting on claims the child page carries in full. */}
          <section aria-labelledby="countywide">
            <h2 id="countywide" className="display-lg text-[var(--bpg-ink)]">The same everywhere in the county</h2>
            <ul className="mt-6 grid max-w-[52rem] gap-x-10 sm:grid-cols-2">
              {LOCATIONS_COUNTYWIDE.map((l) => (
                <li key={l.slug} className="border-t border-[var(--bpg-border)] py-4 leading-relaxed">
                  {l.line}
                </li>
              ))}
            </ul>
          </section>

          <h2 className="display-lg mt-16 text-[var(--bpg-ink)]">What changes city by city</h2>
          <ul className="mt-6 grid gap-x-12 lg:grid-cols-2">
            {places.map((p) => (
              <li key={p.slug} className="border-t border-[var(--bpg-border)]">
                <Link href={`/${p.slug}`} className="group block py-6 no-underline">
                  <span className="serif flex items-center justify-between text-[1.4rem] font-semibold text-[var(--bpg-ink)]">
                    {p.name}
                    <span aria-hidden="true" className="text-[var(--bpg-accent)] transition-transform group-hover:translate-x-1">→</span>
                  </span>
                  {lineFor(p.slug) && (
                    <span className="mt-2 block leading-relaxed text-[var(--bpg-ink)]">{lineFor(p.slug)!.line}</span>
                  )}
                  {p.population2024Census && (
                    <span className="mt-2 block text-sm text-[var(--bpg-muted)]">
                      {p.population2024Census.toLocaleString()} residents (Census 2024 estimate)
                      {p.spansMultipleCounties ? " · spans two counties" : ""}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={`/${county.slug}`}
            className="group mt-14 block rounded-2xl bg-[var(--bpg-navy)] p-8 no-underline sm:p-10"
          >
            <p className="eyebrow text-[var(--bpg-brass)]">Outside the cities, and across them</p>
            <h2 className="display-lg mt-3 flex items-center justify-between gap-4 text-white">
              {county.name}
              <span aria-hidden="true" className="text-[var(--bpg-brass)] transition-transform group-hover:translate-x-1">→</span>
            </h2>
            <p className="mt-3 max-w-[52ch] text-[var(--bpg-on-navy-muted)]">{LOCATIONS_COUNTY_LINE.line}</p>
          </Link>
        </div>

        <EvidenceAppendix
          claims={cited}
          intro="Each line above is a fact the linked page sets out in full. These are the sources behind them, quoted in their own words, with the date we last checked each one."
        />
        <NextSteps path="/locations" />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
      <PageSchema
        path="/locations"
        name={TITLE}
        description={DESCRIPTION}
        type="CollectionPage"
        extra={[
          itemListSchema("/locations", [
            ...places.map((p) => ({ name: p.name, href: `/${p.slug}` })),
            { name: county.name, href: `/${county.slug}` },
          ]),
        ]}
      />
    </>
  );
}

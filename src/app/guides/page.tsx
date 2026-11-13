import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/meta";
import NextSteps from "@/components/NextSteps";
import PageSchema from "@/components/seo/PageSchema";
import { itemListSchema } from "@/lib/seo/schema";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import { guides, type Guide } from "@/data/guides";

const TITLE = "Guides — Selling Property in Idaho";
const DESCRIPTION =
  "What Idaho statutes actually say about probate sales, foreclosure and tax deeds, selling with tenants, and disclosure. Sourced, quoted and dated.";

/**
 * The index is grouped by the reader's situation, not listed in publication
 * order. Every cluster in the Guide type belongs to exactly one group, so a new
 * guide appears under a heading without an edit here.
 */
const GROUPS: { id: string; h: string; clusters: Guide["cluster"][] }[] = [
  { id: "distress", h: "Foreclosure and missed payments", clusters: ["distress"] },
  { id: "estate", h: "Inherited property and probate", clusters: ["estate", "probate"] },
  { id: "money", h: "Liens and taxes", clusters: ["liens", "property-tax"] },
  { id: "sale", h: "Disclosure and closing", clusters: ["disclosure", "closing"] },
  { id: "people", h: "Divorce and tenants", clusters: ["divorce", "tenants"] },
  { id: "land", h: "Land, wells and manufactured homes", clusters: ["land", "well-septic", "manufactured"] },
];

export const metadata: Metadata = pageMetadata({ path: "/guides", title: TITLE, description: DESCRIPTION });

export default function GuidesHub() {
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-warm)]">Idaho property</p>
            <h1 className="display-xl mt-4 max-w-[14ch] text-[var(--bpg-ink)]">Guides</h1>
            <p className="lede mt-6 max-w-[46rem] text-[var(--bpg-muted)]">
              What the statutes actually say — quoted, attributed and dated. Written because most of
              what is published about selling property in Idaho is either generic or wrong, and a
              seller making a decision deserves better than either.
            </p>
          </div>
        </header>

        <div className="wrap py-16">
          {GROUPS.map((grp) => {
            const list = guides.filter((g) => grp.clusters.includes(g.cluster));
            if (list.length === 0) return null;
            return (
              <section key={grp.h} aria-labelledby={`g-${grp.id}`} className="mb-14 last:mb-0">
                <h2 id={`g-${grp.id}`} className="eyebrow border-b border-[var(--bpg-ink)] pb-3 text-[var(--bpg-warm)]">{grp.h}</h2>
                <ol className="grid gap-x-12 md:grid-cols-2">
                  {list.map((g) => (
                    <li key={g.slug} className="border-b border-[var(--bpg-border)]">
                      <Link href={`/guides/${g.slug}`} className="group block h-full py-7 no-underline">
                        <h3 className="display-md text-[var(--bpg-ink)] group-hover:underline group-hover:decoration-[var(--bpg-brass)] group-hover:underline-offset-4">{g.h1}</h3>
                        <p className="mt-2.5 leading-relaxed text-[var(--bpg-muted)]">{g.description}</p>
                      </Link>
                    </li>
                  ))}
                </ol>
              </section>
            );
          })}

          <p className="mt-12 max-w-[60ch] text-sm leading-relaxed text-[var(--bpg-muted)]">
            These pages describe Idaho statutes and Ada County procedures and cite their sources.
            They are not legal advice and are not applied to your circumstances.
          </p>
        </div>
        <NextSteps path="/guides" />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
      <PageSchema
        path="/guides"
        name={TITLE}
        description={DESCRIPTION}
        type="CollectionPage"
        extra={[itemListSchema("/guides", GROUPS.flatMap((grp) => guides.filter((g) => grp.clusters.includes(g.cluster))).map((g) => ({ name: g.h1, href: `/guides/${g.slug}` })))]}
      />
    </>
  );
}

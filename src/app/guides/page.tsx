import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/meta";
import NextSteps from "@/components/NextSteps";
import PageSchema from "@/components/seo/PageSchema";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import { guides } from "@/data/guides";

const TITLE = "Guides — Selling Property in Idaho";
const DESCRIPTION =
  "What Idaho statutes actually say about probate sales, foreclosure and tax deeds, selling with tenants, and disclosure. Sourced, quoted and dated.";

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
          <ol className="grid gap-x-12 md:grid-cols-2">
            {guides.map((g, i) => (
              <li key={g.slug} className="border-t border-[var(--bpg-border)]">
                <Link href={`/guides/${g.slug}`} className="group grid h-full grid-cols-[2.5rem_1fr] gap-x-3 py-7 no-underline">
                  <span aria-hidden="true" className="serif text-[1.3rem] leading-tight text-[var(--bpg-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <h2 className="display-md text-[var(--bpg-ink)] group-hover:underline group-hover:decoration-[var(--bpg-brass)] group-hover:underline-offset-4">{g.h1}</h2>
                    <p className="mt-2.5 leading-relaxed text-[var(--bpg-muted)]">{g.description}</p>
                  </span>
                </Link>
              </li>
            ))}
          </ol>

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
      <PageSchema path="/guides" name={TITLE} description={DESCRIPTION} type="CollectionPage" />
    </>
  );
}

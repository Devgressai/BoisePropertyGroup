import Link from "next/link";
import ArticleBody, { LinkList } from "@/components/seo/ArticleBody";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import OfferForm from "@/components/OfferForm";
import type { CommercialPageContent } from "@/data/commercial-content";
import { commercialClaim } from "@/data/commercial-claims";
import EvidenceAppendix from "./EvidenceAppendix";

/**
 * A commercial asset page.
 *
 * The evidence block at the foot is not decoration. Everything factual on these
 * pages comes from a claim registry, and the registry knows where each claim
 * came from, so the page can show its working. A reader who wants to check a
 * height limit against the city's own table should be one click away.
 */
export default function CommercialPage({
  content,
  siblings,
}: {
  content: CommercialPageContent;
  siblings: { href: string; label: string }[];
}) {

  const cited = content.citedClaims.map((id) => commercialClaim(id)).filter((c) => c !== undefined);

  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--bpg-muted)]">
              <Link href="/" className="no-underline hover:text-[var(--bpg-ink)]">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/commercial" className="no-underline hover:text-[var(--bpg-ink)]">Commercial</Link>
            </nav>
            <p className="eyebrow text-[var(--bpg-warm)]">{content.eyebrow}</p>
            <h1 className="display-xl mt-4 max-w-[20ch] text-[var(--bpg-ink)]">{content.h1}</h1>
            <div className="mt-8 max-w-[42rem] space-y-4">
              {content.intro.map((p) => (
                <p key={p.slice(0, 40)} className="lede text-[var(--bpg-muted)]">{p}</p>
              ))}
            </div>
            <div data-offer-form className="mt-9 max-w-[34rem]">
              <OfferForm bar context="commercial" />
            </div>
          </div>
        </header>

        <ArticleBody sections={content.sections} />

        <EvidenceAppendix
          claims={cited}
          intro="Every factual statement above is traced to a published source, quoted below in the source's own words. Zoning and assessment rules change; each entry carries the date we last checked it. Where a published table attaches a footnote we could not read, the figure is quoted with its marker rather than paraphrased."
        />

        {siblings.length > 0 && (
          <section className="border-t border-[var(--bpg-border)] py-14">
            <div className="wrap">
              <LinkList heading="Also here" cols={3} items={siblings} />
            </div>
          </section>
        )}

        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

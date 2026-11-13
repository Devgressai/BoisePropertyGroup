import Link from "next/link";
import ArticleBody, { LinkList } from "@/components/seo/ArticleBody";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import EvidenceAppendix from "@/components/seo/EvidenceAppendix";
import { claim as residentialClaim } from "@/data/claims";

import OfferForm from "@/components/OfferForm";
import type { PlaceContent } from "@/data/place-content";
import type { LinkItem } from "@/lib/seo/internalLinks";
import NextSteps from "@/components/NextSteps";

export default function PlacePage({
  title,
  eyebrow,
  content,
  links,
  caveat,
  stats,
  path,
}: {
  title: string;
  eyebrow: string;
  content: PlaceContent;
  links: LinkItem[];
  caveat?: string | null;
  stats?: { label: string; value: string; note: string }[];
  /** Registry path; drives the funnel's next-step links. */
  path: string;
}) {

  /**
   * Claims cited by this page's sections, de-duplicated in first-appearance
   * order. place-content.ts and guide-content.ts have carried these ids since
   * the beginning, annotated "Kept for audit, not rendered" — so the evidence
   * was tracked and never shown. Withheld claims are absent from the generated
   * module entirely, so an unresolvable id simply drops out here.
   */
  const appendixClaims = [
    ...new Set(content.sections.flatMap((s) => s.claims ?? [])),
  ]
    .map((id) => residentialClaim(id))
    .filter((c) => c !== undefined);

  const geographyLinks = links.filter((l) => l.reason !== "guide" && l.reason !== "commercial");
  const knowledgeLinks = links.filter((l) => l.reason === "guide" || l.reason === "commercial");

  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--bpg-muted)]">
              <Link href="/" className="no-underline hover:text-[var(--bpg-ink)]">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/locations" className="no-underline hover:text-[var(--bpg-ink)]">Areas</Link>
            </nav>
            <p className="eyebrow text-[var(--bpg-warm)]">{eyebrow}</p>
            <h1 className="display-xl mt-4 max-w-[18ch] text-[var(--bpg-ink)]">{title}</h1>
            <div className="mt-8 max-w-[42rem] space-y-4">
              {content.intro.map((p) => (
                <p key={p.slice(0, 40)} className="lede text-[var(--bpg-muted)]">{p}</p>
              ))}
            </div>
            <div data-offer-form className="mt-9 max-w-[34rem]">
              <OfferForm bar />
            </div>
          </div>
        </header>

        {stats && stats.length > 0 && (
          <section className="border-b border-[var(--bpg-border)] bg-[var(--bpg-sand)]">
            <div className="wrap grid gap-8 py-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="display-md text-[var(--bpg-ink)]">{s.value}</p>
                  <p className="mt-1 font-semibold text-[var(--bpg-ink)]">{s.label}</p>
                  {/* Every figure names its dataset. Two population estimate
                      families exist for Ada County and differ by roughly 4%. */}
                  <p className="mt-1 text-sm leading-snug text-[var(--bpg-muted)]">{s.note}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {caveat && (
          <div className="wrap pt-10">
            <p className="border-l-4 border-[var(--bpg-accent)] bg-[var(--bpg-surface)] p-5 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">
              {caveat}
            </p>
          </div>
        )}

        <ArticleBody sections={content.sections} />

        {/*
          Two blocks, not one, because "Elsewhere in Ada County" is a geography
          heading and a guide is not a place. The split is by LinkItem.reason,
          so a new edge type appears under the right heading without a template
          change. Knowledge edges are earned from this place's own claims — see
          knowledgeLinksForPlace() — so a place with no tenancy evidence shows
          no tenancy guide, and the block disappears entirely rather than
          rendering an empty heading.
        */}
        <section className="border-t border-[var(--bpg-border)] bg-[var(--bpg-sand)] py-14">
          <div className="wrap grid gap-10 lg:grid-cols-2">
            <LinkList heading="Elsewhere in Ada County" cols={2} items={geographyLinks} />
            <LinkList heading="Research behind this page" cols={1} items={knowledgeLinks} />
          </div>
        </section>

        <EvidenceAppendix claims={appendixClaims} />

        <NextSteps path={path} heading="Before you decide" />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

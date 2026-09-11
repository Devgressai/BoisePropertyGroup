import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import EvidenceAppendix from "@/components/seo/EvidenceAppendix";
import { claim as residentialClaim } from "@/data/claims";

import OfferForm from "@/components/OfferForm";
import type { PlaceContent } from "@/data/place-content";
import type { LinkItem } from "@/lib/seo/internalLinks";
import Inline from "@/lib/content/Inline";

export default function PlacePage({
  title,
  eyebrow,
  content,
  links,
  caveat,
  stats,
}: {
  title: string;
  eyebrow: string;
  content: PlaceContent;
  links: LinkItem[];
  caveat?: string | null;
  stats?: { label: string; value: string; note: string }[];
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

  const anchor = (h: string) => h.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="bg-[var(--bpg-ink)] py-16 text-white sm:py-20">
          <div className="wrap">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
              <Link href="/" className="no-underline hover:text-white">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/locations" className="no-underline hover:text-white">Areas</Link>
            </nav>
            <p className="eyebrow text-[var(--bpg-accent)]">{eyebrow}</p>
            <h1 className="display-xl mt-4 max-w-[18ch] text-white">{title}</h1>
            <div className="mt-8 max-w-[42rem] space-y-4">
              {content.intro.map((p) => (
                <p key={p.slice(0, 40)} className="lede text-white/80">{p}</p>
              ))}
            </div>
            <div className="mt-9 max-w-[34rem]">
              <OfferForm tone="dark" />
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

        <div className="wrap py-16 sm:py-20">
          <div className="max-w-[46rem] space-y-14">
            {content.sections.map((s) => (
              <section key={s.heading} aria-labelledby={anchor(s.heading)}>
                <hr className="rule-accent" />
                <h2 id={anchor(s.heading)} className="display-md mt-5 text-[var(--bpg-ink)]">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 40)} className="leading-relaxed"><Inline text={p} /></p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/*
          Two blocks, not one, because "Elsewhere in Ada County" is a geography
          heading and a guide is not a place. The split is by LinkItem.reason,
          so a new edge type appears under the right heading without a template
          change. Knowledge edges are earned from this place's own claims — see
          knowledgeLinksForPlace() — so a place with no tenancy evidence shows
          no tenancy guide, and the block disappears entirely rather than
          rendering an empty heading.
        */}
        <section className="border-t border-[var(--bpg-border)] bg-[var(--bpg-surface)] py-14">
          <div className="wrap space-y-10">
            {[
              { heading: "Elsewhere in Ada County", items: geographyLinks },
              { heading: "Research behind this page", items: knowledgeLinks },
            ]
              .filter((group) => group.items.length > 0)
              .map((group) => (
                <div key={group.heading}>
                  <h2 className="eyebrow text-[var(--bpg-muted)]">{group.heading}</h2>
                  <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
                    {group.items.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </section>

        <EvidenceAppendix claims={appendixClaims} />

        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

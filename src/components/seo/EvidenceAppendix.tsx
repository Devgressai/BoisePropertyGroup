/**
 * The evidence appendix, shared by every page type that cites claims.
 *
 * Verbatim primary-source text is the highest-value string in the registry:
 * a paraphrase competes with every other paraphrase, while the operative words
 * of an ordinance are the thing itself. All of it used to live only in the
 * JSON — place-content.ts and guide-content.ts both carried per-section claim
 * ids annotated "Kept for audit, not rendered", so 76 quoted Ada County claims
 * were fully cited internally and reached no page at all.
 *
 * Guides did quote statutes, but inline in prose with no blockquote, no link
 * and no date. The quote was there; the attribution structure was not, so a
 * reader saw an assertion rather than a citation.
 *
 * Written once and used by all three page types, because this was already
 * built twice and a third copy would drift.
 */
export interface AppendixClaim {
  id: string;
  claim: string;
  quote: string | null;
  verifiedOn: string;
  /**
   * CURRENT unless the claim describes a fixed past period. A claim that is
   * not CURRENT is labelled on the page, because llms.txt promises this site
   * carries no undated statistics and a dated figure rendered without its date
   * would make that untrue.
   */
  temporalStatus?: string | null;
  jurisdiction?: string | null;
  sources: { title: string; url: string; publisher: string }[];
}

export default function EvidenceAppendix({
  claims,
  intro,
}: {
  claims: AppendixClaim[];
  intro?: string;
}) {
  // Grouped by first source, so a source cited by six claims appears once with
  // its six quotes beneath it rather than six times.
  const grouped: { source: AppendixClaim["sources"][number]; entries: AppendixClaim[] }[] = [];
  const byUrl = new Map<string, (typeof grouped)[number]>();
  for (const c of claims) {
    const src = c.sources[0];
    if (!src) continue;
    let g = byUrl.get(src.url);
    if (!g) {
      g = { source: src, entries: [] };
      byUrl.set(src.url, g);
      grouped.push(g);
    }
    g.entries.push(c);
  }

  if (grouped.length === 0) return null;

  return (
    <section
      className="border-t border-[var(--bpg-border)] bg-[var(--bpg-surface)] py-14"
      aria-labelledby="sources"
    >
      <div className="wrap max-w-[46rem]">
        <hr className="rule-accent" />
        <h2 id="sources" className="display-md mt-5 text-[var(--bpg-ink)]">
          Where this comes from
        </h2>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">
          {intro ??
            "Every factual statement above is traced to a published source, quoted below in the source's own words. Statutes and county practice change; each entry carries the date we last checked it."}
        </p>

        <div className="mt-9 space-y-10">
          {grouped.map(({ source, entries }) => (
            <div key={source.url}>
              <h3 className="text-[1rem] font-semibold leading-snug text-[var(--bpg-ink)]">
                <a
                  href={source.url}
                  rel="noopener"
                  className="underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]"
                >
                  {source.title}
                </a>
              </h3>
              <p className="mt-1 text-[0.85rem] text-[var(--bpg-muted)]">{source.publisher}</p>
              <ul className="mt-4 space-y-5">
                {entries.map((c) => (
                  <li key={c.id}>
                    <p className="text-[0.95rem] leading-relaxed text-[var(--bpg-ink)]">{c.claim}</p>
                    {c.quote && (
                      <blockquote className="mt-2 border-l-2 border-[var(--bpg-accent)] pl-4 text-[0.92rem] leading-relaxed text-[var(--bpg-muted)]">
                        &ldquo;{c.quote}&rdquo;
                      </blockquote>
                    )}
                    <p className="mt-2 text-[0.8rem] text-[var(--bpg-muted)]">
                      Checked {c.verifiedOn}
                      {c.jurisdiction ? ` · ${c.jurisdiction}` : ""}
                    </p>
                    {c.temporalStatus && c.temporalStatus !== "CURRENT" && (
                      <p className="mt-1 text-[0.8rem] font-semibold text-[var(--bpg-accent-ink)]">
                        Describes a fixed past period — not a current figure.
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

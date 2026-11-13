/**
 * THE DIFFERENTIATOR.
 *
 * Every fact here is drawn from the verified claim registry in
 * data/idaho/evidence/ada-claims.json — statute text and Ada County primary
 * sources, each re-verified against a cached copy of the page it came from.
 *
 * Competitor messaging across the Boise cash-buyer SERP is effectively
 * identical (no fees, no repairs, 7-day close). This is the one section a
 * competitor cannot copy by copying pages.
 */
const FACTS = [
  {
    fact: "Idaho has two different “homestead exemptions”.",
    detail:
      "One protects $175,000 of equity from creditors (55-1003). The other takes part of a home's value off its property tax assessment (63-602G). Ada County's own website calls both by the same name.",
    cite: "Idaho Code §§ 55-1003, 63-602G",
  },
  {
    fact: "A tax problem and a mortgage problem run on different clocks.",
    detail:
      "A trustee's sale needs 120 days' notice. Property tax delinquency takes three years before a tax deed can issue, and redemption can then survive up to fourteen months longer. Confusing the two costs people their timeline.",
    cite: "Idaho Code §§ 45-1506, 63-1005, 63-1007",
  },
  {
    fact: "Twenty-seven irrigation entities operate in Ada County.",
    detail:
      "Districts, ditch companies and lateral associations. Title to the Boise Project's canals remains with the United States. If a lateral crosses the parcel, who you deal with depends on which one it is.",
    cite: "Ada County irrigation districts map",
  },
  {
    fact: "Selling doesn't release you from the tenant's deposit.",
    detail:
      "When an Idaho rental changes hands during a tenancy, the new owner becomes liable for refunding the deposits. It matters to both sides of the table.",
    cite: "Idaho Code § 6-321(3)",
  },
];

export default function LocalKnowledge() {
  return (
    <section className="section bg-white" aria-labelledby="local">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">Local knowledge, with sources</p>
          <h2 id="local" className="display-lg mt-4 text-[var(--bpg-ink)]">
            We know the ground we buy on.
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            Every claim on this site cites the statute or county record it came from. Four that
            sellers in Ada County run into.
          </p>
        </div>

        <div className="section-body mt-10 grid gap-x-12 md:grid-cols-2">
          {FACTS.map((f) => (
            <article key={f.cite} className="border-t border-[var(--bpg-border)] py-6">
              <h3 className="serif text-[1.3rem] font-semibold leading-snug text-[var(--bpg-ink)]">{f.fact}</h3>
              <p className="mt-2.5 leading-relaxed text-[var(--bpg-muted)]">{f.detail}</p>
              <p className="eyebrow mt-4 text-[var(--bpg-warm)]">{f.cite}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

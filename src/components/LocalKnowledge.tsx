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
    fact: "Cities here cannot maintain their own streets.",
    detail:
      "Idaho Code 40-1406 bars a city inside a countywide highway district from maintaining city highways or levying taxes for them. In Ada County that means sidewalk and approach questions are a district matter, not a city one.",
    cite: "Idaho Code § 40-1406",
  },
  {
    fact: "Idaho has two different “homestead exemptions”.",
    detail:
      "One protects $175,000 of equity from creditors (55-1003). The other removes up to $125,000 from your property tax assessment (63-602G). Ada County's own website calls both by the same name.",
    cite: "Idaho Code §§ 55-1003, 63-602G",
  },
  {
    fact: "A tax problem and a mortgage problem run on different clocks.",
    detail:
      "A trustee's sale needs 120 days' notice. Property tax delinquency takes three years before a tax deed can issue — then redemption can survive up to fourteen months longer. Confusing the two costs people their timeline.",
    cite: "Idaho Code §§ 45-1506, 63-1005, 63-1007",
  },
  {
    fact: "Twenty-seven irrigation entities operate in Ada County.",
    detail:
      "Districts, ditch companies and lateral associations — and title to the Boise Project's canals remains with the United States. If a lateral crosses the parcel, who you deal with depends on which one it is.",
    cite: "Ada County irrigation districts map",
  },
  {
    fact: "A domestic well will not carry a development.",
    detail:
      "Idaho caps domestic use at 13,000 gallons a day including half an acre of irrigation, and expressly excludes subdivisions and multi-unit developments. That is a real limit on what rural ground can become.",
    cite: "Idaho Code § 42-111",
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
    <section className="bg-[var(--bpg-ink)] py-20 text-white sm:py-28" aria-labelledby="local">
      <div className="wrap">
        <hr className="rule-accent" />
        <h2 id="local" className="display-lg mt-6 max-w-[20ch] text-white">
          We know the ground we buy on.
        </h2>
        <p className="lede mt-5 max-w-[46rem] text-white/75">
          Every claim on this site cites the statute or the county record it came from. Here is a
          sample of what actually governs property in Ada County.
        </p>

        <div className="mt-14 grid gap-x-12 gap-y-11 md:grid-cols-2">
          {FACTS.map((f) => (
            <article key={f.cite} className="border-t border-white/20 pt-6">
              <h3 className="text-[1.12rem] font-semibold leading-snug text-white">{f.fact}</h3>
              <p className="mt-2.5 leading-relaxed text-white/70">{f.detail}</p>
              <p className="eyebrow mt-4 text-[var(--bpg-accent)]">{f.cite}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

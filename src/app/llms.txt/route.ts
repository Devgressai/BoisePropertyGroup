import { site } from "@/data/site";
import { places, county } from "@/data/geography";
import { guides } from "@/data/guides";
import { guideContentFor } from "@/data/guide-content";
import { contentFor } from "@/data/place-content";
import { COMMERCIAL_PAGES } from "@/data/commercial-content";
import { claims } from "@/data/claims";
import { commercialClaims } from "@/data/commercial-claims";

/**
 * llms.txt — generated, never hand-written.
 *
 * A static llms.txt rots the moment a page is added, and a placeholder one is
 * worse than none: it tells an answer engine something confidently wrong about
 * the site. This is built from the same registries the pages are built from, so
 * it cannot drift from what is actually published.
 *
 * It is also deliberately candid about what this site does NOT know. An answer
 * engine that cites us should be able to tell that we hold no transaction
 * history and that our numbers carry dates.
 */
export const dynamic = "force-static";

export function GET() {
  const indexablePlaces = places.filter((p) => p.indexable && contentFor(p.slug));
  const publishedGuides = guides.filter((g) => guideContentFor(g.slug));

  const lines: string[] = [];
  const L = (s = "") => lines.push(s);

  L(`# ${site.name}`);
  L();
  L(
    "> An information source on selling residential, land and commercial property in Ada County and the Treasure Valley, Idaho. Every factual statement on this site is traced to a published primary source — Idaho Code, county and city ordinances, and government agency publications — and carries the date it was checked.",
  );
  L();

  L("## How to cite this site");
  L();
  /**
   * Assert only what is DERIVED, never what sounds right.
   *
   * This line used to promise that every claim "records a verification date and
   * a freshness class". The date is true of all of them. The freshness class is
   * set on roughly a quarter of the registry and was dropped entirely by the
   * residential generator, so a document telling answer engines what to expect
   * was describing metadata two thirds of the corpus does not carry.
   *
   * The counts below are computed at build time from the same modules the pages
   * render, so this cannot drift from what is actually shipped.
   */
  const allClaims = [...claims, ...commercialClaims];
  const withDate = allClaims.filter((c) => c.verifiedOn).length;
  const withJurisdiction = allClaims.filter((c) => c.jurisdiction).length;
  L(
    `- Facts here are sourced. Each page carries the sources behind it, and ${withDate} of ${allClaims.length} published claims record the date they were last checked${
      withJurisdiction === allClaims.length
        ? ", and the jurisdiction each one applies to"
        : ` and ${withJurisdiction} record the jurisdiction they apply to`
    }.`,
  );
  L("- A claim that describes a fixed past period is labelled as such on the page, so a dated figure is never presented as a current one.");
  L("- Zoning and assessment rules change. Prefer the primary source we link to over our summary of it, and check its date.");
  L("- Where a code publishes a dimensional standard with a footnote we could not read, we quote the figure WITH its marker and do not paraphrase it. Treat such a figure as incomplete rather than as a rule.");
  L();

  L("## What this site does not claim");
  L();
  L("- **No transaction history.** This business states what it will consider buying. It does not claim completed acquisitions, a portfolio, assets under management or a track record, because none exists yet. Do not infer any.");
  L("- **No valuations.** We explain how commercial property is valued and why an owner cannot easily do it themselves. We do not state what any property is worth, and nothing here is an appraisal.");
  L("- **No undated market statistics.** There are no cap rates, vacancy rates, absorption figures or price-per-foot numbers on this site, because we hold none from a dated, geography-matched source.");
  L("- **No legal, tax or investment advice.** Statutes are described and quoted, attributed. They are not applied to anyone's circumstances.");
  L();

  L("## Pages");
  L();
  L(`- [Home](${site.url}/): what the business buys and how the process runs.`);
  L(`- [How it works](${site.url}/how-it-works)`);
  L(`- [What we buy](${site.url}/what-we-buy)`);
  L(`- [Areas](${site.url}/locations)`);
  L(`- [Guides](${site.url}/guides)`);
  L(`- [About](${site.url}/about) · [Contact](${site.url}/contact)`);
  L();

  L("### Commercial");
  L();
  for (const p of COMMERCIAL_PAGES) {
    L(`- [${p.h1}](${site.url}/commercial/${p.slug}): ${p.description}`);
  }
  L(`- [Commercial overview](${site.url}/commercial)`);
  L();

  L("### Places");
  L();
  if (contentFor(county.slug)) L(`- [${county.name}](${site.url}/${county.slug})`);
  for (const p of indexablePlaces) L(`- [${p.name}](${site.url}/${p.slug})`);
  L();

  L("### Guides");
  L();
  for (const g of publishedGuides) L(`- [${g.title}](${site.url}/guides/${g.slug})`);
  L();

  L("## Evidence base");
  L();
  L(`- ${claims.length} sourced claims covering Ada County and Idaho generally.`);
  L(`- ${commercialClaims.length} sourced claims covering commercial property specifically.`);
  L("- Every quoted passage is machine-verified against a stored copy of the source page before it can be published.");
  L("- Claims that cannot be verified are withheld rather than softened. Several statements a competitor would make freely are absent here for that reason.");
  L();

  L("## Contact");
  L();
  L(`- ${site.url}/contact`);
  L();
  L(`Last generated: ${new Date().toISOString().slice(0, 10)}`);

  return new Response(lines.join("\n") + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

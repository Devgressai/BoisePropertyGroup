/** Master research report + machine-readable manifest for the Ada County knowledge system. */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
const read = (p) => JSON.parse(readFileSync(p, "utf8"));
const claims = read("data/idaho/evidence/ada-claims.json").claims;
const approved = claims.filter(c => c.approvedForPublication);
const sources = read("data/idaho/sources/ada-county-sources.json").sources;
const entities = read("data/idaho/entities/ada-county-entities.json").entities;
const jur = read("data/idaho/jurisdictions/ada-jurisdictions.json").rows;
const stats = [...read("data/idaho/statistics/ada-statistics.json").statistics,
               ...read("data/idaho/statistics/ada-statistics-compass.json").statistics];
const opps = read("data/idaho/content/ada-opportunity-maps.json");
const diff = read("data/idaho/locations/ada-city-differentiation.json");

const cities = entities.filter(e => ["CITY","CENSUS_DESIGNATED_PLACE"].includes(e.entityType));
const uniqueFor = id => approved.filter(c => (c.entity??[]).length===1 && (c.entity??[])[0]===id);
const directFor = id => approved.filter(c => (c.entity??[]).includes(id));
const verdict = id => { const u=uniqueFor(id).length; return u>=3?"BUILD":u>=1?"RENDER, DO NOT INDEX":"DO NOT BUILD"; };
const tier = {}; for (const s of sources) tier[s.sourceTier]=(tier[s.sourceTier]??0)+1;
const cachedCount = existsSync("data/idaho/raw/cache") ? readdirSync("data/idaho/raw/cache").filter(f=>f.endsWith(".html")).length : 0;
const pdfCount = existsSync("data/idaho/raw/pdf") ? readdirSync("data/idaho/raw/pdf").length : 0;
const jurVerified = jur.filter(r=>r.status==="VERIFIED").length;

const md = `# Ada County — Master Research Report

**Generated** ${new Date().toISOString().slice(0,10)} by \`scripts/research/build-master-report.mjs\`.
Research foundation, not marketing copy.

## Scale

| | |
|---|---:|
| Sources | ${sources.length} (${Object.entries(tier).map(([t,n])=>`Tier ${t}: ${n}`).join(", ")}) |
| Cached primary artifacts | ${cachedCount} HTML + ${pdfCount} PDF |
| Claims | ${claims.length} (${approved.length} approved) |
| Statistics | ${stats.length} |
| Entities | ${entities.length} |
| Jurisdiction rows | ${jur.length} (${jurVerified} verified) |

Every quoted passage in the registry has been re-verified against its cached
source. Every statistic carries a dataset and year. Claim-source links are
symmetric by construction.

## Geography

Ada County holds **six incorporated cities and one CDP**, confirmed against the
Census place-to-county relationship file rather than assumed:

${cities.map(c=>`- **${c.canonicalName}** (${c.entityType}${c.spansMultipleCounties?", **spans "+c.counties.length+" counties**":""})`).join("\n")}

plus unincorporated Ada County, home to ${stats.find(s=>s.id==="unincorporated-ada-pop-2024")?.value.toLocaleString()} people whose
planning, zoning, permitting and code enforcement authority is the **county**, not a city.

⚠️ **Star spans Ada and Canyon counties** and can never be described as wholly
within Ada County.

## Two population estimate families

| Source | Ada County 2024 |
|---|---:|
| COMPASS | 557,590 |
| U.S. Census Bureau, PEP Vintage 2024 | 535,799 |

Both authoritative, ~4% apart. Every published figure must name its family.

## Property administration — what is uniform and what is not

**Uniform county-wide or district-wide** (and therefore useless for differentiating cities):
assessment, homeowner's exemption, tax collection, recording, public administration
of estates, GIS and parcel records, addressing, roads, septic.

**Varies by jurisdiction:** land use planning, building permits, code enforcement,
sewer, irrigation district.

The finding this produced is uncomfortable and central: *the thing that makes Ada
County distinctive — one assessor, one treasurer, one recorder, one highway
district, one health district — is precisely what makes its cities hard to tell
apart.*

## City differentiation and build verdicts

| Entity | Pop. 2024 (Census) | Growth 2020→2024 | Direct claims | Unique | Verdict |
|---|---:|---:|---:|---:|---|
| Ada County | 535,799 | — | ${directFor("county:ada").length} | ${uniqueFor("county:ada").length} | **${verdict("county:ada")}** |
${diff.rows.map(r=>{const e=cities.find(c=>c.canonicalName===r.city);return `| ${r.city} | ${r.population2024?.toLocaleString()??"—"} | ${r.growthPct!=null?r.growthPct+"%":"—"} | ${directFor(e.id).length} | ${uniqueFor(e.id).length} | **${verdict(e.id)}** |`;}).join("\n")}
| Hidden Spring | — | — | 0 | 0 | **DO NOT BUILD** |

## Strongest factual differentiators found

1. **Growth divergence.** Star +61.4% against Boise +1.0% over the same window — two different property markets.
2. **2050 projections reverse it.** Star is projected +12.3% by 2050 while Kuna is projected +128.7%, and unincorporated Ada County is projected to *lose* 36% on the assumption cities annex their Areas of City Impact.
3. **Median age spans 17 years** — Kuna 30.2 to Garden City 47.1.
4. **27 irrigation entities** operate in Ada County, and title to the Boise Project's transferred works remains in the United States.
5. **Cities cannot maintain their own streets** — Idaho Code 40-1406 bars a city inside a countywide highway district from doing so or taxing for it.
6. **Boise's WUI Overlay** bites on renovations increasing gross floor area by more than 49%.
7. **Boise sewer connection is mandatory**, with a separate assessment fee likely on lot splits and previously undeveloped lots — against septic under a health district in the unincorporated county.

## Highest-value seller situations, by evidence

${opps.sellerSituations.filter(s=>s.evidenceGrade==="HIGH").map(s=>`- **${s.name}** — ${s.note}`).join("\n")}

## Highest-value property types, by evidence

${opps.propertyTypes.filter(s=>s.evidenceGrade==="HIGH").map(s=>`- **${s.name}** — ${s.note}`).join("\n")}

## Not recommended for creation

${[...opps.sellerSituations,...opps.propertyTypes].filter(s=>s.evidenceGrade==="INSUFFICIENT_EVIDENCE").map(s=>`- ${s.name} — ${s.note}`).join("\n")}
- Hidden Spring — a CDP with zero direct claims and no population figure in the sub-county estimates.

## The legal contrasts that carry the knowledge pillars

- **Foreclosure vs tax delinquency.** A trustee's sale needs 120 days' notice. Tax delinquency takes three years before a tax deed issues, then up to fourteen more months of redemption — double-gated, because the right dies earlier if the county contracts to sell.
- **Two homestead exemptions.** Creditor protection at $175,000 (55-1003) and property-tax relief at $125,000 (63-602G) — and Ada County's own site calls both "Homestead Exemption".
- **Disclosure is owed by default.** 1–4 unit residential including rentals; probate and fiduciary transfers are exempt, the divorce exemption is spouse-to-spouse only, and an ordinary pre-foreclosure sale is not exempt.
- **A personal representative can sell without a court order** (15-3-711) — subject to the will and to any formal order (15-3-715).
- **Manufactured homes need three cumulative conditions** to be real property (63-304).
- **A domestic well will not carry a development** (42-111), and that statute changed twice in two years.

## Evidence gaps that remain

- Housing stock, tenure, vacancy and housing age — blocked on ACS access.
- Search demand — no volume data; all recorded as null by policy.
- Building permit authority for five of six cities.
- Sewer provider for five of six cities.
- Idaho community property treatment of real property.
- Effective date of the 2026 amendment to 63-602G (red-team FINDING 1).

## Gate

**ADA COUNTY EVIDENCE GATE: not yet issued.** See \`PROJECT-CONTROL/OPEN-ITEMS.md\`.
`;
writeFileSync("research/idaho/ada-county/ADA-COUNTY-MASTER-RESEARCH-REPORT.md", md);

writeFileSync("data/idaho/ada-county-master-manifest.json", JSON.stringify({
  generatedAt: new Date().toISOString().slice(0,10),
  generator: "scripts/research/build-master-report.mjs",
  registries: {
    sources: "data/idaho/sources/ada-county-sources.json",
    claims: "data/idaho/evidence/ada-claims.json",
    entities: "data/idaho/entities/ada-county-entities.json",
    geographicGraph: "data/idaho/entities/ada-geographic-graph.json",
    statisticsCensus: "data/idaho/statistics/ada-statistics.json",
    statisticsCompass: "data/idaho/statistics/ada-statistics-compass.json",
    jurisdictions: "data/idaho/jurisdictions/ada-jurisdictions.json",
    opportunityMaps: "data/idaho/content/ada-opportunity-maps.json",
    cityDifferentiation: "data/idaho/locations/ada-city-differentiation.json",
    serpObservations: "data/idaho/search/ada-serp-observations.json",
  },
  counts: { sources: sources.length, claims: claims.length, approvedClaims: approved.length,
    statistics: stats.length, entities: entities.length, jurisdictionRows: jur.length,
    jurisdictionVerified: jurVerified, cachedHtml: cachedCount, cachedPdf: pdfCount },
  buildVerdicts: Object.fromEntries([["county:ada", verdict("county:ada")],
    ...cities.map(c=>[c.id, verdict(c.id)])]),
  validation: {
    evidenceIntegrity: "scripts/validation/check-evidence.mjs",
    redTeamArithmetic: "scripts/validation/red-team-arithmetic.mjs",
    quoteAudit: "scripts/validation/verify-quotes.mjs",
  },
  gate: { adaCountyEvidence: "NOT_ISSUED", openItems: "PROJECT-CONTROL/OPEN-ITEMS.md" },
}, null, 2));
console.log("master report + manifest written");

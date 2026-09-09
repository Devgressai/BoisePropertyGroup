/**
 * Phase 2 — Ada County geography, entities and population statistics.
 *
 * Derived ONLY from cached primary-source files in data/idaho/raw/:
 *   - st16_id_places.txt      Census place-to-county relationship file
 *   - sub-est2024-idaho.csv   Census Population Estimates, Vintage 2024, sub-county
 *   - co-est2024-idaho.csv    Census Population Estimates, Vintage 2024, county
 *
 * TWO RULES THIS FILE EXISTS TO ENFORCE
 *
 * 1. County membership comes from the Census place-to-county crosswalk, never
 *    from geometry. Assigning places to the nearest county centroid shipped a
 *    live factual error across six published pages on MoKan.
 * 2. Every statistic carries its dataset, vintage year and source. A naked
 *    number is not a fact.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const RAW = "data/idaho/raw";
const ACCESSED = "2026-09-09";
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// ── Sources ───────────────────────────────────────────────────────────────
const sources = [
  {
    id: "census-place-county-2020",
    title: "2020 Census Place to County Relationship File — Idaho",
    publisher: "U.S. Census Bureau", organizationType: "federal-government",
    url: "https://www2.census.gov/geo/docs/reference/codes/files/st16_id_places.txt",
    sourceTier: 1, jurisdiction: "Idaho", topic: ["geography", "place-classification"],
    publicationDate: null, updatedDate: null, accessedDate: ACCESSED,
    freshnessClass: "DECENNIAL",
    authorityNotes: "Definitive federal record of which county or counties each incorporated place and CDP lies within. Used instead of geometry for all county assignment.",
    claimsSupported: [], entitiesSupported: [], status: "VERIFIED",
  },
  {
    id: "census-pep-sub-2024",
    title: "Population Estimates, Vintage 2024 — Subcounty Resident Population",
    publisher: "U.S. Census Bureau", organizationType: "federal-government",
    url: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2024/cities/totals/sub-est2024.csv",
    sourceTier: 1, jurisdiction: "United States", topic: ["population"],
    publicationDate: null, updatedDate: null, accessedDate: ACCESSED,
    freshnessClass: "ANNUAL",
    authorityNotes: "Vintage 2024 estimates, 2020 census base. Estimates, not counts — always label the vintage. For places spanning counties the file carries both SUMLEV 157 county-parts and a SUMLEV 162 place total.",
    claimsSupported: [], entitiesSupported: [], status: "VERIFIED",
  },
  {
    id: "census-pep-county-2024",
    title: "Population Estimates, Vintage 2024 — County Resident Population",
    publisher: "U.S. Census Bureau", organizationType: "federal-government",
    url: "https://www2.census.gov/programs-surveys/popest/datasets/2020-2024/counties/totals/co-est2024-alldata.csv",
    sourceTier: 1, jurisdiction: "United States", topic: ["population"],
    publicationDate: null, updatedDate: null, accessedDate: ACCESSED,
    freshnessClass: "ANNUAL",
    authorityNotes: "Vintage 2024 county estimates, 2020 census base.",
    claimsSupported: [], entitiesSupported: [], status: "VERIFIED",
  },
];

// Merge hand-maintained legal/government sources
try {
  const manual = JSON.parse(readFileSync("data/idaho/sources/sources-manual.json", "utf8"));
  sources.push(...manual.sources);
} catch (e) { console.error("WARN: sources-manual.json not merged:", e.message); }

// ── Parse crosswalk ───────────────────────────────────────────────────────
const places = readFileSync(`${RAW}/st16_id_places.txt`, "utf8")
  .trim().split("\n").map((line) => {
    const [stab, st, placeFips, name, classDesc, funcstat, counties] = line.split("|");
    return { stab, st, placeFips, name, classDesc, funcstat, counties: counties.split(",").map((c) => c.trim()) };
  });

const adaPlaces = places.filter((p) => p.counties.includes("Ada County"));

// ── Parse population ──────────────────────────────────────────────────────
function parseCsv(text) {
  const [head, ...rows] = text.trim().split("\n");
  const keys = head.split(",");
  return rows.map((r) => {
    // No quoted commas in these files; verified by field-count check below.
    const vals = r.split(",");
    if (vals.length !== keys.length) throw new Error(`field count mismatch: ${r.slice(0, 80)}`);
    return Object.fromEntries(keys.map((k, i) => [k, vals[i]]));
  });
}
const sub = parseCsv(readFileSync(`${RAW}/sub-est2024-idaho.csv`, "utf8"));
const cty = parseCsv(readFileSync(`${RAW}/co-est2024-idaho.csv`, "utf8"));

const placeTotal = new Map();  // SUMLEV 162 — whole place across all counties
const placePart = new Map();   // SUMLEV 157 — the part inside one county
for (const r of sub) {
  if (r.SUMLEV === "162") placeTotal.set(r.PLACE, r);
  if (r.SUMLEV === "157") placePart.set(`${r.PLACE}:${r.COUNTY}`, r);
}
const adaCounty = cty.find((r) => r.SUMLEV === "050" && r.CTYNAME === "Ada County");

// ── Entities ──────────────────────────────────────────────────────────────
const entities = [
  { id: "state:id", canonicalName: "Idaho", entityType: "STATE", parentEntity: null,
    jurisdiction: "Idaho", officialURL: "https://www.idaho.gov/", alternateNames: [],
    relationships: [], sourceIds: ["census-place-county-2020"] },
  { id: "region:treasure-valley", canonicalName: "Treasure Valley", entityType: "REGION",
    parentEntity: "state:id", jurisdiction: null, officialURL: null,
    alternateNames: ["Boise Valley", "Lower Boise River Valley"],
    relationships: [{ type: "partOf", target: "state:id" }],
    sourceIds: [],
    notes: "GEOGRAPHIC/ECONOMIC region ONLY. It has no government, no boundary of record and no authority. Never model as administrative; never assert a population or a boundary for it without a source that defines one.",
    evidenceStatus: "DEFINITION PENDING — no authoritative boundary source yet identified" },
  { id: "county:ada", canonicalName: "Ada County", entityType: "COUNTY", parentEntity: "state:id",
    jurisdiction: "Ada County, Idaho", officialURL: "https://adacounty.id.gov/",
    alternateNames: [], fips: "16001",
    relationships: [{ type: "containedIn", target: "state:id" }, { type: "partOfRegion", target: "region:treasure-valley" }],
    sourceIds: ["census-pep-county-2024"] },
];

const geographicGraph = { nodes: [], edges: [] };
const statistics = [];

function stat(id, metric, value, unit, geography, year, dataset, sourceId, sourceURL, notes) {
  statistics.push({ id, metric, value, unit, geography, year, dataset, sourceId, sourceURL,
    lastVerified: ACCESSED, notes: notes ?? null });
}

if (adaCounty) {
  stat("ada-pop-2024", "resident population", Number(adaCounty.POPESTIMATE2024), "persons",
    "Ada County, Idaho", 2024, "Census Population Estimates, Vintage 2024",
    "census-pep-county-2024", sources[2].url,
    "ESTIMATE, not a count. 2020 census base was " + adaCounty.ESTIMATESBASE2020 + ".");
  stat("ada-pop-base-2020", "resident population (census base)", Number(adaCounty.ESTIMATESBASE2020), "persons",
    "Ada County, Idaho", 2020, "Census Population Estimates, Vintage 2024 (2020 base)",
    "census-pep-county-2024", sources[2].url, null);
}

for (const p of adaPlaces) {
  const isMultiCounty = p.counties.length > 1;
  const total = placeTotal.get(p.placeFips);
  const adaPart = placePart.get(`${p.placeFips}:001`);
  const displayName = p.name.replace(/ (city|CDP)$/, "");
  const id = `city:${slugify(displayName)}`;

  entities.push({
    id, canonicalName: displayName, entityType:
      p.classDesc === "Incorporated Place" ? "CITY" : "CENSUS_DESIGNATED_PLACE",
    parentEntity: "county:ada",
    jurisdiction: isMultiCounty ? p.counties.join(" / ") : "Ada County, Idaho",
    officialURL: null, alternateNames: p.name !== displayName ? [p.name] : [],
    placeFips: p.placeFips, censusName: p.name,
    counties: p.counties,
    spansMultipleCounties: isMultiCounty,
    relationships: p.counties.map((c) => ({ type: "containedIn", target: `county:${slugify(c.replace(/ County$/, ""))}` })),
    sourceIds: ["census-place-county-2020", "census-pep-sub-2024"],
    notes: isMultiCounty
      ? `SPANS ${p.counties.length} COUNTIES (${p.counties.join(", ")}). Never describe as wholly within Ada County. Jurisdiction-dependent facts must be qualified by which county part is meant.`
      : null,
  });

  geographicGraph.nodes.push({ id, name: displayName, type: entities.at(-1).entityType });
  for (const c of p.counties)
    geographicGraph.edges.push({ from: id, to: `county:${slugify(c.replace(/ County$/, ""))}`, type: "containedIn",
      source: "census-place-county-2020" });

  if (total) {
    stat(`${slugify(displayName)}-pop-2024`, "resident population", Number(total.POPESTIMATE2024), "persons",
      `${displayName}, Idaho (entire place)`, 2024, "Census Population Estimates, Vintage 2024",
      "census-pep-sub-2024", sources[1].url,
      isMultiCounty ? "WHOLE PLACE across all counties it spans, not the Ada County part alone." : null);
    stat(`${slugify(displayName)}-pop-2020`, "resident population (census base)", Number(total.ESTIMATESBASE2020), "persons",
      `${displayName}, Idaho (entire place)`, 2020, "Census Population Estimates, Vintage 2024 (2020 base)",
      "census-pep-sub-2024", sources[1].url, null);
  }
  if (isMultiCounty && adaPart) {
    stat(`${slugify(displayName)}-pop-2024-ada-part`, "resident population (Ada County portion)",
      Number(adaPart.POPESTIMATE2024), "persons", `${displayName}, Idaho — Ada County part only`, 2024,
      "Census Population Estimates, Vintage 2024", "census-pep-sub-2024", sources[1].url,
      "County-part figure (SUMLEV 157). Differs from the whole-place figure.");
  }
}

// Unincorporated balance
const balance = sub.find((r) => r.SUMLEV === "157" && r.COUNTY === "001" && r.NAME.startsWith("Balance of"));
if (balance) {
  entities.push({ id: "area:unincorporated-ada", canonicalName: "Unincorporated Ada County",
    entityType: "UNINCORPORATED_AREA", parentEntity: "county:ada", jurisdiction: "Ada County, Idaho",
    officialURL: null, alternateNames: ["Balance of Ada County"], relationships: [{ type: "containedIn", target: "county:ada" }],
    sourceIds: ["census-pep-sub-2024"],
    notes: "Everything in Ada County outside an incorporated city. Its permitting, zoning and code jurisdiction is the COUNTY, not a city — the distinction most Ada County property content gets wrong." });
  stat("unincorporated-ada-pop-2024", "resident population", Number(balance.POPESTIMATE2024), "persons",
    "Unincorporated Ada County, Idaho", 2024, "Census Population Estimates, Vintage 2024",
    "census-pep-sub-2024", sources[1].url, "Census 'Balance of Ada County'.");
}

// Growth, computed from two figures in the same dataset (never across vintages)
for (const e of entities.filter((x) => x.entityType === "CITY" || x.entityType === "CENSUS_DESIGNATED_PLACE")) {
  const a = statistics.find((s) => s.id === `${slugify(e.canonicalName)}-pop-2020`);
  const b = statistics.find((s) => s.id === `${slugify(e.canonicalName)}-pop-2024`);
  if (!a || !b || !a.value) continue;
  stat(`${slugify(e.canonicalName)}-growth-2020-2024`, "population change 2020 base to 2024 estimate",
    Math.round(((b.value - a.value) / a.value) * 1000) / 10, "percent",
    `${e.canonicalName}, Idaho`, "2020-2024", "Census Population Estimates, Vintage 2024",
    "census-pep-sub-2024", sources[1].url,
    "Computed from the 2020 base and 2024 estimate WITHIN one vintage. Never compute growth across vintages or across datasets.");
}

// Backfill claimsSupported on EVERY source from the claim registry, so the two
// sides can never disagree. The claim is the single source of truth for the
// link; a hand-maintained list on the source side drifts (and did).
try {
  const claimReg = JSON.parse(readFileSync("data/idaho/evidence/ada-claims.json", "utf8"));
  for (const src of sources)
    src.claimsSupported = claimReg.claims.filter((c) => (c.sourceIds ?? []).includes(src.id)).map((c) => c.id);
} catch (e) { console.error("WARN: claimsSupported not backfilled:", e.message); }

mkdirSync("data/idaho/entities", { recursive: true });
const meta = { generatedAt: ACCESSED, generator: "scripts/research/build-ada-geography.mjs",
  provenance: "Derived exclusively from cached Census primary sources in data/idaho/raw/" };

writeFileSync("data/idaho/sources/ada-county-sources.json", JSON.stringify({ ...meta, totalSources: sources.length, sources }, null, 2));
writeFileSync("data/idaho/entities/ada-county-entities.json", JSON.stringify({ ...meta, totalEntities: entities.length, entities }, null, 2));
writeFileSync("data/idaho/entities/ada-geographic-graph.json", JSON.stringify({ ...meta, ...geographicGraph }, null, 2));
writeFileSync("data/idaho/statistics/ada-statistics.json", JSON.stringify({ ...meta, totalStatistics: statistics.length, statistics }, null, 2));

console.log(`Ada County places (crosswalk): ${adaPlaces.length}`);
for (const p of adaPlaces) console.log(`  ${p.name.padEnd(22)} ${p.classDesc.padEnd(22)} ${p.counties.join(" + ")}`);
console.log(`\nentities: ${entities.length}   statistics: ${statistics.length}   sources: ${sources.length}`);
console.log("\nPopulation, Vintage 2024:");
for (const s of statistics.filter((x) => x.year === 2024 && x.metric.startsWith("resident population")))
  console.log(`  ${s.geography.padEnd(48)} ${String(s.value).padStart(8)}`);
console.log("\nGrowth 2020 base → 2024 estimate:");
for (const s of statistics.filter((x) => x.unit === "percent").sort((a, b) => b.value - a.value))
  console.log(`  ${s.geography.padEnd(34)} ${String(s.value).padStart(6)}%`);

/**
 * Generates the Ada County dossier and one dossier per municipality.
 *
 * ASSEMBLED FROM THE REGISTRIES, never hand-written. A dossier that is typed by
 * hand drifts from the evidence the moment a claim changes; one that is
 * generated cannot. Every statement traces to a claim id and a source id.
 */
import { readFileSync, writeFileSync } from "node:fs";
const read = (p) => JSON.parse(readFileSync(p, "utf8"));
const sources = read("data/idaho/sources/ada-county-sources.json").sources;
const claims = read("data/idaho/evidence/ada-claims.json").claims.filter((c) => c.approvedForPublication);
const entities = read("data/idaho/entities/ada-county-entities.json").entities;
const statsA = read("data/idaho/statistics/ada-statistics.json").statistics;
const statsC = read("data/idaho/statistics/ada-statistics-compass.json").statistics;
const jur = read("data/idaho/jurisdictions/ada-jurisdictions.json").rows;
const allStats = [...statsA, ...statsC];
const srcById = Object.fromEntries(sources.map((s) => [s.id, s]));
const slug = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const ancestors = (id) => {
  const out = [id]; let cur = entities.find((e) => e.id === id);
  while (cur?.parentEntity) { out.push(cur.parentEntity); cur = entities.find((e) => e.id === cur.parentEntity); }
  return out;
};

function citation(c) {
  const s = (c.sourceIds ?? []).map((id) => srcById[id]).filter(Boolean);
  return s.map((x) => `[${x.title}](${x.url})`).join(" · ") || "_no source_";
}

function claimBlock(list) {
  if (!list.length) return "_None recorded._\n";
  return list.map((c) =>
    `**${c.claim}**\n\n` +
    (c.quotedLanguage ? `> ${c.quotedLanguage.replace(/\n/g, " ")}\n\n` : "") +
    `Source: ${citation(c)}  \n` +
    `\`${c.id}\` · confidence ${c.confidence} · verified ${c.verifiedOn}` +
    (c.notes ? `\n\n⚠️ ${c.notes}` : "") + "\n"
  ).join("\n---\n\n");
}

function statBlock(geoMatch) {
  const rows = allStats.filter((s) => geoMatch.test(s.geography));
  if (!rows.length) return "_No statistics recorded._\n";
  return "| Metric | Value | Year | Dataset |\n|---|---:|---:|---|\n" +
    rows.map((s) => `| ${s.metric} | ${typeof s.value === "number" ? s.value.toLocaleString() : s.value}${s.unit === "percent" ? "%" : ""} | ${s.year} | ${s.dataset} |`).join("\n") + "\n";
}

function jurBlock(entityId) {
  const rows = jur.filter((r) => r.entity === entityId);
  if (!rows.length) return "_No jurisdiction rows._\n";
  return "| Function | Authority | Status |\n|---|---|---|\n" +
    rows.map((r) => `| ${r.function} | ${r.responsibleAuthority ?? "—"} | ${r.status} |`).join("\n") + "\n";
}

const DIMENSIONS = ["geography","jurisdiction","assessment","property-taxes","exemptions","planning","zoning","permits",
  "land","subdivision","water","irrigation","well","septic","flood","wildfire","foreclosure","probate","inheritance",
  "tenants","disclosure","manufactured-housing","recording","deeds","title","code-enforcement","population","growth","differentiation"];

function dossier(entity) {
  const chain = new Set(ancestors(entity.id));
  const direct = claims.filter((c) => (c.entity ?? []).includes(entity.id));
  const unique = direct.filter((c) => (c.entity ?? []).length === 1);
  const inherited = claims.filter((c) => (c.entity ?? []).some((e) => chain.has(e)) && !(c.entity ?? []).includes(entity.id));
  const isCounty = entity.entityType === "COUNTY";
  const geoRe = new RegExp(entity.canonicalName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");

  return `# ${entity.canonicalName} — Research Dossier

**GENERATED** by \`scripts/research/build-dossiers.mjs\` from the claim, source, statistic and
jurisdiction registries. Do not hand-edit. Every statement below traces to a claim id and a
primary source.

> This is RESEARCH, not page copy. Nothing here is written for publication.

## Identity

| Field | Value |
|---|---|
| Entity id | \`${entity.id}\` |
| Type | ${entity.entityType} |
| Parent | ${entity.parentEntity ?? "—"} |
| Jurisdiction | ${entity.jurisdiction ?? "—"} |
| Census name | ${entity.censusName ?? "—"} |
| Census place FIPS | ${entity.placeFips ?? "—"} |
| Counties | ${(entity.counties ?? ["Ada County"]).join(", ")} |
| Spans multiple counties | ${entity.spansMultipleCounties ? "**YES**" : "no"} |
${entity.notes ? `\n⚠️ ${entity.notes}\n` : ""}
## Statistics

⚠️ Two population estimate families exist for Ada County and they differ by roughly 4%.
COMPASS and U.S. Census Bureau figures are both authoritative and must always be labelled
by dataset. Never mix them in one comparison.

${statBlock(geoRe)}
## Property administration

${jurBlock(entity.id)}
## Claims specific to ${entity.canonicalName} (${direct.length})

${direct.length ? `**${unique.length} of these name no other entity** — these are what could differentiate a page.\n\n` : ""}${claimBlock(direct)}
## Inherited claims (${inherited.length})

Idaho- and county-level claims that apply here. They make a page CORRECT; they cannot make
it DISTINCT, because every neighbouring city inherits the same ones.

${inherited.length ? inherited.map((c) => `- \`${c.id}\` — ${c.claim}`).join("\n") : "_None._"}

## Evidence gaps

${DIMENSIONS.filter((d) => ![...direct, ...inherited].some((c) => (c.topic ?? []).includes(d)))
  .map((d) => `- **${d}** — no approved claim reaches this entity`).join("\n") || "_No dimension gap._"}

## Publication readiness

- Direct claims: **${direct.length}** · unique to this entity: **${unique.length}**
- ${unique.length >= 3 ? "Has genuinely distinctive material." : unique.length >= 1 ? "⚠️ Thin — one or two distinctive facts only. A page here risks reading as a template of its neighbours." : "❌ NO distinctive material. Must not receive an indexable page."}
${isCounty ? "" : "- Municipality pages remain gated until the differentiation matrix supports them.\n"}`;
}

const county = entities.find((e) => e.id === "county:ada");
writeFileSync("research/idaho/ada-county/ADA-COUNTY.md", dossier(county));
let n = 1;
for (const e of entities.filter((x) => ["CITY", "CENSUS_DESIGNATED_PLACE"].includes(x.entityType))) {
  writeFileSync(`research/idaho/ada-county/municipalities/${slug(e.canonicalName).toUpperCase()}.md`, dossier(e));
  n++;
}
console.log(`wrote ${n} dossiers`);
for (const e of [county, ...entities.filter((x) => ["CITY","CENSUS_DESIGNATED_PLACE"].includes(x.entityType))]) {
  const d = claims.filter((c) => (c.entity ?? []).includes(e.id));
  const u = d.filter((c) => (c.entity ?? []).length === 1);
  console.log(`  ${e.canonicalName.padEnd(16)} direct ${String(d.length).padStart(3)}  unique ${String(u.length).padStart(2)}`);
}

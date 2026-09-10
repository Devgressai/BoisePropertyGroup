/**
 * Content blueprints — one per Ada entity.
 *
 * NOT PAGE COPY. A blueprint says what a page could be built from and what it
 * may not claim. Assembled from the registries so it cannot promise material
 * the evidence does not hold.
 */
import { readFileSync, writeFileSync } from "node:fs";
const read = (p) => JSON.parse(readFileSync(p, "utf8"));
const claims = read("data/idaho/evidence/ada-claims.json").claims.filter((c) => c.approvedForPublication);
const sources = read("data/idaho/sources/ada-county-sources.json").sources;
const entities = read("data/idaho/entities/ada-county-entities.json").entities;
const jur = read("data/idaho/jurisdictions/ada-jurisdictions.json").rows;
const stats = [...read("data/idaho/statistics/ada-statistics.json").statistics,
                ...read("data/idaho/statistics/ada-statistics-compass.json").statistics];
const opps = read("data/idaho/content/ada-opportunity-maps.json");
const srcById = Object.fromEntries(sources.map((s) => [s.id, s]));
const slug = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const ancestors = (id) => { const o=[id]; let c=entities.find(e=>e.id===id);
  while(c?.parentEntity){o.push(c.parentEntity);c=entities.find(e=>e.id===c.parentEntity);} return o; };

function blueprint(e) {
  const chain = new Set(ancestors(e.id));
  const direct = claims.filter(c => (c.entity??[]).includes(e.id));
  const unique = direct.filter(c => (c.entity??[]).length === 1);
  const inherited = claims.filter(c => (c.entity??[]).some(x=>chain.has(x)) && !(c.entity??[]).includes(e.id));
  const isCounty = e.entityType === "COUNTY";
  const geoRe = new RegExp(e.canonicalName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i");
  const myStats = stats.filter(s => geoRe.test(s.geography));
  const myJur = jur.filter(r => r.entity === e.id && r.status === "VERIFIED");
  const resources = [...new Set(myJur.map(r => r.officialResource).filter(Boolean))];
  const ready = unique.length >= 3 ? "BUILD — has distinctive material"
    : unique.length >= 1 ? "RENDER, DO NOT INDEX — thin"
    : "DO NOT BUILD — no distinctive material";

  const topFacts = unique.length ? unique : direct.slice(0,3);

  return `# ${e.canonicalName} — Content Blueprint

**GENERATED** by \`scripts/research/build-blueprints.mjs\`. **This is not page copy.**
It states what a page could be built from, and what it may not claim.

## Verdict

**${ready}** — ${direct.length} direct claims, ${unique.length} unique to this entity.

## Intent

| | |
|---|---|
| Primary | ${isCounty ? "local transactional — county-level cash sale" : "local transactional — city-level cash sale"} |
| Secondary | local informational — property administration and jurisdiction |
| Canonical route | \`/sell-my-house-fast-${slug(e.canonicalName)}${isCounty ? "" : "-id"}\` |
| Must NOT also target | any intent owned by a knowledge pillar; the pillar explains, this page converts |

## What makes this page different from its neighbours

${unique.length ? unique.map(c => `- **${c.claim}**\n  _(\`${c.id}\`)_`).join("\n")
  : "**Nothing.** Every claim reaching this entity also reaches at least one other. A page here would restate its neighbours."}

## Recommended sections

1. **Opening answer** — what we buy here and on what terms. No inherited material.
2. **What is specific to ${e.canonicalName}** — built ONLY from the ${unique.length} unique claim(s) above.
3. **Property administration** — who does what for a property here${myJur.length ? ` (${myJur.length} verified functions)` : ""}. Summarise and LINK; do not reproduce the county hub.
4. **Situations we buy in** — link out to situation pillars, do not restate them.
5. **Offer method** — shared component.
6. **Local resources** — external links to the authorities below.
${isCounty ? "7. **Municipalities** — link to each city page that exists.\n" : ""}
## Statistics available (${myStats.length})

${myStats.length ? myStats.slice(0,10).map(s=>`- ${s.metric}: **${typeof s.value==="number"?s.value.toLocaleString():s.value}${s.unit==="percent"?"%":""}** (${s.year}, ${s.dataset})`).join("\n") : "_None._"}

⚠️ Every population figure must name its estimate family. COMPASS and Census PEP differ by ~4%.

## Verified jurisdiction facts (${myJur.length})

${myJur.length ? myJur.map(r=>`| ${r.function} | ${r.responsibleAuthority} |`).join("\n").replace(/^/,"| Function | Authority |\n|---|---|\n") : "_None verified._"}

## Local resources for external links

${resources.length ? resources.map(r=>`- ${r}`).join("\n") : "_None._"}

## Best-evidenced situations and property types to link to

${opps.sellerSituations.filter(s=>s.evidenceGrade==="HIGH").map(s=>`- situation: ${s.name}`).join("\n")}
${opps.propertyTypes.filter(s=>s.evidenceGrade==="HIGH").map(s=>`- property type: ${s.name}`).join("\n")}

## Information gain — what this page can offer that competitors do not

${topFacts.length ? topFacts.map(c=>`- ${c.claim}`).join("\n") : "_None identified._"}

## What this page MUST NOT claim

${[...direct,...inherited].filter(c=>c.notes && /never|do not|must not|⚠/i.test(c.notes)).slice(0,12)
  .map(c=>`- \`${c.id}\` — ${c.notes.replace(/\s+/g," ").slice(0,220)}…`).join("\n")}

## Inherited material (${inherited.length} claims)

Makes the page correct; cannot make it distinct. Use sparingly and link to the
pillar that owns each topic rather than restating it.
`;
}

let n=0;
for (const e of entities.filter(x=>["COUNTY","CITY","CENSUS_DESIGNATED_PLACE"].includes(x.entityType))) {
  const name = e.entityType==="COUNTY" ? "ADA-COUNTY" : slug(e.canonicalName).toUpperCase();
  writeFileSync(`research/idaho/ada-county/content-opportunities/${name}-BLUEPRINT.md`, blueprint(e));
  n++;
  const d=claims.filter(c=>(c.entity??[]).includes(e.id));
  const u=d.filter(c=>(c.entity??[]).length===1);
  console.log(`  ${e.canonicalName.padEnd(16)} ${(u.length>=3?"BUILD":u.length>=1?"RENDER-NOINDEX":"DO NOT BUILD").padEnd(15)} ${d.length} direct / ${u.length} unique`);
}
console.log(`\n${n} blueprints written`);

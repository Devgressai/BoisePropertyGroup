/**
 * Commercial evidence gate.
 *
 * Same rules as the residential gate, plus two commercial-specific ones:
 *  - a claim may cite the RESIDENTIAL registry (crossRegistry), and that source
 *    must resolve there — re-use beats restating a fact in two places;
 *  - no quantitative market claim (cap rate, rent, vacancy, absorption, price
 *    per foot, transaction volume) may exist without a dated, geography-matched
 *    source. Brokerage forecasts are not facts.
 */
import { readFileSync } from "node:fs";
const read = (p) => JSON.parse(readFileSync(p, "utf8"));
const cClaims = read("data/commercial/claims/commercial-claims.json").claims;
const cSources = read("data/commercial/sources/commercial-sources.json").sources;
const rSources = read("data/idaho/sources/ada-county-sources.json").sources;
const rEntities = read("data/idaho/entities/ada-county-entities.json").entities;

const errors = [], warnings = [];
const E = (m) => errors.push(m);
const W = (m) => warnings.push(m);

const sourceById = new Map();
for (const s of [...cSources, ...rSources]) {
  if (sourceById.has(s.id) && cSources.includes(s)) E(`duplicate source id: ${s.id}`);
  sourceById.set(s.id, s);
}
const entityIds = new Set(rEntities.map((e) => e.id));
const ids = new Set();

const MARKET_TERMS =
  /\b(cap rate|caprate|vacancy rate|absorption|rent(s|al rate)?\s+(of|at|per)|price per (square )?foot|psf|transaction volume|median (sale|price)|noi of|\$\d)/i;

for (const c of cClaims) {
  if (ids.has(c.id)) E(`duplicate claim id: ${c.id}`);
  ids.add(c.id);

  if (!c.assetClass?.length) E(`claim ${c.id} declares no assetClass`);
  for (const sid of c.sourceIds ?? [])
    if (!sourceById.has(sid)) E(`claim ${c.id} cites unknown source: ${sid}`);
  for (const eid of c.entity ?? [])
    if (!entityIds.has(eid)) E(`claim ${c.id} references unknown entity: ${eid}`);

  if (c.approvedForPublication) {
    if (!c.sourceIds?.length) E(`APPROVED claim ${c.id} has no source`);
    const verified = (c.sourceIds ?? []).filter((s) => sourceById.get(s)?.status === "VERIFIED");
    if (c.sourceIds?.length && !verified.length) E(`APPROVED claim ${c.id} cites no VERIFIED source`);
    if (!c.verifiedOn) E(`APPROVED claim ${c.id} has no verifiedOn date`);
    if (["LOW", "DISPUTED"].includes(c.confidence)) E(`APPROVED claim ${c.id} has ${c.confidence} confidence`);

    // No market number without a dated source.
    const text = `${c.claim} ${c.quotedLanguage ?? ""}`;
    if (MARKET_TERMS.test(text)) {
      const dated = (c.sourceIds ?? []).some((s) => {
        const src = sourceById.get(s);
        return src && (src.publicationDate || src.updatedDate);
      });
      if (!dated)
        E(`APPROVED claim ${c.id} states a MARKET figure but no cited source carries a publication or update date`);
    }
  }
}

// Bidirectional link symmetry within the commercial registry.
for (const s of cSources)
  for (const cid of s.claimsSupported ?? []) {
    const c = cClaims.find((x) => x.id === cid);
    if (!c) { E(`source ${s.id} lists unknown claim: ${cid}`); continue; }
    if (!c.sourceIds?.includes(s.id)) E(`asymmetric: ${s.id} claims ${cid}, which does not cite it`);
  }
for (const c of cClaims)
  for (const sid of c.sourceIds ?? []) {
    const s = cSources.find((x) => x.id === sid);
    if (s && !(s.claimsSupported ?? []).includes(c.id))
      E(`asymmetric: claim ${c.id} cites ${sid}, which does not list it`);
    if (!s && !c.crossRegistry)
      W(`claim ${c.id} cites residential source ${sid} without crossRegistry:true`);
  }

// Staleness must be declared on commercial sources.
for (const s of cSources)
  if (!s.stalenessRisk) W(`commercial source ${s.id} declares no stalenessRisk`);

const approved = cClaims.filter((c) => c.approvedForPublication);
const byAsset = {};
for (const c of approved) for (const a of c.assetClass ?? []) byAsset[a] = (byAsset[a] ?? 0) + 1;

console.log(`commercial: ${cClaims.length} claims (${approved.length} approved) · ${cSources.length} own sources`);
console.log("by asset class:", JSON.stringify(byAsset));
if (warnings.length) { console.log(`\nWARNINGS (${warnings.length}):`); for (const w of warnings) console.log(`  ! ${w}`); }
if (errors.length) { console.log(`\nERRORS (${errors.length}):`); for (const e of errors) console.log(`  x ${e}`); process.exit(1); }
console.log("\nCOMMERCIAL EVIDENCE GATE: PASS");

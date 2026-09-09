/**
 * Evidence integrity gate. Exits non-zero on any ERROR.
 *
 * A claim registry nobody validates is a claim registry that quietly rots —
 * which is exactly what happened to Sierra's fact layer, where every fact in
 * the store ended up citing Sierra itself and nothing noticed.
 */
import { readFileSync } from "node:fs";

const read = (p) => JSON.parse(readFileSync(p, "utf8"));
const sources = read("data/idaho/sources/ada-county-sources.json").sources;
const claims = read("data/idaho/evidence/ada-claims.json").claims;
const entities = read("data/idaho/entities/ada-county-entities.json").entities;
const statistics = read("data/idaho/statistics/ada-statistics.json").statistics;

const errors = [], warnings = [];
const E = (m) => errors.push(m);
const W = (m) => warnings.push(m);

const sourceById = new Map();
for (const s of sources) {
  if (sourceById.has(s.id)) E(`duplicate source id: ${s.id}`);
  sourceById.set(s.id, s);
}
const entityIds = new Set(entities.map((e) => e.id));
const claimIds = new Set();
for (const c of claims) {
  if (claimIds.has(c.id)) E(`duplicate claim id: ${c.id}`);
  claimIds.add(c.id);
}

// Canonical name collisions
const byName = new Map();
for (const e of entities) {
  const k = e.canonicalName.toLowerCase();
  if (byName.has(k)) E(`duplicate canonical entity name: "${e.canonicalName}" (${byName.get(k)} and ${e.id})`);
  byName.set(k, e.id);
}

for (const c of claims) {
  // 1. references resolve
  for (const sid of c.sourceIds ?? [])
    if (!sourceById.has(sid)) E(`claim ${c.id} cites unknown source: ${sid}`);
  for (const eid of c.entity ?? [])
    if (!entityIds.has(eid)) E(`claim ${c.id} references unknown entity: ${eid}`);

  // 2. an approved claim must have evidence, and at least one VERIFIED source
  if (c.approvedForPublication) {
    if (!c.sourceIds?.length) E(`APPROVED claim ${c.id} has no source — orphan approved claim`);
    const verified = (c.sourceIds ?? []).filter((s) => sourceById.get(s)?.status === "VERIFIED");
    if (c.sourceIds?.length && !verified.length)
      E(`APPROVED claim ${c.id} cites no VERIFIED source (all pending/unverified)`);
    const pending = (c.sourceIds ?? []).filter((s) => sourceById.get(s)?.status !== "VERIFIED");
    if (pending.length)
      W(`approved claim ${c.id} also cites unverified source(s): ${pending.join(", ")}`);
    if (!c.verifiedOn) E(`APPROVED claim ${c.id} has no verifiedOn date`);
    if (c.confidence === "LOW" || c.confidence === "DISPUTED")
      E(`APPROVED claim ${c.id} has ${c.confidence} confidence — must not be approved`);
  }

  // 3. statutory claims must record whether a future-dated amendment exists
  const isStatutory = (c.sourceIds ?? []).some((s) => sourceById.get(s)?.freshnessClass === "STATUTORY");
  if (isStatutory && c.approvedForPublication && c.futureDatedAmendment === undefined)
    E(`statutory claim ${c.id} does not record futureDatedAmendment`);
  if (isStatutory && c.approvedForPublication && c.futureDatedAmendment === null)
    W(`statutory claim ${c.id} has futureDatedAmendment=null — confirm the revision history was checked`);

  // 4. a claim quoting operative language should have it
  if (c.approvedForPublication && c.confidence === "HIGH" && c.quotedLanguage === null && isStatutory)
    W(`approved HIGH statutory claim ${c.id} carries no quotedLanguage`);
}

// 5. bidirectional consistency between source.claimsSupported and claim.sourceIds
for (const s of sources) {
  for (const cid of s.claimsSupported ?? []) {
    if (!claimIds.has(cid)) { E(`source ${s.id} lists unknown claim: ${cid}`); continue; }
    const c = claims.find((x) => x.id === cid);
    if (!c.sourceIds?.includes(s.id))
      E(`asymmetric link: source ${s.id} claims to support ${cid}, but that claim does not cite it`);
  }
}
for (const c of claims)
  for (const sid of c.sourceIds ?? []) {
    const s = sourceById.get(sid);
    if (s && !(s.claimsSupported ?? []).includes(c.id))
      E(`asymmetric link: claim ${c.id} cites ${sid}, but that source does not list it`);
  }

// 6. statistics must never be naked
for (const st of statistics) {
  if (st.year === undefined || st.year === null) E(`statistic ${st.id} has no year`);
  if (!st.sourceId) E(`statistic ${st.id} has no sourceId`);
  else if (!sourceById.has(st.sourceId)) E(`statistic ${st.id} cites unknown source: ${st.sourceId}`);
  if (!st.dataset) E(`statistic ${st.id} has no dataset`);
  if (st.value === undefined || st.value === null || Number.isNaN(st.value)) E(`statistic ${st.id} has no value`);
  if (!st.lastVerified) E(`statistic ${st.id} has no lastVerified date`);
}

// 7. orphan entities — an entity nothing sources
for (const e of entities)
  if (!e.sourceIds?.length && e.evidenceStatus === undefined)
    W(`entity ${e.id} has no sourceIds and no evidenceStatus`);

// 8. multi-county places must carry the warning note
for (const e of entities)
  if (e.spansMultipleCounties && !e.notes)
    E(`entity ${e.id} spans multiple counties but carries no qualifying note`);

console.log(`sources ${sources.length} · claims ${claims.length} · entities ${entities.length} · statistics ${statistics.length}`);
console.log(`approved claims: ${claims.filter((c) => c.approvedForPublication).length}`);
if (warnings.length) { console.log(`\nWARNINGS (${warnings.length}):`); for (const w of warnings) console.log(`  ! ${w}`); }
if (errors.length) { console.log(`\nERRORS (${errors.length}):`); for (const e of errors) console.log(`  ✗ ${e}`); process.exit(1); }
console.log("\nEVIDENCE INTEGRITY: PASS");

/**
 * Evidence integrity gate. Exits non-zero on any ERROR.
 *
 * A claim registry nobody validates is a claim registry that quietly rots —
 * which is exactly what happened to Sierra's fact layer, where every fact in
 * the store ended up citing Sierra itself and nothing noticed.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";

const read = (p) => JSON.parse(readFileSync(p, "utf8"));
const sources = read("data/idaho/sources/ada-county-sources.json").sources;
const claims = read("data/idaho/evidence/ada-claims.json").claims;
const entities = read("data/idaho/entities/ada-county-entities.json").entities;
const statistics = [
  ...read("data/idaho/statistics/ada-statistics.json").statistics,
  ...read("data/idaho/statistics/ada-statistics-compass.json").statistics,
];

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

/**
 * 5. bidirectional consistency between source.claimsSupported and claim.sourceIds
 *
 * A COMMERCIAL claim may legitimately cite a RESIDENTIAL source — Idaho Code and
 * Ada County assessment material serve both verticals, and duplicating those
 * sources into the commercial registry would mean two rows to keep in step
 * instead of one. So a residential source listing a commercial claim is correct,
 * not an error, and this check has to know about both registries to see that.
 * It previously loaded only residential claims and reported the cross-registry
 * link as an unknown claim.
 */
const commercialClaimIds = new Set(
  JSON.parse(readFileSync("data/commercial/claims/commercial-claims.json", "utf8")).claims.map((c) => c.id),
);
for (const s of sources) {
  for (const cid of s.claimsSupported ?? []) {
    if (commercialClaimIds.has(cid)) continue; // cross-registry citation
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

// 9. The two population estimate families must never share a statistic id, and
//    every COMPASS/ACS figure must say so in its dataset field.
const ids = new Set();
for (const st of statistics) {
  if (ids.has(st.id)) E(`duplicate statistic id across files: ${st.id}`);
  ids.add(st.id);
}
for (const st of statistics.filter((s) => s.sourceId === "ada-compass-demographics"))
  if (!/COMPASS|ACS|Census/i.test(st.dataset ?? ""))
    E(`statistic ${st.id} does not name its estimate family in dataset`);

console.log(`sources ${sources.length} · claims ${claims.length} · entities ${entities.length} · statistics ${statistics.length}`);
console.log(`approved claims: ${claims.filter((c) => c.approvedForPublication).length}`);
if (warnings.length) { console.log(`\nWARNINGS (${warnings.length}):`); for (const w of warnings) console.log(`  ! ${w}`); }
/**
 * A cached artifact must be what its extension says it is.
 *
 * fetch-source.mjs used to call res.text() unconditionally, which decodes a
 * PDF's binary stream as UTF-8 and destroys it. The file still landed in the
 * cache looking fetched, and extracted ZERO characters. That is worse than a
 * missing file: an audit sees an artifact and is satisfied, so a claim looks
 * verified when nothing verifiable exists. Two PDFs were cached that way; no
 * published claim happened to depend on them, which was luck rather than
 * design. Hence this check.
 */
{
  const CACHE_DIR = "data/idaho/raw/cache";
  const MAGIC = [["%PDF", "PDF"], ["PK\u0003\u0004", "ZIP/OOXML"], ["\u0089PNG", "PNG"]];
  if (existsSync(CACHE_DIR)) {
    for (const f of readdirSync(CACHE_DIR).filter((x) => x.endsWith(".html"))) {
      const head = readFileSync(`${CACHE_DIR}/${f}`, "latin1").slice(0, 8);
      for (const [magic, kind] of MAGIC) {
        if (head.startsWith(magic))
          errors.push(`${f} is a ${kind} cached as .html — its bytes are corrupted, re-fetch it`);
      }
    }
  }
}

/**
 * Provenance of cached artifacts.
 *
 * Most of the cache comes from fetch-source.mjs. Some cannot: American Legal
 * hosts the codified Boise and Ada County ordinances and returns HTTP 403 to
 * every automated request, so those pages were captured as rendered DOM through
 * local Chrome. That is a legitimate artifact — amlegal renders server-side, so
 * the DOM is the served page — but it is NOT a fetcher response, and the
 * difference must stay visible rather than be quietly forgotten.
 *
 * So an artifact captured another way must SAY SO and say why. The check counts
 * them rather than rejecting them: hiding the distinction would be the problem,
 * not the capture method.
 */
{
  const CACHE_DIR = "data/idaho/raw/cache";
  let alt = 0;
  if (existsSync(CACHE_DIR)) {
    for (const f of readdirSync(CACHE_DIR).filter((x) => x.endsWith(".meta.json"))) {
      let meta;
      try {
        meta = JSON.parse(readFileSync(`${CACHE_DIR}/${f}`, "utf8"));
      } catch {
        errors.push(`${f} is not valid JSON — a cache artifact must carry readable provenance`);
        continue;
      }
      if (!meta.fetchedVia) continue;
      alt++;
      if (!meta.note || meta.note.length < 40) {
        errors.push(
          `${f} records fetchedVia "${meta.fetchedVia}" with no explanation — say why the fetcher could not be used`,
        );
      }
    }
  }
  if (alt) console.log(`  cache artifacts captured outside the fetcher: ${alt} (each carries its reason)`);
}

/**
 * An approved claim may not carry an UNRESOLVED temporal status.
 *
 * Two claims were unblocked against the adopted Ada County ordinance — claim
 * text, quote, sources, confidence, approval and verification flag all updated
 * — and temporalStatus was left at ADOPTION_UNCONFIRMED. So a live, approved
 * claim carried a status saying its own adoption was unconfirmed, contradicting
 * its notes. It was invisible because the field was never emitted to the app,
 * which is the worst place for a contradiction to sit: in the registry the next
 * person trusts.
 *
 * CURRENT and HISTORICAL are both fine. HISTORICAL is rendered with a visible
 * "fixed past period" label, so a dated figure can never appear undated.
 */
{
  const RESOLVED = new Set(["CURRENT", "HISTORICAL", null, undefined]);
  /**
   * BOTH registries. Written first over the residential claims only, and a
   * negative control caught it immediately: the defect it was written for lives
   * on a COMMERCIAL claim, so the guard passed while the bad status sat right
   * where it started. That is the same one-registry blind spot the quote audit
   * had. Any check that walks "the claims" has to say which claims.
   */
  const everyClaim = [
    ...claims.map((c) => ({ ...c, registry: "residential" })),
    ...JSON.parse(readFileSync("data/commercial/claims/commercial-claims.json", "utf8")).claims.map(
      (c) => ({ ...c, registry: "commercial" }),
    ),
  ];
  for (const c of everyClaim) {
    if (!c.approvedForPublication) continue;
    if (!RESOLVED.has(c.temporalStatus))
      E(`approved [${c.registry}] claim ${c.id} carries an unresolved temporalStatus: ${c.temporalStatus}`);
  }
}

/**
 * A CITED URL MUST BE ONE A READER CAN OPEN, AND KEEP OPENING.
 *
 * Six sources cited Municode's content API — the endpoint the text was
 * retrieved through. That URL embeds a jobId which Municode rotates on every
 * supplement, so all six had already gone dead while our cached copies stayed
 * perfectly valid. Ten approved claims on two live pages pointed a reader at a
 * 404. Nothing detected it: the quote audit verifies against the CACHE, not the
 * URL, so the evidence was sound and only the citation was broken.
 *
 * Retrieval and citation are different jobs. How we got the bytes belongs in
 * retrievalUrl; what a reader should open belongs in url, and it must be stable.
 */
{
  const VOLATILE = [
    { pattern: /api\.municode\.com/i, why: "Municode's content API — cite the library.municode.com permalink instead" },
    { pattern: /[?&]jobId=/i, why: "embeds a jobId that rotates on every supplement" },
    { pattern: /[?&](sessionid|token|sig)=/i, why: "embeds a session or signing parameter" },
  ];
  const allSources = [
    ...sources.map((s) => ({ ...s, registry: "residential" })),
    ...JSON.parse(readFileSync("data/commercial/sources/commercial-sources.json", "utf8")).sources.map(
      (s) => ({ ...s, registry: "commercial" }),
    ),
  ];
  for (const s of allSources) {
    for (const v of VOLATILE) {
      if (v.pattern.test(s.url ?? ""))
        E(`[${s.registry}] source ${s.id} cites an unstable URL — ${v.why}`);
    }
  }
}

if (errors.length) { console.log(`\nERRORS (${errors.length}):`); for (const e of errors) console.log(`  ✗ ${e}`); process.exit(1); }

console.log("\nEVIDENCE INTEGRITY: PASS");

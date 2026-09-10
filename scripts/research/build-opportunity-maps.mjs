/**
 * Property-type and seller-situation opportunity maps.
 *
 * Scores each candidate page type by EVIDENCE AVAILABLE, not by whether Sierra
 * has an equivalent. A type Sierra covers well but Idaho cannot evidence scores
 * INSUFFICIENT_EVIDENCE and does not get built.
 */
import { readFileSync, writeFileSync } from "node:fs";
const claims = JSON.parse(readFileSync("data/idaho/evidence/ada-claims.json", "utf8"))
  .claims.filter((c) => c.approvedForPublication);
const topicsOf = (t) => claims.filter((c) => (c.topic ?? []).includes(t));

// candidate, required evidence topics, business relevance, note
const PROPERTY_TYPES = [
  ["Single-family house", ["assessment","disclosure","property-taxes"], "CORE", "The default. Evidence is broad."],
  ["Rental / unwanted rental", ["tenants","disclosure"], "CORE", "Deposit liability transfers on sale (6-321(3)); disclosure applies to non-owner-occupied rental."],
  ["Small multifamily (2-4 units)", ["assessment","disclosure","tenants"], "HIGH", "Assessor treats up to four units as residential; disclosure act covers 1-4 dwelling units. Clean boundary."],
  ["Multifamily 5+ units", ["assessment"], "CORE", "OWNER-CONFIRMED acquisition target (2026-09-10). Falls outside the residential assessment and disclosure boundaries — Ada County routes apartments to commercial appraisers — so the residential evidence base does not reach it."],
  ["Manufactured / mobile home", ["manufactured-housing","real-vs-personal-property","recording"], "HIGH", "63-304 conversion test is decisive and well evidenced."],
  ["Vacant land / lot", ["land","subdivision","water","irrigation"], "HIGH", "Irrigation, water and subdivision evidence is strong."],
  ["Acreage / rural property", ["water","well","septic","irrigation","acreage"], "HIGH", "Domestic water cap, septic authority and irrigation districts all evidenced."],
  ["Development land", ["subdivision","planning","water","zoning"], "MEDIUM", "42-111 excludes subdivisions from domestic water — a real constraint. Land-use subdivision thresholds NOT yet researched per city."],
  ["Infill lot", ["subdivision","planning","zoning"], "MEDIUM", "Star's one-time administrative split is evidenced; other cities' rules are not."],
  ["Problem / difficult property", ["access","easements","flood","land"], "MEDIUM", "Floodplain permits and private roads evidenced for unincorporated county; easement evidence is thin."],
  ["Flood-affected property", ["flood"], "MEDIUM", "Boise's three flood sources and Ada's permit requirement evidenced; parcel-level determination is explicitly out of scope."],
  ["Fire-damaged / WUI property", ["wildfire"], "MEDIUM", "Boise WUI-O overlay evidenced. No evidence for other cities — do not assume."],
  ["Commercial property", [], "LOW", "No evidence gathered. Out of scope for Phase 1."],
];

const SELLER_SITUATIONS = [
  ["Inherited property", ["probate","inheritance","disclosure"], "CORE", "15-3-711 PR power + 55-2505(7) fiduciary disclosure exemption. Strongest evidenced situation."],
  ["Probate sale", ["probate","inheritance"], "CORE", "PR power without court order, qualified by 15-3-715. Treasurer is ex officio public administrator."],
  ["Foreclosure / behind on payments", ["foreclosure"], "CORE", "120-day trustee sale notice, publication and service all evidenced."],
  ["Property tax delinquency", ["property-taxes","foreclosure"], "HIGH", "3-year tax deed clock + 14-month double-gated redemption. Distinct from foreclosure and heavily evidenced."],
  ["Selling with tenants", ["tenants","recording"], "HIGH", "Deposit liability transfers; one-year lease carve-out in the recording act."],
  ["Bad tenants / unauthorized occupants", ["tenants"], "MEDIUM", "6-310A evidenced but narrowly — excludes former tenants and family. Easy to misuse."],
  ["Divorce", ["disclosure"], "MEDIUM", "Only the disclosure exemption is evidenced, and it covers spouse-to-spouse transfers ONLY. Idaho community property treatment NOT researched."],
  ["Vacant property", ["vacant","code-enforcement"], "MEDIUM", "Code enforcement is unincorporated-only. City-side enforcement not researched."],
  ["Code violations", ["code-enforcement","permits"], "MEDIUM", "County process evidenced end to end; city processes are not."],
  ["Major repairs / as-is", ["disclosure","assessment"], "HIGH", "Disclosure duty applies by default — the honest angle competitors get wrong."],
  ["Liens and judgments", ["liens"], "LOW", "Not researched as a topic in its own right."],
  ["Relocation", [], "LOW", "No Idaho-specific evidence needed or gathered."],
  ["Hoarder property", [], "LOW", "No Idaho-specific evidence. Generic."],
  ["Fire damage", ["wildfire"], "LOW", "WUI overlay is about construction, not damaged-property sale. Weak fit."],
];

/**
 * Graded on the WEAKEST required topic, not the union across all of them.
 *
 * The first version unioned claims across every required topic, which rewarded
 * candidates merely for touching more topics: "Development land" scored 26 and
 * outranked "Inherited property", which is plainly wrong — inherited property
 * has the deepest specific evidence in the registry. A candidate needing four
 * kinds of evidence is only as ready as the kind it has least of.
 */
function score(topics) {
  if (!topics.length) return { n: 0, weakest: null, grade: "INSUFFICIENT_EVIDENCE" };
  const per = topics.map((t) => ({ t, n: topicsOf(t).length }));
  const min = per.reduce((a, b) => (a.n <= b.n ? a : b));
  const total = new Set(topics.flatMap((t) => topicsOf(t).map((c) => c.id))).size;
  const grade = min.n === 0 ? "INSUFFICIENT_EVIDENCE" : min.n >= 5 ? "HIGH" : min.n >= 3 ? "MEDIUM" : "LOW";
  return { n: total, weakest: `${min.t} (${min.n})`, grade };
}

/**
 * Topic coverage is a PROXY for candidate-specific evidence, and on some
 * candidates the proxy overstates readiness: "Apartments / 5+ units" requires
 * only the broad `assessment` topic and so scores HIGH despite zero evidence
 * about apartments specifically. These overrides cap such candidates at what
 * the registry can actually support, with the reason recorded.
 */
const OVERRIDE = {
  "Multifamily 5+ units": ["LOW", "The business buys these, but no multifamily-specific evidence exists — the topic score comes entirely from general assessment claims. It may be SOLD as a service; it may not yet be WRITTEN ABOUT as a page."],
  "Divorce": ["LOW", "The only divorce-specific evidence is one disclosure exemption, which covers spouse-to-spouse transfers ONLY. Idaho community property treatment of real property is unresearched."],
  "Liens and judgments": ["LOW", "The `liens` topic is tagged loosely across unrelated claims. No lien- or judgment-specific research has been done."],
  "Bad tenants / unauthorized occupants": ["MEDIUM", "6-310A is well evidenced but excludes former tenants and family members, which is most of what sellers mean. Narrower than the topic count suggests."],
  "Single-family house": ["HIGH", "Broad evidence base is genuine here — assessment, disclosure and tax claims all apply directly."],
};

function table(rows, label) {
  let md = `| Candidate | Business relevance | Evidence topics | Claims (union) | Weakest required topic | Evidence grade | Note |\n|---|---|---|---:|---|---|---|\n`;
  const out = [];
  for (const [name, topics, biz, note] of rows) {
    const s = score(topics);
    if (OVERRIDE[name]) { s.grade = OVERRIDE[name][0]; s.overrideReason = OVERRIDE[name][1]; }
    out.push({ name, businessRelevance: biz, evidenceTopics: topics, claimsUnion: s.n, weakestRequiredTopic: s.weakest, evidenceGrade: s.grade, overrideReason: s.overrideReason ?? null, note });
    md += `| ${name} | ${biz} | ${topics.join(", ") || "—"} | ${s.n} | ${s.weakest ?? "—"} | **${s.grade}** | ${note} |\n`;
  }
  return { md, out };
}

const pt = table(PROPERTY_TYPES, "property");
const ss = table(SELLER_SITUATIONS, "situation");

writeFileSync("research/idaho/ada-county/PROPERTY-TYPE-OPPORTUNITY.md",
`# Property-Type Opportunity Map

GENERATED by \`scripts/research/build-opportunity-maps.mjs\`. Scored on the WEAKEST
REQUIRED TOPIC, not the union across topics — a candidate needing four kinds of
evidence is only as ready as the kind it has least of.

A candidate scoring INSUFFICIENT_EVIDENCE does not get built, however well the
donor site covers it.

${pt.md}
## Business scope is not evidence

Office, industrial and 5+ unit multifamily are owner-confirmed acquisition
targets as of 2026-09-10 and appear on the site's "What we buy". They score
INSUFFICIENT_EVIDENCE here, and both facts are true at once: **what the business
buys is a fact the owner supplies; what a page may claim requires sourced
evidence.** Listing an asset class we buy is honest. Writing a page about Idaho
commercial property without having researched any would not be.

## Rule

Evidence grade gates the page; business relevance orders it. A CORE candidate at
LOW evidence is a research task, not a page.

## Method and its limits

Grading is on the WEAKEST required topic. Topic coverage is a PROXY for
candidate-specific evidence and on some candidates it overstates readiness — a
candidate requiring only one broad topic inherits that topic's whole claim count
without any evidence about itself. Those are CAPPED manually and the reason is
shown in the row. Treat every grade as a research prompt, not a verdict.
`);
writeFileSync("research/idaho/ada-county/SELLER-SITUATION-OPPORTUNITY.md",
`# Seller-Situation Opportunity Map

GENERATED by \`scripts/research/build-opportunity-maps.mjs\`.

${ss.md}
## Reading

The strongest evidenced situations are the estate cluster (inherited, probate)
and the distress cluster (foreclosure, tax delinquency) — which is fortunate,
because they are also the highest-intent commercial situations.

The weakest are the generic ones (relocation, hoarder property, fire damage),
which is equally informative: they carry no Idaho-specific evidence, so an Idaho
page about them would say nothing a national competitor could not. Those should
be folded into broader pages rather than given their own.
`);
writeFileSync("data/idaho/content/ada-opportunity-maps.json", JSON.stringify({
  generatedAt: "2026-09-09", generator: "scripts/research/build-opportunity-maps.mjs",
  propertyTypes: pt.out, sellerSituations: ss.out }, null, 2));
console.log("PROPERTY TYPES"); for (const r of pt.out) console.log(`  ${r.evidenceGrade.padEnd(22)} weakest=${String(r.weakestRequiredTopic).padEnd(28)} ${r.name}`);
console.log("SELLER SITUATIONS"); for (const r of ss.out) console.log(`  ${r.evidenceGrade.padEnd(22)} weakest=${String(r.weakestRequiredTopic).padEnd(28)} ${r.name}`);

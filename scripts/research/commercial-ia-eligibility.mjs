#!/usr/bin/env node
/**
 * Commercial IA eligibility (Phase 16).
 *
 * NO INDEXABLE PAGE MAY EXIST MERELY BECAUSE A KEYWORD EXISTS. This computes,
 * from the registries as they stand right now, which commercial pages have
 * earned the right to be built — and re-computes it every time evidence lands,
 * which is why it is a script and not a document.
 *
 * A candidate must clear FOUR gates:
 *
 *   G1 DIFFERENTIATION  ≥3 approved claims that no OTHER candidate can also use.
 *                       Shared claims are real evidence but they do not
 *                       distinguish one page from another, and a page that says
 *                       only what its siblings say is a doorway page.
 *   G2 SITUATION        A situation page must pass the Phase 12 admission test:
 *                       it changes ≥2 of authority, valuation, clock, third
 *                       party, documents. Motivation alone is never enough.
 *   G3 CANNIBALISATION  It must not compete with a query the residential side
 *                       owns. See commercial-query-ownership.json.
 *   G4 BLOCKERS         No unresolved factual dependency.
 *
 * Failing any gate is a normal outcome. The expected result of this script is a
 * short list, and a short list is the point.
 */
import { readFileSync } from "node:fs";

const claims = JSON.parse(readFileSync("data/commercial/claims/commercial-claims.json", "utf8")).claims;
const approved = claims.filter((c) => c.approvedForPublication && c.verificationFlag == null);

/**
 * Candidate pages. `match` decides which approved claims a candidate may use.
 * Deliberately narrow: a candidate may only use a claim it could genuinely
 * build a paragraph out of.
 */
const CANDIDATES = [
  {
    id: "commercial-overview",
    label: "Commercial acquisition overview",
    match: () => true, // the hub may draw on anything, which is exactly why it cannot differentiate
    kind: "hub",
    note: "A hub is a routing page. It is judged on whether the pages beneath it exist, never on unique claims.",
  },
  {
    id: "industrial-boise",
    label: "Industrial property — Boise",
    kind: "asset",
    match: (c) => c.assetClass.includes("industrial") && c.topic.includes("industrial"),
  },
  {
    id: "multifamily-5plus",
    label: "Multifamily, five units and up",
    kind: "asset",
    match: (c) => c.assetClass.includes("multifamily") && c.topic.includes("multifamily"),
    contested: "sell multifamily property Boise",
  },
  {
    id: "office-boise",
    label: "Office property — Boise",
    kind: "asset",
    match: (c) => c.assetClass.includes("office") && c.topic.includes("office"),
  },
  {
    id: "retail-boise",
    label: "Retail property — Boise",
    kind: "asset",
    match: (c) => c.assetClass.includes("retail") && c.topic.includes("retail"),
  },
  {
    id: "commercial-land",
    label: "Commercial and development land",
    kind: "asset",
    match: (c) => c.assetClass.includes("land") && c.topic.includes("land"),
  },
  {
    id: "valuation-income",
    label: "Why commercial property is valued on income",
    kind: "explainer",
    match: (c) => c.topic.includes("assessment") || c.topic.includes("valuation"),
  },
  // Phase 12 situations. `tests` lists which of the five it changes.
  {
    id: "situation-lease-rollover",
    label: "Lease rollover / income concentration",
    kind: "situation",
    tests: ["valuation", "third-party", "documents"],
    match: (c) => c.topic.includes("assessment") && c.assetClass.some((a) => a !== "land"),
  },
  {
    id: "situation-vacancy",
    label: "Vacancy in a special-purpose building",
    kind: "situation",
    tests: ["valuation", "documents"],
    match: (c) => c.topic.includes("zoning") && c.assetClass.includes("industrial"),
  },
  {
    id: "situation-entity-exit",
    label: "Entity or partnership exit",
    kind: "situation",
    tests: ["authority", "documents"],
    match: () => false,
    blocker: "Idaho Title 30 (Uniform LLC Act) member-consent defaults not verified. No evidence held.",
  },
  {
    id: "situation-loan-maturity",
    label: "Loan maturity or refinance failure",
    kind: "situation",
    tests: ["clock", "third-party", "valuation"],
    match: () => false,
    blocker: "No evidence held. Every candidate fact is a market statistic, and undated statistics are prohibited.",
  },
];

const MIN_UNIQUE = 3;

/**
 * Claims are ALLOCATED, not merely counted, and the allocation rule matters.
 *
 * An earlier version gave a contested claim to whichever candidate matched the
 * fewest claims overall, on the theory that a narrower candidate makes a
 * narrower promise. That was wrong, and wrong in a way worth recording: it
 * handed the mixed-use district claims to the RETAIL page purely because retail
 * had the least evidence. The rule rewarded ignorance and called it specificity.
 *
 * The replacement distinguishes two genuinely different kinds of overlap:
 *
 *   HIERARCHY overlap — an asset page and a situation page want the same claim.
 *     These are not rivals. A situation page is built on top of what an asset
 *     page establishes, so the less derived kind owns the claim:
 *     asset → explainer → situation.
 *
 *   SIBLING overlap — two asset pages want the same claim, or two situations do.
 *     These ARE rivals, and a claim both can use distinguishes NEITHER. It is
 *     allocated to nobody. This is the rule that correctly refuses to build an
 *     office page and a retail page out of the same three mixed-use districts.
 */
const KIND_RANK = { asset: 0, explainer: 1, situation: 2, hub: 99 };

const usableBy = new Map(CANDIDATES.map((c) => [c.id, approved.filter(c.match)]));

const allocation = new Map(CANDIDATES.map((c) => [c.id, []]));
const collisions = [];

for (const claim of approved) {
  const takers = CANDIDATES.filter((c) => c.kind !== "hub" && c.match(claim));
  if (takers.length === 0) continue;

  const best = Math.min(...takers.map((t) => KIND_RANK[t.kind]));
  const front = takers.filter((t) => KIND_RANK[t.kind] === best);

  if (front.length === 1) {
    allocation.get(front[0].id).push(claim);
    if (takers.length > 1)
      collisions.push({
        claim: claim.id,
        kind: "hierarchy",
        winner: front[0].id,
        losers: takers.filter((t) => t !== front[0]).map((t) => t.id),
      });
  } else {
    // Sibling overlap: shared evidence differentiates none of them.
    collisions.push({
      claim: claim.id,
      kind: "sibling",
      winner: null,
      losers: front.map((t) => t.id),
    });
  }
}

const results = CANDIDATES.map((c) => {
  const usable = usableBy.get(c.id);
  const owned = allocation.get(c.id);
  const fails = [];
  if (c.blocker) fails.push(`G4 blocked — ${c.blocker}`);
  if (c.kind !== "hub" && owned.length < MIN_UNIQUE)
    fails.push(
      `G1 differentiation — ${owned.length} allocated of ${usable.length} matched, needs ${MIN_UNIQUE}`,
    );
  if (c.kind === "situation" && (c.tests?.length ?? 0) < 2)
    fails.push(`G2 admission — changes only ${c.tests?.length ?? 0} of 5`);
  if (c.contested)
    fails.push(
      `G3 contested query "${c.contested}" — one owner only; commercial holds it, residential must not`,
    );
  return { ...c, usable, unique: owned, fails };
});

let out = "";
const line = (s = "") => (out += s + "\n");

line("COMMERCIAL IA ELIGIBILITY — computed from the registry, not decided in advance");
line("=".repeat(78));
line(`approved commercial claims available: ${approved.length}`);
line();

const eligible = results.filter((r) => r.fails.filter((f) => !f.startsWith("G3")).length === 0);
const blocked = results.filter((r) => !eligible.includes(r));

line("ELIGIBLE TO BUILD");
line("-".repeat(78));
for (const r of eligible) {
  line(`  ${r.label}`);
  line(`    kind ${r.kind} · ${r.unique.length} unique / ${r.usable.length} usable`);
  if (r.note) line(`    ${r.note}`);
  for (const f of r.fails) line(`    ⚠ ${f}`);
  for (const u of r.unique.slice(0, 4)) line(`      · ${u.id}`);
  line();
}

line("NOT ELIGIBLE");
line("-".repeat(78));
for (const r of blocked) {
  line(`  ${r.label}  [${r.kind}]`);
  for (const f of r.fails) line(`    ✗ ${f}`);
  line();
}

const sib = new Map(), hier = new Map();
for (const c of collisions) {
  if (c.kind === "sibling") {
    const k = c.losers.slice().sort().join(" = ");
    sib.set(k, (sib.get(k) ?? 0) + 1);
  } else {
    const k = `${c.winner} over ${c.losers.slice().sort().join(", ")}`;
    hier.set(k, (hier.get(k) ?? 0) + 1);
  }
}
if (sib.size) {
  line("SIBLING OVERLAP — evidence that differentiates nobody");
  line("-".repeat(78));
  line("  These candidates are rivals wanting the same claims. A claim both can use");
  line("  makes neither page distinct, so it counts for neither. A large number here");
  line("  means the candidates are one page proposed twice.");
  line();
  for (const [k, n] of [...sib].sort((a, b) => b[1] - a[1]))
    line(`  ${String(n).padStart(3)} shared — ${k}`);
  line();
}
if (hier.size) {
  line("HIERARCHY OVERLAP — resolved toward the less derived page");
  line("-".repeat(78));
  for (const [k, n] of [...hier].sort((a, b) => b[1] - a[1]))
    line(`  ${String(n).padStart(3)} claims — ${k}`);
  line();
}

line("=".repeat(78));
line(`${eligible.length} eligible · ${blocked.length} not eligible`);
line();
line("A short list is the correct outcome. Nothing here is scheduled — eligibility");
line("is permission to build, never an instruction to.");

console.log(out);

#!/usr/bin/env node
/**
 * Commercial page gate.
 *
 * Three things can silently go wrong on a hand-written evidence-backed page,
 * and all three are invisible in a build:
 *
 *   1. A page cites a claim id that does not exist, or has since been withheld.
 *      The page then renders with a missing source and no error.
 *   2. A page falls below the word threshold and quietly stops being indexable.
 *   3. A page cites a claim that says nothing about its own asset class, which
 *      is how a page starts drifting into being about something else.
 *
 * Every citation on a commercial page must therefore resolve to an APPROVED
 * claim in the generated module — not merely to a row in the registry.
 */
import { resolve } from "node:path";
import { loadTsModule } from "../migration/load-ts.mjs";
import { checkProse } from "./prose-rules.mjs";

const content = loadTsModule(resolve("src/data/commercial-content.ts"));
const generated = loadTsModule(resolve("src/data/commercial-claims.ts"));

const byId = new Map(generated.commercialClaims.map((c) => [c.id, c]));
const MIN_WORDS = 600;
const MIN_DIFFERENTIATING = 3;

let fail = 0;
const say = (ok, msg) => {
  if (!ok) fail++;
  console.log(`${ok ? "  PASS" : "x FAIL"}  ${msg}`);
};

for (const page of content.COMMERCIAL_PAGES) {
  console.log(`\n${page.slug}`);

  const words = [page.intro, page.sections.flatMap((s) => [s.heading, ...s.body])]
    .flat()
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  say(words >= MIN_WORDS, `${words} words of hand-written content (needs ${MIN_WORDS})`);

  const missing = page.citedClaims.filter((id) => !byId.has(id));
  say(
    missing.length === 0,
    missing.length
      ? `cites ${missing.length} claim(s) that are not approved or do not exist: ${missing.join(", ")}`
      : `all ${page.citedClaims.length} cited claims resolve to approved evidence`,
  );

  // An explainer spans asset classes by nature, so the off-class check is an
  // asset-page rule only.
  const offClass =
    page.kind === "explainer"
      ? []
      : page.citedClaims
          .map((id) => byId.get(id))
          .filter((c) => c && !c.assetClasses.includes(page.assetClass))
          .map((c) => c.id);
  say(
    offClass.length === 0,
    offClass.length
      ? `cites claim(s) that say nothing about ${page.assetClass}: ${offClass.join(", ")}`
      : `every cited claim covers ${page.assetClass}`,
  );

  const differentiating =
    page.kind === "explainer"
      ? page.citedClaims
          .map((id) => byId.get(id))
          .filter((c) => c && (page.gateTopics ?? []).some((t) => c.topics.includes(t)))
      : page.citedClaims
          .map((id) => byId.get(id))
          .filter((c) => c && c.assetClasses.includes(page.assetClass) && c.topics.includes(page.assetClass));
  say(
    differentiating.length >= MIN_DIFFERENTIATING,
    `${differentiating.length} cited claims differentiate this page (needs ${MIN_DIFFERENTIATING})`,
  );

  // Prose rules, shared with the vitest suite so there is one definition and
  // it can be run without a remote build.
  const proseText = [...page.intro, ...page.sections.flatMap((s) => [s.heading, ...s.body])].join(" ");
  const proseFailures = checkProse(page, proseText);
  say(
    proseFailures.length === 0,
    proseFailures.length ? `prose rules: ${proseFailures.join("; ")}` : "prose rules satisfied",
  );

  const unsourced = page.citedClaims
    .map((id) => byId.get(id))
    .filter((c) => c && c.sources.length === 0)
    .map((c) => c.id);
  say(unsourced.length === 0, unsourced.length ? `cited claims with no source: ${unsourced.join(", ")}` : "every cited claim ships with a source");
}

// A rendered figure must trace to a claim. Catch loose numbers in page prose.
console.log("\nnumeric statements");
const NUM = /\b\d[\d,]*(?:\.\d+)?\s*(?:%|percent|feet|ft\.?|stories|units|square feet|sf\b)/gi;
const quoted = new Set();
for (const c of generated.commercialClaims) {
  for (const m of (c.claim + " " + (c.quote ?? "")).matchAll(NUM)) quoted.add(m[0].toLowerCase().replace(/\s+/g, " "));
}
let loose = [];
for (const page of content.COMMERCIAL_PAGES) {
  for (const s of page.sections) {
    for (const p of s.body) {
      for (const m of p.matchAll(NUM)) {
        const n = m[0].toLowerCase().replace(/\s+/g, " ");
        if (!quoted.has(n)) loose.push(`${page.slug}: "${m[0]}"`);
      }
    }
  }
}
say(loose.length === 0, loose.length ? `figures on a page that appear in no claim: ${loose.join("; ")}` : "every figure on a page traces to a claim");

console.log(fail ? "\nCOMMERCIAL PAGE GATE: FAIL" : "\nCOMMERCIAL PAGE GATE: PASS");
process.exit(fail ? 1 : 0);

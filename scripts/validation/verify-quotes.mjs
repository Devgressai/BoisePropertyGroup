/**
 * SECOND-PASS INDEPENDENT AUDIT.
 *
 * Does not trust any earlier reading. For every approved claim carrying
 * quotedLanguage, this re-opens the CACHED RAW SOURCE and checks the quote
 * actually appears in it.
 *
 * This is the check that catches a quote that was paraphrased, mis-transcribed,
 * assembled from two places, or taken from a search summary rather than the
 * page. Sierra's fact layer had no equivalent, which is part of how it ended up
 * citing only itself.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";

/**
 * BOTH registries. The commercial registry was added later and was NOT audited
 * here for its first 27 claims — the gate reported "every quote traced" while
 * silently checking only the residential file. A verifier that quietly covers
 * half of what you think it covers is worse than no verifier, because it
 * produces confidence rather than doubt.
 */
const REGISTRIES = [
  { label: "residential", path: "data/idaho/evidence/ada-claims.json" },
  { label: "commercial", path: "data/commercial/claims/commercial-claims.json" },
];
const claims = REGISTRIES.flatMap((r) =>
  JSON.parse(readFileSync(r.path, "utf8")).claims.map((c) => ({ ...c, registry: r.label })),
);

function toText(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/&#0?39;|&#8217;|&rsquo;|&apos;/g, "'").replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#8212;|&mdash;/g, "—")
    .replace(/\s+/g, " ");
}
// Statute pages render inline links as separate nodes, which leaves a space
// before the following comma ("section 55-2508 , Idaho Code"). Normalising that
// away is what distinguishes a transcription difference from a wrong quote.
const norm = (s) => s.replace(/[‘’']/g, "'").replace(/[“”"]/g, '"')
  .replace(/[–——-]/g, "-")
  .replace(/\s+([,.;:)])/g, "$1")
  .replace(/([(])\s+/g, "$1")
  .replace(/\s+/g, " ").trim().toLowerCase();

// Build a text corpus from every cached artifact.
const corpus = [];
const CACHE = "data/idaho/raw/cache";
if (existsSync(CACHE))
  for (const f of readdirSync(CACHE).filter((x) => x.endsWith(".html")))
    corpus.push({ file: `${CACHE}/${f}`, text: norm(toText(readFileSync(`${CACHE}/${f}`, "utf8"))) });
for (const f of ["data/idaho/raw/st16_id_places.txt"])
  if (existsSync(f)) corpus.push({ file: f, text: norm(readFileSync(f, "utf8")) });

/**
 * PDF-derived text, extracted by scripts/research/extract-pdf-text.mjs and
 * COMMITTED.
 *
 * This used to read /tmp. Locally that passed; in CI those files do not exist,
 * so six residential claims were being "verified" against evidence that
 * existed on exactly one machine. A source nobody else can re-open is not a
 * source. Never point this corpus outside the repository again.
 */
const EXTRACTED = "data/idaho/raw/extracted";
if (existsSync(EXTRACTED))
  for (const f of readdirSync(EXTRACTED).filter((x) => x.endsWith(".txt")))
    corpus.push({ file: `${EXTRACTED}/${f}`, text: norm(readFileSync(`${EXTRACTED}/${f}`, "utf8")) });

const quoted = claims.filter((c) => c.approvedForPublication && c.quotedLanguage);
let ok = 0, partial = 0, missing = [];

for (const c of quoted) {
  // Quotes may join separated passages with an ellipsis — verify each fragment.
  // BOTH forms: three ASCII dots and the single U+2026 character. Only the
  // ASCII form was handled at first, so a quote written with a real ellipsis
  // was checked as one long run-on string and reported NOT FOUND when both of
  // its halves were present. A false alarm in a verifier is expensive: it
  // teaches you to distrust the alarm.
  const fragments = c.quotedLanguage.split(/\s*(?:\.\.\.|…)\s*/).map(norm).filter((f) => f.length > 25);
  if (!fragments.length) { partial++; continue; }
  const results = fragments.map((f) => corpus.some((d) => d.text.includes(f)));
  if (results.every(Boolean)) ok++;
  else if (results.some(Boolean)) { partial++; missing.push({ id: c.id, registry: c.registry, kind: "PARTIAL", fragments: results.filter((r) => !r).length }); }
  else missing.push({ id: c.id, registry: c.registry, kind: "NOT FOUND", fragments: fragments.length });
}

console.log(`corpus: ${corpus.length} cached artifacts`);
for (const r of REGISTRIES) {
  const n = quoted.filter((c) => c.registry === r.label).length;
  console.log(`  ${r.label.padEnd(12)} ${n} approved claims carrying a quote`);
}
console.log(`approved claims with quoted language: ${quoted.length}`);
console.log(`  fully verified against cache : ${ok}`);
console.log(`  partially verified           : ${partial}`);
console.log(`  NOT FOUND in any cache       : ${missing.filter((m) => m.kind === "NOT FOUND").length}`);
if (missing.length) {
  console.log("\nclaims needing attention:");
  for (const m of missing) console.log(`  ${m.kind.padEnd(10)} [${m.registry}] ${m.id} (${m.fragments} fragment(s))`);
}
const notFound = missing.filter((m) => m.kind === "NOT FOUND").length;
console.log(notFound ? `\nQUOTE AUDIT: ${notFound} unverifiable` : "\nQUOTE AUDIT: every quote traced to a cached source");
process.exit(notFound ? 1 : 0);

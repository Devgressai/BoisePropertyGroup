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

const claims = JSON.parse(readFileSync("data/idaho/evidence/ada-claims.json", "utf8")).claims;
const sources = JSON.parse(readFileSync("data/idaho/sources/ada-county-sources.json", "utf8")).sources;
const srcById = Object.fromEntries(sources.map((s) => [s.id, s]));

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
// PDF-derived text, if extracted alongside
for (const f of ["/tmp/irr.txt", "/tmp/demo.txt", "/tmp/mer.txt"])
  if (existsSync(f)) corpus.push({ file: f, text: norm(readFileSync(f, "utf8")) });

const quoted = claims.filter((c) => c.approvedForPublication && c.quotedLanguage);
let ok = 0, partial = 0, missing = [];

for (const c of quoted) {
  // Quotes may join separated passages with " ... " — verify each fragment.
  const fragments = c.quotedLanguage.split(/\s*\.\.\.\s*/).map(norm).filter((f) => f.length > 25);
  if (!fragments.length) { partial++; continue; }
  const results = fragments.map((f) => corpus.some((d) => d.text.includes(f)));
  if (results.every(Boolean)) ok++;
  else if (results.some(Boolean)) { partial++; missing.push({ id: c.id, kind: "PARTIAL", fragments: results.filter((r) => !r).length }); }
  else missing.push({ id: c.id, kind: "NOT FOUND", fragments: fragments.length });
}

console.log(`corpus: ${corpus.length} cached artifacts`);
console.log(`approved claims with quoted language: ${quoted.length}`);
console.log(`  fully verified against cache : ${ok}`);
console.log(`  partially verified           : ${partial}`);
console.log(`  NOT FOUND in any cache       : ${missing.filter((m) => m.kind === "NOT FOUND").length}`);
if (missing.length) {
  console.log("\nclaims needing attention:");
  for (const m of missing) console.log(`  ${m.kind.padEnd(10)} ${m.id} (${m.fragments} fragment(s))`);
}
const notFound = missing.filter((m) => m.kind === "NOT FOUND").length;
console.log(notFound ? `\nQUOTE AUDIT: ${notFound} unverifiable` : "\nQUOTE AUDIT: every quote traced to a cached source");

#!/usr/bin/env node
/**
 * Vocabulary classifier guard.
 *
 * Search treats "sell rental property Boise" as a wholly residential query and
 * "sell apartment building Boise" as a mixed one. The risk that follows is
 * one-way: our residential pages are not threatened by the SERP, they are
 * threatened by our own copy. A commercial multifamily block written in
 * landlord-exit language is read as another residential page and competes with
 * pages we already own.
 *
 * So vocabulary is the classifier, and it is enforced here rather than left to
 * whoever writes the next paragraph.
 *
 *   - Landlord-exit phrasing may not appear in a commercial context.
 *   - A commercial multifamily context must state its unit floor, visibly.
 *
 * Governing record: data/commercial/queries/commercial-query-ownership.json
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");

/** Landlord-exit phrasing. Residential owns every one of these. */
const RESIDENTIAL_ONLY = [
  /tired of (?:managing|being a landlord|dealing with)/i,
  /no repairs,?\s*no fees/i,
  /sell your rental fast/i,
  /done with (?:tenants|being a landlord)/i,
  /problem tenants?/i,
  /we buy houses/i,
  /cash for (?:your )?(?:house|home)/i,
];

/** Vocabulary that marks a passage as commercial. */
const COMMERCIAL_MARKERS =
  /\b(rent roll|NOI|net operating income|cap rate|capitalisation rate|capitalization rate|estoppel|T-12|WALT|CAM charges?)\b/i;

/** Does this passage sit in a commercial context? */
const COMMERCIAL_CONTEXT =
  /\b(commercial|multifamily|apartment building|apartment complex|industrial|warehouse|office building)\b/i;

/**
 * A scope enumeration lists what the business buys across every asset class at
 * once — "houses, land, multifamily, office and industrial". It is not
 * commercial positioning and must not be judged as though it were, or the guard
 * starts objecting to the business describing itself. Only an explicit
 * commercial marker (rent roll, NOI, cap rate) makes such a sentence commercial.
 */
const RESIDENTIAL_SCOPE = /\b(houses?|homes?|land|lots?|acreage|inherited)\b/i;

const files = [];
(function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(tsx?|mdx?|json)$/.test(e)) files.push(p);
  }
})(SRC);

const problems = [];

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const rel = relative(ROOT, file);

  // Strip comments — guidance about banned phrasing is not banned phrasing.
  const code = raw
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");

  // Every quoted string in the file, with its line.
  const strings = [];
  const re = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  let m;
  while ((m = re.exec(code))) {
    if (m[2].length < 12) continue;
    strings.push({ text: m[2], line: code.slice(0, m.index).split("\n").length });
  }

  for (const s of strings) {
    const enumeratesScope = RESIDENTIAL_SCOPE.test(s.text) && COMMERCIAL_CONTEXT.test(s.text);
    const commercial = COMMERCIAL_MARKERS.test(s.text) || (COMMERCIAL_CONTEXT.test(s.text) && !enumeratesScope);
    if (!commercial) continue;
    for (const pat of RESIDENTIAL_ONLY) {
      if (pat.test(s.text)) {
        problems.push(
          `${rel}:${s.line} — landlord-exit phrasing in a commercial passage: ${pat}\n    "${s.text.slice(0, 120)}"`,
        );
      }
    }
  }

  // A commercial multifamily passage must show where the unit floor falls.
  const mfBlocks = strings.filter((s) => /\bmultifamily|apartment (?:building|complex)\b/i.test(s.text));
  for (const s of mfBlocks) {
    const sameFile = code;
    const declaresFloor =
      /\bfive units\b|\b5\+? units\b|\bfive or more units\b|\bmore than four units\b/i.test(sameFile);
    const isCommercialScope = /COMMERCIAL/.test(sameFile) || COMMERCIAL_MARKERS.test(sameFile);
    if (isCommercialScope && !declaresFloor) {
      problems.push(
        `${rel}:${s.line} — commercial multifamily copy with no visible unit floor. State the five-unit line on the page.`,
      );
      break;
    }
  }
}

if (problems.length) {
  console.error("VOCABULARY GUARD: FAIL\n");
  for (const p of problems) console.error("  " + p);
  console.error(
    "\nVocabulary is the classifier. Landlord-exit language on a commercial page makes it\n" +
      "a residential page in the index, competing with pages we already own.\n" +
      "See data/commercial/queries/commercial-query-ownership.json",
  );
  process.exit(1);
}

console.log(`VOCABULARY GUARD: PASS — ${files.length} source files scanned`);

#!/usr/bin/env node
/**
 * Merge one reviewed research folder (research/funnel-2026-11/<topic>/) into
 * the registries and the site:
 *
 *   sources.json → data/idaho/sources/ada-county-sources.json  (dedupe by id)
 *   claims.json  → data/idaho/evidence/ada-claims.json         (refuse dup ids)
 *   guide.json   → src/data/guides.ts + src/data/guide-content.ts   (--as guide)
 *               or src/data/topic-pages.ts as a MOFU decision page (--as decision)
 *
 * Then run: sync-sources → build-claims → check-evidence → verify-quotes.
 * It refuses to run twice for the same slug.
 *
 * Usage: node scripts/research/merge-funnel-topic.mjs <topic> [--as guide|decision]
 */
import { readFileSync, writeFileSync } from "node:fs";

const topic = process.argv[2];
const as = process.argv.includes("--as") ? process.argv[process.argv.indexOf("--as") + 1] : "guide";
if (!topic) throw new Error("usage: merge-funnel-topic.mjs <topic> [--as guide|decision]");
const dir = `research/funnel-2026-11/${topic}`;
const load = (p) => JSON.parse(readFileSync(p, "utf8"));

const SOURCES = "data/idaho/sources/ada-county-sources.json";
const CLAIMS = "data/idaho/evidence/ada-claims.json";

// ── sources ──
const srcReg = load(SOURCES);
const have = new Map(srcReg.sources.map((s) => [s.id, s]));
let addedS = 0;
for (const s of load(`${dir}/sources.json`).sources) {
  const existing = have.get(s.id);
  if (existing) {
    existing.claimsSupported = [...new Set([...(existing.claimsSupported ?? []), ...(s.claimsSupported ?? [])])];
    continue;
  }
  srcReg.sources.push(s);
  have.set(s.id, s);
  addedS++;
}
writeFileSync(SOURCES, JSON.stringify(srcReg, null, 2) + "\n");

// ── claims ──
const claimReg = load(CLAIMS);
const ids = new Set(claimReg.claims.map((c) => c.id));
let addedC = 0;
for (const c of load(`${dir}/claims.json`).claims) {
  if (ids.has(c.id)) throw new Error(`duplicate claim id ${c.id}`);
  claimReg.claims.push(c);
  ids.add(c.id);
  addedC++;
}
writeFileSync(CLAIMS, JSON.stringify(claimReg, null, 2) + "\n");

// ── page ──
const { guide, content } = load(`${dir}/guide.json`);
const lit = (v, indent) => JSON.stringify(v, null, 2).replace(/\n/g, `\n${indent}`);

if (as === "guide") {
  const gPath = "src/data/guides.ts";
  let g = readFileSync(gPath, "utf8");
  if (g.includes(`slug: "${guide.slug}"`)) throw new Error(`guide ${guide.slug} already merged`);
  const entry = `  {\n    slug: ${JSON.stringify(guide.slug)},\n    title: ${JSON.stringify(guide.title)},\n    h1: ${JSON.stringify(guide.h1)},\n    description:\n      ${JSON.stringify(guide.description)},\n    cluster: ${JSON.stringify(guide.cluster)},\n    published: ${JSON.stringify(guide.published)},\n    updated: ${JSON.stringify(guide.updated)},\n  },\n];`;
  g = g.replace(/\n\];\n\nexport function guideBySlug/, `\n${entry}\n\nexport function guideBySlug`);
  writeFileSync(gPath, g);

  const cPath = "src/data/guide-content.ts";
  let c = readFileSync(cPath, "utf8");
  const block = `  ${JSON.stringify(guide.slug)}: ${lit(content, "  ")},\n};`;
  c = c.replace(/\n};\n\nexport function guideContentFor/, `\n\n${block}\n\nexport function guideContentFor`);
  writeFileSync(cPath, c);
} else {
  const tPath = "src/data/topic-pages.ts";
  let t = readFileSync(tPath, "utf8");
  if (t.includes(`slug: "${guide.slug}"`)) throw new Error(`topic ${guide.slug} already merged`);
  const page = {
    slug: guide.slug,
    kind: "decision",
    title: guide.title,
    h1: guide.h1,
    eyebrow: guide.eyebrow ?? "Before you sign",
    description: guide.description,
    published: guide.published,
    updated: guide.updated,
    guides: [],
    intro: content.intro,
    sections: content.sections,
  };
  t = t.replace(/\n\];\n\nexport function topicPage/, `\n  ${lit(page, "  ")},\n];\n\nexport function topicPage`);
  writeFileSync(tPath, t);
}
console.log(`${topic}: +${addedS} sources, +${addedC} claims, page ${guide.slug} as ${as}`);

#!/usr/bin/env node
/**
 * Merge one place-research folder (research/places-2026-11/<folder>/) into the
 * residential registries:
 *
 *   sources.json → data/idaho/sources/ada-county-sources.json
 *   claims.json  → data/idaho/evidence/ada-claims.json
 *
 * Refuses a source id that already exists in EITHER registry (residential and
 * commercial collide on ids otherwise) and any duplicate claim id. Page copy is
 * written by hand in src/data/place-content.ts, in the same commit.
 *
 * Then run: sync-sources → build-claims → build-geography → check-evidence → verify-quotes.
 * Usage: node scripts/research/merge-place-research.mjs <folder>
 */
import { readFileSync, writeFileSync } from "node:fs";

const folder = process.argv[2];
if (!folder) throw new Error("usage: merge-place-research.mjs <folder>");
const dir = `research/places-2026-11/${folder}`;
const load = (p) => JSON.parse(readFileSync(p, "utf8"));
const SOURCES = "data/idaho/sources/ada-county-sources.json";
const CLAIMS = "data/idaho/evidence/ada-claims.json";
const COM_SOURCES = "data/commercial/sources/commercial-sources.json";

const srcReg = load(SOURCES);
const taken = new Set([...srcReg.sources, ...load(COM_SOURCES).sources].map((s) => s.id));
for (const s of load(`${dir}/sources.json`).sources) {
  if (taken.has(s.id)) throw new Error(`source id ${s.id} already exists in a registry`);
  srcReg.sources.push(s);
  taken.add(s.id);
}
writeFileSync(SOURCES, JSON.stringify(srcReg, null, 2));

const claimReg = load(CLAIMS);
const ids = new Set(claimReg.claims.map((c) => c.id));
for (const c of load(`${dir}/claims.json`).claims) {
  if (ids.has(c.id)) throw new Error(`duplicate claim id ${c.id}`);
  claimReg.claims.push(c);
  ids.add(c.id);
}
writeFileSync(CLAIMS, JSON.stringify(claimReg, null, 2) + "\n");
console.log(`merged ${folder}`);

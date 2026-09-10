#!/usr/bin/env node
/**
 * Backfills claimsSupported on every source, in BOTH registries.
 *
 * The claim is the single source of truth for the link; hand-maintaining both
 * sides drifts. This existed for the commercial registry only, which is exactly
 * why the residential one drifted the moment three claims were added to it —
 * the automation covered one half of a problem that exists in both halves.
 *
 * A commercial claim may cite a residential source, so the commercial pass
 * considers both source files when resolving ids.
 */
import { readFileSync, writeFileSync } from "node:fs";

const RES_CLAIMS = "data/idaho/evidence/ada-claims.json";
const RES_SOURCES = "data/idaho/sources/ada-county-sources.json";
const COM_CLAIMS = "data/commercial/claims/commercial-claims.json";
const COM_SOURCES = "data/commercial/sources/commercial-sources.json";

const load = (p) => JSON.parse(readFileSync(p, "utf8"));
const resClaims = load(RES_CLAIMS).claims;
const comClaims = load(COM_CLAIMS).claims;

/** Every claim that cites this source id, across both registries. */
const citedBy = (id) =>
  [...resClaims, ...comClaims].filter((c) => (c.sourceIds ?? []).includes(id)).map((c) => c.id);

let changed = 0;
for (const [label, path] of [["residential", RES_SOURCES], ["commercial", COM_SOURCES]]) {
  const reg = load(path);
  let n = 0;
  for (const s of reg.sources) {
    const want = citedBy(s.id);
    const have = s.claimsSupported ?? [];
    if (JSON.stringify(want) !== JSON.stringify(have)) {
      s.claimsSupported = want;
      n++;
    }
  }
  writeFileSync(path, JSON.stringify(reg, null, 2));
  changed += n;
  const orphans = reg.sources.filter((s) => (s.claimsSupported ?? []).length === 0).length;
  console.log(`${label.padEnd(12)} ${reg.sources.length} sources · ${n} resynced · ${orphans} cited by nothing`);
}
console.log(changed ? `\n${changed} source(s) updated — commit the change` : "\nsources already in sync");

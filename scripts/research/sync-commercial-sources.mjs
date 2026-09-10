/**
 * Backfills claimsSupported on every commercial source from the claim registry.
 *
 * The claim is the single source of truth for the link. Hand-maintaining both
 * sides drifts — it produced asymmetry errors three separate times across the
 * two registries before this was automated.
 */
import { readFileSync, writeFileSync } from "node:fs";
const cp = "data/commercial/claims/commercial-claims.json";
const sp = "data/commercial/sources/commercial-sources.json";
const claims = JSON.parse(readFileSync(cp, "utf8")).claims;
const reg = JSON.parse(readFileSync(sp, "utf8"));
for (const s of reg.sources)
  s.claimsSupported = claims.filter((c) => (c.sourceIds ?? []).includes(s.id)).map((c) => c.id);
writeFileSync(sp, JSON.stringify(reg, null, 2));
console.log(`synced ${reg.sources.length} commercial sources against ${claims.length} claims`);

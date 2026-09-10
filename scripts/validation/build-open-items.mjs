/**
 * Generates PROJECT-CONTROL/OPEN-ITEMS.md — every outstanding item, derived
 * from the registries rather than remembered. Hand-maintained items live in
 * MANUAL below and are the only part a human edits.
 */
import { readFileSync, writeFileSync } from "node:fs";
const read = (p) => JSON.parse(readFileSync(p, "utf8"));
const sources = read("data/idaho/sources/ada-county-sources.json").sources;
const claims = read("data/idaho/evidence/ada-claims.json").claims;
const entities = read("data/idaho/entities/ada-county-entities.json").entities;
const jur = read("data/idaho/jurisdictions/ada-jurisdictions.json").rows;

const approved = claims.filter((c) => c.approvedForPublication);
const municipalities = entities.filter((e) => ["CITY", "CENSUS_DESIGNATED_PLACE"].includes(e.entityType));
const directOf = (eid) => approved.filter((c) => (c.entity ?? []).includes(eid)).length;

// Owner-action items and research targets that no registry can infer.
const MANUAL = [
  ["BLOCKER", "Register boisepropertygroup.com", "owner", "Verified available 2026-09-09. Blocks canonical host, schema, sitemap."],
  ["BLOCKER", "Legal entity name", "owner", "Blocks schema, footer, legal pages."],
  ["BLOCKER", "Boise phone + business address", "owner", "Blocks NAP, LocalBusiness schema, trust architecture."],
  ["BLOCKER", "New Resend API key (not a sibling's)", "owner", "Stale sibling keys fail silently. Blocks lead delivery."],
  ["BLOCKER", "Real Idaho transactions / reviews", "owner", "Blocks trust architecture. Owner is actively buying, so real data should exist."],
  ["ASK", "Free Census API key", "owner", "api.census.gov/data/key_signup.html. ACS 302s without one. Blocks the entire Housing dimension."],
  ["RESEARCH", "Housing stock, tenure, vacancy, housing age", "claude", "Largest remaining evidence gap. Needs ACS."],
  ["RESEARCH", "Search demand / keyword volume", "claude", "No tool available. Volume must stay null; do not fabricate."],
];

const withheld = claims.filter((c) => !c.approvedForPublication);
const pendingSources = sources.filter((s) => s.status !== "VERIFIED");
const unresearched = [...new Set(jur.filter((r) => r.status === "UNRESEARCHED").map((r) => r.function))];
const unverifiedJur = [...new Set(jur.filter((r) => r.status === "UNVERIFIED").map((r) => r.function))];
const weakCities = municipalities.map((e) => ({ name: e.canonicalName, n: directOf(e.id) }))
  .filter((x) => x.n < 6).sort((a, b) => a.n - b.n);

let n = 0;
const row = (kind, item, owner, note) => `| ${++n} | ${kind} | ${item} | ${owner} | ${note} |`;

const md = `# OPEN ITEMS

**Generated** ${new Date().toISOString().slice(0, 10)} by \`scripts/validation/build-open-items.mjs\`. Do not hand-edit
the derived sections; edit \`MANUAL\` in the generator.

Current state: **${claims.length} claims (${approved.length} approved) · ${sources.length} sources · ${jur.length} jurisdiction rows**

| # | Kind | Item | Owner | Note |
|---:|---|---|---|---|
${MANUAL.map(([k, i, o, nt]) => row(k, i, o, nt)).join("\n")}
${withheld.map((c) => row("WITHHELD CLAIM", `\`${c.id}\``, "claude", (c.notes ?? "").split(".")[0] + ".")).join("\n")}
${pendingSources.map((s) => row("PENDING SOURCE", `\`${s.id}\``, "claude", s.status)).join("\n")}
${unresearched.map((f) => row("UNRESEARCHED JURISDICTION", f, "claude", "No page may state who performs this function.")).join("\n")}
${unverifiedJur.map((f) => row("UNVERIFIED JURISDICTION", f, "claude", "Authority named but not sourced — cities only.")).join("\n")}
${weakCities.map((c) => row("THIN ENTITY", c.name, "claude", `${c.n} direct claims — below the 6 needed to differentiate a page.`)).join("\n")}

**${n} open items.**

## Gate status

- ADA COUNTY EVIDENCE GATE: **NOT RUN** — cannot pass while any WITHHELD CLAIM, PENDING SOURCE or UNRESEARCHED JURISDICTION row remains, and while the three review passes have not run.
- Phase 9 (municipality pages) is blocked by every THIN ENTITY row.
`;
writeFileSync("PROJECT-CONTROL/OPEN-ITEMS.md", md);
console.log(`${n} open items written`);
const byKind = {};
for (const line of md.split("\n").filter((l) => l.startsWith("| ") && !l.startsWith("| #"))) {
  const k = line.split("|")[2]?.trim(); if (k) byKind[k] = (byKind[k] ?? 0) + 1;
}
for (const [k, v] of Object.entries(byKind).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`);

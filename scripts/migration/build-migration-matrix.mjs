/**
 * Builds the Idaho migration matrix. The JSON is the source of truth; the
 * markdown in docs/idaho-migration/05-idaho-migration-matrix.md is rendered
 * from it so the two cannot drift.
 */
import { writeFileSync } from "node:fs";

const M = [
  // ── Engine: copied largely verbatim ───────────────────────────────────
  ["seo-page-index","src/lib/seo/pageIndex.ts","Flattens all page types into one SeoPage[] + lookup map","HIGH","LOW","Same, Idaho page types","COPY","Drop combo + coastal types; add jurisdiction refs","none","LOW","KEEP"],
  ["internal-links","src/lib/seo/internalLinks.ts","Derives the internal link graph from pure functions","CRITICAL","HIGH","Same, minus combo branches","COPY + EDIT","Remove city-combo and cluster-coastal branches; cap per-target inbound","none","LOW","KEEP + IMPROVE"],
  ["anchor-text","src/lib/seo/anchorText.ts","Deterministic anchor rotation, build-stable","HIGH","LOW","Same mechanism, Idaho phrasings","COPY + EDIT","Replace CA phrase tables with ID phrasings","none","LOW","KEEP"],
  ["canonical","src/lib/seo/canonical.ts","Cannibalization consolidation, shared by routes + sitemap","CRITICAL","LOW","Same, empty override tables at launch","COPY + EMPTY","Override tables start empty; populate only from GSC evidence","GSC data post-launch","LOW","KEEP"],
  ["meta-clamp","src/lib/seo/meta.ts","Title/description clamping at word and clause boundaries","MEDIUM","MEDIUM","Same","COPY","Brand suffix string only","none","LOW","KEEP"],
  ["coverage","src/lib/seo/coverage.ts","Service-area counts derived from data, never typed","MEDIUM","MEDIUM","Same, extended to docs","COPY + EXTEND","Also emit counts consumed by README/docs generation","none","LOW","KEEP + IMPROVE"],
  ["schema","src/lib/seo/schema.ts","10 JSON-LD generators incl. linked @id entity graph","HIGH","LOW","Same + jurisdiction entities","COPY + EXTEND","LocalBusiness must carry real Idaho NAP; add GovernmentOrganization refs","Entity name, phone, address","MEDIUM","KEEP + IMPROVE"],
  ["guide-links","src/lib/seo/guideLinks.ts","Scores + assigns guides per page with per-host caps","HIGH","MEDIUM","Same","COPY","Retune caps for a smaller corpus","none","LOW","KEEP"],
  ["glossary-links","src/lib/seo/glossaryLinks.ts","Curated + rule-based term selection per page","MEDIUM","MEDIUM","Same, down-weighted","COPY + EDIT","Cap inbound so definitions stop outranking money pages","none","MEDIUM","REFACTOR"],
  ["offer-math","src/lib/offer-math.ts","The offer formula, stated in code so the page can show its work","HIGH","CRITICAL","Same formula, Idaho cost inputs","COPY + EDIT","Repair rates/holding costs re-derived for Treasure Valley","Local reno cost + DOM data","MEDIUM","KEEP + IMPROVE"],

  // ── Systems: kept, improved, or refactored ────────────────────────────
  ["indexation-gate","generateMetadata + sitemap.ts","Content-gated noindex,follow until real content exists","CRITICAL","MEDIUM","Same + evidence threshold","COPY + EXTEND","Add: >=1 approved claim where the page type promises a factual comparison","Claim registry","LOW","KEEP + IMPROVE"],
  ["follow-never-false","throughout","Gated pages still pass link equity","CRITICAL","LOW","Same","COPY","none","none","LOW","KEEP"],
  ["lastmod-snapshot","data/lastmod-snapshot.ts + gen:lastmod","Per-URL lastmod from committed git history","MEDIUM","LOW","Same","COPY","none","none","LOW","KEEP"],
  ["robots-ai","src/app/robots.ts","Names 11 AI crawlers explicitly","MEDIUM","LOW","Same","COPY","Sitemap URL only","none","LOW","KEEP"],
  ["indexnow","src/app/api/indexnow/route.ts","Instant index submission","LOW","LOW","Same","COPY","New key","none","LOW","KEEP"],
  ["orphan-audit","scripts/check-orphans-all.ts","ORPHAN vs HUB-ONLY distinction","HIGH","MEDIUM","Same, in CI","COPY + AUTOMATE","Wire into CI as a failing gate","none","LOW","KEEP + IMPROVE"],
  ["sitemap-single","src/app/sitemap.ts","One sitemap, gate-filtered","MEDIUM","LOW","Same, segmentation seam built","COPY + EXTEND","Segment by type only past ~1,000 URLs","none","LOW","REFACTOR"],
  ["contact-api","src/app/api/contact/route.ts","Escaping, CSRF origin check, rate limit, honeypot","LOW","HIGH","Same","COPY","Recipient + Resend key","New Resend key (not a sibling's)","MEDIUM","KEEP"],
  ["resend-empty-key","api/contact","Empty-string key must throw, not silently no-op","LOW","CRITICAL","Same + CI smoke test","COPY + EXTEND","Smoke-test both present and empty paths","New Resend key","HIGH","KEEP + IMPROVE"],
  ["security-headers","next.config.ts","HSTS, frame-deny, nosniff, referrer, permissions","LOW","LOW","Same","COPY","none","none","LOW","KEEP"],
  ["www-redirect","next.config.ts","301 www to apex","HIGH","LOW","Same","COPY","Idaho hostname","Domain registered","LOW","KEEP"],
  ["server-components","seo page templates","Server-rendered content, one client island","HIGH","HIGH","Same","COPY","none","none","LOW","KEEP"],

  // ── Content architecture ──────────────────────────────────────────────
  ["flat-slugs","(seo)/[slug] depth-1 namespace","Keyword-in-slug money pages at root","CRITICAL","MEDIUM","Same","COPY","Idaho slug wording","none","LOW","KEEP"],
  ["def-content-split","data/*.ts definition + content pairs","Makes the indexation gate a one-line check","HIGH","LOW","Same","COPY","none","none","LOW","KEEP"],
  ["county-topic-matrix","county-topic-combos.ts","County x topic money pages","MEDIUM","MEDIUM","Evidence-gated subset","REBUILD","Generate only where evidence exists; no blanket matrix","Per-topic Ada evidence","MEDIUM","KEEP + IMPROVE"],
  ["regions-above-counties","regions.ts","Region layer above county for cross-county geography","HIGH","MEDIUM","Treasure Valley region","COPY + REBUILD","Model as geographic/economic, NEVER administrative","Region definition sources","MEDIUM","KEEP"],
  ["nearby-adjacency","Location.nearby[]","Hand-curated 1,023 adjacency pairs","HIGH","HIGH","Same, hand-curated for Ada","REBUILD","Author per location; never centroid-derived","Ada geography","MEDIUM","KEEP"],
  ["city-county-assignment","locations.ts countySlug","Which county a place belongs to","CRITICAL","LOW","Census crosswalk-derived","REBUILD","MUST use Census place-to-county crosswalk, never nearest centroid","Census crosswalk","HIGH","IDAHO-SPECIFIC REPLACEMENT"],
  ["uniform-situations","pageIndex defaultSituationSlugs","All 266 cities claim the same 5 situations","LOW","LOW","Per-city, evidence-backed","REBUILD","A city asserts a situation only where a claim supports it","Per-city evidence","MEDIUM","REFACTOR"],
  ["community-vs-city","Location.isIncorporated","Boolean only; 196 of 266 are unincorporated","LOW","LOW","Typed place classes","REBUILD","Distinguish city / CDP / unincorporated / neighbourhood explicitly","Census place types","MEDIUM","REFACTOR"],

  // ── Not transferred ───────────────────────────────────────────────────
  ["city-situation-combos","city-situation-combos.ts + combo-content.ts","495 combinatorial money pages","MEDIUM","LOW","None","DROP","Six municipalities cannot justify it; 361 of 495 already unindexed","n/a","LOW","DO NOT TRANSFER"],
  ["coastal-silo","coastal-corridor.ts, coastal-graph.ts, 4 components","66-town coastal authority mesh","HIGH","MEDIUM","None at launch","DROP (keep blueprint)","Revisit only if a foothills/WUI or river silo is evidenced","n/a","LOW","DO NOT TRANSFER"],
  ["ca-legal-slugs","*-california financing + situation slugs","CA-statute-bound pages","MEDIUM","LOW","Idaho statute pages","REBUILD","Every statute claim re-researched against Idaho primary sources","Idaho Code, Idaho Courts","HIGH","IDAHO-SPECIFIC REPLACEMENT"],
  ["fire-cluster","fire-content.ts, 11 situations","CA wildfire seller cluster","MEDIUM","MEDIUM","Reduced, evidence-gated","REBUILD","Idaho WUI is real but smaller; do not import CA framing","Idaho WUI/fire sources","MEDIUM","IDAHO-SPECIFIC REPLACEMENT"],
  ["no-ci","package.json","14 check scripts, no runner, no CI","n/a","n/a","Vitest + CI from commit one","REPLACE","CI green is the merge gate","none","HIGH","DO NOT TRANSFER"],
  ["dual-token-scale","globals.css","Two coexisting palettes mid-migration","n/a","LOW","One scale","REPLACE","Ship a single Idaho palette","Palette decision","LOW","DO NOT TRANSFER"],
  ["four-fonts","layout.tsx","Inter + Fraunces + DM Serif + Playfair","n/a","LOW","Two families","REPLACE","One display, one body","Font decision","LOW","DO NOT TRANSFER"],
  ["self-citing-facts","data/facts.ts","Fact store whose only 3 sources are Sierra's own registries","LOW","LOW","Primary-source evidence system","REBUILD","Every claim cites an external authority with a verification date","Full Ada source registry","HIGH","IDAHO-SPECIFIC REPLACEMENT"],
  ["single-cta","FinalCTA and friends","Same CTA on every page","LOW","MEDIUM","Contextual CTAs","REBUILD","Per-cluster wording, stable analytics event name","none","LOW","REFACTOR"],
  ["docs-drift","CLAUDE.md","Counts hardcoded in prose; drifted by up to +86","n/a","n/a","Generated counts","REPLACE","Docs read counts from data","none","MEDIUM","DO NOT TRANSFER"],

  // ── New in Idaho ──────────────────────────────────────────────────────
  ["jurisdiction-graph","(none)","Which body assesses, records, taxes, zones, permits, roads","CRITICAL","HIGH","New system","BUILD","Per-entity function to authority mapping","Ada + municipal primary sources","HIGH","IDAHO-SPECIFIC REPLACEMENT"],
  ["claim-registry","(partial: types/facts.ts)","Sourced, dated, confidence-rated claims gating publication","CRITICAL","MEDIUM","New system","BUILD","approvedForPublication gates copy; effectiveFrom + pendingChange for statutes","All Idaho legal research","HIGH","IDAHO-SPECIFIC REPLACEMENT"],
  ["evidence-completeness","(none)","Per-entity readiness score gating indexability","HIGH","LOW","New system","BUILD","INSUFFICIENT evidence means the page renders but does not index","Per-city research","MEDIUM","IDAHO-SPECIFIC REPLACEMENT"],
  ["ca-residue-check","(none)","CI check for surviving California references","HIGH","LOW","New system","BUILD","Fails the build on unjustified CA references","none","LOW","IDAHO-SPECIFIC REPLACEMENT"],
  ["duplication-stride1","check:similarity","Sierra samples; strides disagree","HIGH","LOW","Exhaustive stride-1","BUILD","Stride-1 window 160 with an allowlist for verbatim statutory quotation","none","MEDIUM","KEEP + IMPROVE"],
];

const KEYS = ["id","sierraImplementation","purpose","seoValue","uxValue","idahoEquivalent","transferMethod","requiredChanges","idahoEvidenceNeeded","risk","verdict"];
const entries = M.map((row) => Object.fromEntries(KEYS.map((k, i) => [k, row[i]])));
for (const e of entries) e.status = "PLANNED";

const byVerdict = {};
for (const e of entries) byVerdict[e.verdict] = (byVerdict[e.verdict] ?? 0) + 1;

writeFileSync("data/migration/idaho-migration-matrix.json", JSON.stringify({
  generatedAt: new Date().toISOString().slice(0, 10),
  generator: "scripts/migration/build-migration-matrix.mjs",
  totalEntries: entries.length,
  byVerdict,
  entries,
}, null, 2));

// Render markdown
const groups = ["KEEP", "KEEP + IMPROVE", "REFACTOR", "IDAHO-SPECIFIC REPLACEMENT", "DO NOT TRANSFER"];
let md = `# 05 — Idaho Migration Matrix

**Machine-readable:** \`data/migration/idaho-migration-matrix.json\`
**Generated by:** \`scripts/migration/build-migration-matrix.mjs\` — the JSON is the
source of truth and this file is rendered from it, so the two cannot drift.

${entries.length} systems classified.

| Verdict | Count |
|---|---:|
${groups.map((g) => `| ${g} | ${byVerdict[g] ?? 0} |`).join("\n")}

Columns: **SEO** and **UX** are the value of the system on Sierra;
**Evidence** is what Ada County research must supply before the Idaho version
can ship; **Risk** is the cost of getting the transfer wrong.
`;
for (const g of groups) {
  const rows = entries.filter((e) => e.verdict === g);
  if (!rows.length) continue;
  md += `\n## ${g}\n\n| System | Sierra | Idaho equivalent | Method | Required changes | Evidence needed | SEO | UX | Risk |\n|---|---|---|---|---|---|---|---|---|\n`;
  for (const e of rows)
    md += `| \`${e.id}\` | ${e.sierraImplementation} | ${e.idahoEquivalent} | ${e.transferMethod} | ${e.requiredChanges} | ${e.idahoEvidenceNeeded} | ${e.seoValue} | ${e.uxValue} | ${e.risk} |\n`;
}
md += `\n## High-risk transfers\n\nSeven entries carry HIGH risk. Each is a place where a plausible-looking\ntransfer produces a wrong result rather than an obvious failure:\n\n`;
for (const e of entries.filter((x) => x.risk === "HIGH"))
  md += `- **\`${e.id}\`** — ${e.requiredChanges}\n`;
writeFileSync("docs/idaho-migration/05-idaho-migration-matrix.md", md);
console.log(`matrix: ${entries.length} entries`, JSON.stringify(byVerdict));

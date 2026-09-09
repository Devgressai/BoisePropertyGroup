import { writeFileSync } from "node:fs";
const P = [
 [0,"SIERRA-AUDIT","Sierra forensic analysis","Understand the donor system completely before copying any of it.",
  ["~/sierrapropertybuyers (read-only)"],["scripts/migration/*","docs/idaho-migration/0*.md","data/migration/*.json"],
  ["Build a TS module loader that executes Sierra's data + SEO modules","Generate route inventory, link graph, topical graph","Write the forensic audit, route inventory, link architecture, topical model, SEO extraction and migration matrix"],
  ["Manifests regenerate deterministically","Sierra git status --porcelain empty"],
  ["Executing Sierra's modules could in principle run side effects — they are pure data, verified by reading"],
  ["6 docs + 4 manifests exist","0 orphans figure reproduced"]],
 [1,"ARCHITECTURE","Architecture extraction + graph modelling","Decide what transfers, what changes and what dies.",
  ["docs/idaho-migration/*"],["data/migration/idaho-migration-matrix.json","docs/idaho-migration/05-*.md"],
  ["Classify every Sierra system KEEP / KEEP+IMPROVE / REFACTOR / IDAHO-SPECIFIC / DO NOT TRANSFER","Record evidence needed and risk per entry"],
  ["Every entry has a verdict and a named evidence requirement"],
  ["Classifying a weakness as KEEP because it exists"],
  ["45 systems classified","High-risk transfers enumerated"]],
 [2,"IDAHO-RESEARCH","Idaho research + evidence layer","Build the verified Ada County knowledge system before any page is written.",
  ["Primary government sources"],["research/idaho/ada-county/**","data/idaho/**"],
  ["Source registry","Entity + geographic graph","Municipal dossiers","Jurisdiction database","Idaho property law, probate, foreclosure, landlord-tenant","Land, water/irrigation, well/septic, flood, wildfire","Housing statistics","Search + SERP + competitor intelligence","Claim registry + evidence graph","City differentiation matrix","Three review passes"],
  ["ADA COUNTY EVIDENCE GATE: PASS","0 statistics without a year and source","0 approved claims without evidence"],
  ["Citing a homepage for a specific claim","Mixing dataset years","Statute text served ahead of its effective date","Secondary sources laundering a non-existent statute"],
  ["Every municipality entity VERIFIED","All validation scripts pass"]],
 [3,"INFORMATION-ARCHITECTURE","Idaho information architecture","Fix routes, intents and ownership.",
  ["Phase 2 evidence","docs/seo/query-intent-map.md"],["docs/seo/*","data/idaho/links/*"],
  ["Confirm flat slug scheme","Assign one canonical route per intent cluster","Decide which municipalities index at launch"],
  ["No intent cluster without an owner","No route without an intent"],
  ["Creating routes because a permutation exists"],
  ["Route list approved","Cannibalization rulings recorded"]],
 [4,"VISUAL-SYSTEM","Visual system and design adaptation","One Idaho palette, verified.",
  ["docs/design/idaho-visual-direction.md"],["src/app/globals.css","docs/design/*"],
  ["Select one palette","Define the single token scale","Pick two font families","Set imagery rules"],
  ["Every token pair computed, 0 non-exempt contrast failures","One scale only"],
  ["Shipping two scales like Sierra","An accent that cannot carry small text"],
  ["Palette selected and committed"]],
 [5,"APP-SHELL","Core application shell","A deployable Next 15 app with CI from the first commit.",
  ["Sierra engine (copied)"],["src/app/**","src/lib/**","package.json",".github/workflows/*"],
  ["Next 15 + React 19 + TS strict + Tailwind v4","Copy src/lib/seo/* and src/types/*","Vitest + CI workflow","Layout, Navbar, Footer, security headers, robots, sitemap seam"],
  ["CI green","Production build passes in CI"],
  ["Building locally instead of letting CI verify"],
  ["CI green on first push","Deploys"]],
 [6,"DATA-MODELS","Taxonomy and data models","Typed Idaho entities with codegen and drift checks.",
  ["Phase 2 evidence"],["src/data/**","scripts/validation/*"],
  ["Geography generated from the Census place-to-county crosswalk","Situation / property-type / knowledge taxonomies","Claim + source + jurisdiction types","Codegen drift check"],
  ["check:geography-drift green","0 slug collisions"],
  ["Nearest-centroid county assignment — shipped a live factual error on MoKan"],
  ["All taxonomies typed and generated"]],
 [7,"ADA-ANCHORS","Ada County + Boise anchors","The two commercial pages that must carry the site.",
  ["Phase 2 + 6"],["src/data/locations.ts","content files"],
  ["Ada County hub: county functions, municipalities, administration, links","Boise pillar: housing stock, jurisdiction, situations, property types"],
  ["Both pass the quality gate","County hub summarises and links, never reproduces city content"],
  ["Hub duplicating its children — the top source of MoKan duplication hits"],
  ["Both indexable"]],
 [8,"KNOWLEDGE-PILLARS","Idaho knowledge pillars","The pages the Boise Bath data says actually earn clicks.",
  ["Phase 2 claim registry"],["knowledge pillar content"],
  ["Probate, foreclosure, tenants, property tax, land/zoning, water/irrigation, well/septic, ACHD roads, manufactured homes"],
  ["Each pillar carries >=1 approved claim","0 legal advice framing"],
  ["Simplifying a statute into an unsupported absolute","Stale statutory figures"],
  ["Pillars indexable and cited"]],
 [9,"MUNICIPALITIES","Remaining Ada municipalities","Meridian, Eagle, Kuna, Star, Garden City — evidence-gated.",
  ["Phase 2 differentiation matrix"],["city content"],
  ["Author only where the differentiation matrix supports it","Render all; index only those that pass"],
  ["No city indexes on INSUFFICIENT evidence"],
  ["Six near-identical city pages"],
  ["Each city either indexable with real differentiation, or noindex,follow"]],
 [10,"SITUATIONS","Seller-situation pillars","State-level situation pages linked from geography.",
  ["Phase 2 opportunity map"],["situation content"],["Author evidence-backed situations only"],
  ["Each situation has >=3 contextual inbound links"],["Importing CA situation framing"],["Situations indexable"]],
 [11,"PROPERTY-TYPES","Property-type pillars","Land, acreage, lots, problem property.",
  ["Phase 2 opportunity map"],["property-type content"],["Author evidence-backed types only"],
  ["Each type rolls up to a pillar"],["Copying Sierra's 66 types wholesale"],["Types indexable"]],
 [12,"LINK-GRAPH","Internal link graph","A dense, derived graph — not an authored one.",
  ["All content phases"],["src/lib/seo/internalLinks.ts","scripts/validation/check-orphans.ts"],
  ["Tune relationships for the Idaho taxonomy","Cap per-target inbound so definitions do not outrank money pages","Run ORPHAN + HUB-ONLY in CI"],
  ["0 orphans","Hub-only under threshold","No page above the inbound cap"],
  ["Repeating Sierra's outcome where glossary terms hold the top 3 inbound counts"],
  ["Graph checks green in CI"]],
 [13,"SCHEMA","Schema, metadata, sitemaps","Structured data that reflects visible content.",
  ["Phase 2 entities + jurisdictions"],["src/lib/seo/schema.ts","sitemap","robots"],
  ["Entity @id graph incl. jurisdictions","LocalBusiness with real NAP","Sitemap == indexable set"],
  ["Schema validates","0 claimed attributes that do not exist"],
  ["Claiming ratings, awards or addresses that are not real"],
  ["Schema + sitemap green"]],
 [14,"A11Y-PERF","Accessibility and performance","WCAG 2.2 AA, strong Core Web Vitals.",
  ["Phase 5 shell"],["components","CI checks"],
  ["Landmarks, focus states, labels, heading order, reduced motion, touch targets","Server components, minimal client JS"],
  ["0 contrast failures","0 heading-order violations","CWV green"],
  ["Accessibility overlays instead of real markup"],
  ["A11y + perf gates green"]],
 [15,"SEARCH-QA","SEO / AEO / GEO / AI-search QA","Verify the retrieval story end to end.",
  ["All prior"],["docs/seo/*"],
  ["Duplicate title/description/H1 checks","Canonical conflicts","Answer-extraction structures","AI-crawler access"],
  ["0 duplicate titles/descriptions/H1s","0 index/noindex conflicts"],
  ["Distorting prose for machines"],
  ["QA gates green"]],
 [16,"CONTENT-INTEGRITY","Content integrity","Prove the corpus is honest and distinct.",
  ["All content"],["scripts/validation/*"],
  ["California residue scan","Unsourced claim scan","Stride-1 duplication","Placeholder scan"],
  ["0 CA residue","0 unsourced claims","0 duplication hits outside the statutory-quotation allowlist"],
  ["Coarse duplication strides that sample rather than prove"],
  ["Integrity gates green"]],
 [17,"PRE-LAUNCH","Pre-launch audit","Every gate green at once.",
  ["Everything"],["PROJECT-CONTROL/*"],
  ["Re-run all gates","Confirm NAP, entity, phone, Resend key, domain","Confirm Sierra untouched"],
  ["All gates green simultaneously","No open blocker"],
  ["Launching with placeholder NAP on a live contractor-adjacent site"],
  ["LAUNCH GATE: PASS"]],
];
for (const [n,slug,title,objective,inputs,files,steps,validation,risks,done] of P) {
  const id = String(n).padStart(2,"0");
  writeFileSync(`docs/phases/PHASE-${id}-${slug}.md`, `# Phase ${id} — ${title}

**Status:** ${n === 0 ? "COMPLETE" : "NOT STARTED"}

## Objective

${objective}

## Inputs

${inputs.map((x)=>`- ${x}`).join("\n")}

## Files involved

${files.map((x)=>`- \`${x}\``).join("\n")}

## Implementation steps

${steps.map((x,i)=>`${i+1}. ${x}`).join("\n")}

## Validation

${validation.map((x)=>`- ${x}`).join("\n")}

## Risks

${risks.map((x)=>`- ${x}`).join("\n")}

## Completion criteria

${done.map((x)=>`- ${x}`).join("\n")}

## Rollback

This repository is main-only and Sierra is read-only, so rollback is \`git revert\`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.
`);
}
console.log(`wrote ${P.length} phase files`);

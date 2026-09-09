# 04 — SEO System Extraction

Every system Sierra runs, classified. Verdicts: **KEEP** · **KEEP + IMPROVE** ·
**REFACTOR** · **IDAHO-SPECIFIC REPLACEMENT** · **DO NOT TRANSFER**.

---

## Crawl and indexation

| System | Where | Verdict | Reasoning |
|---|---|---|---|
| Full static generation, `dynamicParams=false` | `(seo)/[slug]/page.tsx` | **KEEP** | Fixes a real soft-404 class: streaming `loading.tsx` flushed a 200 before `notFound()` ran. |
| Content-gated indexation (`index:false, follow:true`) | `generateMetadata` + `sitemap.ts` | **KEEP + IMPROVE** | The single best idea in the codebase. Improve: add an evidence threshold, not just content presence. |
| `follow` never false | throughout | **KEEP** | A noindex,nofollow page absorbs equity and passes none. Non-negotiable. |
| Sitemap filtered by the same gates | `sitemap.ts` | **KEEP** | Guarantees the sitemap never advertises a noindex or non-canonical URL. |
| `lastmod` from a committed git snapshot | `data/lastmod-snapshot.ts` | **KEEP** | Vercel's shallow clone makes build-time git reads report one identical date on every URL, which teaches Google the field is meaningless. |
| Single-file sitemap | `sitemap.ts` | **REFACTOR** | Segment by type once past ~1,000 URLs. Ada launches far below that; build the seam, don't use it yet. |
| Named AI-crawler allowlist (11 agents) | `robots.ts` | **KEEP** | Cheap, explicit, and directly serves the GEO/AEO goal. |
| IndexNow endpoint | `api/indexnow` | **KEEP** | |
| `www` → apex 301 | `next.config.ts` | **KEEP** | Matches the portfolio-wide apex-canonical convention. |

## Canonicalisation

| System | Verdict | Reasoning |
|---|---|---|
| One module shared by routes and sitemap | **KEEP** | Prevents the mixed signal of a sitemap listing a URL whose canonical points elsewhere. |
| Slug-rule consolidation (`-complete-guide` → money page) | **KEEP** | Rule beats a hand-list that rots. |
| Impression-evidenced override tables | **KEEP + IMPROVE** | Sierra records *why* each consolidation exists, with GSC figures. Improve: require the evidence in a comment as a convention, and add a test that every override target exists. |
| Deliberate non-consolidation of definition vs transactional pairs | **KEEP** | The judgement that `/glossary/notice-of-default` and `/notice-of-default-california` serve different intents is correct and worth preserving as doctrine. |

## Internal linking

| System | Verdict | Reasoning |
|---|---|---|
| Graph derived from pure functions over the page index | **KEEP** | ~60% of 16,031 edges come from four functions. Cannot rot. |
| Per-bucket caps, dedupe, self-exclusion | **KEEP** | |
| Deterministic anchor rotation, no `Math.random()` | **KEEP** | Build-stable anchors; a shifting anchor set across crawls reads as manipulation. |
| Hand-curated `nearby[]` adjacency | **KEEP** | 1,023 authored relationships are why "nearby markets" reads sensibly. Expensive and worth it. |
| ORPHAN vs HUB-ONLY distinction | **KEEP + IMPROVE** | "It's in the /guides index" is the answer that makes an orphan audit pass while a page stays invisible. Improve: run it in CI, which Sierra never does. |
| Glossary absorbing top internal PageRank | **REFACTOR** | The three most-linked pages sitewide are glossary definitions (393, 392, 389 inbound) ahead of every money page. Cap per-target inbound per component; weight commercial above definitional. |
| Uniform 5-situation default for all 266 cities | **REFACTOR** | Every city claims identical relevance regardless of housing stock. Make it evidence-driven. |
| 59% of indexable pages with ≤2 contextual inbound | **REFACTOR** | Thin tail. Idaho's smaller page count makes a genuinely dense graph achievable. |

## Structured data

| System | Verdict | Reasoning |
|---|---|---|
| `generateEntityGraph` with linked `@id`s | **KEEP + IMPROVE** | A connected graph, not disconnected blobs. Extend with jurisdiction entities. |
| `OfferCatalog` sitewide, `CollectionPage`+`ItemList` on hubs, `DefinedTerm` on glossary | **KEEP** | |
| `LocalBusiness` | **IDAHO-SPECIFIC REPLACEMENT** | Must reflect real Idaho NAP. No claimed address, rating, review count or award that does not exist. |
| `FAQPage` gated on real FAQ content | **KEEP** | |

## Content quality control

| System | Verdict | Reasoning |
|---|---|---|
| Definition/content file separation | **KEEP** | Makes the indexation gate a one-line check. |
| `coverage.ts` — counts derived from data | **KEEP + IMPROVE** | Extend to the docs, which have drifted badly (16 vs 24 counties). |
| L2 fact layer (`types/facts.ts`) | **KEEP + IMPROVE** | Right shape: typed, sourced, dated, closed predicate vocabulary, three CI-enforced rules. But **every fact in the store cites Sierra itself** — no external evidence exists. Idaho populates it with primary sources. |
| `check:similarity`, `check:cannibalization`, `check:facts`, `check:entities` | **KEEP + IMPROVE** | Good scripts. **None of them run automatically.** |
| **No test framework, no CI** | **DO NOT TRANSFER** | The defining weakness. Idaho gets Vitest and CI from commit one. |
| 14 checks with no runner | **REFACTOR** | One `check:all`, wired into CI, failing the build. |

## Page architecture

| System | Verdict | Reasoning |
|---|---|---|
| Flat depth-1 slug namespace | **KEEP** | Confirmed as the chosen Idaho convention. `next.config.ts` already 301s `/locations/<county>` to flat slugs — a nested scheme was tried and abandoned. |
| One dynamic route for all SEO page types | **KEEP** | Required by Next.js; two `/[x]` routes conflict. |
| Explicit cluster + pillar on every cluster page | **KEEP** | |
| Regions above counties | **KEEP** | Treasure Valley needs exactly this slot. |
| City × situation combos (495 routes) | **DO NOT TRANSFER** | Combinatorial expansion cannot be justified for six municipalities, and 361 of 495 are already unindexed on Sierra. |
| Coastal corridor silo | **DO NOT TRANSFER** | No Idaho equivalent. Retain as a blueprint if a foothills/WUI or river-corridor silo is ever evidenced. |
| County × topic matrix | **KEEP + IMPROVE** | Sound pattern; 34 of 100 still unindexed after the content pass. Idaho generates these only where evidence exists. |

## Conversion and trust

| System | Verdict | Reasoning |
|---|---|---|
| `OfferMath` — the offer formula shown in code and on the page | **KEEP** | Genuine differentiation. `offer-math.ts` states plainly that a seller should be able to reproduce the number. |
| Margin never labelled "profit" or shown as a markup % | **KEEP** | Standing wording rule. |
| Message-ownership rule (each claim owned by exactly one section) | **KEEP** | What stops a homepage restating four facts a dozen times. |
| `CompareHonestly` — stating where listing nets more | **KEEP** | Honesty as a trust mechanism, and it is also the most citable thing on the site. |
| Honesty rule on imagery and numbers | **KEEP** | Every displayed number real and verifiable; AI imagery illustrative only, never a face presented as a real person or a property captioned as one we bought. |
| Empty `trust.ts` arrays rather than plausible fakes | **KEEP** | |
| Contact API hardening | **KEEP** | Escaping, CSRF origin check, 5/IP/hour, honeypot, validation. |
| Resend with empty-string key detection | **KEEP + IMPROVE** | An empty-string key is the actual rotation failure mode that cost IronCrest and Boise Bath two weeks of silent lead loss. Smoke-test both paths in CI. |
| Single CTA everywhere | **REFACTOR** | Contextual CTAs per cluster, with a stable analytics event name. |

## Design system

| System | Verdict | Reasoning |
|---|---|---|
| CSS-variable tokens | **KEEP** | |
| Split accent for contrast (`brass` / `brass-ink`) | **KEEP** | The reasoning — 3.0:1 on white is fine for rules, not small text — is correct and gets carried into the Idaho palette. |
| Accent scarcity (≤1 per viewport) | **KEEP** | |
| Two coexisting token scales | **DO NOT TRANSFER** | Acknowledged debt. Idaho ships one scale. |
| Four font families mid-migration | **DO NOT TRANSFER** | Idaho ships two. |
| Server components, `<details>` FAQ accordions, one client island | **KEEP** | 5.58 kB slug bundle. Directly serves the "primary content must not require client JS" requirement. |

---

## The five things most worth stealing

1. **Content-gated indexation with `follow:true`.** Scale without doorway-page risk.
2. **A link graph derived from pure functions**, not authored in JSX.
3. **`canonical.ts` as one source of truth** for routes and sitemap, with the evidence recorded.
4. **The ORPHAN vs HUB-ONLY distinction.**
5. **`OfferMath` and the honesty rules** — the only parts a competitor cannot copy by copying pages.

## The three things not to repeat

1. **No CI.** 14 quality checks that run when someone remembers.
2. **Documentation drift.** Counts hardcoded in prose while the data moved.
3. **A fact layer that cites only itself.** The schema was built; the evidence never was.

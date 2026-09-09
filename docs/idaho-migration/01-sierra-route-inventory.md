# 01 — Sierra Route Inventory

**Machine-readable:** `data/migration/sierra-route-inventory.json` (1.6 MB, 1,361 records)
**Generator:** `scripts/migration/extract-sierra.mjs`

Every record carries: `url`, `routeFamily`, `pageType`, `parent`, `children`,
`pillar`, `cluster`, `primaryIntent`, `likelyTargetKeyword`, `locationEntity`,
`countyEntity`, `contentSource`, `template`, `inboundInternalLinks`,
`inboundContextualLinks`, `outboundInternalLinks`, `hubOnly`, `breadcrumbPath`,
`schemaTypes`, `canonicalStatus`, `indexable`, `indexationGate`, `inSitemap`,
`metadataSource`, `priority`.

## Totals

| Page type | Routes | Indexable | noindex,follow | Route family |
|---|---:|---:|---:|---|
| combo | 495 | 134 | 361 | `(seo)/[slug]` combo branch |
| city | 266 | 239 | 27 | `(seo)/[slug]` |
| blog | 140 | 100 | 40 | `blog/[slug]` |
| guide | 109 | 106 | 3 | `guides/[slug]` |
| countyTopic | 100 | 66 | 34 | `(seo)/[slug]` |
| propertyType | 66 | 66 | 0 | `(seo)/[slug]` |
| glossary | 52 | 50 | 2 | `glossary/[term]` |
| situation | 49 | 49 | 0 | `(seo)/[slug]` |
| financing | 28 | 28 | 0 | `(seo)/[slug]` |
| county | 24 | 24 | 0 | `(seo)/[slug]` |
| static | 22 | 22 | 0 | hand-written |
| region | 10 | 10 | 0 | `(seo)/[slug]` |
| **Total** | **1,361** | **894** | **467** | |

## Intent assignment

No route carries more than one declared intent — a property Sierra achieves by
construction rather than by policy, because page type determines intent.

| Intent | Page types | Routes |
|---|---|---:|
| local transactional | county, city, countyTopic, combo | 885 |
| transactional | situation, propertyType | 115 |
| commercial investigation | financing | 28 |
| local commercial investigation | region | 10 |
| informational | guide, blog, glossary | 301 |
| navigational | static | 22 |

## Indexation gates, by type

| Type | Gate |
|---|---|
| city | `getCityContent(slug)` returns content |
| county | `getCountyContent(slug)` returns content |
| propertyType / financing / region / countyTopic | corresponding content getter returns content |
| situation | `hasSituationContent(slug)` |
| combo | not in `NOINDEX_COMBO_SLUGS` **and** (2+ `sections` or any `bulletSections`) |
| guide | `isGuideSelfCanonical` — self-canonical **and** content present |
| blog | `isBlogSelfCanonical` |
| glossary | `isGlossarySelfCanonical` |
| static | always |

Gated pages still render, still carry breadcrumbs, and still pass link equity.
They are excluded from the sitemap and marked `index:false, follow:true`.

## Canonical consolidations

13 routes canonical away from themselves rather than compete:

- **7 blog posts** → their money page (e.g. `we-buy-houses-roseville-ca-cash-offers` → `/sell-my-house-fast-roseville-ca`), plus a slug rule folding any `-complete-guide` post into its money page where one exists.
- **3 guides** → a stronger sibling (two Santa Cruz city guides → the Santa Cruz money page; the fire-zone duplicate → the ranking fire-zone guide).
- **2 glossary terms** → their topic page (`due-on-sale-clause`, `carry-back-financing`).

The decisions are documented in `canonical.ts` against impression data, and the
counter-examples are documented too: `/glossary/notice-of-default` stays
self-canonical against `/notice-of-default-california` because a definition and
a transactional page answer different questions and both earn impressions.

## What does not transfer to Idaho

| Sierra route family | Routes | Idaho decision |
|---|---:|---|
| city × situation combos | 495 | **REMOVE.** Forbidden by the combinatorial-bloat rule; a six-city county cannot justify them. |
| coastal property types | 7 | REMOVE — no Idaho equivalent |
| coastal situations | 3 | REMOVE |
| coastal regions + corridor | 8 | REMOVE (blueprint retained for a possible foothills/river silo) |
| California-specific financing | 4+ | IDAHO-SPECIFIC REPLACEMENT (statute-bound slugs) |
| fire/wildfire situation cluster | 11 | PARTIAL — Idaho WUI is real but smaller; evidence-gated |
| `/compare/*` | 7 | KEEP the pattern, rebuild for Idaho competitors |

Removing combos alone takes 495 of 1,361 routes off the table. **A faithful Ada
County fork lands nearer 120–160 routes at Phase 1, not 1,100.**

# 00 — Sierra Property Buyers: Forensic Architecture Audit

**Subject:** `~/sierrapropertybuyers` @ `bda8bc6` (2026-08-31)
**Method:** source inspection plus in-process execution of Sierra's own data and
SEO modules via `scripts/migration/load-ts.mjs`. Nothing here is inferred from
the live site or from Sierra's documentation.
**Sierra was not modified.** `git status --porcelain` in that repo is empty.

---

## 0. Headline finding: the documentation has drifted from the data

`CLAUDE.md` is the project's own architecture guide. Executing the data modules
gives different numbers for almost every page type.

| Entity | `CLAUDE.md` claims | Data actually holds | Drift |
|---|---:|---:|---:|
| Counties | 16 | **24** | +8 |
| Cities / communities | 180 | **266** | +86 |
| Situations | 46 | **49** | +3 |
| Property types | 59 | **66** | +7 |
| Financing topics | 28 | 28 | — |
| Regions | 2 | **10** | +8 |
| County × topic | 68 | **100** | +32 |
| Guides | 97 | **109** | +12 |
| Glossary terms | 41 | **52** | +11 |
| City × situation combos | 450 | **495** | +45 |
| Blog posts | 110 | **140** | +30 |
| Total pages | 1,136 | **1,361** | +225 |

This is the same failure `src/lib/seo/coverage.ts` was written to solve for
on-page copy — the site once stated 16, 7 and 23 counties simultaneously — but
the fix was applied to rendered prose only, never to the documentation.

**Transfer decision:** the Idaho repo derives *every* count in both copy and
docs from the data. A hardcoded count is a claim with an expiry date.

---

## 1. Stack and rendering

| Aspect | Implementation |
|---|---|
| Framework | Next.js 15, App Router |
| React | 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`, CSS-variable tokens) |
| Deploy | Vercel, pushes straight to `main` |
| Rendering | Fully static. `generateStaticParams` prerenders every slug |
| `dynamicParams` | `false` — any slug not enumerated is a true 404 |
| Fonts | Inter (body), Fraunces (display), with DM Serif Display + Playfair still present on unmigrated pages |
| Runtime deps | `next`, `react`, `react-dom`, `resend`. That is all |

`dynamicParams = false` is load-bearing and the comment in
`src/app/(seo)/[slug]/page.tsx:104` explains why: it stops `loading.tsx`
streaming a 200 before `notFound()` runs, which had been producing soft-404s.

**Notable absence: there is no test framework and no CI.** `package.json` has 14
`check:*` scripts and no runner to enforce them. They execute when a human
remembers.

---

## 2. Routing

Sierra uses a **flat slug namespace at depth 1**. Money pages are not nested
under `/locations/`.

| Route | Serves | Count |
|---|---|---:|
| `src/app/(seo)/[slug]/page.tsx` | counties, cities, situations, property types, financing, regions, county×topic, **and** city×situation combos | 1,038 |
| `src/app/guides/[slug]/page.tsx` | guides | 109 |
| `src/app/blog/[slug]/page.tsx` | blog posts | 140 |
| `src/app/glossary/[term]/page.tsx` | glossary | 52 |
| `src/app/compare/*/page.tsx` | competitor comparisons | 7 |
| static routes | home, hubs, legal, `/press`, calculator | 22 |

Both the SEO pages and the combos live in **one** dynamic route because they
share the `/[slug]` space and Next.js cannot mount two parallel `/[x]` routes.
Slugs are disjoint by construction.

`next.config.ts` also holds a `www` → apex 301 (`has: host` rule) and seven
`/locations/<county>` → flat-slug 301 aliases — evidence that a nested scheme
was considered and deliberately redirected away from.

---

## 3. Data layer

88,819 lines across `src/data/`, roughly 1.6M words of source. The largest
files are `combo-content.ts` (12,019 lines), `city-content.ts` (11,486) and
`blog-posts.ts` (8,754).

The shape is consistent: a **definition** file declares routes and metadata; a
separate **content** file holds hand-written prose keyed by slug. The route
renders whichever it finds and gates indexation on the content's existence.

| Definitions | Content |
|---|---|
| `counties.ts` | `county-content.ts`, `county-content-north.ts` |
| `locations.ts` | `city-content.ts` + 8 regional splits |
| `situations.ts` | `situation-content.ts`, `fire-content.ts`, `foreclosure-content.ts`, `situation-content-extra.ts` |
| `property-types.ts` | `property-type-content/{land-a,land-b,lots,difficult-a,difficult-b,coastal}.ts` |
| `financing-topics.ts` | `financing-content/{assumable,owner-financing}.ts` |
| `county-topic-combos.ts` | `county-topic-content{,-land,-firefc,-fin}.ts` |
| `city-situation-combos.ts` | `combo-content.ts` + `combo-depth/*.ts` |

Two definition files **generate** their arrays rather than listing them:
`county-topic-combos.ts` builds 100 routes from 5 topic definitions × counties,
and `city-situation-combos.ts` builds 495 from `topCities × topSituations`.
Text-scraping either would under-report the route set; this audit executes them.

---

## 4. The SEO engine

Small, pure, and the most transferable asset in the repository — about 1,400
lines total.

| Module | Lines | Role |
|---|---:|---|
| `schema.ts` | 426 | 10 JSON-LD generators incl. `generateEntityGraph` |
| `internalLinks.ts` | 275 | the link graph, as pure functions over the page index |
| `guideLinks.ts` | 239 | scores guides per page, caps per host, deterministic |
| `pageIndex.ts` | 196 | flattens 8 page types into one `SeoPage[]` + lookup Map |
| `glossaryLinks.ts` | 169 | curated + rule-based term selection |
| `meta.ts` | 125 | title/description clamping at word and clause boundaries |
| `canonical.ts` | 123 | cannibalization consolidation |
| `anchorText.ts` | 120 | deterministic anchor rotation |
| `counterpart.ts` | 65 | guide ↔ situation pairing |
| `coverage.ts` | 30 | service-area counts derived from data |

**Determinism is a design rule.** `anchorText.ts:10` implements its own
`stableHash` explicitly to avoid `Math.random()`, so the same page yields the
same anchor across builds. A build-unstable anchor set would look like
manipulation to a crawler diffing two crawls.

**`canonical.ts` is the single source of truth for canonicalisation and is
shared by the routes and the sitemap.** Its comments record real GSC-driven
decisions — e.g. `due-on-sale-clause` consolidates the glossary term into the
financing topic because the topic earns 5× the impressions (52 vs 10 / 28d),
while `/glossary/notice-of-default` deliberately stays self-canonical against
`/notice-of-default-california` because the two serve different intents and
both earn impressions.

---

## 5. Indexation gating

Sierra's central quality mechanism, implemented in `generateMetadata`
(`(seo)/[slug]/page.tsx:139-158`) and mirrored in `sitemap.ts`.

A page whose content getter returns nothing renders a generic template and is
served `{ robots: { index: false, follow: true } }`. It is excluded from the
sitemap. **`follow` is never `false`** — a noindex,nofollow page is a dead end
that absorbs link equity and passes none on.

Measured across all 1,361 routes:

| Type | Total | Indexable | noindex,follow |
|---|---:|---:|---:|
| combo | 495 | 134 | 361 |
| city | 266 | 239 | 27 |
| blog | 140 | 100 | 40 |
| guide | 109 | 106 | 3 |
| countyTopic | 100 | 66 | 34 |
| propertyType | 66 | 66 | 0 |
| glossary | 52 | 50 | 2 |
| situation | 49 | 49 | 0 |
| financing | 28 | 28 | 0 |
| county | 24 | 24 | 0 |
| static | 22 | 22 | 0 |
| region | 10 | 10 | 0 |
| **Total** | **1,361** | **894** | **467** |

**34% of the site is deliberately unindexed.** That is the system working, not a
defect. Combos have the strictest gate — 2+ sections or any `bulletSections`,
plus an explicit `NOINDEX_COMBO_SLUGS` deny-list.

Guides, blog posts and glossary terms are gated by canonical status instead: a
page that canonicals elsewhere is excluded from the sitemap so it never
advertises a URL pointing its canonical somewhere else.

---

## 6. Internal linking

`getInternalLinks(slug)` returns five buckets — `contextualLinks`,
`nearbyLinks`, `situationLinks`, `countyLinks`, `siblingLinks` — each capped to
prevent link spam, deduplicated by slug, and self-excluded.

Relationships implemented:

- city → parent county; county → up to 20 child cities
- city → 6 sibling cities in the same county, by priority
- city / county → up to 4 top property-type and financing pillars
- county → up to 4 county×topic children
- city → its city-level topic combos
- cluster page → its pillar, 6 cluster siblings, 5 county pages
- situation → 5 county pillars + top 12 cities by priority

Beyond the engine, links come from hub pages, `guideLinks`/`glossaryLinks`,
city→combo and city→blog helpers, and hardcoded JSX (the homepage lists the
Lake Tahoe and Gold Country regions; `CoastalRegionNav.tsx` hardcodes the seven
coastal sub-regions).

**Measured: 16,031 edges, and zero orphans among 894 indexable pages.**

Sierra also ships `scripts/check-orphans-all.ts`, which makes a distinction
worth stealing outright:

> **ORPHAN** — nothing links here at all. A hard failure.
> **HUB-ONLY** — the only thing linking here is its own index page. Technically
> reachable, practically invisible.

Measured hub-only: **97 indexable pages** — 37 blog, 26 property types, 22
situations, 6 cities, 6 financing topics. And 115 indexable pages have **zero**
contextual (non-hub, non-nav) inbound links.

---

## 7. Schema

`schema.ts` exports 10 generators: `generateEntityGraph`,
`generateLocalBusinessSchema`, `generateBreadcrumbSchema`,
`generateWebPageSchema`, `generateFaqSchema`, `generateDefinedTermSchema`,
`generateServiceSchema`, `generateArticleSchema`,
`generateCollectionPageSchema`, `generateOfferCatalogSchema`.

`generateEntityGraph` is the notable one — a linked `@id` graph rather than
disconnected blobs. `OfferCatalog` renders sitewide;
`CollectionPage` + `ItemList` on region and county hubs; `DefinedTerm` on
glossary pages.

---

## 8. Crawl and indexing infrastructure

- `robots.ts` explicitly allows 11 AI crawlers by name — GPTBot, ChatGPT-User,
  Google-Extended, PerplexityBot, ClaudeBot, Amazonbot, anthropic-ai,
  Bytespider, CCBot, Applebot-Extended.
- `sitemap.ts` is single-file, ~703 URLs, and filters on the same gates the
  routes use, so it never advertises a noindex or non-canonical URL.
- **`lastmod` comes from a committed snapshot** (`data/lastmod-snapshot.ts`,
  generated by `gen:lastmod` from git history) rather than a build-time git
  read, because Vercel builds from a shallow clone where every file reports the
  same date. The bug this replaced — one identical date on ~700 URLs — teaches
  Google that the site's `lastmod` means nothing.
- `/api/indexnow` for instant submission.

---

## 9. Security and forms

`/api/contact`: HTML escaping on all inputs, CSRF origin checking, in-memory
rate limiting at 5 requests/IP/hour, a honeypot field, and email/phone/length
validation. `next.config.ts` sets HSTS, `X-Frame-Options: DENY`, `nosniff`,
`Referrer-Policy` and a `Permissions-Policy` that disables camera, microphone,
geolocation and browsing-topics.

Leads send through Resend — the only runtime dependency beyond React and Next.

---

## 10. Design system

Two token scales coexist in `globals.css`, which is acknowledged technical debt:
the `--spb-*` redesign scale (ink / pine / stone / sand / slate / brass) and a
legacy emerald scale still styling the unmigrated pages.

The brass accent is split into two tokens for a real accessibility reason
recorded in the CSS: logo brass `#B09058` is only 3.0:1 on white — fine for
rules and for text on dark surfaces — so `--spb-brass-ink` `#87642D` (5.4:1 on
white) exists for small text on light surfaces. The stated rule is **at most one
brass element per viewport**.

---

## 11. Content-integrity tooling

14 `check:*` scripts, none automated: `check:pages`, `check:assets`,
`check:a11y`, `check:glossary`, `check:glossary-integrity`, `check:entities`,
`check:facts`, `check:links`, `check:orphans`, `check:orphans-all`,
`check:similarity`, `check:cannibalization`, `check:coastal-graph`,
`check:nc-intelligence`.

`src/types/facts.ts` defines an **L2 fact layer** — typed, sourced, dated
assertions over an entity registry, with a closed predicate vocabulary and
three rules enforced by `check-facts.mjs`: no unsourced facts, no undated facts,
references must resolve. Predicates for `inFloodZone`, `zonedAs`, `waterSource`,
`sewerType` and `governedBy` are declared but unpopulated. Its header states the
motive plainly: only 31.3% of 16,005 passages contained a hard fact, and
"answer engines cite what they can attribute."

This is the foundation the Idaho evidence system extends.

---

## 12. What this audit did not cover

- Live GSC performance (deliberately out of scope here; see the master plan).
- Component-level visual QA of all 43 components.
- The `combo-depth/`, `guide-depth/`, `blog-depth/` and `glossary-depth/`
  content splits were counted but not read line by line.

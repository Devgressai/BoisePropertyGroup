# Funnel framework — SEO / GEO / AEO

Established 2026-11-11. The code frame lives in `src/lib/seo/registry.ts`; this
file explains how to build on it.

## The one rule

**Every indexable URL is a registry entry** with a `stage`, a `kind`, a `parent`
and an `updated` date. The sitemap, llms.txt, breadcrumbs (schema) and the
funnel's next-step links all read the registry. `tests/registry.test.ts` fails
CI if a page is in the sitemap but not the registry, has no parent, has a
future or malformed date, or dead-ends.

## Stages are set by the reader's question

| Stage | Reader is asking | Page kinds today | Job |
|---|---|---|---|
| **TOFU** | "What is true? What are my options?" | `/guides/*`, commercial explainers, `/guides` | Win informational search; be the page answer engines quote |
| **MOFU** | "Is a direct sale right for me? Are they credible?" | `/how-it-works`, `/about`, `/commercial` | Explain method, earn trust, compare options honestly |
| **BOFU** | "Who buys property like mine, here, now?" | `/`, place pages, `/what-we-buy`, `/contact`, commercial asset pages | Convert — every BOFU page carries the offer form |

Every page links **one stage forward** (`nextSteps()` → `<NextSteps>`), and
every page reaches the form via `FinalCTA`. Place pages link back to the
guides their own evidence touches (`knowledgeLinksForPlace`), and guides link
to the places they apply in (`placesForGuide`) — the existing evidence graph.

## What each page type must carry

| Signal | Where it comes from | Applies to |
|---|---|---|
| Title ≤ 65 rendered, description ≤ 160 | `pageMetadata()` in `lib/seo/meta.ts` (cuts at a sentence or word, never rewrites) | all |
| Per-page `og:url`, share image | `pageMetadata()` + `public/og.jpg` | all |
| WebPage + BreadcrumbList JSON-LD | `<PageSchema path>` (breadcrumb walked from registry parents) | all |
| Article JSON-LD with dates + citations | `articleSchema()` | guides |
| Visible published/updated date = schema date | `Guide.published` / `Guide.updated` | guides |
| Sources visible on page | `EvidenceAppendix` | guides, places, commercial |

`updated` moves only when the substance changes — never to look fresh.

## Adding a page (checklist)

1. Content + claims through the existing evidence gates (unchanged).
2. Registry entry: it is automatic for places, guides and commercial pages once
   their gate passes; a new STATIC page needs a line in `registry()`.
3. Use `pageMetadata()`, render `<PageSchema>` and `<NextSteps>`.
4. Ship claims + content + registry change in ONE push (see the 09-12 sequencing lesson).
5. After deploy: `node scripts/seo/indexnow.mjs`.

## What to build next (in order)

Built on the evidence from Boise Bath (guides earn the clicks, local
commercial grids do not) and this site's own GSC (2026-11-11: 15/25 indexed,
0 clicks, 103 impressions, hubs still unknown to Google).

1. **TOFU depth** — more Idaho knowledge guides where the evidence base is
   already strong (probate timelines, liens/judgments on title, divorce sales,
   code enforcement, septic/well transfer). Each one answer-first: a 2–3
   sentence direct answer under the H1, then the sourced sections.
2. **MOFU comparison pages** — "Cash offer vs listing in Ada County" and
   "What a direct buyer's offer is built from" (the arithmetic already on
   /how-it-works). Honest: say when listing wins (the homepage already does).
3. **BOFU situation × Ada County pages** — only where a guide already proves
   the situation (inherited, tenants, foreclosure). Situation pages link down
   to the guide and across to the place pages.
4. **GEO/AEO** — keep llms.txt generated; add per-guide "key facts" lists
   (claim-backed) that answer engines can lift verbatim.

## Shipped 2026-11-12 (waves 1–3)

| Stage | Pages |
|---|---|
| TOFU guides (12) | 6 originals + probate, divorce, liens & judgments, how a sale closes, well & septic, property taxes when you sell |
| MOFU decision (3) | `/cash-offer-vs-listing-idaho`, `/how-we-calculate-an-offer`, `/how-to-check-a-cash-buyer-in-idaho` |
| BOFU situation (7) | `/sell-inherited-house-idaho`, `/sell-house-as-is-idaho`, `/sell-rental-property-idaho`, `/sell-house-before-foreclosure-idaho`, `/sell-land-idaho`, `/sell-manufactured-home-idaho`, `/sell-house-divorce-idaho` |

Topic pages live in `src/data/topic-pages.ts`, gated by `lib/seo/topicIndexation.ts`.
Research for each new guide is in `research/funnel-2026-11/<topic>/` (NOTES.md
lists what could NOT be sourced — read it before editing a guide). Merge a new
reviewed folder with `node scripts/research/merge-funnel-topic.mjs <topic> [--as decision]`,
then `sync-sources` → `build-claims` → `npm run check:local`.

Measure from ~2026-12-15: `gsc inspect` (indexation of the 15 new URLs) and
GSC performance by registry stage.

## Owner blockers that cap everything above

- ~~Lead form down~~ — FIXED 2026-11-12, leads go to the owner's inbox.
- **No analytics** — funnel stages cannot be measured. Needs a GA4 property
  (and a consent decision) or Vercel Web Analytics enabled.
- NAP (phone/address/entity) and real reviews — unlock LocalBusiness schema
  and trust content.

## Shipped 2026-11-13 — foreclosure cluster

| Stage | Pages |
|---|---|
| TOFU guides (+5, cluster `distress`) | `how-to-avoid-foreclosure-in-idaho`, `idaho-foreclosure-timeline`, `short-sale-vs-deed-in-lieu-in-idaho`, `after-a-foreclosure-sale-in-idaho`, `foreclosure-rescue-scams-in-idaho` |
| MOFU decision (+1) | `/sell-or-keep-house-facing-foreclosure-idaho` |
| BOFU (existing) | `/sell-house-before-foreclosure-idaho` now lists all of the above |

Brief addendum: `research/funnel-2026-11/FORECLOSURE-CLUSTER.md`. Each folder's NOTES.md
lists what could not be sourced. Re-read before editing: the IRS cancelled-debt section
(short-sale guide) and 12 CFR 1024.41 (avoid + sell-or-keep) are the two that can change.
Guide pages now show same-cluster guides and their decision page under "Related".

## Wave 5 and the lead pass (2026-11-13)

Audit that drove it: 15 of 48 URLs known to Google; 104 impressions and 0 clicks in 90 days, at positions 45 to 95. Queries were "sell my house as is / for cash / fast" plus a city.

- New BOFU pages from existing evidence: `/sell-house-with-liens-idaho`, `/sell-house-delinquent-property-taxes-idaho`.
- New guides (research in `research/funnel-2026-11/<folder>`, each with NOTES.md listing what an attorney or tax professional should check): inheriting a house with a mortgage, reverse mortgage after the borrower dies, bankruptcy and foreclosure, unpermitted work in Ada County, income taxes on a sale.
- Place pages: search title and description are set in `src/app/(seo)/[slug]/page.tsx`, separate from the H1.
- Schema: Service (home, place, situation), Article (decision), FAQPage (home), ItemList (guides hub), contactPoint on Organization.
- Links: place pages list all selling pages; selling and decision pages list siblings; guides hub grouped by topic.
- Re-read in early 2027: the tax-year 2025 figures in the income-tax guide.

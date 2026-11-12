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

## Owner blockers that cap everything above

- **Lead form is DOWN** (`/api/offer` → 500 "Lead delivery not configured"):
  Resend DNS records not added, `RESEND_API_KEY` + `LEAD_TO_EMAIL` not set in
  Vercel. Every CTA on the site currently fails.
- **No analytics** — funnel stages cannot be measured. Needs a GA4 property
  (and a consent decision) or Vercel Web Analytics enabled.
- NAP (phone/address/entity) and real reviews — unlock LocalBusiness schema
  and trust content.

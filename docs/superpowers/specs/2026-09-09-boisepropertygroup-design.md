# Boise Property Group — Design

**Date:** 2026-09-09 · **Status:** approved by owner · **Path:** architectural

## Problem

Build a direct property-buying platform for Ada County and the Treasure Valley
by inheriting the Sierra Property Buyers architecture while rebuilding every
factual layer from verified Idaho sources. Sierra must not be modified.

## Constraints (owner-set)

| Constraint | Value |
|---|---|
| URL architecture | Flat, depth-1 slugs |
| Build order | Ada + Boise anchors → knowledge pillars → remaining cities |
| Scope | Full research program |
| Operating status | Actively buying in Idaho |
| Sierra | Read-only, permanently |
| Commit trailers | None |
| Vercel / DNS | Owner performs |
| Local builds | Never; CI verifies |

## Architecture

**Repository.** `~/boisepropertygroup`, own history, GitHub `Devgressai/boisepropertygroup`,
main-only. Commits authored as `229847365+Devgressai@users.noreply.github.com`
(GitHub rejected MoKan's first push with GH007 over a private address; history
had to be rewritten).

**Stack.** Next 15 App Router, React 19, TypeScript strict, Tailwind v4 — matching
the donor so the engine drops in unchanged. Two departures: **Vitest and CI from
the first commit**, because the donor has neither and 14 unenforced check scripts
is the portfolio's most repeated failure.

**Inherited engine** (~1,600 lines, copied out of Sierra):
`src/lib/seo/{pageIndex,internalLinks,anchorText,canonical,meta,schema,coverage,glossaryLinks,guideLinks,counterpart}.ts`,
`src/types/*`, `build-date.ts`, `offer-math.ts`. Component structure re-skinned,
not re-architected.

**Not inherited:** the 495-route combo layer, the coastal corridor silo, all
88,819 lines of California content, the dual token scale, the four-font
migration state, and the absence of CI. Full classification of all 45 systems in
`docs/idaho-migration/05-idaho-migration-matrix.md`.

**Routes.** One `(seo)/[slug]/page.tsx` with `dynamicParams = false` serving
counties, cities, situations, property types and knowledge topics at depth 1.
`/guides/[slug]`, `/glossary/[term]`, `/blog/[slug]` keep prefixes. `/locations`,
`/situations`, `/property-types` are crawlable server-rendered hubs.

**Evidence system.** Sierra's L2 fact layer (typed, sourced, dated, closed
predicate vocabulary, three CI-enforced rules) merged with MoKan's `LegalClaim`
ledger (quoted operative language, `verifiedOn`, `effectiveFrom`,
`pendingChange`). This satisfies the brief's claim registry and evidence graph
directly. Sierra's own fact store cites only Sierra — Idaho's cites primary
sources.

**Two new layers Sierra lacks:** a jurisdiction graph (which body assesses,
records, taxes, zones, permits, and — uniquely in Ada County — owns the roads),
and the claim/source/evidence graph that gates publication.

**Indexation.** Content-gated `index:false, follow:true`, extended with an
evidence threshold: a page type that promises a factual comparison needs at
least one approved claim. `follow` is never false.

**Quality gate.** Unique intro · evidence minimum · valid parent · valid related
links · unique metadata · valid schema · sufficient depth · primary entity
present · no unsupported claims · no duplicate H1 · **no California residue** ·
no placeholder · renders · correct sitemap membership.

**Duplication** checked at stride-1, window 160, with an allowlist for verbatim
statutory quotation. Coarser strides are samples, not proofs.

**Geography** generated from the Census place-to-county crosswalk, never
nearest-centroid — that bug shipped a live factual error across six published
pages on MoKan.

**Visual.** One token scale, light reading surfaces, split accent
(`accent` / `accentInk`) and split border (`border` / `borderStrong`) defined
from the outset. Three palettes measured in
`docs/design/idaho-visual-direction.md`; Palette A (High Desert) recommended.
Two font families.

## Testing

Vitest unit tests over the engine's pure functions (link graph, anchor rotation,
canonical resolution, indexation gate, meta clamping) plus validation scripts run
as CI gates: slug uniqueness, geography drift, orphans and hub-only, duplication,
California residue, claim/source integrity, schema validity, sitemap ==
indexable set, lead-pipeline smoke test for both present and empty-string
Resend keys.

## Risks

| Risk | Mitigation |
|---|---|
| Off-page authority, not content, is the real constraint | Recorded in the master plan with four measurements; build order inverted; off-page treated as a deliverable |
| Statutory text served ahead of its effective date | `effectiveFrom` + `pendingChange`; check the revision history of every statute |
| Six near-identical city pages | Differentiation matrix gates indexability; INSUFFICIENT evidence means noindex |
| Hub reproducing its children | Explicit rule: hubs summarise and link; stride-1 duplication check |
| Glossary absorbing internal PageRank, as on Sierra | Per-target inbound cap; commercial weighted above definitional |
| Launching with placeholder NAP while actively buying | Blocker list; launch gate requires real entity, phone, address |

## Out of scope

Vercel connection, DNS, domain registration, GBP, and any live deployment action.

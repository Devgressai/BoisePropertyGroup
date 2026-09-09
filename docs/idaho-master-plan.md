# Ada Property Buyers — Master Implementation Plan

**Created:** 2026-09-09
**Architectural donor:** Sierra Property Buyers (read-only)
**Phase 1 market:** Ada County, Idaho — Boise, Meridian, Eagle, Kuna, Star, Garden City
**Expansion ceiling:** ~100-mile operating radius around Boise, entered on evidence, not distance

---

## 1. The premise, stated honestly

Sierra proves the architecture works as *architecture*. It does not prove the
architecture produces traffic. Four measurements in the portfolio point the same
way:

| Site | Measurement | Reading |
|---|---|---|
| Sierra Property Buyers | ~9 clicks / 5,899 impressions across 748 indexed pages | recorded late July 2026; re-pull before relying on it |
| Boise Bath | 356 guide pages → 208 clicks; 110 commercial city×service pages → **0 clicks**; 3 city hubs → 0; 4 service hubs → 0 (28d to 2026-08-31) | 75 of 110 commercial pages indexed and ranking at positions 29–56 |
| IronCrest | Google refuses 56% of URLs; content saturation confirmed 7× | off-page, not on-page |
| Sierra (again) | The most valuable event of 2026 was one Redfin citation | off-page |

Boise Bath is the closest analogue we have — same metro, new-ish domain, no
authority — and its commercial local pages earned nothing while its
informational corpus carried 208 of 214 clicks.

The caveat is real: Boise Bath sells bathroom remodels; cash-buyer intent is
lower-volume and far higher-intent, and those searchers convert. So this is not
a prediction of zero. It is the reason the build order below puts the Idaho
knowledge pillars immediately after the two commercial anchors rather than at
Phase 10, and the reason off-page work is treated as a first-class deliverable
rather than an afterthought.

**Success is not page count.** It is: clicks on commercial intent, citations
earned, and claims a competitor cannot copy.

## 2. Decisions already fixed

| Decision | Value | Source |
|---|---|---|
| URL architecture | **Flat, depth-1 slugs** (`/sell-my-house-fast-boise-id`) | owner, 2026-09-09 |
| Build order | Ada County + Boise anchors, **then knowledge pillars**, other cities gated | owner, 2026-09-09 |
| Program scope | Full research program as specified | owner, 2026-09-09 |
| Operating status | **Actively buying in Idaho now** | owner, 2026-09-09 |
| Sierra | Read-only, forever | owner, 2026-09-09 |
| Commit trailers | None | owner standing rule |
| Combos | Not inherited | migration matrix `city-situation-combos` |
| Vercel + DNS | Owner performs; this repo's job ends at push | owner standing rule |
| Local builds | Never; CI verifies | owner standing rule |

## 3. Open blockers

| Blocker | Blocks | Owner |
|---|---|---|
| Domain registration (`adapropertybuyers.com` verified available 2026-09-09) | canonical host, schema, sitemap | owner |
| Legal entity name | schema, footer, legal pages | owner |
| Boise phone + business address | NAP, `LocalBusiness`, trust | owner |
| New Resend key (not a sibling's) | lead delivery | owner |
| Real Idaho transactions / reviews | trust architecture | owner |
| Gemini key rotation (exposed in transcript, stored `~/.ada_gemini_key`) | imagery | owner |

None block Phases 0–4.

## 4. Phases

| # | Phase | Gate |
|---|---|---|
| 0 | Sierra forensic analysis | manifests generated, audit written |
| 1 | Architecture extraction + graph modelling | migration matrix complete |
| 2 | Idaho research + evidence layer | ADA COUNTY EVIDENCE GATE: PASS |
| 3 | Idaho information architecture | route + intent map approved |
| 4 | Visual system | one palette selected, contrast verified |
| 5 | Core application shell | CI green, deploys |
| 6 | Taxonomy + data models | codegen + drift checks green |
| 7 | **Ada County + Boise anchors** | both indexable under the quality gate |
| 8 | **Idaho knowledge pillars** | each pillar carries ≥1 approved claim |
| 9 | Remaining municipalities | evidence-gated; render always, index only on PASS |
| 10 | Seller-situation pillars | evidence-gated |
| 11 | Property-type pillars | evidence-gated |
| 12 | Internal link graph | 0 orphans, hub-only under threshold |
| 13 | Schema, metadata, sitemaps | schema validates, sitemap == indexable set |
| 14 | Accessibility + performance | WCAG 2.2 AA, CWV green |
| 15 | SEO / AEO / GEO / AI-search QA | query-intent map has no unowned conflict |
| 16 | Content integrity | 0 CA residue, 0 unsourced claims, stride-1 duplication clean |
| 17 | Pre-launch audit | every gate green simultaneously |

Phases 7 and 8 are the inversion. Phase 9 deliberately follows the knowledge
pillars.

## 5. Standing rules

1. **Sierra is read-only.** `git status --porcelain` there must be empty before any task is called done.
2. **No fabricated facts.** Missing evidence is recorded in `docs/research/missing-evidence.md`, never invented.
3. **Verify statutes for future-dated amendments.** Missouri's revisor served amended text ahead of its effective date and nearly shipped a figure $25K wrong. Idaho's legislature site gets the same treatment: record the version in force today plus any enacted-but-pending change.
4. **Cite the section carrying the quoted language**, not the definitions section. Three such failures were caught on MoKan; a reader who lands on definitions distrusts every other citation.
5. **City→county assignment comes from the Census crosswalk**, never geometry. Nearest-centroid assignment shipped a live factual error across six published pages on MoKan.
6. **Duplication is checked at stride-1.** Coarser strides are samples, not proofs; three strides once gave three different answers.
7. **`follow` is never false.**
8. **CI green is the gate.** Never build locally.
9. **One claim, one section.** A fact stated in two places is a page restating itself.
10. **Every displayed number real.** No invented reviews, volumes, years in business, or awards. AI imagery is illustrative and captioned as such.

## 6. Expansion beyond Ada

Canyon County is the likely Phase 2 market (Nampa, Caldwell, Middleton), but
entry is decided on population, search demand, housing turnover, land activity,
competition, travel feasibility and — decisively — whether enough distinct
evidence exists to differentiate the pages. Not on a radius.

The data layer supports Gem, Payette, Boise, Elmore and Owyhee counties from day
one without schema changes. It publishes none of them.

**Naming note, recorded once and not re-raised:** the brand is county-named while
the footprint is regional. MoKan hit this and solved it by naming for the region.
The Canyon County pages will read slightly off under an "Ada" brand. Decision
stands with the owner.

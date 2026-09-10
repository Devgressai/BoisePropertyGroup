# Commercial Master Runtime — Boise Property Group

**Authoritative execution ledger** for the commercial acquisition expansion.
Updated after every phase. If context is compacted, this document alone must be
enough to resume without losing architectural intent.

---

## Mission

Build an evidence-backed commercial acquisition information system for Boise,
Ada County and the Treasure Valley — not "another cash-home-buyer website with a
commercial page".

**The moat is the evidence graph, not the page count.**

---

## PRIME CONSTRAINT — capability is not history

| | Status |
|---|---|
| **A.** What BPG will *consider* buying | owner-supplied fact, `src/data/criteria.ts` |
| **B.** What BPG *has* bought | **DOES NOT EXIST** — no transaction evidence |
| **C.** Educational information | sourced evidence, commercial registry |

Pages may state A and C. Never B. "We consider industrial properties" must never
become "we have acquired industrial properties throughout Boise."

---

## Baseline (Phase 00) — 2026-09-10T04:52Z, commit f401bd5

| Check | State |
|---|---|
| Evidence integrity | PASS |
| Red-team arithmetic | PASS |
| Quote audit | PASS — every quote traced to cache |
| Commercial evidence gate | PASS |
| Codegen drift | in sync |
| CI | success |
| Uncommitted | 0 |
| Routes | 9 route files, 13 live URLs |
| Residential registry | 77 claims (77 approved), 46 sources |
| Commercial registry | 16 claims (14 approved), 7 sources |

**Baseline green. Any later failure is attributable to this expansion.**

---

## Phase status

| Phase | Name | Status |
|---|---|---|
| 00 | Baseline + regression protection | **COMPLETE** |
| 01 | Commercial domain model | **COMPLETE** |
| 02 | Source registry architecture | **COMPLETE** |
| 03 | Ada County commercial assessment framework | **PARTIAL** — assessment done; parcel/taxing districts open |
| 04 | 5+ unit multifamily classification | **COMPLETE** — 6 systems mapped (Idaho ×3, Census, HUD, GSE/FHFA); no single boundary exists |
| 05 | Boise zoning + commercial geography | **PARTIAL** — 6 of 30 districts read; geography open |
| 06 | Meridian/Garden City/Eagle/Kuna/Star zoning | **DISPATCHED** |
| 07 | Industrial intelligence | **PARTIAL** |
| 08 | Multifamily intelligence | **PARTIAL** |
| 09 | Office intelligence | **DISPATCHED** |
| 10 | Retail/mixed-use intelligence | **DISPATCHED** |
| 11 | Land/development intelligence | **DISPATCHED** |
| 12 | Seller-situation ontology | **COMPLETE** — `research/commercial/COMMERCIAL-SELLER-SITUATION-ONTOLOGY.md`; 7 Tier-1, 4 currently buildable |
| 13 | Transaction-structure research | NOT STARTED |
| 14 | Valuation education model | NOT STARTED |
| 15 | SERP + query ownership | **PARTIAL** — ownership map recorded (`data/commercial/queries/commercial-query-ownership.json`); risks 2+ outstanding |
| 16 | IA decision | BLOCKED on 15 |
| 17–30 | Implementation, validation, audit | BLOCKED on 16 |

---

## Unresolved factual questions

| # | Question | Blocks | Owner |
|---|---|---|---|
| 1 | Was the new Ada County Title 8 adopted, and does the codified district schedule match the draft? | every Ada County zoning claim | agent `ada-code-adoption` running; amlegal 403s re-confirmed 09-10, Municode has no Ada County client |
| 2 | What do the bracketed footnotes on Boise dimensional standards say? | R-3 density, I-1/I-2 0 ft setbacks, I-3 height/setback | research |
| ~~3~~ | ~~Which systems use a 5+ unit multifamily boundary?~~ | **RESOLVED** — no system is authoritative for all purposes. Census=2+, FHFA/GSE=>4, HUD varies. Never write "5 units is legally commercial". | closed |
| 4 | Does BPG have any completed transaction, of any asset class? | all trust architecture | **OWNER INPUT REQUIRED** |
| 5 | Are there acquisition size limits (min/max SF, units, price)? | acquisition criteria page | **OWNER INPUT REQUIRED** |

---

## Assumptions explicitly prohibited

- That Boise district standards apply outside Boise.
- That county and city zoning vocabularies correspond.
- That "5+ units" is a single legal boundary.
- That building height equals clear height.
- That an overlay replaces rather than supplements base zoning.
- That current zoning implies development entitlement.
- That a draft ordinance is the adopted code.
- That any market statistic is current without a dated source.

---

## Rejected URL candidates

_No commercial URL has been proposed yet — the architecture decision is Phase 16._

Rejected as **situations** in Phase 12, and therefore never eligible for a URL:
owner retirement · out-of-area owner · "tired of managing" (residential language) ·
underperforming asset · portfolio rebalancing · partner dispute (folded into entity exit).

Standing prohibition: no location × asset-class × situation Cartesian product.

---

## Commits

See `docs/commercial/IMPLEMENTATION-LEDGER.md`.

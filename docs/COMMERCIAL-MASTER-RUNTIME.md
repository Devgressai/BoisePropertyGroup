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
| 03 | Ada County commercial assessment framework | **COMPLETE** — assessment done; three Tier 1 statutes added (63-205 lien date, 63-208 the 90–110% tolerance band, 63-314 the five-year appraisal cycle) |
| 04 | 5+ unit multifamily classification | **COMPLETE** — 6 systems mapped (Idaho ×3, Census, HUD, GSE/FHFA); no single boundary exists |
| 05 | Boise zoning + commercial geography | **PARTIAL** — 10 districts read; footnote definitions established as UNREACHABLE (amlegal 403); geography open |
| 06 | Meridian/Garden City/Eagle/Kuna/Star zoning | **PARTIAL** — Meridian/Eagle/Kuna district schedules read to completion incl. footnotes; **NOT CITABLE YET** — agent's artifacts are in scratchpad, cache population authorised and pending. MX-3 does not exist (closed) |
| 07 | Industrial intelligence | **PARTIAL** |
| 08 | Multifamily intelligence | **PARTIAL** |
| 09 | Office intelligence | **DISPATCHED** |
| 10 | Retail/mixed-use intelligence | **DISPATCHED** |
| 11 | Land/development intelligence | **DISPATCHED** |
| 12 | Seller-situation ontology | **COMPLETE** — `research/commercial/COMMERCIAL-SELLER-SITUATION-ONTOLOGY.md`; 7 Tier-1, 4 currently buildable |
| 13 | Transaction-structure research | **RESEARCH COMPLETE, UNWRITTEN** — see `research/commercial/SELLER-FINANCING-BOUNDARY.md`. Reg Z's line is UNIT COUNT (1–4 dwelling), not investment-vs-residence; Idaho's own Act has NO purpose limitation, so the federal business-purpose exit has no Idaho counterpart |
| 14 | Valuation education model | **COMPLETE** — `research/commercial/COMMERCIAL-VALUATION-EDUCATION-MODEL.md`; verdict: ONE explainer, not a cluster |
| 15 | SERP + query ownership | **PARTIAL** — ownership map recorded (`data/commercial/queries/commercial-query-ownership.json`); risks 2+ outstanding |
| 16 | IA decision | **COMPLETE** — computed, not decided: `scripts/research/commercial-ia-eligibility.mjs`. **Two pages plus a hub.** |
| 17 | Build the eligible pages | **COMPLETE** — `/commercial`, `/commercial/industrial`, `/commercial/multifamily`, `/commercial/how-value-is-determined`. The explainer became eligible only after the three Idaho Code statutes were added — the eligibility script re-decided it, which is the point of it being a script |
| 18 | Structured data | **COMPLETE** — WebPage + BreadcrumbList + citations. No Service, Offer, Product or AggregateRating: no transaction history exists and JSON-LD is where an unearned claim slips past review |
| 19–30 | Intake, cross-linking, audits | in progress |

---

## Unresolved factual questions

| # | Question | Blocks | Owner |
|---|---|---|---|
| ~~1~~ | ~~Was the new Ada County Title 8 adopted?~~ | **RESOLVED 09-10** — YES. **Ordinance No. 1002**, published by the Ada County Clerk, 615 pages, cached and extracted. Adopted schedule matches the draft. Corroborated by a 27 May 2026 county ordinance amending the map of Title 8 "AS ADOPTED BY ORDINANCE NO. 1002". Two claims unblocked after nine days withheld. | closed |
| 2 | What do the bracketed footnotes on Boise dimensional standards say? | R-3 density, I-1/I-2 0 ft setbacks, I-3 height/setback | research |
| ~~3~~ | ~~Which systems use a 5+ unit multifamily boundary?~~ | **RESOLVED** — no system is authoritative for all purposes. Census=2+, FHFA/GSE=>4, HUD varies. Never write "5 units is legally commercial". | closed |
| ~~2~~ | ~~What do the bracketed footnotes on Boise dimensional standards say?~~ | **ANSWERED, BADLY** — the City publishes NO footnote definitions at all; they exist only in the amlegal codified ordinance, which 403s every automated request. A footnoted cell is quotable-with-marker and unparaphrasable. Possible unlock: local Chrome over CDP with a non-`HeadlessChrome` UA (reported by `zoning-cities`, unverified here). | open, downgraded |
| 4 | Does BPG have any completed transaction, of any asset class? | all trust architecture | **OWNER INPUT REQUIRED** |
| 5 | Are there acquisition size limits (min/max SF, units, price)? | acquisition criteria page | **OWNER INPUT REQUIRED** |
| 6 | What is Ordinance 1002's effective/publication date? | nothing published — §8-1-8 self-executes on publication | **manual browser read** — amlegal history note |
| ~~7~~ | ~~Is an Idaho sale price public record?~~ | **RESOLVED 09-10** — Idaho is a non-disclosure state. Access to recorder records is total and free (§ 31-2419); price is not among a conveyance's required elements (§ 55-601). Published affirmatively. | closed |

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

**Phase 16 rejected these outright, from the evidence rather than from taste:**

| Candidate | Why it does not exist |
|---|---|
| ~~Office property — Boise~~ | **MERGED, not built.** Failed at 0 differentiating claims through three rounds while evidence more than doubled around it. The reason held every time: the codes do not separate office from retail, so every fact was true of both. Now covered by `/commercial/commercial-districts`. |
| ~~Retail property — Boise~~ | **MERGED, not built.** Same reason, same evidence. Two pages would have been one page written twice. |
| Commercial and development land | 6 matched, 1 differentiating. Its evidence is overlays — airport influence, flood — which apply to every asset class and therefore distinguish none. |
| Valuation explainer, standalone | 5 matched, 2 differentiating. Its best claims belong to the multifamily page, where they are concrete. Valuation becomes a section, exactly as Phase 14 predicted. |
| Lease rollover (situation) | 0 differentiating. Entirely built on what the asset pages already establish. |
| Vacancy in a special-purpose building (situation) | 1 differentiating; loses six claims to the industrial page. It IS the industrial page. |
| Entity exit, loan maturity (situations) | No evidence held at all. |

That the office and retail pages fail is the gate working. Both were obvious
keyword pages, both would have been built by any normal process, and neither has
a single fact that is true of it and not of its neighbours.

---

## Commits

See `docs/commercial/IMPLEMENTATION-LEDGER.md`.

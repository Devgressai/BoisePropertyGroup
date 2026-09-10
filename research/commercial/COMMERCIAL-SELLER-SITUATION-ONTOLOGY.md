# Commercial Seller-Situation Ontology (Phase 12)

**Status:** structural artifact. Governs Phase 16 IA. Contains NO publishable claims —
every factual assertion below is either already in the commercial registry (cited by id)
or marked `UNSOURCED` and therefore may not reach a page in any form.

---

## Why an ontology instead of a keyword list

The residential side of this business can get away with situation pages that are mostly
emotional framing — inherited, tired landlord, divorce, relocation. The situation changes
the seller's *motivation* but usually not the *transaction*. A house is a house.

Commercial does not work that way. On the commercial side the situation frequently changes
the transaction itself: who has authority to sign, what the asset is worth, whether a
lender is a party, and whether there is a hard date. That is the difference worth writing
about, and it is the only difference worth a URL.

**Admission test.** A situation earns a page only if it changes at least TWO of the
following five. A situation that changes zero or one is a paragraph inside another page,
never a page of its own.

| # | Test | Question |
|---|---|---|
| T1 | **Authority** | Does it change who must consent or sign? |
| T2 | **Valuation** | Does it change how the asset is valued, or destroy the input the valuation runs on? |
| T3 | **Clock** | Is there a hard external date the seller does not control? |
| T4 | **Third party** | Is a lender, court, agency or tenant a necessary party? |
| T5 | **Documents** | Does it require documents that do not exist in a residential sale? |

**Rejection test.** Even passing T1–T5, a situation is rejected if:

- **R1 — it is really residential.** If the same words would be written on a house page,
  it is a house page. See `data/commercial/queries/commercial-query-ownership.json`.
- **R2 — we cannot say anything specific to Idaho or the Treasure Valley.** A page that
  reproduces national commercial-real-estate generalities is the national template we
  already found occupying the SERP. It adds nothing and should not exist.
- **R3 — it requires transaction history to be credible.** We have none. A situation page
  that only works if the reader believes we have done it before is prohibited under the
  PRIME CONSTRAINT.

---

## The situations

Ordered by how much of the transaction they change. `Δ` lists which tests they pass.

### Tier 1 — changes the transaction (page-eligible, subject to R1–R3)

**1. Entity or partnership exit** — Δ T1, T5
Ownership sits in an LLC, partnership or tenancy-in-common. The person who wants out may
not be able to sell the asset at all; what they can sell may be an interest, not a
property. Authority comes from the operating agreement, not from the deed.
*Distinctly commercial:* residential co-ownership is normally joint tenancy or community
property; entity ownership is the norm here and the governing document is private.
`UNSOURCED` — needs Idaho Title 30 (Uniform Limited Liability Company Act) verification
before anything specific is written about default member consent thresholds.

**2. Loan maturity or refinance failure** — Δ T3, T4, T2
A balloon comes due, or a refinance is declined because the debt-service coverage ratio no
longer clears at current rates. The date is set by the note and the seller does not
control it. The lender is a necessary party to any sale that does not pay the note in full.
*Distinctly commercial:* commercial loans mature; a 30-year residential mortgage generally
does not present the borrower with a balloon date.
`UNSOURCED` — no rate, DSCR threshold or maturity-volume figure may be published without a
dated source. See the standing prohibition on undated market statistics.

**3. Lease rollover / income concentration** — Δ T2, T4, T5
A single tenant, or several tenants expiring together, carries the income. The asset is
valued on that income (`ada-commercial-assessment-uses-income`,
`ada-apartments-valued-by-commercial-appraisers`), so a rollover is not a leasing problem —
it is a valuation event. Requires a rent roll, T-12 and estoppels, none of which exist in
a house sale.
*Distinctly commercial:* the strongest structural page candidate in the set.

**4. Vacancy in a special-purpose building** — Δ T2, T5
An income-valued asset with no income has no income-approach value, and a building shaped
for one use has a thin buyer pool. Cost and sales approaches carry the value instead.
*Idaho hook available:* the industrial district framework is already evidenced
(`boise-i1-purpose`, `boise-i2-purpose-separation`, `boise-i3-purpose-and-buffer`,
`boise-industrial-height-varies-by-district`) — what a building may legally be reused for
is a zoning question with real Boise answers.

**5. Environmental condition** — Δ T2, T4
A recognized environmental condition changes both the buyer pool and financing
availability, because a lender's collateral position is exposed.
`UNSOURCED` — nothing may be written about Idaho DEQ process, liability or timelines
without primary sources. Currently no evidence in the registry. **Not page-eligible yet.**

**6. Exchange deadline** — Δ T3, T5
A seller in an exchange is working to externally fixed identification and closing periods.
`UNSOURCED` — the 45/180-day figures are widely repeated and probably right, but "probably
right and widely repeated" is exactly the failure mode that produced the § 63-307A
fabrication. IRC § 1031 and the Treasury regulation must be read before either number is
written down. **Not page-eligible yet.**

**7. Estate or trust holding commercial property** — Δ T1, T5
Authority runs through a personal representative or trustee, and the asset is an operating
business-like holding with tenants, leases and possibly employees.
**R1 RISK — HIGH.** The residential inherited-property guide already exists and ranks. Any
commercial version must be about the *operating* problem (leases continuing, deposits,
income during administration), never about probate generally, or it will cannibalise the
guide we already have.

### Tier 2 — changes motivation, not the transaction (NOT page-eligible)

| Situation | Why rejected |
|---|---|
| Owner retirement | T3 only, and it is soft. Belongs inside the entity-exit page. |
| Out-of-area owner | Fails every test. This is a preference, not a transaction difference. |
| "Tired of managing" | **R1 — this is landlord-exit language and it is residential.** Prohibited on any commercial page under the vocabulary rule. |
| Underperforming asset | Restates valuation. A paragraph, not a page. |
| Portfolio rebalancing | No Idaho specificity possible. R2. |
| Partner dispute | A subset of entity exit. Do not split it out. |

### Tier 3 — real but currently unwritable

| Situation | Blocker |
|---|---|
| Receivership / foreclosure | Idaho commercial foreclosure procedure is not in the registry. The residential deed-of-trust guide does NOT transfer — do not assume commercial follows it. |
| Condemnation / corridor | Requires ITD or ACHD project evidence. None held. |
| Entitlement expiry on land | Requires per-jurisdiction approval-duration rules. Phase 06 may supply these; until then, nothing. |
| Code-driven obsolescence | Requires adopted building-code editions per jurisdiction. Not held. |

---

## What this yields

Seven Tier-1 situations. Two are blocked on evidence we do not have (5, 6). One carries a
high cannibalisation risk that must be designed around (7). That leaves **four** situations
that are simultaneously distinctly commercial, evidenced, and safe from our own residential
pages:

1. Entity or partnership exit *(pending Idaho Title 30 verification)*
2. Loan maturity or refinance failure *(no undated statistics)*
3. Lease rollover / income concentration ← **strongest**
4. Vacancy in a special-purpose building ← **best Idaho evidence today**

Four is the honest number. It is not a content plan; it is the outcome of applying the
tests. Phase 16 decides whether these become pages, sections, or nothing at all — passing
the admission test makes a situation *eligible*, never *scheduled*.

---

## Standing prohibitions carried forward

- No situation × asset class × city Cartesian product. Ever.
- No situation page may imply completed transactions (PRIME CONSTRAINT, B).
- No landlord-exit vocabulary on any commercial page.
- No undated market statistic anywhere in this vertical.

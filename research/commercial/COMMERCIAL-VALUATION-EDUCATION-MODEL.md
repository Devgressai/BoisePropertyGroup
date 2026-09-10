# Commercial Valuation Education Model (Phase 14)

**Status:** structural artifact. Governs what any page may say about value.
Contains NO publishable claims — factual statements are cited by registry id or
marked `UNSOURCED`, and `UNSOURCED` material may not reach a page in any form.

**This is the highest-liability subject in the vertical.** We are a buyer. Anything
we say about what a property is worth is said by a party with an interest in the
answer. The model below exists to keep that from becoming a problem.

---

## 1. The rule that overrides everything else

> **We may explain how value is determined. We may never state, imply, or imply by
> omission what a reader's property is worth.**

Prohibited outright, in copy, headings, meta, schema, form microcopy and alt text:

- Any number attached to a reader's property, however hedged.
- "Free valuation", "free property analysis", "find out what your building is worth",
  "instant commercial offer", or any equivalent. These promise an appraisal.
- Any cap rate, rent, vacancy, absorption, price-per-foot or transaction figure
  without a dated, geography-matched source. Machine-enforced by
  `scripts/validation/check-commercial.mjs`.
- Any comparison of our number to a broker's, an appraiser's, or the assessor's.
- The word "appraisal" used to describe anything we do. We do not appraise.

The offer we make is a **price we are willing to pay**. That is a commercial
position, not an opinion of value, and the two must never be blurred. A page may
say what we would pay and how we arrived at it. It may not say that is what the
property is worth.

---

## 2. What a commercial owner actually cannot do for themselves

This is the honest core of the vertical, and it is a genuine asymmetry rather than
a marketing claim.

A homeowner can approximate their own value. Comparable sales are effectively
public, portals publish estimates, and the method — find similar houses, adjust —
is intuitive. **None of that transfers.**

| | House | Commercial building |
|---|---|---|
| Method | comparable sales | income (`ada-commercial-assessment-uses-income`) |
| Input | other sales | the property's own income |
| Availability of input | portals publish it | the owner holds it; nobody else does |
| Comparability | many near-identical houses | few, and rarely alike |

Ada County's own assessment practice runs on income for commercial property, and
apartments are handled by commercial appraisers rather than residential ones
(`ada-apartments-valued-by-commercial-appraisers`). The county is doing the same
thing a buyer does, for the same reason: there is no other reliable way.

**The comparable-sales problem is the harder half.** Whether Idaho sale prices are
obtainable at all is under active verification (`idaho-no-mandatory-sale-price-disclosure`,
currently WITHHELD pending affirmative evidence). Until that resolves, no page may
assert anything about the availability of Idaho comparables in either direction.
This is the single highest-value open question in the vertical.

---

## 3. What may be taught, and at what evidence bar

| Concept | Bar | Status |
|---|---|---|
| Value follows income, not square footage | already evidenced | **teachable** |
| Assessed value ≠ market value ≠ what a buyer will pay | needs the Jan 1 lien-date claim (`ada-assessment-market-value-jan-1-commercial`) framed as *timing*, not as *accuracy* | **teachable, carefully** |
| Apartments are appraised commercially, not residentially | evidenced | **teachable** |
| Where "multifamily" begins | evidenced across six disagreeing systems (`multifamily-threshold-varies-across-six-systems`) | **teachable — and it is a correction, not a definition** |
| NOI, cap rate, T-12, rent roll, estoppel — what they are | definitional; needs an authority that is not a brokerage marketing page | **NOT YET — no source held** |
| How a cap rate converts income to value | arithmetic, but the moment we show it with numbers it reads as a valuation | **NOT YET** |
| What Idaho comparables are available | blocked on non-disclosure verification | **BLOCKED** |
| What any specific property is worth | never | **PROHIBITED** |

The vocabulary row matters more than it looks. Under the query-ownership rule
(`data/commercial/queries/commercial-query-ownership.json`), rent roll, NOI, cap
rate, estoppel, T-12 and WALT are what tell a search engine a commercial page is
commercial. We need them on the page — which means we need a real source for what
they mean, and a brokerage's glossary is not one.

---

## 4. The assessed-value trap

An owner who looks anywhere first looks at the assessor's number, and it is the
most misleading number available to them. It is **not wrong**; it answers a
different question:

- it is a value as of **January 1** (`ada-assessment-market-value-jan-1-commercial`),
  so it is stale by construction for most of the year;
- it is produced for taxation, at mass-appraisal scale, not for a transaction;
- it cannot account for the specific facts — a lease expiring, deferred capex, a
  functional problem — that move a real price.

**Framing rule.** Explain the timing and the purpose. Never say or suggest the
assessor is wrong, never invite the reader to infer that their assessment is too
high or too low, and never position our number against it. A buyer telling an owner
the government's number is unreliable is a bad look and, more to the point, is not
something our evidence supports.

---

## 5. Structural decision

Valuation education is **not a page cluster.** It is the explanatory layer that the
Phase 12 situation pages stand on, plus at most one durable explainer.

The reason is the Phase 12 admission test applied to itself: valuation changes T2
by definition, and nothing else. It fails the two-of-five bar on its own. Every
genuinely useful valuation point is *already attached to a situation* — a lease
rollover is a valuation event, a vacancy is a valuation event, a maturing loan is a
valuation event. Split into standalone valuation pages, those points lose the
situation that made them concrete and become the national-template generality that
Phase 15 found already occupying the SERP.

**Provisional shape, for Phase 16 to accept or reject:**

- **One** explainer: why a commercial property is valued on income and a house is
  not. Fully evidenced today. Zero residential cannibalisation risk — the
  vocabulary is disjoint from every residential query we own.
- Everything else lives inside the situation it belongs to.
- **No** cap-rate page, **no** "what's my building worth" page, **no** valuation
  calculator, **no** per-asset-class valuation pages. Each of those is either a
  prohibited implicit appraisal or a keyword with no answer behind it.

That is one page. It is meant to be one page.

---

## 6. Prohibited constructions

Concrete phrasings that must never appear, in any asset class:

- "What is my commercial property worth?" as a page title, H1 or FAQ question we
  then answer — the question invites the one answer we may not give.
- "Cap rates in Boise are around X" — undated statistic, machine-rejected.
- "The assessor's value is usually lower than market" — unsourced and adversarial.
- "We'll tell you what it's worth" — an appraisal promise.
- "Based on your rent roll we can estimate value" — an appraisal promise wearing a
  process description.
- Any worked example using numbers a reader could mistake for their own situation.
- Any valuation statement in JSON-LD, where nobody reviews the copy.

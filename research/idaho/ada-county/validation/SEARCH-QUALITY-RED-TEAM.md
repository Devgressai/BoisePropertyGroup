# Search-Quality Red-Team

An adversarial pass whose only job is to find reasons **not** to publish. Written
against the evidence as it actually stands, not against the plan.

---

## Q1. Could this become doorway pages?

**Yes — the six city pages are the live risk, and the evidence says so plainly.**

Of 76 approved claims, the number unique to a single municipality is:

| City | Unique claims |
|---|---:|
| Star | 4 |
| Boise | 2 |
| Kuna | 2 |
| Eagle | 1 |
| Meridian | 1 |
| Garden City | 1 |
| Hidden Spring | 0 |

Everything else those pages could say is inherited — Idaho statute and Ada County
administration that applies identically to all six. Six pages built on one
distinctive fact apiece, differing otherwise only in a name and a population
number, is the textbook definition of a doorway set.

**Ruling: only Star currently clears the bar. Boise clears it on market
significance rather than distinctiveness. The other four do not.**

---

## Q2. Are we creating pages because users need them, or because permutations exist?

The permutation temptation is inherited from the donor: Sierra runs 495
city × situation combos, of which 361 are unindexed on its own site. That layer
is already excluded from this project.

The remaining risk is subtler — 6 cities × 14 seller situations × 13 property
types is 1,092 theoretical pages, and every one could be *generated*. Nothing in
the architecture prevents it. Only the evidence gate does.

**Ruling: hold the line at the evidence gate. A combination gets a page when it
has evidence of its own, never because the grid has a cell.**

---

## Q3. Where would Google see duplication?

Three places, in descending likelihood:

1. **County hub vs city pages.** The Ada County dossier holds 42 direct claims;
   the cities hold 5–9 each, nearly all inherited from that same county layer. If
   the county hub explains assessment, tax collection, recording, roads and
   septic, and each city page explains them again, six pages restate one page.
   *This is the single most likely duplication failure and it is exactly what
   produced most of MoKan's stride-1 hits.*
2. **Situation pages vs knowledge pillars.** "Selling with tenants" and a
   landlord-tenant knowledge pillar draw on the same three deposit claims.
3. **Inherited vs probate.** Both rest on the same personal-representative and
   fiduciary-disclosure claims.

**Ruling: the county hub summarises and links; it never reproduces. Situation
pages convert and link out; pillars explain. Inherited and probate stay separate
only while probate carries procedural evidence that inherited does not.**

---

## Q4. Which pages should be merged, or should not exist?

**Should not exist on present evidence:**

- **Hidden Spring** — zero direct claims. It is a CDP, not a city, with no
  population figure in the sub-county estimates. It should not receive a page at
  all, indexable or otherwise.
- **Relocation**, **hoarder property** — INSUFFICIENT_EVIDENCE. No Idaho-specific
  fact exists for either, so the page would say nothing a national competitor
  could not. Fold into broader pages.
- **Commercial property** — no evidence gathered; out of Phase 1 scope.
- **Apartments / 5+ units** — scores high only on borrowed general assessment
  claims. Capped to LOW.

**Should be merged:**

- **Fire damage** and **fire-damaged / WUI property** — the only wildfire
  evidence is Boise's construction overlay, which is about building in the WUI,
  not about selling a damaged house. One page at most, and it belongs to Boise.
- **Vacant property** and **code violations** — both rest on the same single
  code-enforcement claim.

---

## Q5. Where does this look SEO-first rather than user-first?

Honestly: the **city pages**. Every other cluster was chosen because evidence
existed for it. The city set was chosen first — it came from the brief — and the
evidence was sought afterwards. That is backwards, and the differentiation
matrix is the record of it not working out.

The knowledge pillars are the reverse: probate, foreclosure, tax delinquency,
water, septic, manufactured housing and roads were all promoted **because** the
research produced statute-grade evidence for them.

---

## Q6. Where could an AI system see repetitive information?

The same county-layer repetition as Q3. A retrieval system summarising six Ada
city pages would find one answer restated six times and would be right to
consolidate. That is a reason to publish fewer, denser pages — not more.

---

## Q7. Where could we accidentally give legal advice?

Highest-risk claims, all carrying explicit warnings in the registry:

- **6-310A** — reads like a fast eviction route; it excludes former tenants and
  family members, which is most of what sellers mean by "squatter".
- **15-3-711** — reads like "a personal representative can always sell without
  court involvement"; 15-3-715 qualifies it and the two must never be split.
- **55-812** — reads like "an unrecorded lease doesn't bind a buyer"; the
  one-year carve-out and the good-faith requirement both govern.
- **63-1007** — reads like "you have 14 months to redeem"; the right dies earlier
  if the county contracts to sell.
- **55-2505** — reads like "estate sales need no disclosure"; the probate-order
  and fiduciary grounds are distinct, and the divorce exemption is
  spouse-to-spouse only.

**Ruling: every one of these is a statement of what a statute says, attributed
and quoted, followed by a direction to counsel. None is applied to a reader's
facts.**

---

## Q8. Where could claims go stale?

| Claim area | Risk |
|---|---|
| Idaho Code 42-111 (domestic water) | **HIGH** — amended twice in two years |
| 63-602G (homeowner's exemption) | **HIGH** — 2026 amendment, effective date unconfirmed |
| Meridian permit data | **HIGH** — single month, rolling URL |
| FEMA maps adopted 2020 | MEDIUM — may since be revised |
| COMPASS 2050 projections | MEDIUM — a projection, restated periodically |
| Median age (2022 ACS) | MEDIUM — second-hand, will be superseded |
| Statutory process claims | LOW |

---

## Verdict

The evidence system is sound. The **page plan is not yet**, and the gap is
entirely in the municipal layer.

**Recommendation: Phase 9 should publish fewer city pages than the brief
assumes.** Ada County and Boise as anchors, Star on its own merits, and the
remaining three rendered `noindex, follow` until each has genuine distinctive
material. Hidden Spring should not be built.

That is a smaller site than planned. It is also the only version of it that
survives this review.

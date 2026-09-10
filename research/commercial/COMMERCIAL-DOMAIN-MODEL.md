# Commercial Domain Model — Boise Property Group

Research artifact. **Not page copy.** Governs what commercial pages may claim.

## The rule that governs this whole branch

**Business capability is not evidence.** Three things must never be conflated:

| | Where it lives | Who supplies it |
|---|---|---|
| **A.** What we will *consider* buying | `src/data/criteria.ts` | the owner |
| **B.** What we *have* bought | nowhere — no transaction evidence exists | must be verified before it exists |
| **C.** Educational information about a property type | this registry | primary sources |

A page may state A and C. It may not state B, and it may never let A imply B.

---

## FINDING 1 — There is no single "multifamily threshold" in Idaho

This is the most consequential thing established so far, and the easiest to get
wrong. At least three systems draw the residential/commercial line differently:

| System | Boundary | Source |
|---|---|---|
| Ada County **assessment** | Residential appraisers up to **four units**; apartments and high-density go to commercial appraisers | Ada County Assessor |
| Idaho **property condition disclosure** | Applies to **one to four dwelling units**, including non-owner-occupied rentals | Idaho Code 55-2504 |
| Idaho **domestic water** | Excludes "apartments, condominiums, and similar developments with multiple dwelling units" — **no unit count at all** | Idaho Code 42-111 |

The water statute is the one that breaks the pattern: it excludes multi-dwelling
developments **as a class**, not above a threshold.

**Consequence for copy.** Any sentence of the form "in Idaho, multifamily means
5+ units" is wrong about at least one of these systems. Every boundary statement
must name the system it belongs to. Lending conventions (agency/GSE product
lines) commonly use a 5+ boundary, but **no lending source has been researched
here**, so no page may assert one.

---

## FINDING 2 — Commercial assessment uses income; residential largely does not

Ada County states that commercial assessments are developed using construction
costs, market sales **and income production**, while the residential description
relies on construction costs, sales and, where applicable, rental information.

Practical consequence: an apartment building's assessed value is produced by a
different team using different inputs from a duplex two streets away, and can
move differently year to year.

**Boundary.** The Assessor's page states the *inputs*. It is not a methodology
document, and it supports no claim about how a specific property was valued, nor
any cap rate or NOI figure.

---

## FINDING 3 — Boise has THREE industrial districts, and height varies enormously

**Corrected 2026-09-10.** An earlier version of this section said Boise has two
industrial districts both capped at 55 ft. That was wrong, and the error is
instructive: I researched I-1 and I-2 and assumed the set was complete.

| District | Height max |
|---|---|
| I-1 Industrial: Light | 55 ft |
| I-2 Industrial: Heavy | 55 ft |
| **I-3 Industrial: Technology** | **150 ft** |

A page built on the earlier claim would have told an owner of I-3 ground they
were capped at 55 feet — wrong by a factor of nearly three.

**But height is not the whole comparison.** I-3 buys its height with setbacks:
front is 45 ft plus one additional foot for every foot of building height above
45 ft (or 100 ft), and side street, interior side and rear all follow the front
standard. I-1 and I-2 by contrast set interior side and rear at **0 ft**. A
taller I-3 building therefore consumes far more of its parcel. Comparing the
districts on height alone compares the wrong variable.

Other differences that do exist between them:

| | I-1 Light | I-2 Heavy |
|---|---|---|
| Purpose | Light manufacturing, assembly, fabrication, technology; typically not nighttime; compatible with nearby commercial/residential given buffering | Greater impacts; heavy transportation; frequently nighttime; **should be separated from commercial or residential development** |
| Minimum lot area | none | none |
| Minimum street frontage | none | **30 ft** |
| Front setback | 20 ft | 20 ft |
| Side street setback | 15 ft | 15 ft |
| Interior side / rear | 0 ft [1] | 0 ft [1] |
| Parking setback, front | 10 ft | 15 ft |
| **Parking setback adjacent to I-84 / I-184** | **10 ft** | **20 ft** |
| Building height max | 55 ft | 55 ft |
| *(I-3 for contrast)* | *150 ft, with height-linked setbacks on all sides* | |

**Why the height cap matters.** Modern distribution product is often designed
around clear heights that push overall building height toward or past 55 feet,
so this is a genuine constraint on new build and expansion — and it does not
relax in the heavy district.

⚠️ **Building height is not clear height.** Never equate them.
⚠️ Setback footnote [1] has not been read. Do not characterise the 0 ft
   interior/rear standard without it.
⚠️ These are **Boise's** districts. Meridian, Nampa, Caldwell, Garden City,
   Eagle, Kuna, Star and unincorporated Ada County have **not** been checked and
   nothing here transfers to them.

---

## FINDING 4 — Overlays stack on top of base zoning

Boise maintains 30 zoning districts, of which ten are **overlays** — including
Airport Influence Area, Flood Protection, Boise River System, Hillside
Development and Wildland Urban Interface.

An overlay is an additional layer, not an alternative: a parcel can be I-1 **and**
AI-O simultaneously, with the overlay adding constraints on top of the base
district. Much of Boise's industrial ground sits near the airport, so AI-O is
directly material to industrial and development land.

⚠️ Only the AI-O *purpose clauses* have been read. Its actual standards have not,
and no page may describe what it requires.

## FINDING 5 — Seven mixed-use districts, not one

Boise runs MX-A (active), MX-D (downtown), MX-2 (general), MX-H (health), MX-N
(neighborhood), MX-T (TOD node) and MX-U (university). Only MX-2 has been read.

MX-2 permits office, commercial, institutional and residential together, caps
height at 45 ft, and sets front setbacks as a **range — minimum 0, maximum 20 ft**.
A maximum setback is a different instrument from a minimum: it pushes buildings
toward the street rather than merely off it, which constrains where surface
parking can go.

## What is NOT yet evidenced, and therefore unpublishable

- Any cap rate, rent, vacancy, absorption, price per square foot, or transaction
  volume for any Treasure Valley submarket.
- Any industrial submarket boundary or corridor definition.
- Office or retail zoning districts in any city.
- Multifamily zoning districts and density standards in any city.
- Meridian, Nampa and Caldwell industrial zoning.
- Environmental due diligence, Phase I ESA practice, or brownfield status of any
  area.
- Any lending or GSE definition of multifamily.
- Anything about our own transaction history, because there is none.

## Build order from here

Industrial and multifamily are weighted first, per the owner's direction.

1. Boise multifamily/mixed-use zoning districts
2. Meridian industrial zoning (second-largest city, PDF-reachable only)
3. Ada County unincorporated industrial and commercial zoning
4. Commercial land / development ground
5. Office and retail districts
6. Only then: asset-class hub pages, gated as usual

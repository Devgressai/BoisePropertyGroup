# Commercial Legal Boundaries

What commercial pages may and may not say. Read before writing any of them.

## 1. The three-way distinction that governs everything

| | Status | Where it lives |
|---|---|---|
| **A.** What we will *consider* buying | owner-supplied business fact | `src/data/criteria.ts` |
| **B.** What we *have* bought | **DOES NOT EXIST** | nowhere — no transaction evidence |
| **C.** Educational information about a property type | sourced evidence | the commercial registry |

A page may state **A** and **C**. It may never state **B**, and must never phrase
**A** so it reads as **B**. "We buy office buildings" is A. "We have bought office
buildings in Boise" is B and is unpublishable.

## 2. No legal, tax, environmental, appraisal, lending or investment advice

Commercial pages may describe what a statute or a code says, attributed and
quoted, and direct the reader to their own professional. They may not apply any
of it to a reader's circumstances, and they may not recommend a course of action.

Specifically prohibited without professional framing: 1031 exchange guidance,
entity-structuring advice, environmental liability opinions, valuation opinions,
and anything about a specific lender's underwriting.

## 3. No market statistic without a dated, geography-matched source

Machine-enforced by `scripts/validation/check-commercial.mjs`, which rejects any
approved claim containing cap-rate, rent, vacancy, absorption, price-per-foot,
transaction-volume or dollar-figure language unless a cited source carries a
publication or update date.

Brokerage forecasts are not facts. Brokerage material may supply attributed
market context; it may never override a governmental or statutory source.

## 4. Zoning claims are jurisdiction-locked

Boise's districts govern Boise. They say nothing about Meridian, Eagle, Kuna,
Star, Garden City, Nampa, Caldwell, or unincorporated Ada County — each of which
administers its own code.

**Never generalise a district standard across a city limit.** The evidence so far
suggests the county and the cities use different vocabularies entirely (county
M1/M2/M3 against Boise I-1/I-2/I-3), which makes casual generalisation
particularly dangerous.

## 5. Dimensional standards carry footnotes the city does not publish

**RESOLVED 2026-09-10, and the answer is worse than assumed.** All eleven cached
Boise district pages were re-read and searched for footnote definitions.
**None of them defines a single footnote.** The city reproduces each dimensional
table *and its bracketed markers* while omitting the text those markers point to.
The definitions live in the codified ordinance at codelibrary.amlegal.com, which
returns HTTP 403 to every automated request, including with a complete browser
header set (re-confirmed 2026-09-10).

So a marker in one of our sources is not a "not yet read" — it is a
**cannot be read without a human opening a browser**.

Footnote map, established by direct re-read:

| District | Table | Markers present | Clean cells |
|---|---|---|---|
| MX-2 | 11-02.15 | **none** | all — 45 ft height and 0 ft setbacks are fully readable |
| I-1 | 11-02.27 | `[1]` on interior side, rear, and two parking setbacks | **55 ft height is clean** |
| I-2 | 11-02.27 series | `[1]`, same cells | **55 ft height is clean** |
| I-3 | 11-02.31 | `[1]` on the setback block, `[2]` on "OR 100ft", `[3]` on 150 ft height | street frontage 30 ft; parking setbacks |
| R-3 | 11-02.11 | `[1]` on the whole LOT STANDARDS block, `[2]` on lot area and density, `[3][4][5]` on setbacks | **height only** |

Consequences, now binding:

- A cell with a marker may be **quoted with its marker**. It may not be
  paraphrased, characterised, or converted into a statement about what an owner
  may do. "0 ft. [1]" is not a setback of zero.
- `boise-r3-no-maximum-density` is **WITHDRAWN**. Its density cell is footnoted
  twice, and its lot-area figure is printed on the city's own page as **"2,00 sf"** —
  a typo in the source. Reading that as 2,000 is a guess about a digit in a
  dimensional standard, which is the § 63-307A failure mode wearing different
  clothes. The unfootnoted height was split out as `boise-r3-height`.
- `boise-industrial-height-varies-by-district` was **reworded** to state what the
  table states rather than what it appears to permit. I-1/I-2's 55 ft carries no
  marker; I-3's 150 ft does.
- The omission itself is now an approved claim,
  `boise-district-pages-omit-footnote-definitions`. Write it as a reason to read
  the code, never as a criticism of the city.

## 6. Building height is not clear height

An industrial height limit constrains the building envelope. Clear height is an
interior dimension. They are related and they are not the same number, and
conflating them would mislead an industrial buyer or seller.

## 7. Overlays stack; they do not replace

A parcel carries a base district **and** any overlays covering it. Boise has ten
overlays, Ada County's draft schedule shows seven. An overlay adds constraints.

Only purpose clauses have been read for AI-O. No page may state what any overlay
*requires*.

## 8. The Ada County zoning code is NOT yet citable

The county's published Title 8 PDF has a **blank ordinance number** and a
`PZ_JAN2025` filename — a draft to the Planning and Zoning Commission, not a
certified adopted text.

A codified `TITLE 8 ADA COUNTY ZONING` does exist in the American Legal library
(current through ordinance 1018, 2026-03-24), so a new Title 8 was very likely
adopted — but that library returns 403 to automated retrieval and the adopted
district schedule has **not** been compared with the draft.

**No Ada County district name, code or standard may be published until the
codified text is read manually.** Two claims are recorded and withheld on this
basis.

## 9. Multifamily has no single definition

See the domain model, Finding 1. Assessment says four units. Disclosure says one
to four. The domestic water statute uses no unit count at all. Lending
conventions commonly use five, but **no lending source has been researched**, so
no page may assert one.

Every boundary statement must name the system it belongs to.

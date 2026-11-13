# NOTES: taxes-when-you-sell-a-house-in-idaho

Read and cached 2026-11-13. 27 new claims (prefix `cg-`), 13 new sources, 8 existing claims reused
(`cl-1099s-reports-real-estate-sales`, `cl-1099s-principal-residence-certification`,
`cl-1099s-tin-requested-at-closing`, `cl-firpta-buyer-withholds-15-percent`,
`cl-firpta-non-foreign-certification`, `ss-irs-canceled-debt-generally-taxable`,
`ss-irs-property-taken-treated-as-sale`, `ss-irs-principal-residence-exclusion-ended-2025`).
Existing source ids reused through those claims: `irs-i1099s`, `irs-firpta-withholding`,
`irs-firpta-exceptions`, `irs-topic-431`, `irs-pub-4681`, `irs-i1099ac`. None of the 13 new source URLs
was already in the registry.

`verify-quotes.mjs` passes (0 partial, 0 not found). That script accepts a quote found in ANY cached
artifact, so I also checked every quote segment and every history note against the claim's OWN cited
source. 0 failures.

## 1. Idaho Code 63-3022H and a house (highest risk, read first)

What the statute says, exactly:

- (1) 60% deduction of capital gain net income from "qualified property", for an INDIVIDUAL taxpayer.
- (3)(a) qualified property includes "Real property held at least twelve (12) months", with an Idaho
  situs at the time of sale.
- (6) "real property" means **land** and includes (a) a qualified conservation easement, (b) certain
  grazing permits or leases, (c) "Any other property defined in section 1250(c) of the Internal Revenue
  Code as 'section 1250 property' conveyed in perpetuity".
- (7) property depreciated under IRC section 1245 is not real property for this deduction.

The words house, home, dwelling and residence are not in the section. Whether an owner-occupied house
(the building, not the land) is "section 1250 property" depends on 26 U.S.C. 1250(c), which I did NOT
fetch. The Tax Commission's Form CG instructions paraphrase (6)(c) as "Depreciable real property as
described in section 1250(c)", which on its face reads oddly against a never-depreciated personal
residence.

Against that, the Tax Commission's own **2025 Form CG has line 2: "Qualifying capital gain from sale of
personal residence from federal Schedule D"**, and the instruction "Enter the taxable gain from the sale
of your Idaho home from federal Schedule D." So the Commission administers the deduction as reaching a
personal residence's taxable gain.

The page reports both facts side by side and draws no conclusion: the statute names land and section
1250 property and does not name a house; the Commission's form has a personal-residence line; a form
line is not a ruling. **A tax professional should confirm this section before publication.** Do not let
an editor shorten it to "Idaho gives you a 60% deduction on your house".

Not read: Income Tax Rules 170 to 173 (IDAPA 35.01.01), which the Commission's page cites and which may
settle the residence question; Idaho Code 63-3004 (which Internal Revenue Code version Idaho conforms
to); 26 U.S.C. 1250(c) and 1223 (holding period, including for inherited property). The holding period
for an inherited Idaho house under 63-3022H(4) is therefore NOT stated on the page.

## 2. Tax years: several figures are 2025 figures on a page about 2026 sales

| Figure | Source | Year it belongs to |
|---|---|---|
| $250,000 / $500,000 exclusion, 24 months in 5 years | Topic 701 (reviewed 09-Nov-2026) | none stated; page is current |
| Eligibility detail, 730 days, partial exclusion, nonqualified use, depreciation, loss | Pub 523 **2025 edition** ("For use in preparing 2025 Returns") | 2025 returns |
| 0% / 15% / 20% / 25% capital gain rates | Topic 409 (reviewed 09-Nov-2026) | "taxable years beginning in 2025" |
| Idaho rate 5.3% | Tax Commission online guide (updated May 7, 2026) | 2025 |
| Form CG personal residence line | Form CG dated 09-18-2025 | 2025 |
| Inherited basis | Pub 551 revised December 2025 | continuous use |

No 2026 Publication 523, no 2026 Form CG, no 2026 capital gain thresholds and no 2026 Idaho rate were
published on the pages read. The prose labels each 2025 figure. I deliberately did NOT claim the
dollar income thresholds for the 0%/15%/20% rates (they are indexed and the page only had 2025).
Re-read everything in the table in January to February 2027. The Idaho rate statute (63-3024) was not
read, so the 5.3% rests on the Commission's page only; if the 2026 Legislature changed the rate for
2026, the page does not say so and neither do we.

## 3. Things I could not source, so they are not on the page

- **Idaho conformity to the federal exclusion.** 63-3011B/C say Idaho taxable income starts from
  federal taxable income as modified by Idaho adjustments. I did not find a Tax Commission page saying
  in so many words that gain excluded under IRC 121 is also excluded in Idaho. The page states the two
  definitions and stops. Form CG's "taxable gain ... from federal Schedule D" is consistent with it.
- **Idaho withholding on a nonresident's real estate sale.** No Tax Commission page I read mentions
  one. The page is silent; it does not say there is none.
- **Credit for tax paid to another state** for a nonresident seller (it depends on the seller's home
  state). Not covered.
- **Net investment income tax** (Topic 409 points to Topic 559). Not read, not mentioned.
- **Exceptions to nonqualified use, surviving-spouse rule, military suspension of the 5-year period,
  installment sales, like-kind exchange disqualification.** All present in Topic 701 / Pub 523, none
  claimed. The page says exceptions exist.
- **Which costs are improvements versus repairs, and which selling expenses count.** Pub 523 lists them;
  not claimed, no examples given.
- **Holding-period exception for inherited property.** Topic 409 says an exception exists and points to
  Pub 544, which was not read. The page says only that an exception exists.
- **Depreciation recapture mechanics** (Form 4797, Pub 544). Only the Pub 523 sentence and the Topic 409
  25% maximum rate are claimed.
- **Estates and trusts that sell** (who reports the gain, Form 1041, Idaho Form 66). Not covered.
- **Idaho state treatment of canceled debt.** Still unsourced, as in the short-sale guide.

## 4. Smaller traps for the editor

- "Many people know this rule as a stepped-up basis" is the one sentence with no claim behind it. It is
  a label, kept because the brief asked for the term. The IRS passages quoted do not use the phrase.
  Delete the sentence if the reviewer wants zero unclaimed text.
- "The mortgage balance is not one of the terms in that formula" is an observation about the quoted
  Pub 523 formula (selling price, amount realized, adjusted basis). It is true of the text. Do not
  extend it into advice about refinancing or payoff.
- The 1099-S certification exception is about REPORTING, not tax (existing claim note). Prose says so.
- $2,500 is the Tax Commission's nonresident FILING threshold, not a tax-free amount.
- The 60% is a deduction of qualifying gain. No effective rate is computed anywhere, on purpose: any
  product of 5.3% and 40% would be an unsourced number and would be wrong for many taxpayers.
- FIRPTA "generally 15%": reduced rates and exceptions exist (existing claim note). Kept to one paragraph.
- The canceled-debt paragraph leans on `ss-irs-principal-residence-exclusion-ended-2025`, which is
  flagged as volatile in the registry. If that claim is revised, revise this paragraph too.
- Idaho Tax Commission pages carry `&#8239;` and `&#8209;` entities (narrow no-break space, non-breaking
  hyphen) that verify-quotes does not normalise. All quotes avoid those spans; keep that in mind if a
  quote is extended later.
- Form CG is a two-column PDF extracted with `pdftotext -layout`. The two quoted strings survive
  whitespace collapsing; longer passages from the instructions interleave with the right-hand column
  and will not verify.
- Word count is about 2,580, a little over the 2,500 guide length. The FIRPTA paragraph and the
  canceled-debt section are the natural cuts.
- Internal links used (4): /guides/idaho-property-taxes-when-you-sell,
  /guides/selling-an-inherited-house-in-idaho, /guides/how-a-property-sale-closes-in-idaho,
  /guides/short-sale-vs-deed-in-lieu-in-idaho. All exist in src/data/guides.ts.
- Final section uses only owner-confirmed facts. The sentence that a seller can set the closing date
  to suit a tax plan follows from "the seller chooses the closing date"; it promises no tax result.

## 5. Fetch log

- `https://tax.idaho.gov/taxes/income-tax/individual-income/capital-gains/` returned HTTP 404. The live
  page is `.../individual-income/popular-credits-and-deductions/capital-gains/` (found through the
  site's own sitemap and search).
- Fetched but not cited: the Tax Commission rate schedule page and the Form CG landing page (used only
  to find the 2025 PDF). Their cache files exist under data/idaho/raw/cache/.
- `extract-pdf-text.mjs` was run once; it re-extracts every cached PDF, so files under
  data/idaho/raw/extracted/ were regenerated along with the new `b34ffb8bb2c09615.txt`.

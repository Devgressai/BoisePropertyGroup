# property-tax: reviewer notes (2026-11-12)

Page: `idaho-property-taxes-when-you-sell`, 8 sections, about 2,160 words.
New: 29 `pt-` claims and 18 sources. Reused claims: `ln-property-tax-first-lien-perpetual`,
`ada-assessor-does-not-set-value`, `id-tax-deed-three-year-delinquency`,
`ada-treasurer-ex-officio-tax-collector`, `id-homestead-one-acre-limit`,
`ada-homeowners-exemption-deadline`, `ada-assessor-maintains-parcel-gis`.
Reused sources: `idcode-63-206`, `idcode-63-602g`, `idcode-63-701`,
`ada-assessor-homeowners-exemption`, `ada-assessor-real-manufactured`.
If merged, those reused sources' `claimsSupported` arrays need the new pt- ids added. I did not edit them.

## The $125,000 figure: why it was withheld, and what changed

- It was withheld because of red-team FINDING 1 (`research/idaho/ada-county/validation/FACTUAL-RED-TEAM.md`).
  The latest amendment to 63-602G, 2026 ch. 236, had no effective date shown, so
  `id-homeowners-tax-exemption-125k` carries `verificationFlag: EFFECTIVE_DATE_UNCONFIRMED`.
  `build-claims.mjs` holds flagged claims back from rendering.
- Resolved today:
  - 2026 ch. 236 is **H0843**. The bill page says signed 03/31/2026, "Effective: Retroactive to 01/01/2026".
  - SECTION 2 of the printed bill (cached PDF, extracted) says "retroactively to January 1, 2026".
  - The sponsor's statement says the only change was removing proration.
  - The 63-602G page re-fetched today is byte-identical to the 2026-09-09 cache, with no `[EFFECTIVE …]` alternate version.
  - The two other 2026 homestead bills (H0885, H0961) stayed in committee, per the 2026 legislation index.
  - The Ada Assessor independently gives 50% up to $125,000.
- **Action for the reviewer:** the page cites the new `pt-homestead-exemption-cap-in-force-2026`. It repeats the
  existing claim's quote on purpose, because the existing claim cannot render. The alternative is to clear the flag on
  `id-homeowners-tax-exemption-125k`, then swap the id in guide.json and drop the pt- duplicate. Pick one.
- I only checked that the printed bill matches the enrolled one through the bill history (no amendments recorded).
  I did not retrieve the session-law volume itself.

## Traps

1. **Proration.** H0843 removed the exemption's day-count proration (old 63-602G(5)(b)), retroactive to 1 Jan 2026.
   That rule is about the *exemption*. No statute I read sets how buyer and seller split the year's tax bill, and the
   page says that split is contractual. Watch for these:
   - The Treasurer FAQ table labels the installments "(January – June)" and "(July – December)". That is not a proration rule.
   - The Treasurer's tax-dates page says the missed-roll bill covers "the date of an ownership change to December 31st".
     That may describe pre-2026 practice. **Not used**, and a reviewer may want to ask the county about it.
   - The Ada homeowner's-exemption page still mentions a "pro-rated occupancy assessment" for new construction
     (63-317, a different statute). Not used.
2. **The lien date.** 63-205 sets the *assessment* date (12:01 a.m., Jan 1). It is not about liens.
   - 63-206(1) creates the real-property lien without giving it a date. The "attach as of the first day of January"
     wording is in (2), which covers personal and operating property.
   - The Jan 1 lien date for real property is therefore cited to the Ada Assessor (`pt-ada-lien-date-jan-1`).
   - The brief's "63-205 lien date, claim exists" premise was slightly off. No 63-205 claim existed, and the existing
     Jan-1 claim cites the Assessor page.
3. **County pages that conflict with statute.** In each case the page states only the statute.
   - **When a seller's old exemption comes off.** 63-602G(6)(a)(v) says it is "removed the following tax year". The Ada
     exemption page (cached in September) suggests it comes off in the *same* year if the owner qualifies elsewhere by
     the second Monday in July.
   - **Burden of proof at the board.** 63-502 says a preponderance of the evidence is enough. The Ada appeals page
     quotes "clear and convincing evidence", without attribution. It may come from the 63-511 stage, which I did not read.
   - **Subsequent-roll notice.** 63-308(7) says the third Monday in November. The Ada Assessor says the fourth Monday.
     The page states neither date.
4. **63-308 shows two versions.** The page shows a superseded "[EFFECTIVE UNTIL JANUARY 1, 2024]" text first. All
   quotes come from the current "[effective january 1, 2024]" version.
5. **63-903** was amended by 2026 ch. 20 (H0594), effective 07/01/2026. That is already in force, so
   `futureDatedAmendment: false`.
6. **Bill-page effective dates are entity-encoded** (`&#160;`), so the quote verifier cannot match them. The
   retroactivity claim quotes the bill PDF instead. The PDF has margin line numbers, so that quote is split into
   per-line fragments joined with `...`.

## Not sourced, so left out

- How taxes are split, or who pays, at closing. That is contractual. No statute or county rule was found.
- Whether a title company pays off the deferral lien or the current year's tax at closing.
- The late-charge and interest statutes (63-201, 63-1001). The 2% and 1%-a-month figures are attributed to the Ada
  Treasurer only.
- Circuit-breaker income limits (published every year by the State Tax Commission) and Ada's median-value threshold
  under 63-705(2). Neither is stated or computed.
- Tax cancellations for hardship (63-711), the Homeowner's Tax Relief credit (HB 292 of 2023, on the Ada page) and the
  new-construction occupancy exemption (63-317). All relevant, none needed for the main question.
- How the deferral's interest rate is set (63-3045). Not read.

## Top risks

1. **The duplicated cap claim versus the flagged registry claim.** A reviewer has to pick one route, or the figure
   either renders twice-sourced or not at all.
2. **Proration wording.** Any later edit that turns "the exemption is not prorated" into "taxes are not prorated
   between buyer and seller" would be false. The section deliberately says the split is a contract term.
3. **Ada pages that disagree with statute** (trap 3). If the county is right about same-year removal, the page's
   "following tax year" line is incomplete. It is quoted and attributed to the statute, and the reader is sent to the
   Assessor.

## Housekeeping

- Fetching cached about 25 new files under `data/idaho/raw/cache/` and extracted 2 PDFs under `data/idaho/raw/extracted/`.
- About 8 of those fetches (63-712 to 63-715, 63-717, 63-719 to 63-721) were read for context but are not cited.
- The extract script re-ran across all 42 cached PDFs and rewrote their extracted text files. A reviewer may want to
  confirm nothing else in `data/idaho/raw/extracted/` changed. This directory is not a git checkout, so I could not diff it.

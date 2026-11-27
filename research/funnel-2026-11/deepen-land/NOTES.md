# deepen-land: notes for the reviewer

Page: `sell-land-idaho` in `src/data/topic-pages.ts`. Five sections are in `additions.json`, about 890 words of body text. I read the sell page, `/guides/selling-land-or-acreage-in-ada-county` and `/guides/selling-a-house-with-a-well-or-septic-in-ada-county` first. The 42-248 deadline and fees, the 1978 claims history and the "may pass with the land" point are already on the well/septic guide, so the new water section links to that guide instead of repeating them.

## New sources (10) and claims (18, prefix ld2-)
- IDWR Form 42-248/42-1409(6), Rev. 6/22 (PDF, extracted to `data/idaho/raw/extracted/414e7032ede23c7b.txt`).
- Idaho Code 43-706, 63-604, 63-205C, 50-1301, 50-1302, 50-1308, 50-1316. All are single-version pages with no future-dated version. 43-706 was amended in 2025.
- The Ada Assessor agricultural valuation page and the Ada ag eligibility form for parcels over 5 acres (PDF, extracted to `9c012992d502598f.txt`). I also cached and extracted the 5-acres-or-less form (`372a1a818377a1bb`) but did not cite it.
- Reused existing sources, whose `claimsSupported` needs updating when this is merged:
  - `ada-assessor-property-records`: add `ld2-ada-assessor-split-needs-recorded-deed`. The quote was cached from `https://adacounty.id.gov/assessor/?p=61`, whose canonical URL is that source's URL. Consider adding it as `retrievalUrl`.
  - `ada-zoning-ord-1002-res`: add `ld2-ada-subdivision-two-lots` and `ld2-ada-one-time-division`.
- `ld2-plat-treasurer-certification` (50-1308) is sourced and verified but was cut from the prose to save words. It is free to use later.

## Traps
- **63-602K no longer exists under that number.** It was redesignated 63-205C in 2020, and the old URL returns 404. Older material, and 63-604(6) itself, still cites 63-602K.
- **Rollback or recapture tax.** I found none in 63-604 or 63-205C, but I did not research whether Idaho has one anywhere else. The prose says nothing on the point. Do not add "Idaho has no rollback tax" without a primary source.
- **43-706 covers irrigation districts only.** Ditch companies, lateral associations and water users' associations are outside Title 43 chapter 7. The prose says so. The last sentence of 43-706(4) ("the purchaser at such sale…") sits inside the lien-removal subsection and may refer only to a sale for payment of the assessments. The prose quotes it attributed. An attorney should confirm it before anyone writes "a buyer inherits unpaid assessments".
- **Ada's subdivision definition reaches two or more lots and applies to unincorporated land only.** The state default of five lots (50-1301) expressly yields to local definitions. Never carry the Ada definition or 8-6-21 into Boise, Meridian, Eagle, Kuna, Star or Garden City. Star's one-time division is a separate city rule, already in the land guide. The exact day Ordinance 1002 took effect is still unconfirmed (see `ada-zoning-ordinance-updated-november-2025`).
- **The IDWR "proportionate split" rule** is an agency processing assumption when a deed is silent. It does not decide ownership: the same form says IDWR's record update "is not a determination of water right ownership". Deed language on water rights is attorney territory.
- **The homesite market-value claim (`ld2-ag-homesite-market-value`) is MEDIUM.** It is IDAPA 35.01.03.645 text as reproduced on an Ada form, not fetched from adminrules.idaho.gov. Do not conflate it with the one-acre homeowner's-exemption homestead (`id-homestead-one-acre-limit`) already on the page.
- **The $15.00 recording fee** is a FAST-CHANGING county fee. Per the existing claim's note, it is the fee for recording a deed. Do not present it as closing costs or say who pays it.
- **The vacant-land disclosure section** gives only the statutory definition and the "other duties preserved" clause. It does not say vacant land is exempt, because that would be applying the law to the reader's facts.

## Could not source, left out
- Ada's April 15 date for first-time agricultural applications on parcels over 5 acres, beyond the form's own presumption sentence.
- Whether an agricultural valuation transfers automatically to a new owner. No primary source says either way. The prose says only that qualification is decided each year on use.
- IDWR transfer-application fees and processing times.
- City-by-city lot-split procedures (Boise, Meridian, Eagle, Kuna, Garden City). These were not researched in this wave, so the prose points to "the city's own code".
- Any Idaho real estate transfer tax statement. This was not researched and is not mentioned.

## For an attorney to read
The 43-706(4) "purchaser at such sale" sentence. Whether a silent deed carries an appurtenant water right (IDWR's assumption versus Idaho case law). The Ada 8-6-21 eligibility dates as applied to old parcels.

# NOTES: selling-a-fire-damaged-house-in-ada-county (prefix fd-)

Dates: accessed / verified / published 2026-11-26. 17 new claims, 7 new sources, 16 reused registry claims.
Word count about 1,990. Title 42 characters, description 148. Four internal links:
/guides/idaho-seller-disclosure-when-selling-as-is, /guides/selling-a-house-with-unpermitted-work-in-ada-county,
/sell-house-as-is-idaho, /contact.

Reused claims: id-disclosure-required-1-to-4-units, id-disclosure-actual-knowledge-not-warranty,
id-disclosure-good-faith-honesty-in-fact, id-disclosure-failure-actual-damages, id-disclosure-amend-before-closing,
id-disclosure-rescission-three-days, id-disclosure-sixteen-exemptions, cv-form-q8-additions-without-permit,
cv-form-q9-other-problems-legal, cv-form-seller-certification-and-purpose, cv-ada-permit-required-tied-to-property,
boise-impact-fee-replacement-exemption, boise-impact-fees-by-development-type, boise-demolition-waste-plan-and-reuse-window,
boise-wui-overlay-district, star-impact-fee-replacement-exemption, star-building-permit-triggers,
kuna-permit-triggers-include-fences.

## Existing-source claimsSupported updates needed at merge
- idcode-55-2508: add fd-form-q5-specify-problems, fd-form-q7-hazardous-materials-pests,
  fd-form-no-greater-knowledge-inaccessible-areas
- boise-impact-fees: add fd-boise-impact-fee-fire-rebuild-exemption

## Why a new Boise fire-rebuild claim
The registry claim boise-impact-fee-replacement-exemption describes the fire-rebuild exemption in its `claim`
text but its quotedLanguage covers only the one-for-one replacement item. fd-boise-impact-fee-fire-rebuild-exemption
quotes the fire item verbatim from the same cached Boise page.

## Fetching
- All HTML via fetch-source.mjs. Two DOI PDFs cached by fetch-source.mjs and extracted with extract-pdf-text.mjs
  (data/idaho/raw/extracted/17459e4303f4f84c.txt = 2012 alert, aa0d7612ce561760.txt = 2023 release PDF).
  extract-pdf-text.mjs re-extracts every cached PDF (51), so it rewrote the other extracted .txt files too; output
  should be identical, but a reviewer may see them in a diff.
- Idaho Code 41-1302 was cached (41-1329 operates "pursuant to" it) but not cited.
- The DOI claims page encodes its dash as &#8211;, which verify-quotes' toText does not decode, so the
  mitigation quote starts after the dash ("to record the initial damages...").

## What I could NOT source (left out)
- **What happens to an insurance claim, the depreciation holdback, or lender-held insurance money when the house
  is sold.** No DOI, CFPB or statute page read addresses it. The page says so and tells the reader to ask the
  insurer, the servicer and an attorney. This is the biggest gap for a seller; nothing is guessed.
- **Assignment of insurance proceeds to a buyer.** Not researched beyond the above; nothing said.
- **Any statutory deadline for an insurer to pay or decide a claim.** 41-1329 uses "reasonably promptly" and
  "reasonable time" only. Idaho's administrative rules on claims (IDAPA 18 unfair claims rules) were NOT read; if
  they set day counts, a later pass could add them. The page says 41-1329 sets no number of days, which is true of
  that section only.
- **Fire-rebuild impact-fee exemptions in Meridian, Eagle, Kuna, Garden City, unincorporated Ada County.** Not found;
  page says so.
- **Demolition permit rules for Meridian, Eagle, Garden City.** Not sourced; page tells reader to call.
- **Property-tax relief for a destroyed or damaged house** (assessment change after a loss). Not researched; omitted.
- **Mold, soot, asbestos as "hazardous materials"** under question 7. Form does not define the term; page does not.
- **The DOI Post-Disaster Claims Guide PDF** itself (2022 upload) was not read; only the 2023 release about it.

## Traps
1. **41-1839 is a fee rule, not a payment deadline.** The prose says so explicitly. Never let an editor turn it into
   "insurers must pay within 30 days".
2. **41-1329 needs "intentionally, or with such frequency as to indicate a general business practice".** No private
   right of action is claimed.
3. **The form has no fire question.** The page names which listed questions a loss can touch and leaves the choice
   to the seller and an attorney.
4. **Dated sources.** DOI 2012 alert and CFPB 2018 blog are MEDIUM confidence. The DOI phone 208-334-4319 comes from
   a June 2023 release and is dated in the prose; the claims page lists (208) 334-4250 instead.
5. **CFPB disaster page** is written for disasters; the page uses only "you still have to pay your mortgage" and
   the contact-your-servicer steps, and does not suggest FEMA aid for a single house fire.
6. **Boise WUI overlay** applies to "new structures and additions"; whether a rebuild counts is left to the city.
7. **Two-year impact-fee window and a sale.** Neither city says whether a buyer who rebuilds keeps the exemption;
   the page says so.

## For the reviewer / owner / attorney
- Final section says we buy "in any condition, including after a fire or water loss". Owner should confirm.
- Final section says a sale to us is not a 55-2505 exemption (rests on id-disclosure-sixteen-exemptions), same
  wording as the unpermitted-work guide. Attorney should confirm.
- "Repairing and listing may net more" is a hedged general statement with no claim behind it; cut if the owner
  prefers.
- An attorney should read the 41-1329 / 41-1839 section.

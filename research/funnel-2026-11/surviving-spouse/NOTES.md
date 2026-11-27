# NOTES: selling-a-house-after-a-spouse-dies-in-idaho (prefix sv-)

Dates: accessed / verified / published 2026-11-26. 14 new claims, 7 new sources, 14 reused registry claims.
verify-quotes (with this claims.json as candidate): all strings fully verified, 0 partial, 0 not found.
Word count about 1,960. Title 35 characters, description 150.

## Reused claims (cited by id, not duplicated)
dv-separate-property-defined, dv-community-property-default, dv-both-spouses-join-community-real-estate,
pb-letters-recordable, sp-rec-ada-notary-and-deed-category, cl-ada-deed-recording-fee,
pb-surviving-spouse-summary, pb-small-estate-affidavit-conditions, pb-ada-small-estate-affidavit-no-real-estate,
im-garn-exempt-transfers-on-death, pt-homestead-death-carryover, pt-ada-new-owner-must-apply,
cg-irs-exclusion-250k-500k, cg-irs-community-property-basis.

## Reused sources (already in the registry, so NOT in sources.json)
The merge needs to append these new claim ids to the existing sources' claimsSupported:
- idcode-15-3-1205: sv-summary-admin-petition-will-notice, sv-summary-admin-no-personal-appearance
- irs-pub-523: sv-irs-pub523-surviving-spouse-500k-conditions, sv-irs-pub523-surviving-spouse-tacking,
  sv-irs-pub523-jointly-owned-basis
- ada-property-records: sv-ada-recorder-lists-affidavits-in-lieu-of-probate
- ada-recorder-faq: sv-ada-recorder-death-records-vital-statistics (the registry has two ids for the same
  FAQ URL, ada-recorder-faq and ada-recorder-faq-res; I used ada-recorder-faq)

New sources: idcode-15-3-101, idcode-15-2-102, idcode-15-6-401, idcode-15-6-402, idcode-55-104,
idcode-55-508, idcode-15-1-401. Each section page shows one version; no future-dated text. The only 2026
PROBATE bill noted in the registry (S1240, effective 01/01/2027) touches chapter 5 and 15-1-201, not these.
The living-trust agent (lt-) is working in parallel and may also add some Title 15 or 55 sources; the
merge should dedupe by URL.

## Fetching
All pages fetched with scripts/research/fetch-source.mjs; no 403s, no Chrome captures. Extra cache files
written while checking and not cited: Title 15 ch. 3 and ch. 6 index pages (JS-rendered, empty),
15-2-401, 15-6-403, 15-6-201, 55-103, courtselfhelp.idaho.gov home, and a lowercase-URL copy of
15-1-305A (the registry source uses the uppercase `sect15-1-305A/` URL, already cached).

## What I could NOT source (left out)
- **How joint-tenancy title is cleared after a death.** No Idaho statute read (55-104, 55-508) states a
  survivorship rule or a death affidavit. No Ada County page describes an "affidavit of death". The page
  says so and sends the reader to the title company. 15-1-305A lists "an affidavit of a successor in
  interest" as recordable, but does not describe it; the page quotes only the list.
- **What the Ada County "Affidavits in Lieu of Probate" are.** The Recorder lists the type only. Claim is
  MEDIUM. The list items are under verify-quotes' 25-character threshold, so I checked them by eye in the
  cached page (data/idaho/raw/cache/e324c6a7dd5591ae.html, the "blocked from viewing" list).
- **Idaho Court self-help forms for 15-3-1205.** courtselfhelp.idaho.gov returned a page with no
  probate text. Nothing said about forms or fees. The Ada County courts page lists a real named estate's
  summary administration hearing; deliberately not used.
- **How long summary administration takes, court filing fees.** Not sourced, not stated. The 14-day and
  10-day figures are notice minimums and the page says so.
- **Homestead allowance / exempt property (15-2-402 ff.).** 15-3-101 mentions them; not read, not stated.
- **IRS Topic 701** has no surviving-spouse language; only Pub 523 is used for that.

## Traps
1. **15-3-101: the community half goes to the spouse only absent a will** ("in the absence of
   testamentary disposition") and is subject to debts and administration. Prose keeps both qualifiers.
2. **15-2-102 is intestacy only.** Separate property can be split one-half with issue or a parent.
3. **15-6-401 requires an express declaration** in the deed; "husband and wife" is the statute's wording.
4. **15-6-402's affidavit is made by a living spouse** to end survivorship. It is not a death affidavit.
5. **15-3-1205's debt assumption** is stated every time the procedure is. No dollar limit exists; none given.
6. **Pub 523 is the 2025 edition** ("For use in preparing 2025 Returns", reviewed 30-Apr-2026). All four
   $500,000 conditions are stated together; the 2-year window from the death is a tax-timing fact the
   final section flags without advising.
7. **Two basis rules** (joint ownership: half new basis; community property: generally whole). The page
   gives both and says which applies depends on ownership, for a tax professional.
8. **1701j-3(d)** covers the transfer only; the page says it says nothing about missed payments.
9. **Homeowner's exemption carryover** is tied to the home remaining in the estate; the page says the
   statute does not carry it to a buyer.
10. **$15.00 recording fee** is FAST-CHANGING and is presented only as the county's recording fee.

## For the reviewer / owner / attorney
- Section "Can I sign the sale paperwork by myself?" is the closest to advice. It quotes 32-912 (a rule
  for living spouses) and 15-1-305A (permissive recording) and does not say what a surviving spouse needs.
  An attorney should read it.
- Final section adds "Because you choose the date, the sale can wait until the title work and any court
  step are done", which rests only on the owner-confirmed "seller chooses the closing date". Owner should
  confirm they will wait on a pending 15-3-1205 or probate case.
- Internal links (4): /guides/selling-an-inherited-house-in-idaho, /guides/selling-a-house-in-probate-in-idaho,
  /guides/inheriting-a-house-with-a-mortgage-in-idaho, /contact.

# NOTES: selling-a-house-with-title-problems-in-idaho (prefix tp-)

Dates: accessed / verified 2026-11-26. 14 new claims, 11 new sources, 21 reused registry claims.
verify-quotes: candidate file fully verified (26 strings = 14 quotes + 12 history notes), 0 partial, 0 not found.
Word count about 1,790. Title 42 characters, description 156. 9 sections.

Reused claims: cl-recorded-conveyance-constructive-notice, cl-unrecorded-valid-between-parties,
cl-bona-fide-purchaser-first-recorded, cv-form-q6-zoning-violations-title, cl-title-search-before-policy,
vb-doi-find-title-agent, sk-reconveyance-on-performance, sk-title-agent-may-reconvey,
sk-title-agent-reconveyance-30-and-60-days, ln-judgment-lien-ten-years, ln-judgment-renewal-order,
cl-record-in-county-where-situated, ada-recorder-maintains-ownership-documents, cl-ada-deeds-blocked-online,
ln-mechanics-lien-six-month-duration, ln-mechanics-lien-ninety-day-filing, ln-mechanics-lien-bond-release,
kuna-property-lines-survey-guidance, ada-assessor-maintains-parcel-gis, ada-engineering-scope-unincorporated,
sq-adverse-possession-oral-20-years-taxes.

Reused sources (already in the registry, NOT in sources.json). The merge must append to claimsSupported:
- idcode-41-2708: tp-title-policy-must-show-recorded-liens
- iddoi-title-insurance: tp-doi-title-defect-examples, tp-doi-title-insurance-protects-buyer-pre-purchase
  (both DOI claims carry amendmentHistory null; agency page, not statute)

New sources (all fetch-source.mjs, no 403s, each section page shows one version, no future-dated
amendment): idcode-6-401, -6-402, -6-411, -6-412, -6-413, idcode-5-214a, idcode-45-1515,
idcode-5-505, idcode-45-1204, idcode-45-1206, idcode-45-915. updatedDate is null for 6-402 and 5-505
(no amendment after codification). Also cached, not cited: chapter 6-4 table of contents, 6-403,
6-405, 6-409, 6-417, 45-1205, 41-2701, 41-2702, 41-2703.

## What I could NOT source (left out)

- **Title commitment.** No Idaho statute read (41-2701 to 41-2708, 41-2714) and no DOI page uses the term
  or describes a commitment / preliminary report. Per the brief, the page does not describe one. If
  wanted, IDAPA 18 title rules are the next place to look (not read).
- **"Wild deed".** No primary source uses the phrase. The page says "gap in the chain of title" and
  relies on the recording statutes and the DOI defect list. No definition of the trade term is given.
- **How to release a lis pendens.** 5-505 sets no expiry or release procedure; court-rule / case-law
  routes were not researched. The page says so and sends the reader to an attorney.
- **How long a quiet title case takes or costs; who must be named; service by publication.** Not in
  6-401..6-413. Nothing said.
- **Whether 6-411 (time-barred "mortgage") reaches deeds of trust.** The section says mortgage only.
  45-1515 ties trust-deed foreclosure time limits to the mortgage rule, and the page states both
  rules separately without joining them into a conclusion.
- **Corrective deeds / scrivener's affidavits / boundary line agreements.** No Idaho statute or
  agency page located. Not named on the page (an earlier draft's "corrective deed, probate filing
  or quiet title action" was removed); the page names only a quiet title action.
- **Boundary adjustments inside cities.** Only the county's unincorporated-area scope is sourced.
  The Kuna survey advice is attributed to the City of Kuna and not extended to other cities.

## Traps

1. **45-915 is a MORTGAGE statute.** 45-1514 points to "liability as provided by law for refusing to
   execute a discharge or satisfaction of a mortgage". The page states 45-915's $100 forfeiture for
   mortgages and then says whether it reaches a deed of trust is a question for an attorney. Do not
   tighten that into "a lender who fails to reconvey owes you $100".
2. **30/60 days are the title-company backstop only** (45-1203). Never write that reconveyance takes
   90 days. An objection (45-1204) ends the backstop.
3. **Five years runs from MATURITY** (5-214A), not from the last payment; "including extensions" in
   45-1515. The page never says any loan is barred.
4. **Judgment lien ten years** is stated with the renewal rule, per the registry note.
5. **Mechanic's lien six months** is stated with the payment/extension rule and the "still appears
   in the index" caveat. The intro shortens it to "unless a lawsuit to enforce it is started"; a
   reviewer may want the payment/extension clause there too.
6. **41-2708(2)** is about what a policy must show. It does not mean the title company will refuse
   to close or find everything; the page says the search is a determination of insurability.
7. **DOI page frames title insurance around the BUYER.** The page never says it protects the seller.
8. **Adverse possession**: 5-210's twenty years and tax payment stated; no application to a fence.
9. Kuna is a city source; it is attributed to Kuna, not presented as an Ada County rule.

## For the reviewer / owner / attorney

- Final section uses only the owner-confirmed facts. It does NOT say we buy with an unresolved title
  defect, that we pay to clear title, or that the title company will fix it. Owner should confirm
  any stronger wording.
- An attorney should read "What if a paid-off loan still shows on the record?" (45-915 paragraph) and
  "What is a quiet title action?" (time-limit paragraph).
- Internal links (4): /guides/idaho-seller-disclosure-when-selling-as-is,
  /guides/selling-a-house-in-probate-in-idaho, /guides/liens-and-judgments-when-selling-in-idaho, /contact.

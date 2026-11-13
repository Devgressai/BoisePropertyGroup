# NOTES: idaho-foreclosure-timeline (prefix ft-)

Written 2026-11-13. 31 new claims, 10 new sources. Reused sources: `idcode-45-1506`, `ada-property-records`.
Reused claims: id-trustee-sale-120-day-notice, id-trustee-sale-publication, id-trustee-sale-service-attempts,
vb-cfpa-five-business-day-rescission, cl-record-in-county-where-situated, ada-recorder-maintains-ownership-documents,
id-tax-deed-redemption-fourteen-months.

## What I read
Idaho Code 45-1502, 45-1503, 45-1505, 45-1506, 45-1506A, 45-1506B, 45-1506C, 45-1507, 45-1508: each section page
fetched today, cached, read in full. None displays a future-dated version. `amendmentHistory` strings were extracted
from the cached pages by script, not typed.
12 CFR 1024.41 and 1024.30: fetched today through the eCFR renderer API and cached.
Ada County Recorder page: see the caveat below.

## Things a reviewer should double-check

1. **The 115-day cure sentence that is my own deduction.** Step 5 ends: "Because the notice of sale follows the notice
   of default and must be given at least 120 days before the sale, the statutory cure period ends before the sale date."
   No statute says this in one sentence. It follows from 45-1506(2) ("Subsequent to recording notice of default ... at
   least 120 days before") and 45-1506(12) (115 days from recording). It holds for an un-stayed, un-rescheduled sale.
   45-1506B shows the legislature treating 115 days as the floor between notice of default and sale after a stay. If
   the editor wants zero inference on the page, delete that one sentence; nothing else depends on it.

2. **Federal "first notice or filing" is NOT tied to the Idaho notice of default on the page, on purpose.** The CFPB
   official interpretation (Supplement I to Part 1024, comment 41(f)-1) defines which document counts in a nonjudicial
   state. I did not cache it, so the page states the federal rule and the Idaho rule side by side and never says "the
   notice of default cannot be recorded until day 121". The section heading says "before the first notice", which is
   the regulation's wording. If someone wants the explicit link, cache Supplement I first.
   Also unchecked: future-dated CFR amendments (eCFR "current" only; displayed history ends 90 FR 20792, May 16, 2025),
   and the small-servicer nuance (1024.30(b) exempts small servicers from most of 1024.41, but 1024.41(j) keeps them
   under (f)(1)). The page mentions only the principal-residence limit. The human-readable eCFR `url` values in
   sources.json were built from the path convention (title-12/chapter-X/part-1024/subpart-C) and not fetched; only the
   `retrievalUrl` was.

3. **Ada County Recorder: cached copy, and it does not mention notices of default.** The fetch script served the
   existing cache of adacounty.id.gov/clerk/property-records/ (fetched 2026-09-09), so I did not re-read the live page
   today. The page says nothing about notices of default, notices of sale or foreclosure. "Notices of default for an
   Ada County property are recorded with the Ada County Recorder" rests on 45-1505(3) plus the existing 55-808 claim,
   not on the county page. ft-ada-recorder-online-search is MEDIUM for that reason. The page does not promise that a
   notice of default can be viewed online, and I did not test the search tool.

## Traps in the statutes (also in each claim's `notes`)

- Two different 120s. Federal: MORE THAN 120 days delinquent before the first notice or filing. Idaho: notice of sale
  at least 120 days before the sale. The page never adds them and never states a total length. No total is sourced.
- Cure = 115 days from RECORDING of the notice of default. Not from the notice of sale, not "five days before sale".
- Cure amount excludes accelerated principal but includes costs, trustee's fee and attorney's fees.
- 45-1505(3): certified mail is required for persons who recorded a request for notice. The mailing to "any individual
  who owns an interest" names no mail class. The page keeps those separate.
- 45-1505 warning sheet says "five (5) days"; 45-1603 says five business days. Page states both and which governs.
- 45-1506C applies only if the homeowner's PROPERTY TAX exemption was granted for the year the notice of default is
  recorded. Not the creditor homestead exemption. The 30-day deadline is receipt by the beneficiary, counted from the
  date on the notice. The bar on the sale ends when the beneficiary responds, including with a denial.
- 45-1506(8): postponement is at the beneficiary's request; 30 days caps each postponement and the statute does not
  cap the number of postponements. The page says "may be postponed again", which is the statute's wording.
- 45-1506A: after a stay the re-notice periods are shorter (30 days mail, three publications, last one 10 days out).
  The page describes this without suggesting bankruptcy as a tactic. The Bankruptcy Code was not read.
- Existing claim id-trustee-sale-service-attempts abbreviates 45-1506(5); the page adds the posting rule from my claim.

## Could NOT source / deliberately left out

- **Judicial foreclosure.** Only 45-1503(1) (beneficiary's option) and 45-1502(5) (what property a trust deed can
  cover) are used. I did not read Title 6 ch. 1 or the redemption statutes in Title 11, so the page says it does not
  cover the court route and gives no judicial timeline. I also did not source the common statement that most Idaho
  home loans use deeds of trust, so the page does not say it (the existing guide
  idaho-foreclosure-vs-property-tax-delinquency does say it, without a claim).
- **Any total timeline in days or months.** Not in any source.
- **45-1511 (request for notice), 45-1512 (deficiency), 45-1514 (reconveyance), 45-1504, 45-1509, 45-1510.** Not read.
- **Trustee's deed recording.** 45-1506(9) says the deed is executed and delivered; no deadline for recording it is in
  the sections read, so the page says nothing on when it is recorded.
- **Eviction procedure and tenant protections after the sale.** Left to the after-sale guide. The page states only
  the tenth-day entitlement and the tenant-at-sufferance wording. 45-1506(15) (personal property, 90 days) left out.
- **What a HUD housing counselor is.** Sourced only from the 45-1506C statutory notice ("certified through" HUD, free).
  HUD's site was not cached. The page says "HUD-certified", which is the statute's word, not "HUD-approved".
- **12 CFR 1024.41(g)** (complete application more than 37 days before a sale). Read, not used; belongs to the
  avoid-foreclosure guide.

## Housekeeping

- Two claims are in claims.json but cited by no section, cut to hold the word count: ft-federal-application-before-referral
  (1024.41(f)(2)) and ft-loan-mod-meeting-seven-business-days (45-1506C(4)). Both verify. Use or drop at merge.
- Overlap with sibling pages: cure (avoid-foreclosure), possession, proceeds and finality (after-foreclosure-sale).
  This page states each in one short paragraph as a step. My claims on those subsections carry the ft- prefix and may
  duplicate af-/as- claims; dedupe at merge.
- Step numbering: Steps 3, 4 and 5 overlap in time (the modification window and the 115-day cure period both start
  at the notice of default, and the notice of sale can go out during them). The numbering is reading order.
- Word count is about 2,540, slightly over the 2,500 guide figure. The cheapest cuts are the 45-1502(5) paragraph and
  the 45-1506B paragraph.
- Section 1 says the grantor "in a home loan is ordinarily the borrower". That is a plain-language gloss; 45-1502(3)
  allows the obligation to be someone else's.
- Final section: "the open market may bring a higher price than a direct buyer pays" is a business-honesty statement
  with no claim behind it. It contains no number. Remove it if the editor wants every sentence claimed.
- Links used: /guides/idaho-foreclosure-vs-property-tax-delinquency, /how-it-works, /sell-house-before-foreclosure-idaho.
  No links to the other new cluster slugs.

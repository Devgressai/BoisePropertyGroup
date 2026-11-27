# NOTES: selling-a-house-in-a-flood-zone-in-ada-county (prefix fz-)

Dates: accessed / verified / published 2026-11-26. 23 new claims, 10 new sources, 15 reused registry claims.
verify-quotes: all strings fully verified, 0 partial, 0 not found.

Reused claims: ada-fema-firm-adopted-2020, ada-floodplain-development-permit, ada-engineering-scope-unincorporated,
boise-nfip-flood-sources, eagle-flood-dry-creek-and-boise-river, meridian-flood-four-creeks,
gardencity-floodplain-50-percent-improvement-rule, star-flood-substantial-improvement-and-freeboard,
star-flood-zone-building-permit-question, cv-form-q9-other-problems-legal, id-disclosure-required-1-to-4-units,
id-disclosure-sixteen-exemptions, id-disclosure-actual-knowledge-not-warranty, id-disclosure-other-duties-preserved,
id-disclosure-amend-before-closing.

Reused sources (in the registry, so NOT in sources.json). The merge must append these claim ids to claimsSupported:
- idcode-55-2508: fz-form-q5-basement-water-drainage
- ada-hazardous-overlays: fz-ada-lookup-msc-or-county-and-undetermined-areas, fz-ada-lowest-floor-one-foot-above-bfe,
  fz-ada-elevation-certificate-engineer-or-surveyor
- boise-floodplain: fz-boise-fema-issued-new-firm-2019, fz-boise-pds-flood-depth-and-elevation-certificate,
  fz-boise-lenders-generally-require-owners-outright-not
- meridian-floodplain-page: fz-meridian-check-nfhl-and-msc-for-lomr
- gardencity-floodplain-development: fz-gardencity-fema-requires-city-review-of-map-changes

## How sources were fetched

- legislature.idaho.gov, govinfo.gov, floodsmart.gov, agents.floodsmart.gov, cityofeagle.org PDFs: fetch-source.mjs.
  The NFIP real-estate brochure PDF was extracted with extract-pdf-text.mjs (writes every cached PDF; I ran it
  twice, it regenerates deterministically).
- codelibrary.amlegal.com (Eagle 10-1-5, 10-1-6, 10-1-8-6, Eagle Title 10 index, Boise 9-1B-43/44): headless Chrome
  --dump-dom, written to the fetch-source cache path with meta.json `fetchedVia: chrome-headless-dump-dom`, as
  code-violations/NOTES.md describes. Helper script lives in my scratchpad, not the repo.
- Re-checked live with curl on 2026-11-26 (without overwriting the September caches): Ada County still says
  "In June, 2020"; Boise still shows the 2003 sentence; Garden City still shows the 50% sentence.
- Three junk captures (Ada County Code amlegal nodes 0-0-0-3315, 0-0-0-4372, 0-0-0-4425 redirect to the code
  overview) were moved to the Trash. Uncited extra captures: Eagle Title 10 index (0-0-0-5287), Eagle Q&A and
  Residential Requirements PDFs.

## What I could NOT source (left out of the page)

- **Boise's substantial-improvement threshold.** It is in the Boise zoning/Development Code flood hazard
  regulations, which sit in a separate "Zoning Code" version on American Legal that I could not reach by URL.
  The page says only that Boise's building code defers to those regulations and tells the reader to ask.
- **Ada County (unincorporated) threshold.** Ada County Code 8-3F not reachable (stale node links). The page uses
  only the county's floodplain web page (one foot above BFE "generally", floodway engineer rule).
- **Meridian and Kuna thresholds.** Not located. Kuna has no floodplain page found; a redacted permit form PDF
  surfaced in search and was not used.
- **A single "current FIRM effective date" for every parcel.** Not stated. The page gives Ada County's "June 2020"
  adoption, Eagle's FIS "dated June 19, 2020", and Boise's "issued December 19, 2019", each attributed.
- **The 30-day NFIP waiting period.** It appears in the brochure, but the pdftotext extract interleaves that sentence
  with another column, so it cannot be quoted cleanly. Not stated in prose. Only the "no waiting period" exception is.
- **How a policy transfer is processed, its cost, Risk Rating 2.0 discounts carrying over.** Not sourced.
- **42 U.S.C. 5154a** (seller notice of a flood-insurance purchase requirement after disaster aid) and the
  implementing regulations (12 CFR 22.x, 339.x) were not read. The page does not say a seller must notify anyone.
- **Insurance cost, CRS discounts.** Boise's CRS class 6 / 20% and Meridian's class 8 are on the pages but left out
  (fast-changing, and not needed).
- **Elevation-certificate presumption of violation (Eagle 10-1-5 "VIOLATION").** Read, not claimed; easy to over-read.

## Traps

1. **Boise's floodplain page contradicts itself** (current FIRM "effective February 19, 2003" vs FEMA "issued new
   FIRMs on December 19, 2019"). Never cite the 2003 date. fz-boise-fema-issued-new-firm-2019 is MEDIUM.
2. **Eagle is 40 percent, Garden City and Star are 50 percent.** Never merge or generalize ("the 50% rule").
   The scope line in WAVE-6 says "50% rule"; that holds only where sourced.
3. **4104a puts the notice duty on the LENDER**, which may rely on the seller's notice. Not a seller duty.
4. **The disclosure form has no flood question.** The page says so and immediately points to Q5 (basement water,
   drainage), Q9 and 55-2521 (other duties preserved). It does not say flooding need not be disclosed.
5. **"Recommended" vs "required"** for X zones (FloodSmart). Lender may still require.
6. **Owners outright** need not buy flood insurance (Boise's wording); the page attributes it to Boise.
7. Eagle code pages carry American Legal's "may not reflect the most current legislation" disclaimer; all
   amlegal-based claims are MEDIUM.

## For the reviewer / owner / attorney

- Final section says a sale to us "does not depend on a buyer's lender or on the flood insurance a lender would
  require". That follows from "we buy with our own capital"; owner should confirm the company buys in flood zones.
- Final section repeats "a sale to us is not one of the disclosure exemptions in 55-2505" (as in code-violations).
- Links used (4): /guides/idaho-seller-disclosure-when-selling-as-is, /how-it-works, /contact, /sell-house-as-is-idaho.
- Word count about 1,950. Title 31 characters, description 159.

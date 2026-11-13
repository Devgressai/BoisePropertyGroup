# NOTES: selling-a-house-with-unpermitted-work-in-ada-county (prefix cv-)

Dates: accessed / verified 2026-11-13. 32 new claims, 23 new sources, 13 reused registry claims.
verify-quotes: all strings fully verified, 0 partial, 0 not found.

Reused claims: id-disclosure-required-1-to-4-units, id-disclosure-actual-knowledge-not-warranty,
id-disclosure-no-liability-outside-personal-knowledge, id-disclosure-good-faith-honesty-in-fact,
id-disclosure-amend-before-closing, id-disclosure-failure-actual-damages, id-disclosure-sixteen-exemptions,
id-disclosure-other-duties-preserved, star-building-permit-triggers, star-certificate-of-occupancy-city-vs-zip,
kuna-permit-triggers-include-fences, ada-building-division-scope, ada-code-enforcement-unincorporated-only.

Reused sources (already in the registry, so NOT in sources.json): idcode-55-2508 (4 new claims),
ada-sheriff-code-enforcement (1 new claim), star-faq (1 new claim). The merge needs to append these
new claim ids to those sources' claimsSupported:
- idcode-55-2508: cv-form-q8-additions-without-permit, cv-form-q6-zoning-violations-title,
  cv-form-q9-other-problems-legal, cv-form-seller-certification-and-purpose
- ada-sheriff-code-enforcement: cv-ada-code-enforcement-notice-and-cure
- star-faq: cv-star-records-two-years-and-boundary-lookup

## How sources were fetched

- Idaho Code, cityofboise.org, cityofeagle.org, kunacity.id.gov, staridaho.org, gardencityidaho.org,
  adacounty.id.gov: `scripts/research/fetch-source.mjs`, as the brief says.
- meridiancity.org and codelibrary.amlegal.com return HTTP 403 to fetch-source.mjs. The registry already
  records earlier captures of both hosts "through Chrome", but no script for that is in the repo. I
  captured the rendered DOM with local headless Chrome (`--dump-dom`, normal desktop user agent) and
  wrote it to the same cache path fetch-source.mjs would use (sha1 of the URL), with a meta.json that
  says `fetchedVia: chrome-headless-dump-dom`. Affected sources: meridian-building-services,
  meridian-code-enforcement, ada-code-7-2-building-codes, ada-code-7-2-5, ada-code-7-2-12,
  boise-code-9-1b-14, boise-code-9-1b-21, boise-code-9-1b-29, eagle-code-7-1a-4. A reviewer who
  re-runs fetch-source.mjs on these URLs with `force` will get a 403, not a different page.
- Extra cache files were written while navigating (city home pages, code tables of contents, Meridian
  police pages, Boise Title 9 overview, Idaho Code 39-4116). They are not cited. Three junk captures
  of non-existent code-host slugs were moved to the Trash.

## What I could NOT source (left out of the page)

- **After-the-fact permits in Meridian, Kuna, Star and Garden City.** Their codes are not on the host
  used for Boise, Eagle and Ada County (Star is on Municode, Garden City on ecode360; Meridian and Kuna
  were not located). No department page for these four says anything about work begun without a
  permit. The page says only that we found no source and to call the building department.
- **What an inspector requires for finished work** (opening walls, engineering letters, bringing work
  to current code). No source read says. The page tells the reader to ask.
- **What happens to an open enforcement case when the property sells.** No city or county page read
  addresses it. The page says so and points to the issuing office and an attorney. This is a statement
  of absence, based on the pages listed in sources.json only.
- **What "as-is" does between seller and buyer.** No primary source. The page says it comes from the
  contract and does not interpret it. It does NOT say an as-is clause shifts risk, waives anything or
  protects the seller.
- **Lenders, appraisers, title insurers and unpermitted work.** Nothing sourced, nothing said. The only
  third-party statement is the City of Eagle's own sentence about property insurers, kept in the claim
  (cv-eagle-building-department-permit-faq) and not used in the prose.
- **Recorded notices or liens for code violations / abatement costs.** Not researched. Star's page says
  the city may clean up a property and charge the owner or resident; whether that becomes a lien is not
  stated and the page does not mention it.
- **Dollar amounts of investigation fees.** Each ordinance sets the fee equal to the permit fee. No fee
  schedule was cached. No amount is stated.
- **Idaho Code 18-113** (the penalty section Ada County Code 7-2-12 points to) was not cached. The page
  states no figure for Ada County.
- **Kuna Building Department phone.** Not in the cached page body. None given.
- **Boise Building "Building Permits" sub-page** is a JavaScript card list with no text in the cached
  HTML; Boise's permit-trigger list was not sourced, so the page gives none for Boise.
- **Idaho Code 39-4111(3)** (a permit shall not require upgrades to unaffected existing parts, subject
  to accessibility rules and a substantial-safety-hazard exception) was read and left out. It is about
  new permits for new work and is easy to over-read as protection for old unpermitted work.

## Traps

1. **The form says "zoning violations", not "code violations".** Question 6 lists zoning violations as a
   title-clearing example. Question 8 is the permit question. Question 9 is the catch-all ("legal,
   physical or other"). The page does not say where an open code case goes on the form.
2. **"Substantial" in question 8 is undefined.** The page says so and does not define it.
3. **Three different penalty schemes.** State act: $300 / 90 days, "willfully" (39-4126). Boise dwelling
   code: $1,000 / 180 days, or a $300 infraction (9-1B-29). Ada County: misdemeanor per Idaho Code
   18-113, figure not sourced. Eagle: $1,000 / 180 days (claim kept, not used in prose). Never merge.
   The page states each as what the ordinance provides and predicts nothing about who is charged.
4. **Code-host currency.** American Legal's pages carry a disclaimer that the online code may lag
   adoption. Ada County shows "2026 S-15 (current)". Eagle's IRC block closes with Ord. 728 (2015)
   while Eagle's Building Department page says codes are effective January 1, 2021, so Eagle's online
   text may be behind the adopted code. All code-host claims are MEDIUM confidence.
5. **Ada County exempt-work list is the CURRENT list for unincorporated land.** It is used only to show
   that lists differ between jurisdictions (Ada County exempts re-roofing; Star requires a permit for
   it). It does not show what was required when older work was done; the page says that.
6. **Star's fifteen-day process is the public NUISANCE process.** The Star page does not say it applies
   to unpermitted construction. The page says that. The Star page also states the fifteen days two
   ways ("from the date of the notice" and "from the date of receipt of the letter"); the guide uses
   the "receipt" wording from the Complaint Process paragraph.
7. **Phone numbers conflict between sites.** The Ada County Sheriff page lists Meridian code enforcement
   as 208 884-5533 and Garden City as 208 472-2930. Meridian's own page says 208-846-7326 and Garden
   City's own page says (208) 472-2950. The guide uses each city's own page. Every phone number in the
   prose appears in a claim quote. Short fragments ("Phone: 208-887-2211", "Building without a Permit")
   are under verify-quotes' 25-character threshold, so the script does not check them; I checked them
   by eye against the cached text.
8. **Boise's case lookup shows closed cases only.** The guide draws the plain consequence (a clean
   search does not show there is no open case). The tool itself was not queried.
9. **"Tied to the property" (Ada County R105.1) is about permits**, not violations. Not stretched.
10. **Kuna and Boise code enforcement pages do not list unpermitted construction** among what they
    handle. The guide describes their stated scope and does not say they take those cases. In Boise the
    building code itself puts enforcement with the Building Division, assisted by code compliance.

## For the reviewer / owner / attorney

- Final section says "unpermitted work is part of a property's condition" to connect the
  owner-confirmed fact "we buy in any condition" to this topic. Owner should confirm the company will
  in fact buy with unpermitted work and with an OPEN enforcement case. The page does not promise the
  second.
- Final section says a sale to us "is not one of the exemptions in Idaho Code 55-2505". That rests on
  the existing claim id-disclosure-sixteen-exemptions (no as-is, cash or repair-condition exemption).
  An attorney should confirm the wording.
- Section 2 summarises 55-2511 as reaching "errors and omissions outside the seller's personal
  knowledge". The existing claim's note warns never to present it as "sellers are not liable".
- The section "Can you get a permit after the work is done?" is the part closest to advice. It quotes
  ordinances and tells the reader to call the department. An attorney should read it.
- Internal links used (4): /guides/idaho-seller-disclosure-when-selling-as-is, /sell-house-as-is-idaho,
  /contact, /how-we-calculate-an-offer.
- cv-eagle-building-code-penalties is in claims.json and not cited by any section.
- Word count about 2,230. Title 37 characters, description 153.

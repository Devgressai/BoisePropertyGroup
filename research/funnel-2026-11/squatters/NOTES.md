# NOTES: squatters-and-unauthorized-occupants-in-idaho (prefix sq-)

Dates: accessed / verified 2026-11-26. 24 new claims, 12 new sources, 2 reused registry claims.
verify-quotes on claims.json: every quote and amendment history fully verified, 0 partial, 0 not found.
Word count about 2,110. Title 36 characters, description 144. Nine sections.

Reused claims: id-6-310a-remove-unauthorized-persons (the eight conditions), ada-eviction-forms-nonpayment-only.

Reused source (in the registry, so NOT in sources.json): idcode-6-310a. The merge must append these new claim
ids to its claimsSupported: sq-6-310a-legislative-intent, sq-6-310a-verified-complaint,
sq-6-310a-complaint-lease-fraudulent-not-coowners, sq-6-310a-complaint-purchase-date-and-id,
sq-6-310a-false-statement-liability, sq-6-310a-sheriff-verifies-serves, sq-6-310a-fee-and-standby,
sq-6-310a-owner-not-liable-unless-wrongful, sq-6-310a-wrongful-removal-damages, sq-6-310a-arrest-authority-preserved.
The registry entry for idcode-6-310a has accessedDate 2026-09-09 and updatedDate null; it could be updated to "2026"
(history now reads "am. 2026, ch. 82"). The registry claim id-6-310a-remove-unauthorized-persons has no
amendmentHistory; the sq- claims carry it.

## How sources were fetched

All with scripts/research/fetch-source.mjs. No 403s, no Chrome fallback needed.
- The 6-310A cache file (a4c876b6076b4685.html) dates from 2026-09-09. I re-downloaded the live page to the
  scratchpad (not the cache) and diffed the statute text: identical, history "[6-310A, added 2025, ch. 222, sec. 1,
  p. 1042; am. 2026, ch. 82, sec. 1, p. 439.]", no 2027 or other future-dated version.
- 6-303 was already cached (2026-11-13) by an earlier wave; not in the registry as a source, so it is a new source here.
- Fetched but not cited: 6-301, 6-304, 6-311, 6-317, 5-203, 5-208, 5-209, Ada County Sheriff home page.
  Idaho Code 18-7011 returned 404 (that section number does not exist on the site); nothing written for it.

## What I could NOT source (left out)

- **An Ada County Sheriff page about 6-310A.** None of the Sheriff home, Civil Division, Civil Process, FAQ or Fees
  pages mentions 6-310A, unauthorized occupants or the statutory complaint. The page says the statute sends the
  complaint to the county sheriff and tells the reader to confirm the charge with the Civil Division.
- **The 6-310A notice fee in Ada County.** The statute ties it to the writ-of-restitution fee; Ada County lists $515
  for serving a writ. The page states both and says the Sheriff page does not mention 6-310A. Not confirmed by phone.
- **The standby hourly rate.** Not on any page read. No figure given.
- **What the 2026 amendment (ch. 82) changed.** Session law not read. The page describes the current text only.
- **Selling a house with an occupant still in it.** No primary source addresses it. The page sends the reader to an
  attorney and the title company and makes no statement about whether a sale can close.
- **City police roles.** I removed a sentence saying city police departments handle trespass inside their limits; no
  source read says that. The page gives only the Ada County Sheriff's dispatch and 911 lines.
- **Adverse possession case law** (hostility, claim of right, color of title nuances) and the AG landlord-tenant manual
  were not researched. The page quotes 5-206, 5-207 and 5-210 only.
- **Idaho Legal Aid / lawyer referral.** Linked from the Sheriff page but not government sources; not cited.

## Traps

1. **6-310A excludes former tenants on a spoken agreement and the owner's immediate family.** The page says so in
   section 1. Never present 6-310A as a shortcut around eviction (registry note on id-6-310a says the same).
2. **Form box 8 (not owners or co-owners) and box 2 ("I purchased the property on") are form statements, not
   subsection (2) conditions.** The page presents them as what the form asks and does not say how an heir completes them.
3. **"Record owner."** Sheriff verification is against the record owner or authorized agent. Inherited houses still
   titled to a decedent are the obvious problem case; the page flags it and sends readers to an attorney.
4. **Lock changes.** The Sheriff FAQ "not until an eviction is completed" answers are in the eviction context.
   6-310A(5) separately allows changing locks AFTER the sheriff serves the notice, with optional standby. The page
   keeps the two apart and says it suggests no step outside these processes.
5. **Criminal trespass carve-out.** 18-7008(2)(a) has "except under a landlord-tenant relationship", and (6)/(7) exclude
   a tenant under a valid lease. First no-damage offences where the person leaves when told can be a $300 infraction;
   the page says "with an infraction for some first offenses" and states no penalty figures.
6. **Forcible detainer (6-302) is in a civil chapter.** The statute says "guilty of a forcible detainer"; the page does
   not call it a crime. The five-day window is part of the definition of "occupant", not a deadline.
7. **6-316 time periods run from the court's finding.** The page says so and gives no total eviction duration.
8. **Adverse possession.** 5-210's twenty years and tax payment are worded "in no case ... under the provisions of any
   sections of this code", so they apply to both routes. The clear-and-convincing sentence in 5-210 refers to its own
   subsections. The page does not predict any outcome.

## For the reviewer / owner / attorney

- Owner should confirm the company will buy a house with an occupant still in it. The final section does not promise
  that; it says whether a sale can go ahead is a question for the attorney and title company.
- Section "How does the sheriff removal ... work?" closely paraphrases the statutory procedure. An attorney should read it.
- Fees and phone numbers (Civil Office (208) 577-3750; non-emergency dispatch 208 377 6790; $515 writ fee) are
  FAST/SLOW-CHANGING; re-check before publication. The non-emergency number is in a claim quote but the
  "Dial 911" fragment is joined in the same quote and verified.
- Internal links (4): /guides/selling-an-inherited-house-in-idaho, /guides/selling-a-house-in-probate-in-idaho,
  /guides/selling-a-rental-with-tenants-in-idaho, /contact.
- Concurrent waves: no other funnel folder defines idcode-6-302/6-303/6-311a/6-316/18-7008/5-206/5-207/5-210 or the
  ada-sheriff-civil-* ids as of writing. Check for collisions at merge.

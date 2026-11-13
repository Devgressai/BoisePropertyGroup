# after-foreclosure-sale: reviewer notes (2026-11-13)

Slug `after-a-foreclosure-sale-in-idaho`, cluster `distress`, prefix `as-`.
20 new claims, 10 new sources, 9 sections, about 2,280 words.
`verify-quotes` reports every quote traced; all three JSON files parse.

## Sources actually read (all cached under data/idaho/raw/cache/)

- Idaho Code 45-1506 (existing source `idcode-45-1506`, reused, not redefined), 45-1507,
  45-1508, 45-1510, 45-1512, 6-310. Each read in full on legislature.idaho.gov. None
  shows a future-dated version. History notes copied from the page.
- 12 U.S.C. 5220 statutory note (PTFA section 702), U.S. Code 2024 Edition, govinfo.gov.
- Federal Reserve CA 18-4 (June 22, 2018), restoration of the PTFA.
- 15 U.S.C. 1681c, U.S. Code 2024 Edition, govinfo.gov. Subsections (a) to (c) read.
- CFPB "How long does information stay on my credit report?" (last reviewed Sep 02, 2026).
- CFPB "Find a housing counselor".

## Things a reviewer should double-check

1. **PTFA versus Idaho 45-1506(11) and 6-310.** Idaho calls everyone left after the tenth
   day a tenant at sufferance, and 6-310 lets the complaint say no notice is required. The
   federal act says the successor takes "subject to" a 90 day notice to bona fide tenants.
   The page states both and says how they apply to a specific tenancy is an attorney
   question. I did not source any Idaho court decision or agency statement on the
   interaction. If the editor wants a firmer sentence, it needs a source I do not have.
2. **"Still in force" evidence for the PTFA is not dated 2026.** It rests on a 2018
   Federal Reserve letter ("the restored act does not include an expiration date") and on
   the 2024 Edition of the U.S. Code, which still prints the section with the restoration
   note. I could not open uscode.house.gov (HTTP 404 through the fetch script), so the
   "prelim" current-through text was not checked. The Fed letter also says no agency may
   interpret the law, so CA 18-4 is cited only as the agency's description.
3. **Credit reporting: the statute never says "foreclosure".** 15 U.S.C. 1681c(a)(5) is a
   catch-all for "any other adverse item of information", and the CFPB page says "most
   negative information". The page says so in terms. It does not state when the seven
   years starts for a foreclosure, because neither source says. 1681c(c) sets a start
   rule for collection and charge-off accounts only, and I left it out. The stored quote
   contains "re port", a typesetting break in the govinfo HTML, kept so the quote verifies.
4. **45-1510(2) rescission.** Easy to over-read as "bankruptcy gets the house back". The
   section lets the trustee or beneficiary record a rescission where the sale was already
   invalid. The page says the former owner cannot record it. Check the tone of that paragraph.
5. **Deficiency.** The page says there are two ceilings and gives no worked dollar example
   (rule 7). It says 45-1512 does not address a separate loan from a different lender. That
   is a reading of the phrase "the obligation for which such deed of trust was given as
   security", not something the statute says outright. I did not research what a sold-out
   junior lender may do. Delete the sentence if the reviewer thinks it goes too far.
6. **Surplus paragraph.** "A later recorded lien, such as a second deed of trust or a
   recorded judgment lien, comes ahead of the owner" gives examples of 45-1507(3)'s
   "recorded liens subsequent". The judgment example leans on existing claim
   `ln-judgment-lien-arises-on-recording`. The statute lists no examples.
7. **Final section.** "Listing it on the open market may bring a higher price than we would
   pay" is an honest caveat with no source, in line with the brief's instruction to say when
   another route serves the seller better. "A three-week close is realistic" and the other
   business facts are the owner-confirmed list only.

## What I could NOT source, and left out

- How and when a trustee actually pays a surplus, what a former owner files to claim it,
  and what happens to unclaimed surplus. 45-1507 gives only the order.
- What happens after the trial in a possession action (judgment, writ, sheriff, the time
  to remove belongings). Idaho Code 6-311 onward was not read. The page says it does not
  cover this.
- Possession actions for tracts over five acres. 6-310(1) is limited to five acres or less.
- Judicial foreclosure of a mortgage (redemption, deficiency under Title 6 chapter 1). The
  page says only that it follows other statutes.
- Federal tax consequences of a foreclosure (Form 1099-A or 1099-C, cancelled debt).
  Assigned to the short-sale page in the cluster table.
- The homestead exemption's effect on a surplus or a deficiency judgment. Not addressed by
  the sections read, so `id-homestead-creditor-175k` is not cited.
- PTFA section 703 (Section 8 voucher tenancies). Mentioned in the Fed letter, text not read.
- Any Ada County specific practice (where sales are held, how the sheriff handles
  possession). Nothing county-level is asserted; every claim carries entity `state:id`.
- "Cash for keys" and surplus-recovery companies. No primary source, so not mentioned.
- Lender waiting periods for a new mortgage after foreclosure. Not sourced, not mentioned.

## Traps

- Statute pages render linked section numbers with a trailing space, so two quotes read
  "section 45-1506 (7)" and "section 45-1506 (11)" with a space before the parenthesis.
  The verifier needs that space. Do not tidy it.
- New topic tag `credit-reporting` is not in the registry's existing vocabulary. Rename it
  at merge if tags are controlled.
- Source ids `usc-12-5220-note-ptfa`, `usc-15-1681c`, `frb-ca-18-4-ptfa`,
  `cfpb-how-long-information-stays-on-credit-report` and `cfpb-find-a-housing-counselor`
  are my own naming. Another cluster page may have registered the same CFPB URLs under a
  different id (the housing counselor page was already in the cache when I fetched it).
  Dedupe by URL at merge, not only by id.
- Two CFPB URLs I guessed resolve to unrelated pages and are cached but unused:
  `.../what-is-a-hud-approved-housing-counselor-en-2069/` (a credit report page) and
  `.../what-is-a-deficiency-judgment-en-1433/` (a find-a-lawyer page). Also fetched and
  unused: Idaho Code 6-303, OCC Bulletin 2018-17, and the 2023 Edition govinfo pages.
- The ninety days in 45-1506(15) (belongings in an unoccupied house) and the federal 90 day
  tenant notice are unrelated. They sit in different sections of the page on purpose.
- Links used (4): /guides/idaho-foreclosure-vs-property-tax-delinquency,
  /guides/liens-and-judgments-when-selling-in-idaho,
  /guides/selling-a-rental-with-tenants-in-idaho, /sell-house-before-foreclosure-idaho.
  None point to the other new cluster slugs.

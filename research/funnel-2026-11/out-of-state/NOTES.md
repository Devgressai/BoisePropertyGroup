# NOTES: selling-an-idaho-house-from-out-of-state (prefix os-)

Dates: accessed / verified 2026-11-26. 18 new claims, 12 new sources, 20 reused registry claims.
verify-quotes: candidate file fully verified (all 1142 strings across registries + candidate, 0 partial, 0 not found).
Word count about 2,240. Title 40 characters, description 160. 9 sections. Links (4):
/guides/how-a-property-sale-closes-in-idaho, /guides/selling-a-house-in-probate-in-idaho,
/guides/taxes-when-you-sell-a-house-in-idaho, /contact.

## Reused claims
cl-acknowledgment-required-to-record, cl-notary-personal-appearance, cl-notary-acknowledgment-identity,
cl-record-in-county-where-situated, cl-remote-notarization-satisfies-appearance, dv-power-of-attorney-exception,
sp-rec-ada-erecording-title-companies, cg-id-3026a-nonresident-real-property-source, cg-istc-residency-what-idaho-taxes,
cg-istc-idaho-source-income-property, cg-irs-exclusion-250k-500k, cg-irs-ownership-and-use-tests,
cl-firpta-buyer-withholds-15-percent, cl-firpta-non-foreign-certification, cl-1099s-tin-requested-at-closing,
pt-homestead-apply-once-conditions, ada-homeowners-exemption-deadline, pt-homestead-new-claim-removes-old,
pt-homestead-double-claim-penalty, pt-ada-new-owner-must-apply.

## Existing sources needing claimsSupported updates at merge (NOT in sources.json)
- idcode-51-114a: + os-ron-idaho-notary-conditions, os-ron-certificate-and-recording-retention
- istc-individual-income-tax-basics: + os-istc-part-year-resident-taxes, os-istc-form-43-nonresident-return
- idcode-63-602g: + os-homestead-requires-primary-dwelling
- ada-assessor-homeowners-exemption: + os-ada-exemption-one-home

## New sources
idcode-15-12-104, -105, -106, -110, -119, -120, -204; idcode-55-806, idcode-55-814; idcode-51-111, idcode-51-114;
sos-idaho-notary-information. All fetched with fetch-source.mjs, no 403s. Every statute page shows one version;
no future-dated amendment (grep for "EFFECTIVE" found only the ordinary phrase "effective date of this chapter").
The SOS URL /notary-public/ redirected to /notary-information/ (recorded as retrievalUrl; the cache is keyed to
/notary-public/). Two other SOS URLs I tried (/notary/, /notary-public/remote-notarization/) returned the same page
and were cached incidentally; they are not cited.

## What I could NOT source (left out)
- **Idaho withholding on a nonresident's home sale.** No Tax Commission page read (online guide, Idaho source income,
  capital gains, withholding landing page) describes one. The withholding landing page lists wages, pensions,
  bonuses, commissions and gambling winnings only. The page says it "does not cover" state withholding and sends the
  reader to the title company and a tax professional. It does NOT say there is none. The sale-taxes guide made the
  same call.
- **Credit for tax paid to the seller's new home state.** The Tax Commission's credit line is in the RESIDENT row of
  its table, not the nonresident row. Not stated.
- **A recording requirement inside the Uniform Power of Attorney Act.** None in title 15 ch. 12 as read. The recording
  rule is 55-806 (recording chapter); the page says so.
- **15-12-107 (which jurisdiction's law governs an out-of-state POA)** was not read; the page quotes 106(3) only.
- **Statutory POA form (15-12-301)** and the specific-grant list in 15-12-201 (gifts, survivorship, trusts). Not
  used; a sale is general real-property authority under 15-12-204.
- **Whether a title company or the Ada County Recorder accepts remote online notarizations or mobile notaries.** No
  source. The page says the statute permits RON and to ask the closing agent.
- **IDAPA 34.07.01** (RON rules) not read; mentioned only as the SOS page names it.
- **Whether moving out or renting ends the homeowner's exemption, and when.** Only the qualification (owner-occupied
  primary dwelling) and the reapply-on-move guidance are stated. The page sends the reader to the Assessor.
- **FIRPTA definition of "foreign person."** Not claimed; I removed a draft sentence saying living out of state does
  not make someone a foreign person, because no source on file says it in those words.

## Traps
1. **Notarisation of a POA is a presumption, not a validity rule.** 15-12-105 makes an acknowledged signature
   presumed genuine. The page never says an unnotarized POA is void. Recording needs acknowledgment (55-805).
2. **15-12-120 acceptance duty has exceptions.** The page states the seven-business-day rule and the good-faith
   refusal exception together. Never shorten to "the title company must accept your POA".
3. **55-814 vs 15-12-110.** 55-814 (a recorded power is not revoked by the principal's act unless the revocation is
   recorded) and 15-12-110 (termination on death, revocation, etc.) are stated separately and not reconciled.
4. **51-114A: the NOTARY must be located in Idaho.** The signer may be anywhere, with extra conditions outside the
   U.S. The page does not say "you can sign remotely".
5. **Apostille "conclusively establishes" authenticity**; 51-114 does not say one is required.
6. **Form 43 quote.** The raw page has a `&#8239;` entity between "Form 43" and "is", which verify-quotes does not
   decode, so the quotedLanguage starts at "is the Idaho income tax return ...". "Form 43" precedes each fragment on
   the cached page (checked by eye).
7. **Homestead terminology.** "Homeowner's exemption" on the page is the 63-602G property-tax exemption, not the
   55-1003 creditor homestead. pt-homestead-new-claim-removes-old carries a known discrepancy with the Ada Assessor's
   page (same-year vs following-year removal); the page states only the statute's "following tax year".
8. **Ada Assessor page cache is from 2026-09-09** (not re-fetched, to avoid changing a cache other claims rely on).
   Re-check the "only one home" sentence before merge.
9. **Federal exclusion.** The page states the IRS tests only; it does not say whether time away affects a given
   seller.

## For the reviewer / owner / attorney
- Final section asks the seller to say how they plan to sign so the title company can plan. It does not promise remote
  signing, a mobile notary, or any arrangement by us. Owner should confirm before adding stronger wording.
- An attorney should read the two power-of-attorney sections (acceptance, recording and revocation).
- A tax professional should read "Does Idaho tax my gain if I no longer live there?".

# NOTES: selling-a-house-with-an-hoa-in-idaho (prefix hoa-)

Dates: accessed / verified 2026-11-26. 21 new claims, 8 new sources, 6 reused registry claims.
verify-quotes: all candidate strings fully verified (42 = 21 quotes + 21 history notes), 0 partial, 0 not found.
Word count about 1,900. Title 36 characters, description 147. 9 sections.

Reused claims: ln-hoa-definition-lien-authority, ln-hoa-statement-of-account, ln-hoa-lien-claim-requirements,
ln-hoa-lien-enforcement, ln-condo-assessment-lien-one-year.

Reused sources (already in the registry, so NOT in sources.json). The merge must append these new claim
ids to their claimsSupported:
- idcode-55-3203: hoa-governing-documents-definition, hoa-member-and-transfer-fee-definitions
- idcode-55-3205: hoa-statement-includes-transfer-fee-amount, hoa-transfer-fee-only-if-ccrs-authorize,
  hoa-annual-fee-disclosure-limits-transfer-charges, hoa-financial-disclosure-ten-business-days
- idcode-55-1518: hoa-condo-assessment-debt-priority-and-sale

New sources: idcode-55-3202, -3204, -3206, -3211, -3101, -3102, -3103, -1528. All fetched with
fetch-source.mjs (no 403s). Every section page shows one version; no future-dated amendment.
Also cached but not cited: chapter 32, 31 and 15 tables of contents, 55-3201, 55-3204A, 55-3204B,
55-3208, 55-3212, 55-1005 (re-read).

## Chapter 32 section by section (what was read)

3201 short title; 3202 intent (used); 3203 definitions (used); 3204 administration (used (3)(d), (5), (8));
3204A/3204B declarant control and board membership, only for HOAs formed after July 1, 2025 (not relevant
to a sale, left out); 3205 fees and disclosures (used all of it); 3206 fines (used); 3207 liens (reused
ln- claims); 3208 solar, 3209 signs, 3210 flags (not relevant); 3211 rentals and transfer restrictions
(used); 3212 ADUs (left out; a buyer-use topic); 3213 family daycare (not read, not relevant).

## What I could NOT source (left out)

- **Resale certificate / disclosure packet.** Idaho's HOA Act has no resale-certificate or
  "documents a seller must deliver to a buyer" requirement in chapter 32. The only sale-linked documents
  are the statement of account (55-3205(1)) and the annual fee disclosure. The page does not say a
  seller must give a buyer CC&Rs, budgets or minutes, and does not say the opposite. Statement of
  absence based on chapter 32 only.
- **A dollar cap on transfer fees.** None exists in 55-3205, 55-1528 or chapter 31. The page says
  so. The only ceiling is the association's own January 1 disclosure.
- **Homestead and HOA liens.** 55-3207 does not mention the homestead exemption. 55-1005 lists
  pre-homestead judgment liens, mechanic's/laborer's/vendor's liens and consensual liens; it does not
  name association liens. Whether an HOA lien is a "consensual lien" (via recorded covenants) or how a
  homestead claim interacts with it is a legal question. The page says the section is silent and points
  to an attorney; it does NOT say the homestead protects against an HOA lien. Not researched in case law.
- **HOA lien priority versus a mortgage, lien duration, and foreclosure procedure for chapter 32
  liens.** 55-3207 states none of them. Nothing said. (Priority and expiry ARE stated for condos in
  55-1518, and the page keeps them in the condo section.)
- **Whether fines are lienable.** Not stated in the Act. The page says so.
- **Who pays dues at closing / prorations / transfer fee allocation between seller and buyer.**
  Contract matters; no primary source. Nothing said.
- **Ada County specifics.** No county source applies to HOAs; the page is statewide, entity state:id.

## Traps

1. **Chapter 31 does not ban HOA transfer fees.** 55-3102(4)(f) excludes association fees used for
   authorized purposes with no third-party pass-through. The page states the exclusion right after the
   chapter 31 rule. Never shorten to "Idaho bans transfer fees".
2. **55-3102 says "As used in this section"** though it is a definitions section for the chapter.
   The page attributes the "transfer includes inheritance" definition to chapter 31.
3. **Written request.** 55-3205(1) requires a written request; 55-1528(1) (condos) does not say
   written. 55-3205(3) financial disclosure does not say written and carries no no-fee rule. Kept apart.
4. **The lien in 55-3207 is for common-area maintenance assessments.** The page says that.
5. **Attorney-fee rules.** 55-3206(4) limits HOA attorney's fees in the fine/violation process only;
   not extended to assessment collection. 55-3204(8) fees to a member require prevailing in a legal
   action; stated as conditional.
6. **55-3211 second sentence** preserves valid transfer restrictions that applied when the owner
   acquired the property. The page does not say whether a given restriction is valid.
7. **Condo lien priority** is over liens recorded AFTER the notice of assessment, subject to listed
   exceptions. The page does not say it beats a mortgage.
8. The intro sentence "Unpaid assessments can become a recorded lien" rests on ln-hoa-lien-claim-requirements;
   "can" reflects that the association must choose to file.
9. The year 2011 in the chapter 31 paragraph comes from the history note of 55-3103 (claim
   hoa-transfer-fee-covenant-not-enforceable).

## For the reviewer / owner / attorney

- Final section asks the seller to tell us about unpaid dues or an open violation. It does NOT say we
  buy with an HOA lien outstanding or that the title company will pay it off; owner should confirm any
  stronger wording before adding it.
- An attorney should read "What happens if I am behind on HOA dues?" (the homestead sentence) and
  the chapter 31 paragraph.
- Internal links (4): /guides/how-a-property-sale-closes-in-idaho,
  /guides/liens-and-judgments-when-selling-in-idaho, /guides/idaho-seller-disclosure-when-selling-as-is,
  /contact.

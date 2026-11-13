# sell-or-keep — reviewer notes (2026-11-13)

Page: `sell-or-keep-house-facing-foreclosure-idaho` (MOFU decision, merge with `--as decision`).
15 new claims (`sk-`), 9 new sources, 8 sections, about 2,240 words. Title 48 chars, description 149.
`verify-quotes`: 512 of 512 strings fully verified, 0 partial, 0 not found.

## Which reconveyance section says what

- **45-1514** is the section that says the trustee "shall reconvey" on performance, upon written request of the beneficiary. It sets no deadline and no dollar penalty. It points to the mortgage-discharge rule for liability.
- **Title 45 chapter 12 (45-1201 to 45-1206)** is a separate, permissive backstop that lets a title insurer or title agent reconvey when the beneficiary does not. The 30-day and 60-day counts on the page belong to that backstop only.
- I read **45-915** (mortgage satisfaction, damages plus a $100 forfeiture) and cached it. I did not claim it and the page carries no dollar figure, because 45-1514 only cross-refers to "as provided by law" and I did not want to assert which section that is.

## Could not source, so left out

- **Scope of 12 CFR 1024.41.** I did not research 12 CFR 1024.30 (which loans and servicers Subpart C covers, the principal-residence condition) or the small-servicer definition. The page says the rule "applies a narrower set of requirements to small servicers" (from 1024.41(j)) and sends the reader to a counselor or attorney on whether it covers their loan.
- **Idaho deficiency after a short sale.** Belongs to the short-sale page (45-1512). This page quotes only the CFPB's conditional sentence and points to an Idaho attorney.
- **45-1506A, 45-1506B, 45-1506C.** Not researched here (timeline and avoid-foreclosure pages own them). 45-1506B is named once, only because 45-1506(8) names it.
- **How long a listing takes, and any price comparison.** No source, no number. The page says only what each kind of sale depends on.
- **Bankruptcy, refinance, forbearance, deed in lieu.** Out of scope for this row. Not mentioned.
- **hud.gov.** The HUD counseling pages cached thin (JavaScript shells, 750 characters of text). The counselor claims rest on the CFPB "Ask CFPB" page instead, plus the existing 45-1602 notice text.

## Traps a reviewer should check

1. **"We are none of those" (section 6).** The page says the business is not a regulated lender, bank, licensed mortgage lender or broker, or family member, so the Act's notice and five-business-day cancellation apply to a contract with us. The task required saying this. It is a statement about the business that the owner should confirm, and it is the one place the page applies a statute to a party (us, not the reader). The existing note on `vb-cfpa-exclusions` warns against applying the list to a reader; I applied it only to ourselves.
2. **The cure window is 115 days from the RECORDING OF THE NOTICE OF DEFAULT.** It is not counted back from the sale date and it is not "until the sale". The page says so twice. Any edit that shortens those sentences will probably break this.
3. **Payoff statement: seven business days has a foreclosure exception.** 1026.36(c)(3) relaxes the deadline to "a reasonable time" when the loan is in foreclosure. The page always states the two together. A headline or pull quote saying "seven business days" alone would mislead exactly this reader.
4. **1024.41(g) is a limit on the servicer with three exits.** The page never says applying stops a sale. Conditions kept: complete application, more than 37 days before the sale. Paragraph (i) (duplicative requests) can remove the protection for a repeat application; not claimed, not mentioned.
5. **1024.41 was amended in May and July 2025** (90 FR 20792 and a 2025-07-15 version). The eCFR versioner API showed no future-dated version on 2026-11-13, but this section is under active rulemaking. Source marked MEDIUM staleness.
6. **Five days versus five business days.** The statutory notice text (45-1602 and 45-1505) says "five (5) days". The operative right in 45-1603 says five business days, then "until the five (5) days have passed" for the transfer bar. The page says "five business days" for the right and "the five-day cancellation period" for the transfer bar.
7. **Postponement.** The page says 45-1506(8) "names no right for an owner or a buyer to postpone the sale". That is a statement about the text of one subsection. It does not say an owner has no way to delay a sale (stays and injunctions under 45-1506B, bankruptcy and court orders exist and were not researched).
8. **Three unsourced general sentences.** (a) "Money left after the payoff, the other liens and the costs of sale goes to the seller." (b) "A sale to a buyer who needs a loan depends on finding that buyer and on the buyer's lender." (c) "A listing with a licensed Idaho agent puts the house in front of more buyers than one offer from us does." These are framing, consistent with the existing `cash-offer-vs-listing-idaho` page, with no number attached. Cut them if the reviewer wants strict claim-only prose.
9. **Phone numbers in prose.** The HOPE Hotline and CFPB numbers are in section 7, traced to `sk-cfpb-hud-counselor-free`. The CFPB prints them as (888) 995-HOPE (4673) and (855) 411-CFPB (2372); the page prints the digit form. Re-check before each republish. The business phone is not in the prose.
10. **Final section has three short paragraphs, not two.** The task required a plain statement of when not to sell to us, which is the middle paragraph. Business facts used are only the owner-confirmed five. No claim about fees, closing costs, assignment or speed beyond "three weeks is realistic".
11. **FTC equity-skimming sentence** is reused in section 7 against ourselves ("check any offer, ours included"). Same owner-comfort question as on the vet-buyer page.

## Merge housekeeping

- `sk-cure-right-115-days` and `sk-trustee-sale-postponement-beneficiary-request` cite **idcode-45-1506**, which is already in the registry, so it is not in my sources.json. Add both claim ids to that source's `claimsSupported` at merge.
- `cl-encumbrances-include-taxes-liens`, the three `id-trustee-sale-*` claims, the five `vb-cfpa-*` claims and `vb-ftc-equity-skimming` are reused, not duplicated.
- Other cluster agents will likely also create `idcode-45-1505`, `idcode-45-1514`, `ecfr-12-cfr-1024-41`, `cfpb-what-is-a-short-sale` and `cfpb-hud-approved-housing-counselor`. Ids follow the convention so the merge can dedupe, but check that the other agents used the same non-statute ids, and union the `claimsSupported` lists.
- Federal claims carry `amendmentHistory: null` (matching `vb-ftc-*`). The Federal Register citations are in the cached eCFR pages if the editor wants them.
- `futureDatedAmendment` is false for all four Idaho sections (section pages and chapter 12 and 15 indexes checked) and for both CFR sections (versioner API).
- Cache: I mistakenly fetched two wrong CFPB URLs (`what-is-a-short-sale-en-289` and `-en-291`, which CFPB redirects by number to the forbearance and deed-in-lieu pages). I moved those four cache files to the Trash (`61e9ced84bc80354.*`, `20bd5c0a1e0e8972.*`) so no mis-keyed copy stays in the cache. The correct short-sale page is `-en-290` (`e1fbc8e17f92fd12.html`).
- Cached but not cited: 45-1201, 45-1204, 45-1205, 45-1206, 45-915, the chapter 9, 12 and 15 indexes, CFPB "how does foreclosure work", CFPB find-a-housing-counselor, hud.gov/counseling and hud.gov avoiding-foreclosure.
- Internal links used (4): /guides/liens-and-judgments-when-selling-in-idaho, /cash-offer-vs-listing-idaho, /sell-house-before-foreclosure-idaho, /how-to-check-a-cash-buyer-in-idaho. No links to the other new cluster slugs.

# vet-buyer — reviewer notes

Page: `how-to-check-a-cash-buyer-in-idaho` (cluster: process, MOFU). 30 new claims (`vb-`), 22 new sources. No existing claim or source in the registry covered licensing, escrow, title agents or the Consumer Foreclosure Protection Act, so none were reused (the page links to the foreclosure guide for trustee-sale timing instead of re-citing those claims).

## Searched for and NOT found, so left out

- **A wholesaling or contract-assignment statute.** I checked the current text of Title 54 ch. 20 (54-2002, -2003, -2004 in full, -2055, -2065), the 2024, 2025 and 2026 session bill lists on legislature.idaho.gov (no bill title mentions real estate licensing, wholesaling or assignment), and the Commission's guidance index. **No Idaho statute uses "wholesal-" or addresses assigning or marketing a purchase contract.** As the brief says, the page says nothing about one. The words "wholesale" and "assign" do not appear anywhere on the page.
- What does exist is **agency interpretation**: IREC Guideline 18 (2019) says an investor "may be engaged in Unlicensed Practice if he lists, sells, or negotiates the sale of property he does not own, or if he procures buyers for property that he does not own", and Guideline 2 reads "procuring prospects" to include any marketing. The page uses these and says each time that they are the Commission's interpretation and not statute (Guideline 18 states this itself). Confidence is MEDIUM on both claims for that reason.
- **A distressed-homeowner statute in Title 48.** There isn't one. The statute that does exist is **Title 45 ch. 16, the Consumer Foreclosure Protection Act (45-1601 to 45-1605)**, and 45-1605 routes penalties to Title 48 ch. 6. I did not research Title 48 ch. 6 remedies, so the page names the Consumer Protection Act and does not describe what it provides.
- **The Idaho AG consumer-protection page** (cached) had nothing specific to real estate or cash buyers, so it is not cited.
- **irec.idaho.gov** no longer hosts the Commission. Its pages are now under dopl.idaho.gov/rec. Its consumer guidance comes from the FAQs and Consumer Information page.
- **SOSBiz search results** (sosbiz.idaho.gov) are a JavaScript app that cached as an empty shell. The page says only what the SOS landing page says (it shows "business information, registered agents, and more"). It does **not** claim the search shows status, formation date or officers.
- **Department of Finance escrow licensee search.** That one is JavaScript too, so it was not cached. The page says the Department of Finance has jurisdiction (sourced to IREC's FAQ page) and gives no URL or description of the search itself.
- **Department of Insurance title-agent search.** The DOI page's "Find a Title Agent / Company" button points to an external NAIC lookup, which was not cached. The page says only that the DOI page offers the search.

## Traps a reviewer should check

1. **Five days vs five business days.** The statutory NOTICE text in 45-1602 says "five (5) days". The operative right in 45-1603 says "five (5) business days" from entering into the contract. The page uses 45-1603's wording. Do not "fix" it to match the notice.
2. **Two different statutory foreclosure references.** 45-1602 refers to the foreclosure period "described in section 45-1506". 45-1603 refers to property "in foreclosure as described in section 45-1505". The page cites each one as written and never tells a reader whether they are "in foreclosure".
3. **Subsection numbering drift.** Guideline 2 cites the broker definition as 54-2004(36) and Guideline 18 cites dealer in options as 54-2004(19). The current statute has them at (39) and (20). The page cites the sections without subsection numbers.
4. **Earnest-money rules in 54-2051 and 54-2041 bind brokers and licensees.** The page says so, and tells sellers in a no-licensee sale to read the purchase agreement. It does not claim any statute protects their deposit in a direct sale.
5. **Penalties in 54-2065 and 30-913 fall on the unlicensed actor.** The page says this explicitly so it does not scare sellers.
6. **FTC "equity-skimming" language** names "selling them your home for cash for much lower than the selling price of similar homes" as a scam pattern. I quoted it straight because the page is about vetting cash buyers, us included. A reviewer may want to confirm the owner is comfortable with that.
7. **The final section** uses only owner-confirmed facts: own capital, local title company, seller picks the date, any condition, and three weeks is realistic. It says the checks apply to us too, and that listing serves sellers who want the widest pool of buyers. It makes no claim about assigning, fees, closing costs or stopping foreclosure. "HUD-approved housing counselor" is supported by the 45-1602 notice text (the vb-cfpa-written-notice-required quote includes that passage).
8. **One prose sentence is general guidance, not sourced fact:** "contact the company using a phone number you found yourself" and "Confirm any change to wiring instructions by phone". It is advice and is consistent with IREC's wire-diversion warning, but no source prescribes it.
9. **The FTC wire/cashier's-check warning** is written for mortgage-relief companies taking money from homeowners. The page applies it only to "anyone asking a homeowner for money" and to someone on the buyer's side asking the seller to pay before closing.

## Housekeeping

- Fetching the 2024 and 2025 session bill lists wrote two large cache files (~3.4 MB and ~2.5 MB) under data/idaho/raw/cache (e21e1772b656cf0a.html, 0074ca530f076c62.html). No claim cites them. They are only the record of the negative search. The 2026 list (129208615d7fe1a1.html) was already cached. Delete the two if repo size matters.
- I also cached 45-1605, the 41 ch. 27 and 45 ch. 16 index pages, DOI and DOF home pages, DOPL REC home, AG consumer-protection and H0321 (2025, unrelated squatting bill). None of them is cited.
- `extract-pdf-text.mjs` was run (all PDFs) to produce the Guideline 2, 14 and 18 text in data/idaho/raw/extracted/. Guideline 14 (disputed earnest money) was read but not cited, because the IREC FAQ page says the same thing more plainly.
- futureDatedAmendment is false for all 16 statute sections. The section pages and chapter indexes show no pending or delayed-effective versions.

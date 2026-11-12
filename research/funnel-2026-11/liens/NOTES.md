# liens — research notes (2026-11-12)

Slug `liens-and-judgments-when-selling-in-idaho`. 23 new `ln-` claims, 18 new sources
(15 Idaho Code sections, 1 IRS web page, IRS Pub 783, IRS Pub 784). The page also uses
7 existing claims: id-tax-deed-three-year-delinquency, id-tax-deed-redemption-fourteen-months,
ada-assessment-market-value-jan-1, ada-treasurer-ex-officio-tax-collector,
id-homestead-creditor-175k, ada-recorder-maintains-ownership-documents.

## Could NOT source (left out on purpose)
- **"The lien follows the house to the buyer" / "liens are paid from proceeds at closing."**
  No section read says either in general terms. The intro says only that nothing in the
  statutes read forbids a sale, then states how each lien ends. No claims about how title
  companies or escrow handle payoffs.
- **Idaho Code 45-810 (HOA lien).** It is not in Title 45 ch. 8 (the chapter list skips from
  45-809 to 45-811). HOA liens are in **55-3207** (added 2022); condominiums are in **55-1518**.
- **Homestead vs judgment lien on a voluntary sale.** 10-1110 attaches to property "not exempt
  from execution". The page names the $175,000 homestead cap (existing claim) and sends the
  reader to an attorney. It does NOT say how much equity is protected in a sale.
- **The Internal Revenue Code itself** (26 USC 6321–6325) was not read. The federal claims rest
  on the IRS page and Pubs 783/784, and are attributed to them.
- **45-520 to 45-524** (bond-release procedure), **45-525** (contractor disclosure), **5-215**
  (time limit on actions on a judgment): not read, not described.
- **Proration of property taxes at closing, tax due dates:** not sourced, left out.
- **Whether HOA fines can be liened:** 55-3207 ties the lien to common-area maintenance
  assessments. The page says the section does not settle the question either way.

## Traps for the reviewer
1. **Pub 783/784 quotes use `...` across COLUMN BREAKS.** pdftotext `-layout` interleaves the
   two columns, so a sentence that runs on in the PDF is split across extracted lines. Each
   fragment verifies, but several `...` joins in ln-irs-discharge-apply-45-days,
   ln-irs-discharge-partial-payment-or-no-value and ln-irs-subordination-pub-784 bridge a column
   break, not omitted words. Check against the PDF (Rev. 12-2022 for both) if that convention is
   not acceptable.
2. **Future-dated amendments:** no section page showed an alternate future version or an
   "effective" note. The site says statutes are posted July 1 after the session, and
   55-3203 already shows a 2026 amendment (ch. 251), so the 2026 session is reflected. I did
   not search 2026 session laws for anything with a delayed effective date. Recently amended:
   7-1206 (2025), 55-3205 (2025), 55-3203 (2026).
3. **Judgment lien clock:** ten years from the DATE OF THE JUDGMENT, not from recording, and
   renewable (10-1111, "or any renewal thereof"). Never write "expires after ten years" without
   the renewal rule. Child support and restitution run differently (both covered).
4. **Child-support department lien (7-1206)** is filed with the **Secretary of State**, not the
   county recorder, and applies only where the department provides enforcement services.
   The page says a county-records search may not show it.
5. **Mechanic's lien "six months"** is how long the lien BINDS the property unless suit is filed
   or a payment/credit extension is endorsed. A lapsed claim can still sit on the record. The
   page does not tell anyone their lien has expired.
6. **"Reaches people the owner did not hire directly"** (mechanic's section) is my plain reading
   of 45-501's "every person … furnishing materials" + "subcontractor … agent of the owner".
   It is fair to the text, but it is a paraphrase. A reviewer may prefer to cut it to the quote.
7. **Bond at 1.5x** comes from the statutory bond FORM in 45-519 ("(1-1/2 x claim)"), not from
   operative prose. The page says "the statutory bond form ... is written for one and a half times".
8. **Federal subordination** is labelled a refinancing tool, based on the IRS page's "may make
   it easier to get a loan or mortgage". Pub 784 does not itself say "not for sales".
9. **Final section:** uses only owner-confirmed facts (own capital, local title company, seller
   picks the date, any condition, three-week close realistic). It warns that a 45-day IRS
   discharge lead time can make three weeks unrealistic. "Listing will often net more" mirrors
   the inherited-house guide's wording. It is judgment, not a sourced figure.
10. The brief says five existing claims carry topic `liens`. Two of them (the tax-deed claims)
    are used. The other three (id-disclosure-required-1-to-4-units, ada-eviction-forms-nonpayment-only,
    id-6-310a-remove-unauthorized-persons) are not about liens despite the tag, so they are not
    cited. Their `liens` topic tag looks wrong and may be worth cleaning up.

## Side effect
`scripts/research/extract-pdf-text.mjs` re-extracts EVERY PDF in the cache, so running it rewrote
all 40 files in data/idaho/raw/extracted/, not only the two new IRS ones
(c1f403f36733c54a.txt = Pub 783, 920a0746faa79610.txt = Pub 784). Same pdftotext, so the output
should be identical. Worth a diff if CI checks for drift.

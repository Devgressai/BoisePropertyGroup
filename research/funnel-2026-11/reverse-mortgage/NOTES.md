# reverse-mortgage: reviewer notes (2026-11-13)

Slug `reverse-mortgage-after-the-borrower-dies-in-idaho`, cluster `estate`, prefix `rv-`.
27 new claims, 11 new sources, 11 reused registry claims, 9 sections, about 2,570 words
(including headings and intro). `verify-quotes` reports every quote traced; all three
JSON files parse.

## Sources actually read (all cached under data/idaho/raw/cache/)

- 24 CFR 206.27, 206.55, 206.125 in full; 206.3 (definitions used: Borrower, Non-Borrowing
  Spouse, Eligible Non-Borrowing Spouse, Deferral Period, Principal residence); 206.129
  paragraph (d)(1) only. Current eCFR text through the renderer API. The eCFR versioner API
  lists no version of any of these sections dated after today.
- CFPB "With a reverse mortgage loan, can my heirs keep or sell my home after I die?"
  (en-242, last reviewed AUG 28, 2026).
- CFPB "What happens to my reverse mortgage when I die?" (en-2096, last reviewed JAN 02, 2025).
- CFPB "Are there different types of reverse mortgages?" (en-226, last reviewed JUL 11, 2022).
- CFPB "What is a reverse mortgage?" (en-224, last reviewed AUG 28, 2026).
- HUD "HUD FHA Reverse Mortgage for Seniors (HECM)" page (undated).
- HUD/FHA fact sheet "Inheriting a Home Secured by an FHA-insured Home Equity Conversion
  Mortgage", PDF, footer 9/2019, extracted to data/idaho/raw/extracted/ab3aff18d36501fd.txt
  (I ran pdftotext with the same flags as extract-pdf-text.mjs on this one file only, so
  as not to rewrite other topics' extractions).

Reused registry claims: ss-trustee-sale-deficiency-three-months, pb-letters-required,
pb-pr-may-sell-real-property, id-pr-powers-limited-by-will, pb-informal-appointment-120-hours,
pb-pr-possession-and-taxes, id-trustee-sale-120-day-notice, ft-sale-final-no-redemption,
ft-foreclosure-conditions, af-regx-scope, af-cfpb-housing-counselor-what-they-do.

## Things a reviewer should double-check

1. **"Lesser of the balance or 95 percent" is NOT in the regulation in those words.**
   24 CFR 206.125(a)(2)(ii) says the minimum sale amount is "determined by the Commissioner
   through notice" and "shall not exceed 95 percent of the appraised value". The HUD notice
   that sets the current amount (a Mortgagee Letter or Federal Register notice) was not
   fetched. The page therefore says the regulation caps the floor at 95 percent and
   attributes "at least 95 percent" to the CFPB and HUD consumer pages. If HUD has changed
   the working figure by notice, the page would not know.
2. **Keeping the house: the official sources disagree, and the page says so.** CFPB en-242
   (Aug 2026) and the HUD 2019 fact sheet say heirs who keep the home pay the FULL balance.
   CFPB en-2096 (Jan 2025) says heirs who keep it repay the lesser of the balance or 95
   percent. The regulation says "sell includes the transfer of title by operation of law".
   The page quotes all of them with dates and resolves nothing. An attorney familiar with
   HECM servicing should confirm that presenting the conflict this way is fair, or tell us
   which statement to drop. `rv-cfpb-heirs-lesser-of-balance-or-95-percent` is MEDIUM.
3. **Time limits: three sources, three wordings.** Regulation: 30 days from the date of the
   due and payable notice. CFPB 2026: 30 days from the notice, "might be possible" to extend
   "up to six months". HUD 2019 fact sheet: 30 days from the DEATH, lender "may approve
   90-day extensions". The page states the regulation as the rule and reports the other two
   as written. It never says how many extensions exist or that heirs "get" six months or a
   year. The six-month figure in 206.125(d) is the lender's deadline to START foreclosure
   and is written that way.
4. **Non-recourse wording.** 206.27(b)(8) speaks of "the borrower" (no personal liability,
   debt enforced only through sale of the property, no deficiency judgment against the
   borrower). The page quotes it and does not say "heirs can never owe anything". It then
   mentions Idaho Code 45-1512 as Idaho's general deed of trust statute and sends the
   interaction to an attorney. Check the tone of that paragraph.
5. **Non-borrowing spouse.** The page states the current 206.55 conditions and the CFPB's
   point that loans with FHA case numbers before August 4, 2014 follow a different process.
   The Mortgagee Optional Election process, the HUD Mortgagee Letters behind it, and the
   cure section 206.57 were not read and are not described. The CFPB also mentions a
   same-sex-couple marriage rule; it is in the CFPB page, not in 206.55, and is left out.
6. **The HUD fact sheet is seven years old** and its "Know Your Options" sentence is
   garbled in the PDF itself. It is used for four things only: the 95 percent sale, pay in
   full to keep, the 30 days / 90-day extensions, and taxes and insurance staying with the
   estate. One quote is joined with ellipses because the two-column layout interleaves
   sidebar text in the extraction; the passage is continuous in the original.
7. **Idaho assumptions.** The page does not say that Idaho HECMs are secured by deeds of
   trust. It says Idaho Code 45-1505 allows a deed of trust to be foreclosed by trustee's
   sale and gives the 120-day and no-redemption rules "in that process". A HECM secured by
   a mortgage, or a judicial foreclosure, would follow other statutes. Houses that pass
   outside probate (trust, survivorship, transfer on death) are not covered; the probate
   section is written as "where the house is part of a probate estate".
8. **Regulation X.** The reused claim af-regx-scope says 1024.38 through 1024.41 do not
   apply to reverse mortgage transactions "except as 1024.41(j) provides". The page carries
   the exception without explaining it. Successor-in-interest rules under Regulation X were
   left to the sibling page (inherited-mortgage) and not asserted for reverse mortgages.

## Could not source, so left out

- The current HUD notice fixing the minimum sale amount, the fixed-dollar closing cost
  cap, the number and length of extensions, and any Cash for Keys amount. (HUD Mortgagee
  Letters were not fetched. 206.125's 11 percent closing-cost cap is in a claim but not in
  the prose.)
- 12 U.S.C. 1715z-20 (the HECM statute) was not read. Everything rests on the regulation.
- Anything about proprietary (non-FHA) reverse mortgages at death. The page only says
  their own documents control.
- Whether the Idaho Department of Finance or Idaho Code regulates reverse mortgages
  separately. Not researched; nothing is asserted.
- Tax treatment of the payoff, forgiven balance or inherited basis. Left to a tax
  professional and to the sale-taxes page.
- HUD's current HECM page at /program_offices/housing/sfh/hecm/hecmhome returns an empty
  shell (cached as 9d1689a2018a7d95.html, unused). The working URL is
  /hud-partners/single-family-hecmhome.

## Housekeeping

- The public eCFR URLs in sources.json use the full hierarchy path (checked: HTTP 200);
  `retrievalUrl` is the renderer API URL that was actually cached.
- CFPB en-242 was first fetched at its old slug (cached 18516df403a5a308.html, a
  redirect) and again at the canonical URL (81d5b3068e6cb192.html). Same content.
- Links used: /guides/selling-a-house-in-probate-in-idaho,
  /guides/selling-an-inherited-house-in-idaho, /guides/idaho-foreclosure-timeline,
  /sell-inherited-house-idaho. No link to the other Wave 5 slugs.
- Business statements in the last section are limited to the owner-confirmed list. The
  page says our offer may be lower than the 95 percent figure, and that we cannot stop a
  foreclosure, negotiate with a servicer or obtain an extension.

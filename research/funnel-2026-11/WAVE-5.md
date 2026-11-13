# Wave 5 — addendum to BRIEF.md (2026-11-13)

Read `research/funnel-2026-11/BRIEF.md` first and follow every rule in it. This
file overrides it only where stated.

## Overrides
- Dates: `accessedDate`, `verifiedOn`, `published`, `updated` are all **2026-11-13**.
- The registry now holds ~455 residential claims. Search it before researching
  (`data/idaho/evidence/ada-claims.json`) and reuse existing claim ids freely.
- Writing: plain declarative sentences. **No em dashes.** No "it is not X, it is Y"
  constructions, no rhetorical questions in body text, no filler openers. Short
  paragraphs. Say the fact, name the section, move on.
- Avoid the phrases "a client", "our client(s)", "a customer", "our customers" anywhere
  in prose (a vocabulary guard rejects them even in innocent uses such as "a client
  trust account").
- The business cannot stop a foreclosure, negotiate with a lender, give legal or tax
  advice, or promise an outcome. Point to an Idaho attorney, a tax professional, or a
  HUD-approved housing counselor as fits.
- Source ids: lowercase always (`idcode-45-1506c`). Before naming a new source, check
  the registry (`data/idaho/sources/ada-county-sources.json`) for the same URL and
  reuse its id.

## Pages in this wave. You write ONE.
| Folder | Slug | Prefix | Cluster | Scope |
|---|---|---|---|---|
| inherited-mortgage | inheriting-a-house-with-a-mortgage-in-idaho | im- | estate | What happens to the mortgage when the owner dies: the federal due-on-sale exemption for a relative who inherits (12 U.S.C. 1701j-3(d), Garn-St Germain), "successor in interest" rights under Regulation X (12 CFR 1024.30(d), 1024.31, 1024.36(i), 1024.38(b)(1)(vi)), CFPB pages on inheriting a home with a mortgage, who can get loan information, that payments still fall due and a trustee's sale can follow if they stop, and the choices: keep paying / assume, sell, or let it go. |
| reverse-mortgage | reverse-mortgage-after-the-borrower-dies-in-idaho | rv- | estate | A reverse mortgage (HECM) when the last borrower dies: when the loan becomes due and payable (24 CFR 206.27, 206.125), the heirs' options and time limits, paying the lesser of the balance or 95% of appraised value, non-borrowing spouse rules if clearly sourced, non-recourse nature, CFPB and HUD pages. State only what the current regulation and current CFPB/HUD pages say. |
| bankruptcy | bankruptcy-and-foreclosure-in-idaho | bk- | distress | What filing bankruptcy does and does not do to a pending Idaho trustee's sale, strictly as described by primary sources: the automatic stay (11 U.S.C. 362) and that a creditor can ask the court to lift it, chapter 7 versus chapter 13 as the U.S. Courts describe them, curing mortgage arrears through a chapter 13 plan, selling a house while in bankruptcy needs the court/trustee (11 U.S.C. 363 or the U.S. Courts description), required credit counseling, Idaho's homestead exemption amount (existing claim id-homestead-creditor-175k), and the U.S. Bankruptcy Court for the District of Idaho. Heavily attributed; this is the page most at risk of sounding like advice. |
| code-violations | selling-a-house-with-unpermitted-work-in-ada-county | cv- | disclosure | Selling an Ada County house with unpermitted work or an open code-enforcement case: what Idaho's disclosure form asks about permits and code violations (read 55-2508's form text; existing id-disclosure-* claims cover the rest of the chapter), who issues building permits and enforces codes in Boise, Meridian, Eagle, Kuna, Star, Garden City and unincorporated Ada County (each from that jurisdiction's own site or code; never carry a rule across a city limit), whether a permit can be obtained after the fact where a primary source says so, and what an as-is sale does and does not change. |
| sale-taxes | taxes-when-you-sell-a-house-in-idaho | cg- | property-tax | Income tax on the sale (NOT property tax, which /guides/idaho-property-taxes-when-you-sell covers): the federal home-sale exclusion (IRS Topic 701, Publication 523: amounts, ownership and use tests), basis of inherited property (IRS Publication 551 / Topic 703: stepped-up basis), Form 1099-S reporting, how Idaho taxes capital gains from real property (Idaho State Tax Commission pages; Idaho Code 63-3022H capital gains deduction if it applies to this kind of property: read it and say exactly what it covers), and nonresident sellers if the Tax Commission addresses them. Read the CURRENT IRS and Tax Commission pages; state tax years explicitly. |

Internal links you may use: every path BRIEF.md allows, plus /sell-inherited-house-idaho,
/sell-house-as-is-idaho, /sell-house-before-foreclosure-idaho, /sell-rental-property-idaho,
/sell-or-keep-house-facing-foreclosure-idaho, /how-to-check-a-cash-buyer-in-idaho,
/cash-offer-vs-listing-idaho, /how-we-calculate-an-offer, and any existing guide under
/guides/ (list them from src/data/guides.ts; the five foreclosure guides published today exist).
Do NOT link to the other new slugs in this table.

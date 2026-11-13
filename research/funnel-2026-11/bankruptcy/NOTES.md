# NOTES: bankruptcy-and-foreclosure-in-idaho (prefix bk-)

Written 2026-11-13. 29 new claims, 15 new sources, 12 existing claims cited
(`af-uscourts-chapter-13-foreclosure`, `ft-rescheduled-sale-after-stay`,
`ft-stay-lifted-postponement-request`, `ft-sale-final-no-redemption`,
`ft-foreclosure-conditions`, `as-rescission-of-trustee-deed-invalid-sale`,
`id-trustee-sale-120-day-notice`, `af-cure-within-115-days`,
`id-homestead-creditor-175k`, `id-homeowners-tax-exemption-125k`,
`af-hud-counseling-free-or-low-cost`, `vb-cfpa-five-business-day-rescission`).
One existing source reused by id: `uscourts-chapter-13-basics` (three new claims
cite it; the merge needs to add them to its `claimsSupported`).
verify-quotes: 746/746 fully verified, 0 partial, 0 not found.
Word count about 2,650 including headings, slightly over the 2,500 guide length.

This is the page most likely to be read as legal advice. An Idaho bankruptcy
attorney should read it before it is published.

## What I could NOT source, and left out

- **Chapter 13 debt limits.** The U.S. Courts chapter 13 page gives $526,700
  unsecured and $1,580,125 secured. The 2024 Edition text of 11 U.S.C. 109(e) on
  govinfo shows $250,000 and $750,000 with an adjustment footnote. Two primary
  sources disagree, so no eligibility figure is on the page.
- **Filing fees, the means test, eligibility for chapter 7.** Not claimed. Fees on
  the U.S. Courts pages are undated.
- **When a trustee's sale counts as "sold" under 11 U.S.C. 1322(c)(1).** The
  statute does not say whether it is the bid, payment, delivery of the deed or
  recording. The page says so and points to an attorney. This is the single most
  consequential timing question for a reader and it is deliberately unanswered.
- **The procedure for selling a house in a bankruptcy case.** I read 363(b)(1),
  1303 and 1306(b) only. Not read: 11 U.S.C. 102(1) (what "after notice and a
  hearing" means), 363(f) (free and clear), 541 (property of the estate), 554
  (abandonment), 1327 (effect of confirmation), Fed. R. Bankr. P. 6004, and the
  District of Idaho's local bankruptcy rules. The page says a sale of estate
  property sits inside the case and says plainly that the procedure was not read.
  It does NOT say "court approval is always required", because no source read
  says exactly that.
- **Which exemptions apply to a debtor.** 11 U.S.C. 522 was cached but not
  analysed. The domicile rule in 522(b)(3) decides which state's exemptions apply
  and 522(p)/(q) can cap a homestead exemption. The page does not tell anyone the
  $175,000 figure applies to them.
- **How an Idaho homestead is established** (55-1001, 55-1004, automatic versus
  declared). Not read.
- **Effect of bankruptcy on credit, on a deficiency, on second mortgages or HOA
  liens, lien stripping, loan modification inside chapter 13, chapter 11 and 12.**
  Nothing.
- **Which court office handles an Ada County case, addresses, phone numbers.**
  The court pages read do not say. The page names the three office cities only.
- **Lists of approved credit counseling agencies.** Linked from the U.S. Trustee
  page; not fetched.
- **Idaho legal aid or the Idaho State Bar referral service.** Not fetched. The
  page relies on the U.S. Courts sentence that a person "may qualify for free
  legal services".

## Traps a reviewer should check

1. **Section 362(a) never says "foreclosure".** The page says so. The statement
   that the stay stops a foreclosure rests on the U.S. Courts chapter 13 page and
   on Idaho Code 45-1506A, which names 11 U.S.C. 362. If an editor shortens that
   section, keep the attribution.
2. **362(c)(3) "with respect to the debtor".** Courts have split on whether the
   30-day termination reaches property of the estate. I did not read the case
   law. The page uses the statute's own words. An attorney should confirm the
   wording does not overstate or understate the Ninth Circuit position.
3. **55-1005 speaks of "judgments obtained".** It does not mention a nonjudicial
   trustee's sale. The page says the section lists deeds of trust among the debts
   the homestead does not shield, and adds that the section does not name a
   trustee's sale. The heading "does not reach the deed of trust" is my summary;
   an attorney should confirm it is a fair one.
4. **"Idaho is one of them"** (states that replaced the federal exemptions) is my
   reading of 11-609, whose words are quoted directly after it.
5. **The 30 and 60 days in 362(e)** are court-handling deadlines. The page says
   they do not measure how long a stay lasts. Never let them be turned into "a
   filing buys 30 to 60 days".
6. **"Where we fit" says "talk to your bankruptcy attorney before any buyer".**
   That is direction to counsel, not a business promise. It also states the
   five-business-day cancellation right applies to a contract with us (existing
   claim `vb-cfpa-five-business-day-rescission`).
7. **362(d)(4) is included on purpose.** It names a transfer of an interest in
   real property without the secured creditor's consent or court approval. That is
   a risk for any buyer dealing with an owner in or near bankruptcy, the business
   included. The owner may want counsel's view on a standing rule for such deals.
8. **2024 Edition of the U.S. Code.** All Title 11 text is from govinfo's 2024
   Edition. Check the newest edition for amendments to 362, 363, 109, 1322 before
   each refresh.
9. **Credit counseling versus housing counseling.** Two different things with
   different approving agencies (U.S. Trustee Program versus HUD). The page keeps
   them apart.
10. **Court home pages are FAST-CHANGING.** `bk-idaho-bankruptcy-court-offices`
    is MEDIUM. The quote uses only "Our offices are located in Boise" from the
    office sentence because each city is a separate link in the HTML.

## Mechanics

- New topic tag `bankruptcy` is used on claims and sources. It is not in the
  registry yet.
- New federal source ids follow the existing `usc-15-1681c` pattern:
  `usc-11-362`, `usc-11-363`, `usc-11-109`, `usc-11-1322`, `usc-11-1303`,
  `usc-11-1306`. `amendmentHistory` is null for U.S. Code claims, as in the
  existing `as-fcra-*` claims.
- Cached but unused (no claim rests on them): 11 U.S.C. 522, the U.S. Courts
  "Process" page, the District of Idaho bankruptcy FAQ page (it covers
  electronic filing only).
- Three draft claims were cut for length and are not in claims.json: the chapter
  7 page's "catch up" sentence, 1322(b)(2) (no modification of a
  principal-residence loan), and the Process page's "often preferable" sentence.
- Internal links used: /guides/idaho-foreclosure-timeline,
  /guides/how-to-avoid-foreclosure-in-idaho,
  /sell-or-keep-house-facing-foreclosure-idaho.

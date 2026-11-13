# NOTES: how-to-avoid-foreclosure-in-idaho (prefix af-)

Written 2026-11-13. 41 new claims, 15 new sources, 1 existing source reused
(`idcode-45-1506`), 3 existing claims cited (`id-trustee-sale-120-day-notice`,
`vb-cfpa-written-notice-required`, `vb-cfpa-five-business-day-rescission`).
verify-quotes: 543/543 fully verified, 0 partial, 0 not found.

## What I could NOT source, and left out

- **No Idaho state mortgage-assistance program is mentioned.** I could not confirm
  from a 2026 primary source that any is open. Idaho Housing and Finance
  Association's homeowner page (cached 2026-11-13) lists no assistance or
  foreclosure-prevention grant program; it points to HUD-approved counseling and
  to the CFPB. The old Homeowner Assistance Fund address
  (`idahohousing.com/haf/`) now redirects to the IHFA home page (see the cached
  `.meta.json`, `finalUrl`). That is absence of evidence, not a sourced statement
  that the program closed, so the guide says nothing either way. I did not search
  the U.S. Treasury HAF pages.
- **Refinancing.** The only source is the word "Refinance" in the CFPB's list of
  options. The guide says so in one line and stops.
- **An ordinary (non-short) sale.** No statute read here says "a sale pays off the
  loan". The section rests on the CFPB's payoff-amount page and on 45-1506(10).
  The payoff-statement rule itself (12 CFR 1026.36(c)(3)) and reconveyance belong
  to the sell-or-keep page and were not read.
- **Deficiency after a short sale or deed in lieu, and tax on cancelled debt.**
  Not read (short-sale page's scope). The guide gives CFPB definitions and a pointer only.
- **Bankruptcy** beyond one attributed uscourts.gov paragraph: nothing on
  eligibility, cost, chapter 7 or credit effects.
- **FHA, VA and USDA loan programs.** HUD's page describes FHA loss mitigation; I
  left it out because it applies only to FHA-insured loans and I did not read the
  FHA program pages.
- **Small servicer definition** (12 CFR 1026.41(e)(4)) and the **trustee's fee
  limit** (45-1502(6)): referenced by the text I quoted, not read, not described.
- **Which Idaho document is the federal "first notice or filing".** The rule text
  does not name it. The guide does not say it is the notice of default. The
  timeline page may want to source this from the CFPB's official interpretation
  to 1024.41(f); I did not read it.

## Traps a reviewer should check

1. **Three different periods that look alike.** Federal 120 days of delinquency
   before the first filing (1024.41(f)(1)); Idaho's 120-day notice of sale
   (45-1506(2), existing claim); Idaho's 115-day cure period from the RECORDING OF
   THE NOTICE OF DEFAULT (45-1506(12)). The guide keeps them apart and says they
   start from different events. Please confirm no edit merges or adds them.
2. **45-1506(12) after day 115.** The statute gives a right to cure within 115
   days. It says nothing I read about curing later. The guide does not say the
   right ends, or that a lender must or must not accept a later reinstatement. HUD's
   generic line ("You have until the date of sale to ... pay the total amount
   owed") was deliberately NOT used for Idaho.
3. **One inference in the sale section:** "An owner's own sale therefore has to
   close before the trustee's sale takes place." It follows from 45-1506(10) (the
   trustee's deed conveys the grantor's interest) but is my sentence, not the
   statute's. Finality under 45-1508 was not read here.
4. **45-1506C applies only where the homeowner's exemption is on the tax roll for
   the year the notice of default is recorded**, and only to state or federally
   regulated beneficiaries and noncommercial loans. The guide states this. The
   30-day form deadline is a RECEIPT deadline by certified mail; the 45-day
   response and the bar on the trustee's sale depend on the form being returned on
   time. The bar lasts only until the beneficiary responds.
5. **Regulation X is procedural.** Every protection depends on a COMPLETE
   application and on day counts before a sale (45 / more than 37 / 90). The guide
   never says applying "stops" a foreclosure and quotes 1024.41(a) (no duty to
   offer any specific option). The exceptions in (g)(1)-(3) are paraphrased in
   prose; my quote for `af-regx-no-sale-while-pending` ends at "unless:" and the
   identical three exceptions are quoted under `af-regx-application-before-referral`
   ((f)(2), where the first exception is paraphrased, not quoted).
6. **eCFR currency.** I read only the "current" eCFR rendering on 2026-11-13
   (source notes end "90 FR 20792, May 16, 2025"). The CFPB has proposed changes
   to the loss mitigation rules in the past; I did not check the Federal Register
   for a final rule with a later effective date. `futureDatedAmendment` is `null`
   on the eCFR claims for that reason (same convention as the existing lead-paint
   claims). Paragraph (c)(2)(v) (COVID-19 options) is still in the text and unused.
7. **45-1506 cache is from 2026-09-09** (already in the repo). I re-fetched the
   live page on 2026-11-13 to a scratch file and the compiler's history note and
   subsection (12) text matched. Neither 45-1506 nor 45-1506C showed a
   future-dated version.
8. **Phone numbers in prose** (HUD (800) 569-4287, HOPE Hotline (888) 995-HOPE
   (4673)) come from an undated HUD page and a CFPB page last reviewed Sep 11,
   2024. Each is in a claim. Please re-check them before publishing. The business
   phone number is not in the guide.
9. **Dated CFPB pages.** The loan-modification definition page shows "last
   reviewed SEP 04, 2020". Short sale: Feb 2024. Counselor page: Sep 2024 (and
   contains the CFPB's own typo "though a HUD-approved agency", kept in the quote,
   not in prose). The can't-pay, forbearance and payoff pages show Aug 28, 2026.
10. **IHFA as a source.** It is a statutory housing finance association, not a
    state agency. I filed it as tier 2, `state-government`, MEDIUM. If that is
    outside rule 1's list, drop `af-ihfa-trouble-paying-points-to-counseling` and
    the one sentence that cites it in the housing-counselor section.
11. **The bulleted-list quote.** `af-cfpb-options-servicer-might-offer` quotes a
    bulleted list, so it reads without punctuation ("... include: Refinance Get a
    loan modification ..."). It verifies against the cache; a reviewer may prefer
    to display it differently.

## Merge housekeeping

- **Duplicate sources across the cluster.** Other folders created sources for the
  same URLs under different ids. I aligned where I could
  (`ecfr-12-cfr-1024-41`, `ecfr-12-cfr-1024-30`, `cfpb-what-is-a-payoff-amount`,
  `cfpb-what-is-a-short-sale`, `cfpb-hud-approved-housing-counselor`). Still
  different: mine `idcode-45-1506c` (lowercase, matching registry ids such as
  `idcode-63-602g`) vs the timeline folder's `idcode-45-1506C` (and a different
  URL casing, hence a different cache file); mine `cfpb-deed-in-lieu` vs
  `cfpb-ask-deed-in-lieu`; the short-sale folder also uses `cfpb-ask-short-sale`
  and `cfpb-ask-hud-housing-counselor`. Pick one id per URL at merge.
- `idcode-45-1506` is reused and not re-emitted in sources.json, per BRIEF. Its
  `claimsSupported` gains four af- claims once `sync-sources` runs.
- **Stray cache files I created and did not use** (left in place because the
  cache is shared with other agents working at the same time): `hud.gov/counseling`
  and `hud.gov/topics/avoiding_foreclosure` (both return an empty shell page);
  a second uscourts URL for the same chapter 13 page
  (`/services-forms/bankruptcy/...`); `idahohousing.com/haf/` and the IHFA home
  page (evidence for the program check above); the CFPB "How to avoid
  foreclosure" handout PDF (dated 9/2020, cached as PDF, text NOT extracted, not
  cited); CFPB "How does foreclosure work?" and "Find a housing counselor"
  (read, not cited); a second URL spelling of the CFPB payoff page.
- Internal links used (4): `/guides/idaho-foreclosure-vs-property-tax-delinquency`,
  `/sell-house-before-foreclosure-idaho`, `/cash-offer-vs-listing-idaho`,
  `/how-to-check-a-cash-buyer-in-idaho`. No links to the other new cluster slugs.
- Word count: about 2,550 including headings (about 2,460 body and intro), at the
  top of the brief's range. The federal-rule section is the densest and the
  first place to cut if the editor wants it shorter.
- Business statements in the final section are limited to the owner-confirmed
  list. "A listing may bring a higher price than we would offer" is a hedge, not a
  sourced fact, in the same spirit as the existing guides' closing sections.

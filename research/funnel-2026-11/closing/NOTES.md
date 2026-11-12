# closing — research notes (2026-11-12)

Slug: `how-a-property-sale-closes-in-idaho` · cluster `closing` · 27 new `cl-` claims · 23 new sources · reuses
`ada-recorder-maintains-ownership-documents`, `ada-recorder-pii-redaction-is-submitter-duty`,
`id-recording-act-lease-one-year-carveout` (and sources `ada-property-records`, `idcode-55-812`).

## Left out on purpose (could not source)

- **Real estate transfer tax.** I found no Idaho State Tax Commission page or statute saying Idaho does or does
  not impose one. Search turned up only bills: 2008 S1400 (intent language against a transfer tax) and 2006
  H0532 (a local-option residential transfer tax). Bill text is not enacted law. So the page says nothing about
  transfer tax. A seller will ask this, so it's worth finding a primary ISTC statement for v2.
- **Idaho nonresident-seller withholding.** 2006 H0460 proposed it. I didn't confirm it was enacted, so it's out.
- **Timelines, costs, title premiums, who pays which fee, tax proration.** None of these are sourced, so none
  appear. The only fee on the page is Ada County's $15.00 deed recording fee, and the page says it is not a
  statement of who pays.
- **Broker trust-account and earnest-money rules (Title 54 ch. 20).** Not researched. A direct sale with no
  broker doesn't run through them. If a reviewer wants an earnest-money section, it needs its own sourcing.
- **Department of Insurance consumer page.** I cached none. The regulator connection rests on statute text
  only (41-2704, 41-2707, 41-2711, 30-905).
- **Who licenses non-exempt escrow agencies.** The search result pointed to the Department of Finance, but that
  PDF is labelled "unofficial copy" and wasn't cached. The page doesn't name the Department of Finance.
- **Deed types (warranty / quitclaim / bargain and sale).** No Idaho statute read here defines them. The page
  covers only the "grant" covenants in 55-612.

## Traps a reviewer should check

1. **Commercial-registry duplicates.** `cl-deed-writing-subscribed-grantee-address`, `cl-recorder-records-open-without-charge`
   and `cl-idaho-non-disclosure-state` restate commercial claims `idaho-deed-content-requirement-omits-price`,
   `idaho-recorded-documents-are-public` and `idaho-is-a-non-disclosure-state`. Guides resolve only from the
   residential registry (`src/data/claims.ts`), so commercial ids can't be cited here. Source-id collisions:
   - The commercial registry uses `idaho-code-55-601` / `idaho-code-31-2419` at UPPERCASE URLs. I used
     `idcode-55-601` / `idcode-31-2419` at lowercase URLs (separate cache files, same text).
   - `canyon-county-assessor-faq` reuses the commercial id and URL exactly. At merge time, decide whether
     to unify.
2. **Non-disclosure source is Canyon County, not Ada.** The page attributes it explicitly. Ada's own assessor
   pages don't use the phrase. The page always pairs it with 31-2419 (records are open) and 55-601 (price not
   required). Never write "Idaho hides sale prices". Never cite "63-307A", which doesn't exist (see the
   commercial fabrication-guard claim).
3. **Ada deeds blocked online.** The Recorder lists Deeds among documents "currently blocked from viewing or
   downloading online". The cache is from 2026-09-09. I re-checked the live page on 2026-11-12 into a scratch
   file (not the cache) and the block and the $15.00 fee were both unchanged. Both are FAST-CHANGING. The
   `cl-ada-deeds-blocked-online` quote's second fragment is the rendered `<li>` list collapsed to one line.
4. **41-2714 closing protection names buyer, borrower or lender, but not the seller.** The page says so. Don't let
   an editor "fix" this into "you can buy closing protection".
5. **Acknowledgment is a recording condition, not a validity condition.** 55-815 makes unrecorded instruments
   valid between the parties. The page keeps the two apart. Title 55 ch. 7 (Acknowledgments) is REPEALED, so
   don't cite 55-7xx. The rules now live in Title 51 ch. 1.
6. **Remote notarisation (51-114A) is permitted, not guaranteed.** The page says whether a closing offers it is
   up to the closing agent.
7. **1099-S exception is about reporting, not tax.** The page says this. The IRS instructions page reads
   "Revised: 12/2026" even though it was accessed in November 2026 (continuous-use revision for 2026 filings).
   Re-check the revision line before publishing.
8. **FIRPTA 15% is the general rate.** The IRS lists exceptions and reduced rates ($300,000 / $1 million residence
   rules) that the page mentions but doesn't detail. The page doesn't decide who is a "foreign person".
9. **41-2708(3) discount carve-out** is limited to "a bona fide employee's residence". The page says "one narrow
   exception" and nothing more.
10. **41-2711 bond cap of $50,000 is per agent**, not per transaction. The page says so.

## Prose items to eyeball

- Final section: "listing it with an agent will often net more" is a judgement, not a claim. It matches the
  wording of the existing inherited-house guide. "A three-week close is realistic" is the owner-confirmed fact.
- The page has 2,381 words in 9 sections. Inline links: /how-it-works, /contact,
  /guides/idaho-seller-disclosure-when-selling-as-is.
- Future-dated amendments: none seen on any section page or chapter index read (55 ch. 6 and ch. 8, 51 ch. 1,
  41 ch. 27, 30-905, 31-2419).

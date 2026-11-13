# NOTES — foreclosure-rescue-scams-in-idaho (prefix fs-)

Dates: accessed / verified 2026-11-13. 32 new claims, 18 new sources. Reused: idcode-45-1602,
idcode-45-1603, ftc-mortgage-relief-scams (same FTC page, so no new source), and the vb-cfpa-*,
vb-ftc-* and id-trustee-sale-120-day-notice claims.

## What I could NOT source (left out of the page)

- **The start and end of "the foreclosure period."** 45-1602 says "the foreclosure period described in
  section 45-1506"; 45-1603 says property "in foreclosure as described in section 45-1505". Neither
  section defines a start date in words I could quote. The page repeats the statute's phrase, says
  45-1506 is the 120-day notice section (existing claim), and stops. It does not say when the
  period begins.
- **The Attorney General's Spanish-language notice form** (45-1602(2)). Not found on ag.idaho.gov.
  The page states the requirement only.
- **An Idaho AG web page specifically about foreclosure.** The statutory notice says the AG website
  is "another good source", but the current site has no foreclosure page I could find
  (/consumer-protection/foreclosure/ is a 404). The only AG foreclosure text is the Consumer
  Protection Manual PDF, footer "Rev. 03/21", p. 47.
- **Idaho Consumer Protection Act remedies (title 48 ch. 6).** Not researched. The page only says
  45-1605 routes penalties there.
- **HUD's own definition of an "approved" agency or "certified" counselor.** hud.gov pages are
  script-rendered; the cached HTML holds one paragraph and the phone number. "HUD-approved" is
  sourced from the CFPB page and the statutory notice instead.
- **A CFPB page titled "foreclosure relief scams".** The CFPB page used is "What are mortgage loan
  modification scams?" (last reviewed SEP 11, 2024).
- **NMLS Consumer Access / the Finance licensee lookup tool.** Not queried. The page cites the
  Department's instruction to use its lookup page and gives no URL.
- **Idaho Code 26-31-102** (where "department" is defined) was not cached. The Department of
  Finance's own page is the source for it being the licensing agency.
- Whether a report leads to recovery, and scam statistics of any kind. Nothing is said.

## Traps

1. **"Five days" vs "five business days."** The printed notice in 45-1602 says "five (5) days". The
   AG manual says "five-day right to rescind". The operative section 45-1603 says five (5) BUSINESS
   days, then "until the five (5) days have passed". The page states the difference and does not
   resolve it.
2. **Regulation O and home buyers.** The definition's item (6)(iii) carves out "a sale to a third
   party who is not the dwelling loan holder", but item (1) covers any paid service represented to
   stop a foreclosure. I drafted and then REMOVED a paragraph on this from the buyer section: it
   read as self-serving and edged into applying the rule. The definition is still claimed
   (fs-rego-mars-definition) if an editor wants it back, with the note attached.
3. **Advance-fee trigger.** 1015.5(a) turns on the consumer's signed agreement WITH THE LENDER OR
   SERVICER. The FTC and CFPB summaries say "accept the offer". Do not shorten to "until you sign".
4. **Idaho written-agreement rule (26-31-211(11)) is not a timing rule.** The timing rule is federal.
   Keep them in separate sentences.
5. **Attorney carve-outs exist in both regimes** (12 CFR 1015.7; Idaho Code 26-31-202(7)). The page
   states both so it does not imply every upfront legal fee is illegal.
6. **"Free" counseling.** FTC says "free", the Idaho notice says "free information", the CFPB says
   "often at little or no cost". Each is attributed; the page never promises free counseling.
7. **AG street address is flagged "temporary location"** on the page. Not printed. Phone numbers are.
8. eCFR: only the current text was read. No Federal Register search for pending amendments.
   `futureDatedAmendment: false` on the eCFR claims means "none in current eCFR text".

## Reviewer should double-check

- **Section "These Idaho protections also cover a contract to sell your house to a buyer."** It says
  "Nothing in that list excludes a company that buys houses, and that includes us. If you sign a
  purchase contract with us during the foreclosure period, the written notice and the
  five-business-day cancellation right in this chapter are yours." This follows the cluster brief
  ("INCLUDING ONE WITH US") but it is close to applying the statute, and it commits the business to
  attaching the 45-1602 notice to its contracts. The existing note on vb-cfpa-exclusions warns
  against "applies to cash buyers" phrasing. Owner and counsel should confirm the wording and that
  the purchase contract actually carries the notice.
- **"No government agency has approved or endorsed us, and we do not claim otherwise."** A business
  statement outside the owner-confirmed list. True as far as the registry shows, included because
  the assignment asked that the page not imply endorsement. Cut it if the owner prefers.
- **Final section** says a sale to us is "the wrong route if you can keep the home" and that
  listing "may bring a higher price than we would pay". Consistent with other guides, unsourced by
  design (claims: []).
- **Phone numbers in prose** (all claimed): AG 208-334-2424 and 1-800-432-3545; CFPB (855)
  411-CFPB (2372); HUD 800-569-4287. All FAST-CHANGING. The company's own number is not used.
- **Link label**: /sell-house-before-foreclosure-idaho exists in src/data/topic-pages.ts, but I did not read
  its content, so the link label is neutral ("covers that route").
- **Source id collisions.** Sibling foreclosure agents were caching some of the same URLs at the
  same time (CFPB find-a-housing-counselor, AG consumer protection, Finance home page). My ids:
  cfpb-find-a-housing-counselor, cfpb-mortgage-loan-modification-scams, hud-housing-counseling,
  idag-consumer-protection, idag-report-scams-idaho, idag-consumer-protection-manual,
  idfin-mortgage-licensing, idfin-complaint-guidance, ecfr-12-cfr-1015-{1,2,3,4,5,7},
  idcode-26-31-{201,202,203,211}. If another folder used a different id for the same URL, merge by URL.
- **claimsSupported on reused sources**: the new fs- claims that cite idcode-45-1602,
  idcode-45-1603 and ftc-mortgage-relief-scams need adding to those registry entries at merge
  (I did not edit the registry).
- **Word count is at the top of the range** (about 2,490). The licensing section is the easiest to
  shorten.
- The guide's quoted sentence from the notice ("Do not delay seeking advice...") and the heading
  "NOTICE REQUIRED BY IDAHO LAW" are verbatim from 45-1602 and covered by
  fs-cfpa-notice-heading-and-rescission-line.

## Cache housekeeping

- I ran `scripts/research/extract-pdf-text.mjs` once (it re-extracts every cached PDF); the new
  file is data/idaho/raw/extracted/9d31f71a8a669d9a.txt (AG manual).
- Fetched but unused, still in the cache: Idaho Code 26-31-204, 26-31-206, the 26-31 and 45-16
  chapter indexes, consumerfinance.gov/complaint/. I moved to the Trash five caches that were
  wrong or empty (two CFPB URLs that resolved to unrelated Ask CFPB pages, two empty hud.gov
  shells, and a duplicate whole-part eCFR render).

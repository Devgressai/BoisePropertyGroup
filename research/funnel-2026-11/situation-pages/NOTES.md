# Situation (BOFU) pages pass, 2026-11-18

Why: GSC (data to 11-16) had the situation pages indexed but ranking 38 to 72, reading closer to a
template than the place pages did after round 1. This pass gave as-is, inherited, rental,
before-foreclosure, divorce, liens, delinquent-taxes and manufactured Ada County and Idaho specifics,
a short "with us" section (owner-confirmed facts and the phone number only), query-targeted search
titles, and in-text links to every guide whose `sell` list names the page. /sell-land-idaho was left
alone on purpose (just split from its guide).

Most of the new substance REUSES approved claims that existed but were not cited on these pages
(probate, closing, foreclosure-timeline, sell-or-keep, code-violations, well-septic, sale-taxes).
13 new claims are in `claims.json` here, merged with
`node scripts/research/merge-place-research.mjs research/funnel-2026-11/situation-pages` (the script
now accepts a folder path). New residential source ids carry a `-res` suffix or a statute id
(idcode-55-208) so they cannot collide with commercial ids.

## Could NOT source (left out on purpose)

### Rental
- **Any Idaho rule requiring a landlord to tell tenants about a sale.** Not found and not stated.
  The page says only what 6-321 and 55-208 say.
- **Month-to-month notice.** 55-208 speaks of a "tenancy at will"; the page does not translate that to
  "month-to-month". Idaho's periodic-tenancy rules were not read.
- **Rent-increase notice.** Not researched. 55-307 was fetched on a guess and turned out to be about
  tenant fixtures; the cache copy was trashed.

### Manufactured homes
- **ITD's own titling procedure** (forms, fees, what ITD does with a title attached to a 63-304
  declaration). Not fetched. The page says only what 63-304(3) and 63-305(4) say.
- **63-302** (how a reverted home is assessed) not read; the page says "personal property again" only.
- **HUD data plate / certification label (24 CFR 3280) and Idaho DOPL installer and dealer rules.**
  Not used: neither changes how a sale of a home on owned land works.
- The Ada Treasurer page has a "Manufactured Home Auction" section (personal-property homes sold for
  tax). Not read beyond the heading; not cited.

### Inherited / probate
- **What an Ada County title company requires from an estate** (for example certified letters dated
  within N days). No primary source; still unsourced, same as the probate guide's note.
- The Recorder publishes no checklist for recording a personal representative's deed. The page builds
  the answer from 15-1-305A, 55-805, 15-1-305 and the Recorder's fee schedule, and says no more.

### Divorce
- The Ada County Clerk's family-law phone line is on the page but not printed (office routing changes).
- Nothing found on whether Ada County courts require a sale order before closing in an open case; the
  page says only that an order touching the house governs the sale (IRFLP 504/506).

### Before foreclosure
- The CFPA notice and five-business-day cancellation statement still awaits owner confirmation and was
  NOT added or expanded on this page.
- 12 CFR 1024.41 comment 41(f)-1 (whether Idaho's notice of default is the "first notice or filing")
  is still uncached; the page keeps the federal and Idaho periods separate and does not equate them.

### Delinquent taxes
- The Ada Treasurer counts its certified-mail window back from the HEARING; 63-1005 counts from the
  date the deed is to issue. Both are on the page, each attributed, never merged.
- Auction date was "TBD" on 2026-11-18; not stated.

## Re-read
- Ada Treasurer tax deed page and Recorder FAQ: county pages, SLOW-CHANGING. Re-read early 2027.
- The phone (208) 779-4247 is in prose on all eight pages; if it changes, grep topic-pages.ts.

# NOTES: deepen selling-a-rental-with-tenants-in-idaho (prefix rt2-)

Dates: accessed / verified 2026-11-26. 14 new claims, 10 new sources, 2 reused registry claims
(sp-rt-tenancy-at-will-one-month, sq-unlawful-detainer-tenant). 5 new sections, about 900 words.
verify-quotes: 21 strings for this file (14 quotes + 7 history notes) fully verified; whole run
1235/1235, 0 partial, 0 not found.

## Read before writing
The page itself (guide-content.ts), /sell-rental-property-idaho (topic-pages.ts) and
/guides/squatters-and-unauthorized-occupants-in-idaho. Not restated: 6-321 deposits, 55-812,
55-2504, 6-310A, the sheriff eviction steps, 6-316, the lock-change FAQ, Meridian utilities,
Boise STR repeal, IRS Pub 523. 55-208 and 6-303(1) are reused by id only, as the base for new material.

## New sources (none were in the registry; no existing-source claimsSupported updates needed)
idcode-55-301, idcode-55-303, idcode-55-304, idcode-55-306, idcode-55-209, idcode-6-304,
idcode-6-317 (all single-version pages, no future-dated amendment), idag-landlord-tenant-manual
(PDF, July 2026), hud-fair-housing-act-overview, boise-renter-protections.
Reused claims sit on existing sources idcode-55-208 and idcode-6-303; they already list them.

Cache side effects: running extract-pdf-text.mjs regenerated every file in data/idaho/raw/extracted/
(it has no per-file mode). New files: b67bb8c49ec0ce53.txt (AG manual) and 02638202591711a7.txt
(Boise 2023 tenant-rights PDF, cached but NOT cited). Check `git status` for unintended diffs there.
Also cached, not cited: title 6 ch 3, title 55 ch 2 and ch 3 tables of contents, 6-320, 55-210.

## Could NOT source (left out)
- **A statutory notice period for landlord entry.** Title 6 ch 3 and Title 55 ch 2-3 were scanned by
  section title and 6-320 / 55-210 read; nothing sets entry rules. The page attributes the position
  to the AG manual only and does not say "Idaho law is silent". Secondary sites claim "24 hours";
  the manual does not say that, so it is not used. 55-210 ("Right of reentry", 3 days' notice) is
  a forfeiture reentry right, NOT entry to show; never cite it for showings.
- **Fair Housing Act exemptions** (42 U.S.C. 3603(b), small-landlord / owner-occupied rules) were
  not read. The page says nothing about who is exempt.
- **CARES Act 30-day notice to vacate** (15 U.S.C. 9058(c)) for properties with federally backed
  mortgages was not researched; courts differ on its scope. An attorney should consider whether it
  belongs on this page.
- **Boise ordinance text** (Ord-35-23, Ord-37-23, Chapter 16) was not read; only the city's summary
  page. The 2023 Boise notice PDF lists a $30 application-fee cap; the current page says only
  "reasonable". Not used.
- Rent proration at closing, assignment of leases in a purchase contract: no primary source; left out.

## Traps / attorney review
1. **55-208 vs 55-304(2).** One month (tenancy at will) vs 30 days before nonrenewal (residential
   leases). The page presents both, attributed, and does not reconcile them. An Idaho attorney should
   confirm the framing. The AG manual states both side by side.
2. **55-306 vs Boise renter protections.** 55-306 (2025) bars local regulation of rent, fees or
   deposits. Boise's page still lists application-fee limits and a full-deposit-return presumption
   (the latter not used). The page says only that the effect on any Boise ordinance is an attorney
   question. Never write that a Boise ordinance is void. boise-renter-protections is FAST-CHANGING.
3. **Retaliation and a sale.** Boise lists "terminating a tenancy, refusing to renew" as potential
   retaliatory actions. The page does not say ending a tenancy to sell is or is not retaliation.
4. **6-304** is the service section for 6-303 notices. Whether it is the "manner prescribed by the
   code of civil procedure" that 55-208 refers to is not stated; the page does not link the two.
5. **6-317** trebling is discretionary ("may") and runs to landlord or tenant; kept that way.
6. **55-301 / 55-303**: remedies only; "assign" status in a given sale is not applied.
7. HUD page carries political enforcement text; only the scope sentence and class list are used.

## Placement
Two sections share insertAfter "Does an Idaho rental need the seller disclosure form?"; insert them
in array order (notice, then showings). The fair-housing section goes before "Selling occupied, in
practice". One new link: /sell-my-house-fast-boise-id. intro unchanged.

# well-septic — research notes (2026-11-12)

Page: `selling-a-house-with-a-well-or-septic-in-ada-county` · 23 new `ws-` claims · 15 new sources · reuses 7 registry claims (ada-septic-authority-cdh, boise-sewer-connection-required, id-domestic-water-13000-gpd, id-domestic-water-exclusions, ada-27-irrigation-entities, boise-project-five-districts, id-disclosure-form-covers-water-sewer-structure).

## Could NOT source (left out)

- **A CDH or DEQ rule requiring a septic inspection/evaluation at sale.** Didn't find one. IDAPA 58.01.03 (full text grepped for sale/transfer/convey/real estate/mortgage/lender) has no sale trigger, and neither CDH page has one. The page says "We did not find one ... as we read them". That's a statement about our search, not a quoted claim. **A reviewer should confirm with CDH (208-375-5211) before publishing.** Some Idaho health districts or counties may have local requirements. I checked only CDH, for Ada.
- **Any lender requirement.** None stated. The only lender language is CDH's: a mortgage survey is "often requested by a lender", and water testing is required "if required by lender or buyer". Both are attributed and hedged. No FHA/VA/USDA well or septic rules were researched or used.
- **What a CDH septic file contains, how long a records request takes, or whether pre-2000 Ada records exist.** Not stated on any live page.
- **Whether CDH acts as "the Director" under IDAPA 58.01.03.** The rule defines Director via Idaho Code 39-103 (DEQ). DEQ says districts administer the rules under an MOU. The page avoids saying CDH is the Director.
- **Septic system lifespan, replacement cost, drainfield setbacks.** Not used. The CDH setback PDF exists but wasn't needed.
- **Shared wells / well-sharing agreements.** IDWR mentions SB 1083a touching shared wells. Not researched further.

## Traps / things a reviewer must double-check

1. **CDH page changed between Sept and Nov 2026.** The registry source `cdh-septic` (cache 2026-09-09) shows an online "Septic System Search" with a note that records go back to 1971 and some pre-2000 Ada records are missing. **That section isn't on the live page as of 2026-11-12** (checked both CDH URLs). I didn't use it. Existing claim `ada-septic-authority-cdh` still verifies, and the same sentence is on the new page too. Anyone else reusing the 1971 note should be stopped.
2. **New CDH source URL.** I cached `cdh.idaho.gov/licenses-permits-inspections/water-septic-subdivisions/` fresh rather than force-refetching the registry URL. A force refetch would have overwritten the cache that existing claims rely on. The two URLs serve the same content family.
3. **42-1204 / 42-1205 were renumbered in 2026** (formerly 42-1208 / 42-1209, 2026 ch. 109). The old URL `sect42-1209` now 404s. Any existing site copy citing 42-1209 is stale.
4. **42-111 / 42-227 amended in both 2025 and 2026** (SB 1222 effective 2026-02-17). Re-verify on every refresh.
5. **42-248 scope.** The duty applies to rights "represented by decree ..., by claim ... or by permit or license". The page doesn't say whether a domestic well has such a record. It points to IDWR's search. The statute doesn't assign the duty to buyer or seller ("all persons owning or claiming ownership"), and the page doesn't either.
6. **Fees are FAST-CHANGING.** CDH mortgage survey $178 / $20 lab (July 2026 schedule), 42-235 $75, 42-248 $25/$100. Statutory fees are stable. CDH's reset each July.
7. **DEQ homeowner guide is dated January 2001.** It's MEDIUM confidence and used only for attributed recommendations (records, pumping interval). CDH still links it.
8. **ws-idwr-well-construction-search** elides the "(approximately 2″ by 3″)" parenthetical with `...`. The cache encodes ″ as `&Prime;`, which verify-quotes doesn't decode.
9. **Section "Does Idaho require a septic inspection before a sale?"** answers from absence of evidence. Wording is "We did not find one". Keep it that way. Never "Idaho does not require".
10. Owner-confirmed business facts only in the final section. "Listing may reach more buyers" is a hedge, not a claim.

## Side effects

- `node scripts/research/extract-pdf-text.mjs` regenerates every extracted PDF. Two new files appeared: `data/idaho/raw/extracted/45d12a413a1fc5e5.txt` (mortgage survey sheet) and `89f418bab865f61b.txt` (homeowner guide). Existing extractions were rewritten in place. `git status` showed no diffs on them.
- New raw cache files under `data/idaho/raw/cache/` for every URL in sources.json, plus chapter indexes (t42ch2, t42ch11, t42ch12), cdh `/about/contact/`, idwr `/wells/` and `/water-rights/transfers/` (fetched while looking; not cited).

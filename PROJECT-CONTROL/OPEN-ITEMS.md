# OPEN ITEMS

**Generated** 2026-09-10 by `scripts/validation/build-open-items.mjs`. Do not hand-edit
the derived sections; edit `MANUAL` in the generator.

Current state: **77 claims (77 approved) · 46 sources · 99 jurisdiction rows**

| # | Kind | Item | Owner | Note |
|---:|---|---|---|---|
| 1 | BLOCKER | Register boisepropertygroup.com | owner | Verified available 2026-09-09. Blocks canonical host, schema, sitemap. |
| 2 | BLOCKER | Legal entity name | owner | Blocks schema, footer, legal pages. |
| 3 | BLOCKER | Boise phone + business address | owner | Blocks NAP, LocalBusiness schema, trust architecture. |
| 4 | BLOCKER | New Resend API key (not a sibling's) | owner | Stale sibling keys fail silently. Blocks lead delivery. |
| 5 | BLOCKER | Real Idaho transactions / reviews | owner | Blocks trust architecture. Owner is actively buying, so real data should exist. |
| 6 | ASK | Free Census API key | owner | api.census.gov/data/key_signup.html. ACS 302s without one. Blocks the entire Housing dimension. |
| 7 | RESEARCH | Housing stock, tenure, vacancy, housing age | claude | Largest remaining evidence gap. Needs ACS. |
| 8 | RESEARCH | Search demand / keyword volume | claude | No tool available. Volume must stay null; do not fabricate. |


| 9 | UNRESEARCHED JURISDICTION | sewer | claude | No page may state who performs this function. |
| 10 | UNRESEARCHED JURISDICTION | building-permits | claude | No page may state who performs this function. |
| 11 | UNVERIFIED JURISDICTION | water-rights | claude | Authority named but not sourced — cities only. |
| 12 | THIN ENTITY | Hidden Spring | claude | 0 direct claims — below the 6 needed to differentiate a page. |
| 13 | THIN ENTITY | Garden City | claude | 5 direct claims — below the 6 needed to differentiate a page. |

**13 open items.**

## Gate status

- ADA COUNTY EVIDENCE GATE: **NOT RUN** — cannot pass while any WITHHELD CLAIM, PENDING SOURCE or UNRESEARCHED JURISDICTION row remains, and while the three review passes have not run.
- Phase 9 (municipality pages) is blocked by every THIN ENTITY row.

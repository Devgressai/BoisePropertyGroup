# OPEN ITEMS

**Generated** 2026-09-09 by `scripts/validation/build-open-items.mjs`. Do not hand-edit
the derived sections; edit `MANUAL` in the generator.

Current state: **75 claims (75 approved) · 45 sources · 92 jurisdiction rows**

| # | Kind | Item | Owner | Note |
|---:|---|---|---|---|
| 1 | BLOCKER | Register adapropertybuyers.com | owner | Verified available 2026-09-09. Blocks canonical host, schema, sitemap. |
| 2 | BLOCKER | Legal entity name | owner | Blocks schema, footer, legal pages. |
| 3 | BLOCKER | Boise phone + business address | owner | Blocks NAP, LocalBusiness schema, trust architecture. |
| 4 | BLOCKER | New Resend API key (not a sibling's) | owner | Stale sibling keys fail silently. Blocks lead delivery. |
| 5 | BLOCKER | Real Idaho transactions / reviews | owner | Blocks trust architecture. Owner is actively buying, so real data should exist. |
| 6 | ASK | Free Census API key | owner | api.census.gov/data/key_signup.html. ACS 302s without one. Blocks the entire Housing dimension. |
| 7 | RESEARCH | Housing stock, tenure, vacancy, housing age | claude | Largest remaining evidence gap. Needs ACS. |
| 8 | RESEARCH | Search demand / keyword volume | claude | No tool available. Volume must stay null; do not fabricate. |
| 9 | RESEARCH | Boise deep dive | claude | Phase 2 step 05. Not started as a distinct dossier. |
| 10 | WRITE | Municipal research dossiers (6) + Ada County dossier | claude | research/idaho/ada-county/municipalities/*.md — not written. |
| 11 | WRITE | City content blueprints (7) | claude | Phase 2 steps 31/40/41 — not written. |
| 12 | WRITE | Property-type and seller-situation opportunity maps | claude | Phase 2 steps 21/22 — not written. |
| 13 | WRITE | Master research report + machine-readable manifest | claude | Phase 2 steps 43/44 — not written. |
| 14 | REVIEW | Second-pass independent review | claude | Phase 2 step 39 — not run. |
| 15 | REVIEW | Third-pass adversarial review | claude | Phase 2 step 40 — not run. |
| 16 | REVIEW | Factual red-team + search-quality red-team | claude | Phase 2 steps 36/37 — not run. |


| 17 | UNRESEARCHED JURISDICTION | building-permits | claude | No page may state who performs this function. |
| 18 | UNVERIFIED JURISDICTION | water-rights | claude | Authority named but not sourced — cities only. |
| 19 | THIN ENTITY | Hidden Spring | claude | 0 direct claims — below the 6 needed to differentiate a page. |
| 20 | THIN ENTITY | Garden City | claude | 5 direct claims — below the 6 needed to differentiate a page. |

**20 open items.**

## Gate status

- ADA COUNTY EVIDENCE GATE: **NOT RUN** — cannot pass while any WITHHELD CLAIM, PENDING SOURCE or UNRESEARCHED JURISDICTION row remains, and while the three review passes have not run.
- Phase 9 (municipality pages) is blocked by every THIN ENTITY row.

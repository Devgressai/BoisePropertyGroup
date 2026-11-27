# Wave 8 — DEEPEN existing pages (2026-11-26)

Read `BRIEF.md`, then `WAVE-6.md`. Their overrides apply here: the dates, the banned phrases and the writing rules.

Wave 6 extended the allowed business facts, and they are owner-confirmed:
- we buy with an occupant still in the house;
- we buy from trustees and co-trustees;
- we buy in flood zones.

You do NOT write a new page. You add new sourced sections to ONE existing page.

**Before you start.** Read that page in full, from `src/data/guide-content.ts` or `src/data/topic-pages.ts`. Read every page it links to as well. Do not restate what those pages already say. Bring facts the site does not yet have, on sub-topics the page does not cover.

## Deliverables, all in `research/funnel-2026-11/<folder>/`

1. **`sources.json` and `claims.json`.** Same shapes and rules as in `BRIEF.md`. Every quote must pass `verify-quotes`.
2. **`additions.json`:**
   ```json
   { "page": "<slug>", "file": "guide-content.ts|topic-pages.ts",
     "sections": [ { "insertAfter": "<existing heading, or null for before the closing 'Where we fit'/'with us' section>",
                     "heading": "...", "body": ["..."], "claims": ["ids"] } ],
     "introAddition": null }
   ```
   - 3 to 5 new sections, about 500 to 900 words in total.
   - Question headings where natural; the first sentence of each section answers the question.
   - Only `[label](/path)` links to existing paths.
3. **`NOTES.md`.** What you couldn't source, traps, and anything an attorney should read.

Do not edit `src/`, `data/idaho/evidence`, `data/idaho/sources` or `scripts/`. Do not commit.

## Pages. You deepen ONE.

| Folder | Page | Prefix | Uncovered ground to research |
|---|---|---|---|
| deepen-manufactured | guide `selling-a-manufactured-home-in-idaho` | mh2- | 1. Titling a manufactured home that is personal property: Idaho Transportation Department title transfer, the forms and fees ITD publishes, and who signs. 2. Selling a home sitting in a manufactured home park: the Idaho Manufactured Home Residency Act (Title 55 ch. 20). Cover the park's rights over a sale or a buyer, any notice or approval rules, and whether a buyer can keep the home on the lot. Quote the sections. 3. Property tax on a manufactured home as personal property, if the Tax Commission or Ada County publishes it. 4. HUD data plate and label, if a HUD primary source covers it. |
| deepen-rentals | guide `selling-a-rental-with-tenants-in-idaho` | rt2- | 1. Ending a month-to-month tenancy before a sale: Idaho notice periods (Title 6 ch. 3 / 55-208 as applicable). Quote them exactly, including any longer notice an amendment added. 2. Whether a landlord may enter to show the house: what Idaho statute says, or say plainly that it is silent if it is. 3. Federal fair housing basics for a landlord selling with tenants, only if HUD has a page that fits. 4. Holding over after a lease ends (6-303). 5. Boise or Ada County rental-specific rules, if any primary source has them. |
| deepen-land | sell page `sell-land-idaho` (topic-pages.ts) | ld2- | Read `/guides/selling-land-or-acreage-in-ada-county` first and do not restate it. This is the SELL page, so research transaction-side facts: 1. Idaho water rights transfer on sale and IDWR notice of change in ownership (form, deadline, fee). Reuse the existing ws- claims and add only what is missing. 2. Agricultural land property tax exemption and what happens on sale or change of use (Idaho Code 63-604 and neighbours, quoted). 3. Selling a portion of a parcel versus the whole: when Ada County or a city requires a split or plat first. Reuse the existing claims and add only what is new. 4. Recording a land sale, plus any vacant-land disclosure difference (55-2504 applies only to residential). |
| deepen-codeviolations | sell page `sell-house-code-violations-idaho` (topic-pages.ts) | cv2- | Read `/guides/selling-a-house-with-unpermitted-work-in-ada-county` first and do not restate it. Research: 1. How to legalise unpermitted work after the fact, per city where a primary source describes it (Boise, Meridian, Eagle, Kuna, Star, Garden City, Ada County). This covers "as-built" permits, retroactive inspection and opening walls, if stated. 2. Whether an open code-enforcement case or a recorded notice of violation can be recorded against title in Ada County or a city, citing the code that allows it. 3. Nuisance abatement liens: a city cleaning up a property and charging the cost as a lien or on the tax roll (Idaho Code 50-334 and per-city codes). 4. Getting a property's permit history: public records request processes per city, adding only what is new. |

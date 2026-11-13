# Redesign, 2026-11-13 (branch `redesign-2026-11`)

Compact record: what was found, what was decided, what was checked.

## Audit findings that drove the work
1. **All four site photographs were generated.** `hero-foothills.webp` was captioned as the Boise foothills; the people images showed people who do not exist. No authentic photography exists for this business.
2. **No navigation on phones.** Below 1024px the header showed only the logo and the offer button.
3. **The hero headline did not say what the business does or where.** That lived in the eyebrow and lede.
4. **Step 1 of the form sends the address, and the page did not say so** before the button was pressed (the privacy policy did).
5. **Calculator:** slider only (no typed value, no reset); announced every slider movement to screen readers; said "every direct buyer" uses the same four lines; showed "Your closing costs $0" in a sale to us, which the owner has not confirmed; did not say it applies to houses only.
6. **Button label "See what we'd offer"** suggested an instant figure. The form produces a request, not an offer.
7. **No way back from step 2** to fix a mistyped address; failures had no phone fallback; no request timeout.
8. **Homepage order** put seller hardship first and listed 22 guides in full.
9. The closing band promised "comparable sales" on every page, including commercial pages where that is not how value is found.

## Direction chosen
Three were considered: photo-led split (rejected: no authentic photo), map-led (rejected: would need drawn boundaries), and **worksheet-led editorial** (chosen). The picture in the hero is the product: an example offer worksheet, labelled "Example only", beside the address field, on the existing stone and ink palette with the brass accent. Type, tokens and components are unchanged; this is a recomposition, not a repaint.

## Asset manifest
| Asset | Provenance | Status |
|---|---|---|
| `public/images/hero-foothills.webp` | Generated | **Removed** |
| `public/images/people-kitchen-table.webp` | Generated; people not real | **Removed** |
| `public/images/keys-handover.webp`, `porch-conversation.webp` | Generated; unused | **Removed** |
| `public/og.jpg` | Drawn in HTML from the site's own type and the example worksheet | Replaced; no photograph |
| `src/app/icon.svg` | Drawn monogram | Kept |
| Example offer worksheet | Computed from `src/lib/offer-math.ts` for one stated example | Labelled "Example only" and "Not your property" |

Real photography (an owner portrait, a property the business actually bought, a local street the owner photographed) would go in the hero's right column and in the "Who you are dealing with" section. None may be generated.

## Calculator assumptions (unchanged; owner-set 2026-11-13)
Repairs 2 / 6 / 12.5 / 20% of finished value by condition; months held 2 / 3 / 4 / 6; holding and resale = value × (2% + 0.35% × months); margin 9% of value. Listing columns assume 5% commission and 1% seller closing costs, stated on the page as assumptions. The ± 4% band is a rounding band, stated as not a forecast. The value input is clamped to $150,000 to $1,500,000 and rounded to $1,000. The result is labelled an illustration, not an estimate of the visitor's property and not an offer, and the page says it covers houses and small rentals only.

## Lead flow (states)
1. **Address step.** Sends `{step 1, address, context, page}` to `/api/offer`, which sends one email. Not a completed enquiry; the email now says so. A parcel number and city is accepted.
2. **Contact step.** Name, phone and consent required; the rest optional. "Change" returns to step 1 with everything kept; an unchanged address is not re-sent; a corrected one reuses the lead id.
3. **Accepted.** The thank-you shows only after the server returns success. A failure, or no answer in 20 seconds, shows a retry message with the phone number and keeps every value.
4. **Qualified enquiry.** Decided later by the business; nothing on the site records it.

Nothing is sent to our server on keystroke or blur. Address suggestions go to Google as the privacy policy says. No analytics, pixels or cookies were added. Consent wording is unchanged.

## Checks performed (local, mocked backend; no real lead was sent)
- `tsc`, `vitest` (105 tests, including calculator bounds and bad input), `npm run check:local`: pass.
- 28 scripted interaction checks: empty, failed, retried and double-clicked submissions, Back, lead-id reuse, payload contents, no personal data in the URL, mobile menu open / Escape / focus return, calculator typed input, clamping, keyboard slider, reset, and no horizontal overflow at 320, 360, 430, 768, 1024 and 1440px across 11 routes. All pass.
- axe-core (WCAG 2.0, 2.1 and 2.2 A and AA rules) on 9 routes at 390 and 1440px: 0 violations. Automated rules only.
- Not done: a manual screen-reader pass, 200% zoom by hand, real-device keyboard behaviour, the 20-second timeout path (written, not exercised), field Core Web Vitals, a before/after lab performance run.

## Open decisions for the owner
- Authentic photography (see above).
- A name or face for "Who you are dealing with". The site is anonymous by the owner's decision.
- Whether the seller pays any closing costs in a sale to us. Until confirmed the page says they are stated in the written offer.
- Legal entity, email and street address remain unset.
- Conversion measurement: none is installed and none was added. A privacy-compatible option needs an owner decision and a privacy-policy change in the same commit.

## Rollback
The work is one branch. Do not merge it, or revert the merge commit. Removed images remain in git history.

# Foreclosure cluster — addendum to BRIEF.md (2026-11-13)

Read `research/funnel-2026-11/BRIEF.md` first and follow every rule in it. This
file overrides it only where stated.

## Overrides
- Dates: `accessedDate`, `verifiedOn`, `published`, `updated` are all **2026-11-13**.
- `cluster` is **"distress"** for every guide in this cluster.
- The registry now holds ~300 residential claims, not 127. Search it before researching.
- Writing: plain declarative sentences. **No em dashes.** No "it is not X, it is Y"
  constructions, no rhetorical questions in body text, no filler openers. Short
  paragraphs. Say the fact, name the section, move on.
- The business CANNOT stop a foreclosure, negotiate with a lender, give legal or tax
  advice, or promise an outcome. Say so where relevant. Point to an Idaho attorney and
  to a HUD-approved housing counselor (only if you source what that is).
- Phone number is public now: (208) 779-4247. Do not put it in guide prose.

## Existing claims you should reuse (do not duplicate)
id-trustee-sale-120-day-notice, id-trustee-sale-publication, id-trustee-sale-service-attempts
(all Idaho Code 45-1506) · id-disclosure-exempt-foreclosure (55-2505) ·
vb-cfpa-legislative-findings (45-1601), vb-cfpa-written-notice-required (45-1602),
vb-cfpa-five-business-day-rescission (45-1603), vb-cfpa-exclusions (45-1604),
vb-cfpa-penalties-title-48 (45-1605), vb-ftc-equity-skimming (source ftc-mortgage-relief-scams) ·
id-tax-deed-three-year-delinquency, id-tax-deed-redemption-fourteen-months ·
id-homestead-creditor-175k. Look each up in data/idaho/evidence/ada-claims.json for exact wording.

## The cluster (so pages do not overlap). You write ONE of these.
| Folder | Slug | Prefix | Scope |
|---|---|---|---|
| avoid-foreclosure | how-to-avoid-foreclosure-in-idaho | af- | The OPTIONS, in the order they become available: talk to the servicer, repayment plan, forbearance, loan modification, reinstatement/cure, refinance, sale, short sale / deed in lieu (one paragraph, pointer only), bankruptcy (one attributed paragraph, pointer only), housing counselors. Federal servicing rules (12 CFR 1024.39, 1024.41), Idaho's loan-modification notice (45-1506C) and cure right (45-1506(12)). |
| foreclosure-timeline | idaho-foreclosure-timeline | ft- | The nonjudicial PROCESS step by step with every day count: 45-1502/1503, 45-1505, 45-1506, 45-1506A, 45-1506B, 45-1506C, 45-1507, 45-1508, plus the federal 120-day delinquency rule (12 CFR 1024.41(f)). When judicial foreclosure applies instead. Where notices are recorded (Ada County Recorder). |
| short-sale-deed-in-lieu | short-sale-vs-deed-in-lieu-in-idaho | ss- | What a short sale and a deed in lieu are (CFPB/HUD definitions), that both need the lender's agreement, deficiency exposure in Idaho (45-1512, and 6-101/6-108 for mortgages), federal tax treatment of cancelled debt (IRS Topic 431, Pub 4681, Form 1099-C: read the CURRENT pages and state exactly what is in force for 2026), disclosure exemption for a deed in lieu. |
| after-foreclosure-sale | after-a-foreclosure-sale-in-idaho | as- | What happens AFTER the trustee's sale: finality and no redemption (45-1508), possession on the tenth day (45-1506(11)), how sale proceeds and any surplus are distributed (45-1507), deficiency judgment limits (45-1512), tenants (federal Protecting Tenants at Foreclosure Act: source it from a federal primary source), credit reporting period (source from CFPB or the statute). |
| foreclosure-scams | foreclosure-rescue-scams-in-idaho | fs- | Foreclosure rescue and mortgage relief scams: Idaho Consumer Foreclosure Protection Act (reuse the vb-cfpa claims; add 45-1602's notice wording if not already claimed), the federal advance-fee ban (Regulation O, 12 CFR part 1015), FTC and CFPB warnings, Idaho Attorney General and Idaho Department of Finance material, where to report. |
| sell-or-keep | sell-or-keep-house-facing-foreclosure-idaho | sk- | MOFU DECISION page (merged with `--as decision`): "Should you sell the house to avoid foreclosure?" When a sale works (the sale pays off the loan: payoff statement right under 12 CFR 1026.36(c)(3), reconveyance on satisfaction under Idaho Code Title 45 ch. 12 / 45-1514 if applicable), when keeping it is the better route (cure, modification), when a sale needs the lender (short sale), how the time needed compares with the notice period, and the five-business-day cancellation right that applies to a contract signed during the foreclosure period, INCLUDING ONE WITH US. Title ≤ 55 chars for this one. Final section says plainly when not to sell to us. |

Internal links you may use: every path BRIEF.md allows, plus
/sell-house-before-foreclosure-idaho, /how-to-check-a-cash-buyer-in-idaho,
/cash-offer-vs-listing-idaho, /how-we-calculate-an-offer,
/guides/idaho-foreclosure-vs-property-tax-delinquency,
/guides/liens-and-judgments-when-selling-in-idaho. Do NOT link to the other new
slugs in the table (they do not exist yet; the editor adds those links after merge).

If two agents need the same Idaho Code section, both may create a source with the
conventional id (`idcode-45-1512`); the merge dedupes sources by id. Claim ids must
carry your own prefix.

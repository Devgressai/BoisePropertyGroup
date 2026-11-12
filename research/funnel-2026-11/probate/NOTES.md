# Probate guide — reviewer notes

Slug: `selling-a-house-in-probate-in-idaho` · cluster `probate` · 27 new claims (`pb-`), 26 new sources.
Reused existing claims: `id-pr-power-over-title`, `id-pr-powers-limited-by-will` (stated together, section 5 and again in section 6), `ada-treasurer-ex-officio-public-administrator`, `ada-recorder-maintains-ownership-documents`, `ada-homeowners-exemption-deadline`.
Reused existing source: `idcode-15-3-715` (new claim `pb-pr-may-sell-real-property` cites it). Its `claimsSupported` in the registry will need the new id added at merge time. I did not edit the registry.

## Could NOT source (left out on purpose)

- **What a title company asks for.** Nothing primary says what an Idaho title insurer requires from a personal representative (certified letters, how recent, a recorded copy, etc.). The page says this outright and tells the reader to ask the title company. 15-1-305 (clerk issues certified letters showing the appointment date) and 15-1-305A (letters *may* be recorded) are the only related statements made.
- **How long Ada County probate actually takes.** No court statistic was found. The 5-day / 120-hour figures are statutory *minimums* before the registrar may act. They are not processing times, and the page frames them that way.
- **Filing fees, forms, and Ada County probate filing location/room.** The Idaho court self-help site (courtselfhelp.idaho.gov) has no probate form category. Ada County's Court Assistance pages carry only the small-estate affidavit and a creditor claim form. Fees not stated.
- **Whether a sale must wait for the creditor period.** No statute says it must. The page describes the text: 15-3-711's power is not written as conditional on it, closing under 15-3-1003 requires it, and the power is held in trust for creditors. The decision is left to the PR and their attorney. Review that this reads as description, not advice.
- **Bond requirements**, the 15-3-902 priority order, 15-3-1004 distributee liability, the state-tax claim clock (15-3-803(d)), and the medical-assistance notice (15-3-801(d)) are mentioned only in passing or not at all, without claims.
- **15-3-1203 summary administration** (estate not exceeding exempt amounts) was read but left out to keep focus.

## Traps

- **Venue follows domicile, recording follows the property.** 15-3-201 vs 15-1-305A. The page states both and contrasts them. Do not let an editor "simplify" to "file probate where the house is".
- **Idaho registrar = judge** (15-1-307), unlike the model UPC. "Informal" ≠ "no judge". I removed an unsourced line about the model UPC's clerk-registrar.
- **15-3-401 freezes distribution, not every power.** Never write that a will contest "freezes the sale".
- **15-3-714 protects the buyer, not the PR.** It must keep the endorsed-on-letters exception, and it must not be read as letting a PR ignore a will restriction.
- **15-3-803(e)(1).** A mortgage or lien on the house is not cut off by the creditor bar. This is stated on the page.
- **Small-estate affidavit and real estate.** 15-3-1201's text covers debts, tangible personal property and instruments; it never mentions real property. "Did not own real estate" comes from **Ada County's guidance page**, not the statute, and the page attributes it that way. Threshold wording differs: statute says "does not exceed $100,000", county says "less than $100,000". The page quotes the statute for the number.
- **15-3-801 notice is permissive ("may publish")** in the text. The page says so.
- **15-3-1205 debt assumption** is always stated with the spouse route.
- **Ada magistrate page names individual judges.** None are published.

## Future-dated amendments

The 2026 session subject index (legislature.idaho.gov/sessioninfo/2026/legislation/, cached) lists one PROBATE bill: **S1240, Session Law Ch. 79, effective 01/01/2027** (Uniform Guardianship, Conservatorship and Other Protective Arrangements Act). I read the PDF via pdftotext into scratch. I did not run extract-pdf-text.mjs because nothing from it is quoted. It repeals and replaces chapter 5 and amends **15-1-201** (one definition) plus non-Title-15 references. It amends none of the sections cited here, so every claim is `futureDatedAmendment: false`. I deliberately avoided citing 15-1-201 because it is being amended. Reviewer: I checked only the subject index's PROBATE heading. Please confirm no other 2026 bill touches Title 15 chapter 3 or 15-1-305/305A/307.

## Double-check

- `pb-fourth-district-ada` is MEDIUM. The four-county list comes from the district site's service notices (interpreters, ADA, records), not from a formal statement of district composition. The page is mostly JS and has little text.
- The history note for 15-3-801 on the live page reads "added 1971 ... am. 1991 ... am. 1998". It is copied as shown.
- The word count (~2,460) is near the top of the 1,500–2,500 band.
- Link `/guides/selling-an-inherited-house-in-idaho`: the page links once and does not repeat the disclosure-exemption analysis. It defers to that guide.

# NOTES: selling-a-house-in-a-living-trust-in-idaho (prefix lt-)

Dates: accessed / verified 2026-11-26. 18 new claims, 18 new sources, 11 reused registry claims.
verify-quotes: every quote and amendment history fully verified, 0 partial, 0 not found.
Word count about 1,780. Title 42 characters, description 157.

Reused claims: dv-revocable-trust-community, id-disclosure-exempt-estate-fiduciary,
cl-record-in-county-where-situated, cl-acknowledgment-required-to-record, cl-deemed-recorded-on-deposit,
cl-recorded-conveyance-constructive-notice, cl-ada-deed-recording-fee, ada-recorder-no-forms-no-deed-mailed,
ada-assessor-ownership-from-recordings, pt-homestead-death-carryover, ada-homeowners-exemption-deadline.

Reused sources (already in the registry, so NOT in sources.json). The merge must append these claim ids
to their claimsSupported:
- idcode-63-701: lt-homestead-owner-includes-trust-beneficiary
- idcode-63-602g: lt-homestead-trust-proof-affidavit (also cites new idcode-63-703)
- ada-assessor-homeowners-exemption: lt-ada-assessor-reapply-trust-transfer
- ada-property-records: lt-ada-recorder-trust-document-types

Multi-section claims carry each section's history note joined with " ... " (verify-quotes treats each
part as a fragment). All statute pages were fetched with fetch-source.mjs; each shows one version and no
future-dated text. 63-703's cache file was first written 2026-11-12 by another run; the text was re-read.
Title 68 and 15-7 index pages and 15-7-101/301/302/402 were cached while navigating and are not cited.

## What I could NOT source (left out)

- **"A trust avoids probate."** No Idaho primary source read says this in those words. Idaho's court
  self-help site has no probate page; the Ada County small estate page does not mention trusts. The page
  quotes 15-6-201 ("deemed to be nontestamentary", creditors' rights preserved) and sends the probate
  question to an attorney. A reviewer should confirm the 15-6-201 framing is acceptable; it is the
  weakest link in the section.
- **Whether the settlor is usually the trustee, or a successor is usually named.** No source. The page
  avoids "usually".
- **Trust registration (15-7-101).** The statute says a trustee "shall register" the trust. Whether that
  matters to a sale, and how revocable trusts are treated in practice, was not sourced. Not discussed.
  15-7-303 mentions "the court in which the trust is registered"; quoted verbatim, not explained.
- **What a title company will actually require** (full trust, certification, recorded successor-trustee
  affidavit, death certificate). No primary source. The page says the title company sets its own
  requirements and cites 68-116/68-118 for its right to ask for more.
- **Whether a successor trustee must record anything before selling.** The Ada Recorder lists "Affidavits
  regarding Trusts" and "Appointment of Successor Trustee" as recorded types; no source says either is
  required. Stated as a list only.
- **Federal tax (basis step-up, Section 121 for trusts).** Not researched. Nothing said.
- **Revocation, amendment or pour-over wills.** Not researched.
- **Irrevocable trusts.** Out of scope; the powers act applies to trusts generally, but the page frames
  everything around a revocable living trust.

## Traps

1. **68-106 is "subject to subsections (a) and (b)" and to the trust instrument (68-105(a)).** Never
   say a trustee may sell freely.
2. **68-109(a) majority rule is for three or more trustees.** Two co-trustees: the section is silent.
3. **Certification of trust is optional for the recipient** (68-114(1), 68-118). The heading of 68-114
   says "Form" but no form is printed. Do not claim an Idaho statutory form.
4. **68-110 and 68-117 protect the buyer**, not the trustee.
5. **15-7-303 is a duty to inform**, not a consent requirement.
6. **Disclosure exemption 55-2505(7)** ("a fiduciary in the course of the administration of ... a
   trust"): whether a living settlor-trustee selling their own home is "administering" a trust is a legal
   judgment. The page says so and does not apply it.
7. **Homestead carryover after death (63-602G)** is conditioned on the homestead continuing "to be a part
   of the owner's, beneficiary's ... estate". Whether trust property counts as the decedent's "estate"
   for this sentence is unclear; the page quotes it and points to the Assessor.
8. **63-703(4)'s "January 1 or before April 15"** is the circuit-breaker chapter's date. Not used in
   prose and not to be confused with the exemption deadline (last business day of the year).
9. **Ada Recorder block list is FAST-CHANGING** ("currently").
10. **32-906A applies only to trusts meeting all three of its conditions.** Page says "that meets the
    section's conditions" and points to an attorney.

## For the reviewer / owner / attorney

- Section "Can the house be sold while the person who made the trust is alive?" opens with "Yes." It
  rests on 68-106(a)'s timing language. An attorney should confirm the plain answer is fair as a general
  statement.
- Final section uses only the owner-confirmed facts. It does not say we buy from trustees specifically
  or that the title company reviews trustee authority (both removed as unsourced). Owner may want to
  confirm buying from a trustee and from co-trustees.
- Internal links (3 plus /contact): /guides/how-a-property-sale-closes-in-idaho,
  /guides/selling-a-house-in-probate-in-idaho, /guides/idaho-property-taxes-when-you-sell, /contact.
- The $15.00 recording fee in cl-ada-deed-recording-fee is not stated in prose; only the category is.

# Codification freshness — what version of each code we read

**Checked 2026-09-10.** Re-check before relying on any dimensional standard, and
whenever a claim sourced to one of these is being used in a new place.

A codified ordinance can be current and still be out of date: an ordinance may be
**adopted but not yet codified**, in which case the code library serves text the
council has already amended. Municode exposes this directly — `Jobs/latest`
returns a `NewOrds` array alongside the version banner. Checking it is cheap and
the failure it prevents is expensive, because nothing about a stale standard looks
wrong.

| Jurisdiction | Version we read | Adopted, not yet codified | Effect on published claims |
|---|---|---|---|
| **Boise** | Code current through Ord. 20-26, passed 2026-06-09 | not checked — amlegal exposes no equivalent list | — |
| **Ada County** | **Ordinance No. 1002** — the ordinance that enacted Title 8, board approval 2025-10-28. Distinct from the county's CODIFICATION line, which runs through Ord. 1018 (the clerk's pending-codification list starts at 1019). | Ord. 1014 and Ord. 1020 both amend Title 8 *after* 1002 | none: 1020 amends the zoning MAP, 1014 updates cross-references. Neither touches the district schedule. |
| **Meridian** | Codified through Ordinance No. 26-2129, enacted 2026-07-07 (Supp. No. 14) | **1** — Ord. 26-2128, amending UDC § 11-4-3-18 concerning FLEX SPACE | **none.** It amends a use-specific standard in Chapter 4, not the district tables 11-2B-3 or 11-2C-3. Checked explicitly: we hold no regulatory claim about flex space, and no Meridian claim at all. The word "flex" appears on our pages only in a statement of what the business buys. |
| **Star** | Codified through Ordinance No. 428-2025, enacted 2025-12-16 (Supp. No. 2) | **3**, incl. Ord. 437-2026 amending Title 8 (annexation special exception, fencing, temporary uses) | **none** — it does not touch § 8-3A-4 or the district list. ⚠️ Also excluded: an unnumbered "UDC REVISIONS 2026" redline dated 2026-07-21, which is a draft and not citable. Its non-residential rows are unchanged from the adopted text. |
| **Kuna** | Codified through Ordinance No. 2026-15, enacted 2026-05-19 (Supp. No. 72) | **0** | — |
| **Garden City** | Includes legislation through 2025-11-10 | not checked — ecode360 exposes no equivalent list | — |

## Provenance confirmed 2026-09-10

Every Meridian, Eagle and Kuna dimensional standard we hold was re-checked against
the cached bytes and confirmed to come from CODIFIED text, not a summary page. The
test is mechanical rather than a matter of recollection: each Meridian and Kuna
artifact's `meta.json` records a `url` beginning `https://api.municode.com/CodesContent?`,
which is the codifier's own section text, and each payload carries the code's section
heading (`11-2C-3. - Standards.`, `5-8-504: - SCHEDULE OF HEIGHT AND AREA STANDARDS:`).
Eagle's came from amlegal, version 2026 S-23.

This was asked three times before it was answered, and it was worth the repetition:
Boise's summary page and Boise's own code disagree about which row a footnote marker
sits on, which nobody notices without checking.

**Not codified, and never citable for a number:** Meridian's `zoningmap.pdf`. It was
used only to confirm district letters appear on the ground. If it is ever cited for a
dimension, that citation is wrong.

## What actually pins a claim: the banner, not the artifact

Twelve cache artifacts are **captures of live pages** rather than fetcher
responses (amlegal and ecode360, which 403 the fetcher — see
`research/commercial/CDP-CAPTURE-RECIPE.md`). Their meta files record CAPTURE
TIME, not a code version, and a code library moves under a capture the way any
website does.

So the thing that dates the evidence is the **version banner quoted in each
source's `authorityNotes`**, not the file on disk:

| Jurisdiction | Banner that pins it |
|---|---|
| Boise | Code current through Ord. 20-26, passed 2026-06-09 |
| Eagle | 2026 S-23, current through Ord. 972, passed 2026-05-12 |
| Garden City | Includes legislation through 2025-11-10 |
| Meridian | Supp. No. 14, through Ord. 26-2129 (2026-07-07) |
| Star | Supp. No. 2, through Ord. 428-2025 (2025-12-16) |
| Kuna | Supp. No. 72, through Ord. 2026-15 (2026-05-19) |

Re-running the recipe re-checks a banner in roughly a minute per city. Do that
before relying on a dimensional standard in a new context, rather than trusting
that a cached file is still current — the artifact will look identical either way.

## Standing rules

- Quote the version banner as part of a source's `authorityNotes`, always. A
  dimensional standard without the code version it came from cannot be re-checked
  against anything.
- **A draft is not law**, and drafts here look convincing: Ada County's had a blank
  ordinance number, Star's is an unnumbered redline, and Meridian's Allowed Use
  Chart still carried `ORDINANCE NO. _____` months after adoption. Check for a real
  ordinance number before citing anything.
- For Municode jurisdictions, `api.municode.com/Jobs/latest/<ProductID>` — a
  **ProductID**, not a ClientID, or it returns HTTP 204 with no body. See
  `research/commercial/CDP-CAPTURE-RECIPE.md`.

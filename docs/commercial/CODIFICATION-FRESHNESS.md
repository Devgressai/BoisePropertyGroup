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
| **Ada County** | Ordinance No. 1002, board approval 2025-10-28 | Ord. 1014 and Ord. 1020 both amend Title 8 *after* 1002 | none: 1020 amends the zoning MAP, 1014 updates cross-references. Neither touches the district schedule. |
| **Meridian** | Codified through Ordinance No. 26-2129, enacted 2026-07-07 (Supp. No. 14) | **1** — Ord. 26-2128, amending UDC § 11-4-3-18 concerning FLEX SPACE | **none.** It amends a use-specific standard in Chapter 4, not the district tables 11-2B-3 or 11-2C-3. Checked explicitly: we hold no regulatory claim about flex space, and no Meridian claim at all. The word "flex" appears on our pages only in a statement of what the business buys. |
| **Star** | Codified through Ordinance No. 428-2025, enacted 2025-12-16 (Supp. No. 2) | **3**, incl. Ord. 437-2026 amending Title 8 (annexation special exception, fencing, temporary uses) | **none** — it does not touch § 8-3A-4 or the district list. ⚠️ Also excluded: an unnumbered "UDC REVISIONS 2026" redline dated 2026-07-21, which is a draft and not citable. Its non-residential rows are unchanged from the adopted text. |
| **Kuna** | Codified through Ordinance No. 2026-15, enacted 2026-05-19 (Supp. No. 72) | **0** | — |
| **Garden City** | Includes legislation through 2025-11-10 | not checked — ecode360 exposes no equivalent list | — |

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

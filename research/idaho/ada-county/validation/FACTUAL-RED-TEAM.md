# Factual Red-Team

Adversarial pass over the Ada County evidence system. The job is to **disprove**
claims, not confirm them.

Automated arithmetic checks live in `scripts/validation/red-team-arithmetic.mjs`
and run as a gate. **12 of 12 pass** as of 2026-09-09.

| Check | Result |
|---|---|
| Star's county parts sum to the whole-place figure | PASS — 18,155 Ada + 53 Canyon = 18,208 |
| COMPASS city figures sum to the COMPASS county total | PASS — 557,590 |
| Area-of-City-Impact figures sum to the same total | PASS — 557,590 |
| Every growth percentage reproducible from its two cited statistics | PASS — 6/6 |
| Census and COMPASS county figures differ as documented | PASS — delta 21,791 |
| No statistic lacking year, source or dataset | PASS — 0 offenders |
| Irrigation enumeration free of duplicates | PASS — 27 entries |

---

## FINDING 1 — UNRESOLVED: effective date of the 2026 amendment to 63-602G

**Severity: HIGH. Blocks publication of the homeowner's exemption figure.**

Idaho Code 63-602G shows `am. 2026, ch. 236, sec. 1, p. 1017` in its amendment
history. The statute page carries **no effective-date line**, and a search result
separately suggested a **1 January 2026** effective date for some version of the
section, which does not reconcile with the Legislature's own note that statutes
are posted "July 1 following the legislative session".

**Why it matters.** This is the exact shape of the trap caught on MoKan, where
Missouri's revisor served amended text ahead of its effective date and nearly
shipped a figure $25,000 wrong.

**Mitigating.** The $125,000 figure is independently corroborated by the Ada
County Assessor, which describes current practice, so the *figure* is unlikely to
be wrong. The residual risk is that ch. 236 changed something with a deferred
effective date and one of the two sources is stale.

**Action:** retrieve the 2026 session law for chapter 236 and read its effective
date clause before any page states this exemption. The claim now carries
`verificationFlag: EFFECTIVE_DATE_UNCONFIRMED`.

---

## FINDING 2 — THREE different 2020 population figures exist for the same city

**Severity: MEDIUM. Mislabelling risk on every growth statement.**

For Star alone the sources hold at least three 2020 numbers:

| Figure | Source |
|---:|---|
| 11,282 | Census PEP Vintage 2024 — **2020 estimates base** |
| 11,466 | Census PEP Vintage 2024 — **2020 population estimate** |
| ~11,107 | Ada County / COMPASS PDF, cited as **2020 Census** |

All three are defensible; they measure different things. Our growth figures use
the **estimates base**, and the statistics record says so — but a reader
computing growth from a different 2020 baseline would find a discrepancy and
conclude we are wrong.

**Action:** every published growth figure must name both endpoints and their
dataset. Never write "Star grew 61.4% since 2020" unqualified.

---

## FINDING 3 — ACHD bridging claim was over-broad; narrowed. RESOLVED

The original claim asserted ACHD maintains roads inside every Ada city. The
statutes (40-1406, 40-1415) establish what a countywide highway district does,
but no captured source states both that Ada County has one **and** that ACHD is
it — `achdidaho.org` returns 403 to automated fetches. Narrowed to what Ada
County's own page says: the county controls no roadway infrastructure and ACHD
leads transportation.

---

## FINDING 4 — median age figures are second-hand

Ada County's demographics PDF cites 2022 ACS, but the figures were not read from
ACS directly. Recorded at MEDIUM confidence. They are the strongest per-city
differentiator found and will become load-bearing, so **verify against ACS
before relying on them**.

---

## FINDING 5 — Meridian permit data is a single month

August 2025 only, from a rolling "current month" URL whose contents will change.
The cached PDF is the record. Never to be presented as a trend.

---

## FINDING 6 — the irrigation map is not a parcel lookup

Ada County's PDF shows *which* entities exist and roughly where. It cannot say
which entity serves a given address, and the claim states that limit explicitly.

---

## FINDING 7 — opportunity grades measure topic coverage, not candidate evidence

Two scoring errors were caught and corrected during construction: first
union-across-topics inflation (which ranked "Development land" above "Inherited
property"), then broad-single-topic inflation (which ranked "Apartments" HIGH on
zero apartment evidence). Three candidates remain manually capped with reasons
printed in the row. Grades are research prompts, not verdicts.

---

## Claims deliberately NOT made

- Which irrigation entity serves any specific parcel.
- Any property's flood zone.
- That a lease does, or does not, survive a sale.
- That 6-310A can remove a holdover tenant or a family member.
- Any Meridian fact beyond the August 2025 permit report.
- Any Ada County population figure without naming its estimate family.
- Who issues building permits in any city other than Boise.

# Second-Pass Independent Review

Audited as though another team had produced the dataset, trusting none of the
earlier conclusions.

The strongest available form of that audit is not re-reading the claims — it is
re-opening the **cached raw source** for every quoted passage and checking the
quote is actually there. That check is implemented in
`scripts/validation/verify-quotes.mjs` and runs as a gate.

## Result

| Measure | Value |
|---|---:|
| Cached artifacts in corpus | 56 |
| Approved claims carrying quoted language | 71 |
| **Fully verified against a cached source** | **71** |
| Partially verified | 0 |
| Not found in any cache | 0 |

Every quoted statutory and governmental passage in the registry traces to a
stored copy of the page it came from, and can be re-checked without re-fetching.

## What the audit caught

**Gap 1 — four statutes had no cached source at all.** Idaho Code 40-1406,
40-1415, 55-1003 and 45-1506 were read through a fetch tool that returns a
summary rather than storing the page. Their quotes were correct, but they were
**unauditable**: nothing on disk could confirm them. Four claims about ACHD, the
creditor homestead exemption and the 120-day trustee sale notice rested on a
reading no one could check.

*Fixed:* all four retrieved through the caching fetcher and stored.

*Rule adopted:* a claim may cite only a source that has been fetched through
`scripts/research/fetch-source.mjs` (or downloaded as a PDF), because only those
leave a re-checkable artifact. A summarising fetch tool may locate a source; it
may not be the record of one.

**Gap 2 — quote verification was failing on formatting, not substance.** Statute
pages render inline cross-references as separate nodes, leaving a space before
the following comma: `section 55-2508 , Idaho Code`. Eight quotes were being
reported unverifiable purely for that. The normaliser now strips whitespace
before punctuation.

This distinction matters: without it, the audit produces false alarms, and an
audit that cries wolf gets ignored.

## What this does not prove

- That a quote is **complete** — a passage can be accurate and still omit a
  qualifying clause. Mitigated by recording qualifiers as separate paired claims
  (15-3-711 with 15-3-715; 63-602G with 63-701).
- That the **source itself** is current. Handled separately by amendment-history
  checks and by FINDING 1 of the factual red-team.
- That the **interpretation** is right. Every claim states what a source says and
  is not applied to a reader's facts.

## Verdict

The evidence layer passes independent audit. Every quote is traceable, every
statistic carries its dataset and year, and the claim-source graph is symmetric
by construction.

The **page plan** does not pass, and that is recorded separately in the
search-quality red-team: the municipal layer is not yet differentiated enough to
justify six indexable pages.

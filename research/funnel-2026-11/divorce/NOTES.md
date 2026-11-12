# Divorce guide — research notes (2026-11-12)

Slug: `selling-a-house-during-a-divorce-in-idaho` · cluster `divorce` · 12 new `dv-` claims, 10 new sources.
Reused existing claims: `id-disclosure-exempt-divorce`, `id-disclosure-required-1-to-4-units`,
`ada-recorder-maintains-ownership-documents`, `ada-homeowners-exemption-deadline`.

## Could NOT source / deliberately left out

- **No automatic restraining order found.** I searched the full I.R.F.L.P. text (cached index page
  https://isc.idaho.gov/irflp) for "automatic", "restrain", "encumber", "dispose". The only
  restraining-order provisions are Rule 505 (temporary order without notice) and Rule 506
  (injunctions/TROs) — both are *on motion*. I did **not** write "Idaho has no automatic restraining
  order": that is a negative claim, and local administrative orders / standing orders in the Fourth
  Judicial District (Ada) were not checked. The page says only that Rule 504 temporary orders are
  asked for by motion and the rule "does not make one automatic" — reviewer: confirm that phrasing
  is acceptable as a reading of Rule 504's text.
- **Homestead, Title 55 ch. 10.** Read 55-1001, 55-1004, 55-1005, 55-1006, 55-1008, 55-1009 (all
  cached). None requires both spouses to join in conveying a homestead (the 1989 rewrite contains no
  such section). 55-1005(3) mentions liens "executed and acknowledged by the husband and wife", but
  that is about which debts can reach the homestead, not conveyance — left out. 32-712's "homestead
  ... selected" language predates the 1989 automatic-homestead scheme; how they interact was not
  researched and the page does not connect them.
- **What happens to a contract/deed signed by one spouse alone** (void vs voidable, ratification) —
  case law, not read. Page says the statute does not answer it.
- **Transmutation, commingling, tracing, refinance-during-marriage** — case law. Page states the
  32-903/32-906 categories and says those facts go to an attorney.
- **Premarital agreements** (Uniform Premarital Agreement Act, 32-921 onward) — not read. 32-916 as
  quoted is about agreements "entered into during marriage"; the page refers only to that.
- **Federal tax on the sale (IRC §121, divorce provisions)** — out of scope; not mentioned.
- **Ada County / Fourth District self-help pages, title-company practice on POAs or pending-divorce
  sales** — not sourced. Page defers POA sufficiency to "your attorney and the title company".

## Traps (also in claim notes)

1. 32-906(1) says "All **other** property ... is community property" — must be read with 32-903.
   The statute does not use the word "presumption"; only 32-906(2) (interspouse deed) does. The page
   uses "presumed/presumption" only for 32-906(2).
2. 32-912's joinder rule covers the **sale agreement**, not only the deed, and **encumbering**.
3. 32-712 is "substantially equal ... unless there are compelling reasons otherwise" with a
   non-exclusive factor list — never "50/50".
4. 55-2505(10) divorce disclosure exemption covers transfers **between spouses** only; a sale to a
   third party is not exempt on that ground.
5. Rule 401 is spouse-to-spouse discovery, not buyer disclosure. The $100 figure is in the claim but
   intentionally not in prose.
6. 32-906A applies only to a revocable trust meeting all three conditions (a)–(c); page says "that
   meets the section's conditions".

## Reviewer, please double-check

- `ada-homeowners-exemption-deadline` is reused for "reapply if ... ownership changes" — confirm that
  claim is still current (verified 2026-09).
- 32-906 page shows the 2003 amendment as latest; no future-dated version on any cached section page
  (searched cached HTML for "2027"/"effective" — none relevant).
- I.R.F.L.P. sources are classed `state-government` / `SLOW-CHANGING` (registry has no court
  organizationType); change if the registry prefers a new value.
- `amendmentHistory` for the three rule claims is the rule footer "(Adopted March 29, 2021, effective
  July 1, 2021.)" — it is verbatim but is a rule adoption line, not a compiler's history note.
- `dv-marriage-settlement-overrides-chapter` cites two sections (32-916 + 32-917) joined by "...";
  split it if one-claim-one-section is preferred.
- "Where we fit" uses only the owner-confirmed facts; links /how-it-works and /contact.
- `src/data/guides.ts` `Guide.cluster` is a closed union that does not include `"divorce"`; it will
  need adding when this is merged (I did not touch src/).
- Every quotation inside the guide prose was also checked against the cache (22 strings, all traced);
  closing punctuation was moved outside quote marks where the source text continues differently.

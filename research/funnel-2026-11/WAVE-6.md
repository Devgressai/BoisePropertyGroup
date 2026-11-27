# Wave 6: addendum to BRIEF.md (2026-11-26)

Read `research/funnel-2026-11/BRIEF.md` first and follow every rule in it. This file
overrides it only where stated.

## Overrides
- **Dates.** `accessedDate`, `verifiedOn`, `published` and `updated` are all **2026-11-26**.
- **Reuse first.** The registry is at `data/idaho/evidence/ada-claims.json`. Search it before researching and reuse existing claim ids freely. Sources are at `data/idaho/sources/ada-county-sources.json`. Reuse a source's id when the URL is already there.
- **Writing.**
  - Plain declarative sentences. **No em dashes.**
  - No "it is not X, it is Y" constructions.
  - No rhetorical questions in body text; question headings are fine.
  - No filler openers. Short paragraphs.
- **Banned words.** Never use "a client", "our client(s)", "a customer" or "our customers", nor "we buy houses".
- **Limits of the business.** It cannot stop a foreclosure, negotiate with a lender, give legal or tax advice, or promise an outcome. Point readers to an Idaho attorney, a tax professional or the relevant agency.
- **Headings.** Use the literal question a seller asks where that reads naturally. The first sentence of each section answers it.
- **Source ids.** Always lowercase.
- **Idaho Code.** The statute pages are at legislature.idaho.gov; fetch each section page. Record the history note verbatim and check for future-dated versions.
- **Dead ends.** If a site returns 403 to fetch-source.mjs, try local headless Chrome `--dump-dom` with a normal desktop user agent. Write the result to the same cache path, as `code-violations/NOTES.md` describes. If that fails too, leave the fact out.

## Pages in this wave. You write ONE.

| Folder | Slug | Prefix | Cluster | Scope |
|---|---|---|---|---|
| living-trust | selling-a-house-in-a-living-trust-in-idaho | lt- | estate | Selling a house titled in a revocable living trust in Idaho, while the settlor is alive and after death. Cover who signs (the trustee) and what Idaho law says about a trustee's power to sell real property: find the actual trustee powers statute (Title 68 or Title 15 ch. 7) and quote it. Cover any Idaho certification or abstract of trust a title company can rely on, if a statute provides one. Note that a trust asset generally avoids probate only where a primary source says so. Cover recording the trustee's deed in Ada County, reusing existing recording claims. Include the homeowner's exemption after transfer only where it is sourced. Contrast with probate by linking /guides/selling-a-house-in-probate-in-idaho; don't restate it. |
| surviving-spouse | selling-a-house-after-a-spouse-dies-in-idaho | sv- | estate | Selling a house after a spouse dies in Idaho. Cover community property passing to the surviving spouse (Title 15, ch. 2 and 3). Cover any summary or simplified procedure for a surviving spouse, e.g. Idaho Code 15-3-1205 if it applies: read it and state exactly what it covers. Cover joint tenancy with right of survivorship and how title is cleared (affidavit of death or recorded documents), but only where an Idaho or Ada County primary source describes it. Cover the homestead and homeowner's exemption carryover, reusing pt- claims, and the federal home-sale exclusion for a surviving spouse (IRS Pub 523 / Topic 701 language on a surviving spouse). Link the probate and inherited guides rather than restating them. |
| hoa | selling-a-house-with-an-hoa-in-idaho | hoa- | closing | Selling a house in a homeowners association in Idaho. Cover the Idaho Homeowner's Association Act (Idaho Code Title 55, ch. 32): what it requires and limits. Check exactly for any limits on transfer or resale fees, required documents or statements at sale, and how an HOA collects unpaid assessments (lien rights, foreclosure limits, any homestead-related limit). Include anything the Act says about a sale or a new owner. Quote each section. Don't invent fee caps. Not Ada-County-specific unless a county source applies. |
| squatters | squatters-and-unauthorized-occupants-in-idaho | sq- | tenants | Someone living in an Idaho property without the owner's permission, including when selling a vacant or inherited house. Cover Idaho's unauthorized-occupant procedure (Idaho Code 6-310A or whatever the current section is: read it, including any affidavit and who acts on it). Cover how it differs from evicting a tenant (unlawful detainer, Title 6 ch. 3), the criminal trespass statute if it applies, and adverse possession requirements (Idaho Code 5-210 and neighbours: years, tax payment) stated exactly. Reuse the existing rental-guide claims on 6-310A if present. Never advise self-help. Point readers to the Ada County Sheriff or police and an attorney as the sources describe. |

Internal links you may use: every path BRIEF.md allows, plus every existing `/sell-*` page and guide in `src/data/topic-pages.ts` and `src/data/guides.ts`. Don't link to the other new slugs in this table.

# Place pages research, 2026-11-18

Why: the 2026-11-18 GSC audit found the city selling pages indexed but ranking 24 to 65, and
/sell-my-house-fast-kuna-id discovered but not indexed. Pages carrying specific, sourced local
substance are the ones that get shown, so each city page gets facts a template cannot fake:
what transfers with the property at sale, which body does what, and how to look a parcel up.

Folders: `idaho/` (statewide statutes used by several pages), `kuna/`, `boise/`, `meridian/`.
Each holds `sources.json` + `claims.json`. Merge with
`node scripts/research/merge-place-research.mjs <folder>`, then sync-sources, build-claims,
build-geography, check-evidence, verify-quotes. Page copy is hand-written in
`src/data/place-content.ts` in the same commit as its claims.

## Capture notes
- **api.municode.com now serves a Cloudflare challenge** to fetch-source.mjs (it returned JSON in
  Sept 2026). Captured via Chrome over CDP; `Network.setUserAgentOverride` per tab was needed
  because `--user-agent` on the command line no longer took effect (json/version still said
  HeadlessChrome). Stored bytes are the raw JSON body, meta carries `fetchedVia: chrome-cdp`.
  Kuna code = productId 14925, job 492823 (Supp. 72, through Ord. 2026-15, May 19 2026).
- meridiancity.org: same CDP recipe. It has no sitemap.xml; the HTML sitemap is /sitemap/.
  Several pages render their content client-side and captured empty (impact-fee-advisory,
  the two URD sub-pages, reclaimed-water-program, citizen-access-instructions,
  construction-reports, trash-and-recycling/about). Not cited.

## Could NOT source (left out on purpose)
### Kuna
- **Kuna impact fees** (Title 2 ch. 6, Development Impact Fee Advisory Committee). The committee
  page says nothing about which fees exist or their amounts; the chapter was not read.
- **Urban renewal boundaries.** The page names both districts and says we have not mapped them.
- **Kuna Rural Fire District, Kuna School District, library district** as taxing districts on a
  Kuna tax bill. Not read from a primary source.
- **Pressurized irrigation pressure (52 to 58 psi, 7.5 to 15 GPM)** is on the Kuna FAQ but no claim
  carries it; cut from the page rather than cited loosely.
- **Which share of Kuna parcels are on city irrigation vs a district lateral.** Unknown; the page
  says only that the city system stays inside city limits.
- **Water hardness (137.73 mg/l)** on the city's Water Reports page: true, not seller-relevant.

### Boise
- **What a "sewer deferral" is**, who carries one and how much. The city has a payoff form and a
  3-business-day response, but no page defines it. The page says only that the process exists.
- **Boise LIDs.** No current local improvement district found on city pages. The statute
  (50-1721) is cited for how an LID lien behaves; the page does not say any parcel carries one.
- **Escrow Tool output fields** (what the quote includes). Access needs an approved account.
- **Connection fee amounts.** The schedule is a separate document; not read, not quoted.

### Meridian
- **Meridian impact fees** (page renders client-side, captured empty).
- **NMID tax deed auction list contents** and the "unpaid taxes" list: both are links to files
  that change quarterly; not cited.
- **NMID's "$90.00 per lot" urban system cost** is stated "at present time" with no date. Left out.
- **Which irrigation district serves which Meridian subdivision.** The page points to the bill and
  the IDWR map, as NMID itself does.

### Statewide
- **Who pays an unpaid irrigation assessment at closing.** 43-706(4) says the purchaser takes the
  property subject to it; allocation between buyer and seller is contract and escrow practice,
  not statute, and is not stated.
- **Whether a given district bills through the county roll.** 43-701B/D and 43-727 are permissive.

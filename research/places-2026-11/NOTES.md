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

### Eagle (added 2026-11-18, `eagle/`)
- **City water household count conflicts between city pages**: /366/Utilities says ~3,400, /419
  says ~3,800 (the existing claim uses /419). Not reconciled; no new claim uses either figure.
- **Spring Valley Community Infrastructure District No. 1** is linked from Eagle's records page
  (launch-admin.com/spring-valley), but that page carries no substance. A CID levies on property
  under the Community Infrastructure District Act (Idaho Code 50-3101 and following, not read here); neither the district's boundary nor its levy was sourced, so
  the page does not mention it. Worth a proper read next pass.
- **Eagle Sewer District** account and transfer rules: the district's own site was not read.
- **Veolia (Eagle Water Service Area) transfer terms**: not read; the deposit and set-up fee claim
  is City of Eagle Water only.

### Garden City (added 2026-11-18, `garden-city/`)
- The homeowner letter is a PDF on the city's media host (storage.googleapis.com/juniper-media-library),
  linked from the Utility Billing page as "Welcome Homeowner!". Cached and extracted.
- **Garden City sewer division page** carries no account or connection rules (wipes guidance only).
- **Lien for unpaid Garden City utilities**: the letter says debts stay with the property; no code
  section was read, so the page does not say "lien".

## Round 2 (2026-11-18, `star/`, `ada-county/`, `gaps-r2/`)
Star 9 new claims, Ada County 5 new claims, gaps 5 new claims (ids prefixed `r2-`).

### Capture notes
- **Star City Code** is on Municode (productId 17396, job 494824, Supp. 3, codified through Ord.
  437-2026, May 5, 2026). Same CDP recipe as Kuna: navigate headless Chrome straight to the
  api.municode.com URL with a per-tab UA override and store the JSON body. `Clients/stateAbbr`,
  `ClientContent/<clientId>`, `Jobs/latest/<productId>` and `codesToc/children` give the ids.
- **starswd.com** (Star Sewer & Water District) serves the normal fetcher; it has a sitemap.xml.
- The City of Star's Irrigation Canals page is a single PNG table, cached as `f8713c864794aa88.bin`
  and cited without a quote (claim `star-irrigation-entities-city-list`, MEDIUM).

### Resolved
- **Star impact fees: ADOPTED.** Ord. 431-2026 (parks, Star City Code 7-3D) and 433-2026 (police,
  7-3E), both April 7, 2026, per the Municode comparative table. Amounts are cited from the
  building department's current fee page only. The council addendum with the phased parks
  schedule ($4,695.76 / $5,282.73 / $5,869.70) is posted as "Addendum_CIP_Impact Reports 04.07.26
  Draft"; its link text says Draft, so it is not cited. Pathways and Trails fees were tabled.
- **Ada County Ordinance No. 1002 effective date: narrowed, not closed.** Development Services
  says "In November 2025, Ada County updated its zoning ordinance"; 8-1-8 makes the Title
  effective on publication. The publication DAY is still not in any county record we found
  (the ordinance PDF's last page is footed 11/1/2025, which is a print date, not a publication
  record). The page says November 2025 and no day.
- **Boise sewer deferral**: defined from Boise City Code 10-2-8 (claim `r2-boise-sewer-fee-deferral-due-on-sale`).
- **Urban renewal districts**: CCDC (Boise) names and sunsets; Meridian Development Corporation
  five districts with created and sunset years. Boundaries are maps only; no parcel matched.
- **Meridian impact fees**: current fee schedule amounts by floor-area band (one band quoted).

### Still could NOT source
- **Meridian impact fee effective date.** The only copy of Ordinance 22-2004 found is unsigned
  with blank passed/approved dates (it states February 1, 2023). Not cited. Meridian's
  exemptions (City Code 10-7-12) were not found online.
- **Any current LID in Boise, Meridian or Kuna.** None named on a city page. Kuna LID No. 2006-1
  (2010 ordinance) has a dead city link; status unknown.
- **CCDC sunset dates for the four active districts**, and every URD boundary as text.
- **Whether Harris Ranch CID charges appear on the Ada County tax bill.** Not read.
- **Star Sewer & Water District service boundary**, and its 2026 rate change page (empty when
  captured). The FAQ also lists sewer rates "Effective 03/01/2027"; not cited.
- **Star easements** (Title 8 UDC lot easement widths): not read this pass.
- **Treasurer tax payoff at sale**: no Ada County page describes a payoff or certificate for
  title companies. The page cites the statutory lien (63-206), the bill dates and the tax deed
  process instead, and says nothing about who pays what at closing.
- **Star's industrial district letters (LI in 8-3A-1, IL in the table)**: not used on the page.

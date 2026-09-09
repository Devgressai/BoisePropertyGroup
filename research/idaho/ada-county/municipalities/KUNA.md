# Kuna — Research Dossier

**GENERATED** by `scripts/research/build-dossiers.mjs` from the claim, source, statistic and
jurisdiction registries. Do not hand-edit. Every statement below traces to a claim id and a
primary source.

> This is RESEARCH, not page copy. Nothing here is written for publication.

## Identity

| Field | Value |
|---|---|
| Entity id | `city:kuna` |
| Type | CITY |
| Parent | county:ada |
| Jurisdiction | Ada County, Idaho |
| Census name | Kuna city |
| Census place FIPS | 44290 |
| Counties | Ada County |
| Spans multiple counties | no |

## Statistics

⚠️ Two population estimate families exist for Ada County and they differ by roughly 4%.
COMPASS and U.S. Census Bureau figures are both authoritative and must always be labelled
by dataset. Never mix them in one comparison.

| Metric | Value | Year | Dataset |
|---|---:|---:|---|
| resident population | 29,127 | 2024 | Census Population Estimates, Vintage 2024 |
| resident population (census base) | 24,080 | 2020 | Census Population Estimates, Vintage 2024 (2020 base) |
| population change 2020 base to 2024 estimate | 21% | 2020-2024 | Census Population Estimates, Vintage 2024 |
| resident population (COMPASS estimate) | 31,490 | 2024 | COMPASS 2024 estimate |
| population by Area of City Impact | 39,270 | 2024 | COMPASS 2024 estimate |
| projected resident population | 72,020 | 2050 | COMPASS 2050 projection (based on ACI boundaries as of 2021) |
| median age | 30.2 | 2022 | U.S. Census Bureau 2022 ACS (via Ada County/COMPASS) |

## Property administration

| Function | Authority | Status |
|---|---|---|
| assessment | Ada County Assessor | VERIFIED |
| homeowner-tax-exemption | Ada County Assessor | VERIFIED |
| roads | Ada County Highway District | VERIFIED |
| septic | Central District Health — Environmental Health Division | VERIFIED |
| water-rights | Idaho Department of Water Resources | UNVERIFIED |
| land-use-planning | City of Kuna Planning & Zoning | VERIFIED |
| building-permits | — | UNRESEARCHED |
| code-enforcement | the city's own municipal agency | VERIFIED |
| recording | Ada County Clerk/Recorder | VERIFIED |
| tax-collection | Ada County Treasurer (ex officio tax collector) | VERIFIED |
| public-administration-of-estates | Ada County Treasurer (ex officio public administrator) | VERIFIED |
| gis-parcel-records | Ada County Assessor | VERIFIED |
| addressing | Ada County Assessor | VERIFIED |

## Claims specific to Kuna (9)

**2 of these name no other entity** — these are what could differentiate a page.

**A city inside a countywide highway district may not maintain or supervise city highways, and may not levy ad valorem taxes for their construction, repair or maintenance.**

> No city included within a county-wide highway district shall maintain or supervise any city highways or levy any ad valorem taxes for the construction, repair or maintenance of city highways.

Source: [Idaho Code § 40-1406 — Powers and duties of highway commissioners — One highway district in county — Highway powers of cities in county abolished — Laws in conflict superseded](https://legislature.idaho.gov/statutesrules/idstat/title40/t40ch14/sect40-1406/)  
`achd-city-highway-powers-abolished` · confidence HIGH · verified 2026-09-09

⚠️ This is the statutory basis for the ACHD arrangement. It has no California analogue and is the single strongest jurisdiction differentiator found. NOTE: the statute is general Idaho law; a separate source is required to establish that ACHD is in fact Ada County's countywide district — see claim achd-is-ada-district, which is NOT yet verified.

---

**Population growth across Ada County's cities diverged sharply between the 2020 census base and the 2024 estimate: Star +61.4%, Kuna +21.0%, Meridian +18.6%, Eagle +7.4%, Garden City +5.1%, Boise +1.0%.**

Source: [Population Estimates, Vintage 2024 — Subcounty Resident Population](https://www2.census.gov/programs-surveys/popest/datasets/2020-2024/cities/totals/sub-est2024.csv)  
`ada-growth-divergence-2020-2024` · confidence HIGH · verified 2026-09-09

⚠️ Computed WITHIN one vintage (2020 base and 2024 estimate from the same Vintage 2024 file). Never compute growth across vintages. This is the strongest city-differentiation fact found so far: Boise is effectively static while Star has grown by nearly two thirds.

---

**Each incorporated city in Ada County administers land use and zoning within its own city limits through its own planning department and development code.**

> The Planning & Zoning Department's primary responsibility is to oversee and guide growth and development within the City. Staff administers the Unified Development Code and other City Ordinances pertaining to land use.

Source: [Planning & Zoning — City of Star, Idaho](https://staridaho.org/1205/Planning-Zoning) · [Planning and Development Services — City of Boise](https://www.cityofboise.org/departments/planning-and-development-services/)  
`ada-cities-administer-own-land-use` · confidence HIGH · verified 2026-09-09

⚠️ ⚠️ THIS IS A CORRECTNESS CLAIM, NOT A DIFFERENTIATION CLAIM. It is true of all six cities in the same way, so it cannot justify six separate pages. Quoted language is Star's; Boise's PDS page is the corroborating source. Meridian's site returns 403 to automated fetch and its page has NOT been read — do not quote Meridian.

---

**The Boise Project Board of Control is the operating agent for five irrigation districts — Boise-Kuna, Big Bend, Nampa & Meridian, New York and Wilder — managing facilities transferred from the U.S. Bureau of Reclamation and delivering water to their landowners.**

> Boise Project Board of Control is the operating agent for five irrigation districts: Boise-Kuna Irrigation District, Big Bend Irrigation District, Nampa & Meridian Irrigation District, New York Irrigation District, and Wilder Irrigation District.

Source: [About — Boise Project Board of Control](https://www.boiseproject.net/Public/home/about/)  
`boise-project-five-districts` · confidence HIGH · verified 2026-09-09

⚠️ Explains why 'who is my irrigation district' has a different answer across Ada County: Boise-Kuna, Nampa & Meridian and Settlers are separate entities serving different ground. The Board of Control is the OPERATING AGENT, not the district itself — do not conflate them.

---

**COMPASS projects Ada County will reach 715,820 by 2050, but the growth is projected to be very unevenly distributed: Kuna +128.7%, Eagle +50.6%, Garden City +42.0%, Meridian +34.8%, Boise +25.8%, Star +12.3%, while unincorporated Ada County is projected to LOSE 36.0% of its population.**

> Unincorporated Ada County is projected to see a decrease of 22,920 residents by 2050, based on the assumption the cities will have annexed all of the area within their current ACI boundaries by that time.

Source: [Comprehensive Population Demographics — Ada County](https://adacounty.id.gov/wp-content/uploads/2024/04/COMPREHENSIVE-POPULATION-DEMOGRAPHICS-FOR-HOME-PAGE.pdf)  
`ada-2050-projection-divergence` · confidence HIGH · verified 2026-09-09

⚠️ ⚠️ A PROJECTION, not an estimate — must always be labelled as such, with the annexation assumption stated. The unincorporated DECLINE is not depopulation; it is the assumption that cities annex their ACIs. STRONG DIFFERENTIATOR and a genuine reversal: Star grew 1,009.7% since 2000 but is projected to add only 12.3% more by 2050, while Kuna is projected to more than double.

---

**Median age varies sharply across Ada County's cities: Kuna 30.2, Boise 37.9, Meridian 38.7, Star 41.4, Eagle 46.8 and Garden City 47.1, against a county median of 39.1 (2022).**

Source: [Comprehensive Population Demographics — Ada County](https://adacounty.id.gov/wp-content/uploads/2024/04/COMPREHENSIVE-POPULATION-DEMOGRAPHICS-FOR-HOME-PAGE.pdf)  
`ada-median-age-divergence` · confidence MEDIUM · verified 2026-09-09

⚠️ STRONGEST PER-CITY DIFFERENTIATOR FOUND SO FAR, and directly relevant to a property buyer: a 17-year spread between Kuna and Garden City implies materially different housing stock, tenure and life-stage mix. Ada County cites 2022 ACS; the figures were NOT read from ACS directly, hence MEDIUM confidence. Verify against ACS before making them load-bearing.

---

**The City of Kuna assigns a zone to every property within city limits, and Kuna Municipal Code 5-3-2 holds the Official Land Use Table: uses marked 'P' are permitted, 'S' requires a Special Use Permit, and a use not listed is prohibited in that zone.**

> The City of Kuna has assigned a zone to every property located within Kuna city limits. ... you may view 5-3-2 of the Kuna Municipal Code which contains the Official Land Use Table. This will show the uses allowed in each zoning district. Uses are listed as "P" for a Permitted Use and "S" signifying by Special Use Permit only. If none of these are listed, the use is prohibited in that zone.

Source: [Frequently Asked Questions — City of Kuna, Idaho](https://www.kunacity.id.gov/FAQ.aspx)  
`kuna-land-use-table-convention` · confidence HIGH · verified 2026-09-09

⚠️ The 'not listed means prohibited' convention is the useful part for a seller weighing what a buyer could do with a Kuna parcel — it is a closed-list code, not a permissive one. ⚠️ Kuna's convention; do not generalise to the other cities.

---

**Kuna notifies property owners within 300 feet of a subject property of a public hearing, in writing, at least fifteen days before the hearing.**

> Notification for public hearings is 300' from the subject property. Written notification is then mailed at least fifteen (15) days prior to the public hearing.

Source: [Frequently Asked Questions — City of Kuna, Idaho](https://www.kunacity.id.gov/FAQ.aspx)  
`kuna-hearing-notice-300ft-15days` · confidence HIGH · verified 2026-09-09

⚠️ Concrete Kuna-specific procedural fact. Relevant to a seller whose neighbour is seeking a rezone, and to a buyer planning an entitlement.

---

**Kuna advises that the best way to determine property lines is a professional survey, that owners should check for existing corner pins or stakes, that the Ada County Assessor's Office may hold a copy showing property size and surrounding lots, and that fence lines and street curbs should not be assumed to follow property lines.**

> Do not assume that fence lines and street curbs follow property lines.

Source: [Frequently Asked Questions — City of Kuna, Idaho](https://www.kunacity.id.gov/FAQ.aspx)  
`kuna-property-lines-survey-guidance` · confidence HIGH · verified 2026-09-09

⚠️ Useful for the boundary-dispute and difficult-property pillars, and it routes back to the Assessor, which the registry already establishes as the holder of parcel boundaries and Records of Survey.

## Inherited claims (57)

Idaho- and county-level claims that apply here. They make a page CORRECT; they cannot make
it DISTINCT, because every neighbouring city inherits the same ones.

- `achd-one-district-per-county` — Idaho law permits only one countywide highway district to operate within a county that has voted to form one.
- `achd-responsibility-within-cities` — A single countywide highway district is responsible for design, construction, reconstruction and maintenance of city rights-of-way and their curbs, gutters, culverts, sidewalks, paved medians, bulkheads and retaining walls.
- `achd-cities-retain` — Cities within a countywide highway district retain responsibility for pre-existing local improvement district bonds, may spend city funds on trees, shrubs, grass and other plants in rights-of-way, and control parking meters.
- `achd-is-ada-district` — Ada County Development Services controls no roadway infrastructure within the county's boundaries; the Ada County Highway District leads identification and development of transportation projects and maintains the county's Master Street Map.
- `id-homestead-creditor-175k` — Idaho's homestead exemption protecting home equity from creditors is capped at $175,000, regardless of the area of land.
- `id-homeowners-tax-exemption-125k` — Idaho's homestead property-tax exemption removes from taxation the lesser of the first $125,000 of the homestead's market value for assessment purposes, or 50% of that market value.
- `ada-homeowners-exemption-deadline` — To qualify for the homeowner's exemption for a tax year, an owner must own and occupy the home on or before the last county business day in December and file the application by close of business that same day; once approved it need only be re-filed on a move or a change of ownership.
- `ada-assessment-market-value-jan-1` — Idaho law requires all non-exempt property to be assessed at market value as of January 1, and January 1 is also the lien date for real property.
- `ada-reappraisal-five-year-cycle` — All Ada County property is assessed every year, but state law requires a physical inspection every five years; roughly 20% of county properties are reappraised in a given year and the rest are trended on market conditions.
- `ada-assessor-does-not-set-value` — The Ada County Assessor estimates what a typical buyer would reasonably pay for a property as of January 1 rather than setting its value.
- `ada-fixture-three-factor-test` — Whether an item is real property or personal property in Idaho is decided by a three-factor test of annexation, adaptation and intent; an item satisfying all three is a fixture and therefore real property.
- `ada-residential-appraisal-scope` — Ada County's residential appraisers value detached single-family dwellings, attached townhomes, condominium units, multi-family residential up to four units, and manufactured housing; apartments and higher-density residential are handled by commercial appraisers.
- `id-trustee-sale-120-day-notice` — An Idaho trust deed foreclosure requires notice of the trustee's sale to be given at least 120 days before the day fixed for the sale.
- `id-trustee-sale-publication` — Notice of an Idaho trustee's sale must be published in a newspaper of general circulation in each county where the property sits, once a week for four successive weeks, with the last publication at least 30 days before the sale.
- `id-trustee-sale-service-attempts` — At least three good-faith attempts at personal service must be made on different days over a period of not less than seven days, each at least 30 days before an Idaho trustee's sale.
- `ada-population-2024` — Ada County's estimated resident population was 535,799 in 2024.
- `ada-population-two-estimates` — Two authoritative estimates of Ada County's 2024 population coexist and differ by about 4%: COMPASS puts it at 557,590; the U.S. Census Bureau's Population Estimates, Vintage 2024, puts it at 535,799.
- `id-homestead-one-acre-limit` — For Idaho property-tax purposes a homestead is the owner-occupied primary dwelling plus no more than one acre of surrounding land reasonably necessary for its use as a home.
- `id-disclosure-required-1-to-4-units` — Idaho requires a seller of residential real property of one to four dwelling units — including non-owner-occupied rental property — to complete a property condition disclosure form, unless the transfer is exempt.
- `id-disclosure-exempt-estate-fiduciary` — Idaho's property condition disclosure requirement does not apply to a transfer ordered by a probate court during administration of a decedent's estate, nor to a transfer by a fiduciary in the course of administering a decedent's estate, guardianship, conservatorship or trust.
- `id-disclosure-exempt-divorce` — Idaho's property condition disclosure requirement does not apply to a transfer between spouses or former spouses resulting from a decree of divorce, dissolution, annulment or legal separation, or from a property settlement agreement incidental to one.
- `id-disclosure-exempt-foreclosure` — Idaho's property condition disclosure requirement does not apply to a deed in lieu of foreclosure, a transfer to a deed-of-trust beneficiary by a trustor in default, a foreclosure sale, or a sale under a power of sale following default occurring within one year of foreclosure on the default.
- `id-disclosure-rescission-three-days` — An Idaho buyer who receives the property condition disclosure form after entering a transfer agreement may rescind within three business days of receiving it, based on a specific objection identified in the notice, and is entitled to the return of deposits; the right is waived if no signed notice is delivered in that window.
- `id-pr-power-over-title` — Until the appointment terminates, an Idaho personal representative has the same power over the title to estate property that an absolute owner would have — held in trust for creditors and others interested in the estate — and that power may be exercised without notice, hearing or court order.
- `id-pr-powers-limited-by-will` — An Idaho personal representative's authorised transactions are subject to any restriction in the will or an order in a formal proceeding, and to the statutory priorities for claims against the estate.
- `id-domestic-water-13000-gpd` — Idaho defines domestic water use as use for homes, camps, campgrounds and livestock including irrigation of up to half an acre, provided total use does not exceed 13,000 gallons per day; or any other use not exceeding 2.8 acre-feet per year.
- `id-domestic-water-exclusions` — Idaho's domestic water definition excludes mobile home and RV parks, apartments, condominiums and similar multiple-dwelling developments, subdivisions, and commercial or business establishments, unless the use stays within the 2.8 acre-foot annual limit.
- `id-water-subdivision-five-lots` — For Idaho's domestic water statutes a subdivision is a tract divided into five or more lots, parcels or sites for sale or building development, excluding a bona fide division of agricultural land into lots of five acres or larger maintained as agricultural land.
- `ada-septic-authority-cdh` — Central District Health's Environmental Health Division permits septic systems, reviews land development applications and verifies the location of shallow injection wells across Ada, Boise, Elmore and Valley counties.
- `ada-planning-unincorporated-only` — Ada County's planning division processes land use applications only in unincorporated Ada County; land use inside an incorporated city is that city's jurisdiction.
- `ada-engineering-scope-unincorporated` — Ada County's engineering and surveying division reviews preliminary plats, drainage plans, private roads, hillside applications, floodplain permits and property boundary adjustments in unincorporated Ada County.
- `ada-building-division-scope` — Ada County's building division reviews plans and inspects buildings, and its permitting division accepts building, manufactured home and mechanical permit applications through a client portal.
- `ada-treasurer-ex-officio-tax-collector` — The Ada County Treasurer serves as ex officio tax collector, responsible for collecting the property taxes levied by all taxing districts including cities and schools.
- `ada-treasurer-ex-officio-public-administrator` — The Ada County Treasurer also serves as ex officio public administrator, responsible for administering the estates of decedents who have no one to administer the estate.
- `ada-recorder-maintains-ownership-documents` — The Ada County Recorder's Office maintains all documents related to property ownership within the county, and under Idaho Code 31-2419 all recorded documents are open to public inspection and available for purchase online.
- `ada-recorder-pii-redaction-is-submitter-duty` — When recording a document in Ada County, redacting personal identifying information is the responsibility of the party submitting it, not the Recorder's office.
- `ada-eviction-forms-nonpayment-only` — The Ada County Court Assistance Office's eviction forms may be used only to evict a tenant who has not paid rent; they cannot be used to evict a tenant current on rent, to sue for back rent, or to move a mobile home from a rented space.
- `settlers-district-coverage` — Settlers Irrigation District delivers irrigation water to 13,187 acres of agricultural and urban land in western Ada County — the West Boise, Meridian and South Eagle areas — via a 20-mile canal and 95 miles of laterals.
- `boise-project-federal-title` — Title to the Boise Project's transferred works — including Diversion Dam, the New York Canal, the Lake Lowell embankments and roughly 1,500 miles of canals, laterals and drains — remains in the United States.
- `ada-27-irrigation-entities` — Ada County's own irrigation districts map identifies 27 separate irrigation entities operating in the county — irrigation districts, ditch companies, lateral associations, water companies and a drainage district — plus the Boise Project Board of Control as operating agent.
- `ada-area-of-city-impact` — Ada County uses Areas of City Impact — unincorporated land planned in conjunction with an adjacent city. 78.8% of unincorporated Ada County residents (about 50,143 people) live inside an ACI, and only about 13,467 people, 2.4% of the county, live outside any ACI.
- `ada-planned-communities-outside-aci` — Most Ada County residents living outside any Area of City Impact are in the planned communities of Avimor, Cartwright Ranch, Dry Creek Ranch and Hidden Springs.
- `ada-county-composition` — Ada County comprises six incorporated cities — Boise, Meridian, Eagle, Kuna, Star and Garden City — plus unincorporated county; 88.6% of residents live in one of the six cities and 11.4% live in unincorporated areas.
- `ada-floodplain-development-permit` — Any development within the floodplain in Ada County requires a Floodplain Development Permit, and the technical definition of floodplain for development purposes is in Ada County Ordinance 835.
- `ada-fema-firm-adopted-2020` — Ada County adopted new FEMA Flood Insurance Rate Maps in June 2020.
- `ada-code-enforcement-unincorporated-only` — Ada County Code Enforcement investigates land use and building code complaints in unincorporated Ada County only, and expressly does not enforce code violations within city limits; complainants remain anonymous.
- `ada-assessor-maintains-parcel-gis` — The Ada County Assessor maintains comprehensive property records on all real and personal property in the county — parcel ownership, land and improvement characteristics, parcel boundaries and road rights-of-way — and manages the addressing process for all parcels in the county. Its online maps carry parcel boundaries, streets, hydrography, section boundaries, city limits, parks and schools, alongside Records of Survey and subdivision plats.
- `id-deposit-liability-transfers-on-sale` — When an Idaho rental property changes ownership during a tenancy, the new owner becomes liable for refunding the tenant's security deposits.
- `id-deposit-refund-timing` — An Idaho security deposit refund is due within 21 days if no time is fixed by agreement, and in any event within 30 days after the tenant surrenders the premises; any partial refund must be accompanied by a signed itemised statement.
- `id-deposit-no-normal-wear-and-tear` — An Idaho landlord may not retain any part of a security deposit to cover normal wear and tear, defined as deterioration from the use the unit is intended for, without negligence, carelessness, accident, misuse or abuse.
- `id-tax-deed-three-year-delinquency` — If Idaho real property with a delinquency is not redeemed within three years from the date of delinquency, the county tax collector must issue a tax deed in favour of the county — but only after a notice of pending issue of tax deed has been given and an affidavit of compliance recorded.
- `id-tax-deed-notice-service` — Notice of a pending Idaho tax deed must be served on record owners and parties in interest by certified mail with return receipt, no more than five months and no less than two months before the tax deed is set to issue; if returned undelivered, by publication once a week for four consecutive weeks, the last no more than two months and no less than fourteen days before issuance.
- `id-tax-deed-redemption-fourteen-months` — After an Idaho tax deed issues to the county, the record owner or a party in interest may still redeem — but only until the county commissioners enter a contract of sale or transfer the property by county deed, and in any event the right expires fourteen months from the date the tax deed issued.
- `id-manufactured-home-becomes-real-property` — An Idaho manufactured home may constitute real property only if the running gear is removed, the home becomes permanently affixed to a foundation on land the owner owns or is purchasing (or leases under qualifying financing), and the owner records a statement of intent to declare it real property with the county recorder.
- `id-manufactured-home-treated-as-site-built` — Once an Idaho manufactured home has been declared real property, county assessors must treat it as any other site-built residence, and lending institutions are permitted to treat it as real property.
- `id-6-310a-remove-unauthorized-persons` — Idaho provides a limited alternative remedy allowing a residential property owner or authorized agent to request that the county sheriff immediately remove persons unlawfully occupying a residential dwelling, subject to eight cumulative conditions.
- `id-recording-act-lease-one-year-carveout` — Under Idaho's recording act, every conveyance of real property OTHER THAN a lease for a term not exceeding one year is void as against a subsequent purchaser or mortgagee in good faith and for valuable consideration whose conveyance is first duly recorded.

## Evidence gaps

- **wildfire** — no approved claim reaches this entity

## Publication readiness

- Direct claims: **9** · unique to this entity: **2**
- ⚠️ Thin — one or two distinctive facts only. A page here risks reading as a template of its neighbours.
- Municipality pages remain gated until the differentiation matrix supports them.

/**
 * Hand-written content, one entry per place that has earned a page.
 *
 * COPY RULES (docs/DECISIONS.md, PROJECT-CONTROL/CONTENT-STATUS.md):
 * - No SEO filler. No "Whether you're…", "In today's…", "Look no further".
 * - Precise entities. Never "our area", "the region", "local homeowners".
 * - One claim, one section. A fact stated twice is a page restating itself.
 * - Every factual assertion traces to a claim id in data/idaho/evidence/.
 * - Information, not legal advice.
 *
 * A place absent from this map renders a short template and stays noindex.
 */
export interface Section {
  heading: string;
  body: string[];
  /** Claim ids this section rests on. Kept for audit, not rendered. */
  claims?: string[];
}

export interface PlaceContent {
  intro: string[];
  sections: Section[];
}

export const placeContent: Record<string, PlaceContent> = {
  "sell-my-house-fast-eagle-id": {
    intro: [
      "Sell your Eagle house as-is, for cash. We buy with our own capital, in any condition: no repairs, no cleaning, no showings. You choose the closing date, and three weeks is realistic when you need speed.",
      "Eagle has about 33,451 residents and grew 7.4% between the 2020 census base and the 2024 estimate — steady rather than fast by Ada County standards. Its median age of 46.8 in 2022 was among the oldest in the county, behind only Garden City.",
      "We buy houses, land and commercial property across Eagle, in any condition.",
    ],
    sections: [
      {
        heading: "Two neighbours can be on two different water utilities",
        body: [
          "Water service in Eagle is split by area, and the split does not follow anything visible from the street. The City of Eagle Water Department provides water to approximately 3,800 households in the city, mainly in a listed set of subdivisions. In separately designated areas of Eagle, residents may receive water from Veolia instead — the private utility formerly known as SUEZ.",
          "Veolia's part has its own history. It acquired Eagle Water Company, and its Commission-approved tariff keeps a separate rate schedule for the Eagle Water Service Area, covering customers in the area formerly served by Eagle Water Company as of January 1, 2022. Veolia also bills a 1 percent City of Eagle franchise fee under Eagle Ordinance No. 414.",
          "Sewer is a third organisation again: the Eagle Sewer District, separate from the city. For a seller the useful point is that which water utility serves a house is a question for the utilities, not something to assume from a subdivision name or from what the neighbours pay.",
        ],
        claims: ["eagle-water-split-city-and-veolia", "eagle-veolia-acquired-eagle-water-company"],
      },
      {
        heading: "Four providers means four accounts to close",
        body: [
          "The city says so itself: water, sewer and trash are not bundled into one municipal bill in Eagle. Hardin Sanitation has collected trash and recycling for every Eagle home and business since January 1, 2023. The Eagle Sewer District provides sewer. Water comes from either the City of Eagle Water Department or Veolia, depending on location. And some properties are still on a private well and a septic system, with no water or sewer account at all.",
          "For a seller that is a checklist rather than a phone call. If the house is on city water, the account carries its own terms: each new customer is billed a service deposit on the first statement, a set-up fee applies to every account being transferred or set up, and the outgoing owner's deposit is applied to the final bill with any remainder refunded. Bills are due on the 14th, and delinquent fees follow a week later. A buyer will ask which of the four the house uses; it helps to have the answer before they do.",
        ],
        claims: ["eagle-utilities-from-four-providers", "eagle-water-deposit-and-transfer-fee"],
      },
      {
        heading: "The building plans may no longer exist",
        body: [
          "Eagle keeps building permits in an online records repository, alongside agendas, contracts and other documents, and publishes its weekly building permit reports there too.",
          "The plans behind a permit may not be. Eagle treats residential building plans as eligible for destruction two years after the certificate of occupancy, and under Resolution 25-15 residential plans for permits with a certificate of occupancy issued before August 1, 2023 are eligible for destruction. For an older Eagle house, a buyer asking for the original drawings may be asking for something the city no longer holds. When you do file a request, Idaho Code gives the city three working days to respond, and up to ten if it needs more time.",
        ],
        claims: ["eagle-residential-plans-not-retained"],
      },
      {
        heading: "Flooding comes from the creek as well as the river",
        body: [
          "The City of Eagle identifies two sources of flooding in the city: Dry Creek and the Boise River. Owners along the river tend to know it; owners near the creek are often less aware that it counts too.",
          "The city participates in the National Flood Insurance Program, which is what makes federally backed flood insurance available to property owners and tenants. It also publishes elevation certificates that can be searched by address — a document a buyer's lender or insurer may ask about, and one worth looking up before listing rather than during escrow.",
        ],
        claims: ["eagle-flood-dry-creek-and-boise-river"],
      },
      {
        heading: "The city plans its own ground, but not its own roads",
        body: [
          "Land use inside Eagle is the city's. Its Planning and Zoning Department administers the Eagle Zoning Ordinance, the Land Subdivision Ordinance, the Flood Control Ordinance and the Comprehensive Plan. Each Ada County city runs its own planning department and development code, so another city's rules say nothing about an Eagle parcel.",
          "Roads are different. Eagle sits inside a countywide highway district, and Idaho law bars a city in that position from maintaining or supervising city highways or taxing for them. A driveway approach, a sidewalk or a frontage question on an Eagle property is [a highway district matter](/guides/selling-land-or-acreage-in-ada-county), even though the planning department works with that district on transportation.",
        ],
        claims: ["eagle-planning-scope", "ada-cities-administer-own-land-use", "achd-city-highway-powers-abolished"],
      },
      {
        heading: "Irrigation reaches into South Eagle",
        body: [
          "Settlers Irrigation District delivers irrigation water to 13,187 acres of agricultural and urban land in western Ada County, including the South Eagle area, through a 20-mile canal and 95 miles of laterals. Where a lateral crosses a parcel, who you deal with depends on which entity runs it, and that is worth establishing before a buyer asks.",
        ],
        claims: ["settlers-district-coverage"],
      },
      {
        heading: "Growth is projected to continue, at a middling pace",
        body: [
          "COMPASS, the regional planning association, projects Ada County will reach 715,820 people by 2050, with the growth very unevenly distributed between cities. Eagle is projected to grow 50.6 percent — faster than Boise at 25.8 percent or Meridian at 34.8 percent, and slower than Kuna, projected at 128.7 percent.",
          "A projection is not a forecast of prices, and we do not treat it as one. What it does tell a seller is which direction the city's own planning is pointed, and that ground on the edge of a growing city is ground other people are also planning around.",
        ],
        claims: ["ada-2050-projection-divergence"],
      },
      {
        heading: "What that means for an offer",
        body: [
          "An Eagle property with a creek-side flood question, a split between utilities or an irrigation lateral across it is not a property we decline. It is one where those facts shape the price, and we would rather show you how they do than guess.",
          "When we make an offer we show the value we used, the work we think the property needs, our holding costs and the margin we run on. You can check every line.",
        ],
        claims: [],
      },
      {
        heading: "Selling your Eagle house as-is, for cash",
        body: [
          "No repairs, no cleaning, no showings. Send the address or call (208) 779-4247; we come back with a number and the working behind it. We buy with our own capital, so there is no lender inspection or appraisal for the house to fail, and a vacant house, a rental with tenants or an inherited house is fine. If you accept, the sale closes through a local title company on the date you choose. Three weeks is realistic when you need speed, and later is fine.",
        ],
      },
    ],
  },

  "sell-my-house-fast-kuna-id": {
    intro: [
      "Sell your Kuna house as-is, for cash. We buy with our own capital, in any condition: no repairs, no cleaning, no showings. You choose the closing date, and three weeks is realistic when you need speed.",
      "Kuna has about 29,127 residents, grew 21.0% between the 2020 census base and the 2024 estimate, and had the youngest median age of any Ada County city in 2022, at 30.2. COMPASS projects it will more than double by 2050, the fastest projected growth in the county.",
      "Kuna runs its own water, sewer and pressurized irrigation, bills trash collection through City Hall, and its city code spells out what happens to those accounts when a house is sold. We buy houses, land and commercial property across Kuna, in any condition.",
    ],
    sections: [
      {
        heading: "One city bill, and what happens to it at closing",
        body: [
          "Kuna's Utility Billing office bills water, sewer and trash collection, and it is also the first stop for irrigation billing and for connecting or disconnecting service. Refuse is collected by J&M Sanitation, but service is ordered through Kuna City Hall. The meters belong to the city and only city employees may turn them on or off.",
          "The sale itself is written into Kuna City Code. Section 7-7-5 has the new owner's utility application handed over at the title company where the purchase closes, to be completed before or at closing, and the title company sends the city a copy of the deed with it. Section 7-7-20 sets a refundable $100.00 deposit on each account that is non-transferable: the seller's deposit is applied to the seller's final balance and the rest refunded, and the buyer posts a new one.",
          "Because we close through a local title company, that paperwork happens in the ordinary course. What is worth checking before then is the balance on the account.",
        ],
        claims: ["kuna-city-bills-water-sewer-trash-irrigation", "kuna-utility-application-at-title-company", "kuna-utility-deposit-100-nontransferable"],
      },
      {
        heading: "Unpaid city utilities can become a lien on the house",
        body: [
          "In Kuna the account follows the property, not the person who ran the taps. Under Kuna City Code 7-7-6b the owner of the real property stays financially responsible for city utility charges even when a tenant or property manager receives the bills. The service contract the owner signs consents to a lien for delinquent charges, recorded with the Ada County Recorder, and under 7-7-18 the city attorney may record it once an account is more than 90 days delinquent.",
          "For a landlord selling a rental, or a family selling a house that sat empty while bills went unopened, that means an old balance may already be a recorded lien. It does not stop a sale. It does need paying off from the proceeds, so it is better found now than at the closing table.",
        ],
        claims: ["kuna-utility-charges-lien-on-property"],
      },
      {
        heading: "Pressurized irrigation is a city system here",
        body: [
          "This is the clearest difference from [Meridian](/sell-my-house-fast-meridian-id), where pressurized irrigation is not a city service. Kuna runs its own, which its code names the Kuna Municipal Irrigation District. City Water Department staff operate the gravity and pressurized systems, and the season starts when the Boise-Kuna and New York irrigation districts allow delivery, generally mid-to-late April.",
          "The annual irrigation assessment can be spread across nine equal monthly payments on the city bill, October through June. Under Kuna City Code 7-7-7, a new account opened after October pays the months already past, so a buyer closing in the spring picks up the season to date. Where an HOA common lot has its own irrigation assessment and the HOA has not paid it by May 31, each account owner has agreed to pay a share.",
          "Water rights are pooled. Section 7-8-4 treats every landowner in the city system's service area as having consented to pooling their water rights for delivery, unless they make a written demand for delivery under their own appurtenant right by March 1. The code also bars city irrigation water from going to land outside city limits.",
        ],
        claims: ["kuna-city-runs-pressurized-irrigation", "kuna-irrigation-assessment-nine-payments", "kuna-irrigation-water-rights-pooled"],
      },
      {
        heading: "Outside the city system, the district's lien comes first",
        body: [
          "Not every parcel near Kuna is on the city system. The code keeps city irrigation inside city limits, and a lateral crossing a parcel may belong to an irrigation district instead. The Boise Project Board of Control is the operating agent for five irrigation districts, including Boise-Kuna, managing facilities transferred from the U.S. Bureau of Reclamation and delivering water to their landowners.",
          "District assessments are treated firmly by Idaho law. Under Idaho Code 43-706 they become a lien on the land from the first Monday in March each year, the lien ranks ahead of any mortgage or deed of trust, and on a sale the purchaser takes the property subject to any annual assessment still unpaid. An irrigation bill on a Kuna property is worth reading before you sell, whichever body sends it.",
        ],
        claims: ["boise-project-five-districts", "id-irrigation-assessment-lien-survives-sale"],
      },
      {
        heading: "Drinking water: the city, or one of four small private systems",
        body: [
          "Kuna's drinking water comes from wells owned and operated by the City of Kuna. Federal records list the city system as owned by local government and supplied by groundwater, serving 32,038 people through 11,363 connections, which is more than the city's own population estimate, so the system's reach and the city limits are not the same thing.",
          "The same federal records list four other active community water systems with a Kuna mailing address, all privately owned and on groundwater. The largest is Desert View Estates Water Corp, at 650 people and 213 connections; North Hills Mobile Village, Hi View Water and Forrey Heights each serve between 49 and 63 people. A mailing address is not a service area, so a property near Kuna can be on one of these rather than the city.",
          "That is a different arrangement from [Boise](/sell-my-house-fast-boise-id), where drinking water comes from private utilities regulated by the Idaho Public Utilities Commission. In Kuna, the bill tells you which system you are on.",
        ],
        claims: ["kuna-city-owned-wells", "kuna-small-private-water-systems", "boise-drinking-water-private-utilities"],
      },
      {
        heading: "Sewer goes to two city plants",
        body: [
          "Kuna's sewer is a city system too, and its flow is split between two facilities. The South Re-Use Facility treats about 500,000 gallons a day in nine lagoons and recycles the water to irrigate a 400-acre city-owned farm. The North Wastewater Treatment Plant, a membrane bioreactor plant, treats over one million gallons a day and discharges to Indian Creek under Idaho DEQ monitoring.",
        ],
        claims: ["kuna-two-wastewater-facilities"],
      },
      {
        heading: "A fence needs a permit",
        body: [
          "Kuna's list of residential work that needs a building permit includes the obvious, such as a new house, a mobile home, an accessory dwelling unit and additions, and several things owners routinely do without one: decks over 30 inches above grade, retaining walls over 4 feet including the footing, heating and air-conditioning work, fireplaces and wood stoves, relocating or demolishing a structure, and the installation of fences.",
          "Kuna lists fences without a height threshold. That is not the rule everywhere. [Star](/sell-my-house-fast-star-id), for example, requires a permit only for fences over six feet, so what a neighbour in another city was allowed to do is no guide. Detached storage buildings under 200 square feet are exempt in Kuna.",
          "At a sale, unpermitted work tends to come up when a buyer's inspector or lender asks for the record. It is rarely fatal, but it is better known before listing than discovered in escrow.",
        ],
        claims: ["kuna-permit-triggers-include-fences", "star-building-permit-triggers"],
      },
      {
        heading: "How to look a Kuna parcel up",
        body: [
          "Kuna's FAQ points to three routes. The city will show a resident the services and utilities in and around their own parcel, though it does not publish maps of large sections of the network. A parcel's zone can be read from the city's official Zoning Map or its interactive map. And copies of city records are requested on a Request for Public Records form returned to Kuna City Hall, where fees may apply.",
          "Boundaries are a separate question. Kuna's own advice is that the best way to find property lines is a professional survey. Before hiring one, look for corner pins or stakes, and the Ada County Assessor's Office may hold a copy showing the size of the property and the lots around it. Do not assume that fence lines or street curbs follow property lines; on acreage in particular, they often do not.",
        ],
        claims: ["kuna-parcel-utility-and-records-lookups", "kuna-property-lines-survey-guidance"],
      },
      {
        heading: "What the zone allows, and who gets told",
        body: [
          "Kuna assigns a zone to every property inside city limits, and Kuna Municipal Code 5-3-2 holds the Official Land Use Table. A use marked 'P' is permitted, 'S' needs a Special Use Permit, and a use that is not listed is prohibited in that zone.",
          "When something needs a public hearing, Kuna notifies property owners within 300 feet of the subject property in writing, at least fifteen days beforehand. If you own near a parcel being rezoned or developed, that notice is how you would hear about it; if you are selling land for development, it is part of the timeline your buyer faces.",
        ],
        claims: ["kuna-land-use-table-convention", "kuna-hearing-notice-300ft-15days", "ada-cities-administer-own-land-use"],
      },
      {
        heading: "The east side is planned for industry",
        body: [
          "Two overlays shape what Kuna expects on particular ground. The East Kuna Industrial Overlay District is intended for large-scale industrial development with more intensive uses than near the city core, and the city keeps separate water and sewer fee schedules for the Kuna East Industrial system. The Downtown Overlay District is meant for a mix of retail, office and residential use.",
          "Kuna also has two urban renewal districts: Kuna West, approved by the City Council on November 17, 2020 under Ordinance 2020-32, and Kuna East, approved on November 1, 2022 under Ordinance No. 2022-34. The city's position is that forming a district does not raise taxes; values inside it are split into a base and an increment, and the tax on the increment funds public infrastructure within the district. We have not mapped either boundary, so we do not say whether a particular parcel is inside one.",
        ],
        claims: ["kuna-east-industrial-overlay-and-utility-schedules", "kuna-two-urban-renewal-districts"],
      },
      {
        heading: "What that means for an offer",
        body: [
          "A Kuna property with an unpaid city utility balance, a recorded utility lien, an irrigation assessment in arrears or unpermitted work is not one we decline. Those are costs, and we would rather show you how they shape the number than guess.",
          "When we make an offer we show the value we used, the work we think the property needs, our holding costs and the margin we run on. You can check every line, and you choose the closing date.",
        ],
        claims: [],
      },
      {
        heading: "Selling your Kuna house as-is, for cash",
        body: [
          "No repairs, no cleaning, no showings. Send the address or call (208) 779-4247; we come back with a number and the working behind it. We buy with our own capital, so there is no lender inspection or appraisal for the house to fail, and a vacant house, a rental with tenants or an inherited house is fine. If you accept, the sale closes through a local title company on the date you choose. Three weeks is realistic when you need speed, and later is fine.",
        ],
      },
    ],
  },

  "sell-my-house-fast-meridian-id": {
    intro: [
      "Sell your Meridian house as-is, for cash. We buy with our own capital, in any condition: no repairs, no cleaning, no showings. You choose the closing date, and three weeks is realistic when you need speed.",
      "Meridian has about 139,740 residents, grew 18.6% between the 2020 census base and the 2024 estimate, and had a median age of 38.7 in 2022 — close to the county's 39.1. It is Ada County's second-largest city, and most of what a seller needs to know about it comes down to how the city runs its utilities.",
      "We buy houses, land and commercial property across Meridian, in any condition.",
    ],
    sections: [
      {
        heading: "The city runs the water, from deep wells",
        body: [
          "Meridian's drinking water comes from the City of Meridian's own Water Division. The city draws it from 25 large-capacity groundwater wells, between 400 and 800 feet deep, tapping the Snake River Plain Aquifer System under the city. Federal records list the system as supplied by groundwater, serving 147,340 people through 47,953 connections — more than the city's own population estimate, so the system's reach and the city limits are not the same thing.",
          "That is a real difference from [Boise](/sell-my-house-fast-boise-id), where drinking water comes from private utilities regulated by the Idaho Public Utilities Commission. In Meridian a drinking water question about a city-served property goes to the city.",
        ],
        claims: ["meridian-city-water-from-aquifer-wells", "boise-drinking-water-private-utilities"],
      },
      {
        heading: "Utility debt stays with the property",
        body: [
          "This is the rule that matters most at a sale. City of Meridian utility accounts do not travel with the customer; they stay with the property. Any debt at the property for city services is the property owner's responsibility regardless of who used the services, and when the property is sold to another owner the account number changes.",
          "For a landlord, that means a tenant's unpaid city utility balance is the owner's to clear. The city offers optional tenant billing, but only when both the tenant and the owner or property manager have filed their forms, and the landlord still receives any delinquent notices for the property.",
          "At closing, the title, mortgage or finance company handling the sale has to request a final billing option from the city's Utility Billing office. The city says those requests are required so it can provide a final assessment for the property at the time of ownership transfer. An open balance does not stop us buying a house, but it is a line on the settlement statement, and we would rather find it early than at the closing table.",
        ],
        claims: ["meridian-utility-debt-stays-with-property", "meridian-final-utility-bill-at-ownership-transfer"],
      },
      {
        heading: "What water and sewer cost",
        body: [
          "Under the city's fee schedule effective March 5, 2025, water carries a base fee of $5.94 and a usage charge of $2.06 per 1,000 gallons, and sewer carries a base fee of $9.35 and a usage charge of $5.99 per 1,000 gallons. Turning water on costs $32.00.",
          "Sewer usage costs nearly three times what water usage does per 1,000 gallons, which is worth knowing when a vacant or rental property's bills look out of line. Rates are reset by the city, so treat these as the figures in force on that date, not as a quote.",
        ],
        claims: ["meridian-water-sewer-rates-march-2025"],
      },
      {
        heading: "Irrigation water is a separate system, run by districts",
        body: [
          "The city does not control any surface water. Most Meridian subdivisions have pressurized irrigation systems along the back-lot lines, mostly fed by ditch water that is not safe to drink, and those systems are not owned or operated by the City of Meridian. The city lists Nampa & Meridian, Settlers, Boise-Kuna and Pioneer among the irrigation providers operating in Meridian, and Nampa & Meridian is one of five districts operated through the Boise Project Board of Control.",
          "Where Nampa & Meridian Irrigation District built the subdivision system under contract, the district owns it and maintains the pump station and main line to the first valve off the main; the sprinkler system on the lot is the homeowner's. Its assessment is for the water right allocated to the land, not for the water used, and the district says the property owner is ultimately responsible for paying it, whether or not a mortgage company has been paying it. Land holding water rights in a second district gets a tax notice from both.",
          "An unpaid assessment is not a private matter between the owner and the district. Under Idaho Code 43-706 it is a lien on the land from the first Monday in March, ranking ahead of the mortgage, and it stays with the property when it is sold. Land with no access to irrigation water can petition for an exclusion, signed by every deeded owner.",
          "To find out who serves a lot, the district's own advice is to start with the bill, because water can come from an irrigation district or be serviced by a city, and then the Idaho Department of Water Resources' Irrigation Organizations Map, which does not show city-serviced water. We do not assume which provider serves a particular lot; we check.",
        ],
        claims: ["meridian-pressurized-irrigation-not-city", "meridian-easements-10ft-5ft", "boise-project-five-districts", "nmid-runs-subdivision-pressure-systems", "nmid-assessment-on-water-right-owner-liable", "id-irrigation-assessment-lien-survives-sale", "nmid-which-district-lookup"],
      },
      {
        heading: "Easements run along the lot lines",
        body: [
          "Meridian lots usually carry public utility, drainage and irrigation easements: typically 10 feet wide along the street and rear yards and 5 feet along each side yard, and wider where the purpose calls for it. Those strips carry lot drainage and the pressurized irrigation lines, and utility providers, the irrigation districts included, are allowed into them.",
          "For a seller the practical points are a shed, a fence or a planting bed built across one of those strips, and a buyer's surveyor who may notice. It is the kind of thing worth knowing before an inspection rather than during one.",
        ],
        claims: ["meridian-easements-10ft-5ft"],
      },
      {
        heading: "Four creeks carry the flood risk",
        body: [
          "In Meridian the mapped flood hazard follows creeks. The city's watershed has four creeks mapped by FEMA as Special Flood Hazard Areas: Fivemile, Eightmile, Ninemile and Tenmile Creeks.",
          "On request, Meridian Public Works will say whether a property is in or out of a Special Flood Hazard Area or a floodway, give base flood elevation data, share any recorded history of flooding at the site, and provide copies of Elevation Certificates for properties permitted through the city. A buyer's lender may well ask the flood question; the city can answer it from its own records.",
        ],
        claims: ["meridian-flood-four-creeks"],
      },
      {
        heading: "Part of the line to the street is yours",
        body: [
          "In Meridian a homeowner or business owner is responsible for maintaining and repairing a portion of the water and sewer lines that run from the property to the street. The city maintains the lines in the public right of way; if a problem is on the owner's side of the property line, the owner calls a plumber.",
          "Wastewater itself is treated by the city at its Wastewater Resource Recovery Facility. Stormwater is a different matter: the city sends those questions to the Ada County Highway District, which also holds the roads, because Idaho law bars a city inside a countywide highway district from maintaining or supervising city highways.",
        ],
        claims: ["meridian-private-sewer-lateral-owner-responsibility", "meridian-city-wastewater-treatment", "achd-city-highway-powers-abolished"],
      },
      {
        heading: "Looking up a Meridian permit record",
        body: [
          "Meridian's Building Services handles structural, fire, electrical, mechanical and plumbing permits inside the city, from application through field inspection, including remodels, fences, sheds and garages. Its permit information is searchable online without an account, and a free public user account gives a fuller search. Anything else goes to the City Clerk, who is the city's custodian of records and receives public records requests.",
          "If you are not sure whether a past project was permitted, that search is the place to start. An unpermitted garage conversion or patio cover is not a reason we walk away, but it is a cost, and it is better counted from the record than guessed.",
        ],
        claims: ["cv-meridian-building-services-scope", "meridian-permit-records-online"],
      },
      {
        heading: "Two lines on the tax bill inside an urban renewal district",
        body: [
          "Some Meridian property sits inside an urban renewal district, and its tax bill looks different. The city explains that such a property shows two line items, one for the base and one for the increment, but that the total charged is the same as for a property in the same taxing districts outside one. Districts close within 20 years of being created.",
          "The Meridian Development Corporation lists five districts with the years each was created and is due to end: Downtown (2002, scheduled to sunset in 2026), Ten Mile (2016 to 2036), Union (2020 to 2040), and Northern Gateway and Linder (both 2021 to 2041). Their boundaries are drawn on maps in the founding documents, and we have not matched any parcel to them.",
        ],
        claims: ["meridian-urd-two-tax-line-items", "r2-meridian-mdc-five-districts-sunsets"],
      },
      {
        heading: "Impact fees scale with the size of a new home",
        body: [
          "Meridian charges parks, fire and police impact fees on each new dwelling unit, banded by its climate-controlled floor area. For a unit of 1,701 to 2,500 square feet, the city's current fee schedule lists $4,119 for parks, $995 for fire and $402 for police. For an apartment building the band is set by the average size of its units.",
          "Those fees fall on whoever builds, so they matter most to a seller of land or of a lot a buyer plans to build on. We have not found a Meridian exemption for replacing an existing house, so we do not assume one.",
        ],
        claims: ["r2-meridian-impact-fees-by-floor-area"],
      },
      {
        heading: "Building activity, and projected growth",
        body: [
          "In August 2025 the city issued 103 new residential building permits with a stated total valuation of $23,900,907.90, and 10 new commercial permits valued at $35,391,436.00. That is one month, not a trend, and we do not present it as one.",
          "COMPASS, the regional planning association, projects Ada County will reach 715,820 people by 2050. Meridian is projected to grow 34.8 percent, against 25.8 percent for Boise and 128.7 percent for Kuna. A projection is not a forecast of prices and we do not treat it as one — but it does show where the region's own planning expects people to go.",
        ],
        claims: ["meridian-building-permit-activity-aug-2025", "ada-2050-projection-divergence"],
      },
      {
        heading: "What that means for an offer",
        body: [
          "A Meridian house with an unpaid city utility balance, a failing sewer lateral or a tenant who left owing money is not one we decline. Those are costs, and we would rather show you how they shape the number than pretend they are not there.",
          "When we make an offer we show the value we used, the work we think the property needs, our holding costs and the margin we run on. You can check every line.",
        ],
        claims: [],
      },
      {
        heading: "Selling your Meridian house as-is, for cash",
        body: [
          "No repairs, no cleaning, no showings. Send the address or call (208) 779-4247; we come back with a number and the working behind it. We buy with our own capital, so there is no lender inspection or appraisal for the house to fail, and a vacant house, a rental with tenants or an inherited house is fine. If you accept, the sale closes through a local title company on the date you choose. Three weeks is realistic when you need speed, and later is fine.",
        ],
      },
    ],
  },
  "sell-my-house-fast-garden-city-id": {
    intro: [
      "Sell your Garden City house as-is, for cash. We buy with our own capital, in any condition: no repairs, no cleaning, no showings. You choose the closing date, and three weeks is realistic when you need speed.",
      "Garden City has about 12,936 residents, grew 5.1% between the 2020 census base and the 2024 estimate, and had the oldest median age of any Ada County city in 2022, at 47.1. It sits along the Boise River, and the river shapes several of the rules that matter most to a seller here.",
      "We buy houses, land and commercial property across Garden City, in any condition.",
    ],
    sections: [
      {
        heading: "The 50 percent rule in the flood hazard area",
        body: [
          "This is the single most important rule for anyone selling an older house near the river. In Garden City's Special Flood Hazard Area, any reconstruction, rehabilitation, addition or other improvement to a building that equals or exceeds 50 percent of the building's value must meet the same standards as new development.",
          "So a buyer planning a major renovation is not just buying a renovation. Past that threshold the whole building has to be brought up to new-construction flood standards, which changes what the project costs and therefore what that buyer can pay. How the city calculates the building's value is a question for the city, and we do not estimate it for anyone.",
          "Smaller work can still need the city. A floodplain application is required before working in the floodplain or floodway, before removing or damaging vegetation within 25 feet of the river or on the riverside of the greenbelt or nature path, and to request a Letter of Map Change to a flood map.",
        ],
        claims: ["gardencity-floodplain-50-percent-improvement-rule"],
      },
      {
        heading: "Water and sewer are a city system",
        body: [
          "Garden City's public water system is the Garden City Water and Sewer System. Federal records list it as owned by local government and supplied by groundwater, serving 12,500 people through 4,595 connections.",
          "That is a different arrangement from [Boise](/sell-my-house-fast-boise-id) next door, where drinking water comes from private utilities regulated by the state. Federal records also list a few small private systems with Garden City addresses, so a particular property's water service is worth confirming rather than assuming.",
          "The water itself comes from city wells, treated with small amounts of disinfectant and low doses of polyphosphate. The city draws a clear line on repairs: it cannot deal with plumbing inside a building, but it can deal with the water line from the street to the meter.",
        ],
        claims: ["gardencity-city-water-and-sewer-system", "boise-drinking-water-private-utilities", "gardencity-wells-and-street-to-meter"],
      },
      {
        heading: "The city bill follows the house, and the title company tells the city",
        body: [
          "Garden City bills water, sewer and trash on one statement, in arrears. Its Utility Billing Department puts the sale rule plainly in its letter to new owners: debts for utility bills stay with the property and do not travel with the customer. The title company gives the city the buyer's name and the closing date, the city reports any outstanding balance on the property, and the account moves into the buyer's name on that closing date, with charges starting immediately even if the buyer moves in later. The seller's final bill runs through the last date of ownership or occupancy.",
          "A landlord has one more step. Every renter must complete a Renters Agreement with the city and pay a security deposit, so a rental changing hands with a tenant in place has an account arrangement to carry over as well as a lease.",
        ],
        claims: ["gardencity-utility-debt-stays-transfer-at-closing", "gardencity-renters-agreement-deposit"],
      },
      {
        heading: "Work done without a permit has a utility consequence",
        body: [
          "Garden City is direct about unpermitted work. It may lead to the city discontinuing utility services to the property, an infraction with a fine of up to $100, and double the permit fees. Anyone caught more than twice in a calendar year can face a misdemeanor and a year's ban from working inside city limits, and emergency work still needs a permit, pulled within one working day if it happens after hours.",
          "For a seller, the record matters more than the fine. Past work without a permit tends to surface when a buyer's inspector asks for the paperwork, and copies of city records are requested from the City Clerk on the city's own form.",
        ],
        claims: ["gardencity-work-without-permit-consequences", "gardencity-wells-and-street-to-meter"],
      },
      {
        heading: "Zoning, and an overlay worth checking",
        body: [
          "Garden City runs its own planning. Its Planning Division handles annexation, zoning, conditional use permits, design review, signage and subdivisions, and like every city in Ada County it administers land use inside its own limits under its own code.",
          "The uses allowed in each zoning district are set out in Garden City Code Table 8-2B-1, with further conditions on some uses under Code 8-2C. A property can also sit in the Neighborhood Commercial Node overlay district, whose allowed uses are in Table 8-3A-1. District letters here mean what Garden City's code says they mean, and they do not carry over from neighbouring cities.",
        ],
        claims: ["gardencity-zoning-table-and-ncn-overlay", "gardencity-planning-scope", "ada-cities-administer-own-land-use"],
      },
      {
        heading: "Roads belong to the highway district",
        body: [
          "Garden City sits inside a countywide highway district, and Idaho law bars a city in that position from maintaining or supervising city highways or taxing for them. A question about a curb, a driveway approach or the frontage of a Garden City property is [a highway district matter](/guides/selling-land-or-acreage-in-ada-county).",
        ],
        claims: ["achd-city-highway-powers-abolished"],
      },
      {
        heading: "Projected growth, from a small base",
        body: [
          "COMPASS, the regional planning association, projects Ada County will reach 715,820 people by 2050, with the growth very unevenly distributed. Garden City is projected to grow 42.0 percent, against 25.8 percent for Boise and 128.7 percent for Kuna, while unincorporated Ada County is projected to lose 36.0 percent of its population.",
          "Garden City starts from the smallest base of the county's cities, so a large percentage is still a modest number of people. A projection is not a forecast of prices and we do not treat it as one — but it does show where the region's own planning expects people to go, and a riverside city with little open land is not a place that absorbs that growth by spreading outward.",
        ],
        claims: ["ada-2050-projection-divergence"],
      },
      {
        heading: "What that means for an offer",
        body: [
          "A Garden City property in the flood hazard area, or one that needs more work than the 50 percent line comfortably allows, is not one we decline. It is one where the rules shape the number, and we would rather show you how they do.",
          "When we make an offer we show the value we used, the work we think the property needs, our holding costs and the margin we run on. You can check every line.",
        ],
        claims: [],
      },
      {
        heading: "Selling your Garden City house as-is, for cash",
        body: [
          "No repairs, no cleaning, no showings. Send the address or call (208) 779-4247; we come back with a number and the working behind it. We buy with our own capital, so there is no lender inspection or appraisal for the house to fail, and a vacant house, a rental with tenants or an inherited house is fine. If you accept, the sale closes through a local title company on the date you choose. Three weeks is realistic when you need speed, and later is fine.",
        ],
      },
    ],
  },

  "sell-my-house-fast-ada-county": {
    intro: [
      "We buy property across Ada County: houses, land, rentals, multifamily, office and industrial buildings, and parcels with problems attached. Six incorporated cities sit inside the county, plus an unincorporated balance of roughly 64,000 people, and which side of a city limit a property falls on changes who you deal with about almost everything.",
      "That distinction is the single most useful thing to understand before you sell here, and most of what is written about selling in Ada County gets it wrong.",
    ],
    sections: [
      {
        heading: "Most property administration here is county-wide",
        body: [
          "The Ada County Assessor values every non-exempt property in the county at market value as of January 1, whether it sits in Boise, Meridian or open ground outside any city. The same office maintains parcel boundaries, road rights-of-way and Records of Survey, and it runs addressing for every parcel in the county.",
          "The Treasurer, separately, is the ex officio tax collector, collecting for every taxing district including the cities and schools. So the office that decides what a property is worth is not the office that takes payment for it, and a delinquency question goes to the Treasurer rather than the Assessor.",
          "Deeds are recorded with the Ada County Recorder regardless of city. Recorded documents are open to public inspection under Idaho Code 31-2419, and redacting personal information before recording is the responsibility of whoever submits the document, not the Recorder's office.",
        ],
        claims: ["ada-assessment-market-value-jan-1", "ada-treasurer-ex-officio-tax-collector", "ada-recorder-maintains-ownership-documents", "ada-recorder-pii-redaction-is-submitter-duty"],
      },
      {
        heading: "Land use is not county-wide, and that catches people out",
        body: [
          "Ada County Development Services processes land use applications in unincorporated Ada County only. Its engineering division handles preliminary plats, drainage, private roads, hillside applications, floodplain permits and boundary adjustments, again in the unincorporated county only. Inside Boise, Meridian, Eagle, Kuna, Star or Garden City, the city administers its own code.",
          "Code enforcement follows the same line. Ada County states plainly that it does not enforce code violations within city limits and directs city residents to their municipal agency. Complaints in the unincorporated county are investigated by a code enforcement specialist, and the complaining party stays anonymous.",
          "So advice to \"contact Ada County about permits\" is wrong for the great majority of county residents. It is right for the roughly 64,000 people outside any city, and wrong for everyone else.",
          "For that unincorporated ground the zoning code is new. The Board approved Ordinance No. 1002 on October 28, 2025, and Development Services says the county updated its zoning ordinance in November 2025. By its own terms the new Title 8 took effect on the date it was published, repealing and replacing every earlier county zoning ordinance. We have not found the exact publication date in a county record, so we do not give one. What matters for a seller of rural or edge-of-city land is simpler: anything you were told about the county's zoning before late 2025 was said under a code that no longer exists.",
        ],
        claims: ["ada-planning-unincorporated-only", "ada-engineering-scope-unincorporated", "ada-code-enforcement-unincorporated-only", "ada-zoning-ordinance-updated-november-2025"],
      },
      {
        heading: "Roads and septic answer to neither the city nor the county",
        body: [
          "Idaho Code 40-1406 bars a city inside a countywide highway district from maintaining city highways or levying property taxes for their construction, repair or maintenance. A single countywide district is responsible for the design, construction and maintenance of city rights-of-way and their curbs, gutters, sidewalks and retaining walls. Ada County confirms it controls no roadway infrastructure of its own.",
          "That has a practical consequence for sellers: a question about a sidewalk, a driveway approach or the road frontage of a parcel in Ada County is [a highway district matter](/guides/selling-land-or-acreage-in-ada-county), not a city public works matter.",
          "There is no second highway district to check. Idaho law permits only one countywide highway district to operate within a county whose electorate has voted to form one, so the question of which road authority governs a given Ada County parcel has exactly one answer, everywhere in the county. That is unusual enough that people arriving from other states look for a city equivalent that does not exist here.",
          "Septic is different again. Central District Health, a public health district covering Ada, Boise, Elmore and Valley counties, permits septic systems and verifies shallow injection wells. It is not a city building department and not a county one.",
        ],
        claims: ["achd-city-highway-powers-abolished", "achd-responsibility-within-cities", "achd-is-ada-district", "achd-one-district-per-county", "ada-septic-authority-cdh"],
      },
      {
        heading: "The county's cities are not growing at the same rate",
        body: [
          "Between the 2020 census base and the 2024 Census population estimate, Star grew 61.4% and Kuna 21.0%, while Boise grew 1.0%. Those are not variations on a trend; they are different property markets inside one county.",
          "COMPASS projections reverse parts of that picture by 2050. Kuna is projected to grow a further 128.7% while Star is projected to add 12.3%, and unincorporated Ada County is projected to lose 36% of its population on the assumption that cities annex the areas they already plan for.",
          "Two estimates of Ada County's population circulate and both are legitimate: COMPASS puts 2024 at 557,590, the Census Bureau's Vintage 2024 estimates put it at 535,799. They are different bodies measuring the same year, and anyone quoting one without naming it is inviting confusion.",
          "We use the Census figure of 535,799 where a single number is needed, and name it as an estimate rather than a count. The two sources differ by about 4%, which is small enough to ignore in conversation and large enough to matter if someone is building an argument on it.",
        ],
        claims: ["ada-growth-divergence-2020-2024", "ada-2050-projection-divergence", "ada-population-two-estimates", "ada-population-2024"],
      },
      {
        heading: "Areas of City Impact",
        body: [
          "Idaho uses a planning device with no California equivalent: the Area of City Impact, unincorporated land planned jointly with the city it adjoins. Of the people living in unincorporated Ada County, 78.8% live inside one. Only about 13,467 people, 2.4% of the county, live outside any ACI, many of them in the planned communities of Avimor, Cartwright Ranch, Dry Creek Ranch and Hidden Springs.",
          "Property inside an ACI is on county jurisdiction today and is a likely annexation target tomorrow. Boise's ACI holds 284,860 people against a city population of 250,060, which is the clearest illustration of the gap between where a city governs and where it plans.",
        ],
        claims: ["ada-area-of-city-impact", "ada-planned-communities-outside-aci"],
      },
      {
        heading: "Irrigation is a live question on a great many parcels",
        body: [
          "Ada County's own map identifies [27 separate irrigation entities](/guides/selling-land-or-acreage-in-ada-county) operating in the county: irrigation districts, ditch companies, lateral associations, water companies and a drainage district. Settlers Irrigation District alone delivers to 13,187 acres across West Boise, Meridian and South Eagle. Boise-Kuna and Nampa & Meridian are separate districts serving different ground.",
          "Title to the Boise Project's transferred works (Diversion Dam, the New York Canal, roughly 1,500 miles of canals and laterals) remains with the United States. A canal or lateral crossing a parcel here can therefore sit on federally titled works, which changes who a landowner deals with about access and encroachment.",
        ],
        claims: ["ada-27-irrigation-entities", "settlers-district-coverage", "boise-project-federal-title"],
      },
      {
        heading: "What the assessed value is, and what it is not",
        body: [
          "The Assessor's own guidance is unusually direct about this: the assessor does not set a value for a property, but estimates what a typical buyer would reasonably pay for it on January 1. An assessment is an opinion of market value on a fixed date, not a price and not a ceiling.",
          "It is also not the product of a fresh inspection every year. State law requires a physical inspection every five years, so roughly 20% of Ada County properties are reappraised in a given year and the rest are trended on market conditions. A property that has changed materially since its last inspection may be carrying a value derived from a trend rather than from anyone looking at it.",
          "Which appraiser handles a property depends on what it is. Ada County's residential appraisers value detached single-family dwellings, attached townhomes, condominium units, multi-family residential up to four units, and manufactured housing. Apartments and higher-density residential go to commercial appraisers instead, the same four-unit line that separates residential from commercial in lending and in this county's own staffing.",
        ],
        claims: ["ada-assessor-does-not-set-value", "ada-reappraisal-five-year-cycle", "ada-residential-appraisal-scope"],
      },
      {
        heading: "The homeowner's exemption ends with your ownership",
        body: [
          "Idaho's homeowner's exemption takes the lesser of the first $125,000 of a home's market value for assessment purposes, or 50% of that value, off the taxable value. To qualify for a tax year, an owner must own and occupy the home on or before the last county business day in December, and must file the application by the close of business on that same day.",
          "Once approved it carries forward for as long as that owner owns and occupies the house. A sale ends it: the Ada County Assessor says that if the property is sold, the new owner must file an application of their own. Since 2026 the exemption is not prorated, and the full amount applies from January 1 of the year a complete application is approved. How the year's tax bill is split between buyer and seller at closing is a matter for the contract, not the exemption statute.",
        ],
        claims: ["pt-homestead-exemption-cap-in-force-2026", "ada-homeowners-exemption-deadline", "pt-ada-new-owner-must-apply", "pt-homestead-exemption-not-prorated"],
      },
      {
        heading: "Recording the deed: what the Recorder will take",
        body: [
          "Every deed for an Ada County property is recorded with the Ada County Recorder, whichever city it sits in. Idaho Code 55-601 requires a conveyance to be a written instrument signed by the person giving up the property, or an agent authorised in writing, and to carry the grantee's name and complete mailing address. Under Idaho Code 55-805, the signature has to be acknowledged before the deed can be recorded.",
          "The Recorder adds practical rules of its own. Documents must be in dark blue or black ink so they scan, and one with no room for a recording label needs a cover sheet, which can raise the fee. The county's predictable fee for a deed is $15.00 for the first 30 pages, plus $3.00 for each page after that.",
          "Two things surprise people. The Recorder's Office keeps no blank forms and points people to title companies for them. And it does not mail anyone a deed when a mortgage is paid off; it sells copies of recorded documents at $1.00 a page, with $1.00 more for a certified copy. Deeds are currently blocked from online viewing, so a copy has to be requested from the office. The record itself stays open to the public under Idaho Code 31-2419.",
        ],
        claims: ["cl-deed-writing-subscribed-grantee-address", "cl-acknowledgment-required-to-record", "ada-recorder-deed-ink-and-cover-sheet", "cl-ada-deed-recording-fee", "ada-recorder-no-forms-no-deed-mailed", "cl-ada-deeds-blocked-online", "ada-recorder-maintains-ownership-documents"],
      },
      {
        heading: "How the Assessor learns the house has sold",
        body: [
          "Nobody files a sale with the Assessor directly. Idaho Code 63-307 tells the assessor to work out current ownership from documents recorded with the county recorder, or from evidence such as a title insurance policy, and the Ada County Assessor says its ownership records are based on recordings in the Recorder's Office.",
          "Two consequences follow. The Assessor notes that recordings made after January 1 do not show in its assessment records until the following assessment year, because the assessment is fixed as of 12:01 a.m. on January 1 under Idaho Code 63-205. And when a deed is drawn up, the Assessor reminds owners that the grantor has to be named exactly as on the deed that gave them title. A name that has changed since then, through marriage or a trust, is worth raising with the title company early.",
        ],
        claims: ["ada-assessor-ownership-from-recordings", "idaho-assessment-lien-date-statutory"],
      },
      {
        heading: "Property tax at closing, and what happens if it goes unpaid",
        body: [
          "The Treasurer bills each year's taxes in November, based on values assessed as of January 1, with the full year due in December or in two installments, December and the following June. Miss the December installment and the Treasurer adds a 2% late charge plus interest at 1% a month from January 1. Payments go to the oldest balance first, so a payment meant for this year can be swallowed by an older arrear.",
          "Unpaid property tax is a first and prior lien on the property under Idaho Code 63-206, ranking ahead of the other liens on it, and the lien does not expire.",
          "If it is not paid, the county's process is slow but it ends. The Treasurer explains that each January 1, property with a three-year delinquency may be considered for tax deed. A notice goes by certified mail two to five months before the hearing, and partial payments are accepted but do not stop the process. Until the county sells or transfers the property, the owner can still redeem it by paying all the taxes, late charges, interest and costs. After a tax deed the county holds a public auction within 14 months, and any money left after parties with an interest are paid goes back to the owner of record when the deed issued.",
        ],
        claims: ["pt-ada-billed-november-due-december", "pt-late-charges-if-half-unpaid", "pt-ada-late-charge-and-interest-rates", "ln-property-tax-first-lien-perpetual", "ada-treasurer-tax-deed-steps", "id-tax-deed-three-year-delinquency"],
      },
      {
        heading: "A converted manufactured home has stopped being movable property",
        body: [
          "Idaho requires manufactured homes to be assessed as other residential housing, with those assessments entered on the property roll. That is the assessment side of a conversion. The ownership side is stricter than most people expect.",
          "Once an Idaho manufactured home has been [converted to real property](/guides/selling-a-manufactured-home-in-idaho) it is deemed a fixture and an improvement to the land, and physical removal is prohibited without the consent of every person or entity holding an interest in the real property or title to any estate in it. The homeowner has to obtain a title report from a title insurance company to establish whose consent that means. Owners of rights-of-way, easements and subsurface rights are excluded from the requirement.",
          "There is a notice period as well: at least thirty days' written notice to the county assessor before removal, and the assessor must require written evidence that the necessary consents have been obtained. So a converted home is not something an owner can decide to relocate on their own timetable, and that constraint sits on the property rather than on the person.",
        ],
        claims: [
          "id-manufactured-homes-assessed-as-residential",
          "id-manufactured-home-removal-requires-consent",
          "id-manufactured-home-removal-notice-and-taxes",
        ],
      },
      {
        heading: "When an estate has nobody to administer it",
        body: [
          "The Ada County Treasurer serves as [ex officio public administrator](/guides/selling-an-inherited-house-in-idaho) as well as ex officio tax collector, responsible for administering the estates of decedents who have no one to administer the estate.",
          "That is a narrow office and it is rarely the right answer for a family that simply has not started probate yet. But it exists, it is county-level, and it means an Ada County property whose owner has died without anyone stepping forward is not in a legal vacuum. There is a named office with a statutory role.",
        ],
        claims: ["ada-treasurer-ex-officio-public-administrator"],
      },
      {
        heading: "The flood maps in force here were adopted in 2020",
        body: [
          "Ada County adopted new FEMA Flood Insurance Rate Maps in June 2020. A parcel's flood status is therefore governed by maps that are recent enough to differ from whatever a prior owner, an older survey or an out-of-date listing described.",
          "This matters most on the properties where it is least expected: ground near the Boise River and its side channels, and parcels crossed by the canal and lateral network described above. Whether a specific parcel is in or out of a mapped zone is a question for the current effective map, not for institutional memory.",
        ],
        claims: ["ada-fema-firm-adopted-2020"],
      },
      {
        heading: "Selling with a tenant in place",
        body: [
          "One narrow but useful fact about the local machinery: the Ada County Court Assistance Office publishes eviction forms, and those forms may be used only to evict [a tenant who has not paid rent](/guides/selling-a-rental-with-tenants-in-idaho). They cannot be used to evict a tenant who is current on rent, to sue for back rent, or to move a mobile home from a rented space.",
          "That is a statement about the forms, not about the limits of Idaho landlord-tenant law. It is worth knowing because an owner who assumes the self-service route covers every situation can lose weeks discovering it does not. An occupied sale is usually the simpler path anyway, since a tenancy survives a change of ownership and the deposit obligation transfers with it.",
        ],
        claims: ["ada-eviction-forms-nonpayment-only"],
      },
      {
        heading: "Where the parcel record actually lives",
        body: [
          "The Assessor maintains comprehensive records on all real and personal property in the county (parcel ownership, land and improvement characteristics, parcel boundaries and road rights-of-way) and manages the addressing process for every parcel. Its online maps carry parcel boundaries, streets, hydrography, section boundaries, city limits, parks and schools, alongside Records of Survey and subdivision plats.",
          "For most questions a seller has about what they actually own, that is the first place to look, and it is county-wide regardless of which city a property sits in. City limits are a layer on the county's map rather than a separate mapping system.",
          "Permits are the opposite. Ada County's building division reviews plans and inspects buildings, and its permitting division accepts building, manufactured home and mechanical permit applications through an online portal, for the unincorporated county. Cities inside a countywide highway district do retain a few defined powers of their own: responsibility for local improvement district bonds issued before the city highway system was dissolved, the ability to spend city funds on trees, shrubs, grass and other plants in rights-of-way, and control of parking meters. Beyond that short list, the road is the highway district's.",
        ],
        claims: ["ada-assessor-maintains-parcel-gis", "ada-building-division-scope", "achd-cities-retain"],
      },
    ],
  },

  "sell-my-house-fast-boise-id": {
    intro: [
      "Sell your Boise house as-is, for cash. We buy with our own capital, in any condition: no repairs, no cleaning, no showings. You choose the closing date, and three weeks is realistic when you need speed.",
      "Boise is the largest city in Ada County at roughly 238,000 people, and the slowest growing — about 1.0% between the 2020 census base and the 2024 estimate, against 61.4% in Star and 21.0% in Kuna. A market that is not adding people is a market where the existing housing stock, and its condition, does most of the work.",
      "We buy houses, infill lots, multifamily, office and industrial property across the city.",
    ],
    sections: [
      {
        heading: "The foothills overlay changes what a buyer can do",
        body: [
          "Boise maintains a Wildland Urban Interface Overlay covering land at higher risk of wildland fire. Its provisions apply to all new structures and additions built after its effective date, and to renovations that increase an existing structure's gross floor area by more than 49 percent. Interior-only renovations are excepted regardless of area.",
          "For a seller in the foothills that threshold matters more than it first appears. A buyer planning a modest addition may stay outside it; a buyer planning to nearly half again the size of the house does not, and their construction costs change accordingly. It is a question worth knowing the answer to before you price the property.",
        ],
        claims: ["boise-wui-overlay-district"],
      },
      {
        heading: "Sewer connection is mandatory, and there may be a second fee",
        body: [
          "Residential and commercial buildings in Boise must connect to the city sewer system, which Public Works operates across more than 1,000 miles of pipe. That is a straightforward contrast with unincorporated Ada County, where on-site septic is permitted under Central District Health.",
          "Less well known is the assessment fee. Boise charges a one-time assessment, separate from the connection fee, for properties that have never been developed or never connected. The city names three cases where it will likely apply: building on a lot being split, building on a previously undeveloped lot, and connecting an existing building to sanitary sewer.",
          "If you are selling an infill lot or a parcel you have split, that fee lands on your buyer's numbers and therefore on your price. The city publishes no amounts, so we do not quote one — but the cost is real and it is worth asking about before you assume a lot is clean.",
          "Connection fees themselves went up recently. Boise began adjusting them on October 1, 2024, phasing to full cost of service over three years, after leaving them unchanged since 2014. Residential connection fees now scale with the square footage of the home and apply to new or expanding houses, multifamily units and accessory dwelling units, so a buyer planning an ADU or a larger replacement house is pricing a different fee than the one a neighbour paid a few years ago.",
          "A Boise house still on septic is not stuck there by default, but it cannot simply ask for a pipe either. The city builds sewer extensions alongside Ada County Highway District projects, at property owners' request, or where there is evidence of significant septic problems, and approval turns on how many residents sign a petition agreeing to pay and connect, the cost and length of the line, and whether funds are available.",
        ],
        claims: ["boise-sewer-connection-required", "boise-sewer-assessment-fee-undeveloped", "ada-septic-authority-cdh", "boise-sewer-connection-fees-phased-2024", "boise-sewer-extension-by-petition"],
      },
      {
        heading: "Flooding here has three sources, not one",
        body: [
          "Boise participates in the National Flood Insurance Program because of flood threats from the Boise River, from foothills gulches, and from several intermittent stream channels on the upper bench. Properties nowhere near the river can sit in a mapped hazard area for the second or third reason.",
          "Ada County adopted new FEMA Flood Insurance Rate Maps in June 2020, and any development in the floodplain requires a Floodplain Development Permit. We do not tell sellers what zone their property is in — that comes from the current FEMA map for the specific address, and nowhere else.",
        ],
        claims: ["boise-nfip-flood-sources", "ada-fema-firm-adopted-2020", "ada-floodplain-development-permit"],
      },
      {
        heading: "A flat market makes condition the variable",
        body: [
          "Boise added roughly 1.0% to its population between the 2020 census base and the 2024 estimate. Meridian added 18.6% and Star 61.4% over the same period. Where a city is not absorbing new arrivals, prices are set far more by the condition and character of the houses already standing than by pressure from newcomers.",
          "Boise's median age was 37.9 in 2022, against 47.1 in Garden City and 30.2 in Kuna. That spread across a single county is a reasonable proxy for very different housing stock and very different reasons for selling — estates and downsizing at one end, growing households at the other.",
          "For a seller it means the honest comparison is not against what a similar house fetched in Meridian last quarter. It is against what your house, in its condition, is worth to the buyers actually in this market.",
        ],
        claims: ["ada-growth-divergence-2020-2024", "ada-median-age-divergence"],
      },
      {
        heading: "Infill lots carry costs that are easy to miss",
        body: [
          "A lot split in Boise touches several things at once. The sewer assessment fee applies to previously undeveloped ground and to lots being split. The Assessor, who maintains parcel boundaries and Records of Survey, also runs addressing for every parcel in the county, so a new lot needs an address before it is a usable thing.",
          "Idaho's domestic water statute is worth knowing here too, even inside the city: it caps domestic use at 13,000 gallons a day including half an acre of irrigation, and expressly excludes subdivisions of five or more lots and multiple-dwelling developments. That is a constraint on what a parcel can become, not just on how it is watered — and the statute was amended twice in two years, so it is worth checking rather than assuming.",
          "None of this makes an infill lot a bad asset. It means the number a buyer can pay is the residual after those costs, and a seller who knows them is negotiating from the same page.",
        ],
        claims: ["boise-sewer-assessment-fee-undeveloped", "ada-assessor-maintains-parcel-gis", "id-domestic-water-13000-gpd", "id-water-subdivision-five-lots"],
      },
      {
        heading: "The zoning code was replaced in December 2023",
        body: [
          "Boise did not amend its zoning code; it replaced it. The City Council approved a modern zoning code after community testimony and revisions, and it took effect on 1 December 2023.",
          "That matters to a seller for a simple reason. Owners carry an understanding of what their lot allows, usually formed when they bought, and for anyone who bought before the end of 2023 that understanding was formed under a different code. What can be added, what can be built and what uses are allowed may not be what they were.",
          "None of that means a given property gained or lost anything — the effect varies by district and by parcel, and we do not assume it in either direction. It means the current code is the one to read, and an old recollection is not.",
        ],
        claims: ["boise-modern-zoning-code-effective-2023"],
      },
      {
        heading: "Short-term rental licensing ended in May 2026",
        body: [
          "Until recently a Boise short-term rental needed a city license. On 12 May 2026 the City Council approved repeal of the short-term rental ordinance to align with a change in Idaho law on local regulation of short-term rentals, and from 18 May 2026 a city license is no longer required.",
          "For a buyer weighing a Boise house as a short-term rental, that removes one layer. It does not remove the rest: the city says it will keep enforcing nuisance, noise, parking, safety and occupancy rules consistent with state law and city code. A license that no longer exists is not the same thing as a use that is unregulated.",
        ],
        claims: ["boise-str-license-repealed-2026"],
      },
      {
        heading: "Impact fees: replacing a house is not adding one",
        body: [
          "Boise charges development impact fees to cover the cost new development places on regional parks, local parks, fire response and policing. They are not the same for every project: new residential development pays parks, fire and police fees, while commercial development pays only fire and police.",
          "The exemptions are where the difference between buyers is decided. The city exempts replacing a residential unit — including [a manufactured home](/guides/selling-a-manufactured-home-in-idaho) — with another on the same lot, as long as the number of service units does not increase. Remodeling that adds no service units is exempt, and so is rebuilding the same floor area after a fire or other catastrophe if it is ready to occupy within two years.",
          "So a buyer who plans to replace an old house with one new house is in a different position from a buyer who plans to put more units on the same lot. The second carries fees the first does not, and that shows up in what each can pay. We are not quoting amounts: the city publishes a separate fee schedule, and it changes when the underlying study is updated.",
        ],
        claims: ["boise-impact-fees-by-development-type", "boise-impact-fee-replacement-exemption"],
      },
      {
        heading: "Demolition is a permitted process, with a reuse step built in",
        body: [
          "A teardown in Boise is not a same-week job. Demolition and deconstruction go through a building permit, and the application includes a material and waste management plan with photographs of the building and the materials in it.",
          "The city then emails reuse and recycling companies about what is available and allows up to five business days for them to respond before salvage is arranged. A building inspector sets a bond, and any hazardous materials have to be abated under the applicable EPA and other requirements.",
          "If you are selling an older house on a lot a buyer values for what could replace it, that timeline and that bond are part of the buyer's cost — and so part of the price.",
        ],
        claims: ["boise-demolition-waste-plan-and-reuse-window"],
      },
      {
        heading: "Ten historic districts, and a review for exterior changes",
        body: [
          "Boise has ten designated historic districts. Six are residential — East End, East Main Street, Harrison Boulevard, Hays Street, North End and Warm Springs Avenue — three are commercial, and one, Spaulding Ranch, is agricultural.",
          "Inside them, most exterior changes beyond standard maintenance need a Certificate of Appropriateness: new construction, additions, accessory buildings, and changes such as siding and windows. The level of review depends on the district, the property's status and the scope of the work.",
          "Two cautions. A neighbourhood name is not a boundary: whether a particular house sits inside a historic district is answered by the city's address lookup, not by what people call the area. And most changes is not all of them. But a buyer planning to re-side or re-window a house in one of these districts is taking on a review as well as a project, and a seller who knows that can price it rather than be surprised by it.",
        ],
        claims: ["boise-ten-historic-districts", "boise-historic-certificate-of-appropriateness"],
      },
      {
        heading: "Drinking water comes from a regulated private utility",
        body: [
          "In Boise the water company and the city are different organisations. Drinking water is supplied by privately owned utilities regulated by the Idaho Public Utilities Commission — chiefly Veolia Water Idaho and, for a much smaller area, Capitol Water Corporation. Both bill a 3 percent City of Boise franchise fee to customers inside city limits, for Veolia under City of Boise Ordinance No. 5623.",
          "The two are very different in scale. In 2023 the Commission described Veolia as providing service to Boise City and surrounding areas, with approximately 105,000 customers across [Ada County](/sell-my-house-fast-ada-county); its annual report that year put Veolia at 105,445 customers and Capitol Water at 3,019. Those are 2023 figures, and Veolia's customers extend beyond the city, so neither number is a count of Boise households.",
          "Their water comes from different places too. Veolia runs two treatment plants, Columbia and Marden, alongside dozens of wells, and federal records classify its primary source as surface water. Capitol Water supplies groundwater from four primary wells and a backup well. The City of Boise, for its part, states that 70 percent of Boise's drinking water supply comes from groundwater — a different measure from the federal classification, and we do not try to reconcile the two.",
          "For a seller the practical point is simple. Which utility serves a property is a question for the utility, not for city hall, and a buyer taking over service is dealing with a company whose rates are approved by a state commission rather than by the city council. We do not assume which of the two — or which of the smaller private systems in the area — serves any particular address.",
        ],
        claims: ["boise-drinking-water-private-utilities", "boise-water-utility-customer-counts-2023", "boise-veolia-surface-and-groundwater", "boise-capitol-water-wells"],
      },
      {
        heading: "The city bill, and what to settle before closing",
        body: [
          "The water company and the city are different organisations in Boise, but sewer and trash are billed by the city. Boise Utility Billing has an online self-service Escrow Tool that gives instant escrow quotes on many residential accounts. Sewer deferrals are handled separately: a payoff request needs a signed Borrower's Authorization, and the city answers within 3 business days. If your property has one, it is a line to clear before the sale, not after.",
          "A sewer deferral is an agreement under Boise City Code 10-2-8 to pay the sewer connection fees in installments instead of up front; for an existing house the term can run up to fifteen years, with interest at the Wall Street Journal prime rate on the day it is signed. The city records the agreement with the Ada County Recorder, so it shows up on a title search. Unless the department agrees otherwise in writing, what is still owed plus interest falls due in full when the property is sold or otherwise transferred, and the unpaid amount is a lien due on sale.",
          "Two billing rules explain bills that look wrong. Sewer usage is charged on winter water use, measured from October 15 to April 15, which the city treats as indoor use only. A house on a private well is billed on the number of residents, with a default of four. Unpaid charges carry a late payment charge of 1.5% per month.",
          "A house that will sit empty while it is sold can go on vacancy status, but only on the city's terms. Vacancy is limited to six months, cannot be backdated, and needs the property empty for at least 30 consecutive days with no sewer or trash service used. Base fees continue; only usage fees stop. If the city finds service used during the vacancy, the owner pays occupied rates for the whole period. 'Property is for sale/rent' is one of the reasons on the form, so an estate or a vacant rental qualifies, as long as the request goes in before the vacancy, not after.",
        ],
        claims: ["boise-escrow-quote-and-sewer-deferral-payoff", "r2-boise-sewer-fee-deferral-due-on-sale", "boise-sewer-billed-on-winter-water-use", "boise-utility-vacancy-six-months"],
      },
      {
        heading: "The city runs irrigation in fourteen subdivisions, not the rest",
        body: [
          "Pressure irrigation in Boise is a second water system, separate from drinking water. The City of Boise operates and bills it in a short list of subdivisions: Azure #1, #2 and #3, Darien, Bradford, Graystone #1 and #2, Steamboat, Linshire, Whidby, Chaucer, Eronel, Palm Court and Ashbrook. Anywhere else in the city, irrigation water belongs to an irrigation district or canal company, and the city publishes an address lookup showing whose boundary a house falls inside.",
          "That matters at a sale because a district charge behaves differently from a city bill. Idaho Code 43-706 makes an irrigation district assessment a lien on the land from the first Monday in March, ahead of any mortgage, and a buyer takes the property subject to any annual assessment left unpaid. Whether the assessment arrives on its own notice or on the county tax bill depends on the district.",
        ],
        claims: ["boise-city-pressure-irrigation-selected-subdivisions", "id-irrigation-assessment-lien-survives-sale", "id-irrigation-flat-rate-on-county-roll"],
      },
      {
        heading: "Geothermal heat, from two different systems",
        body: [
          "The City of Boise runs a geothermal heating system serving buildings mainly downtown and on the Boise State University campus. Separately, the Boise Warm Springs Water District provides geothermal heating to homes and businesses in the East End.",
          "If you are selling an older East End house, find out whether it is on the district's system and what that account looks like. A buyer will want to know who supplies the heat, and here the answer is a water district rather than the city.",
        ],
        claims: ["boise-geothermal-city-and-warm-springs-district"],
      },
      {
        heading: "Where a Boise permit history lives",
        body: [
          "For work inside Boise city limits, the PDS Records Center holds the construction record: residential permits, certificates of occupancy, subdivision plats, case files and older material on microfiche, released through a public records request. Permit reports can also be run in PDS Online. The city says Idaho records law prohibits it from creating records, lists included, so a request works best when it names the address and the record you want.",
          "Code compliance is a separate record. Boise's case lookup tool shows closed code compliance cases only; an open case does not appear there, and more on a closed one may be available by public records request.",
          "Unfinished work has a route too. Boise City Code 9-1B-14 lets a building permit be transferred to another party who brings the original holder's signed consent to the transfer and to the conditions of the approval, for a clerical fee. A house sold mid-project does not have to start its permit from nothing.",
        ],
        claims: ["boise-pds-records-center-permit-history", "cv-boise-case-lookup-closed-cases-only", "cv-boise-permit-transfer"],
      },
      {
        heading: "Harris Ranch carries a district of its own",
        body: [
          "Houses in Harris Ranch sit inside Harris Ranch Community Infrastructure District No. 1, formed in 2010 under Idaho Code Title 50 Chapter 31 and legally separate from the City of Boise. It covers land zoned under the Harris Ranch Specific Plan, SP-01.",
          "The district raises money three ways: a bond levy and an administrative levy, both based on property value, and a special assessment based on the size of the property. Once a special assessment is set it can rise by no more than 2% a year, up to a cap of 10%. A buyer looking at a Harris Ranch house will ask what those come to, so it helps to have the figures from your own records before listing.",
        ],
        claims: ["r2-boise-harris-ranch-cid-three-taxes"],
      },
      {
        heading: "Urban renewal districts, named by the agency that runs them",
        body: [
          "Capital City Development Corporation, Boise's redevelopment agency, lists four active urban renewal districts: 30th Street, Shoreline, Gateway East and State Street. Two older ones have closed. River Myrtle-Old Boise, set up in 1996, sunset in September 2025, and Westside sunset in September 2026.",
          "The agency publishes its boundaries as maps, not lists of parcels, and we have not traced any address against them. If a property is near one of those four corridors, the agency's map is the place to check.",
        ],
        claims: ["r2-boise-ccdc-active-and-sunset-districts"],
      },
      {
        heading: "What that means for the offer",
        body: [
          "A Boise property with an overlay, an unconnected lot or a mapped flood hazard is not a property we decline. It is a property whose costs we have to count before we can put a number on it, and counting them out loud is how we would rather work.",
          "When we make an offer we show the after-repair value we used, the work we think the property needs, our holding costs and the spread we run on. You can check every line of it: the public records yourself, and the comparable sales because we name them.",
        ],
      },
      {
        heading: "Selling your Boise house as-is, for cash",
        body: [
          "No repairs, no cleaning, no showings. Send the address or call (208) 779-4247; we come back with a number and the working behind it. We buy with our own capital, so there is no lender inspection or appraisal for the house to fail, and a vacant house, a rental with tenants or an inherited house is fine. If you accept, the sale closes through a local title company on the date you choose. Three weeks is realistic when you need speed, and later is fine.",
        ],
      },
    ],
  },

  "sell-my-house-fast-star-id": {
    intro: [
      "Sell your Star house as-is, for cash. We buy with our own capital, in any condition: no repairs, no cleaning, no showings. You choose the closing date, and three weeks is realistic when you need speed.",
      "Star grew 61.4% between the 2020 census base and the 2024 estimate, from roughly 11,300 to 18,208 people, the fastest growth of any city in Ada County by a wide margin. It is also the only one that is not entirely in Ada County.",
      "Water and sewer in Star belong to a separate district whose charges follow the house, the city adopted new park and police impact fees in April 2026, and its flood code asks for two feet above the base flood level. We buy houses, land and commercial property across Star, in any condition.",
    ],
    sections: [
      {
        heading: "Star sits in two counties",
        body: [
          "The Census place-to-county relationship file records Star as lying in both Ada County and Canyon County. The Ada County portion holds 18,155 people and the Canyon County portion 53, of a total 18,208.",
          "The split is lopsided but it is not a technicality. Anything that depends on county jurisdiction (which assessor values the parcel, which recorder holds the deed, which county collects the tax) depends on which side of the line a specific property falls. Notice of a trustee's sale in Idaho must be published in each county where the property is situated, which for a Canyon-side Star property means Canyon County.",
        ],
        claims: ["ada-star-spans-two-counties", "id-trustee-sale-publication"],
      },
      {
        heading: "Water and sewer come from a district, not the city",
        body: [
          "Most owners assume the city runs the water and sewer. In Star it does not: the city lists the Star Sewer & Water District as the water and sewer provider, and the district is a separate entity from the City of Star. We have not read the district's service boundaries, so we do not assume it serves every parcel inside city limits.",
          "On a sale the district works through the title company. The title company asks the district for a utility assessment on the property, and that figure decides what escrow collects from the buyer or holds back from the seller. Once the deal closes, the title company sends the district the payment, the warranty deed and the transfer paperwork, and the district's FAQ says this usually reaches it seven to ten days after closing. Service stays on throughout. The seller's final bill is paid out of escrow, and the district refunds anything collected beyond what was owed. It also asks sellers to file its Stop Service Form so the details are right.",
        ],
        claims: ["star-water-sewer-separate-district", "star-sswd-transfer-through-escrow"],
      },
      {
        heading: "An unpaid district bill stays with the house",
        body: [
          "The district says plainly that sewer and water charges belong to the property, not to whoever ran up the usage. If a previous owner leaves a final bill unpaid, the next owner inherits it. A landlord can have the account put in a tenant's name, but stays ultimately responsible for every charge billed to the property.",
          "Idaho law gives that teeth. Under Idaho Code 42-3212(l), a water and sewer district's charges become delinquent 30 days after their due date, the district certifies them to the county tax collector no later than August 1, and they go onto the tax roll to be collected like any other district tax, with the lien dating from the day the charge went delinquent.",
          "For a landlord selling a rental, or a family selling a house that sat empty, that means an old district balance can surface on the property tax bill rather than as a utility notice. It does not stop a sale. It does need clearing from the proceeds, which is easier to plan for before closing than at it.",
        ],
        claims: ["star-sswd-charges-follow-property"],
      },
      {
        heading: "Irrigation water comes from someone else again",
        body: [
          "The Star Sewer & Water District supplies household water only. Its rules, under Resolution 2024-3, bar using that water on lawns where another irrigation source exists. In most subdivisions the homeowners' association runs a pressurized irrigation system and an irrigation district supplies the water, so the sprinklers are a third account on top of water and sewer.",
          "Outside a subdivision the list of possible suppliers is long. The city's own irrigation contact sheet names eleven: Farmer's Union Ditch Company, the Middleton Irrigation Association and Middleton Mill Ditch Company, Pioneer Ditch Company and Little Pioneer Ditch Company, Flake Ditch Company, Canyon County Water Company, Settlers Irrigation District, Ada County Drainage District #2, Nampa & Meridian Irrigation District and Pioneer Irrigation District.",
          "Settlers describes its own western boundary as Star Road. It delivers to 13,187 acres of agricultural and urban land through a 20-mile canal and 95 miles of laterals, running from the Boise River diversion at Ann Morrison Park south to Franklin Road and north to the Lower Bench. Title to the Boise Project's transferred works remains with the United States, so a lateral crossing a parcel near Star can sit on federally titled infrastructure. Which entity serves a given parcel is a real question with a real answer, and the city's list does not settle it.",
        ],
        claims: ["star-sswd-domestic-water-only", "star-irrigation-entities-city-list", "settlers-district-coverage", "boise-project-federal-title"],
      },
      {
        heading: "Impact fees were adopted in April 2026",
        body: [
          "Star's park and police impact fees are no longer a proposal. The City Council adopted them on April 7, 2026, in Ordinance Nos. 431-2026 and 433-2026, now Star City Code 7-3D and 7-3E. The fee is a condition of development approval and is collected when the building permit is issued.",
          "The building department's fee page lists the residential charges collected at permit. Among them: a Star Parks Impact Fee of $4,695.76, a Star Police Impact Fee of $680.88, a Star Fire Impact Fee of $2,152 and an Ada County Highway District impact fee of $5,803 for a detached single-family house. New construction also needs a sewer and water permit from the district, filed with the plans, and the district's fee table lists a residential permit application fee of $11,450.00. Treat these as listed figures on the day we read them, not a quote for any lot.",
          "The exemptions matter as much as the amounts. Star's park fee ordinance exempts replacing a house, or a manufactured home, with one new house on the same lot when the number of service units stays the same, along with remodels that add no units and rebuilding the same floor space within two years of a fire. So an empty lot and a tired house on the same street can carry very different costs for a buyer who plans to build, and that shows up in what each buyer can pay.",
        ],
        claims: ["star-impact-fees-adopted-2026", "star-sswd-new-construction-permit-fee", "star-impact-fee-replacement-exemption"],
      },
      {
        heading: "Flood zone does not mean no building permit",
        body: [
          "Star's planning department addresses this directly: development within certain flood zones requires a Flood Plain Development Permit and must meet the City's Flood Hazard Ordinance. Being in a flood zone does not by itself prevent a building permit. The city asks owners to make an appointment with the planning department to have a property evaluated for flood zone location rather than determining it themselves.",
          "The standard is set high. Star's flood ordinance treats work costing half or more of the building's pre-project market value as a substantial improvement, and a home built or substantially improved in a special flood hazard area, a manufactured home included, has to put its lowest floor at the flood protection elevation, which Star defines as the base flood elevation plus two feet. A buyer planning a major renovation of an older house in a mapped zone is pricing that elevation work too.",
        ],
        claims: ["star-flood-zone-building-permit-question", "star-flood-substantial-improvement-and-freeboard"],
      },
      {
        heading: "A one-time administrative split, without a public hearing",
        body: [
          "Star allows an original parcel to be divided once, administratively, into no more than two lots, parcels or sites, for transfer of ownership or for development. The process does not require a public hearing unless the city requires the applicant to plat the division.",
          "For anyone holding land in Star that is a materially cheaper and faster path than a plat, and it is a Star rule. The other five Ada County cities each administer their own code and none of them has been checked against this, so do not assume it travels.",
        ],
        claims: ["star-one-time-administrative-division"],
      },
      {
        heading: "Temporary living quarters for family",
        body: [
          "Star permits temporary living quarters in some cases to house an immediate family member, where the need is justified by health, employment or upkeep of the property. The structure may be permitted for two years and may not remain more than six.",
          "On inherited property, or a parcel where a relative's manufactured home has been in place for years, it is worth finding out whether that permit exists and when it runs out.",
        ],
        claims: ["star-temporary-family-living-quarters"],
      },
      {
        heading: "Work that needs a permit in Star",
        body: [
          "Star publishes its own list of what needs a building permit, and several items on it are things owners often do without one: re-roofing, replacing more than 100 square feet of siding, replacing windows or doors where the openings are enlarged or reduced, decks 30 or more inches above grade, sheds or outbuildings of 200 square feet or larger, fences over six feet, retaining walls over four feet, setting a manufactured home, and demolition. A concrete slab of any size does not need one.",
          "At a sale, unpermitted work tends to surface when a buyer's inspector or lender notices a re-roof or a raised deck with no record behind it. It is rarely fatal, but it is a conversation better had before listing than during escrow. This is Star's list; Boise and the other cities keep their own.",
        ],
        claims: ["star-building-permit-triggers"],
      },
      {
        heading: "Finding the permit record, while it still exists",
        body: [
          "Star's permit portal can be searched by permit number or by address, and a permit's page shows its inspections. Plans are on the portal only for permits submitted after January 2024. Older plans need a public records request through the City Clerk's Office.",
          "The catch is retention. The building department says it is only required to keep residential permitting records for two years, so for an older Star house the paper trail a buyer asks about may simply not be there. Look it up before listing, and keep whatever you have from the original build or later work.",
        ],
        claims: ["star-permit-records-portal-and-retention"],
      },
      {
        heading: "A homeowner permit assumes you will live there",
        body: [
          "Star lets a homeowner pull a building permit on a primary or secondary residence without registering as a contractor, on specific terms. The homeowner has to do all the work on that permit, and has to plan on living in the residence within 12 months of completing the project. Otherwise a licensed contractor must pull the permit.",
          "That matters for repairs before a sale. An owner fixing up a Star house in order to sell it, rather than to live in it, does not fit the homeowner route as the city describes it.",
        ],
        claims: ["star-homeowner-permit-must-occupy"],
      },
      {
        heading: "Who administers what, on either side of the line",
        body: [
          "Land use inside Star is the city's, through its own development code. Everything else is county work, and for a property in the Ada County portion that means the Ada County Assessor values it, the Ada County Recorder holds the deed and the Ada County Treasurer collects the tax as ex officio tax collector for every district including the city and the schools.",
          "For the small Canyon County portion, those same functions belong to Canyon County. It is a narrow case, 53 people by the 2024 estimate, but if a property sits there, every county-level answer changes.",
          "Roads are neither. A single countywide highway district is responsible for city rights-of-way and their curbs, gutters and sidewalks; Idaho Code 40-1406 bars a city inside such a district from maintaining city highways or taxing for them.",
        ],
        claims: ["ada-star-spans-two-counties", "ada-treasurer-ex-officio-tax-collector", "achd-city-highway-powers-abolished"],
      },
      {
        heading: "The ZIP code does not decide which city you are in",
        body: [
          "In a city growing as fast as Star, mailing addresses and municipal boundaries drift apart, and Star makes the point itself. A Certificate of Occupancy names the city actually responsible for permitting, inspections and code compliance, which can differ from the city associated with the property's ZIP code, because ZIP codes are managed by the Postal Service for mail delivery and do not follow municipal boundaries.",
          "Together with Star lying partly outside [Ada County](/sell-my-house-fast-ada-county), in Canyon County, it is a reminder that an address is not a jurisdiction. Which city's code governs a parcel, and which county's offices serve it, are questions to answer from the record rather than from the envelope.",
        ],
        claims: ["star-certificate-of-occupancy-city-vs-zip", "ada-star-spans-two-counties"],
      },
      {
        heading: "Growth is projected to slow sharply",
        body: [
          "Having grown faster than anywhere else in the county, Star is projected by COMPASS to add only 12.3% more by 2050, while Kuna is projected to grow 128.7% over the same period. Projections are not facts, and this one rests on assumptions about annexation, but the reversal is worth knowing about if you are deciding when to sell.",
        ],
        claims: ["ada-2050-projection-divergence"],
      },
      {
        heading: "How those rules shape a Star offer",
        body: [
          "A district balance that has rolled onto the tax bill, a house in a mapped flood zone or a lot whose buyer faces the 2026 impact fees is not a property we turn down. Each is a cost we can put a figure on and show you.",
          "We close through a local title company, which handles the district's utility assessment as part of the closing, and you pick the closing date. Our offer lists the value we used, the repairs we expect, our holding costs and our margin, line by line.",
        ],
        claims: [],
      },
      {
        heading: "Selling your Star house as-is, for cash",
        body: [
          "No repairs, no cleaning, no showings. Send the address or call (208) 779-4247; we come back with a number and the working behind it. We buy with our own capital, so there is no lender inspection or appraisal for the house to fail, and a vacant house, a rental with tenants or an inherited house is fine. If you accept, the sale closes through a local title company on the date you choose. Three weeks is realistic when you need speed, and later is fine.",
        ],
      },
    ],
  },
};

export function contentFor(slug: string): PlaceContent | undefined {
  return placeContent[slug];
}

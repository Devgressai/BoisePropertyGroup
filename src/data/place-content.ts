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
    ],
  },

  "sell-my-house-fast-kuna-id": {
    intro: [
      "Kuna has about 29,127 residents, grew 21.0% between the 2020 census base and the 2024 estimate, and had the youngest median age of any Ada County city in 2022, at 30.2. COMPASS projects it will more than double by 2050 — the fastest projected growth in the county.",
      "We buy houses, land and commercial property across Kuna, in any condition.",
    ],
    sections: [
      {
        heading: "The city runs the water",
        body: [
          "Kuna's drinking water comes from wells owned and operated by the City of Kuna. Federal records list the city system as owned by local government and supplied by groundwater, serving 32,038 people through 11,363 connections — more than the city's own population estimate, so the system's reach and the city limits are not the same thing.",
          "That is a real difference from [Boise](/sell-my-house-fast-boise-id), where drinking water comes from private utilities regulated by the Idaho Public Utilities Commission. In Kuna a water question about a city-served property goes to the city's public works department. We have not mapped every small system in the area, so we do not assume the city serves every parcel near Kuna.",
        ],
        claims: ["kuna-city-owned-wells", "boise-drinking-water-private-utilities"],
      },
      {
        heading: "A fence needs a permit",
        body: [
          "Kuna's list of residential work that needs a building permit includes the obvious — a new house, a mobile home, an accessory dwelling unit, additions — and several things owners routinely do without one: decks over 30 inches above grade, retaining walls over 4 feet including the footing, heating and air-conditioning work, fireplaces and wood stoves, relocating or demolishing a structure, and the installation of fences.",
          "Kuna lists fences without a height threshold. That is not the rule everywhere — [Star](/sell-my-house-fast-star-id), for example, requires a permit only for fences over six feet — so what a neighbour in another city was allowed to do is no guide. Detached storage buildings under 200 square feet are exempt in Kuna.",
          "At a sale, unpermitted work tends to come up when a buyer's inspector or lender asks for the record. It is rarely fatal, but it is better known before listing than discovered in escrow.",
        ],
        claims: ["kuna-permit-triggers-include-fences", "star-building-permit-triggers"],
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
        heading: "Where the lines actually are",
        body: [
          "Kuna's own advice on property lines applies well beyond Kuna: the best way to find them is a professional survey. Before hiring one, look for corner pins or stakes, and the Ada County Assessor's Office may hold a copy showing the size of the property and the lots around it. Do not assume that fence lines or street curbs follow property lines — on acreage in particular, they often do not.",
        ],
        claims: ["kuna-property-lines-survey-guidance"],
      },
      {
        heading: "Irrigation runs through its own organisations",
        body: [
          "Irrigation around Kuna has its own structure. The Boise Project Board of Control is the operating agent for five irrigation districts, including the Boise-Kuna district, managing facilities transferred from the U.S. Bureau of Reclamation and delivering water to their landowners. A lateral crossing a Kuna parcel is a matter for the irrigation entity that runs it.",
        ],
        claims: ["boise-project-five-districts"],
      },
      {
        heading: "What that means for an offer",
        body: [
          "A Kuna property with unpermitted work, an unclear boundary or an irrigation lateral across it is not one we decline. Those are the facts that shape a price, and we would rather show you the arithmetic than guess.",
          "When we make an offer we show the value we used, the work we think the property needs, our holding costs and the margin we run on. You can check every line.",
        ],
        claims: [],
      },
    ],
  },

  "sell-my-house-fast-garden-city-id": {
    intro: [
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
        ],
        claims: ["gardencity-city-water-and-sewer-system", "boise-drinking-water-private-utilities"],
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
    ],
  },

  "sell-my-house-fast-ada-county": {
    intro: [
      "We buy property across Ada County — houses, land, rentals, multifamily, office and industrial buildings, and parcels with problems attached. Six incorporated cities sit inside the county, plus an unincorporated balance of roughly 64,000 people, and which side of a city limit a property falls on changes who you deal with about almost everything.",
      "That distinction is the single most useful thing to understand before you sell here, and most of what is written about selling in Ada County gets it wrong.",
    ],
    sections: [
      {
        heading: "Most property administration here is county-wide",
        body: [
          "The Ada County Assessor values every non-exempt property in the county at market value as of January 1, whether it sits in Boise, Meridian or open ground outside any city. The same office maintains parcel boundaries, road rights-of-way and Records of Survey, and it runs addressing for every parcel in the county.",
          "The Treasurer, separately, is the ex officio tax collector — collecting for every taxing district including the cities and schools. So the office that decides what a property is worth is not the office that takes payment for it, and a delinquency question goes to the Treasurer rather than the Assessor.",
          "Deeds are recorded with the Ada County Recorder regardless of city. Recorded documents are open to public inspection under Idaho Code 31-2419, and redacting personal information before recording is the responsibility of whoever submits the document — not the Recorder's office.",
        ],
        claims: ["ada-assessment-market-value-jan-1", "ada-treasurer-ex-officio-tax-collector", "ada-recorder-maintains-ownership-documents", "ada-recorder-pii-redaction-is-submitter-duty"],
      },
      {
        heading: "Land use is not county-wide, and that catches people out",
        body: [
          "Ada County Development Services processes land use applications in unincorporated Ada County only. Its engineering division handles preliminary plats, drainage, private roads, hillside applications, floodplain permits and boundary adjustments — again, unincorporated only. Inside Boise, Meridian, Eagle, Kuna, Star or Garden City, the city administers its own code.",
          "Code enforcement follows the same line. Ada County states plainly that it does not enforce code violations within city limits and directs city residents to their municipal agency. Complaints in the unincorporated county are investigated by a code enforcement specialist, and the complaining party stays anonymous.",
          "So advice to \"contact Ada County about permits\" is wrong for the great majority of county residents. It is right for the roughly 64,000 people outside any city, and wrong for everyone else.",
        ],
        claims: ["ada-planning-unincorporated-only", "ada-engineering-scope-unincorporated", "ada-code-enforcement-unincorporated-only"],
      },
      {
        heading: "Roads and septic answer to neither the city nor the county",
        body: [
          "Idaho Code 40-1406 bars a city inside a countywide highway district from maintaining city highways or levying property taxes for their construction, repair or maintenance. A single countywide district is responsible for the design, construction and maintenance of city rights-of-way and their curbs, gutters, sidewalks and retaining walls. Ada County confirms it controls no roadway infrastructure of its own.",
          "That has a practical consequence for sellers: a question about a sidewalk, a driveway approach or the road frontage of a parcel in Ada County is [a highway district matter](/guides/selling-land-or-acreage-in-ada-county), not a city public works matter.",
          "There is no second highway district to check. Idaho law permits only one countywide highway district to operate within a county whose electorate has voted to form one, so the question of which road authority governs a given Ada County parcel has exactly one answer, everywhere in the county. That is unusual enough that people arriving from other states look for a city equivalent that does not exist here.",
          "Septic is different again. Central District Health — a public health district covering Ada, Boise, Elmore and Valley counties — permits septic systems and verifies shallow injection wells. It is not a city building department and not a county one.",
        ],
        claims: ["achd-city-highway-powers-abolished", "achd-responsibility-within-cities", "achd-is-ada-district", "achd-one-district-per-county", "ada-septic-authority-cdh"],
      },
      {
        heading: "The county's cities are not growing at the same rate",
        body: [
          "Between the 2020 census base and the 2024 Census population estimate, Star grew 61.4% and Kuna 21.0%, while Boise grew 1.0%. Those are not variations on a trend; they are different property markets inside one county.",
          "COMPASS projections reverse parts of that picture by 2050 — Kuna is projected to grow a further 128.7% while Star is projected to add 12.3%, and unincorporated Ada County is projected to lose 36% of its population on the assumption that cities annex the areas they already plan for.",
          "Two estimates of Ada County's population circulate and both are legitimate: COMPASS puts 2024 at 557,590, the Census Bureau's Vintage 2024 estimates put it at 535,799. They are different bodies measuring the same year, and anyone quoting one without naming it is inviting confusion.",
          "We use the Census figure of 535,799 where a single number is needed, and name it as an estimate rather than a count. The two sources differ by about 4%, which is small enough to ignore in conversation and large enough to matter if someone is building an argument on it.",
        ],
        claims: ["ada-growth-divergence-2020-2024", "ada-2050-projection-divergence", "ada-population-two-estimates", "ada-population-2024"],
      },
      {
        heading: "Areas of City Impact",
        body: [
          "Idaho uses a planning device with no California equivalent: the Area of City Impact, unincorporated land planned jointly with the city it adjoins. Of the people living in unincorporated Ada County, 78.8% live inside one. Only about 13,467 people — 2.4% of the county — live outside any ACI, many of them in the planned communities of Avimor, Cartwright Ranch, Dry Creek Ranch and Hidden Springs.",
          "Property inside an ACI is on county jurisdiction today and is a likely annexation target tomorrow. Boise's ACI holds 284,860 people against a city population of 250,060, which is the clearest illustration of the gap between where a city governs and where it plans.",
        ],
        claims: ["ada-area-of-city-impact", "ada-planned-communities-outside-aci"],
      },
      {
        heading: "Irrigation is a live question on a great many parcels",
        body: [
          "Ada County's own map identifies [27 separate irrigation entities](/guides/selling-land-or-acreage-in-ada-county) operating in the county — irrigation districts, ditch companies, lateral associations, water companies and a drainage district. Settlers Irrigation District alone delivers to 13,187 acres across West Boise, Meridian and South Eagle. Boise-Kuna and Nampa & Meridian are separate districts serving different ground.",
          "Title to the Boise Project's transferred works — Diversion Dam, the New York Canal, roughly 1,500 miles of canals and laterals — remains with the United States. A canal or lateral crossing a parcel here can therefore sit on federally titled works, which changes who a landowner deals with about access and encroachment.",
        ],
        claims: ["ada-27-irrigation-entities", "settlers-district-coverage", "boise-project-federal-title"],
      },
      {
        heading: "What the assessed value is, and what it is not",
        body: [
          "The Assessor's own guidance is unusually direct about this: the assessor does not set a value for a property, but estimates what a typical buyer would reasonably pay for it on January 1. An assessment is an opinion of market value on a fixed date, not a price and not a ceiling.",
          "It is also not the product of a fresh inspection every year. State law requires a physical inspection every five years, so roughly 20% of Ada County properties are reappraised in a given year and the rest are trended on market conditions. A property that has changed materially since its last inspection may be carrying a value derived from a trend rather than from anyone looking at it.",
          "Which appraiser handles a property depends on what it is. Ada County's residential appraisers value detached single-family dwellings, attached townhomes, condominium units, multi-family residential up to four units, and manufactured housing. Apartments and higher-density residential go to commercial appraisers instead — the same four-unit line that separates residential from commercial in lending and in this county's own staffing.",
        ],
        claims: ["ada-assessor-does-not-set-value", "ada-reappraisal-five-year-cycle", "ada-residential-appraisal-scope"],
      },
      {
        heading: "The homeowner's exemption turns on a single day in December",
        body: [
          "To qualify for the homeowner's exemption for a tax year, an owner must own and occupy the home on or before the last county business day in December, and must file the application by the close of business on that same day. Both conditions land on one date, and the filing is not a formality that can follow later.",
          "Once approved it carries forward. An owner only needs to reapply on a move or on a change of ownership — which is precisely what a sale is. If you are buying or selling here, the exemption does not travel with the property by itself.",
        ],
        claims: ["ada-homeowners-exemption-deadline"],
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
          "That is a narrow office and it is rarely the right answer for a family that simply has not started probate yet. But it exists, it is county-level, and it means an Ada County property whose owner has died without anyone stepping forward is not in a legal vacuum — there is a named office with a statutory role.",
        ],
        claims: ["ada-treasurer-ex-officio-public-administrator"],
      },
      {
        heading: "The flood maps in force here were adopted in 2020",
        body: [
          "Ada County adopted new FEMA Flood Insurance Rate Maps in June 2020. A parcel's flood status is therefore governed by maps that are recent enough to differ from whatever a prior owner, an older survey or an out-of-date listing described.",
          "This matters most on the properties where it is least expected — ground near the Boise River and its side channels, and parcels crossed by the canal and lateral network described above. Whether a specific parcel is in or out of a mapped zone is a question for the current effective map, not for institutional memory.",
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
          "The Assessor maintains comprehensive records on all real and personal property in the county — parcel ownership, land and improvement characteristics, parcel boundaries and road rights-of-way — and manages the addressing process for every parcel. Its online maps carry parcel boundaries, streets, hydrography, section boundaries, city limits, parks and schools, alongside Records of Survey and subdivision plats.",
          "For most questions a seller has about what they actually own, that is the first place to look, and it is county-wide regardless of which city a property sits in. City limits are a layer on the county's map rather than a separate mapping system.",
          "Permits are the opposite. Ada County's building division reviews plans and inspects buildings, and its permitting division accepts building, manufactured home and mechanical permit applications through an online portal — for the unincorporated county. Cities inside a countywide highway district do retain a few defined powers of their own: responsibility for local improvement district bonds issued before the city highway system was dissolved, the ability to spend city funds on trees, shrubs, grass and other plants in rights-of-way, and control of parking meters. Beyond that short list, the road is the highway district's.",
        ],
        claims: ["ada-assessor-maintains-parcel-gis", "ada-building-division-scope", "achd-cities-retain"],
      },
    ],
  },

  "sell-my-house-fast-boise-id": {
    intro: [
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
        ],
        claims: ["boise-sewer-connection-required", "boise-sewer-assessment-fee-undeveloped", "ada-septic-authority-cdh"],
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
        heading: "What that means for the offer",
        body: [
          "A Boise property with an overlay, an unconnected lot or a mapped flood hazard is not a property we decline. It is a property whose costs we have to count before we can put a number on it, and counting them out loud is how we would rather work.",
          "When we make an offer we show the after-repair value we used, the work we think the property needs, our holding costs and the spread we run on. You can check every line of it against the same public records we used.",
        ],
      },
    ],
  },

  "sell-my-house-fast-star-id": {
    intro: [
      "Star grew 61.4% between the 2020 census base and the 2024 estimate — from roughly 11,300 to 18,208 people, the fastest growth of any city in Ada County by a wide margin. It is also the only one that is not entirely in Ada County.",
    ],
    sections: [
      {
        heading: "Star sits in two counties",
        body: [
          "The Census place-to-county relationship file records Star as lying in both Ada County and Canyon County. The Ada County portion holds 18,155 people and the Canyon County portion 53, of a total 18,208.",
          "The split is lopsided but it is not a technicality. Anything that depends on county jurisdiction — which assessor values the parcel, which recorder holds the deed, which county collects the tax — depends on which side of the line a specific property falls. Notice of a trustee's sale in Idaho must be published in each county where the property is situated, which for a Canyon-side Star property means Canyon County.",
        ],
        claims: ["ada-star-spans-two-counties", "id-trustee-sale-publication"],
      },
      {
        heading: "A one-time administrative split, without a public hearing",
        body: [
          "Star allows an original parcel to be divided once, administratively, into no more than two lots, parcels or sites — for transfer of ownership or for development. The process does not require a public hearing unless the city requires the applicant to plat the division.",
          "For anyone holding land in Star that is a materially cheaper and faster path than a plat, and it is a Star rule. The other five Ada County cities each administer their own code and none of them has been checked against this, so do not assume it travels.",
        ],
        claims: ["star-one-time-administrative-division"],
      },
      {
        heading: "Flood zone does not mean no building permit",
        body: [
          "Star's planning department addresses this directly: development within certain flood zones requires a Flood Plain Development Permit and must meet the City's Flood Hazard Ordinance. Being in a flood zone does not by itself prevent a building permit.",
          "The city asks owners to make an appointment with the planning department to have a property evaluated for flood zone location rather than determining it themselves.",
        ],
        claims: ["star-flood-zone-building-permit-question"],
      },
      {
        heading: "Temporary living quarters for family",
        body: [
          "Star permits temporary living quarters in some cases to house an immediate family member, where the need is justified by health, employment or upkeep of the property. The structure may be permitted for two years and may not remain more than six.",
          "That comes up more often than you would expect on inherited property and on parcels where a relative's manufactured home has been sitting for years.",
        ],
        claims: ["star-temporary-family-living-quarters"],
      },
      {
        heading: "Star Road is an irrigation boundary",
        body: [
          "Settlers Irrigation District describes its own western boundary as Star Road. The district delivers to 13,187 acres of agricultural and urban land through a 20-mile canal and 95 miles of laterals, running from the Boise River diversion at Ann Morrison Park south to Franklin Road and north to the Lower Bench.",
          "Ada County's irrigation map names 27 separate entities operating in the county — districts, ditch companies, lateral associations and water companies. Which one serves a particular parcel is a question with a real answer, and it is not one you can settle from a map alone.",
          "It matters because title to the Boise Project's transferred works remains with the United States. A lateral crossing a parcel near Star can sit on federally titled infrastructure, which changes who a landowner deals with about access, encroachment and maintenance.",
        ],
        claims: ["settlers-district-coverage", "ada-27-irrigation-entities", "boise-project-federal-title"],
      },
      {
        heading: "Who administers what, on either side of the line",
        body: [
          "Land use inside Star is the city's, through its own development code. Everything else is county work, and for a property in the Ada County portion that means the Ada County Assessor values it, the Ada County Recorder holds the deed and the Ada County Treasurer collects the tax as ex officio tax collector for every district including the city and the schools.",
          "For the small Canyon County portion, those same functions belong to Canyon County. It is a narrow case — 53 people by the 2024 estimate — but if a property sits there, every county-level answer changes.",
          "Roads are neither. A single countywide highway district is responsible for city rights-of-way and their curbs, gutters and sidewalks; Idaho Code 40-1406 bars a city inside such a district from maintaining city highways or taxing for them.",
        ],
        claims: ["ada-star-spans-two-counties", "ada-treasurer-ex-officio-tax-collector", "achd-city-highway-powers-abolished"],
      },
      {
        heading: "Water and sewer come from a district, not the city",
        body: [
          "Most owners assume the city runs the water and sewer. In Star it does not: the city lists the Star Sewer & Water District as the water and sewer provider, and the district is a separate entity from the City of Star.",
          "That changes who you call. A service, connection or billing question about water or sewer on a Star property goes to the district rather than city hall, and a buyer planning to add a unit or split a parcel is dealing with the district as well as the city. We have not read the district's own service boundaries, so we do not assume it serves every parcel inside city limits.",
        ],
        claims: ["star-water-sewer-separate-district"],
      },
      {
        heading: "Work that needs a permit in Star",
        body: [
          "Star publishes its own list of what needs a building permit, and several items on it are things owners often do without one: re-roofing, replacing more than 100 square feet of siding, replacing windows or doors where the openings are enlarged or reduced, decks 30 or more inches above grade, sheds or outbuildings of 200 square feet or larger, fences over six feet, retaining walls over four feet, setting a manufactured home, and demolition. A concrete slab of any size does not need one.",
          "At a sale, unpermitted work tends to surface — a buyer's inspector or lender notices a re-roof or a raised deck with no record behind it. It is rarely fatal, but it is a conversation better had before listing than during escrow. This is Star's list; Boise and the other cities keep their own.",
        ],
        claims: ["star-building-permit-triggers"],
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
        heading: "The ZIP code does not decide which city you are in",
        body: [
          "In a city growing as fast as Star, mailing addresses and municipal boundaries drift apart, and Star makes the point itself. A Certificate of Occupancy names the city actually responsible for permitting, inspections and code compliance, which can differ from the city associated with the property's ZIP code — because ZIP codes are managed by the Postal Service for mail delivery and do not follow municipal boundaries.",
          "Together with Star lying partly outside [Ada County](/sell-my-house-fast-ada-county), in Canyon County, it is a reminder that an address is not a jurisdiction. Which city's code governs a parcel, and which county's offices serve it, are questions to answer from the record rather than from the envelope.",
        ],
        claims: ["star-certificate-of-occupancy-city-vs-zip", "ada-star-spans-two-counties"],
      },
      {
        heading: "Growth is projected to slow sharply",
        body: [
          "Having grown faster than anywhere else in the county, Star is projected by COMPASS to add only 12.3% more by 2050 — while Kuna is projected to grow 128.7% over the same period. Projections are not facts, and this one rests on assumptions about annexation, but the reversal is worth knowing about if you are deciding when to sell.",
        ],
        claims: ["ada-2050-projection-divergence"],
      },
    ],
  },
};

export function contentFor(slug: string): PlaceContent | undefined {
  return placeContent[slug];
}

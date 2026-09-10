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
  "sell-my-house-fast-ada-county": {
    intro: [
      "We buy property across Ada County — houses, land, rentals and parcels with problems attached. Six incorporated cities sit inside the county, plus an unincorporated balance of roughly 64,000 people, and which side of a city limit a property falls on changes who you deal with about almost everything.",
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
          "That has a practical consequence for sellers: a question about a sidewalk, a driveway approach or the road frontage of a parcel in Ada County is a highway district matter, not a city public works matter.",
          "Septic is different again. Central District Health — a public health district covering Ada, Boise, Elmore and Valley counties — permits septic systems and verifies shallow injection wells. It is not a city building department and not a county one.",
        ],
        claims: ["achd-city-highway-powers-abolished", "achd-responsibility-within-cities", "achd-is-ada-district", "ada-septic-authority-cdh"],
      },
      {
        heading: "The county's cities are not growing at the same rate",
        body: [
          "Between the 2020 census base and the 2024 Census population estimate, Star grew 61.4% and Kuna 21.0%, while Boise grew 1.0%. Those are not variations on a trend; they are different property markets inside one county.",
          "COMPASS projections reverse parts of that picture by 2050 — Kuna is projected to grow a further 128.7% while Star is projected to add 12.3%, and unincorporated Ada County is projected to lose 36% of its population on the assumption that cities annex the areas they already plan for.",
          "Two estimates of Ada County's population circulate and both are legitimate: COMPASS puts 2024 at 557,590, the Census Bureau's Vintage 2024 estimates put it at 535,799. They are different bodies measuring the same year, and anyone quoting one without naming it is inviting confusion.",
        ],
        claims: ["ada-growth-divergence-2020-2024", "ada-2050-projection-divergence", "ada-population-two-estimates"],
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
          "Ada County's own map identifies 27 separate irrigation entities operating in the county — irrigation districts, ditch companies, lateral associations, water companies and a drainage district. Settlers Irrigation District alone delivers to 13,187 acres across West Boise, Meridian and South Eagle. Boise-Kuna and Nampa & Meridian are separate districts serving different ground.",
          "Title to the Boise Project's transferred works — Diversion Dam, the New York Canal, roughly 1,500 miles of canals and laterals — remains with the United States. A canal or lateral crossing a parcel here can therefore sit on federally titled works, which changes who a landowner deals with about access and encroachment.",
        ],
        claims: ["ada-27-irrigation-entities", "settlers-district-coverage", "boise-project-federal-title"],
      },
    ],
  },

  "sell-my-house-fast-boise-id": {
    intro: [
      "Boise is the largest city in Ada County at roughly 238,000 people, and the slowest growing — about 1.0% between the 2020 census base and the 2024 estimate, against 61.4% in Star and 21.0% in Kuna. A market that is not adding people is a market where the existing housing stock, and its condition, does most of the work.",
      "We buy houses, infill lots and problem property across the city.",
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

/**
 * Hub copy for /locations and /commercial (2026-11-18).
 *
 * Both hubs were "discovered, not indexed" in Search Console while every page
 * beneath them was indexed: a list of links with a sentence on top is not a
 * page anyone needs. Each hub now says, in one line per child, what is actually
 * different about that place or asset class, and every line names the claims it
 * rests on so the hub renders an evidence block like the pages it routes to.
 *
 * A line restates a fact its child page already carries in full. It must never
 * reproduce the child's prose, and it must never carry a figure the cited
 * claims do not.
 */
export interface HubLine {
  /** Place slug (locations) or commercial slug (commercial). */
  slug: string;
  line: string;
  claims: string[];
}

export const LOCATIONS_INTRO: string[] = [
  "Ada County has six incorporated cities and an unincorporated balance, and the city limit decides far more than the address. The county values, taxes and records every parcel in the same way. Who supplies the water, who bills the sewer, whose zoning code applies and who keeps the permit file all change at the line.",
];

/** Who does what, everywhere in the county. Each row is one claim. */
export const LOCATIONS_COUNTYWIDE: HubLine[] = [
  {
    slug: "assessor",
    line: "The Ada County Assessor values every non-exempt parcel at market value as of January 1, inside a city or not.",
    claims: ["ada-assessment-market-value-jan-1"],
  },
  {
    slug: "treasurer",
    line: "The Ada County Treasurer collects the tax for every taxing district, the cities and schools included.",
    claims: ["ada-treasurer-ex-officio-tax-collector"],
  },
  {
    slug: "recorder",
    line: "Deeds are recorded with the Ada County Recorder whichever city the property is in.",
    claims: ["ada-recorder-maintains-ownership-documents"],
  },
  {
    slug: "land-use",
    line: "Zoning and building permits are the city's inside city limits. County planning covers unincorporated land only.",
    claims: ["ada-cities-administer-own-land-use", "ada-planning-unincorporated-only"],
  },
  {
    slug: "roads",
    line: "Roads, curbs and sidewalks belong to the countywide highway district, not to any city.",
    claims: ["achd-city-highway-powers-abolished"],
  },
  {
    slug: "septic",
    line: "Septic systems are permitted by Central District Health, a public health district, not by a city or the county.",
    claims: ["ada-septic-authority-cdh"],
  },
];

export const LOCATIONS_COUNTY_LINE: HubLine = {
  slug: "sell-my-house-fast-ada-county",
  line: "How property is administered county-wide, the Areas of City Impact where a city plans land it does not yet govern, and the 27 irrigation entities operating in the county.",
  claims: ["ada-area-of-city-impact", "ada-27-irrigation-entities"],
};

export const LOCATIONS_LINES: HubLine[] = [
  {
    slug: "sell-my-house-fast-boise-id",
    line: "Drinking water comes from state-regulated private utilities, not the city. The city bills sewer and trash, runs pressure irrigation in only fourteen subdivisions, and reviews most exterior changes in ten historic districts.",
    claims: ["boise-drinking-water-private-utilities", "boise-city-pressure-irrigation-selected-subdivisions", "boise-ten-historic-districts", "boise-historic-certificate-of-appropriateness"],
  },
  {
    slug: "sell-my-house-fast-meridian-id",
    line: "The city pumps drinking water from 25 deep wells, and unpaid city utility charges stay with the property. Irrigation comes from districts, whose assessments follow the land's water right.",
    claims: ["meridian-city-water-from-aquifer-wells", "meridian-utility-debt-stays-with-property", "nmid-assessment-on-water-right-owner-liable"],
  },
  {
    slug: "sell-my-house-fast-eagle-id",
    line: "Two neighbours can be on two different water utilities, the city's or Veolia's, and flooding comes from Dry Creek as well as the Boise River.",
    claims: ["eagle-water-split-city-and-veolia", "eagle-flood-dry-creek-and-boise-river"],
  },
  {
    slug: "sell-my-house-fast-kuna-id",
    line: "The city runs water, sewer and pressurized irrigation. The buyer's utility application is completed at the title company, and unpaid city utilities can be recorded as a lien.",
    claims: ["kuna-city-runs-pressurized-irrigation", "kuna-utility-application-at-title-company", "kuna-utility-charges-lien-on-property"],
  },
  {
    slug: "sell-my-house-fast-star-id",
    line: "The only city partly in Canyon County. Water and sewer come from a separate district, and a parcel can be split once administratively without a public hearing.",
    claims: ["ada-star-spans-two-counties", "star-water-sewer-separate-district", "star-one-time-administrative-division"],
  },
  {
    slug: "sell-my-house-fast-garden-city-id",
    line: "In the flood hazard area, work worth half the building's value or more triggers new-construction standards. Water and sewer are a city system.",
    claims: ["gardencity-floodplain-50-percent-improvement-rule", "gardencity-city-water-and-sewer-system"],
  },
];

export const COMMERCIAL_LINES: HubLine[] = [
  {
    slug: "industrial",
    line: "Boise's I-1 and I-2 cap height at 55 feet while I-3 allows 150 feet under a bulk plan, and across the city limit the county's M1, M2 and M3 replace Boise's districts entirely.",
    claims: ["boise-industrial-height-varies-by-district", "ada-county-vs-city-zoning-vocabularies-differ"],
  },
  {
    slug: "multifamily",
    line: "Five units and up. Federal housing finance puts multifamily at more than four units, the Census counts it from two and Idaho's architects exemption stops at three, so the line depends on who is asking.",
    claims: ["gse-multifamily-more-than-four", "census-multifamily-starts-at-two", "idaho-architect-exemption-ends-at-three-units"],
  },
  {
    slug: "commercial-districts",
    line: "The letters do not travel. Garden City's C-2 is mixed use where Star and Kuna use C-2 for commercial, and Meridian's six commercial districts do not share a height standard.",
    claims: ["garden-city-c2-is-mixed-use-not-commercial", "meridian-commercial-height-spans-six-districts"],
  },
  {
    slug: "how-value-is-determined",
    line: "Ada County assesses commercial property using income as well as costs and sales, and Idaho is a non-disclosure state, so a recorded deed does not show what anyone paid.",
    claims: ["ada-commercial-assessment-uses-income", "idaho-is-a-non-disclosure-state", "idaho-deed-content-requirement-omits-price"],
  },
];

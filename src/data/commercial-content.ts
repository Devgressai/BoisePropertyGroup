/**
 * Hand-written commercial page content.
 *
 * Every page here was selected by scripts/research/commercial-ia-eligibility.mjs,
 * not chosen. Office, retail and standalone-land pages are absent because they
 * failed the differentiation gate: their entire evidence base is three mixed-use
 * districts they share with each other, so neither can say anything the other
 * cannot. If evidence later separates them, the script will say so.
 *
 * RULES ENFORCED HERE, and by scripts/validation/check-vocabulary.mjs:
 *
 *  - No landlord-exit phrasing. "Tired of managing tenants", "no repairs, no
 *    fees" and their relatives are residential positioning; using them here
 *    would make these pages compete with our own house pages.
 *  - The multifamily page states its unit floor visibly. A page that only says
 *    "we buy multifamily" is a residential lookalike.
 *  - No claim of a completed transaction, in any asset class. None exists.
 *  - No market statistic without a dated source. There are none on these pages
 *    because we hold none.
 *  - A footnoted dimensional standard is quoted with its marker and never
 *    paraphrased. Boise publishes the markers but not the definitions.
 */

export interface CommercialSection {
  heading: string;
  body: string[];
}

export interface CommercialPageContent {
  slug: string;
  assetClass: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  intro: string[];
  sections: CommercialSection[];
  /** Claim ids whose sources are listed at the foot of the page. */
  citedClaims: string[];
}

export const INDUSTRIAL: CommercialPageContent = {
  slug: "industrial",
  assetClass: "industrial",
  title: "Selling industrial property in Boise — what changes and why",
  h1: "Selling industrial property in Boise",
  eyebrow: "Industrial",
  description:
    "How Boise's three industrial districts differ, why the number on the city's website may not be the number that governs your parcel, and how Ada County values industrial property.",
  intro: [
    "Industrial ground is the one asset class where the zoning district does most of the work. Two buildings a mile apart, both called light industrial by everyone who talks about them, can sit under standards that differ by a factor of three.",
    "This page is about what those differences are and where to check them. It is not a valuation, and nothing here is advice about a particular property.",
  ],
  sections: [
    {
      heading: "Boise has three industrial districts, not two",
      body: [
        "Most conversations about industrial property in Boise proceed as though there is light industrial and heavy industrial and that is the whole picture. There is a third, and it is the one that behaves least like the others.",
        "I-1 Light Industrial and I-2 Heavy Industrial both cap building height at 55 feet. I-3 Industrial Technology does not: the city's table gives it 150 feet, carrying a footnote the city does not publish. That is not a small gap. An owner comparing two parcels on height alone, assuming industrial means industrial, is comparing something that varies by nearly three times across districts that share a first letter.",
        "The districts are also aimed at different things. I-2 exists in part to keep more intensive operations away from uses that would be affected by them, which is why the separation language sits in its purpose clause rather than in a table. I-3 is drawn around technology and research uses and carries buffer requirements of its own.",
      ],
    },
    {
      heading: "Height is not the variable that decides site yield",
      body: [
        "I-3's 150 feet looks like the most permissive standard in Boise's industrial set until you read the setbacks, which are tied to it. The I-3 front setback is a minimum of 45 feet plus one additional foot for every foot of building height above 45 feet, and the side street, interior side and rear setbacks all follow the front standard.",
        "So a taller building in I-3 consumes substantially more of its parcel on every side. Height is bought with land. I-1 and I-2 work the opposite way, setting interior side and rear at zero — printed on the city's table as \"0 ft. [1]\", with a footnote we cannot read.",
        "There is also a standard that catches people out on parcels near the freeway: yards adjacent to I-84 and I-184 carry their own parking setback, separate from the ordinary yard setbacks.",
      ],
    },
    {
      heading: "The number on the city's website may not be the number that governs",
      body: [
        "Boise publishes each zoning district's dimensional standards as a table on its website, and those tables carry bracketed footnote markers — [1], [2], [3]. The city does not publish what the footnotes say. The definitions live in the codified ordinance, and the code library that hosts it refuses automated requests, so the markers cannot be resolved from the public web pages at all.",
        "The practical consequence is narrow and worth stating plainly: a setback printed as \"0 ft. [1]\" is not a setback of zero. It is a setback with a condition attached that the website does not show you. The same is true of I-3's 150 feet.",
        "This is not a criticism of the city — a summary table is a reasonable thing for a planning department to publish. It is a reason to read the ordinance, or to ask someone who has, before making a decision that depends on a dimension.",
      ],
    },
    {
      heading: "Across a city limit, the code changes completely",
      body: [
        "Boise's industrial districts govern Boise. Unincorporated Ada County runs its own zoning ordinance, adopted as Ordinance No. 1002, and it does not use Boise's vocabulary at all. The county's industrial districts are M1 Light Industrial, M2 General Industrial and M3 Airport Industrial. Boise's are I-1, I-2 and I-3.",
        "So \"light industrial\" is M1 on one side of a line and I-1 on the other, and they are different districts under different codes with different standards. A parcel does not change character when a boundary moves past it, but the rules governing it do. Anyone applying what they know about Boise industrial ground to a parcel in the county — or the reverse — is reading the wrong book.",
        "There is a second thing in the county code worth knowing if you own unincorporated ground. Every commercial and industrial district in it carries the same stated purpose: to encourage those uses primarily inside AREAS OF IMPACT, implementing the comprehensive plans adopted as part of the area of impact agreements, and to be established outside one only on a limited basis. The county is not planning a parallel industrial economy out there. It is largely holding ground that a city's plan expects to take in.",
      ],
    },
    {
      heading: "Overlays sit on top of the district, they do not replace it",
      body: [
        "A parcel carries its base district and any overlay covering it, and the overlay adds constraints rather than substituting for them. Around the airport this matters more than usual: Boise's Airport Influence Area Overlay exists to address the compatibility of development with airport operations, and a large share of the city's industrial ground sits inside it.",
        "The Flood Protection Overlay works the same way. An owner reading only their base district has read half the answer.",
      ],
    },
    {
      heading: "How the county arrives at a value",
      body: [
        "Ada County assesses commercial property using the income the property produces, rather than by comparing it to nearby sales the way residential property is handled. That is the same logic a buyer applies, and for the same reason: industrial buildings are rarely alike enough for comparison to carry the weight.",
        "Assessed value is set as of January 1 — 12:01 a.m. on the first day of January, by statute — which means for most of the year it is answering a question about a date that has passed.",
        "Two further things about it are worth knowing, and neither is a criticism of anyone. Idaho law does not require an assessment to equal market value; it requires the median ratio of assessed to market value, across a category of property, to land somewhere between 90 percent and 110 percent. And every taxable property must be appraised at least once every five years, on a rolling schedule — in the years between, a property is indexed to market using recorded transactions rather than looked at individually.",
        "So an assessed value is a figure with a fixed date, a tolerance band, and potentially several years since anyone examined that specific building. It is not wrong. It is a tax figure produced at scale, and it cannot know about a lease that expired in March or a roof that failed in June.",
      ],
    },
    {
      heading: "What we do with industrial property",
      body: [
        "We look at warehouse, flex, shop and yard property in Boise and across Ada County — single tenant, multi tenant, or empty. Deferred maintenance is not a disqualifier and neither is a problem attached to title, tenancy or entitlement.",
        "We are the buyer. We do not tie a property up under contract while looking for someone to assign it to, and if we agree a number we are the party closing on it.",
        "What we will not do is tell you what your building is worth. We can tell you what we would pay and show the arithmetic behind it, which is a different thing and should be treated as a different thing.",
      ],
    },
  ],
  citedClaims: [
    "boise-i1-purpose",
    "boise-i2-purpose-separation",
    "boise-i3-purpose-and-buffer",
    "boise-industrial-height-varies-by-district",
    "boise-i3-height-linked-setback",
    "boise-i1-i2-zero-interior-rear-setbacks",
    "boise-industrial-interstate-parking-setback",
    "boise-i2-street-frontage-minimum",
    "boise-district-pages-omit-footnote-definitions",
    "ada-county-vs-city-zoning-vocabularies-differ",
    "ada-county-zoning-districts-schedule",
    "ada-county-commercial-districts-tied-to-areas-of-impact",
    "boise-airport-influence-overlay",
    "boise-flood-protection-overlay-purpose",
    "ada-commercial-assessment-uses-income",
    "ada-assessment-market-value-jan-1-commercial",
    "idaho-assessment-lien-date-statutory",
    "idaho-assessment-ratio-band-90-110",
    "idaho-appraisal-cycle-five-years",
  ],
};

export const MULTIFAMILY: CommercialPageContent = {
  slug: "multifamily",
  assetClass: "multifamily",
  title: "Selling multifamily property in Ada County — five units and up",
  h1: "Selling multifamily property, five units and up",
  eyebrow: "Multifamily",
  description:
    "Where multifamily actually begins depends on who is asking — six systems put the line in different places. What changes above four units, and how Ada County values apartment property.",
  intro: [
    "Five units and up, priced on rent roll and net operating income rather than on comparable sales. Fourplexes and below we buy as well, and those we handle on the residential side, because that is where the financing and the appraisal method still sit.",
    "This page is about what changes when a building crosses that line, and about a definition that is much less settled than it sounds.",
  ],
  sections: [
    {
      heading: "There is no single point where multifamily begins",
      body: [
        "It is often said that five units is where a property becomes commercial. That is a useful rule of thumb and it is not a legal fact, because there is no one system whose answer governs all the others.",
        "The federal housing-finance definition treats a multifamily property as one with more than four units, which is the boundary most people are reaching for. The Census Bureau's residential construction statistics treat multifamily as buildings with two or more units. Federal housing programmes are not uniform either — different programmes use different unit thresholds for different purposes. Idaho's own statutes add further variations of their own for their own purposes.",
        "Six systems, and they do not agree. So the honest version of the rule is that the boundary depends on which question you are asking: financing, statistics, a housing programme, or a state statute. Anyone who tells you five units is the legal definition of commercial is compressing six answers into one.",
      ],
    },
    {
      heading: "What actually changes above four units",
      body: [
        "The reason the finance boundary is the one that matters to a seller is that it is where valuation method changes, and valuation method is what determines the price.",
        "Below it, a property is valued the way a house is valued: by comparison to similar properties that recently sold. Above it, the property is valued on the income it produces. Ada County follows the same split in its own assessment work — apartment properties are handled by commercial appraisers rather than residential ones, and commercial assessment runs on income.",
        "That has a consequence owners often meet for the first time at the point of sale. The input to the valuation is the property's own operating performance, and the only person who holds that information is the owner. There is no portal that publishes it. This is the structural reason a commercial owner cannot approximate their own number the way a homeowner can, and it is not a marketing claim — it follows directly from the method.",
      ],
    },
    {
      heading: "What that means in practice",
      body: [
        "Because value follows income, the documents that describe income are the ones that matter. We ask for a rent roll and a trailing twelve months of operating statements, and for anything that changes what those numbers will look like next year: leases expiring, concessions, units held off the market, capital work that has been deferred.",
        "None of that is a test to pass. Partly vacant, mid-turnaround, or in the middle of a repositioning is a normal condition for a building to be in, and it is a condition we can price. What we cannot do is price a building we cannot see the income of.",
      ],
    },
    {
      heading: "Where multifamily can go in Boise",
      body: [
        "Boise's mixed-use districts are the ones most relevant to apartment ground. MX-2 General is drawn for a mix of uses at a moderate scale and caps building height at 45 feet. MX-4 is built around transit-oriented development nodes. MX-5 Mixed-Use Downtown is the outlier in the code: its height cell reads N/A, with no footnote attached, where every other district read so far carries a maximum.",
        "That last one deserves a caveat that its own table does not give it. No stated height maximum in the zoning table is not permission to build to any height downtown — design review, other overlays and requirements elsewhere in the code all still apply. It means the base district is not the binding constraint, which is a narrower statement than it first appears.",
        "R-3 Residential Urban caps building height at four stories not to exceed 50 feet. Its density cell is a question we deliberately do not answer here: it is footnoted twice on the city's table, and the city does not publish the footnotes.",
      ],
    },
    {
      heading: "The assessor's number answers a different question",
      body: [
        "Assessed value in Ada County is market value as of January 1. For most of the year that is a figure about a date in the past, produced for taxation at mass-appraisal scale rather than for a transaction.",
        "It also carries a tolerance the statute states openly. Idaho requires the median ratio of assessed value to market value, across a category of property, to fall within 90 percent to 110 percent of market value — a band, not a point, and a band measured across a category rather than guaranteed for any one building. On top of that, a property need only be individually appraised once every five years; in the years between it is indexed to market using recorded transactions.",
        "None of that makes it the wrong number. It makes it the right number to a question a seller is not asking. It cannot account for the specific facts that move a real price on an apartment property — a block of leases rolling at once, a boiler at the end of its life, units held vacant through a turn.",
      ],
    },
    {
      heading: "What we do with multifamily property",
      body: [
        "Five units through several hundred, in Boise and across Ada County and selectively wider in the Treasure Valley. Stabilised, partly vacant, or mid-turnaround.",
        "Timeline is set by the seller. We can work to a fast close or wait months where that is what the situation needs, and we are the party closing — not a party looking to assign the contract to someone else.",
        "We will not tell you what your property is worth. We will tell you what we would pay and show how we got there.",
      ],
    },
  ],
  citedClaims: [
    "multifamily-threshold-varies-across-six-systems",
    "gse-multifamily-more-than-four",
    "census-multifamily-starts-at-two",
    "hud-multifamily-not-uniform",
    "idaho-multifamily-boundary-is-not-one-boundary",
    "ada-apartments-valued-by-commercial-appraisers",
    "ada-commercial-assessment-uses-income",
    "ada-assessment-market-value-jan-1-commercial",
    "boise-mx2-mixed-use-general",
    "boise-mx4-transit-oriented",
    "boise-mx5-no-height-maximum",
    "boise-mx5-downtown-purpose",
    "boise-r3-height",
    "boise-district-pages-omit-footnote-definitions",
    "idaho-assessment-ratio-band-90-110",
    "idaho-appraisal-cycle-five-years",
  ],
};

export const COMMERCIAL_PAGES: CommercialPageContent[] = [INDUSTRIAL, MULTIFAMILY];

export function commercialPage(slug: string): CommercialPageContent | undefined {
  return COMMERCIAL_PAGES.find((p) => p.slug === slug);
}

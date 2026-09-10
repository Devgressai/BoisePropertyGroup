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
  /**
   * An `asset` page is gated on claims that differentiate its asset class. An
   * `explainer` is gated on claims carrying its own topics instead, because it
   * is not about a kind of building — it is about a mechanism that applies to
   * all of them.
   */
  kind: "asset" | "explainer";
  /** For an explainer this is the topic set it must differentiate on. */
  gateTopics?: string[];
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
  kind: "asset",
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
        "I-3's 150 feet looks like the most permissive standard in Boise's industrial set until you read the setbacks, which are tied to it. The I-3 front setback is a minimum of 45 feet plus one additional foot for every foot of building height above 45 feet, and the street side, interior side and rear yard all follow the front standard. So a taller building in I-3 consumes substantially more of its parcel on every side. Height is bought with land.",
        "The 150 feet is not free-standing either. It is controlled by a 45 degree angle of bulk plan measured from all exterior property lines, so the buildable envelope narrows as you approach any boundary and a small parcel cannot reach 150 feet anywhere on it.",
        "I-1 and I-2 appear to work the opposite way, printing a minimum interior side and rear yard of zero. That zero holds only away from housing. Where the property is adjacent to a Residential zoning district or a residential use, the minimum becomes 30 feet for development under three acres, 50 feet between three and ten acres, and 100 feet for development of ten or more acres — and it applies to parking as well as buildings. On an industrial parcel that backs onto homes, that scale of setback can decide what fits on the site.",
        "There is also a standard that catches people out on parcels near the freeway: yards adjacent to I-84 and I-184 carry their own parking setback, separate from the ordinary yard setbacks.",
      ],
    },
    {
      heading: "Read the ordinance, not the summary of it",
      body: [
        "Boise publishes each zoning district's dimensional standards as a table on its website, and those tables carry bracketed footnote markers — [1], [2], [3]. The city does not publish what the footnotes say. The definitions are in the codified ordinance.",
        "That gap is not academic, and the industrial districts are the clearest example of it. \"0 ft. [1]\" on the city's I-1 page is the same standard that becomes 100 feet next to housing once you read note [1]. \"150 ft. [3]\" is a height governed by a bulk plan. Neither qualification appears on the page carrying the number.",
        "In R-3 the two documents diverge further: the markers sit on different rows than the code places them, and the minimum lot area for all other uses is printed as \"2,00 sf\" where the ordinance reads 2,000 square feet.",
        "None of this is a criticism of the city — a summary table is a reasonable thing for a planning department to publish, and the code is a click away. It is a reason to read the ordinance, or to ask someone who has, before making a decision that turns on a dimension.",
      ],
    },
    {
      heading: "The setback that governs is usually the one next to housing",
      body: [
        "Every city in the valley publishes a dimensional table, and on an industrial parcel that touches residential ground, the numbers in that table are frequently not the numbers that apply. What is striking is that all of them do this and no two do it the same way.",
        "Boise scales it by the size of the development: the zero-foot interior side and rear yard in I-1 and I-2 becomes 30 feet under three acres, 50 feet between three and ten, and 100 feet at ten or more. Star sets a flat floor instead — a minimum of 15 feet across its CBD, C-1, C-2, LO, IL, PS, RC and M-U zones when adjacent to a residential use or zone. Kuna takes a third approach entirely and makes the commercial parcel inherit the neighbour's rule: where a commercial or industrial use abuts a residential district, the yard setbacks become the same as those required in that adjacent residential district.",
        "Star adds something that is not a setback at all and is easy to miss because it does not appear in any dimensional table. In its Light Industrial district, mechanical equipment emissions, shipping and delivery, and other outdoor activity areas must sit at least three hundred feet from any abutting residential district, or the use requires a conditional use permit. On a modest parcel that can put loading in the wrong place.",
        "The practical point is not any one of these numbers. It is that a parcel's relationship to the nearest housing is often worth more attention than its own district designation, and that nothing you learn about one city transfers to the next.",
      ],
    },
    {
      heading: "Across a city limit, the code changes completely",
      body: [
        "Boise's industrial districts govern Boise. Unincorporated Ada County runs its own zoning ordinance, adopted as Ordinance No. 1002, and it does not use Boise's vocabulary at all. The county's industrial districts are M1 Light Industrial, M2 General Industrial and M3 Airport Industrial. Boise's are I-1, I-2 and I-3.",
        "So \"light industrial\" is M1 on one side of a line and I-1 on the other, and they are different districts under different codes with different standards. A parcel does not change character when a boundary moves past it, but the rules governing it do. Anyone applying what they know about Boise industrial ground to a parcel in the county — or the reverse — is reading the wrong book.",
        "The cities differ from each other just as much, and not only in numbers. Garden City's C-2 is a mixed use commercial district, where Star and Kuna both use C-2 for a commercial district and put mixed use elsewhere. Star's own code names its industrial district two different ways in two different places. District letters are local vocabulary, not a shared standard, and treating them as one is how a national template gets Idaho wrong.",
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
        "The assessor's figure is not a substitute for that, and the reasons are structural rather than anyone's error — a date fixed by statute, a tolerance the law states openly, and a rolling appraisal cycle. How commercial value is determined sets that out in full.",
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
    "boise-city-pages-differ-from-codified-tables",
    "boise-industrial-interstate-parking-setback",
    "boise-i2-street-frontage-minimum",
    "boise-district-pages-omit-footnote-definitions",
    "ada-county-vs-city-zoning-vocabularies-differ",
    "ada-county-zoning-districts-schedule",
    "ada-county-commercial-districts-tied-to-areas-of-impact",
    "treasure-valley-setback-governed-by-residential-adjacency",
    "star-light-industry-300ft-residential-separation",
    "garden-city-c2-is-mixed-use-not-commercial",
    "boise-airport-influence-overlay",
    "boise-flood-protection-overlay-purpose",
    "ada-commercial-assessment-uses-income",
    "ada-assessment-market-value-jan-1-commercial",
  ],
};

export const MULTIFAMILY: CommercialPageContent = {
  slug: "multifamily",
  kind: "asset",
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
        "Idaho adds one more, from an unexpected direction. The state's architects chapter does not reach architectural services for a building used as a single or multiple family residence not exceeding three units or three stories. The exemption stops at three — so a triplex sits inside it and a fourplex does not.",
        "Seven systems, and no two of them agree. The lines fall at two, three, four and five depending on who is asking. So the honest version of the rule is that the boundary depends on the question: financing, statistics, a housing programme, a professional-licensing exemption, or a state statute. Anyone who tells you five units is the legal definition of commercial is compressing seven answers into one.",
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
        "The figure those documents produce is net operating income — in Freddie Mac's own definition, the income from a property's operations available for repayment of debt and return on equity to the owner, after deducting economic vacancy and all expenses, excluding debt service. That last exclusion is the part owners most often get wrong: NOI is a property-level number and is indifferent to how the building is financed. Two identical buildings with different loans have the same NOI.",
        "A capitalization rate is then the percentage rate expressing the relationship between a property's value and the net operating income it produces. What rate applies to a particular building on a particular day is a market question, and we will not put a number on it here — an undated figure would be worth less than nothing to you.",
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
        "Assessed value in Ada County is market value as of January 1, produced for taxation at mass-appraisal scale rather than for a transaction. For most of the year it is a figure about a date in the past, and it carries a statutory tolerance and a rolling appraisal cycle behind it — all set out in how commercial value is determined.",
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
    "idaho-architect-exemption-ends-at-three-units",
    "noi-definition-freddie-mac",
    "cap-rate-definition-freddie-mac",
    "ada-apartments-valued-by-commercial-appraisers",
    "ada-commercial-assessment-uses-income",
    "ada-assessment-market-value-jan-1-commercial",
    "boise-mx2-mixed-use-general",
    "boise-mx4-transit-oriented",
    "boise-mx5-no-height-maximum",
    "boise-mx5-downtown-purpose",
    "boise-r3-height",
    "boise-district-pages-omit-footnote-definitions",
  ],
};

export const VALUATION: CommercialPageContent = {
  slug: "how-value-is-determined",
  kind: "explainer",
  gateTopics: ["assessment", "valuation"],
  assetClass: "multifamily",
  title: "How commercial property value is determined in Ada County",
  h1: "How commercial value is determined",
  eyebrow: "Valuation",
  description:
    "Why a commercial building is valued on its income while a house is valued by comparison, why Idaho's non-disclosure rule removes the fallback, and why the assessor's number answers a different question.",
  intro: [
    "A homeowner can get within striking distance of their own number. A commercial owner usually cannot, and the reason is not that the information is being kept from them — it is that the method is different, and the input the method runs on is something only they hold.",
    "This page explains the method. It is not a valuation, and it does not tell you what your property is worth.",
  ],
  sections: [
    {
      heading: "Two methods, and which one applies is not a choice",
      body: [
        "A house is valued by comparison. You find properties that recently sold, adjust for the differences, and arrive at a number. It works because houses are numerous and similar and the sales are visible.",
        "A commercial property is valued on the income it produces. Ada County does exactly this in its own assessment work, and it staffs accordingly: apartment property is handled by the county's commercial appraisers rather than its residential ones, alongside office, retail and industrial.",
        "The switch is not a preference. Commercial buildings are too few and too unalike for comparison to carry the weight, and the thing a buyer is actually purchasing is a stream of income rather than a place to live. So above the point where a property stops being a house, the question changes from what did similar things sell for to what does this one earn.",
      ],
    },
    {
      heading: "Why an owner cannot run the method themselves",
      body: [
        "If value follows income, then the input to the valuation is the property's own operating performance — rent roll, actual collections, operating expenses, what is really leased versus what is on paper.",
        "There is no portal that publishes that. The only party who holds it is the owner. This is the genuine asymmetry in commercial property, and it runs the opposite way to the one people expect: the owner has the data and lacks the method, and everyone else has the method and lacks the data.",
        "It is also why a serious commercial conversation starts with documents rather than with a number. Anyone willing to give you a figure before seeing the income is not valuing your property. They are guessing, or they are anchoring you.",
      ],
    },
    {
      heading: "And the fallback is not available either: Idaho is a non-disclosure state",
      body: [
        "The obvious response is to go round the income question and look at what similar buildings sold for. In Idaho you generally cannot, and the reason is more interesting than secrecy.",
        "Access to the record is total. Idaho law requires every book of record, map, chart, survey and other paper on file in the recorder's office to be open during office hours to any person who wishes to inspect it, without charge. Nothing is being withheld from you.",
        "The price is simply not in the document. Idaho states what a conveyance must contain — a written instrument, subscribed by the party disposing of the property or an authorised agent, and the grantee's name and complete mailing address. The price is not among the required elements. You can read the deed in full and still not know what was paid.",
        "County assessors describe the consequence in their own words. As Bonner County's assessor puts it, \"Since Idaho is a non-disclosure state, the Assessor's office depends heavily on the public to provide sales and cost information.\" Canyon County says the same thing. The people whose statutory job is to value every property in a county are, on this point, in a position not much better than yours: they ask, and hope people tell them.",
        "There is a related asymmetry in what the public record does hold. Idaho's disclosure exemptions list what is always available from assessor records — owner name and mailing address, parcel number, legal description, square footage and acreage, the assessed value, the tax district and rate, the total property tax. A transaction price is not on that list. Which is why an owner can look up their own assessment in seconds and cannot look up what the building down the street actually sold for.",
      ],
    },
    {
      heading: "The assessor's number, and why it is not that number",
      body: [
        "Almost every owner looks at the assessed value first, and it is the most misleading figure available to them — not because it is wrong, but because it answers a different question. Three features of Idaho law explain the whole gap, and none of them is anyone's mistake.",
        "First, the date is fixed. Idaho sets assessment at market value as of 12:01 a.m. on the first day of January of the year the taxes are levied. For most of the year, that is a statement about a date that has passed.",
        "Second, the law states its own tolerance. It does not require an assessment to equal market value. It requires the median ratio of assessed value to market value, for each category of property tested, to fall within 90 percent to 110 percent of market value, tested statistically, with categories within five percentage points of one another. That is a band, and it is a band measured across a category — not a guarantee about any single building.",
        "Third, nobody may have looked at the property recently. Idaho requires every taxable property to be appraised at least once every five years, on a rolling schedule that reaches fifteen percent of a county's properties in year one and all of them by year five. In the years between, a property is indexed to current market value using recorded transactions rather than individually examined.",
        "Put those together and an assessed value is a figure with a fixed date, an openly stated tolerance, and potentially several years since anyone looked at that specific building. For a commercial property whose income has moved materially since, that is the entire explanation of the divergence — without anyone having erred.",
      ],
    },
    {
      heading: "What this means for a conversation with us",
      body: [
        "We ask for a rent roll and a trailing twelve months of operating statements, and for the things that change what those numbers will look like next year: leases expiring, concessions, units held off the market, capital work deferred.",
        "We then tell you what we would pay and show the arithmetic. That is a commercial position, not an opinion of value, and the difference matters: we are the buyer, and an opinion of value from the buyer is not an opinion of value. If you need one of those, you need an appraiser, and we will say so.",
        "What we will not do is give you a number before we have seen the income, or tell you what your property is worth.",
      ],
    },
  ],
  citedClaims: [
    "ada-commercial-assessment-uses-income",
    "ada-apartments-valued-by-commercial-appraisers",
    "ada-assessment-market-value-jan-1-commercial",
    "idaho-assessment-lien-date-statutory",
    "idaho-assessment-ratio-band-90-110",
    "idaho-appraisal-cycle-five-years",
    "idaho-recorded-documents-are-public",
    "idaho-deed-content-requirement-omits-price",
    "idaho-is-a-non-disclosure-state",
    "idaho-assessor-records-conditional-confidentiality",
  ],
};

export const COMMERCIAL_PAGES: CommercialPageContent[] = [INDUSTRIAL, MULTIFAMILY, VALUATION];

export function commercialPage(slug: string): CommercialPageContent | undefined {
  return COMMERCIAL_PAGES.find((p) => p.slug === slug);
}

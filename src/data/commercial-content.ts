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

import type { ArticleTable } from "@/components/seo/DataTable";

export interface CommercialSection {
  heading: string;
  body: string[];
  /**
   * An optional comparison table. Every figure and name in it must trace to a
   * cited claim, exactly like body prose; check-commercial-pages.mjs scans it.
   */
  table?: ArticleTable;
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
  /**
   * The page's primary asset class, used for the multifamily-specific copy
   * rules and as the default gate subject.
   */
  assetClass: string;
  /**
   * Additional asset classes the page legitimately covers.
   *
   * Most pages are about one kind of property. The commercial-districts page is
   * not, and that is its entire premise: the codes themselves do not separate
   * office from retail — Meridian governs both in one table and Boise delivers
   * both through the same MX series — so a page pretending to cover one of them
   * would be inventing a distinction its sources do not make.
   */
  alsoCovers?: string[];
  title: string;
  /** Search title when `title` is too long to display (~60 chars). Falls back to `title`. */
  seoTitle?: string;
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
  seoTitle: "Sell Industrial Property in Boise and Ada County, Idaho",
  h1: "Selling industrial property in Boise",
  eyebrow: "Industrial",
  description:
    "Selling a warehouse, flex or shop building in Boise? How I-1, I-2 and I-3 differ, how Ada County's M1 to M3 differ again, and how the county values it.",
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
      heading: "A tabled setback is the unconstrained case, not the general one",
      body: [
        "Every city in the valley publishes a dimensional table, and the industrial rows in those tables often show generous numbers — frequently a zero-foot interior side and rear yard. Those figures describe the case where nothing else applies. Something else usually applies.",
        "Meridian says so in the table itself, twice. Its industrial standards — zero-foot front, rear and interior side setbacks, a 35-foot street setback and a 50-foot height maximum, shared by I-L and I-H — are introduced by text directing the reader to exceptions and clarifications set out elsewhere in the code. And a note to the commercial table states that setback, landscape buffer, height and parking standards inside an adopted specific area plan take precedence over the table entirely. The table is not presenting itself as the answer.",
        "Three cities enlarge the setback according to what is next door, and no two do it the same way. Boise scales it by the size of the development: the zero-foot interior side and rear yard in I-1 and I-2 becomes 30 feet under three acres, 50 feet between three and ten, and 100 feet at ten or more. Star sets a flat floor instead — a minimum of 15 feet across its CBD, C-1, C-2, LO, IL, PS, RC and M-U zones when adjacent to a residential use or zone, though a waiver may be requested where the neighbouring property has the potential to redevelop as something other than housing. Kuna makes the parcel inherit the neighbour's rule outright: where a commercial or industrial use abuts a residential district, the yard setbacks become the same as those required in that adjacent residential district.",
        "Eagle does something different in kind, twice. It enlarges the side setback by the building's own height rather than by what adjoins it — except for single-family attached dwellings, a multi-storey structure requires an additional five feet of side setback per storey, and that condition rides every row of the table, industrial districts included. It also displaces the district's standards by use: a residential building in a non-residential district must meet the residential height and area regulations instead. An Eagle industrial parcel carrying a residence is not governed by its industrial row at all.",
        "Star adds a constraint that is not a setback at all and appears in no dimensional table. In its Light Industrial district, mechanical equipment emissions, shipping and delivery, and other outdoor activity areas must sit at least three hundred feet from any abutting residential district, or the use requires a conditional use permit. On a modest parcel that can put loading in the wrong place.",
        "So the conditions that displace a tabled figure are not even all of the same kind. What is next door, how tall the building is, what is being done on the parcel, and whether an adopted plan overlies it can each change the answer.",
        "The practical point is not any one of these numbers. It is that the figure printed in a district table is the starting point of the analysis rather than the end of it, and that nothing you learn about one city transfers to the next.",
      ],
    },
    {
      heading: "Across a city limit, the code changes completely",
      body: [
        "Boise's industrial districts govern Boise. Unincorporated Ada County runs its own zoning ordinance, adopted as Ordinance No. 1002, and it does not use Boise's vocabulary at all. The county's industrial districts are M1 Light Industrial, M2 General Industrial and M3 Airport Industrial. Boise's are I-1, I-2 and I-3.",
        "So \"light industrial\" is M1 on one side of a line and I-1 on the other, and they are different districts under different codes with different standards. A parcel does not change character when a boundary moves past it, but the rules governing it do. Anyone applying what they know about Boise industrial ground to a parcel in the county — or the reverse — is reading the wrong book.",
        "The cities differ from each other just as much, and not only in numbers. Take M-3. In unincorporated Ada County it is Airport Industrial, a live district in the adopted ordinance. In Kuna it was limited to mining and has been consolidated into M-2, so it no longer operates. Boise has no M-3 at all — its third industrial district is I-3 Industrial Technology. Three characters, three meanings, inside one county.",
        "The same holds across the board. Garden City's C-2 is a mixed use commercial district, where Star and Kuna both use C-2 for a commercial district and put mixed use elsewhere. Star's own code names its industrial district two different ways in two different places. Meridian caps industrial height at 50 feet where Boise allows 55 in I-1 and I-2. District letters are local vocabulary, not a shared standard, and treating them as one is how a national template gets Idaho wrong.",
        "There is a second thing in the county code worth knowing if you own unincorporated ground. Every commercial and industrial district in it carries the same stated purpose: to encourage those uses primarily inside AREAS OF IMPACT, implementing the comprehensive plans adopted as part of the area of impact agreements, and to be established outside one only on a limited basis. The county is not planning a parallel industrial economy out there. It is largely holding ground that a city's plan expects to take in.",
      ],
    },
    {
      heading: "Unincorporated industrial ground: the county's M1, M2 and M3",
      body: [
        "Ordinance No. 1002 gives the county's three industrial districts one shared dimensional table. M1 Light, M2 General and M3 Airport Industrial all carry a 50 feet maximum building height and a 30 feet minimum street frontage. Interior side and rear setbacks are zero, and become 15 feet where the lot abuts residential. That is a flat figure, not Boise's scale that grows with the size of the development, and it is another reason a Boise number cannot be carried onto county ground.",
        "The districts differ by purpose. M1 is drawn for light industrial and technological uses, light assembly, warehousing, research institutions and specialized manufacturing, with professional offices only where they serve light industrial uses. M2 provides for higher intensities than M1. M3 accommodates industrial uses compatible with the safe operation of the Boise Air Terminal (Gowen Field), is intended for non-noise sensitive manufacturing, industrial and commercial uses, and sends any use inside the airport overlay district to a separate section of the code as well.",
        "One M1 rule matters to anyone selling a flex or showroom building. Retail store, personal services and office uses may occupy up to 10% of the gross floor area of an industrial building, or 15,000 square feet, whichever is less. The front-of-house share of the building is capped by the code, not by the market.",
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
        "The rule the assessor works under points the same way, with one twist. Where the income approach is used on an income-producing property, Idaho's rules require market rent, not contract rent. A warehouse let below market on a long lease is assessed as if it were let at market. A buyer is buying the lease that actually exists.",
        "The assessor's figure is not a substitute for that, and the reasons are structural rather than anyone's error — a date fixed by statute, a tolerance the law states openly, and a rolling appraisal cycle. [How commercial value is determined](/commercial/how-value-is-determined) sets that out in full.",
      ],
    },
    {
      heading: "What we do with industrial property",
      body: [
        "We look at warehouse, flex, shop and yard property in Boise and across Ada County — single tenant, multi tenant, or empty. Deferred maintenance is not a disqualifier and neither is a problem attached to title, tenancy or entitlement.",
        "We buy with our own capital, a purchase closes through a local title company, and the seller chooses the closing date. The first conversation can be a phone call to (208) 779-4247.",
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
    "eagle-multistory-side-setback-increment",
    "meridian-industrial-table-defers-to-exceptions",
    "m3-means-three-different-things-in-ada-county",
    "star-residential-adjacency-floor-is-waivable",
    "meridian-specific-area-plans-displace-the-table",
    "garden-city-c2-is-mixed-use-not-commercial",
    "boise-airport-influence-overlay",
    "boise-flood-protection-overlay-purpose",
    "ada-commercial-assessment-uses-income",
    "ada-assessment-market-value-jan-1-commercial",
    "ada-county-m1-caps-retail-and-office-floor-area",
    "ada-county-industrial-tables-and-airport-purpose",
    "idaho-assessment-income-approach-uses-market-rent",
  ],
};

export const MULTIFAMILY: CommercialPageContent = {
  slug: "multifamily",
  kind: "asset",
  assetClass: "multifamily",
  title: "Selling multifamily property in Ada County — five units and up",
  seoTitle: "Sell an Apartment Building in Boise or Ada County (5+ Units)",
  h1: "Selling multifamily property, five units and up",
  eyebrow: "Multifamily",
  description:
    "Selling a building of five units or more in Boise or Ada County? Where multifamily begins, why it is priced on income, and how the assessor values apartments.",
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
      heading: "Outside Boise, the district rules change: Garden City's C-2",
      body: [
        "Apartment ground in Garden City sits under a different kind of rule. Its C-2 Mixed-Use Commercial district requires a mix of uses. A development with more than 50 dwelling units at a density above 20 dwelling units per acre must give at least 30% of the site's square footage to nonresidential uses, and the same requirement applies in Garden City's own R-3 and M mixed-use districts. A project that does not meet the test may still be allowed through a conditional use permit or a planned unit development.",
        "So an apartment building in Garden City's C-2 may carry commercial space the code expected it to carry, and whoever buys it is buying that mix. The district letters across the county are covered on [what each commercial district letter means](/commercial/commercial-districts).",
      ],
    },
    {
      heading: "The assessor's number answers a different question",
      body: [
        "Assessed value in Ada County is market value as of January 1, produced for taxation at mass-appraisal scale rather than for a transaction. For most of the year it is a figure about a date in the past, and it carries a statutory tolerance and a rolling appraisal cycle behind it — all set out in [how commercial value is determined](/commercial/how-value-is-determined).",
        "Two of the Tax Commission's rules explain much of the rest. Where the income approach is used on an income-producing property, it must use market rent, not contract rent, so the assessor values an apartment building as if its units were let at market. And the rules tell assessors to include income and expense data owners submit by the first Monday in April. An owner who submits it can protect it, because Idaho exempts confidential commercial or financial information in assessor records from disclosure, provided the owner stamps or marks the documents.",
        "None of that makes it the wrong number. It makes it the right number to a question a seller is not asking. It cannot account for the specific facts that move a real price on an apartment property — a block of leases rolling at once, a boiler at the end of its life, units held vacant through a turn.",
      ],
    },
    {
      heading: "What we do with multifamily property",
      body: [
        "Five units through several hundred, in Boise and across Ada County and selectively wider in the Treasure Valley. Stabilised, partly vacant, or mid-turnaround.",
        "Timeline is set by the seller. We can work to a fast close or wait months where that is what the situation needs. We buy with our own capital and close through a local title company. The number is (208) 779-4247.",
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
    "garden-city-c2-requires-mix-of-uses",
    "idaho-assessment-income-approach-uses-market-rent",
    "idaho-assessor-market-data-bank-income-expense",
    "idaho-assessor-records-conditional-confidentiality",
  ],
};

export const VALUATION: CommercialPageContent = {
  slug: "how-value-is-determined",
  kind: "explainer",
  gateTopics: ["assessment", "valuation"],
  assetClass: "multifamily",
  title: "How commercial property value is determined in Ada County",
  seoTitle: "How Commercial Property Value Is Determined in Ada County",
  h1: "How commercial value is determined",
  eyebrow: "Valuation",
  description:
    "Idaho recorder records are free to inspect, but a deed need not state a price. How Ada County values commercial property on income, and why assessments differ.",
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
      heading: "What Idaho law tells the assessor to consider",
      body: [
        "The assessor does not choose a method freely. Idaho Code § 63-208 requires each county assessor to find market value according to recognized appraisal methods and techniques as set forth by the State Tax Commission, and it makes the actual and functional use of the property a major consideration.",
        "The Tax Commission's property tax rules then say what those methods are. Three approaches to value are considered for all property: sales comparison, cost and income. Assessors work from the guidelines and publications of nationally recognized appraisal bodies.",
        "One rule matters more than the others to a commercial owner. When the income approach is used on an income-producing property, it must use market rent, not contract rent. The assessor values the building as if it were let at market, not at the rents its leases actually carry. A long lease below market does not by itself pull the assessment down, and a lease above market does not by itself push it up.",
        "A buyer works the other way. A buyer is purchasing the actual leases, so the actual rents, the dates they roll and the terms attached to them are the inputs. That single difference explains a good part of the gap between an assessed value and an offer on a building with long or unusual leases.",
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
        "So where does the income side of an assessment come from? The Tax Commission's rules answer that directly. They require each county's valuation plan to include a market data bank: a collection, verification and analysis of sales, income and expense data and building cost information. Assessors are told to include income and expense data that property owners submit by the first Monday in April, so that assessment notices can go out by the first Monday in June.",
        "An owner who hands that information over is not publishing it. Idaho exempts assessor records containing confidential commercial or financial information from public disclosure, but the owner has to claim the exemption by stamping or marking the documents. Unmarked, the protection is not automatic.",
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
        "Because sale prices are not in the public record, those documents are also how the numbers get checked. A rent roll is read against the leases behind it, and operating statements against what was actually collected. That is the same verification the assessor's rule describes, done on one building instead of a county.",
        "We buy with our own capital, a purchase closes through a local title company, and the seller chooses the closing date. [The commercial property we buy](/commercial) covers industrial, multifamily and mixed-use.",
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
    "idaho-assessors-use-tax-commission-appraisal-methods",
    "idaho-three-approaches-considered-for-all-property",
    "idaho-assessment-income-approach-uses-market-rent",
    "idaho-assessor-market-data-bank-income-expense",
  ],
};

export const DISTRICTS: CommercialPageContent = {
  slug: "commercial-districts",
  kind: "asset",
  assetClass: "retail",
  alsoCovers: ["office"],
  title: "Commercial zoning districts in Ada County, city by city",
  seoTitle: "What C-2 Commercial Zoning Means in Each Ada County City",
  h1: "What C-1, C-2 and C-3 mean in each Ada County jurisdiction",
  eyebrow: "Districts",
  description:
    "C-2 is General Business in Eagle, Mixed Use Commercial in Garden City and Area Commercial in Kuna. Boise and Meridian have none. A sourced, city-by-city table.",
  intro: [
    "A commercial district is the part of a zoning map set aside for shops, offices and services. The label on it, C-2 for example, is local shorthand. Each city in Ada County and the county itself write their own, and the same label means different things on either side of a city limit.",
    "This page sets out what each label means in each jurisdiction, quoted from the adopted codes. It is not a valuation and it is not advice about a particular parcel.",
  ],
  sections: [
    {
      heading: "What C-2 means, jurisdiction by jurisdiction",
      body: [
        "The short answer to what C-2 means is that it depends on which code governs the parcel. In Eagle, C-2 is General Business, for commercial uses more intensive than those its other commercial zones permit. In Garden City it is Mixed Use Commercial. In Kuna it is Area Commercial, for general business uses larger in scale than its neighborhood district. In Star it is General Commercial. Unincorporated Ada County writes it C2, without a hyphen, and calls it Community Commercial.",
        "Boise and Meridian have no C-2 at all. Boise has no C-lettered district of any kind: its commercial uses are zoned through the MX mixed-use series. Meridian states the purpose of its commercial districts as providing for the retail and service needs of the community, and names them C-N, C-C, C-G, L-O, M-E and H-E rather than numbering them.",
      ],
      table: {
        caption: "Commercial district names by jurisdiction, from each adopted code",
        columns: ["Jurisdiction", "C-1", "C-2", "C-3", "Other commercial districts", "Where it is written"],
        rows: [
          ["Boise", "None", "None", "None", "MX-1 Neighborhood, MX-2 General, MX-3 Active, MX-4 Transit Oriented Development Node, MX-5 Downtown, MX-U University, MX-H Health", "City zoning district index; Boise City Code 11-02-03"],
          ["Meridian", "None", "None", "None", "C-N Neighborhood Business, C-C Community Business, C-G General Retail and Service Commercial, L-O Limited Office, M-E Mixed Employment, H-E High Density Employment", "Meridian UDC 11-2B-1"],
          ["Eagle", "Neighborhood Business", "General Business", "Highway Business", "L-O Limited Office, CBD Central Business", "Eagle City Code 8-2-1"],
          ["Garden City", "Highway Commercial", "Mixed Use Commercial", "None", "LI Light Industrial is the only other nonresidential district", "Garden City Code 8-2B-1"],
          ["Kuna", "Neighborhood Commercial", "Area Commercial", "Service Commercial", "CBD Central Business", "Kuna City Code 5-8-501"],
          ["Star", "Neighborhood Commercial", "General Commercial", "None", "CBD Central Business, LO Limited Office; RC Riverfront Center and MU Mixed Use", "Star City Code 8-3A-1"],
          ["Unincorporated Ada County", "C1 Neighborhood Commercial", "C2 Community Commercial", "None", "LO Limited Office", "Ordinance No. 1002, 8-2-16 to 8-2-18"],
        ],
        note: "District names and stated purposes only. A district name does not tell you what a particular parcel may be used for. That comes from each code's own use table and from any overlay, development agreement or specific area plan on the parcel.",
      },
    },
    {
      heading: "The same letter, different districts. The same idea, different letters.",
      body: [
        "Read the table across a row and the labels look like a shared system. Read it down a column and the system falls apart. Garden City's C-1 is Highway Commercial, for commercial and retail activity along arterial streets, while C-1 is a neighbourhood-scale business district in Eagle, Star, Kuna and the county. Eagle puts its highway district at C-3 instead, for travel-related services such as hotels, service stations, drive-in restaurants and retail sales clustered on major streets. Kuna's C-3 is something else again: Service Commercial, for larger scale commercial activity that may include business that is semi-industrial in nature.",
        "Star folds Eagle's two roles into one. Its C-2 General Commercial covers commercial uses more intensive than its other zones, typically located next to arterial roadways and not immediately next to housing, and it names the same travel-related services Eagle assigns to C-3.",
        "It fails in the other direction too, and that is the more dangerous half. A neighbourhood-scale business district is C-1 in Eagle and C-N in Meridian, the same idea under different letters. A reader comparing districts by their codes is misled twice: matching letters suggest a similarity that is not there, and differing letters hide one that is.",
        "None of this tells you what a district permits. It only tells you that the label will not travel. A permitted use in one city's C-2 says nothing about the next city's.",
      ],
    },
    {
      heading: "Garden City: C-2 is a mixed-use district, and the code enforces it",
      body: [
        "Garden City's code does not place C-2 with its nonresidential districts. It has two of those, C-1 Highway Commercial and LI Light Industrial, and it places C-2 Mixed Use Commercial with its mixed-use districts, intended to implement the Comprehensive Plan's vision for mixed-use commercial and activity nodes.",
        "The label has teeth. Garden City requires a mix of uses in C-2. A development with more than 50 dwelling units at a density above 20 dwelling units per acre must give at least 30% of the site's square footage to nonresidential uses. A development on a site of 120,000 gross square feet or more must give at least 10% of the structures' square footage to dwellings. A project that does not meet those tests may still be allowed, but only through a conditional use permit or a planned unit development.",
        "For an owner of commercial ground in Garden City, that is the practical meaning of C-2: a large site is expected to carry housing, and a large apartment project is expected to carry commercial space.",
      ],
    },
    {
      heading: "Unincorporated Ada County runs its own code",
      body: [
        "Outside city limits the governing text is Ada County's zoning ordinance, adopted as Ordinance No. 1002. Its commercial districts are LO Limited Office, C1 Neighborhood Commercial and C2 Community Commercial. There is no C3.",
        "County C1 accommodates convenience goods and personal services for the daily needs of the immediate neighbourhood, along with professional office uses, and limits larger developments to arterial streets away from intersections or gateway locations. County C2 accommodates community shopping and clustered commercial activity along arterial streets and large-scale, high-intensity commercial structures, and it limits large-scale, high-intensity development to interstates and principal arterial roadways that serve the Treasure Valley.",
        "Every one of these districts carries the same stated purpose: to encourage commercial uses primarily inside areas of impact, implementing the comprehensive plans adopted with the area of impact agreements, and to be established outside one only on a limited basis. County commercial zoning is largely holding ground that a neighbouring city's plan expects to take in.",
      ],
    },
    {
      heading: "Height inside a single city's commercial set varies by nearly three to one",
      body: [
        "Meridian has six commercial districts and they do not share a height standard. Maximum building height is 35 feet in C-N Neighborhood Business and in L-O Limited Office, 50 feet in C-C Community Business, 65 feet in C-G General Retail and Service Commercial and in M-E Mixed Employment, and 95 feet in H-E High Density Employment.",
        "That is a range of nearly three to one inside districts a seller would reasonably think of as simply commercial, in one city. An owner comparing two Meridian commercial parcels on anything other than district is comparing the wrong variable first.",
        "Eagle's L-O Limited Office exists for professional, research, executive, administrative, accounting, clerical and similar uses, and specifies that development shall not be traffic intensive: a constraint on what happens on the site rather than on what is built.",
      ],
    },
    {
      heading: "The buffer scales with the road you front, not the district you are in",
      body: [
        "This is the least intuitive constraint in the valley's commercial codes and the one most likely to be missed when a parcel is assessed on paper.",
        "Meridian's commercial districts carry a street landscape buffer set by the classification of the road a property fronts: 10 feet on a local street, 20 on a collector, 25 on an arterial, 35 on an entryway corridor and 50 along the interstate. Two otherwise identical parcels in the same district give up different amounts of land depending on which road they face.",
        "Note which way that runs. The interstate frontage that makes a commercial site visible is the frontage that costs the most land. Visibility and usable area are in tension, and the code prices it.",
        "A separate landscape buffer applies where the property adjoins residential uses. A buffer is not a setback and the two must not be added together or confused — and Meridian measures its setbacks from the ultimate right-of-way for the street's classification on the adopted transportation plan, not from today's property line, which is its own trap on a road planned for widening.",
      ],
    },
    {
      heading: "Where the code says nothing",
      body: [
        "Garden City's dimensional table leaves the maximum height cell empty for its C-1 and C-2 districts. Not a footnote, not a reference elsewhere — no value at all.",
        "That is worth distinguishing from the situation in Boise, where the city's website omits footnote definitions that do exist in the codified ordinance. Here the code itself is silent. We do not know what the silence means and we are not going to guess, because a guess about a height limit is the kind of thing an owner would act on.",
        "It is a reasonable question to put to the city's planning department, and a reasonable thing to resolve before making a decision that turns on how tall a building can be. Industrial districts run on separate rules, set out in [industrial property in Ada County](/commercial/industrial), and [the commercial property we buy](/commercial) lists every asset class.",
      ],
    },
    {
      heading: "Checking a parcel in the right order",
      body: [
        "First, establish which code governs: a city's, or the county's for unincorporated ground. The district label means nothing until you know whose label it is.",
        "Second, read that jurisdiction's purpose statement for the district, then its use table and dimensional table. The purpose tells you what the district is for; the tables tell you what it allows.",
        "Third, look for anything layered on top: an overlay, a specific area plan, a development agreement or a mix-of-uses rule like Garden City's. A tabled figure describes the case where nothing else applies, and on commercial ground something else often does.",
      ],
    },
    {
      heading: "What we do with commercial property",
      body: [
        "We look at office, retail and mixed-use commercial property in Boise, across Ada County and selectively wider in the Treasure Valley, whether single tenant, multi tenant or empty.",
        "We buy with our own capital, a purchase closes through a local title company, and the seller chooses the closing date. Deferred maintenance is not a disqualifier and neither is a problem attached to title, tenancy or entitlement.",
        "We will not tell you what your property is worth. We will tell you what we would pay and show the arithmetic behind it. Call (208) 779-4247 or start with the address.",
      ],
    },
  ],
  citedClaims: [
    "commercial-district-letters-do-not-correspond",
    "boise-has-no-c-lettered-commercial-district",
    "meridian-commercial-district-purposes",
    "eagle-commercial-district-purposes",
    "garden-city-c1-is-highway-commercial",
    "garden-city-c2-is-mixed-use-not-commercial",
    "garden-city-c2-requires-mix-of-uses",
    "kuna-commercial-district-purposes",
    "star-commercial-district-purposes",
    "ada-county-c1-c2-purposes",
    "ada-county-zoning-districts-schedule",
    "ada-county-commercial-districts-tied-to-areas-of-impact",
    "meridian-commercial-height-spans-six-districts",
    "meridian-street-buffer-scales-with-road-class",
    "eagle-limited-office-purpose",
    "boise-mx2-mixed-use-general",
    "boise-mx5-downtown-purpose",
  ],
};

export const COMMERCIAL_PAGES: CommercialPageContent[] = [INDUSTRIAL, MULTIFAMILY, DISTRICTS, VALUATION];

export function commercialPage(slug: string): CommercialPageContent | undefined {
  return COMMERCIAL_PAGES.find((p) => p.slug === slug);
}

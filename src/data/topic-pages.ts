import type { Section } from "./place-content";

/**
 * TOPIC PAGES — the BOFU and MOFU layers of the funnel.
 *
 *   situation (BOFU) — "Who buys property like mine, here?" One page per seller
 *     situation, at county/state level. Doctrine (docs/seo/query-intent-map.md):
 *     a city+situation page is the SAME intent as the city page, so these are
 *     never multiplied by city.
 *   decision (MOFU) — "Is a direct sale right for me, and how does it work?"
 *
 * Each situation page has a matching TOFU guide. The guide owns the law and
 * explains it in full; the situation page owns the transaction and summarises
 * the law in a sentence or two with a link down. Titles are deliberately
 * different in intent ("We buy…" vs "Selling … in Idaho") so the two do not
 * compete for the same query.
 *
 * Same evidence regime as every other page: each section lists the claim ids
 * it rests on, any figure in prose must come from one of them, and the ONLY
 * business facts allowed are the owner-confirmed ones (2026-09-13): own
 * capital · closes through a local title company · seller chooses the date ·
 * any condition · a three-week close is realistic.
 */
export interface TopicPage {
  slug: string;
  kind: "situation" | "decision";
  /** Search title. */
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  published: string;
  updated: string;
  intro: string[];
  sections: Section[];
  /** Guides this page summarises and links down to. */
  guides: string[];
}

const NOT_ADVICE =
  "Where this page describes Idaho law it says what the statute says, with the source at the foot of the page. It is not legal advice and is not applied to your situation.";

export const TOPIC_PAGES: TopicPage[] = [
  // ───────────────────────────── BOFU ─────────────────────────────
  {
    slug: "sell-inherited-house-idaho",
    kind: "situation",
    title: "We Buy Inherited Houses in Ada County, Idaho",
    h1: "We buy inherited houses in Ada County",
    eyebrow: "Inherited property",
    description:
      "A direct sale for an Idaho estate: who can sign, why a court order is usually not needed, and what changes when the house leaves the family. Any condition.",
    published: "2026-11-12",
    updated: "2026-11-12",
    guides: ["selling-an-inherited-house-in-idaho", "selling-a-house-in-probate-in-idaho"],
    intro: [
      "Yes — we buy inherited houses across Ada County, in whatever condition the estate finds them, and whoever is selling sets the closing date. The first question is not the price but who has authority to sign. In Idaho that is usually an appointed personal representative, and usually without a court order, unless the will or a formal proceeding says otherwise.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "Who can sell an inherited house in Idaho",
        body: [
          "Idaho gives an appointed personal representative the same power over the title to estate property that an absolute owner would have, held in trust for creditors and others interested in the estate — and says that power may be used without notice, hearing or court order.",
          "Two limits travel with that sentence and both matter. The power belongs to an appointed personal representative, not to an heir who has not been appointed. And it is subject to any restriction in the will, to an order in a formal proceeding, and to the statutory priorities for claims against the estate. The full statutory picture is in our guide to [selling an inherited house in Idaho](/guides/selling-an-inherited-house-in-idaho).",
        ],
        claims: ["id-pr-power-over-title", "id-pr-powers-limited-by-will"],
      },
      {
        heading: "What a direct sale changes for an estate",
        body: [
          "Most estates that sell to a direct buyer do it for one reason: the house is not ready for the open market and nobody wants to manage making it ready. Clearing it, repairing it, listing it and carrying it through showings is months of work for a personal representative who usually has a job and a family of their own.",
          "We buy it as it stands. Nothing has to be fixed, cleaned or staged before we make an offer, and the offer shows its working — the value we used, the work we think the house needs, and our costs — so the personal representative can explain the number to the heirs rather than simply pass it on.",
          "A transfer by a fiduciary in the course of administering an estate is exempt from Idaho's statutory property condition disclosure form. That removes one form, not honesty: Idaho's disclosure act says expressly that it does not limit any duty to disclose that arises elsewhere in the Idaho Code or in common law.",
        ],
        claims: ["id-disclosure-exempt-estate-fiduciary", "id-disclosure-other-duties-preserved"],
      },
      {
        heading: "When several heirs want different things",
        body: [
          "A house cannot be split five ways; money can. That is often the whole reason an estate sells. What helps most at that stage is a single number every heir can check, with the arithmetic laid out, and a closing date that suits the estate rather than the buyer.",
          "We deal with the personal representative, because that is who signs. If heirs want to see how the number was built, we will walk through it with them too.",
        ],
      },
      {
        heading: "If nobody is administering the estate",
        body: [
          "Sometimes an owner dies and no family member steps forward. The Ada County Treasurer serves as ex officio public administrator, responsible for administering the estates of decedents with no one else to administer them. That is the office the question ultimately reaches.",
        ],
        claims: ["ada-treasurer-ex-officio-public-administrator"],
      },
      {
        heading: "Property tax and the exemption after a death",
        body: [
          "Ada County's homeowner's exemption is re-filed on a move or a change of ownership, so it does not simply carry on once the house passes out of the original owner's hands. Whoever owns and occupies it next has to qualify in their own right.",
          "If the estate has stopped paying the tax, there is time, but not unlimited time: Idaho issues a tax deed to the county if a delinquency is not redeemed within three years, after a notice process. Our guide on [foreclosure and tax delinquency](/guides/idaho-foreclosure-vs-property-tax-delinquency) sets out that clock.",
        ],
        claims: ["ada-homeowners-exemption-deadline", "id-tax-deed-three-year-delinquency"],
      },
      {
        heading: "How a sale to us works for an estate",
        body: [
          "Send the address. We look at the parcel record and the house, then come back with a number and how we reached it. If the personal representative accepts, the purchase closes through a local title company, on a date the estate chooses — three weeks is realistic if speed matters, and months is fine if the estate needs them.",
          "We buy with our own capital, so the sale does not wait on a lender's appraisal or approval. More on the steps is on [how it works](/how-it-works).",
        ],
      },
      {
        heading: "When you should list it instead",
        body: [
          "If the house is tidy and financeable and the estate is in no hurry, listing it will usually net more, even after commission. We are not the highest bidder; we are the certain one. If that trade is wrong for the estate, we would rather say so than let you find out afterwards.",
        ],
      },
    ],
  },

  {
    slug: "sell-house-as-is-idaho",
    kind: "situation",
    title: "Sell Your House As-Is in Ada County, Idaho",
    h1: "Sell your house as-is in Ada County",
    eyebrow: "As-is sale",
    description:
      "We buy Ada County houses as they stand — no repairs, no staging. What Idaho still requires of an as-is seller, and how condition is priced.",
    published: "2026-11-12",
    updated: "2026-11-12",
    guides: ["idaho-seller-disclosure-when-selling-as-is"],
    intro: [
      "You can sell a house as-is in Idaho, and we buy Ada County houses in any condition without asking for a single repair. What as-is does not do is switch off Idaho's disclosure law: a seller of one-to-four unit residential property still owes the property condition disclosure form unless the transfer is one of the statutory exemptions.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "As-is is about repairs, not about disclosure",
        body: [
          "Idaho requires the seller of residential real property of one to four dwelling units — including non-owner-occupied rentals — to complete a property condition disclosure form unless the transfer is exempt. Idaho Code 55-2505 lists sixteen kinds of exempt transfer. Selling as-is, or selling for cash, is not one of them.",
          "So an as-is sale changes who fixes things — nobody — but not what the seller has to tell the buyer. The full rules, deadlines and exemptions are in our guide to [Idaho seller disclosure when selling as-is](/guides/idaho-seller-disclosure-when-selling-as-is).",
        ],
        claims: ["id-disclosure-required-1-to-4-units", "id-disclosure-sixteen-exemptions"],
      },
      {
        heading: "What you disclose is what you actually know",
        body: [
          "The form records conditions and information actually known by the seller. It must say that it is not a warranty and not a substitute for an inspection. A seller is not liable for an error about something outside their personal knowledge.",
          "That matters for the houses people most often sell as-is: a rental you never lived in, a parent's house, a property you inherited. You disclose what you know, honestly; you are not expected to know what a crawlspace looks like if you have never been in it. Every disclosure has to be made in good faith, which the act defines as honesty in fact.",
        ],
        claims: [
          "id-disclosure-actual-knowledge-not-warranty",
          "id-disclosure-no-liability-outside-personal-knowledge",
          "id-disclosure-good-faith-honesty-in-fact",
        ],
      },
      {
        heading: "Houses built before 1978",
        body: [
          "For housing built before 1978, federal rules require the seller to give the buyer an EPA-approved lead hazard pamphlet and disclose any known lead-based paint before the buyer is obligated. The buyer also gets a 10-day period to have the property assessed or inspected unless the parties agree otherwise in writing — and the buyer may waive it in writing.",
          "A large share of the houses that sell as-is in Boise's older neighborhoods fall on the wrong side of that date, so expect the paperwork whichever buyer you choose.",
        ],
        claims: ["fed-lead-paint-pre-1978-seller-disclosure", "fed-lead-paint-ten-day-evaluation"],
      },
      {
        heading: "Unpermitted work is a cost, not a dealbreaker",
        body: [
          "Old additions, a converted garage, a re-roof nobody pulled a permit for — these come up constantly with as-is houses. Permit triggers are set city by city, which is why we look at the city as well as the house. In Star, for example, re-roofing and replacing more than 100 square feet of siding need a building permit; Kuna's list of permit triggers includes fences.",
          "For us, unpermitted work is a line in the arithmetic: what it would take to bring it into compliance, or to live with it. It is not a reason to walk away.",
        ],
        claims: ["star-building-permit-triggers", "kuna-permit-triggers-include-fences"],
      },
      {
        heading: "How we price a house that needs work",
        body: [
          "Our offer is built from four things, and we show you all four: what the house would be worth after the work, what the work costs, what it costs us to hold and resell it, and the margin we run on. Condition moves the second number. It does not change the method.",
          "You will see the same arithmetic we use, so you can check it, argue with a line of it, or compare it with what listing would net. More detail is on [how it works](/how-it-works).",
        ],
      },
      {
        heading: "What an as-is sale to us looks like",
        body: [
          "No repairs, no cleaning, no showings. Send the address; we come back with a number and the working behind it. If you accept, the sale closes through a local title company on the date you choose — three weeks is realistic when you need speed. We buy with our own capital, so there is no lender inspection or appraisal for the house to fail.",
        ],
      },
      {
        heading: "When as-is is the wrong move",
        body: [
          "If the house needs only light cosmetic work, you have a few months, and you can face the showings, listing it — even as-is — will usually net more. A direct sale buys certainty and time back, and it costs some of the price. We will tell you plainly if we think the trade is wrong for you.",
        ],
      },
    ],
  },

  {
    slug: "sell-rental-property-idaho",
    kind: "situation",
    title: "Sell a Rental With Tenants in Ada County, Idaho",
    h1: "Sell a rental property with tenants in place",
    eyebrow: "Rental property",
    description:
      "We buy occupied and vacant rentals up to a fourplex across Ada County. What happens to the lease and the deposit when an Idaho rental changes hands.",
    published: "2026-11-12",
    updated: "2026-11-12",
    guides: ["selling-a-rental-with-tenants-in-idaho"],
    intro: [
      "You can sell an Idaho rental with the tenants still in it, and we buy occupied and vacant rentals up to a fourplex across Ada County. A sale does not end a tenancy on its own, and when an Idaho rental changes hands during a tenancy, the new owner becomes liable for refunding the tenants' security deposits.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "The deposit follows the property",
        body: [
          "Idaho makes the new owner liable for refunding tenants' security deposits when a rental changes ownership during a tenancy. In a sale that means the deposits are a closing item — accounted for between seller and buyer — rather than something left to sort out later with the tenant.",
          "The refund rules themselves do not change with the owner: if no time is fixed by agreement a refund is due within 21 days, and in any case within 30 days of the tenant surrendering the premises, and normal wear and tear cannot be charged against it.",
        ],
        claims: ["id-deposit-liability-transfers-on-sale", "id-deposit-refund-timing", "id-deposit-no-normal-wear-and-tear"],
      },
      {
        heading: "Leases and the recording act",
        body: [
          "Idaho's recording act makes most unrecorded conveyances of real property void against a later good-faith purchaser — but it carves out a lease for a term not exceeding one year. How that applies to a particular lease is a question for an attorney, and our guide on [selling a rental with tenants in Idaho](/guides/selling-a-rental-with-tenants-in-idaho) sets out what the statute says.",
          "What it means in practice for a sale to us: we want to see every lease, and we price the property with the tenancy as it actually is.",
        ],
        claims: ["id-recording-act-lease-one-year-carveout"],
      },
      {
        heading: "Disclosure still applies to a rental",
        body: [
          "Idaho's property condition disclosure requirement covers residential property of one to four units including non-owner-occupied rental property. Owning it as an investment does not exempt the sale, although what you disclose is what you actually know.",
        ],
        claims: ["id-disclosure-required-1-to-4-units", "id-disclosure-actual-knowledge-not-warranty"],
      },
      {
        heading: "Occupants who are not tenants",
        body: [
          "Idaho has a limited alternative remedy that lets a residential owner ask the county sheriff to remove people unlawfully occupying a dwelling, subject to a list of conditions. Ada County's court-assistance eviction forms, by contrast, may be used only against a tenant who has not paid rent. Which route applies depends on who the occupant is, and that is a legal question.",
          "We buy with occupants in place. We do not need the property empty before we can make an offer.",
        ],
        claims: ["id-6-310a-remove-unauthorized-persons", "ada-eviction-forms-nonpayment-only"],
      },
      {
        heading: "City rules that follow a rental",
        body: [
          "Some obligations attach to the property rather than the person. In Meridian, utility accounts stay with the property and any debt for city services is the owner's responsibility regardless of who used them. In Boise, the short-term rental license was repealed in 2026, though the city still enforces its nuisance, noise, parking and occupancy rules.",
        ],
        claims: ["meridian-utility-debt-stays-with-property", "boise-str-license-repealed-2026"],
      },
      {
        heading: "Up to four units here; five and up is commercial",
        body: [
          "Ada County's residential appraisers value multi-family residential up to four units; apartments and higher-density residential are handled by commercial appraisers. We draw the same line. Duplexes, triplexes and fourplexes are bought as residential, on this page. Five units and up is priced on rent roll and income — see [multifamily](/commercial/multifamily).",
        ],
        claims: ["ada-residential-appraisal-scope"],
      },
      {
        heading: "How selling a rental to us works",
        body: [
          "Send the address, and if you have them, the leases and the rent and deposit figures. We come back with a number and how we built it. The sale closes through a local title company on the date you choose — three weeks is realistic — and we buy with our own capital, so the deal does not depend on a lender's view of the tenancy.",
          "If the rental is in good shape, fully let and you have time, listing it to another investor may well net more. We will say so if we think that is your better route.",
        ],
      },
    ],
  },

  {
    slug: "sell-house-before-foreclosure-idaho",
    kind: "situation",
    title: "Selling a House Before Foreclosure in Ada County",
    h1: "Selling your house before a foreclosure sale",
    eyebrow: "Facing foreclosure",
    description:
      "Behind on payments in Ada County? How Idaho's trustee-sale clock works, what a sale before the date can and cannot do, and what we can honestly offer.",
    published: "2026-11-12",
    updated: "2026-11-12",
    guides: ["idaho-foreclosure-vs-property-tax-delinquency", "liens-and-judgments-when-selling-in-idaho", "idaho-property-taxes-when-you-sell"],
    intro: [
      "If an Ada County house is heading toward a trustee's sale, selling it before the sale date is one option the owner still has — and if the property is worth more than what is owed, it is the option that can leave the difference with the owner rather than at the auction. Idaho requires notice of a trustee's sale at least 120 days before the sale, so the clock is real but not instant.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "The clock: 120 days' notice before a trustee's sale",
        body: [
          "Most Idaho home loans are secured by a deed of trust, which is foreclosed by a trustee's sale rather than a lawsuit. Notice of the sale must be given at least 120 days before the day fixed for it. It must also be published once a week for four successive weeks in a newspaper in the county, the last at least 30 days before the sale, and there must be at least three good-faith attempts at personal service.",
          "Those are minimums the trustee has to meet, not a schedule you can count on stretching. If a notice has arrived, the date on it is the date to plan around.",
        ],
        claims: ["id-trustee-sale-120-day-notice", "id-trustee-sale-publication", "id-trustee-sale-service-attempts"],
      },
      {
        heading: "Behind on property tax is a different, slower clock",
        body: [
          "A property tax delinquency does not lead to a trustee's sale. Idaho issues a tax deed to the county if a delinquency is not redeemed within three years, after a notice served between five and two months before the deed issues. Owners regularly confuse the two and plan around the wrong timeline. Our guide on [foreclosure versus tax delinquency](/guides/idaho-foreclosure-vs-property-tax-delinquency) lays them side by side.",
        ],
        claims: ["id-tax-deed-three-year-delinquency", "id-tax-deed-notice-service"],
      },
      {
        heading: "A sale before the date is still an ordinary sale",
        body: [
          "Idaho exempts a deed in lieu of foreclosure, a transfer to the lender by a borrower in default, and the foreclosure sale itself from the property condition disclosure form. A sale by the owner to a buyer before the trustee's sale is none of those, so the ordinary disclosure rules apply — honestly, and to what you actually know.",
        ],
        claims: ["id-disclosure-exempt-foreclosure", "id-disclosure-required-1-to-4-units"],
      },
      {
        heading: "What we can do, and what we cannot",
        body: [
          "We cannot stop a foreclosure, negotiate with your lender, or promise any outcome but our own purchase. Be wary of anyone who promises to save the house for a fee.",
          "What we can do is buy before the sale date if the numbers work: an offer with the arithmetic shown, our own capital so there is no loan to approve, and a close through a local title company on a date you choose. Three weeks is realistic, which matters when the notice period is counting down. The loan is paid off from the sale at closing, like any sale.",
        ],
      },
      {
        heading: "When selling to us will not help",
        body: [
          "If you owe more than the house would bring, a quick sale to us does not fix that, and we will tell you so rather than waste the time you have. Your lender, a housing counselor or an attorney is the right first call in that case. And if you have equity and enough runway to list, listing will usually net more than we can pay.",
        ],
      },
      {
        heading: "Three numbers to know before the sale date",
        body: [
          "What is owed — the full payoff, including arrears, fees and interest to the closing date, not just the missed payments. Your lender or servicer can give you a payoff figure; ask for it in writing.",
          "What the house would bring — as it stands, not after the repairs you have not had the money to make. That is the number our offer is built on, and we show it to you.",
          "How many days are left — counted from the sale date on the notice, not from today's feeling about it. A sale to anyone needs time to close through a title company, and the closer the date, the fewer options remain.",
        ],
      },
      {
        heading: "What to send us",
        body: [
          "The address, the sale date on any notice you have received, and roughly what is owed. We will tell you quickly whether a direct sale is workable before the date, and if it is, what we would pay and why. See [how it works](/how-it-works) for the steps.",
        ],
      },
    ],
  },

  {
    slug: "sell-land-idaho",
    kind: "situation",
    title: "Sell Land or Acreage in Ada County, Idaho",
    h1: "Sell land or acreage in Ada County",
    eyebrow: "Land & acreage",
    description:
      "We buy raw land, acreage, rural parcels and infill lots across Ada County. What we look at first — water, access, irrigation and who governs the parcel.",
    published: "2026-11-12",
    updated: "2026-11-12",
    guides: ["selling-land-or-acreage-in-ada-county", "selling-a-house-with-a-well-or-septic-in-ada-county"],
    intro: [
      "We buy land across Ada County — raw ground, rural acreage with a well and septic, infill lots and parcels with access, easement, water or floodplain complications. Size matters less than four things: whether the parcel has water, legal access, irrigation rights, and which government decides what can be built on it.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "Who governs the parcel",
        body: [
          "Unincorporated Ada County is not one regime. Much of it lies inside Areas of City Impact — land planned jointly with the adjacent city. 78.8% of unincorporated residents, about 50,143 people, live inside one. Which side of that line a parcel sits on changes the rules for dividing and building on it.",
          "We start every land offer by establishing that, from the county's own maps. The Ada County Assessor maintains the parcel boundaries, road rights-of-way and city limits that tell you which regime applies.",
        ],
        claims: ["ada-area-of-city-impact", "ada-assessor-maintains-parcel-gis"],
      },
      {
        heading: "Water: the domestic exemption has a ceiling",
        body: [
          "Idaho treats domestic water use — a home, with irrigation of up to half an acre — as a defined use capped at 13,000 gallons a day. For Idaho's domestic water statutes a subdivision is five or more lots, which is one reason a parcel that looks dividable on paper may not be on water.",
        ],
        claims: ["id-domestic-water-13000-gpd", "id-water-subdivision-five-lots"],
      },
      {
        heading: "Irrigation is its own map",
        body: [
          "Ada County's irrigation districts map identifies 27 separate irrigation entities in the county — districts, ditch companies, lateral associations and others. Who delivers water to a parcel, and on what terms, is a question about that map rather than about the city.",
        ],
        claims: ["ada-27-irrigation-entities"],
      },
      {
        heading: "Access, septic and floodplain",
        body: [
          "A single countywide highway district is responsible for public rights-of-way inside every Ada County city, which is where road access questions start. Central District Health permits septic systems and reviews land development applications. Any development within the floodplain in Ada County needs a Floodplain Development Permit.",
          "None of these is a reason we will not buy. Each is a line in what the land is worth to a buyer, and our guide to [selling land or acreage in Ada County](/guides/selling-land-or-acreage-in-ada-county) explains how each one binds.",
        ],
        claims: ["achd-responsibility-within-cities", "ada-septic-authority-cdh", "ada-floodplain-development-permit"],
      },
      {
        heading: "Homestead acreage and property tax",
        body: [
          "For Idaho property tax a homestead is the owner-occupied dwelling plus no more than one acre of surrounding land. On a rural parcel with a house, the rest of the acreage is assessed differently from the home site — worth knowing before you compare a tax bill with an offer.",
        ],
        claims: ["id-homestead-one-acre-limit"],
      },
      {
        heading: "Where the boundary actually is",
        body: [
          "Fences and curbs are not boundaries. Kuna's own guidance is that the best way to determine property lines is a professional survey, that owners should look for existing corner pins, and that fence lines and street curbs should not be assumed to follow the property line. The Ada County Assessor's Office may hold a copy showing the parcel's size and the lots around it.",
          "If you have a survey, a well log, a septic permit, an irrigation assessment bill or a recorded easement, send it with the parcel number. None of it is required before we make an offer, but each one can remove a guess from our arithmetic — and a guess on land is usually priced conservatively.",
        ],
        claims: ["kuna-property-lines-survey-guidance"],
      },
      {
        heading: "Development ground and commercial land",
        body: [
          "Larger parcels and land zoned for commercial or industrial use are valued on what can legally be built, and the district letters do not mean the same thing from one city to the next. Our page on [commercial districts](/commercial/commercial-districts) explains why. We look at that land too; the arithmetic is different from a residential lot.",
        ],
      },
      {
        heading: "How a land sale to us works",
        body: [
          "Send the parcel number or address. We look at the parcel record, the zoning and the constraints above, then come back with a number and the working behind it — including which constraint moved it. We buy with our own capital, so there is no land loan to arrange, and the sale closes through a local title company on the date you choose.",
          "If the parcel is clean, buildable and in demand, a listing may reach a builder who will pay more than we can. We would rather say so than buy it from you cheaply.",
        ],
      },
    ],
  },

  {
    slug: "sell-manufactured-home-idaho",
    kind: "situation",
    title: "Sell a Manufactured Home on Land in Ada County",
    h1: "Sell a manufactured home on its land",
    eyebrow: "Manufactured homes",
    description:
      "We buy manufactured homes on land across Ada County. Why Idaho's real-versus-personal-property line decides how the sale works, and what to check first.",
    published: "2026-11-12",
    updated: "2026-11-12",
    guides: ["selling-a-manufactured-home-in-idaho"],
    intro: [
      "We buy manufactured homes on their own land across Ada County, in any condition. The first thing to establish is whether the home has been converted to real property, because in Idaho that decides how it is sold, how it is assessed, and whether it can legally be moved.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "Real property or personal property",
        body: [
          "An Idaho manufactured home can become real property only if the running gear is removed, it is permanently affixed to a foundation on land the owner owns or is buying, and the statutory process is completed. Once it is declared real property, county assessors must treat it like any other site-built house, and lenders may treat it as real property.",
          "If it has never been converted, the home and the land may be two different things in law. Our guide to [selling a manufactured home in Idaho](/guides/selling-a-manufactured-home-in-idaho) sets out the test and the process.",
        ],
        claims: ["id-manufactured-home-becomes-real-property", "id-manufactured-home-treated-as-site-built"],
      },
      {
        heading: "A converted home is part of the land",
        body: [
          "Once converted, the home is a fixture and an improvement to the land, and it cannot be physically removed without the consent of everyone holding an interest in the land. Moving it also requires at least thirty days' written notice to the county assessor. For a sale, that usually means the home and the ground are sold together.",
        ],
        claims: ["id-manufactured-home-removal-requires-consent", "id-manufactured-home-removal-notice-and-taxes"],
      },
      {
        heading: "Fixtures, sheds and additions",
        body: [
          "Whether a porch, carport, shed or skirting goes with the land is decided in Idaho by a three-factor test of annexation, adaptation and intent. We price the property as it actually stands on the ground, including what is attached to it.",
        ],
        claims: ["ada-fixture-three-factor-test"],
      },
      {
        heading: "Replacing the home",
        body: [
          "Many buyers of manufactured-home lots are thinking about what replaces the home. In Boise, replacing a residential unit — a manufactured home included — with another on the same lot is exempt from impact fees where the number of service units does not increase. That is part of what the land is worth, and part of why we look at the lot as well as the home.",
        ],
        claims: ["boise-impact-fee-replacement-exemption"],
      },
      {
        heading: "Assessment and disclosure",
        body: [
          "Idaho requires manufactured homes to be assessed as other residential housing, so the property tax bill on a converted home on its own land looks much like a site-built house's. If the home has been declared real property, county assessors must treat it exactly as they would a site-built residence.",
          "Idaho's disclosure act defines residential real property as real property improved by a building or structure with one to four dwelling units. Whether that reaches a particular manufactured home depends on how it is held — which is one more reason to settle the real-or-personal question first, with the title company or an attorney.",
        ],
        claims: ["id-manufactured-homes-assessed-as-residential", "id-manufactured-home-treated-as-site-built", "id-disclosure-residential-definition"],
      },
      {
        heading: "Paperwork worth finding before you call",
        body: [
          "Anything that shows how the home is held: a certificate of title for the home, a recorded declaration converting it to real property, the deed to the land, and the most recent property tax statement. If you cannot find them, that is fine — we can start from the county record — but each one shortens the time to a firm number.",
        ],
      },
      {
        heading: "How a sale to us works",
        body: [
          "Send the address. We confirm from the county record how the home is held, then come back with a number and how we got there. Condition does not disqualify a home. The purchase closes through a local title company on a date you choose, and we buy with our own capital — which matters here, because financing is often the hardest part of selling a manufactured home on the open market.",
          "If the home sits in a park on a rented space, that is a different kind of sale. Ask us, and we will tell you straight whether it is something we can help with.",
        ],
      },
    ],
  },

  {
    slug: "sell-house-divorce-idaho",
    kind: "situation",
    title: "Selling a House in a Divorce in Ada County",
    h1: "Selling the house in a divorce",
    eyebrow: "Divorce",
    description:
      "A direct sale when an Ada County couple is separating: who has to sign under Idaho law, what the court can order, and a closing date both of you set.",
    published: "2026-11-12",
    updated: "2026-11-12",
    guides: ["selling-a-house-during-a-divorce-in-idaho"],
    intro: [
      "When both spouses agree to sell, we buy the house directly — in any condition, with a closing date you both set, through a local title company. If the house is community real estate, Idaho requires both spouses to join in the sale agreement and the deed, so a sale only works when you are both ready to sign.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "Both signatures, on the contract and the deed",
        body: [
          "Idaho Code 32-912 lets either spouse manage community property, but says neither may sell, convey or encumber community real estate unless the other joins in executing the sale agreement, deed or other instrument. It names the sale agreement, so the requirement starts with the purchase contract, not just at closing.",
          "The same section lets one spouse give the other complete power to sell community property by an express power of attorney. Whether that route fits your situation is a question for your attorney. Our guide to [selling a house during a divorce in Idaho](/guides/selling-a-house-during-a-divorce-in-idaho) sets out the statutes in full.",
        ],
        claims: ["dv-both-spouses-join-community-real-estate", "dv-power-of-attorney-exception"],
      },
      {
        heading: "Community or separate — the first question",
        body: [
          "The two-signature rule is written for community real estate. Idaho treats property owned before marriage, or acquired by gift or inheritance, or with the proceeds of separate property, as separate; all other property acquired after marriage is community. A deed from one spouse to the other is presumed to make the house the receiving spouse's separate property.",
          "Which of those your house is can be obvious or genuinely disputed. If it is disputed, settle it with your attorneys first. We can make an offer while you do, but we cannot close until the people who must sign are ready to.",
        ],
        claims: ["dv-separate-property-defined", "dv-community-property-default", "dv-interspouse-deed-presumed-separate"],
      },
      {
        heading: "What the court can order while the case is open",
        body: [
          "Once a case is filed, the Idaho Rules of Family Law Procedure let a party ask the court for a temporary order — including one to divide community property or exclude a party from the residence — and set out when an injunction may stop a party disposing of property. In a contested case each party must also hand over the deeds, deeds of trust and settlement sheets for real property.",
          "If any order touches the house, it governs the sale, and the title company will need to see it. Tell us at the start so the closing date we agree is one the court will allow.",
        ],
        claims: ["dv-irflp-temporary-order-divide-property", "dv-irflp-injunction-dispose-property", "dv-irflp-401-disclose-deeds"],
      },
      {
        heading: "Selling now, or letting the decree decide",
        body: [
          "If the house is not sold first, the decree deals with it. Idaho Code 32-712 directs a substantially equal division in value of community property, considering debts, unless there are compelling reasons otherwise — and allows a homestead from community property to be assigned to one spouse, divided, or sold and the proceeds divided.",
          "Many couples prefer to sell before the decree so that what is divided is money rather than a house and a mortgage. That is a decision for the two of you and your attorneys; what we can offer is a firm number and a date that does not depend on a buyer's lender.",
        ],
        claims: ["dv-decree-substantially-equal-division", "dv-decree-homestead-assign-or-sell"],
      },
      {
        heading: "Disclosure still applies to a sale to us",
        body: [
          "Idaho exempts a transfer between spouses under a decree or property settlement from the seller disclosure form. A sale by both spouses to an outside buyer is not that transfer, so the ordinary disclosure rules for one-to-four unit residential property apply.",
        ],
        claims: ["id-disclosure-exempt-divorce", "id-disclosure-required-1-to-4-units"],
      },
      {
        heading: "How a sale to us works for a separating couple",
        body: [
          "We send the same offer, with the same arithmetic, to both of you — no side conversations. Nothing needs fixing, cleaning or staging, and nobody has to keep the house show-ready while living through a separation. The sale closes through a local title company, which pays off the mortgage and splits nothing itself: the proceeds go where your agreement or the court directs. Three weeks is realistic if you need it; later is fine.",
          "If the house is in good shape and you can cooperate through a listing, the open market will usually net more. We would rather say so than buy it from you cheaply.",
        ],
      },
    ],
  },

  // ───────────────────────────── MOFU ─────────────────────────────
  {
    slug: "cash-offer-vs-listing-idaho",
    kind: "decision",
    title: "Cash Offer vs Listing Your House in Ada County",
    h1: "Direct sale or listing: an honest comparison",
    eyebrow: "Deciding how to sell",
    description:
      "When selling to a direct buyer makes sense in Ada County, when listing nets more, and what is the same either way under Idaho law.",
    published: "2026-11-12",
    updated: "2026-11-12",
    guides: ["idaho-seller-disclosure-when-selling-as-is", "how-a-property-sale-closes-in-idaho"],
    intro: [
      "Listing usually gets the highest price; a direct sale usually gets the most certainty. If the house is in good shape, financeable and you have a few months, list it. If it needs work, carries a complication, or the date matters more than the last dollar, a direct sale is worth pricing — and either way, Idaho's disclosure rules apply.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "What you are actually trading",
        body: [
          "A direct sale trades some of the price for three things: no repairs or preparation, no dependence on a buyer's lender, and a closing date you set. Listing trades time, preparation and uncertainty for exposure to every buyer in the market, which is how the highest price is found.",
          "Neither is the right answer in general. The question is which of those things you are short of — money, time, or the ability to manage the work.",
        ],
      },
      {
        heading: "When listing is the better route",
        body: [
          "The house is tidy and would pass a lender's inspection. You can live with showings and a few months of uncertainty. You already have a strong offer from a financed buyer. In any of those cases, listing will usually net more even after commission, and we will tell you so.",
        ],
      },
      {
        heading: "When a direct sale is worth pricing",
        body: [
          "The house needs work you cannot or do not want to fund. It is inherited and the estate wants a clean exit. It has tenants, title or permit problems that make a financed buyer nervous. A foreclosure or another deadline sets the date. The property is land, a manufactured home or something else the open market finances badly.",
          "In those cases the listing price is not the number that matters — what matters is what you would actually clear, and when.",
        ],
      },
      {
        heading: "What is the same either way",
        body: [
          "Idaho's property condition disclosure applies to one-to-four unit residential property whether you list it or sell it direct; cash and as-is are not exemptions. If the house was built before 1978, the federal lead-paint disclosure applies too. And a buyer who receives the disclosure form after signing may rescind within three business days on a specific objection.",
          "So a direct buyer is not a way around disclosure. Anyone who suggests otherwise is telling you something Idaho law does not say.",
        ],
        claims: [
          "id-disclosure-required-1-to-4-units",
          "id-disclosure-sixteen-exemptions",
          "fed-lead-paint-pre-1978-seller-disclosure",
          "id-disclosure-rescission-three-days",
        ],
      },
      {
        heading: "How to compare the two numbers honestly",
        body: [
          "Compare what you would clear, not the headline price. For a listing that means the expected sale price, minus commission, minus the repairs and preparation a financed buyer will require, minus the cost of carrying the house — mortgage, tax, insurance, utilities — for the months it is on the market, with some allowance for a deal that falls through.",
          "For a direct offer it is the offer, minus your share of closing costs. We show our arithmetic so you can put the two side by side. See [how we calculate an offer](/how-we-calculate-an-offer).",
        ],
      },
      {
        heading: "Questions to ask any direct buyer",
        body: [
          "Whose money is it? A buyer using its own capital does not need a lender to approve the deal; a buyer who needs to find funding or another buyer may not close on the date promised.",
          "Which title company, and when does earnest money go in? A purchase that closes through a local title company, with the deposit held there, is one you can check at every step.",
          "Can I see how you got to the number? A buyer who will not show the working is asking you to trust a figure you have no way to test.",
          "Who sets the date? If the closing date suits the buyer rather than you, you have traded the price for less certainty than you thought.",
        ],
      },
      {
        heading: "Idaho does not publish sale prices",
        body: [
          "One thing makes the comparison harder here than in many states. Idaho is a non-disclosure state: recorded documents are open to anyone, but the sale price is not among the elements a deed must contain. So neither you nor a buyer can simply look up what the house next door sold for. That is a reason to ask any buyer — or any agent — to show the basis of their number.",
        ],
        claims: ["idaho-recorded-documents-are-public", "idaho-deed-content-requirement-omits-price"],
      },
    ],
  },

  {
    slug: "how-we-calculate-an-offer",
    kind: "decision",
    title: "How We Calculate a Cash Offer on a House",
    h1: "How we calculate an offer",
    eyebrow: "Our arithmetic",
    description:
      "The four numbers behind every offer we make on an Ada County house, and why we show them to you rather than just the total.",
    published: "2026-11-12",
    updated: "2026-11-12",
    guides: ["how-a-property-sale-closes-in-idaho"],
    intro: [
      "Every offer we make on a house is built from four numbers: what the house would be worth after the work it needs, what that work costs, what it costs us to hold and resell the property, and the margin we run on. We show you all four, so you can check the number rather than take it on trust.",
      "This page describes our own method. It is not an appraisal, and nothing on it says what any particular property is worth.",
    ],
    sections: [
      {
        heading: "1. The value after the work",
        body: [
          "We start with what the house would sell for once the work is done — the after-repair value. On a house that is how value is found: by comparison with similar houses that have sold nearby.",
          "In Idaho that is harder than it sounds. Recorded documents are open to the public, but the sale price is not among the elements a deed must contain, so comparable sales are not something you can read off the county record. We tell you which sales we relied on and why, so you can push back if you know the street better than we do.",
        ],
        claims: ["idaho-recorded-documents-are-public", "idaho-deed-content-requirement-omits-price"],
      },
      {
        heading: "2. The work the house needs",
        body: [
          "Next, the cost of the work: roof, systems, finishes, anything unpermitted that would need to be brought into compliance. We list it line by line. If you think a line is wrong, that is the line to argue — and sometimes you will be right.",
        ],
      },
      {
        heading: "3. The cost of holding and reselling",
        body: [
          "From the day we buy until the day we sell, the house costs money: property tax, insurance, utilities, financing on our own capital, and the costs of selling it again. These are real costs on any resale, and we show what we have assumed.",
        ],
      },
      {
        heading: "4. Our margin",
        body: [
          "Finally, the spread we run on — the part that pays for the risk that the work costs more, the market moves, or the house takes longer to sell. We do not hide it inside the other numbers. You see it as a line of its own.",
        ],
      },
      {
        heading: "Why we show the working",
        body: [
          "A number on its own invites only one response: higher. A number with its working lets you see where we might be wrong — a repair we have overestimated, a comparable sale that is not comparable — and that is a better conversation for both sides.",
          "It also lets you compare our offer properly with [listing the house](/cash-offer-vs-listing-idaho). If the arithmetic shows that listing would net you more, we would rather you saw that from our own numbers.",
        ],
      },
      {
        heading: "Commercial property is different",
        body: [
          "Above four units, and for office and industrial buildings, value comes from income rather than comparable sales, and the method changes. That is explained on [how commercial value is determined](/commercial/how-value-is-determined).",
        ],
      },
      {
        heading: "What can move the number",
        body: [
          "Information. A recent inspection report, receipts for a new roof or furnace, a survey, leases and rent figures on a rental — each one replaces an assumption with a fact. Our assumptions on unknowns are deliberately cautious, so facts usually move the number in the seller's favour.",
          "What does not move it is negotiation for its own sake. If a line is wrong, show us why and we will change it. If every line is right, the total is the total.",
        ],
      },
      {
        heading: "What this number is not",
        body: [
          "It is not an appraisal and it is not an opinion of what your house is worth on the open market. It is what we would pay, and why. The offer carries no obligation: if listing would net you more, take the listing — the comparison on [direct sale or listing](/cash-offer-vs-listing-idaho) shows how to set the two side by side.",
        ],
      },
      {
        heading: "What happens after you see the number",
        body: [
          "If the number works, the purchase closes through a local title company on a date you choose — three weeks is realistic. We buy with our own capital, so nothing waits on a lender. If it does not work, that is the end of it, with no obligation. Start with the [address](/contact).",
        ],
      },
    ],
  },
];

export function topicPage(slug: string): TopicPage | undefined {
  return TOPIC_PAGES.find((p) => p.slug === slug);
}

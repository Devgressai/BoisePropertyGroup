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
    updated: "2026-11-13",
    guides: ["how-to-avoid-foreclosure-in-idaho", "idaho-foreclosure-timeline", "short-sale-vs-deed-in-lieu-in-idaho", "after-a-foreclosure-sale-in-idaho", "foreclosure-rescue-scams-in-idaho", "idaho-foreclosure-vs-property-tax-delinquency"],
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
          "We cannot stop a foreclosure, negotiate with your lender, or promise any outcome but our own purchase. Be wary of anyone who promises to save the house for a fee. The routes for keeping the house are in [how to avoid foreclosure in Idaho](/guides/how-to-avoid-foreclosure-in-idaho), and [sell or keep](/sell-or-keep-house-facing-foreclosure-idaho) weighs a sale against them.",
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

  {
    slug: "sell-house-with-liens-idaho",
    kind: "situation",
    title: "Sell a House With a Lien in Ada County, Idaho",
    h1: "Sell a house with a lien or judgment on it",
    eyebrow: "Liens and judgments",
    description:
      "We buy Ada County houses with judgment, tax, HOA or mechanic's liens on the title. How each lien ends under Idaho law, and what the title search shows.",
    published: "2026-11-13",
    updated: "2026-11-13",
    guides: ["liens-and-judgments-when-selling-in-idaho", "how-a-property-sale-closes-in-idaho"],
    intro: [
      "Yes, we buy houses in Ada County that have liens or judgments recorded against them. A lien is a claim against the property for a debt. In a sale it is paid out of the price at closing, so the first question is whether the price covers what is owed. We buy with our own capital, the purchase closes through a local title company, and you choose the date.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "Can you sell a house that has a lien on it",
        body: [
          "Nothing in the Idaho statutes this page draws on forbids selling a house that has a lien against it. Idaho Code 55-613 defines encumbrances to include taxes, assessments and all liens on real property. They are part of the title a buyer looks at, and they are dealt with as part of the sale.",
          "The Ada County Recorder's Office keeps the documents related to property ownership in the county, and recorded documents are open to public inspection. A lien that has been recorded is in that record, where any buyer and any title company will find it.",
        ],
        claims: ["cl-encumbrances-include-taxes-liens", "ada-recorder-maintains-ownership-documents"],
      },
      {
        heading: "What the title search shows, and when",
        body: [
          "Idaho bars a title insurer from issuing a policy on Idaho real property until a search and examination of the title has been made. Because our purchases close through a local title company, that search happens before closing on every one of them.",
          "The result is a written list of what is recorded against the property. You see it. Sellers are often surprised by it in both directions: a judgment they had forgotten, or a lien they feared that has already expired. Until that list exists, any figure for what you will keep is an estimate, and we will say so.",
        ],
        claims: ["cl-title-search-before-policy"],
      },
      {
        heading: "Judgment liens",
        body: [
          "In Idaho a money judgment becomes a lien on real property only when a transcript or abstract of it is recorded with the county recorder, and only in that county. Apart from child-support and recorded restitution judgments, the lien runs ten years from the date of the judgment unless the judgment is satisfied sooner.",
          "Ten years is not always the end. Before the lien expires, the court that entered the judgment may renew it on motion, and a recorded renewal continues the lien for another ten years. An old judgment is worth checking against the record before anyone assumes it has lapsed.",
        ],
        claims: ["ln-judgment-lien-arises-on-recording", "ln-judgment-lien-ten-years", "ln-judgment-renewal-order"],
      },
      {
        heading: "Mechanic's liens from unpaid work",
        body: [
          "A contractor or supplier who was not paid can claim a lien on the property. Idaho gives the claimant 90 days after finishing the work or supplying the materials to file the claim with the county recorder.",
          "The lien then binds the property for no longer than six months after filing unless a court action to enforce it is started in that time, or a payment or extension of credit is endorsed on the record. Idaho also allows a mechanic's lien of record to be released by posting a surety bond. Which of those applies to a lien on your house is a question for an Idaho attorney.",
        ],
        claims: ["ln-mechanics-lien-ninety-day-filing", "ln-mechanics-lien-six-month-duration", "ln-mechanics-lien-bond-release"],
      },
      {
        heading: "Homeowner's association liens",
        body: [
          "If the house is in an association, ask for a statement of your assessment account in writing. An Idaho homeowner's association must provide it free within five business days, listing all outstanding assessments, charges and fees, and the association is bound by the amounts in that statement. It is the fastest way to turn a worry about dues into a number.",
        ],
        claims: ["ln-hoa-statement-of-account"],
      },
      {
        heading: "Property tax liens",
        body: [
          "Idaho property taxes are a first and prior lien on the property, discharged only by payment or cancellation. Unpaid tax is settled in a sale ahead of everything else. If the tax has gone delinquent, a separate three-year clock is running, and our page on [selling a house with delinquent property taxes](/sell-house-delinquent-property-taxes-idaho) covers it.",
        ],
        claims: ["ln-property-tax-first-lien-perpetual"],
      },
      {
        heading: "Federal tax liens need lead time",
        body: [
          "The IRS can remove its lien from one specific property with a Certificate of Discharge. IRS Publication 783 says the application is made on Form 14135 and should be submitted at least 45 days before the date the certificate is needed.",
          "That lead time is the reason to mention a federal tax lien at the start. You set the closing date in a sale to us, so the date can be placed far enough out for the IRS to answer. A tax professional should handle the application.",
        ],
        claims: ["ln-irs-discharge-apply-45-days", "ln-irs-discharge-subordination-withdrawal"],
      },
      {
        heading: "If the liens come to more than the house is worth",
        body: [
          "Then a sale at market price cannot pay them all, and we cannot make a lien go away. Whether a lienholder will accept less than it is owed is that lienholder's decision, and the conversation belongs with an Idaho attorney. Where the debt is the mortgage itself, our guide to [short sales and deeds in lieu](/guides/short-sale-vs-deed-in-lieu-in-idaho) explains what the lender has to agree to.",
          "We will tell you early if the numbers do not work. A clear no in the first week is worth more to you than a contract that falls apart in the fourth.",
        ],
      },
      {
        heading: "How a sale to us works when there are liens",
        body: [
          "Send the address and tell us what you know is recorded against it. We come back with a number and the arithmetic behind it. If you accept, the title company runs its search, gathers the payoff figures, and pays the liens from the price at closing. You receive what is left, and the closing statement shows each payment.",
          "Nothing has to be repaired or cleaned first. The steps are set out on [how it works](/how-it-works), and the method behind the number on [how we calculate an offer](/how-we-calculate-an-offer).",
        ],
      },
      {
        heading: "When you should list it instead",
        body: [
          "A lien does not lower what a house is worth. If the house is in good condition and the liens are small next to its value, listing it will usually leave you with more after they are paid, and we will say so.",
        ],
      },
    ],
  },

  {
    slug: "sell-house-delinquent-property-taxes-idaho",
    kind: "situation",
    title: "Sell a House With Delinquent Property Taxes in Idaho",
    h1: "Selling a house with delinquent property taxes",
    eyebrow: "Delinquent property taxes",
    description:
      "Behind on property taxes in Ada County? Idaho's three-year tax deed clock, what the late charges are, and how a sale before the deed pays the county in full.",
    published: "2026-11-13",
    updated: "2026-11-13",
    guides: ["idaho-property-taxes-when-you-sell", "idaho-foreclosure-vs-property-tax-delinquency"],
    intro: [
      "We buy Ada County houses with property taxes owing, in any condition. The delinquent tax is paid to the county out of the price at closing, and you keep what is left. Idaho gives an owner three years from the date of delinquency before the county can take a tax deed, so there is usually time to choose, and the choice gets more expensive each month.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "How long you have before a tax deed",
        body: [
          "If Idaho real property with a delinquency is not redeemed within three years from the date of delinquency, the county tax collector must issue a tax deed in favour of the county. That can happen only after a notice of pending issue of tax deed has been given.",
          "The notice goes to record owners and parties in interest by certified mail, no more than five months and no less than two months before the deed is set to issue. If you have received that letter, the three years are nearly spent and the date in it is the one that matters.",
        ],
        claims: ["id-tax-deed-three-year-delinquency", "id-tax-deed-notice-service"],
      },
      {
        heading: "What waiting costs",
        body: [
          "Idaho property taxes are due by December 20, or in two halves with the second due by June 20. The Ada County Treasurer states that a missed December installment draws a 2% late charge plus interest at 1% per month from the following January 1.",
          "The Treasurer also applies payments to the oldest tax balance first. A partial payment therefore goes to the earliest delinquent year, which is the year the three-year clock is counting from.",
        ],
        claims: ["pt-taxes-due-dec-20-two-halves", "pt-ada-late-charge-and-interest-rates"],
      },
      {
        heading: "The tax is a lien on the house",
        body: [
          "Idaho property taxes are a first and prior lien on the property, and the statute says the lien is discharged only by payment or cancellation of the taxes. Selling the house does not erase the tax. The sale pays it: the amount owed to the county comes out of the price at closing, ahead of other liens.",
          "The Ada County Treasurer is the county's tax collector. That office can tell you the exact amount needed to bring the parcel current on a given date, and that figure is the one a title company will use.",
        ],
        claims: ["ln-property-tax-first-lien-perpetual", "ada-treasurer-ex-officio-tax-collector"],
      },
      {
        heading: "If the tax deed has already issued",
        body: [
          "The record owner may still redeem after a tax deed issues to the county, but only until the county commissioners enter a contract of sale or transfer the property by county deed. In any event the right ends fourteen months from the date the tax deed issued. At that stage speak to an Idaho attorney before anything else.",
        ],
        claims: ["id-tax-deed-redemption-fourteen-months"],
      },
      {
        heading: "Tax delinquency and mortgage foreclosure run on different clocks",
        body: [
          "A tax deed takes three years. A lender's trustee's sale under a deed of trust needs notice of at least 120 days. An owner who is behind on both is on the shorter clock, whatever the tax notice says. Our guide to [the two clocks](/guides/idaho-foreclosure-vs-property-tax-delinquency) sets them side by side, and [selling before a foreclosure sale](/sell-house-before-foreclosure-idaho) covers the mortgage side.",
        ],
        claims: ["id-trustee-sale-120-day-notice"],
      },
      {
        heading: "Check the relief programs before you sell",
        body: [
          "If you want to stay in the house, look at Idaho's property tax reduction first. It ranges from $250 up to a maximum of $1,500 depending on income, and it is open to owners in listed categories such as being 65 or older, widowed, blind or disabled. The Ada County Assessor says applications must be received between January 1 and April 15, and that applicants must apply every year.",
          "Idaho also has a property tax deferral. It is not a way to hold the house and sell later without paying: a deferral ends on a sale, and the deferred tax and interest must be paid to the State Tax Commission within 180 days.",
        ],
        claims: ["pt-circuit-breaker-max-and-value-threshold", "pt-circuit-breaker-claimant-categories", "pt-ada-circuit-breaker-apply-each-year", "pt-deferral-ends-on-sale-180-days"],
      },
      {
        heading: "How a sale to us works",
        body: [
          "Send the address. We look at the parcel record and the house and come back with a number and the working behind it. If you accept, the purchase closes through a local title company on the date you choose. Three weeks is realistic. The title company pays the county from the price, and the closing statement shows the amount.",
          "We buy with our own capital and we buy the house as it stands. The method behind the number is on [how we calculate an offer](/how-we-calculate-an-offer).",
        ],
      },
      {
        heading: "When selling to us is the wrong answer",
        body: [
          "If the only problem is the tax bill and the house is in good shape, paying the county or listing the house will usually leave you with more than our offer would. A direct sale earns its place when the house also needs work you cannot fund, or when the date on a notice is close. We will tell you which side of that line we think you are on.",
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
          "Idaho gives you ways to check the answers — the Secretary of State's business records, the licensing rules for title and escrow, and a cancellation right on certain foreclosure-related contracts. They are set out in [how to check a cash buyer in Idaho](/how-to-check-a-cash-buyer-in-idaho).",
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
  {
    "slug": "how-to-check-a-cash-buyer-in-idaho",
    "kind": "decision",
    "title": "How to Check a Cash Buyer in Idaho",
    "h1": "How to check that a cash buyer in Idaho is legitimate before you sign",
    "eyebrow": "Before you sign",
    "description": "What Idaho's Secretary of State, Real Estate Commission, escrow and title laws let a seller check about any cash buyer, and the questions to ask first.",
    "published": "2026-11-12",
    "updated": "2026-11-12",
    "guides": [],
    "intro": [
      "Before you sign, look up the buyer's entity on the Idaho Secretary of State's free business search, confirm that the title or escrow company closing the sale holds an Idaho Department of Insurance or Department of Finance license, and ask in writing whether the buyer is purchasing for its own account. Idaho's real estate license law, the Real Estate Commission's guidance and the Consumer Foreclosure Protection Act tell you what those answers mean.",
      "This page describes what those statutes, agency guidelines and consumer pages say. It is not legal advice and it is not applied to your situation. If you are deciding whether to sign a specific contract, an Idaho attorney should read it first."
    ],
    "sections": [
      {
        "heading": "Find out exactly who the buyer is",
        "body": [
          "If the offer comes from a company, the first check is free: the Idaho Secretary of State's Business Search at sosbiz.idaho.gov lets anyone look up business information and registered agents. Ask the buyer for the exact legal name that will appear on the purchase agreement and on the deed, then search for that name rather than for a brand or a website.",
          "The registered agent tells you something too. To serve as one in Idaho, a person or company must have a physical street address in Idaho, not a P.O. box, and must be either an Idaho resident or a business entity authorized to do business in Idaho.",
          "One thing not to ask for: the Secretary of State says a certificate of existence is not required to do business in Idaho, and warns about websites and mailings that suggest otherwise. The search is the check. A seller who cannot find the named buyer at all has a question to put to that buyer before going further."
        ],
        "claims": [
          "vb-sos-business-search",
          "vb-sos-certificate-not-required"
        ]
      },
      {
        "heading": "When Idaho requires a real estate license",
        "body": [
          "Idaho Code 54-2002 bars anyone from acting as a real estate broker or salesperson in Idaho without an active Idaho license. Unless an exemption applies, a single act that fits the definition is enough to count as being in the business.",
          "The definition, in Idaho Code 54-2004, is broad. A real estate broker includes anyone who, acting for another for compensation or the expectation of it, sells, lists, buys or negotiates, or offers to, the purchase, sale, option or exchange of real estate for others. It also includes anyone who represents to the public that they do those things, and anyone who takes any part in procuring prospects or in negotiating or closing a transaction meant to result in them. A dealer in options, someone who takes or uses options to purchase property for another or others, is also included.",
          "The license law also says who is outside it. Idaho Code 54-2003 says no license is needed to buy, option, exchange or sell an interest in real property for a person's own account or use, or for an owner to dispose of its own property. The same section adds that these exceptions may not be used in any way to evade the chapter, and that an attempt to do so is treated as unlicensed practice.",
          "Unlicensed brokerage is a misdemeanor under Idaho Code 54-2065. On conviction, an individual faces a fine of up to $5,000, up to one year in county jail, or both, and an LLC or corporation a fine of up to $10,000. A court may also add civil penalties of up to $5,000 against an individual and up to $10,000 against a company. Those penalties fall on the person acting without a license, not on the seller."
        ],
        "claims": [
          "vb-license-required-single-act",
          "vb-broker-definition-acting-for-others",
          "vb-dealer-in-options-definition",
          "vb-own-account-exception-no-evasion",
          "vb-unlicensed-practice-penalty"
        ]
      },
      {
        "heading": "What the Real Estate Commission says about property a buyer does not own",
        "body": [
          "The Idaho Real Estate Commission publishes guidelines that explain how it reads the license law. Each one says it is not a new law but the agency's interpretation of existing law. That is the right weight to give them: they are not statutes, but they are the regulator's stated view.",
          "Guideline 18 deals with options and with investors. In the Commission's reading, an option holder is not an owner and may not list, sell, negotiate, procure buyers for or otherwise broker the property without a license. The guideline goes further: whether or not an investor holds an option, it says the investor may be engaged in unlicensed practice if they list, sell or negotiate the sale of property they do not own, or procure buyers for it.",
          "Guideline 2 adds that the Commission reads procuring prospects to include any marketing or advertising designed to attract the attention of buyers or sellers.",
          "None of this tells you whether a particular buyer is doing anything wrong. It does tell you what to ask any buyer, in writing, before you sign: Are you buying this house for your own account, and will you be the party that takes title at closing? Do you intend to offer the house, or your contract to buy it, to anyone else before closing? Whose money funds the purchase? Keep the answers with the contract, check that they match what the purchase agreement says, and show both to an attorney if you have the contract reviewed."
        ],
        "claims": [
          "vb-irec-guideline18-property-not-owned",
          "vb-irec-guideline2-procuring-prospects-marketing",
          "vb-broker-definition-acting-for-others"
        ]
      },
      {
        "heading": "If the buyer holds a real estate license, they have to tell you",
        "body": [
          "Some cash buyers are licensed agents investing for themselves. Idaho Code 54-2055 requires an active Idaho licensee who buys an interest in real property, for personal use or any other purpose, directly, indirectly or through a third party, to disclose in writing that they hold an active Idaho license. The disclosure has to come no later than when the purchase and sale agreement is presented.",
          "You can check a license yourself. The Real Estate Commission's License Lookup lets consumers confirm that an agent or brokerage is licensed in Idaho, and shows any formal disciplinary actions taken against an agent within the last five years.",
          "Know what the Commission can and cannot do. It investigates complaints involving, among other things, dishonest or dishonorable dealings, failure to account for money or property, misrepresentation and unlicensed practice. It cannot enforce or cancel a purchase and sale agreement, award damages or order earnest money returned. For those, you would need an attorney."
        ],
        "claims": [
          "vb-licensee-must-disclose-license",
          "vb-irec-license-lookup",
          "vb-irec-investigates-unlicensed-practice"
        ]
      },
      {
        "heading": "Check the title or escrow company yourself",
        "body": [
          "The company that closes the sale and holds the money can be checked independently of anything the buyer says about itself. Idaho licenses that work through two different agencies.",
          "Title companies answer to the Idaho Department of Insurance. Under Idaho Code 41-2710, no one may act in Idaho as an agent for a title insurer without a license from the Director of Insurance, and the license is issued for each county in which policies are written. The Department's title insurance page offers a Find a Title Agent / Company search and a title insurance specialist to contact.",
          "Escrow companies answer to the Idaho Department of Finance, which the Real Estate Commission names as having jurisdiction over them. Idaho Code 30-903 makes it unlawful to act as an escrow agency in or from Idaho without a license, and Idaho Code 30-913 makes doing so without an exemption a felony, with civil penalties of up to $5,000 per violation. Idaho Code 30-905 exempts several groups from the escrow license, including title insurance agents licensed by the Department of Insurance.",
          "So the practical check is short. Get the name of the closing company from the buyer, look it up with the Department of Insurance or the Department of Finance, and contact the company using a phone number you found yourself rather than one in an email. Call the closing company directly before you sign anything."
        ],
        "claims": [
          "vb-title-agent-license-by-county",
          "vb-doi-find-title-agent",
          "vb-irec-escrow-and-title-regulators",
          "vb-escrow-agency-license-required",
          "vb-escrow-unlicensed-felony",
          "vb-escrow-exempt-title-agents"
        ]
      },
      {
        "heading": "Earnest money: where it sits and who settles a dispute",
        "body": [
          "When a real estate broker or sales associate handles an offer, Idaho Code 54-2051 requires the offer to be in writing and to state the actual form and amount of the earnest money, along with a provision for dividing forfeited earnest money if the sale does not close. That duty sits with the licensee. If no licensee is involved in your sale, read what the purchase agreement itself says about the deposit.",
          "Idaho Code 54-2041 adds that money is not treated as entrusted to a broker once the parties have told the broker in writing to transfer it to a title, escrow or trust company and the broker no longer controls it. In other words, earnest money held at a title company sits with the title company.",
          "If the deposit becomes a dispute, the Real Estate Commission is plain: earnest money disputes are civil matters, the Commission cannot decide them or order the money released, and it points consumers to the Idaho State Bar to find an attorney. Before you sign, it is reasonable to ask how much earnest money the buyer will deposit, with which company, by when, and what the contract says happens to it if the buyer does not close."
        ],
        "claims": [
          "vb-offer-must-state-earnest-money",
          "vb-earnest-money-at-title-not-entrusted",
          "vb-irec-earnest-money-disputes-civil"
        ]
      },
      {
        "heading": "Wire instructions and upfront fees are where to slow down",
        "body": [
          "The Real Estate Commission warns that hackers try to divert closing payments to their own accounts by sending last-minute wiring instructions that differ from those the settlement agent or real estate agent provided. Confirm any change to wiring instructions by phone with the title company, using a number you looked up yourself.",
          "The Federal Trade Commission's guidance on mortgage relief scams adds two warnings that apply to anyone asking a homeowner for money. It says never to pay a company upfront for promises to help with mortgage relief, and that scammers may want payment only by cashier's check, wire transfer or a mobile payment app because those payments are hard to get back. If anyone on the buyer's side asks you to pay money before closing, get the reason in writing and run it past an attorney."
        ],
        "claims": [
          "vb-irec-wire-diversion-warning",
          "vb-ftc-upfront-payment-methods"
        ]
      },
      {
        "heading": "If the house is in foreclosure, Idaho adds a notice and a five-business-day cancellation right",
        "body": [
          "Idaho's Consumer Foreclosure Protection Act begins with a finding by the Legislature that some persons and businesses defraud homeowners of their title, equity or other value under the guise of stopping or postponing a foreclosure sale. It also directs that the Act not be read to inhibit transactions with legitimate lenders and investors.",
          "Under Idaho Code 45-1602, during the foreclosure period described in Idaho Code 45-1506, a contract with the record owner involving the transfer of an interest in residential property subject to foreclosure must be in writing and must come with a statutory notice in at least 12-point boldface type. The notice warns that some individuals or businesses may say they can save a home from foreclosure, that a rescue plan may cost the owner valuable equity, and that the owner should consult an attorney or financial professional.",
          "Idaho Code 45-1603 then gives an owner whose property is in foreclosure the right to cancel any contract relating to the property made during the foreclosure period within five business days of entering into it. The cancellation must be in writing to all other parties but need not take any particular form, and no funds or interest in the property may transfer until the five days have passed. The Act excludes banks and similar institutions, regulated lenders, licensed mortgage lenders and brokers, and close family members, and a violation exposes the violator to penalties and damages under the Idaho Consumer Protection Act.",
          "The FTC describes what these rules are aimed at. It warns that scammers may try to get a homeowner to transfer the deed, that a homeowner who does so is not likely to get it back, and that transferring the deed does not transfer the mortgage. It also describes equity-skimming schemes in which a homeowner is promised the home back later, or is tricked into selling for cash for much less than similar homes nearby, and the scammer rents the home out while the lender forecloses. Our [foreclosure guide](/guides/idaho-foreclosure-vs-property-tax-delinquency) covers the timeline of an Idaho trustee's sale."
        ],
        "claims": [
          "vb-cfpa-legislative-findings",
          "vb-cfpa-written-notice-required",
          "vb-cfpa-five-business-day-rescission",
          "vb-cfpa-exclusions",
          "vb-cfpa-penalties-title-48",
          "vb-ftc-deed-transfer-warning",
          "vb-ftc-equity-skimming"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "Every check on this page applies to us as much as to any other buyer, and we would rather you ran them. What we can show you is this: we buy with our own capital, our purchases close through a local title company you can look up and call yourself, you choose the closing date, and we buy in any condition. A three-week close is realistic when you want one. [How it works](/how-it-works) sets out the steps, and you can [contact us](/contact) with any of the questions above.",
          "A direct sale is not always the right route. If you want the widest pool of buyers competing on price, listing with a licensed Idaho agent is built for that, and no single cash offer, ours included, replaces it. If your house is in foreclosure or you are unsure about a contract you have already been handed, talk to an Idaho attorney or a HUD-approved housing counselor before you sign with anyone."
        ],
        "claims": [
          "vb-cfpa-written-notice-required"
        ]
      }
    ]
  },
  {
    "slug": "sell-or-keep-house-facing-foreclosure-idaho",
    "kind": "decision",
    "title": "Sell or Keep a House Facing Foreclosure in Idaho",
    "h1": "Should you sell your house to avoid foreclosure in Idaho, or keep it?",
    "eyebrow": "Before you sign",
    "description": "When selling an Idaho house before a trustee's sale works, when curing the default is the better route, and when a sale needs the lender's agreement.",
    "published": "2026-11-13",
    "updated": "2026-11-13",
    "guides": ["how-to-avoid-foreclosure-in-idaho", "idaho-foreclosure-timeline", "short-sale-vs-deed-in-lieu-in-idaho", "after-a-foreclosure-sale-in-idaho", "foreclosure-rescue-scams-in-idaho", "idaho-foreclosure-vs-property-tax-delinquency"],
    "intro": [
      "Selling works when the sale will pay the loan in full and can close before the trustee's sale. Keeping the house works when you can pay the amount Idaho Code 45-1506(12) requires to cure the default, or when your servicer approves a plan you can afford. If you owe more than the house will sell for, a sale needs the lender's agreement, and that is a short sale.",
      "This page describes what Idaho statutes, federal mortgage rules and federal consumer pages say. It is not legal or tax advice and it is not applied to your situation. We cannot stop a foreclosure or negotiate with a lender. An Idaho attorney or a HUD-approved housing counselor should look at your notices and your loan before you decide."
    ],
    "sections": [
      {
        "heading": "Start with the payoff figure, not the loan balance",
        "body": [
          "Both routes start with one number from your servicer. The Consumer Financial Protection Bureau describes the payoff amount as how much you will have to pay to satisfy the terms of the loan and completely pay off the debt. It says the payoff amount is different from the current balance. It includes interest due through the day of payoff and may include fees that have been charged and not yet paid.",
          "A federal rule, 12 CFR 1026.36(c)(3), covers consumer loans secured by a dwelling. It requires the creditor, assignee or servicer to provide an accurate statement of the total balance required to pay the obligation in full as of a specified date. The statement must be sent within a reasonable time, and in no case more than seven business days, after a written request from the consumer or a person acting for the consumer.",
          "The same paragraph has an exception that matters here. When the statement cannot be provided within seven business days because the loan is in bankruptcy or foreclosure, it must be provided within a reasonable time. Make the request in writing and make it early.",
          "Ask in the same letter for the amount needed to cure the default. The payoff is what a sale has to cover. The cure amount is what keeping the house costs today."
        ],
        "claims": [
          "sk-cfpb-payoff-differs-from-balance",
          "sk-payoff-statement-seven-business-days"
        ]
      },
      {
        "heading": "When selling works: the sale pays the loan in full",
        "body": [
          "A sale solves the problem when the price covers the payoff, any other liens on the property, and the costs of selling. Idaho Code 55-613 defines encumbrances to include taxes, assessments and all liens on real property, so the first loan may not be the only figure to check. Our guide to [liens and judgments when selling](/guides/liens-and-judgments-when-selling-in-idaho) covers the others.",
          "Idaho Code 45-1514 says what happens to the deed of trust once the loan is paid. Upon performance of the obligation the deed of trust secures, the trustee, upon written request of the beneficiary, shall reconvey the property to the grantor. A beneficiary who refuses to make the request, or a trustee who refuses to reconvey, is liable as provided by law for refusing to discharge a mortgage.",
          "Title 45, chapter 12 adds a backstop for the title company. Under Idaho Code 45-1202, a title insurer or title agent that has fully paid the obligation, or holds satisfactory evidence of payment in full, may reconvey the deed of trust itself. Under 45-1203 it may send the beneficiary or servicer a notice of intent not less than 30 days after payment in full, and it may record the reconveyance if no objection has arrived when 60 days have elapsed. The recorded release of the old deed of trust can therefore follow the closing.",
          "Money left after the payoff, the other liens and the costs of sale goes to the seller. That is the equity a sale before the trustee's date is meant to keep. Compare routes on what you would clear, as set out in [direct sale or listing](/cash-offer-vs-listing-idaho)."
        ],
        "claims": [
          "cl-encumbrances-include-taxes-liens",
          "sk-reconveyance-on-performance",
          "sk-title-agent-may-reconvey",
          "sk-title-agent-reconveyance-30-and-60-days"
        ]
      },
      {
        "heading": "When keeping the house is the better route",
        "body": [
          "Idaho law lets a borrower end a trustee's sale by paying what is past due. Under Idaho Code 45-1506(12), the grantor, a successor in interest, or a holder of a subordinate lien of record may pay the beneficiary the entire amount then due, other than the portion of principal that would not be due had no default occurred. The payment may be made at any time within 115 days of the recording of the notice of default.",
          "The amount includes costs and expenses actually incurred in enforcing the obligation, a reasonable trustee's fee, and attorney's fees as the promissory note provides. On payment the default is cured, the proceedings are dismissed or discontinued, and the deed of trust is reinstated as if no acceleration had occurred.",
          "An owner who can pay that amount, can afford the regular payment afterward, and wants to stay keeps the house and the equity in it by curing. A sale gives up the house.",
          "The second route runs through the servicer. 12 CFR 1024.41 sets procedures for loss mitigation applications. If a servicer receives a complete application more than 37 days before a foreclosure sale, it must, within 30 days, evaluate the borrower for all loss mitigation options available and give written notice of which options, if any, it will offer.",
          "Paragraph (g) of the same rule covers a complete application submitted after the first foreclosure notice or filing and more than 37 days before the sale. The servicer may not conduct the sale unless one of three things has happened. It has sent notice that the borrower is not eligible for any option and no appeal remains. The borrower has rejected every option offered. Or the borrower has failed to perform under a loss mitigation agreement.",
          "The rule has limits. It states that nothing in it imposes a duty on a servicer to provide any borrower with any specific loss mitigation option, and it applies a narrower set of requirements to small servicers. It sets a procedure and promises no result. A housing counselor or an attorney can tell you whether it covers your loan."
        ],
        "claims": [
          "sk-cure-right-115-days",
          "sk-loss-mit-evaluation-37-and-30-days",
          "sk-loss-mit-sale-prohibition",
          "sk-loss-mit-no-duty-specific-option"
        ]
      },
      {
        "heading": "When a sale needs the lender's agreement",
        "body": [
          "If the payoff and the other liens add up to more than the house will sell for, an ordinary sale does not pay the loan in full. The CFPB defines a short sale as a sale of your home for less than what you owe on your mortgage, and classes it as a type of loss mitigation. If the lender or servicer agrees to it, you may be able to sell the home to pay off the mortgage even if the price or proceeds are less than the remaining balance. The CFPB adds that in a state where the borrower is responsible for a deficiency, the borrower will want to ask the lender to waive it before going through with a short sale, and to get any waiver in writing. Whether and how a deficiency applies to an Idaho loan is a question for an Idaho attorney. The detail is in [short sale vs deed in lieu in Idaho](/guides/short-sale-vs-deed-in-lieu-in-idaho).",
          "The agreement is the lender's to give. We cannot negotiate with your lender or obtain that agreement for you, and no buyer can promise it."
        ],
        "claims": [
          "sk-cfpb-short-sale-definition",
          "sk-cfpb-short-sale-deficiency-waiver"
        ]
      },
      {
        "heading": "How the time a sale takes compares with the notice period",
        "body": [
          "Idaho Code 45-1506 requires notice of a trustee's sale to be given at least 120 days before the day fixed for the sale. The notice must also be published once a week for four successive weeks, with the last publication at least 30 days before the sale. Those are statutory minimums. The date that governs your decision is the sale date printed on your own notice. Every step and day count is in the [Idaho foreclosure timeline](/guides/idaho-foreclosure-timeline).",
          "Three shorter clocks run inside that period. The cure right in 45-1506(12) runs for 115 days from the recording of the notice of default, which is a different starting point from the notice of sale. A payoff statement can take up to seven business days after a written request, or a reasonable time when the loan is in foreclosure. Under Idaho Code 45-1603, no funds and no interest in the property may transfer until the five-day cancellation period on a contract signed during the foreclosure period has passed.",
          "A sale to a buyer who needs a loan depends on finding that buyer and on the buyer's lender. A sale to a direct buyer depends on the buyer's funds and on the title work. We buy with our own capital and close through a local title company, and a three-week close is realistic. None of that changes the trustee's date.",
          "Under 45-1506(8), the sale is held on the date in the notice unless it is postponed. The trustee may postpone it upon request of the beneficiary, to a date not more than 30 days after the date from which it is postponed, and a postponed sale may be postponed again in the same manner. The subsection gives that request to the beneficiary. It names no right for an owner or a buyer to postpone the sale. A sale of the house that has not closed by the trustee's date does not pay off the loan. [Selling a house before foreclosure](/sell-house-before-foreclosure-idaho) covers the practical steps."
        ],
        "claims": [
          "id-trustee-sale-120-day-notice",
          "id-trustee-sale-publication",
          "sk-cure-right-115-days",
          "sk-payoff-statement-seven-business-days",
          "vb-cfpa-five-business-day-rescission",
          "sk-trustee-sale-postponement-beneficiary-request"
        ]
      },
      {
        "heading": "A contract signed during foreclosure can be cancelled within five business days, ours included",
        "body": [
          "Idaho's Consumer Foreclosure Protection Act applies to contracts made during the foreclosure period. Under Idaho Code 45-1602, a contract with the owner of record that involves the transfer of an interest in residential property subject to foreclosure must be in writing. It must come with a statutory notice in at least 12-point boldface type. The notice warns that a plan to rescue a home from foreclosure may cost the owner valuable equity, and tells the owner to consult an attorney or financial professional.",
          "Idaho Code 45-1603 gives a person whose property is in foreclosure the right to cancel any contract relating to the property, made during the foreclosure period, within five business days of entering into it. Cancellation happens when the owner gives written notice to all other parties. The notice needs no particular form. It is effective if it shows the intention not to be bound.",
          "The wording of the statutory notice says five days. The operative section, 45-1603, says five business days. The notice of default that the trustee must mail under Idaho Code 45-1505 carries a similar warning and adds this sentence: \"Do not delay seeking advice, because the longer you wait, the fewer options you may have.\"",
          "The Act excludes regulated lenders, banks and similar chartered institutions, licensed mortgage lenders and brokers, and family members of the owner. We are none of those. A purchase agreement you sign with us during the foreclosure period must carry the written notice, and you may cancel it within five business days by telling us in writing. A violation of the Act exposes the violator to penalties and damages under the Idaho Consumer Protection Act. [How to check a cash buyer in Idaho](/how-to-check-a-cash-buyer-in-idaho) lists the other checks to run on any buyer."
        ],
        "claims": [
          "vb-cfpa-written-notice-required",
          "vb-cfpa-five-business-day-rescission",
          "sk-notice-of-default-recorded-and-warning",
          "vb-cfpa-exclusions",
          "vb-cfpa-penalties-title-48"
        ]
      },
      {
        "heading": "Free help before you decide",
        "body": [
          "The CFPB says a housing counselor at a HUD-approved agency is trained and certified by the government to help you assess your financial situation and evaluate your options when you are having trouble paying your mortgage. HUD-approved housing counseling agencies provide foreclosure prevention counseling free of charge. They can also help you talk to your servicer and understand any options the servicer has offered. The routes for keeping the house are set out in [how to avoid foreclosure in Idaho](/guides/how-to-avoid-foreclosure-in-idaho).",
          "The CFPB is also plain about the limits. A housing counselor cannot promise that you will get to keep your home. If you are facing imminent foreclosure or have been served with legal papers, the CFPB says you may also need to consult an attorney.",
          "The CFPB lists two phone routes to a counselor: the HOPE Hotline at (888) 995-4673, open 24 hours a day, and the CFPB's own line at (855) 411-2372. Idaho's statutory notice under 45-1602 also tells owners that HUD maintains a list of approved housing counselors who can provide free information.",
          "Talk to a counselor before you talk price with any buyer. The Federal Trade Commission describes equity-skimming schemes in which a homeowner is tricked into selling for cash for much less than similar homes nearby. Check any offer, ours included, against what similar homes have sold for."
        ],
        "claims": [
          "sk-cfpb-hud-counselor-free",
          "sk-cfpb-counselor-cannot-promise",
          "vb-cfpa-written-notice-required",
          "vb-ftc-equity-skimming"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We cannot stop a foreclosure, negotiate with your lender, or give legal or tax advice. What we do is buy houses in any condition with our own capital. Our purchases close through a local title company, you choose the closing date, and a three-week close is realistic.",
          "Do not sell to us if you can cure the default, can afford the payments afterward, and want to stay. Do not sell to us while your servicer is reviewing a complete loss mitigation application, or after it has offered a plan you can carry. Do not sell to us if you owe more than the house will sell for, unless your lender has agreed to the sale in writing. Do not sell to us if the house is in good condition and your sale date leaves time to list it. A listing with a licensed Idaho agent puts the house in front of more buyers than one offer from us does.",
          "A sale to us fits a narrower case: the price covers the payoff, the trustee's date is close, and the condition of the house or the time left makes a listing unrealistic. Before you sign with us or with anyone else, talk to a HUD-approved housing counselor or an Idaho attorney."
        ],
        "claims": [
          "sk-cure-right-115-days",
          "sk-loss-mit-sale-prohibition",
          "sk-cfpb-short-sale-definition",
          "sk-cfpb-hud-counselor-free"
        ]
      }
    ]
  },
];

export function topicPage(slug: string): TopicPage | undefined {
  return TOPIC_PAGES.find((p) => p.slug === slug);
}

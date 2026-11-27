import type { Section } from "./place-content";
import {
  ARV_MAX,
  ARV_MIN,
  CONDITION_TIERS,
  OFFER_RATES,
  calculateAsIsListing,
  calculateListing,
  calculateOffer,
  formatUsd as usd,
  type ConditionKey,
} from "../lib/offer-math";

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
  /** An interactive tool rendered after the article. */
  tool?: "offer-math";
}

/**
 * OFFER-MODEL PROSE IS GENERATED, NOT TYPED.
 *
 * Every rate and dollar figure the decision pages state about our own offer
 * model comes from src/lib/offer-math.ts, the same file the worksheet runs on.
 * If the owner changes a rate there, these sentences change with it.
 */
export const EXAMPLE_ARV = 400_000;
const pct = (r: number) => `${+(r * 100).toFixed(2)}%`;
const tier = (k: ConditionKey) => CONDITION_TIERS.find((t) => t.key === k)!;
const list = (xs: string[]) => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);
const tierRates = () => list(CONDITION_TIERS.map((t) => `${t.label.toLowerCase()} ${pct(t.repairRate)}`));
const tierMonths = () => list(CONDITION_TIERS.map((t) => `${t.months} months for ${t.label.toLowerCase()}`));
const asIsDiscounts = () => list(CONDITION_TIERS.map((t) => `${pct(t.asIsDiscount)} ${t.label.toLowerCase()}`));

/** The three routes for one example house. Exported so tests can hold the prose to it. */
export function exampleRoutes(k: ConditionKey, arv = EXAMPLE_ARV) {
  return { offer: calculateOffer(arv, k), asIs: calculateAsIsListing(arv, k), reno: calculateListing(arv, k) };
}

function exampleLine(k: ConditionKey): string {
  const { offer, asIs, reno } = exampleRoutes(k);
  const vs = (net: number) =>
    net > offer.offer ? `about ${usd(net - offer.offer)} more than our offer` : `about ${usd(offer.offer - net)} less than our offer`;
  return `${tier(k).label}: our worksheet offer is ${usd(offer.offer)}. Listing it as it stands nets about ${usd(asIs.net)}, ${vs(asIs.net)}. Paying ${usd(reno.repairs)} for the work first and then listing nets about ${usd(reno.net)}, ${vs(reno.net)}, over roughly ${reno.months} months and only if you can fund the work and the wait.`;
}

function worksheetExample(): string {
  const k: ConditionKey = "significant";
  const o = calculateOffer(EXAMPLE_ARV, k);
  return `For a house needing ${tier(k).label.toLowerCase()}, worth ${usd(EXAMPLE_ARV)} once they are done, that is ${usd(o.arv)} minus ${usd(o.repairs)} for the work, minus ${usd(o.holding)} for ${o.months} months of holding and the resale, minus ${usd(o.margin)} of margin: ${usd(o.offer)}.`;
}

const NOT_ADVICE =
  "Where this page describes Idaho law it says what the statute says, with the source at the foot of the page. It is not legal advice and is not applied to your situation.";

export const TOPIC_PAGES: TopicPage[] = [
  // ───────────────────────────── BOFU ─────────────────────────────
  {
    slug: "sell-inherited-house-idaho",
    kind: "situation",
    title: "Sell an Inherited House in Boise, Idaho",
    h1: "We buy inherited houses in Boise and Ada County",
    eyebrow: "Inherited property",
    description:
      "Selling an inherited house in Boise or Ada County: after distribution, with a mortgage or reverse mortgage, taxes, and several heirs. Any condition, your date.",
    published: "2026-11-12",
    updated: "2026-11-26",
    guides: ["selling-an-inherited-house-in-idaho", "selling-a-house-in-probate-in-idaho", "inheriting-a-house-with-a-mortgage-in-idaho", "reverse-mortgage-after-the-borrower-dies-in-idaho"],
    intro: [
      "Yes. We buy inherited houses in Boise and across Ada County in whatever condition the estate finds them, and whoever is selling sets the closing date. The first question is not the price but who has authority to sign: the personal representative while the estate is open, or the heir once the house has been distributed. Which questions follow, from a mortgage still on the house to heirs who want different things, is what this page covers.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "If the estate is still open",
        body: [
          "While the house is still in the estate, the seller is the appointed personal representative, acting under letters, and being named executor in a will is not enough on its own. That process, from where an Ada County probate is opened to what the Recorder needs, is on [selling a house in probate in Boise](/sell-probate-house-idaho).",
        ],
        claims: ["pb-letters-required"],
      },
      {
        heading: "Selling after the estate hands the house to an heir",
        body: [
          "An estate does not have to sell the house itself. When property is distributed in kind, the personal representative signs a deed of distribution as evidence of the heir's title, and the heir can then sell it.",
          "A buyer from that heir takes title free of the rights of anyone else interested in the estate, whether or not the distribution was proper. That protects the buyer. It does not settle what the heir may still owe other heirs or the estate's creditors, and it is not a way around the estate's debts.",
        ],
        claims: ["pb-deed-of-distribution", "pb-purchaser-from-distributee-protected"],
      },
      {
        heading: "If there is a mortgage or a reverse mortgage",
        body: [
          "For a residential loan on property of less than five dwelling units, federal law bars a lender from using its due-on-sale clause because of a transfer to a relative resulting from the borrower's death. That stops the loan being called because of the inheritance. It does not stop a foreclosure for missed payments, which is why the payments matter while the estate is open. Our guide to [inheriting a house with a mortgage](/guides/inheriting-a-house-with-a-mortgage-in-idaho) covers the servicer side.",
          "A reverse mortgage runs on a different clock. The CFPB says heirs who receive a due and payable notice on a HECM have 30 days to buy, sell or turn the home over, and that it might be possible to extend that up to six months to sell. If that notice has arrived, the date on it is the one to plan the sale around. See [a reverse mortgage after the borrower dies](/guides/reverse-mortgage-after-the-borrower-dies-in-idaho).",
        ],
        claims: ["im-garn-exempt-transfers-on-death", "rv-cfpb-heirs-30-days-up-to-six-months"],
      },
      {
        heading: "Property tax and income tax after a death",
        body: [
          "An Idaho homestead that qualified the year before keeps its exemption through the year of the owner's death and the following tax year, as long as it stays part of the estate. After that the next owner has to qualify in their own right. If the estate has stopped paying the tax, Idaho issues a tax deed to the county when a delinquency is not redeemed within three years; our guide on [foreclosure and tax delinquency](/guides/idaho-foreclosure-vs-property-tax-delinquency) sets out that clock.",
          "For income tax, IRS Publication 523 says the basis of an inherited home is generally its fair market value on the date of death, or on the alternate valuation date if the personal representative chooses it. That can be higher or lower than what the owner paid. A tax professional should apply it to the estate.",
        ],
        claims: ["pt-homestead-death-carryover", "id-tax-deed-three-year-delinquency", "cg-irs-inherited-home-basis-pub523"],
      },
      {
        heading: "When several heirs want different things",
        body: [
          "A house cannot be split five ways; money can. That is often the whole reason an estate sells. What helps most at that stage is one number every heir can check, with the arithmetic laid out, and a closing date that suits the estate rather than the buyer.",
          "We deal with the personal representative, because that is who signs. If heirs want to see how the number was built, we will walk through it with them too.",
        ],
      },
      {
        heading: "What an estate sale looks like with us",
        body: [
          "The personal representative sends the address or calls (208) 779-4247. We look at the parcel record and the house as the estate found it, then come back with a number and how we reached it. Nothing has to be cleared, cleaned or repaired. We buy with our own capital, so the sale does not wait on a lender. The purchase closes through a local title company on a date the estate chooses: three weeks is realistic if speed matters, and months is fine if the estate needs them. The steps are on [how it works](/how-it-works).",
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
    slug: "sell-probate-house-idaho",
    kind: "situation",
    title: "Sell a Probate House in Boise, Idaho",
    h1: "Selling a house in probate in Boise and Ada County",
    eyebrow: "Probate",
    description:
      "Selling a probate house in Boise or Ada County: who can sign, when letters are needed, the creditor period, and what the Recorder needs. Any condition.",
    published: "2026-11-26",
    updated: "2026-11-26",
    guides: ["selling-a-house-in-probate-in-idaho", "selling-an-inherited-house-in-idaho", "inheriting-a-house-with-a-mortgage-in-idaho"],
    intro: [
      "Yes, a house can be sold while it is in probate in Idaho, and we buy probate houses in Boise and across Ada County in whatever condition the estate finds them. The person who signs is the appointed personal representative, once letters have issued, and in most estates that person can sell without a court order unless the will or a formal proceeding says otherwise. The estate sets the closing date.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "Who can sell a house in probate in Idaho",
        body: [
          "Idaho gives an appointed personal representative the same power over the title to estate property that an absolute owner would have, held in trust for creditors and others interested in the estate, and says that power may be used without notice, hearing or court order. The transactions Idaho Code 15-3-715 authorises include selling real property of the estate for cash or credit.",
          "Three limits travel with that. The power belongs to an appointed personal representative: to acquire it a person must be appointed, qualify and be issued letters, so being named executor in a will is not enough on its own. It is subject to any restriction in the will or an order in a formal proceeding, and to the statutory priorities for claims. And it is a power held for the benefit of the people interested in the estate. Our guide to [selling a house in probate in Idaho](/guides/selling-a-house-in-probate-in-idaho) sets out the statutes.",
        ],
        claims: ["id-pr-power-over-title", "pb-pr-may-sell-real-property", "pb-letters-required", "id-pr-powers-limited-by-will"],
      },
      {
        heading: "Where an Ada County probate is opened",
        body: [
          "Probate follows where the person who died lived, not where the house is. The first proceeding is venued in the county of the decedent's domicile at death, so a Boise house owned by someone who lived in Canyon County is [probated there](/guides/selling-a-house-in-probate-in-idaho). Ada County probates are heard by magistrate judges, and Ada County's courts belong to the Fourth Judicial District.",
          "In an informal appointment the registrar can appoint a personal representative once at least 120 hours have passed since the death. That is a floor, not a processing time. How informal and formal probate differ is in our guide to [selling a house in probate in Idaho](/guides/selling-a-house-in-probate-in-idaho).",
        ],
        claims: ["pb-venue-domicile-county", "pb-ada-magistrates-hear-probates", "pb-fourth-district-ada", "pb-informal-appointment-120-hours"],
      },
      {
        heading: "Which family member gets appointed",
        body: [
          "Idaho Code 15-3-203 sets the order of priority for appointment, in formal and informal proceedings alike: the person with priority under a probated will, then a surviving spouse who is a devisee, other devisees, the surviving spouse, other heirs, and, 45 days after the death, any creditor.",
          "Where several people share a priority, such as several adult children who are all heirs, those who do not renounce must concur in nominating one of them or someone else to act. For a sale that is the practical point: one person signs the deed, and the family has to agree who it is before anything can be signed.",
        ],
        claims: ["pb-appointment-priority"],
      },
      {
        heading: "Selling before the creditor period ends",
        body: [
          "Once appointed, a personal representative may publish a notice to creditors, and claims not presented within four months of the first publication are barred. Claims that arose before death are barred in any event three years after the death. A mortgage or other lien on the house is not cut off by either deadline.",
          "The power to sell is not written as waiting for that period to end. What the claim period controls is closing the estate: a personal representative may close by sworn statement no earlier than six months after appointment. Meanwhile the personal representative must pay the taxes on the house and keep it protected and preserved. When to sell relative to the claim period is a decision for the personal representative and the estate's attorney.",
        ],
        claims: ["pb-creditor-notice-four-months", "pb-claims-barred-three-years", "pb-close-no-earlier-six-months", "pb-pr-possession-and-taxes"],
      },
      {
        heading: "What the Ada County Recorder needs from an estate sale",
        body: [
          "A sale by an estate ends with a deed signed by the personal representative, recorded with the Ada County Recorder. Idaho lets letters of a personal representative, and any deed the representative signs, be recorded in the county where the property is, and from filing they give notice of their contents to everyone. Before any instrument can be recorded, the signature must be acknowledged before a notary. The court clerk issues certified copies of letters, and the certificate shows the date of appointment.",
          "The Recorder's Office does not carry blank deed forms, but it can notarise documents that will be recorded with it. Its fee schedule lists probate deeds and decrees of distribution in the same deed category as warranty and quitclaim deeds. A buyer who deals in good faith with a personal representative is protected as if the power were properly used, unless a restriction on a supervised representative is endorsed on the letters, which is one reason the letters matter at closing.",
        ],
        claims: [
          "pb-letters-recordable",
          "cl-acknowledgment-required-to-record",
          "pb-certified-letters-date",
          "sp-rec-ada-notary-and-deed-category",
          "pb-good-faith-buyer-protected",
        ],
      },
      {
        heading: "The small estate affidavit does not reach the house",
        body: [
          "Idaho Code 15-3-1201 lets a successor collect a decedent's debts and tangible personal property by affidavit 30 days after death, if the probate estate, less liens, does not exceed $100,000 and no application for a personal representative is pending or granted. Its text deals with personal property, and Ada County's Court Assistance Office describes the affidavit as for a decedent who did not own real estate.",
          "So if a house is in the estate, plan on an appointment. And do not leave it too long: subject to exceptions, Idaho bars opening a probate or appointment proceeding more than three years after the death.",
        ],
        claims: ["pb-small-estate-affidavit-conditions", "pb-ada-small-estate-affidavit-no-real-estate", "pb-probate-three-year-limit"],
      },
      {
        heading: "The disclosure form does not apply to the estate's sale",
        body: [
          "A transfer by a fiduciary in the course of administering a decedent's estate is exempt from Idaho's property condition disclosure form. The act keeps every other duty to disclose, so a personal representative who knows of a defect should still say so. In practice the estate often knows least about the house, which is one reason an as-is buyer suits it.",
        ],
        claims: ["id-disclosure-exempt-estate-fiduciary", "id-disclosure-other-duties-preserved"],
      },
      {
        heading: "If nobody is administering the estate",
        body: [
          "Sometimes an owner dies and no family member steps forward. The Ada County Treasurer serves as ex officio public administrator, responsible for administering the estates of decedents with no one else to administer them. That is the office the question ultimately reaches.",
        ],
        claims: ["ada-treasurer-ex-officio-public-administrator"],
      },
      {
        heading: "What a probate sale looks like with us",
        body: [
          "The personal representative sends the address or calls (208) 779-4247. We look at the parcel record and the house as the estate found it, then come back with a number and how we reached it. Nothing has to be cleared, cleaned or repaired. We buy with our own capital, so the sale does not wait on a lender. The purchase closes through a local title company on a date the estate chooses: three weeks is realistic if speed matters, and months is fine if the estate needs them. The steps are on [how it works](/how-it-works).",
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
    title: "Sell My House As-Is in Boise, Idaho (No Repairs)",
    h1: "Sell your Boise house as-is: no repairs",
    eyebrow: "As-is sale",
    description:
      "Selling a house as-is in Idaho? We buy in Boise and across Ada County with no repairs. What Idaho disclosure still asks of you, and how condition is priced.",
    published: "2026-11-12",
    updated: "2026-11-18",
    guides: ["idaho-seller-disclosure-when-selling-as-is", "selling-a-house-with-unpermitted-work-in-ada-county", "selling-a-house-with-a-well-or-septic-in-ada-county", "how-a-property-sale-closes-in-idaho", "taxes-when-you-sell-a-house-in-idaho"],
    intro: [
      "Yes. You can sell a house as-is in Idaho, and we buy houses in Boise and the rest of Ada County in any condition without asking for a single repair. As-is decides who fixes the house: nobody. It does not switch off Idaho's disclosure law. The seller of a one-to-four unit home still owes the property condition disclosure form unless the transfer is one of the statutory exemptions.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "As-is is about repairs, not about disclosure",
        body: [
          "Idaho requires the seller of residential real property of one to four dwelling units, including non-owner-occupied rentals, to complete a property condition disclosure form unless the transfer is exempt. Idaho Code 55-2505 lists sixteen kinds of exempt transfer. Selling as-is, or selling for cash, is not one of them.",
          "The full rules and every exemption are in our guide to [Idaho seller disclosure when selling as-is](/guides/idaho-seller-disclosure-when-selling-as-is). This page is about what that means for a sale of your house, to us or to anyone.",
        ],
        claims: ["id-disclosure-required-1-to-4-units", "id-disclosure-sixteen-exemptions"],
      },
      {
        heading: "The disclosure timeline in an as-is sale",
        body: [
          "The form goes to the buyer within ten days of the seller accepting the offer, signed and dated, and the buyer signs and returns a copy to acknowledge it. It asks about the source of the water supply, the sewer system, the roof, foundation, walls and floors, and any hazardous materials the seller knows of.",
          "A buyer who receives the form after signing the purchase contract may rescind within three business days, but only on a specific objection to something disclosed, not on a change of mind. And if something in the form changes before closing, the seller must amend it; the buyer's right to rescind after an amendment is limited to what was amended. In practice that makes an honest, early form the thing that keeps an as-is sale on its date.",
        ],
        claims: [
          "id-disclosure-deliver-within-ten-days",
          "id-disclosure-form-covers-water-sewer-structure",
          "id-disclosure-rescission-three-days",
          "id-disclosure-amend-before-closing",
        ],
      },
      {
        heading: "What you disclose is what you actually know",
        body: [
          "The form records conditions actually known by the seller. It must say that it is not a warranty and not a substitute for an inspection, and a seller is not liable for an error about something outside their personal knowledge. Every disclosure has to be made in good faith, which the act defines as honesty in fact.",
          "That matters for the houses people most often sell as-is: a rental you never lived in, a parent's house, a property you inherited. You disclose what you know; you are not expected to describe a crawlspace you have never been in. Idaho also provides that no cause of action arises for not disclosing that a property is psychologically impacted, such as a death or felony there that had no effect on its physical condition.",
        ],
        claims: [
          "id-disclosure-actual-knowledge-not-warranty",
          "id-disclosure-no-liability-outside-personal-knowledge",
          "id-disclosure-good-faith-honesty-in-fact",
          "id-psych-impacted-no-cause-of-action",
        ],
      },
      {
        heading: "Houses built before 1978",
        body: [
          "For housing built before 1978, federal rules require the seller to give the buyer an EPA-approved lead hazard pamphlet and disclose any known lead-based paint before the buyer is obligated. The buyer also gets a 10-day period to have the property assessed or inspected unless the parties agree otherwise in writing, and the buyer may waive it in writing. Expect that paperwork from any buyer, us included.",
        ],
        claims: ["fed-lead-paint-pre-1978-seller-disclosure", "fed-lead-paint-ten-day-evaluation"],
      },
      {
        heading: "Unpermitted work in Boise and unincorporated Ada County",
        body: [
          "The statutory disclosure form asks, at question 8, whether any substantial additions or alterations have been made without a building permit. It is not limited to work you did yourself, so an old garage conversion counts if you know about it.",
          "What happens next depends on [who issues permits for the parcel](/sell-house-code-violations-idaho). [In Boise](/sell-my-house-fast-boise-id), work started before a permit triggers a special investigation, with a fee equal to the permit fee collected on top of the permit fee whether or not a permit issues. In unincorporated Ada County an investigative fee equal to the permit fee must be paid before the county will accept an application, and paying it does not make the work legitimate. Boise's online code compliance lookup shows closed cases only, so a clean result there does not prove there is no open case.",
          "For us, unpermitted work is a line in the arithmetic, not a reason to walk away. Our guide to [unpermitted work in Ada County](/guides/selling-a-house-with-unpermitted-work-in-ada-county) covers each city's rules.",
        ],
        claims: [
          "cv-form-q8-additions-without-permit",
          "cv-boise-special-investigation-fee",
          "cv-ada-investigative-fee-work-without-permit",
          "cv-boise-case-lookup-closed-cases-only",
        ],
      },
      {
        heading: "Wells, septic and the lender problem",
        body: [
          "If the house is on a private well or a septic system, the lender question gets sharper. Central District Health describes a mortgage survey, which locates the well or septic system and checks it before a sale, as something a lender often requests. That is one more step a financed buyer can fail on an as-is house.",
          "If you have a well, IDWR's online well construction search holds most driller's reports from July 1987 on, and the tag number on the casing is the quickest way to find yours. We buy with our own capital, so there is no lender in our purchase to ask for a survey. What the rules say about each system is in our guide to [selling a house with a well or septic in Ada County](/guides/selling-a-house-with-a-well-or-septic-in-ada-county).",
        ],
        claims: ["ws-cdh-mortgage-survey-lender-request", "ws-idwr-well-construction-search"],
      },
      {
        heading: "How we price a house that needs work",
        body: [
          "Our offer is built from four numbers, and we show you all of them: what the house would be worth after the work, what the work costs, what it costs us to hold and resell it, and the margin we run on. Condition moves the second number. It does not change the method.",
          "You see the same arithmetic we use, so you can check it, argue with a line of it, or set it beside what listing would net. More detail is on [how we calculate an offer](/how-we-calculate-an-offer).",
        ],
      },
      {
        heading: "Title, closing and tax on an as-is sale",
        body: [
          "Idaho bars a title insurer from issuing a policy until the title has been searched and examined, so the title company runs that search before any closing we are part of. How the money and documents move is in our guide to [how a property sale closes in Idaho](/guides/how-a-property-sale-closes-in-idaho).",
          "Tax does not care whether the house was sold as-is. IRS Topic 701 says a seller may qualify to exclude up to $250,000 of gain on a main home, or $500,000 on a joint return, if the ownership and use tests are met: in general, owning and living in it for at least 24 months of the 5 years before the sale. Our guide to [taxes when you sell a house in Idaho](/guides/taxes-when-you-sell-a-house-in-idaho) sets out the federal and Idaho rules; a tax professional applies them.",
        ],
        claims: ["cl-title-search-before-policy", "cg-irs-exclusion-250k-500k", "cg-irs-ownership-and-use-tests"],
      },
      {
        heading: "What an as-is sale looks like with us",
        body: [
          "No repairs, no cleaning, no showings. Send the address or call (208) 779-4247; we come back with a number and the working behind it. We buy with our own capital, so there is no lender inspection or appraisal for the house to fail. If you accept, the sale closes through a local title company on the date you choose. Three weeks is realistic when you need speed, and later is fine.",
        ],
      },
      {
        heading: "When as-is is the wrong move",
        body: [
          "If the house needs only light cosmetic work, you have a few months, and you can face the showings, listing it, even as-is, will usually net more. A direct sale buys certainty and time back, and it costs some of the price. We will tell you plainly if we think the trade is wrong for you.",
        ],
      },
    ],
  },

  {
    slug: "sell-rental-property-idaho",
    kind: "situation",
    title: "Sell a Rental Property With Tenants in Boise, Idaho",
    h1: "Sell a Boise rental property with tenants in place",
    eyebrow: "Rental property",
    description:
      "We buy rentals with tenants in place in Boise and across Ada County, up to a fourplex. What Idaho law says happens to the lease, the deposit and notice.",
    published: "2026-11-12",
    updated: "2026-11-18",
    guides: ["selling-a-rental-with-tenants-in-idaho"],
    intro: [
      "Yes. You can sell an Idaho rental with the tenants still living in it, and we buy occupied and vacant rentals up to a fourplex in Boise and across Ada County. A sale does not end a tenancy by itself. When an Idaho rental changes hands during a tenancy, the new owner becomes liable for refunding the tenants' security deposits, so the deposits are part of the deal rather than an afterthought.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "The deposit follows the property",
        body: [
          "Idaho Code 6-321 makes the new owner liable for refunding tenants' security deposits when a rental changes ownership during a tenancy. In a sale that means the deposits are a closing item, accounted for between seller and buyer, rather than something left to sort out later with the tenant.",
          "The refund rules do not change with the owner. If no time is fixed by agreement a refund is due within 21 days, and in any case within 30 days of the tenant surrendering the premises. Normal wear and tear cannot be charged against it, and any refund of less than the full deposit must come with a signed, itemised statement of what was kept, why, and what it was spent on. That is the reason a buyer asks for the deposit ledger: the new owner is the one who will have to write that statement.",
        ],
        claims: ["id-deposit-liability-transfers-on-sale", "id-deposit-refund-timing", "id-deposit-no-normal-wear-and-tear", "sp-rt-deposit-itemized-statement"],
      },
      {
        heading: "If a property manager holds the deposits",
        body: [
          "Idaho requires deposits for a residential rental managed by a landlord's third-party manager to be kept in a separate account at a federally insured institution, apart from the manager's operating account. The rule does not apply to an owner managing their own property or to a real estate licensee, among other exemptions. Either way, before closing it helps to know exactly where each tenant's deposit sits and who will release it to the title company.",
        ],
        claims: ["sp-rt-deposit-third-party-manager-account"],
      },
      {
        heading: "Leases, notice and the recording act",
        body: [
          "Idaho's recording act makes most unrecorded conveyances of real property void against a later good-faith purchaser, but it carves out a lease for a term not exceeding one year. A tenancy at will is different again: Idaho Code 55-208 says the landlord may end it with written notice to leave within a period of not less than one month, and the tenant may end it with the same notice. Which kind of tenancy you have, and whether a sale changes anything about it, is a question for an attorney.",
          "Our guide to [selling a rental with tenants in Idaho](/guides/selling-a-rental-with-tenants-in-idaho) sets out what each statute says. What it means for a sale to us is simpler: we want to see every lease, and we price the property with the tenancy as it actually is.",
        ],
        claims: ["id-recording-act-lease-one-year-carveout", "sp-rt-tenancy-at-will-one-month"],
      },
      {
        heading: "Disclosure still applies to a rental",
        body: [
          "Idaho's property condition disclosure covers residential property of one to four units, expressly including non-owner-occupied rentals. Owning it as an investment does not exempt the sale, although what you disclose is what you actually know, which for a house you have never lived in may be not much.",
        ],
        claims: ["id-disclosure-required-1-to-4-units", "id-disclosure-actual-knowledge-not-warranty"],
      },
      {
        heading: "Occupants who are not tenants",
        body: [
          "Idaho has a limited alternative remedy that lets a residential owner ask the county sheriff to remove people unlawfully occupying a dwelling, subject to a list of conditions that, among other things, excludes current and former tenants and immediate family members. Ada County's court-assistance eviction forms, by contrast, are written only for a tenant who has not paid rent. Which route applies depends on who the occupant is, and that is a legal question.",
          "We buy with occupants in place. The property does not need to be empty before we make an offer.",
        ],
        claims: ["id-6-310a-remove-unauthorized-persons", "ada-eviction-forms-nonpayment-only"],
      },
      {
        heading: "Boise and Meridian rules that follow a rental",
        body: [
          "Some obligations attach to the property rather than the person. [In Meridian](/sell-my-house-fast-meridian-id), city utility accounts stay with the property and any debt for city services is the owner's responsibility regardless of who used them, so a tenant's unpaid balance is the owner's to settle. [In Boise](/sell-my-house-fast-boise-id), the short-term rental license was repealed in 2026, though the city still enforces its nuisance, noise, parking, safety and occupancy rules.",
        ],
        claims: ["meridian-utility-debt-stays-with-property", "boise-str-license-repealed-2026"],
      },
      {
        heading: "Tax on selling a former home you rented out",
        body: [
          "IRS Publication 523 (2025) says gain is not excludable to the extent it is allocable to periods of nonqualified use after 2008, with exceptions, and that the part of the gain equal to depreciation allowed or allowable on rental use after May 6, 1997 cannot be excluded. If the rental was once your home, those two rules affect how much of the main-home exclusion survives. A tax professional should run the numbers before you sign anything.",
        ],
        claims: ["cg-irs-nonqualified-use", "cg-irs-depreciation-not-excludable"],
      },
      {
        heading: "Up to four units here; five and up is commercial",
        body: [
          "Ada County's residential appraisers value multi-family residential up to four units; apartments and higher-density residential go to commercial appraisers. We draw the same line. Duplexes, triplexes and fourplexes are bought as residential, on this page. Five units and up is priced on rent roll and income; see [multifamily](/commercial/multifamily).",
        ],
        claims: ["ada-residential-appraisal-scope"],
      },
      {
        heading: "What selling a rental to us looks like",
        body: [
          "Send the address, and if you have them, the leases, the rent roll and the deposit figures, or call (208) 779-4247. We come back with a number and how we built it. We buy with our own capital, so the deal does not depend on a lender's view of the tenancy, and we buy in any condition, including a unit that needs work between tenants. The sale closes through a local title company on the date you choose; three weeks is realistic.",
          "If the rental is in good shape, fully let and you have time, listing it to another investor may well net more. We will say so if we think that is your better route.",
        ],
      },
    ],
  },

  {
    slug: "sell-house-before-foreclosure-idaho",
    kind: "situation",
    title: "Sell Your House Before Foreclosure in Boise, Idaho",
    h1: "Selling your Boise house before a foreclosure sale",
    eyebrow: "Facing foreclosure",
    description:
      "Behind on payments in Boise or Ada County? Idaho's foreclosure dates, the payoff figure, and what selling before the trustee's sale can and cannot do.",
    published: "2026-11-12",
    updated: "2026-11-18",
    guides: ["how-to-avoid-foreclosure-in-idaho", "idaho-foreclosure-timeline", "short-sale-vs-deed-in-lieu-in-idaho", "after-a-foreclosure-sale-in-idaho", "foreclosure-rescue-scams-in-idaho", "bankruptcy-and-foreclosure-in-idaho", "idaho-foreclosure-vs-property-tax-delinquency"],
    intro: [
      "If a house in Boise or elsewhere in Ada County is heading toward a trustee's sale, selling it before the sale date is one option the owner still has. If the property is worth more than what is owed, it is the option that can leave the difference with the owner rather than at the auction. Idaho requires notice of a trustee's sale at least 120 days before the sale, so the clock is real but not instant.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "Three Idaho foreclosure dates that look alike",
        body: [
          "Most Idaho home loans are secured by a deed of trust, foreclosed by a trustee's sale rather than a lawsuit. Three different periods are involved, they run from different starting points, and they must not be added together or swapped.",
          "First, a federal rule: for a principal residence, a servicer may not make the first notice or filing for a foreclosure unless the loan is more than 120 days delinquent, with narrow exceptions. Second, Idaho's cure right: the notice of default is recorded with the recorder of the county where the property sits, in Ada County the Ada County Recorder, and within 115 days of that recording the owner may cure by paying the amount then due plus costs and fees, which reinstates the loan. Third, Idaho's notice of sale, which must be given at least 120 days before the day fixed for the sale.",
          "Our guide to [the Idaho foreclosure timeline](/guides/idaho-foreclosure-timeline) sets them out step by step. If a notice has arrived, the date printed on it is the one to plan around.",
        ],
        claims: [
          "ft-federal-120-day-delinquency",
          "ft-federal-principal-residence-scope",
          "ft-notice-of-default-recorded-and-mailed",
          "ft-cure-within-115-days",
          "id-trustee-sale-120-day-notice",
        ],
      },
      {
        heading: "What the notice of sale tells you",
        body: [
          "The notice names the grantor, trustee and beneficiary, describes the property, says where the deed of trust is recorded, states the default and the sum owing, and gives the date, time and place of the sale, which must be held after 9:00 a.m. and before 4:00 p.m. at a designated place in the county where the property is. It must be published once a week for four successive weeks, the last at least 30 days before the sale, and there must be at least three good-faith attempts at personal service.",
          "The trustee may postpone a sale at the lender's request, by announcement at the original time and place, and each postponement is capped at 30 days. Do not plan on one. The Ada County Recorder's records can be searched online by instrument number, party or parcel number, though not every document can be bought through the website.",
        ],
        claims: ["ft-notice-of-sale-contents", "id-trustee-sale-publication", "id-trustee-sale-service-attempts", "ft-postponement-thirty-days", "ft-ada-recorder-online-search"],
      },
      {
        heading: "The payoff figure is not your balance",
        body: [
          "Any sale, to us or anyone, pays the loan off at closing, so the number that matters is the payoff, not the balance on your statement. The CFPB describes the payoff amount as what it takes to pay the debt off completely, including interest through the payoff day and possibly unpaid fees. A servicer must send an accurate payoff statement within seven business days of a written request, but where the loan is in foreclosure the rule allows a reasonable time instead, so ask in writing and ask early.",
          "Once the loan is paid, Idaho Code 45-1514 has the trustee reconvey the deed of trust on the lender's written request. The Ada County Recorder's Office says it does not send titles or deeds after a loan is paid off, what Idaho law provides for instead is the reconveyance.",
        ],
        claims: ["sk-cfpb-payoff-differs-from-balance", "sk-payoff-statement-seven-business-days", "sk-reconveyance-on-performance", "sp-rec-ada-no-title-sent-after-payoff"],
      },
      {
        heading: "If the sale goes ahead",
        body: [
          "A trustee's sale ends the interest of everyone who was given notice, and they have no right to redeem from the purchaser. The purchaser is entitled to possession on the tenth day after the sale. The proceeds go first to the costs of the sale, then to the loan, then to later recorded liens, and only after that, if anything is left, to the former owner. Within 3 months of the sale the lender may also seek a money judgment for any balance still due.",
          "That order is the whole case for selling first when there is equity: in a sale you arrange, what is left after the payoff and any other liens comes to you at closing, rather than depending on what an auction brings. What follows a completed sale is in our guide to [what happens after a foreclosure sale](/guides/after-a-foreclosure-sale-in-idaho).",
        ],
        claims: ["ft-sale-final-no-redemption", "ft-possession-tenth-day", "as-proceeds-order-and-surplus", "ss-trustee-sale-deficiency-three-months"],
      },
      {
        heading: "Behind on property tax is a different, slower clock",
        body: [
          "A property tax delinquency does not lead to a trustee's sale. Idaho issues a tax deed to the county if a delinquency is not redeemed within three years, after a notice served between five and two months before the deed issues. Owners regularly plan around the wrong one. Our guide on [foreclosure versus tax delinquency](/guides/idaho-foreclosure-vs-property-tax-delinquency) lays them side by side.",
        ],
        claims: ["id-tax-deed-three-year-delinquency", "id-tax-deed-notice-service"],
      },
      {
        heading: "A sale before the date is still an ordinary sale",
        body: [
          "Idaho exempts a deed in lieu of foreclosure, a transfer to the lender by a borrower in default, and the foreclosure sale itself from the property condition disclosure form. A sale by the owner to a buyer before the trustee's sale is none of those, so the ordinary disclosure rules apply, honestly and to what you actually know.",
        ],
        claims: ["id-disclosure-exempt-foreclosure", "id-disclosure-required-1-to-4-units"],
      },
      {
        heading: "What we can do, and what we cannot",
        body: [
          "We cannot stop a foreclosure, negotiate with your lender, or promise any outcome but our own purchase. The routes for keeping the house are in [how to avoid foreclosure in Idaho](/guides/how-to-avoid-foreclosure-in-idaho), and [sell or keep](/sell-or-keep-house-facing-foreclosure-idaho) weighs a sale against them. Bankruptcy changes the picture in its own way; see [bankruptcy and foreclosure in Idaho](/guides/bankruptcy-and-foreclosure-in-idaho) and talk to a bankruptcy attorney.",
          "Be wary of anyone who asks for money up front, asks you to sign over the title, or tells you to stop paying your lender. Those are among the warning signs the CFPB lists for foreclosure rescue scams, and our guide to [foreclosure rescue scams in Idaho](/guides/foreclosure-rescue-scams-in-idaho) covers the rest. A HUD-approved housing counselor provides foreclosure prevention counseling free of charge, though no counselor can promise you will keep the home.",
        ],
        claims: ["fs-cfpb-scam-warning-signs", "af-cfpb-housing-counselor-what-they-do"],
      },
      {
        heading: "When selling to us will not help",
        body: [
          "If you owe more than the house would bring, a quick sale to us does not fix that, and we will tell you so rather than use up the time you have. A short sale or a deed in lieu needs the lender's agreement; our guide to [short sales and deeds in lieu](/guides/short-sale-vs-deed-in-lieu-in-idaho) explains each. And if you have equity and enough runway to list, listing will usually net more than we can pay.",
        ],
      },
      {
        heading: "What a sale before the date looks like with us",
        body: [
          "Send the address, the sale date on any notice you have, and roughly what is owed, or call (208) 779-4247. We will tell you quickly whether a direct sale is workable before the date, and if it is, what we would pay and why. We buy with our own capital, so there is no loan of ours to approve, and we buy the house in any condition. The sale closes through a local title company on a date you choose; three weeks is realistic, which matters when a notice period is counting down. The title company pays the loan from the price at closing. The steps are on [how it works](/how-it-works).",
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
    updated: "2026-11-18",
    guides: ["selling-land-or-acreage-in-ada-county", "selling-a-house-with-a-well-or-septic-in-ada-county"],
    intro: [
      "We buy land across Ada County — raw ground, rural acreage with a well and septic, infill lots and parcels with access, easement, water or floodplain complications. Size matters less than four things: whether the parcel has water, legal access, irrigation rights, and which government decides what can be built on it. This page is about selling the parcel to us. What each of those rules says, with the statutes, is in our guide to [what decides what Ada County land can become](/guides/selling-land-or-acreage-in-ada-county).",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "What we check first: who governs the parcel",
        body: [
          "Unincorporated Ada County is not one regime. Much of it lies inside Areas of City Impact — land planned jointly with the adjacent city. 78.8% of unincorporated residents, about 50,143 people, live inside one. Which side of that line a parcel sits on changes the rules for dividing and building on it.",
          "We start every land offer by establishing that, from the county's own maps. The Ada County Assessor maintains the parcel boundaries, road rights-of-way and city limits that tell you which regime applies.",
        ],
        claims: ["ada-area-of-city-impact", "ada-assessor-maintains-parcel-gis"],
      },
      {
        heading: "What we check on water",
        body: [
          "Idaho treats domestic water use — a home, with irrigation of up to half an acre — as a defined use capped at 13,000 gallons a day. For Idaho's domestic water statutes a subdivision is five or more lots, which is one reason a parcel that looks dividable on paper may not be on water. If there is a well, its driller's report or tag number helps us price the parcel.",
        ],
        claims: ["id-domestic-water-13000-gpd", "id-water-subdivision-five-lots"],
      },
      {
        heading: "What we check on irrigation",
        body: [
          "Ada County's irrigation districts map identifies 27 separate irrigation entities in the county — districts, ditch companies, lateral associations and others. Who delivers water to a parcel, and on what terms, is a question about that map rather than about the city. An irrigation assessment bill, if you have one, tells us which entity it is.",
        ],
        claims: ["ada-27-irrigation-entities"],
      },
      {
        heading: "Access, septic and floodplain",
        body: [
          "A single countywide highway district is responsible for public rights-of-way inside every Ada County city, which is where road access questions start. Central District Health permits septic systems and reviews land development applications. Any development within the floodplain in Ada County needs a Floodplain Development Permit.",
          "None of these is a reason we will not buy. Each is a line in what the land is worth to a buyer, and the [Ada County land guide](/guides/selling-land-or-acreage-in-ada-county) explains how each one binds, including who decides a lot split.",
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
          "Fences and curbs are not boundaries. [Kuna's own guidance](/sell-my-house-fast-kuna-id) is that the best way to determine property lines is a professional survey, that owners should look for existing corner pins, and that fence lines and street curbs should not be assumed to follow the property line. The Ada County Assessor's Office may hold a copy showing the parcel's size and the lots around it.",
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
    title: "Sell a Manufactured Home on Land in Boise, Idaho",
    h1: "Sell a manufactured home on its land",
    eyebrow: "Manufactured homes",
    description:
      "We buy manufactured homes on their own land in Boise and Ada County. Real or personal property, where the title went, and what to check before you sell.",
    published: "2026-11-12",
    updated: "2026-11-18",
    guides: ["selling-a-manufactured-home-in-idaho"],
    intro: [
      "We buy manufactured homes on their own land in Boise and across Ada County, in any condition. The first thing to establish is whether the home has been converted to real property, because in Idaho that decides how it is sold, how it is assessed, where its title went, and whether it can legally be moved.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "Real property or personal property",
        body: [
          "An Idaho manufactured home can become real property only if the running gear is removed, it is permanently affixed to a foundation on land the owner owns or is buying, and the owner records a statement of intent to declare it real property with the county recorder. All three are required. Once it is declared real property, county assessors must treat it like any other site-built house, and lenders may treat it as real property.",
          "If nothing was ever recorded, the home and the land may be two different things in law, even with the axles long gone. Our guide to [selling a manufactured home in Idaho](/guides/selling-a-manufactured-home-in-idaho) sets out the test and the process.",
        ],
        claims: ["id-manufactured-home-becomes-real-property", "id-manufactured-home-treated-as-site-built"],
      },
      {
        heading: "Where the home's title went",
        body: [
          "Before it is converted, a manufactured home has a certificate of origin or a title of its own. Idaho Code 63-304 says the declaration converting it to real property must have the certificate of origin or the original title attached, so that the conversion can be reversed later. So in a converted home the statute puts that title with the declaration, not in a drawer.",
          "The reverse also works. If a converted home is removed, the owner must apply for a certificate of title within five days, the declaration of reversal must be recorded before it issues, and once it issues the home is personal property again for financing and tax. So the question for a sale is which of the two the record shows today, and the county record is where we start.",
        ],
        claims: ["sp-mh-declaration-attaches-title", "sp-mh-reversal-certificate-of-title"],
      },
      {
        heading: "A converted home is part of the land",
        body: [
          "Once converted, the home is a fixture and an improvement to the land, and it cannot be physically removed without the consent of everyone holding an interest in the land. The owner has to obtain a title report from a title insurance company to identify who those people are, and give the county assessor at least thirty days' written notice. Removal is prohibited until the county tax collector certifies in writing that all property taxes due and payable have been paid; in Ada County the tax collector is the Treasurer.",
          "For a sale, that usually means the home and the ground are sold together, and moving the home is a project of its own.",
        ],
        claims: [
          "id-manufactured-home-removal-requires-consent",
          "sp-mh-removal-title-report-and-tax-approval",
          "id-manufactured-home-removal-notice-and-taxes",
          "ada-treasurer-ex-officio-tax-collector",
        ],
      },
      {
        heading: "Fixtures, sheds and additions",
        body: [
          "Whether a porch, carport, shed or skirting goes with the land is decided in Idaho by a three-factor test of annexation, adaptation and intent. We price the property as it actually stands on the ground, including what is attached to it.",
        ],
        claims: ["ada-fixture-three-factor-test"],
      },
      {
        heading: "Replacing the home on a Boise lot",
        body: [
          "Many buyers of manufactured-home lots are thinking about what replaces the home. [In Boise](/sell-my-house-fast-boise-id), replacing a residential unit, a manufactured home included, with another on the same lot is exempt from impact fees where the number of service units does not increase. That is part of what the land is worth, and part of why we look at the lot as well as the home.",
        ],
        claims: ["boise-impact-fee-replacement-exemption"],
      },
      {
        heading: "Assessment and disclosure",
        body: [
          "Idaho requires manufactured homes to be assessed as other residential housing, and Ada County's residential appraisers value manufactured homes along with houses, townhomes and condominiums. So the tax bill on a converted home on its own land looks much like a site-built house's.",
          "Idaho's disclosure act defines residential real property as real property improved by a building or structure with one to four dwelling units. Whether that reaches a particular manufactured home depends on how it is held, which is one more reason to settle the real-or-personal question first, with the title company or an attorney.",
        ],
        claims: ["id-manufactured-homes-assessed-as-residential", "ada-residential-appraisal-scope", "id-disclosure-residential-definition"],
      },
      {
        heading: "Paperwork worth finding before you call",
        body: [
          "Anything that shows how the home is held: a certificate of title, a recorded declaration converting it to real property, the deed to the land, and the most recent property tax statement. If you cannot find them, that is fine. We can start from the county record, but each one shortens the time to a firm number.",
        ],
      },
      {
        heading: "What selling a manufactured home to us looks like",
        body: [
          "Send the address or call (208) 779-4247. We confirm from the county record how the home is held, then come back with a number and how we got there. Condition does not disqualify a home. We buy with our own capital, which matters here: no lender of ours has to accept how the home is held. The purchase closes through a local title company on a date you choose, and three weeks is realistic.",
          "If the home sits in a park on a rented space, that is a different kind of sale. Ask us, and we will tell you straight whether it is something we can help with.",
        ],
      },
    ],
  },

  {
    slug: "sell-house-divorce-idaho",
    kind: "situation",
    title: "Selling a House in a Divorce in Boise, Idaho",
    h1: "Selling the house in a Boise or Ada County divorce",
    eyebrow: "Divorce",
    description:
      "Selling the house in a Boise or Ada County divorce: who must sign under Idaho law, what the court can order, and one offer and closing date for both of you.",
    published: "2026-11-12",
    updated: "2026-11-18",
    guides: ["selling-a-house-during-a-divorce-in-idaho"],
    intro: [
      "When both spouses agree to sell, we buy the house directly, in any condition, with a closing date you both set, through a local title company. If the house is community real estate, Idaho requires both spouses to join in the sale agreement and the deed, so [in Boise](/sell-my-house-fast-boise-id) or anywhere else in the state a sale only works when you are both ready to sign.",
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
        heading: "Community or separate: the first question",
        body: [
          "The two-signature rule is written for community real estate. Idaho treats property owned before marriage, or acquired by gift or inheritance, or with the proceeds of separate property, as separate; all other property acquired after marriage is community. A deed from one spouse to the other is presumed to make the house the receiving spouse's separate property.",
          "Which of those your house is can be obvious or genuinely disputed. If it is disputed, settle it with your attorneys first. We can make an offer while you do, but we cannot close until the people who must sign are ready to.",
        ],
        claims: ["dv-separate-property-defined", "dv-community-property-default", "dv-interspouse-deed-presumed-separate"],
      },
      {
        heading: "Where an Ada County divorce runs",
        body: [
          "Ada County's courts are part of Idaho's Fourth Judicial District. The Ada County Court Assistance Office publishes the paperwork for filing a divorce, with separate sets for couples with and without children, response paperwork, and an online questionnaire. The forms help with filing; they are not legal advice about the house.",
        ],
        claims: ["pb-fourth-district-ada", "sp-dv-ada-court-assistance-divorce-forms"],
      },
      {
        heading: "What the court can order while the case is open",
        body: [
          "Once a case is filed, the Idaho Rules of Family Law Procedure let a party ask the court for a temporary order, including one to divide community property or exclude a party from the residence, and set out when an injunction may stop a party disposing of property. In a contested case each party must also hand over the deeds, deeds of trust and settlement sheets for real property.",
          "If any order touches the house, it governs the sale, and the title company will need to see it. Tell us at the start so the closing date we agree is one the court will allow.",
        ],
        claims: ["dv-irflp-temporary-order-divide-property", "dv-irflp-injunction-dispose-property", "dv-irflp-401-disclose-deeds"],
      },
      {
        heading: "Selling now, or letting the decree decide",
        body: [
          "If the house is not sold first, the decree deals with it. Idaho Code 32-712 directs a substantially equal division in value of community property, considering debts, unless there are compelling reasons otherwise, and allows a homestead from community property to be assigned to one spouse, divided, or sold and the proceeds divided.",
          "A decree can also reach the house in another way. A recorded decree that provides for periodic child support or alimony is a lien, but only for payments that are delinquent or not made when due. And the Ada County Recorder's fee schedule lists a divorce decree with property in its deed category, which is a reminder that the decree itself can end up in the title record. Many couples prefer to sell before the decree so that what is divided is money rather than a house and a mortgage. That is a decision for the two of you and your attorneys.",
        ],
        claims: ["dv-decree-substantially-equal-division", "dv-decree-homestead-assign-or-sell", "ln-judgment-lien-child-support", "sp-rec-ada-notary-and-deed-category"],
      },
      {
        heading: "If one of you has already moved away",
        body: [
          "A deed has to be acknowledged before a notary before it can be recorded, which is where a spouse in another city or state can slow a closing down. Idaho law allows the personal-appearance requirement to be met by appearing before a notary through communication technology that carries sight and sound at once, subject to identity and recording conditions. Whether a particular closing offers that is up to the title company handling it, so raise it early.",
        ],
        claims: ["cl-acknowledgment-required-to-record", "cl-remote-notarization-satisfies-appearance"],
      },
      {
        heading: "Disclosure and tax still apply",
        body: [
          "Idaho exempts a transfer between spouses under a decree or property settlement from the seller disclosure form. A sale by both spouses to an outside buyer is not that transfer, so the ordinary disclosure rules for one-to-four unit residential property apply.",
          "On tax, IRS Topic 701 says a seller may qualify to exclude up to $250,000 of gain on a main home, or up to $500,000 on a joint return. Publication 523 (2025) adds that on a joint return each spouse must meet the residence requirement for the couple to get the full exclusion. When the sale happens relative to the divorce can therefore matter. Ask a tax professional before you set the date.",
        ],
        claims: ["id-disclosure-exempt-divorce", "id-disclosure-required-1-to-4-units", "cg-irs-exclusion-250k-500k", "cg-irs-pub523-joint-return-tests"],
      },
      {
        heading: "What a sale looks like with us when you are separating",
        body: [
          "We send the same offer, with the same arithmetic, to both of you, and there are no side conversations. Either of you can call (208) 779-4247. Nothing needs fixing, cleaning or staging, and nobody has to keep the house show-ready while living through a separation. We buy with our own capital, so the date does not depend on a buyer's lender. The sale closes through a local title company, which pays off the mortgage and splits nothing itself: the proceeds go where your agreement or the court directs. Three weeks is realistic if you need it; later is fine.",
          "If the house is in good shape and you can cooperate through a listing, the open market will usually net more. We would rather say so than buy it from you cheaply.",
        ],
      },
    ],
  },

  {
    slug: "sell-house-with-liens-idaho",
    kind: "situation",
    title: "Sell a House With a Lien in Boise, Idaho",
    h1: "Sell a house with a lien or judgment on it",
    eyebrow: "Liens and judgments",
    description:
      "We buy Boise and Ada County houses with judgment, tax, HOA or mechanic's liens on title. How each lien is paid at closing and what the title search shows.",
    published: "2026-11-13",
    updated: "2026-11-18",
    guides: ["liens-and-judgments-when-selling-in-idaho", "how-a-property-sale-closes-in-idaho"],
    intro: [
      "Yes, we buy houses in Boise and across Ada County that have liens or judgments recorded against them. A lien is a claim against the property for a debt. In a sale it is paid out of the price at closing, so the first question is whether the price covers what is owed. We buy with our own capital, the purchase closes through a local title company, and you choose the date.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "Can you sell a house that has a lien on it",
        body: [
          "Nothing in the Idaho statutes this page draws on forbids selling a house that has a lien against it. Idaho Code 55-613 defines encumbrances to include taxes, assessments and all liens on real property. They are part of the title a buyer looks at, and they are dealt with as part of the sale.",
          "The Ada County Recorder's Office keeps the documents related to property ownership in the county, and recorded documents are open to public inspection. Some types, deeds among them, are currently blocked from viewing or downloading online and have to be requested from the office. A lien that has been recorded is in that record, where any title company will find it.",
        ],
        claims: ["cl-encumbrances-include-taxes-liens", "ada-recorder-maintains-ownership-documents", "cl-ada-deeds-blocked-online"],
      },
      {
        heading: "What the title search shows, and when",
        body: [
          "Idaho bars a title insurer from issuing a policy on Idaho real property until a search and examination of the title has been made. Because our purchases close through a local title company, that search happens before every closing we are part of.",
          "The result is a written list of what is recorded against the property, and you see it. Sellers are often surprised in both directions: a judgment they had forgotten, or a lien they feared that has already expired. Until that list exists, any figure for what you will keep is an estimate, and we will say so. How the title company then moves the money is in our guide to [how a property sale closes in Idaho](/guides/how-a-property-sale-closes-in-idaho).",
        ],
        claims: ["cl-title-search-before-policy"],
      },
      {
        heading: "Judgment liens",
        body: [
          "In Idaho a money judgment becomes a lien on real property only when a transcript or abstract of it is recorded with the county recorder, and only in that county. A judgment recorded in Canyon County is not a lien on a house in Ada County until it is recorded here. Apart from child-support and recorded restitution judgments, the lien runs ten years from the date of the judgment unless it is satisfied sooner.",
          "Ten years is not always the end. Before the lien expires, the court that entered the judgment may renew it on motion, and a recorded renewal continues the lien for another ten years. An old judgment is worth checking against the record before anyone assumes it has lapsed. Every lien type is set out in our guide to [liens and judgments when selling in Idaho](/guides/liens-and-judgments-when-selling-in-idaho).",
        ],
        claims: ["ln-judgment-lien-arises-on-recording", "ln-judgment-lien-ten-years", "ln-judgment-renewal-order"],
      },
      {
        heading: "Mechanic's liens from unpaid work",
        body: [
          "A contractor or supplier who was not paid can claim a lien. Idaho gives the claimant 90 days after finishing the work or supplying the materials to file the claim with the county recorder, and its priority reaches back to when the work started, not to when the claim was filed.",
          "The lien binds the property for no longer than six months after filing unless a court action to enforce it is started in that time, or a payment or extension of credit is endorsed on the record. Idaho also allows a mechanic's lien of record to be released by posting a surety bond. Which of those applies to a lien on your house is a question for an Idaho attorney.",
        ],
        claims: ["ln-mechanics-lien-ninety-day-filing", "ln-mechanics-lien-priority", "ln-mechanics-lien-six-month-duration", "ln-mechanics-lien-bond-release"],
      },
      {
        heading: "Homeowner's association liens",
        body: [
          "If the house is in an association, ask for a statement of your assessment account in writing. An Idaho homeowner's association must provide it free within five business days, listing all outstanding assessments, charges and fees, and the association is bound by the amounts in that statement. It is the fastest way to turn a worry about dues into a number.",
        ],
        claims: ["ln-hoa-statement-of-account"],
      },
      {
        heading: "Tax, irrigation and utility charges that stay with the land",
        body: [
          "Idaho property taxes are a first and prior lien on the property, discharged only by payment or cancellation, so unpaid tax is settled ahead of everything else. If the tax has gone delinquent, a separate three-year clock is running; our page on [selling a house with delinquent property taxes](/sell-house-delinquent-property-taxes-idaho) covers it.",
          "Irrigation district assessments are also a first lien, superior to a mortgage, and a buyer takes the property subject to any annual assessment unpaid at the time of sale. [In Meridian](/sell-my-house-fast-meridian-id), debt for city utility services is the property owner's responsibility regardless of who used them. Charges like these show up in the arithmetic even when nothing is recorded under your name.",
        ],
        claims: ["ln-property-tax-first-lien-perpetual", "id-tax-deed-three-year-delinquency", "id-irrigation-assessment-lien-survives-sale", "meridian-utility-debt-stays-with-property"],
      },
      {
        heading: "Federal tax liens need lead time",
        body: [
          "The IRS can remove its lien from one specific property with a Certificate of Discharge. IRS Publication 783 says the application is made on Form 14135 and should be submitted at least 45 days before the date the certificate is needed. Where the debt is paid in full instead, the IRS says it releases the lien within 30 days of payment.",
          "That lead time is the reason to mention a federal tax lien at the start. You set the closing date in a sale to us, so the date can be placed far enough out for the IRS to answer. A tax professional should handle the application.",
        ],
        claims: ["ln-irs-discharge-apply-45-days", "ln-irs-discharge-subordination-withdrawal", "ln-irs-release-thirty-days"],
      },
      {
        heading: "After the payoff: clearing the record",
        body: [
          "Paying a loan does not, by itself, change the county record, and the Ada County Recorder's Office says it does not send titles or deeds once a loan is paid off. For a deed of trust, Idaho has the trustee reconvey on the lender's written request once the loan is paid. If that does not happen, a title insurer or title agent may, at least 30 days after payment in full, give notice of intent to reconvey, and record the reconveyance itself if no objection arrives within the following 60 days.",
          "The county accepts recordings in person, by mail, or electronically, and says eRecording is available through title companies. That is the practical reason a title company handles the releases at closing rather than leaving them to you.",
        ],
        claims: ["sp-rec-ada-no-title-sent-after-payoff", "sk-reconveyance-on-performance", "sk-title-agent-reconveyance-30-and-60-days", "sp-rec-ada-erecording-title-companies"],
      },
      {
        heading: "If the liens come to more than the house is worth",
        body: [
          "Then a sale at market price cannot pay them all, and we cannot make a lien go away. Whether a lienholder will accept less than it is owed is that lienholder's decision, and the conversation belongs with an Idaho attorney. Where the debt is the mortgage itself, our guide to [short sales and deeds in lieu](/guides/short-sale-vs-deed-in-lieu-in-idaho) explains what the lender has to agree to.",
          "We will tell you early if the numbers do not work. A clear no in the first week is worth more to you than a contract that falls apart in the fourth.",
        ],
      },
      {
        heading: "What a sale with liens looks like with us",
        body: [
          "Send the address and tell us what you know is recorded against it, or call (208) 779-4247. We come back with a number and the arithmetic behind it, in any condition and with nothing repaired first. If you accept, the title company runs its search, gathers the payoff figures and pays the liens from the price at closing. You receive what is left, and the closing statement shows each payment. Three weeks is realistic when the liens are simple; you pick the date, so it can be later when a lienholder needs time. The method behind the number is on [how we calculate an offer](/how-we-calculate-an-offer).",
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
    title: "Sell a House With Delinquent Property Taxes in Boise",
    h1: "Selling a house with delinquent property taxes",
    eyebrow: "Delinquent property taxes",
    description:
      "Behind on property taxes in Ada County? The Treasurer's tax deed steps, what late charges cost, and how a sale before the deed pays the county in full.",
    published: "2026-11-13",
    updated: "2026-11-18",
    guides: ["idaho-property-taxes-when-you-sell", "idaho-foreclosure-vs-property-tax-delinquency"],
    intro: [
      "We buy Boise and Ada County houses with property taxes owing, in any condition. The delinquent tax is paid to the county out of the price at closing, and you keep what is left. Idaho gives an owner three years from the date of delinquency before the county can take a tax deed, so there is usually time to choose, and the choice gets more expensive each month.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "How long you have before a tax deed",
        body: [
          "If Idaho real property with a delinquency is not redeemed within three years from the date of delinquency, the county tax collector must issue a tax deed in favour of the county. That can happen only after a notice of pending issue of tax deed has been given, by certified mail to record owners and parties in interest, no more than five months and no less than two months before the deed is set to issue.",
          "The Ada County Treasurer describes its side of that: each January 1, real property with a three-year delinquency may be considered for tax deed. If you have received the certified letter, the three years are nearly spent and the date in it is the one that matters.",
        ],
        claims: ["id-tax-deed-three-year-delinquency", "id-tax-deed-notice-service", "sp-tx-ada-january-review-partial-payments"],
      },
      {
        heading: "The Ada County tax deed steps",
        body: [
          "The Treasurer's own summary runs: a notice of pending issue of tax deed by certified mail two to five months before a hearing; a hearing open to the public and entered into the county minutes, where record owners and parties in interest may give evidence and testify; then, if the statutory requirements are met, a tax deed recorded in favour of the county.",
          "One line on that page deserves attention. Partial payments are accepted before the hearing, but they do not stop the tax deed process. Paying part of the balance does not end it.",
        ],
        claims: ["sp-tx-ada-hearing-and-evidence", "sp-tx-ada-january-review-partial-payments"],
      },
      {
        heading: "What waiting costs",
        body: [
          "Idaho property taxes are due by December 20, or in two halves with the second due by June 20. The Ada County Treasurer states that a missed December installment draws a 2% late charge plus interest at 1% per month from the following January 1.",
          "The Treasurer also applies payments to the oldest tax balance first. A partial payment therefore goes to the earliest delinquent year, which is the year the three-year clock is counting from. Our guide to [Idaho property taxes when you sell](/guides/idaho-property-taxes-when-you-sell) covers how the bill is split at a normal closing.",
        ],
        claims: ["pt-taxes-due-dec-20-two-halves", "pt-ada-late-charge-and-interest-rates", "id-tax-deed-three-year-delinquency"],
      },
      {
        heading: "The tax is a lien on the house",
        body: [
          "Idaho property taxes are a first and prior lien on the property, and the statute says the lien is discharged only by payment or cancellation of the taxes. Selling the house does not erase the tax. The sale pays it: the amount owed to the county comes out of the price at closing, ahead of other liens.",
          "The Ada County Treasurer is the county's tax collector. That office can tell you the exact amount needed to bring the parcel current on a given date, and that is the figure a title company will work from.",
        ],
        claims: ["ln-property-tax-first-lien-perpetual", "ada-treasurer-ex-officio-tax-collector"],
      },
      {
        heading: "If the tax deed has already issued",
        body: [
          "The record owner may still redeem after a tax deed issues to the county, but only until the county commissioners enter a contract of sale or transfer the property by county deed, and in any event no later than fourteen months from the date the deed issued.",
          "The Treasurer says the public auction is held within 14 months of the tax deed, with a minimum bid that covers the delinquent taxes, late charges, interest and costs. Any excess goes first to parties in interest in lien priority, and what remains is returned to the record owners at the time the deed issued. That is a long way round compared with a sale you arrange. At that stage speak to an Idaho attorney before anything else.",
        ],
        claims: ["id-tax-deed-redemption-fourteen-months", "sp-tx-ada-auction-and-excess-proceeds"],
      },
      {
        heading: "Tax delinquency and mortgage foreclosure run on different clocks",
        body: [
          "A tax deed takes three years. A lender's trustee's sale under a deed of trust needs notice of at least 120 days. An owner who is behind on both is on the shorter clock, whatever the tax notice says. Our guide to [the two clocks](/guides/idaho-foreclosure-vs-property-tax-delinquency) sets them side by side, and [selling before a foreclosure sale](/sell-house-before-foreclosure-idaho) covers the mortgage side.",
        ],
        claims: ["id-trustee-sale-120-day-notice", "id-tax-deed-three-year-delinquency"],
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
        heading: "What a sale with back taxes looks like with us",
        body: [
          "Send the address, and the date on any Treasurer's notice, or call (208) 779-4247. We look at the parcel record and the house and come back with a number and the working behind it. We buy with our own capital and in any condition. If you accept, the purchase closes through a local title company on the date you choose. Three weeks is realistic, which can put the closing ahead of a hearing date. The title company pays the county from the price, and the closing statement shows the amount. The method is on [how we calculate an offer](/how-we-calculate-an-offer).",
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
    slug: "sell-house-code-violations-idaho",
    kind: "situation",
    title: "Sell a House With Code Violations in Boise, Idaho",
    h1: "Sell a Boise house with code violations or unpermitted work",
    eyebrow: "Code violations and permits",
    description:
      "Selling a Boise or Ada County house with code violations or unpermitted work: what the disclosure form asks, who issues permits, and how a direct sale works.",
    published: "2026-11-26",
    updated: "2026-11-26",
    guides: ["selling-a-house-with-unpermitted-work-in-ada-county", "idaho-seller-disclosure-when-selling-as-is"],
    intro: [
      "Yes. You can sell a house in Boise or anywhere in Ada County with code violations or work that was done without a permit, and we buy those houses as they stand. Idaho's disclosure form asks the seller what they know about unpermitted additions and zoning violations, and the rules on work started without a permit are set by whichever city or county issued, or should have issued, the permit.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "Can you sell a house with code violations or unpermitted work in Idaho?",
        body: [
          "Yes. Nothing in the disclosure act stops the sale. What it does is make the seller say what they know. The statutory form asks, at question 8, whether any substantial additions or alterations have been made without a building permit. Question 6 asks about conditions that may affect clearing title and gives zoning violations as an example, and question 9 asks for any other legal or physical problem the seller knows of.",
          "The form records what the seller knows, as of the date signed. It does not ask the seller to inspect. What each question means is in our guide to [selling a house with unpermitted work in Ada County](/guides/selling-a-house-with-unpermitted-work-in-ada-county).",
        ],
        claims: ["cv-form-q8-additions-without-permit", "cv-form-q6-zoning-violations-title", "cv-form-q9-other-problems-legal", "cv-form-seller-certification-and-purpose"],
      },
      {
        heading: "Who issues the permit depends on the city limit",
        body: [
          "Idaho Code 39-4111 makes it unlawful to build, extend or alter a residence in a jurisdiction that enforces building codes without first getting a permit under that local government's ordinance. So the rule is statewide, and the office is local. Inside each of Ada County's six cities the city issues permits. Outside them, the county does.",
          "That matters for a sale because the consequence of work started without a permit is set by each jurisdiction, and they differ. The table sets out what each one publishes.",
        ],
        table: {"caption": "Who issues building permits, and what happens to work started without one", "columns": ["Where the property is", "Who issues building permits", "Work started before a permit"], "rows": [["Boise", "City of Boise Building Division", "Special investigation; a fee equal to the permit fee, charged in addition, whether or not a permit issues"], ["Meridian", "City of Meridian Building Services", "Handled by the city's Building Services and Code Enforcement"], ["Eagle", "City of Eagle Building Department", "Special investigation before a permit issues, with an investigation fee in addition to the permit fee"], ["Kuna", "City of Kuna Building Department", "Handled by the city's Building Department"], ["Star", "City of Star Building Department", "Handled by the city's Building Department"], ["Garden City", "Garden City Building Division (services contracted to SAFEbuilt)", "Possible discontinuance of utilities, an infraction of up to $100, and double permit fees"], ["Unincorporated Ada County", "Ada County building division", "An investigative fee equal to the permit fee before an application is accepted"]], "note": "Each row is the jurisdiction's own published rule. Never carry one across a city limit."},
        claims: ["cv-id-permit-required-local-jurisdiction", "cv-boise-building-division-issues-permits", "cv-meridian-building-services-scope", "cv-kuna-building-department-scope", "cv-star-building-department-scope", "cv-gardencity-building-services-contract", "cv-ada-building-code-applies-unincorporated", "cv-boise-special-investigation-fee", "cv-eagle-investigation-fee-work-before-permit", "gardencity-work-without-permit-consequences", "cv-ada-investigative-fee-work-without-permit"],
      },
      {
        heading: "What happens with an open code enforcement case?",
        body: [
          "Each jurisdiction runs its own process. In unincorporated Ada County a specialist who confirms a violation notifies the owner in writing and gives a time frame to cure it, and an owner who does not cure may face civil proceedings in District Court. In Star the owner or resident has fifteen days from receipt of the Zoning Administrator's letter to abate a nuisance before the matter can go to the City Council. Kuna's code enforcement is complaint-driven.",
          "Open cases can be hard for a buyer to see. Boise's public case lookup shows closed code compliance cases only, so an active case will not appear there. That is one more reason the disclosure form asks the seller.",
        ],
        claims: ["cv-ada-code-enforcement-notice-and-cure", "cv-star-code-enforcement-fifteen-days", "cv-kuna-code-enforcement-complaint-driven", "cv-boise-case-lookup-closed-cases-only"],
      },
      {
        heading: "Does a permit stay with the house when it sells?",
        body: [
          "In unincorporated Ada County, a building division permit is issued to the owner of the property and stays tied to that property as ownership changes. In Boise, a building permit can be transferred to another party who provides a document signed by the original permit holder consenting to the transfer, with a clerical fee.",
          "So an open permit on a half-finished project is something to raise early, with the buyer and the title company, rather than at closing.",
        ],
        claims: ["cv-ada-permit-required-tied-to-property", "cv-boise-permit-transfer"],
      },
      {
        heading: "Why buyers and insurers ask about it",
        body: [
          "The City of Eagle states that property insurers may not cover work completed without permits and inspections. A buyer financing the purchase, or insuring it, has a reason to ask about a converted garage or a finished basement with no record behind it. That question tends to arrive late in a listed sale, after an inspection.",
        ],
        claims: ["cv-eagle-building-department-permit-faq"],
      },
      {
        heading: "What a sale looks like with us",
        body: [
          "We buy houses with unpermitted work and open code issues as they stand. Send the address or call (208) 779-4247 and tell us what you know; we come back with a number and the working behind it, with the cost of putting the work right counted in it. We buy with our own capital, so there is no lender inspection or appraisal for the house to fail. The sale closes through a local title company on the date you choose, and three weeks is realistic.",
        ],
      },
      {
        heading: "When fixing it first is the better move",
        body: [
          "If the unpermitted work is small, the city will permit it after the fact, and the house is otherwise ready for the market, sorting the permit out and then listing will usually net more. A direct sale buys certainty and time, and it costs some of the price. If that trade is wrong for you, we will say so.",
        ],
      },
    ],
  },

  {
    slug: "cash-offer-vs-listing-idaho",
    kind: "decision",
    tool: "offer-math",
    title: "Sell to a Cash Buyer or List? Boise Cash Offer vs Listing",
    h1: "Direct sale or listing: an honest comparison",
    eyebrow: "Deciding how to sell",
    description:
      "Cash offer vs listing in Boise and Ada County: Idaho disclosure duties, inspection and appraisal contingencies, the net arithmetic, and when listing wins.",
    published: "2026-11-12",
    updated: "2026-11-18",
    guides: ["idaho-seller-disclosure-when-selling-as-is", "how-a-property-sale-closes-in-idaho", "taxes-when-you-sell-a-house-in-idaho"],
    intro: [
      "Listing usually gets the highest price. A direct sale usually gets the most certainty. If your Boise or Ada County house is in good shape, a lender would finance it as it stands, and you have a few months, list it. If it needs work, carries a complication, or the date matters more than the last dollar, a cash offer is worth pricing next to the listing. Idaho's disclosure rules apply either way.",
      NOT_ADVICE,
    ],
    sections: [
      {
        heading: "What you are actually trading",
        body: [
          "A direct sale trades some of the price for three things: no repairs or preparation, no dependence on a buyer's lender, and a closing date you set. Listing trades time, preparation and uncertainty for exposure to every buyer in the market, which is how the highest price is found.",
          "Neither is the right answer in general. The question is which of those things you are short of: money, time, or the ability to manage the work.",
        ],
      },
      {
        heading: "The steps of a listed sale in Idaho",
        body: [
          "It starts with a listing agreement. Idaho Code 54-2050 requires every brokerage representation agreement to be in writing, with definite beginning and expiration dates, and a seller's agreement must state the price and terms and all fees or commissions. The section requires the commission to be written down. It does not set a rate.",
          "When you accept an offer, the disclosure clock starts. Idaho Code 55-2509 requires the seller to deliver a signed and dated copy of the completed property condition disclosure form to the buyer or the buyer's agent within ten days of accepting the offer. A buyer who receives the form after signing may rescind within three business days on a specific objection, and gets the deposit back. If the house was built before 1978, the federal lead-paint rules add a pamphlet, disclosure of any known lead hazards, and a 10-day window for the buyer to have the house assessed, which the buyer may waive in writing.",
          "Then come the buyer's contingencies, which are terms of the purchase contract rather than of Idaho law. The CFPB tells buyers that if a contract is contingent on a satisfactory inspection, the buyer can cancel without penalty if not satisfied with the results, and that the buyer may negotiate with the seller over who makes or pays for repairs.",
          "A financed buyer also brings a lender. The CFPB says a lender generally requires a form of appraisal, that some loan programs require the property to meet specified standards, and that where major repairs such as a new roof are needed the lender can require them before closing as a condition of the loan. If the appraisal comes in below the price, the CFPB says the buyer can often use it to negotiate the price down, and may want to cancel if the seller will not move.",
          "Each of those is a point where the price can change or the sale can end. None of them is a reason not to list. They are the reasons a listed sale takes longer and is less certain than the asking price suggests.",
        ],
        claims: [
          "dc-listing-agreement-in-writing",
          "dc-listing-agreement-fees-element",
          "id-disclosure-deliver-within-ten-days",
          "id-disclosure-rescission-three-days",
          "fed-lead-paint-pre-1978-seller-disclosure",
          "fed-lead-paint-ten-day-evaluation",
          "dc-cfpb-inspection-contingency-cancel",
          "dc-cfpb-lender-appraisal-and-repairs",
          "dc-cfpb-low-appraisal-renegotiate-or-cancel",
        ],
      },
      {
        heading: "The same steps in a direct sale",
        body: [
          "Disclosure does not go away. Idaho's property condition disclosure applies to one-to-four unit residential property whether you list it or sell it direct, and none of the sixteen exemptions in Idaho Code 55-2505 turns on the house being sold as-is or for cash. If the house was built before 1978, the federal lead-paint disclosure applies too. A direct buyer is not a way around disclosure, and anyone who suggests otherwise is telling you something Idaho law does not say.",
          "What changes is the lender. We buy with our own capital, so there is no lender's appraisal and no lender asking for repairs before closing. We buy in any condition. The purchase closes through a local title company, you choose the closing date, and a three-week close is realistic when you want one.",
          "Read any inspection or due-diligence period in a direct buyer's contract the same way you would read one in a listing offer: how long it lasts, and what lets the buyer walk away. That applies to ours as well.",
        ],
        claims: [
          "id-disclosure-required-1-to-4-units",
          "id-disclosure-sixteen-exemptions",
          "fed-lead-paint-pre-1978-seller-disclosure",
        ],
      },
      {
        heading: "The arithmetic on one example house",
        body: [
          `Take a house worth ${usd(EXAMPLE_ARV)} once the work is done, run through the same model as the worksheet below. These are our worksheet's assumptions, not market figures: a ${pct(OFFER_RATES.commission)} commission and ${pct(OFFER_RATES.sellerClosing)} of seller closing costs on a listing. Your listing agreement has to state the commission, so put your agent's figure in its place. The worksheet lets you change the value and the condition.`,
          exampleLine("cosmetic"),
          exampleLine("major"),
          "Each figure is before any mortgage payoff, liens and taxes on the sale, which come out of every route the same way. No listing commission appears in the direct-sale figure because no listing agent is involved, and any closing costs that fall to you in a sale to us are stated in the written offer.",
        ],
      },
      {
        heading: "When listing wins",
        body: [
          "On a sound house, listing usually wins on money, and the example above shows it on our own numbers. Even on the house needing major work, doing the work and then listing nets more on paper. The case for a direct sale there is not that it pays more. It is that the listing figure assumes you can fund the work, wait the months and absorb a contract that ends at the inspection or the appraisal.",
          "List it if any of these is true. The house is tidy and would get through a lender's appraisal and a buyer's inspection without a long repair list. You can live with showings, the disclosure and contingency steps, and a few months of uncertainty. You already have a strong offer from a financed buyer. In any of those cases, listing will usually net more even after commission, and we will tell you so.",
          "Listing also wins when the right buyer for the house is a household that will pay for its location or its finish. A single cash buyer prices the house as a project. The open market prices it as a home. If you want the open market without a commission, [selling a house by owner in Idaho](/guides/selling-a-house-by-owner-in-idaho) sets out the forms and steps you would handle yourself.",
        ],
      },
      {
        heading: "When a direct sale is worth pricing",
        body: [
          "The house needs work you cannot or do not want to fund, or work a lender would require before closing. It is inherited and the estate wants a clean exit. It has tenants, title or permit problems that make a financed buyer nervous. A foreclosure or another deadline sets the date. The property is land, a manufactured home or something else the open market finances badly.",
          "In those cases the asking price is not the number that matters. What matters is what you would actually clear, and when.",
        ],
      },
      {
        heading: "How to compare the two numbers honestly",
        body: [
          "Compare what you would clear, not the headline price. For a listing that means the expected sale price, minus the commission in your listing agreement, minus the repairs and preparation a financed buyer and the buyer's lender will want, minus the cost of carrying the house (mortgage, tax, insurance, utilities) for the months it is on the market, with some allowance for a contract that ends at the inspection or the appraisal.",
          "For a direct offer it is the offer, minus your share of closing costs. We show our arithmetic so you can put the two side by side. See [how we calculate an offer](/how-we-calculate-an-offer).",
        ],
      },
      {
        heading: "Questions to ask any direct buyer",
        body: [
          "Whose money is it? A buyer using its own capital does not need a lender to approve the deal. A buyer who needs to find funding or another buyer may not close on the date promised.",
          "Which title company, and when does earnest money go in? A purchase that closes through a local title company, with the deposit held there, is one you can check at every step.",
          "Can I see how you got to the number? A buyer who will not show the working is asking you to trust a figure you have no way to test.",
          "Who sets the date? If the closing date suits the buyer rather than you, you have traded the price for less certainty than you thought.",
          "Idaho gives you ways to check the answers: the Secretary of State's business records, the licensing rules for title and escrow, and a cancellation right on certain foreclosure-related contracts. They are set out in [how to check a cash buyer in Idaho](/how-to-check-a-cash-buyer-in-idaho).",
        ],
      },
      {
        heading: "Idaho does not publish sale prices",
        body: [
          "One thing makes the comparison harder here than in many states. Idaho is a non-disclosure state: recorded documents are open to anyone, but the sale price is not among the elements a deed must contain. So neither you nor a buyer can simply look up what the house next door sold for. That is a reason to ask any buyer, or any agent, to show the basis of their number.",
        ],
        claims: ["idaho-recorded-documents-are-public", "idaho-deed-content-requirement-omits-price"],
      },
    ],
  },

  {
    slug: "how-we-calculate-an-offer",
    kind: "decision",
    tool: "offer-math",
    title: "How Cash Home Buyers Calculate an Offer: Our Exact Formula",
    h1: "How we calculate an offer",
    eyebrow: "Our arithmetic",
    description:
      "The formula behind our Boise cash offers, line by line: repair cost by condition, holding and resale costs, our margin, and how it compares with listing.",
    published: "2026-11-12",
    updated: "2026-11-18",
    guides: ["how-a-property-sale-closes-in-idaho"],
    intro: [
      "Every offer we make on a house is built from four numbers: what the house would be worth after the work it needs, what that work costs, what it costs us to hold and resell the property, and the margin we run on. The offer is the first number minus the other three. We state the rates we use, you set the value and the condition in the worksheet on this page, and the arithmetic does the rest.",
      "This page describes our own method. It is not an appraisal, and nothing on it says what any particular property is worth. The worksheet is an illustration, not a quote for your house.",
    ],
    sections: [
      {
        heading: "The formula in one line",
        body: [
          `Offer = value after the work, minus the work, minus holding and reselling, minus our margin. Every rate below is a share of the value after the work, so the whole calculation scales with one number. ${worksheetExample()}`,
          "What we state is the rates. What you set is the value and the condition. A written offer for your address replaces both of those with the facts of your house.",
        ],
      },
      {
        heading: "1. The value after the work",
        body: [
          `We start with what the house would sell for once the work is done, the after-repair value. On a house that is how value is found: by comparison with similar houses that have sold nearby. On the worksheet you set it yourself, anywhere from ${usd(ARV_MIN)} to ${usd(ARV_MAX)}. Outside that range the model is not meant to be read.`,
          "In Idaho that is harder than it sounds. Recorded documents are open to the public, but the sale price is not among the elements a deed must contain, so comparable sales are not something you can read off the county record. In a written offer we tell you which sales we relied on and why, so you can push back if you know the street better than we do.",
        ],
        claims: ["idaho-recorded-documents-are-public", "idaho-deed-content-requirement-omits-price"],
      },
      {
        heading: "2. The work the house needs",
        body: [
          `On the worksheet the work is a share of the value after the work, set by the condition you pick: ${tierRates()}.`,
          "In a written offer the cost of the work is listed line by line: roof, systems, finishes, anything unpermitted that would need to be brought into compliance. If you think a line is wrong, that is the line to argue, and sometimes you will be right.",
        ],
      },
      {
        heading: "3. The cost of holding and reselling",
        body: [
          `From the day we buy until the day we sell, the house costs money: property tax, insurance, utilities and the cost of our own capital, plus title, escrow and the commission when we sell it again. The model puts reselling at ${pct(OFFER_RATES.resale)} of the value after the work, and holding at ${pct(OFFER_RATES.monthlyCarry)} of that value for each month we expect to own it: ${tierMonths()}.`,
        ],
      },
      {
        heading: "4. Our margin",
        body: [
          `Finally, the spread we run on: ${pct(OFFER_RATES.margin)} of the value after the work. It pays for the risk that the work costs more, the market moves, or the house takes longer to sell. We do not hide it inside the other numbers. You see it as a line of its own, in dollars.`,
        ],
      },
      {
        heading: "How the worksheet sets this against listing",
        body: [
          `The worksheet also shows two listing routes for the same house, on stated assumptions: a ${pct(OFFER_RATES.commission)} commission and ${pct(OFFER_RATES.sellerClosing)} of seller closing costs. Those are the model's assumptions, not market rates. Your listing agreement states the commission you actually agree.`,
          `Listing as it stands prices the house below its finished value by the cost of the work and by a further discount for selling it unfinished (${asIsDiscounts()}), then takes off the commission, closing costs and two months of holding at the same monthly rate. Doing the work first and then listing takes off the work, the commission and closing costs on the full value, and holding for two months longer than our own estimate for that condition.`,
          "The worksheet shows what you keep on each route as a band of 4% either side, to avoid false precision. It is not a forecast. [Direct sale or listing](/cash-offer-vs-listing-idaho) runs the comparison on an example house and says when listing wins.",
        ],
      },
      {
        heading: "Why we show the working",
        body: [
          "A number on its own invites only one response: higher. A number with its working lets you see where we might be wrong, a repair we have overestimated or a comparable sale that is not comparable, and that is a better conversation for both sides.",
          "It also lets you compare our offer properly with listing the house. If the arithmetic shows that listing would net you more, we would rather you saw that from our own numbers.",
        ],
      },
      {
        heading: "Commercial property is different",
        body: [
          "Above four units, and for office and industrial buildings, value comes from income rather than comparable sales, and the method changes. That is explained on [how commercial value is determined](/commercial/how-value-is-determined). Land is worked out differently too.",
        ],
      },
      {
        heading: "What can move the number",
        body: [
          "Information. A recent inspection report, receipts for a new roof or furnace, a survey, leases and rent figures on a rental: each one replaces an assumption with a fact. Our assumptions on unknowns are deliberately cautious, so facts usually move the number in the seller's favour.",
          "What does not move it is negotiation for its own sake. If a line is wrong, show us why and we will change it. If every line is right, the total is the total.",
        ],
      },
      {
        heading: "What this number is not",
        body: [
          "It is not an appraisal and it is not an opinion of what your house is worth on the open market. It is what we would pay, and why. The offer carries no obligation: if listing would net you more, take the listing.",
        ],
      },
      {
        heading: "What happens after you see the number",
        body: [
          "If the number works, the purchase closes through a local title company on a date you choose, and three weeks is realistic. We buy with our own capital, so nothing waits on a lender. If it does not work, that is the end of it, with no obligation. Start with the [address](/contact).",
        ],
      },
    ],
  },
  {
    "slug": "how-to-check-a-cash-buyer-in-idaho",
    "kind": "decision",
    "title": "How to Check a Cash Home Buyer Is Legit in Idaho",
    "h1": "How to check that a cash buyer in Idaho is legitimate before you sign",
    "eyebrow": "Before you sign",
    "description": "Check any Idaho cash home buyer before you sign: business records, proof of funds, title company escrow, Real Estate Commission guidance and foreclosure rights.",
    "published": "2026-11-12",
    "updated": "2026-11-18",
    "guides": ["how-a-property-sale-closes-in-idaho", "foreclosure-rescue-scams-in-idaho"],
    "intro": [
      "Before you sign, look up the buyer's entity on the Idaho Secretary of State's free business search, confirm that the title or escrow company closing the sale holds an Idaho Department of Insurance or Department of Finance license, ask for proof of funds in the buyer's own name, and ask in writing whether the buyer is purchasing for its own account. Idaho's real estate license law, the Real Estate Commission's guidance and the Consumer Foreclosure Protection Act tell you what those answers mean.",
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
        "heading": "Ask for proof of funds, and where the money will sit",
        "body": [
          "Ask whose money pays for the house, and ask to see it. A buyer paying from its own funds can show a recent account statement or a letter from its bank. Check that the name on it matches the buyer named on the purchase agreement. A buyer that still needs a loan, an investor partner or another buyer before it can close has a condition on the sale, whether or not the contract spells it out, and it is better to know that before you sign.",
          "Proof of funds shows that money exists today. The closing company is what ties it to your sale. Idaho's license law treats earnest money that the parties have directed in writing to a title, escrow or trust company as held there rather than by a broker. Ask how much earnest money the buyer will deposit, with which company and by when, then call that company on a number you looked up yourself and confirm the deposit arrived."
        ],
        "claims": [
          "vb-earnest-money-at-title-not-entrusted"
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
        "heading": "Wholesaling: what the Real Estate Commission's guidance says",
        "body": [
          "Sellers often hear the word wholesaling for a buyer who puts a house under contract and then markets the house, or the contract, to someone else before closing. The Idaho source that speaks to that practice most directly is the Real Estate Commission's guidance, and it is guidance, not statute.",
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
          "The FTC describes what these rules are aimed at. It warns that scammers may try to get a homeowner to transfer the deed, that a homeowner who does so is not likely to get it back, and that transferring the deed does not transfer the mortgage. It also describes equity-skimming schemes in which a homeowner is promised the home back later, or is tricked into selling for cash for much less than similar homes nearby, and the scammer rents the home out while the lender forecloses. The [Idaho foreclosure timeline](/guides/idaho-foreclosure-timeline) covers the steps to an Idaho trustee's sale, and [foreclosure rescue scams in Idaho](/guides/foreclosure-rescue-scams-in-idaho) covers the warning signs."
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
        "heading": "The checks in order",
        "body": [
          "1. Get the buyer's exact legal name and look it up on the Secretary of State's business search.",
          "2. Ask whether the buyer, or anyone on its side, holds an Idaho real estate license, and check the Commission's License Lookup.",
          "3. Ask in writing whether the buyer is buying for its own account and will take title at closing.",
          "4. Ask for proof of funds in the buyer's own name.",
          "5. Get the title or escrow company's name, look up its license, and call it on a number you found yourself.",
          "6. Confirm the earnest money amount, where it sits and the deadline.",
          "7. If the house is in foreclosure, look for the statutory notice and note your five-business-day cancellation window.",
          "8. Confirm any wiring instructions by phone with the title company before money moves."
        ],
        "claims": [
          "vb-sos-business-search",
          "vb-licensee-must-disclose-license",
          "vb-irec-license-lookup",
          "vb-earnest-money-at-title-not-entrusted",
          "vb-cfpa-written-notice-required",
          "vb-cfpa-five-business-day-rescission",
          "vb-irec-wire-diversion-warning"
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
    "guides": ["how-to-avoid-foreclosure-in-idaho", "idaho-foreclosure-timeline", "short-sale-vs-deed-in-lieu-in-idaho", "after-a-foreclosure-sale-in-idaho", "foreclosure-rescue-scams-in-idaho", "bankruptcy-and-foreclosure-in-idaho", "idaho-foreclosure-vs-property-tax-delinquency"],
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

import type { Section } from "./place-content";

/**
 * Hand-written guide content.
 *
 * Every factual assertion traces to a claim id in data/idaho/evidence/. These
 * pages state what a statute says, attributed and quoted, and direct the reader
 * to counsel. They are never applied to a reader's own facts.
 */
export interface GuideContent {
  intro: string[];
  sections: Section[];
}

export const guideContent: Record<string, GuideContent> = {
  "selling-an-inherited-house-in-idaho": {
    intro: [
      "Most of what makes an inherited property hard to sell is uncertainty about authority: who is allowed to sign, and whether a court has to agree first. Idaho answers that more directly than many states.",
      "This page describes what Idaho statutes say. It is not legal advice and it is not applied to your situation — an estate is specific, and yours should be looked at by an attorney.",
    ],
    sections: [
      {
        heading: "An appointed personal representative holds the same power over title as an owner",
        body: [
          "Idaho Code 15-3-711 is unusually plain: \"Until termination of his appointment a personal representative has the same power over the title to property of the estate that an absolute owner would have, in trust however, for the benefit of the creditors and others interested in the estate. This power may be exercised without notice, hearing, or order of court.\"",
          "That last sentence is the one that surprises people. In Idaho, an appointed personal representative does not need a court order to sell estate real property as a matter of course. The power is held in trust for creditors and heirs, which is a real constraint on how it may be used — but it is not a procedural gate you must pass before a sale can happen.",
          "Two qualifications matter and neither is optional. The power belongs to an appointed personal representative — it says nothing about an heir who has not been appointed. And Idaho Code 15-3-715 opens by carving out exceptions: authorised transactions are \"Except as restricted or otherwise provided by the will or by an order in a formal proceeding,\" and are subject to the statutory priorities for claims against the estate.",
          "So the honest summary is: usually no court order, unless the will or a formal order says otherwise. Anyone who tells you the first half without the second half is giving you an incomplete picture.",
        ],
        claims: ["id-pr-power-over-title", "id-pr-powers-limited-by-will"],
      },
      {
        heading: "Estate sales are exempt from the seller disclosure requirement",
        body: [
          "Idaho requires a property condition disclosure on residential property of one to four dwelling units, including non-owner-occupied rentals. Estate transfers are among the listed exemptions — but on two distinct grounds, and the distinction is worth keeping straight.",
          "Idaho Code 55-2505(1) exempts \"A transfer pursuant to court order including, but not limited to, a transfer ordered by a probate court during the administration of a decedent's estate.\" Separately, 55-2505(7) exempts \"A transfer by a fiduciary in the course of the administration of a decedent's estate, a guardianship, a conservatorship, or a trust.\"",
          "A personal representative selling without a court order — which, per 15-3-711, is the ordinary case — is relying on (7), the fiduciary ground, not on (1). They reach the same place here, but they are different provisions and merging them produces a wrong answer as soon as the facts shift.",
          "An exemption from the statutory disclosure form is not a licence to conceal a known defect. It removes a specific statutory obligation; it does not create a right to mislead a buyer.",
        ],
        claims: ["id-disclosure-exempt-estate-fiduciary", "id-disclosure-required-1-to-4-units"],
      },
      {
        heading: "If nobody is administering the estate, the county Treasurer may",
        body: [
          "This is obscure and occasionally decisive. The Ada County Treasurer serves as ex officio public administrator, \"responsible for administering the estates of decedents without a person to administer the estate.\"",
          "Where a property owner has died and no family member has stepped forward, that is the office the question ultimately reaches. It is the same office that collects property tax as ex officio tax collector, which is worth knowing if the property is also behind on taxes.",
        ],
        claims: ["ada-treasurer-ex-officio-public-administrator", "ada-treasurer-ex-officio-tax-collector"],
      },
      {
        heading: "What changes at the county once ownership moves",
        body: [
          "The Ada County Recorder maintains all documents related to property ownership in the county, and specifically records probate deeds and decrees of distribution alongside ordinary conveyances. Recorded documents are open to public inspection under Idaho Code 31-2419, and redacting personal information before recording is the responsibility of whoever submits the document — not the Recorder's office.",
          "The homeowner's property tax exemption does not travel with the house. Ada County's rule is that once approved you need only reapply \"if you move or if ownership of the property changes.\" An inherited property that transfers therefore needs the exemption re-established by whoever ends up owning and occupying it, and a buyer should budget for the year in which it lapses.",
        ],
        claims: ["ada-recorder-maintains-ownership-documents", "ada-recorder-pii-redaction-is-submitter-duty", "ada-homeowners-exemption-deadline"],
      },
      {
        heading: "Where we fit, and where we do not",
        body: [
          "We buy inherited property in Ada County, including houses that need work and estates with several heirs who want different things. What we can offer is certainty about timing and a number you can check.",
          "What we are not is the highest bidder. If the house is financeable, tidy and the estate is in no hurry, listing it will usually net more even after commission. We would rather say that than let you discover it afterwards.",
        ],
      },
    ],
  },

  "idaho-foreclosure-vs-property-tax-delinquency": {
    intro: [
      "Two different things can take an Idaho property from an owner who has fallen behind, and they run on clocks that are nothing like each other. Applying the timeline of one to the other is the most expensive mistake available to a distressed owner.",
      "This page sets out what the statutes say. It is not legal advice.",
    ],
    sections: [
      {
        heading: "A mortgage problem: 120 days' notice before a trustee's sale",
        body: [
          "Most Idaho residential mortgage debt is secured by a deed of trust, foreclosed non-judicially. Idaho Code 45-1506 requires that \"at least one hundred twenty (120) days before the day fixed by the trustee for the trustee's sale, notice of such sale shall be given\" to the grantor, to anyone who has recorded a request for notice, to successors in interest and to junior lienholders.",
          "The same section requires publication \"in a newspaper of general circulation in each of the counties in which the property is situated once a week for four (4) successive weeks,\" with the last publication at least 30 days before the sale. Affidavits of mailing and posting must be recorded at least 20 days before. And at least three good-faith attempts at personal service must be made on different days over a period of not less than seven days, each at least 30 days before the sale.",
          "That 120 days is a statutory minimum within a longer process, not \"the foreclosure timeline\". It begins from the date fixed for the sale and works backwards.",
          "One detail matters in Star and anywhere else straddling a county line: notice must be published in each county where the property sits.",
        ],
        claims: ["id-trustee-sale-120-day-notice", "id-trustee-sale-publication", "id-trustee-sale-service-attempts"],
      },
      {
        heading: "A tax problem: three years before a deed can even issue",
        body: [
          "Property tax delinquency runs on an entirely different scale. Idaho Code 63-1005: \"If real property on which there is a delinquency is not redeemed within three (3) years from the date of delinquency, the county tax collector … must make, in favor of said county, a tax deed for such property.\"",
          "Even then the county is not entitled to the deed until a notice of pending issue has been given and an affidavit of compliance recorded. Service is by certified mail with return receipt, no more than five months and no less than two months before the deed is set to issue. If that comes back undelivered, notice is published once a week for four consecutive weeks. The statute calls this the exclusive manner of service, and the owner is liable for the costs of it.",
          "So an owner behind on property taxes has years, where an owner behind on a mortgage may have months. Both are serious. They are not the same emergency.",
        ],
        claims: ["id-tax-deed-three-year-delinquency", "id-tax-deed-notice-service"],
      },
      {
        heading: "Redemption after a tax deed is double-gated",
        body: [
          "After a tax deed issues to the county, redemption remains possible — but on two conditions, and most summaries give only one.",
          "Idaho Code 63-1007 permits the record owner or a party in interest to redeem \"up to the time the county commissioners have entered into a contract of sale or the property has been transferred by county deed.\" Separately, \"such right of redemption shall expire fourteen (14) months from the date of issuance of a tax deed to the county, in the event the county commissioners have not extinguished the right of redemption by contract of sale or transfer by county deed during said redemption period.\"",
          "Read those together: fourteen months is a ceiling, not a guarantee. The right can die considerably earlier if the county contracts to sell. Anyone told \"you have fourteen months\" without the earlier cut-off has been given time they may not have.",
          "Redeeming means paying the delinquency plus late charges, accrued interest and costs — including title search and other professional fees.",
        ],
        claims: ["id-tax-deed-redemption-fourteen-months"],
      },
      {
        heading: "A pre-foreclosure sale is not exempt from disclosure",
        body: [
          "Idaho's disclosure exemptions include several foreclosure-related transfers: a deed in lieu, a transfer to a deed-of-trust beneficiary by a trustor in default, a transfer by foreclosure sale, and a sale under a power of sale following default within one year of foreclosure on the default.",
          "Every one of those describes a transfer into or out of the foreclosure process. None of them describes an owner who is behind on payments, still holds title, and sells to a buyer before any trustee's sale. That owner is not exempt, and this is the easiest disclosure error to make on a distressed sale.",
        ],
        claims: ["id-disclosure-exempt-foreclosure"],
      },
      {
        heading: "What equity is protected",
        body: [
          "Idaho's homestead exemption protects equity from creditors up to a cap: \"A homestead may consist of lands … regardless of area, but the homestead exemption amount shall not exceed the sum of one hundred seventy-five thousand dollars ($175,000).\"",
          "This is a different instrument from the property tax homeowner's exemption, which reduces assessed value. Ada County's own website refers to both as a \"Homestead Exemption\", so it is worth being explicit about which one is meant in any given sentence.",
        ],
        claims: ["id-homestead-creditor-175k"],
      },
    ],
  },

  "selling-a-rental-with-tenants-in-idaho": {
    intro: [
      "Selling an occupied rental raises three questions: what happens to the deposit, whether the lease binds the buyer, and what to do about someone who will not leave. Idaho answers the first clearly, the second partly, and the third narrowly.",
      "This page describes the statutes. It is not legal advice, and an occupancy dispute in particular is a matter for an attorney.",
    ],
    sections: [
      {
        heading: "The deposit follows the property, not the seller",
        body: [
          "Idaho Code 6-321(3): \"If security deposits have been made as to a particular rental or lease property, and the property changes ownership during a tenancy, the new owner shall be liable for refund of the deposits.\"",
          "That cuts both ways and both matter. A seller does not discharge the deposit obligation by selling. A buyer inherits it, whether or not the money was ever transferred at closing — which is why the deposit should be an explicit line in the transaction rather than an assumption.",
          "The same section sets the refund terms: within 21 days if no time is fixed by agreement, and within 30 days in any event after the tenant surrenders the premises. Any partial refund must come with a signed statement itemising what was retained, why, and a detailed list of expenditures.",
          "A landlord \"shall not retain any part of a security deposit to cover normal wear and tear,\" which the statute defines as deterioration from the use the unit is intended for, without negligence, carelessness, accident, misuse or abuse. A tired unit is not a damaged one.",
        ],
        claims: ["id-deposit-liability-transfers-on-sale", "id-deposit-refund-timing", "id-deposit-no-normal-wear-and-tear"],
      },
      {
        heading: "Whether the lease binds the buyer turns on the recording act",
        body: [
          "Idaho Code 55-812 provides that \"Every conveyance of real property other than a lease for a term not exceeding one (1) year, is void as against any subsequent purchaser or mortgagee of the same property … in good faith and for a valuable consideration, whose conveyance is first duly recorded.\"",
          "The carve-out is the important part. A lease for a term of one year or less sits outside that rule, so it is not void against a later purchaser merely for being unrecorded. A lease longer than one year that was never recorded falls inside it.",
          "That is the statutory mechanism, not an answer about any particular lease. Whether a specific lease binds a specific buyer turns on facts the section does not resolve — notably whether the purchaser took in good faith, which a tenant's visible possession can bear on. Anyone stating flatly that a lease always survives a sale, or that a buyer can always terminate an unrecorded one, has skipped past the part that decides it.",
        ],
        claims: ["id-recording-act-lease-one-year-carveout"],
      },
      {
        heading: "Rentals are not exempt from disclosure",
        body: [
          "Idaho's property condition disclosure requirement applies to \"any residential real property, including nonowner occupied rental property\" of not less than one nor more than four dwelling units. Owning it as an investment rather than living in it does not remove the obligation.",
          "The Ada County Assessor draws the same line for valuation purposes: residential appraisers handle multi-family up to four units, and apartments move to the commercial team.",
        ],
        claims: ["id-disclosure-required-1-to-4-units", "ada-residential-appraisal-scope"],
      },
      {
        heading: "The remedy for unauthorised occupants is narrower than people expect",
        body: [
          "Idaho Code 6-310A lets a property owner ask the county sheriff to immediately remove people unlawfully occupying a residential dwelling. It is genuinely fast, and it is genuinely narrow — eight conditions must all be met.",
          "Three of them rule out most of what sellers mean by the word squatter. The occupants must not be \"current or former tenants pursuant to a written or oral rental agreement authorized by the property owner.\" They must not be immediate family members of the owner. And there must be no pending litigation about the property between the owner and any known unauthorised occupant.",
          "A holdover tenant, a relative who will not leave, or anyone you are already in litigation with is outside this section entirely. Those go through ordinary eviction. Treating 6-310A as a shortcut around that process is a mistake, and the Ada County Court Assistance Office is explicit that its own eviction forms cover non-payment only.",
        ],
        claims: ["id-6-310a-remove-unauthorized-persons", "ada-eviction-forms-nonpayment-only"],
      },
      {
        heading: "Selling occupied, in practice",
        body: [
          "We buy occupied rentals in Ada County and we do not require a property to be delivered vacant. Where there is a lease we expect to take it subject to its terms, and where there is a deposit we expect it accounted for at closing rather than waved at.",
          "If the tenancy is the problem rather than the property, that is worth saying out loud early. It changes what the property is worth to any buyer, ourselves included.",
        ],
      },
    ],
  },
};

export function guideContentFor(slug: string): GuideContent | undefined {
  return guideContent[slug];
}

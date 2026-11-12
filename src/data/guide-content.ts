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
  "idaho-seller-disclosure-when-selling-as-is": {
    intro: [
      "Selling a house as-is settles one question: the seller will not make repairs. It does not settle what the seller has to tell the buyer. In Idaho those are separate rules, and the second one lives in the Idaho Property Condition Disclosure Act, Idaho Code 55-2501 onward.",
      "This page describes what those statutes, and the federal lead-paint rule that sits beside them, say. It is not legal advice and it is not applied to your situation. If a disclosure question is live in your sale, an Idaho attorney should look at it.",
    ],
    sections: [
      {
        heading: "As-is is a repair term, not a disclosure exemption",
        body: [
          "Idaho Code 55-2504 requires a seller of residential property with one to four dwelling units — including a rental the owner does not live in — to complete a property condition disclosure form. It applies to a sale, an exchange, an installment sale contract, a lease with an option to purchase, any other option to purchase, and a ground lease coupled with improvements.",
          "That list matters for less conventional deals. A seller-financed sale on an installment contract and a lease-option are both covered. The act asks what you know about the house; whether you will fix what you know about is a different conversation, and the act does not make it an excuse.",
        ],
        claims: ["id-disclosure-required-1-to-4-units", "id-disclosure-applies-to-sale-contract-options"],
      },
      {
        heading: "What counts as residential property here",
        body: [
          "For this act, residential real property is real property improved by a building with one to four dwelling units, or an individually owned unit in a structure of any size. It also covers property with a combined residential and commercial use.",
          "Two consequences follow. A condominium unit in a large building is covered, because it is individually owned. A building of five or more units sold whole falls outside this definition — which is this act's line only, and says nothing about how lenders, the Census or other statutes classify the same building. Our [multifamily page](/commercial/multifamily) deals with where that line moves.",
        ],
        claims: ["id-disclosure-residential-definition"],
      },
      {
        heading: "Sixteen exemptions, and as-is is not one of them",
        body: [
          "Idaho Code 55-2505 lists sixteen kinds of transfer the act does not reach. They include court-ordered transfers, several foreclosure-related transfers, transfers by a fiduciary administering an estate, guardianship, conservatorship or trust, transfers from one co-owner to another, transfers to a spouse or lineal relatives, divorce transfers, transfers to or from a government body, relocation-company transfers within a year, and transfers from a decedent's estate.",
          "Three are easy to miss. A sale to a buyer who has lived in the property as a personal residence for a year or more is exempt, which can cover a long-term tenant buying the home they rent. Inherited property is exempt when the seller acquired it by inheritance or devise and has not lived there within the prior year — both conditions, not either. And uninhabited new construction is exempt from the form, except that its sellers must still disclose annexation and city-service status.",
          "Nothing in the sixteen turns on the condition of the house, the price, a cash buyer or the words as-is. If your sale fits none of them, the form applies. The estate exemptions are covered in more depth in [the inherited-house guide](/guides/selling-an-inherited-house-in-idaho), and the foreclosure ones in [the foreclosure guide](/guides/idaho-foreclosure-vs-property-tax-delinquency).",
        ],
        claims: ["id-disclosure-sixteen-exemptions", "id-disclosure-exempt-divorce", "id-disclosure-exempt-foreclosure", "id-disclosure-exempt-estate-fiduciary", "id-disclosure-new-construction-annexation"],
      },
      {
        heading: "What the form asks, and what it is not",
        body: [
          "The form has to let the seller disclose material matters about the property's physical condition, including the source of the water supply, the nature of the sewer system, the condition of the structure including the roof, foundation, walls and floors, and the known presence of hazardous materials or substances.",
          "Water and sewer are not idle questions in Ada County, where the answer changes across a city limit — a private regulated utility in parts of [Boise](/sell-my-house-fast-boise-id), city wells in [Kuna](/sell-my-house-fast-kuna-id), a separate sewer district in [Star](/sell-my-house-fast-star-id). A seller who does not know should say so rather than guess.",
          "The act also fixes what the form is. It has to state that it records conditions and information actually known by the seller, that it is not a warranty of any kind by the seller or the seller's agent, and that it is not a substitute for any inspections. It is a record of knowledge, not a promise about the house.",
        ],
        claims: ["id-disclosure-form-covers-water-sewer-structure", "id-disclosure-actual-knowledge-not-warranty"],
      },
      {
        heading: "Ten days to deliver, three business days to object",
        body: [
          "The seller must deliver a signed and dated copy of the completed form to each prospective buyer, or the buyer's agent, within ten days of accepting the buyer's offer. The buyer acknowledges it by signing, dating and returning a copy.",
          "A buyer who receives the form after entering the purchase agreement may rescind — but only in a written, signed and dated notice delivered within three business days of receiving the form, and only on a specific objection to a disclosure that the notice identifies. A rescinding buyer gets their deposit back. If no signed notice arrives in that window, the right to rescind is waived. It is a right to object to what was disclosed, not a general change of mind.",
        ],
        claims: ["id-disclosure-deliver-within-ten-days", "id-disclosure-rescission-three-days"],
      },
      {
        heading: "When something changes before closing",
        body: [
          "A seller who discovers that information on the statement has changed must amend it before closing. If the statement is amended, the buyer's right to rescind is strictly limited to the amendments — the rest of the form is not reopened.",
          "Two provisions keep this workable. Information that becomes inaccurate because of something that happens after the disclosures were delivered is not a violation. And an item the seller cannot know may be given as an approximation, provided it is clearly marked as one, reasonable, based on the best information available and not used to get around the act.",
        ],
        claims: ["id-disclosure-amend-before-closing", "id-disclosure-later-inaccuracy-and-approximations"],
      },
      {
        heading: "Where a seller's liability sits",
        body: [
          "A seller and the seller's agents are not liable for an error, inaccuracy or omission that was not within the seller's personal knowledge, or that rested on information timely provided by a public agency or a hired inspector and passed on with ordinary care.",
          "That protection has edges. Every disclosure must be made in good faith, which the act defines as honesty in fact. A failure to comply does not by itself undo the sale, but a person who willfully or negligently fails to perform the act's duties is liable for the buyer's actual damages. And the act expressly does not limit any duty to disclose that arises elsewhere in the Idaho Code or under Idaho common law — so being exempt from the form is not permission to conceal a known defect.",
        ],
        claims: ["id-disclosure-no-liability-outside-personal-knowledge", "id-disclosure-good-faith-honesty-in-fact", "id-disclosure-failure-actual-damages", "id-disclosure-other-duties-preserved"],
      },
      {
        heading: "Deaths, crimes and neighbours",
        body: [
          "Idaho treats some facts as psychologically impacting a property rather than physically affecting it: a suspected or actual suicide, homicide or felony at the property that had no effect on its physical condition, an occupant's disease that is highly unlikely to be transmitted through living in the home, and a registered or suspected sex offender living at or near the property. No cause of action arises against an owner or the owner's representative for not disclosing those facts.",
          "The limit is in the definition. A felony that did affect the property's physical condition or environment is not inside it. And if a buyer making a bona fide offer says in writing that this information matters to the decision, the owner's representative must ask the owner and, with the owner's consent and consistent with privacy law, report what is found — or tell the buyer the information will not be disclosed.",
        ],
        claims: ["id-psych-impacted-no-cause-of-action", "id-psych-impacted-written-request"],
      },
      {
        heading: "Houses built before 1978: the federal lead-paint rule",
        body: [
          "A separate federal rule applies on top of the Idaho form. For housing built before 1978, the seller must, before the buyer is bound by the contract, give the buyer an EPA-approved lead hazard pamphlet and disclose any known lead-based paint or lead-based paint hazards, along with any records or reports the seller has. The rule does not require the seller to test or remove anything.",
          "The buyer must also be allowed 10 days to have a lead-based paint risk assessment or inspection done, unless both sides agree in writing to a different period, and the buyer can waive it in writing. The federal rule has its own exceptions — sales at foreclosure, housing for the elderly or people with disabilities, and 0-bedroom dwellings unless a child under six lives or is expected to live there. Idaho's exemptions for estates, inheritances or as-is sales do not carry over to it.",
        ],
        claims: ["fed-lead-paint-pre-1978-seller-disclosure", "fed-lead-paint-ten-day-evaluation"],
      },
      {
        heading: "What this means when you sell to us",
        body: [
          "When we buy a house as-is, as-is means we price the work rather than asking you to do it. It does not mean you stop telling us what you know, and we would not ask you to. We still expect the disclosure the law requires, and we still inspect.",
          "A defect you disclose is a cost we can put a number on. A defect nobody mentioned is the thing that turns a closed sale into a dispute. When we make an offer we show the value we used, the work we think the property needs, our holding costs and the margin we run on, so you can see exactly where a disclosed problem landed in the number.",
        ],
        claims: [],
      },
    ],
  },
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

  "selling-a-manufactured-home-in-idaho": {
    intro: [
      "A manufactured home in Idaho is one of two legally different things, and which one it is decides almost everything about selling it: whether you transfer a title or a deed, who will lend against it, how it is taxed, and whether it can be moved at all.",
      "The conversion from personal property to real property is a filing. The reversal is not. This page describes what the Idaho statutes say. It is not legal advice and it is not applied to your situation.",
    ],
    sections: [
      {
        heading: "The three-factor test, and the statute that overrides it",
        body: [
          "Idaho decides whether something is real or personal property with a three-factor test — annexation, adaptation and intent. An item satisfying all three is a fixture, and therefore real property. That is the general rule for anything attached to land.",
          "Manufactured homes get their own statute instead, and its conditions are specific rather than a matter of judgement. Under Idaho Code 63-304 a manufactured home may constitute real property only if the running gear is removed AND it becomes permanently affixed to a foundation on land the owner owns or is buying — or leases under qualifying financing — AND the owner records a statement of intent to declare it real property with the county recorder.",
          "All of those, not any of them. A home sitting on a permanent foundation with its running gear still attached has not converted. Nor has one where nothing was ever recorded, however permanent it looks.",
        ],
        claims: ["ada-fixture-three-factor-test", "id-manufactured-home-becomes-real-property"],
      },
      {
        heading: "What changes the moment it is declared real property",
        body: [
          "Once the declaration is made, county assessors must treat the home as any other site-built residence, and lending institutions are permitted to treat it as real property.",
          "That second half is usually the reason owners do it. Financing is the practical difference between the two states: a home that is personal property is chattel, and the lending available against chattel is a different and generally worse market than mortgage lending. A buyer's ability to finance is a seller's problem as much as a buyer's.",
          "Assessment is a separate question from legal character, and the two are easy to conflate. Idaho requires manufactured homes to be assessed as other residential housing with the assessment entered on the property roll — but that is a rule about how value is worked out, not a statement that the home is real property. Do not read it as making the distinction unimportant.",
        ],
        claims: ["id-manufactured-home-treated-as-site-built", "id-manufactured-homes-assessed-as-residential"],
      },
      {
        heading: "Converting is a filing. Reversing it needs everyone's permission",
        body: [
          "This is the part that surprises people, and it is worth understanding before the declaration is made rather than after.",
          "Once converted, the home is deemed a fixture and an improvement to the land. Physical removal is then prohibited without the consent of every person or entity holding an interest in the real property or title to any estate in it — and to find out who that is, the homeowner must obtain a title report from a title insurance company. Owners of rights-of-way, easements and subsurface rights are excluded from the consent requirement; a lender holding a deed of trust is not.",
          "\"Physical removal\" is defined broadly. It includes separating the home from its foundation system, except temporarily for repair or improvement. So the restriction reaches work an owner would not naturally describe as removing the house.",
          "There is also a notice requirement: at least thirty days' written notice to the county assessor before removal, and the assessor must require written evidence that the necessary consents were obtained.",
          "None of this makes conversion a bad idea. It makes it a decision rather than a formality, and one whose cost falls at a different time from its benefit.",
        ],
        claims: ["id-manufactured-home-removal-requires-consent", "id-manufactured-home-removal-notice-and-taxes"],
      },
      {
        heading: "What to establish before you list, or before you call anyone",
        body: [
          "The first question is not what the home is worth. It is which of the two things you own, because the answer changes who the buyer pool is.",
          "If a statement of intent was recorded with the county recorder, the home is real property and sells with the land under a deed. If it was not, you are selling a titled chattel, and the transaction runs through a title rather than a deed — regardless of how permanently the home is sitting there.",
          "Where an owner is not sure, the county recorder's records and the assessor's treatment of the parcel are the places that answer it, and a title company can tell you quickly. It is worth resolving before anything else, because almost every other question about the sale depends on it.",
        ],
        claims: ["id-manufactured-home-becomes-real-property", "id-manufactured-home-removal-requires-consent"],
      },
    ],
  },

  "selling-land-or-acreage-in-ada-county": {
    intro: [
      "The first question a buyer asks about land is not how big it is. It is what it can become — and in Ada County that is decided by water, by irrigation, by who owns the road and by which authority governs the parcel. Two neighbouring pieces of ground can have very different answers.",
      "This page describes what Idaho statutes and Ada County's own records say. It is not legal advice and it is not applied to your parcel, which is specific and should be looked at on its own facts.",
    ],
    sections: [
      {
        heading: "Water decides what the ground can become, and a domestic well is smaller than people think",
        body: [
          "Idaho defines domestic water use as use for homes, camps, campgrounds and livestock, including irrigation of up to half an acre, provided total use does not exceed 13,000 gallons a day. That is the ordinary domestic right.",
          "The exclusions are the part that governs development. The definition expressly excludes mobile home and RV parks, apartments, condominiums and similar multiple-dwelling developments, subdivisions, and commercial or business uses. So a domestic well does not carry any of those — not because someone refused permission, but because the use falls outside the definition the right rests on.",
          "And a subdivision arrives sooner than most sellers expect. For these statutes a subdivision is a tract divided into five or more lots, parcels or sites for sale or building development. Five. A parcel that supports one house comfortably may support no part of a development, and the difference is a water question before it is a planning one.",
        ],
        claims: ["id-domestic-water-13000-gpd", "id-domestic-water-exclusions", "id-water-subdivision-five-lots"],
      },
      {
        heading: "Irrigation is a separate system, with its own owners",
        body: [
          "Domestic water and irrigation water are different things carried by different infrastructure, and on Ada County ground the irrigation side is unusually crowded. The county's own irrigation districts map identifies twenty-seven separate entities operating in the county — irrigation districts, ditch companies, lateral associations and water users' associations.",
          "Which one matters to a parcel depends entirely on where it sits. Settlers Irrigation District delivers to 13,187 acres across western Ada County — the West Boise, Meridian and South Eagle areas. The Boise Project Board of Control is the operating agent for five separate districts: Boise-Kuna, Big Bend, Nampa & Meridian, New York and Wilder.",
          "One fact surprises nearly everyone. Title to the Boise Project's transferred works — Diversion Dam, the New York Canal, the Lake Lowell embankments and roughly 1,500 miles of canals, laterals and drains — remains with the United States. If a lateral crosses the parcel, the question of who you are dealing with is not rhetorical, and the answer is not always a local body.",
        ],
        claims: ["ada-27-irrigation-entities", "settlers-district-coverage", "boise-project-five-districts", "boise-project-federal-title"],
      },
      {
        heading: "You almost certainly do not control the road",
        body: [
          "Idaho permits only one countywide highway district to operate in a county whose electorate has voted to form one, and [Ada County](/sell-my-house-fast-ada-county) has one. The consequence is unusual and catches people who have owned property in other states.",
          "A city inside that district may not maintain or supervise city highways, and may not levy taxes for their construction, repair or maintenance. The district is responsible for the design, construction, reconstruction and maintenance of city rights-of-way and their curbs, gutters, culverts and sidewalks. Ada County Development Services controls no roadway infrastructure within the county at all.",
          "So an access question, an approach question or a frontage question is a highway district matter, not a city or county one — whichever city the parcel sits in or next to.",
        ],
        claims: ["achd-one-district-per-county", "achd-city-highway-powers-abolished", "achd-responsibility-within-cities", "achd-is-ada-district"],
      },
      {
        heading: "Septic, floodplain and boundaries are three more authorities again",
        body: [
          "Central District Health's Environmental Health Division permits septic systems, reviews land development applications and verifies the location of shallow injection wells across the county. That is a health authority, separate from both the city and the highway district.",
          "Floodplain is separate again. Any development within the floodplain in Ada County requires a Floodplain Development Permit, and the county adopted new FEMA Flood Insurance Rate Maps in June 2020 — so a map a seller remembers may not be the map in force. Boise participates in the National Flood Insurance Program because of flood threats from the Boise River, the foothills gulches and several intermittent stream channels. In Star, development in certain flood zones requires a Flood Plain Development Permit under the city's own Flood Hazard Ordinance.",
          "On boundaries, Kuna's guidance is the plainest statement of something true everywhere in the county: the best way to determine property lines is a professional survey. The Assessor maintains parcel ownership, land and improvement characteristics and parcel boundaries in its records, and those records are a mapping layer rather than a survey. On acreage, where a fence has stood for decades and a lateral runs somewhere near a line, that distinction is where disputes live.",
        ],
        claims: ["ada-septic-authority-cdh", "ada-floodplain-development-permit", "ada-fema-firm-adopted-2020", "boise-nfip-flood-sources", "star-flood-zone-building-permit-question", "kuna-property-lines-survey-guidance", "ada-assessor-maintains-parcel-gis"],
      },
      {
        heading: "Which authority governs the parcel is itself a question",
        body: [
          "Ada County uses Areas of City Impact — unincorporated land planned in conjunction with an adjacent city. That arrangement covers most unincorporated residents: 78.8 per cent of them, about 50,143 people, live inside one.",
          "For a seller that means unincorporated ground is often being planned by a city it does not sit in, and the comprehensive plan that shapes what it can become may be that city's rather than the county's. Most of the residents living outside any Area of City Impact are in the planned communities — Avimor, Cartwright Ranch, Dry Creek Ranch and Hidden Springs — which run on their own frameworks again.",
          "Ada County's engineering and surveying division reviews preliminary plats, drainage plans, private roads, hillside applications, floodplain permits and property boundary adjustments for unincorporated ground. Inside a city, the city's own planning department does the equivalent work under its own ordinances.",
        ],
        claims: ["ada-area-of-city-impact", "ada-planned-communities-outside-aci", "ada-engineering-scope-unincorporated"],
      },
      {
        heading: "What this means if you are selling",
        body: [
          "The value of land in this county tracks what it can become, and what it can become is a stack of separate answers — water right, irrigation entity, highway district, health district, floodplain, and whichever authority actually governs the parcel. Nobody holds all of those in one place, which is why land takes longer to price than a house does.",
          "We look at ground with complications: access issues, easements, floodplain, irrigation crossings, parcels without a clean boundary, and land where a previous plan fell over. We buy with our own capital.",
          "We will not tell you what your land is worth. We will tell you what we would pay and show the reasoning, including which of these constraints we think binds hardest on your parcel.",
        ],
        claims: ["id-homestead-one-acre-limit", "ada-area-of-city-impact"],
      },
    ],
  },

  "selling-a-house-during-a-divorce-in-idaho": {
    "intro": [
      "Yes, a house can be sold while an Idaho divorce is underway, but if it is community real estate, Idaho Code 32-912 says neither spouse may sell, convey or encumber it unless the other joins in signing the sale agreement and the deed. Whether the house is community or separate property is set by Idaho Code 32-903 and 32-906, and once a case is filed the court can be asked for temporary orders or an injunction that bear on the property.",
      "This page describes what Idaho statutes and the Idaho Rules of Family Law Procedure say. It is not legal advice and it is not applied to your situation. Whether your house is community or separate property, and whether it can be sold now, are questions for an Idaho family law attorney who has seen your documents."
    ],
    "sections": [
      {
        "heading": "For community real estate, both spouses sign the contract and the deed",
        "body": [
          "Idaho Code 32-912 gives each spouse the right to manage and control community property, and lets either one bind it by contract — with one exception that matters for a house. The statute says \"neither the husband nor wife may sell, convey or encumber the community real estate unless the other joins in executing the sale agreement, deed or other instrument of conveyance by which the real estate is sold, conveyed or encumbered\".",
          "Two details in that sentence are easy to miss. It names the sale agreement, not only the deed, so the requirement reaches the purchase contract as well as the closing documents. And it covers encumbering the real estate, not only selling it.",
          "The same section has one stated alternative to both signatures: a spouse \"may by express power of attorney give to the other the complete power to sell, convey or encumber community property, either real or personal.\" The word the statute uses is express. Whether a particular power of attorney is sufficient for a particular closing is a question for your attorney and the title company handling the sale.",
          "The statute does not say what happens to a contract one spouse signs alone, and this page does not either. If that has already happened, it is a question for counsel."
        ],
        "claims": [
          "dv-both-spouses-join-community-real-estate",
          "dv-power-of-attorney-exception"
        ]
      },
      {
        "heading": "Whether the house is community or separate property is set by statute",
        "body": [
          "The signature rule in 32-912 is written for community real estate, so the first question is which kind of property the house is. Idaho answers it in two statutes that have to be read together.",
          "Idaho Code 32-903 lists what is a spouse's separate property: property \"owned by him or her before marriage, and that acquired afterward by either by gift, bequest, devise or descent, or that which either he or she shall acquire with the proceeds of his or her separate property\". That property, the statute says, \"shall remain his or her sole and separate property.\"",
          "Idaho Code 32-906(1) then says \"All other property acquired after marriage by either husband or wife is community property.\" The word other is doing real work — it means property outside the 32-903 categories. Read without 32-903, the sentence is easy to misread as saying everything bought during the marriage is community, which is not what it says.",
          "The same subsection adds a rule about income that surprises people: the income, \"including the rents, issues and profits, of all property, separate or community, is community property\" unless the deed by which the property was acquired, or a written agreement of both spouses specifically so providing, says otherwise. That matters for anyone with a rental, but how it applies to a given property is not something a statute summary can settle.",
          "These sections state categories. They do not answer what happens when a house bought before marriage was refinanced, paid down with wages earned during the marriage, or re-deeded, and this page does not try to. Those are exactly the facts an attorney needs to see."
        ],
        "claims": [
          "dv-separate-property-defined",
          "dv-community-property-default"
        ]
      },
      {
        "heading": "Deeds between spouses, trusts and written agreements can change the picture",
        "body": [
          "Three other provisions bear on who owns the house and who signs, and each is narrower than it first looks.",
          "A deed from one spouse to the other. Idaho Code 32-906(2) says property conveyed by one spouse to the other \"shall be presumed to be the sole and separate estate of the grantee and only the grantor spouse need execute and acknowledge the deed\", notwithstanding 32-912. It is a presumption — the statute's own word — not a final answer, and the same subsection says income from that property is not the grantee's separate property unless the deed specifically says so.",
          "A house held in a revocable trust. Idaho Code 32-906A says community property a couple transfers into a revocable trust that meets the section's conditions stays community property during the marriage \"unless the trust otherwise expressly provides.\" It also says the section does not stop the trustee \"from conveying any trust property, real or personal, in accordance with the provisions of the trust without the consent of the husband or wife unless the trust expressly required the consent of one or both spouses.\" For a trust-held house, the trust document itself is where the signing question is answered.",
          "A written marriage settlement agreement. Idaho Code 32-916 says spouses' property rights are governed by the community property chapter \"unless there is a marriage settlement agreement entered into during marriage containing stipulations contrary thereto\", and 32-917 says such contracts \"must be in writing, and executed and acknowledged or proved in like manner as conveyances of land\". If you signed one, it belongs on the table when anyone looks at the house."
        ],
        "claims": [
          "dv-interspouse-deed-presumed-separate",
          "dv-revocable-trust-community",
          "dv-marriage-settlement-overrides-chapter"
        ]
      },
      {
        "heading": "Once a case is filed, the court can be asked to make orders about the property",
        "body": [
          "Idaho divorce cases run under the Idaho Rules of Family Law Procedure, published by the Idaho Supreme Court. Three of those rules touch the house directly.",
          "Rule 504 covers motions for temporary orders, made while the case is pending. It contemplates a motion \"requesting a temporary order to exclude a party from a residence, to divide community property, or to order payment of debt and expenses,\" and requires that motion to \"state the specific relief requested, including the proposed division of property\". A temporary order is something a party asks for by motion; the rule does not make one automatic.",
          "Rule 506 covers injunctions and restraining orders. Among the grounds on which it says a preliminary injunction may be granted is \"when it appears, by affidavit, that the responding party is about to remove or to dispose of the responding party's property with intent to defraud the moving party\". That ground is tied to intent to defraud, and it is one of several grounds the rule lists; it is not a general ban on selling.",
          "Rule 401 sets mandatory disclosure in contested cases. Unless the spouses have a written agreement disposing of all property issues, or no property is at issue, each must give the other copies of \"all deeds, deeds of trust, purchase agreements, escrow documents, settlement sheets, and all other documents that disclose the ownership, legal description, purchase price, and encumbrances of all real property owned by any party\". A purchase agreement for the house is one of the documents named.",
          "Whether any order already exists in your case, and what it says, is something only the case file and your attorney can tell you. If an order is in place, it governs, and a buyer and title company will need to know about it."
        ],
        "claims": [
          "dv-irflp-temporary-order-divide-property",
          "dv-irflp-injunction-dispose-property",
          "dv-irflp-401-disclose-deeds"
        ]
      },
      {
        "heading": "How a divorce decree divides the house",
        "body": [
          "If the spouses do not sell first, the house is dealt with in the decree. Idaho Code 32-712 directs that community property \"must be assigned by the court in such proportions as the court, from all the facts of the case and the condition of the parties, deems just,\" and that \"Unless there are compelling reasons otherwise, there shall be a substantially equal division in value, considering debts, between the spouses.\"",
          "That is not a rule that every asset is split down the middle. The statute says substantially equal in value, considering debts, and it lists factors that \"may bear upon whether a division shall be equal, or the manner of division,\" including the duration of the marriage, any antenuptial agreement, each spouse's needs and earning capability, and retirement benefits. The list is expressly not exhaustive.",
          "For the home itself, 32-712 gives the court several options. A homestead selected from community property \"may be assigned to either party, either absolutely, provided such assignment is considered in distribution of the community property, or for a limited period, subject in the latter case to the future disposition of the court; or it may be divided or be sold and the proceeds divided.\" A homestead selected from one spouse's separate property \"must be assigned to the former owner of such property, subject to the power of the court to assign it for a limited period to the other spouse.\"",
          "So a sale is one of the outcomes the statute names, not the only one. Which one a court chooses in a particular case is not something this page, or any page, can predict."
        ],
        "claims": [
          "dv-decree-substantially-equal-division",
          "dv-decree-homestead-assign-or-sell"
        ]
      },
      {
        "heading": "Selling to an outside buyer still needs the seller disclosure form",
        "body": [
          "Idaho requires a seller of residential property with one to four dwelling units to complete a property condition disclosure form unless the transfer is exempt. One of the listed exemptions in Idaho Code 55-2505 is for divorce — but read it closely. It covers \"A transfer between spouses or former spouses as a result of a decree of divorce, dissolution of marriage, annulment, or legal separation or as a result of a property settlement agreement incidental to\" one.",
          "That exemption is for a transfer between the spouses, such as one spouse deeding the house to the other under the decree. A divorcing couple selling the house to a third party is not exempt on that ground, and should expect to complete the form. The [seller disclosure guide](/guides/idaho-seller-disclosure-when-selling-as-is) covers what the form asks and the deadlines that follow it."
        ],
        "claims": [
          "id-disclosure-required-1-to-4-units",
          "id-disclosure-exempt-divorce"
        ]
      },
      {
        "heading": "What the county sees when ownership changes",
        "body": [
          "Whether the house is sold to a buyer or deeded from one spouse to the other, the change of ownership ends up in the county record. The Ada County Recorder's Office maintains all documents related to property ownership in the county, and under Idaho Code 31-2419 recorded documents are open to public inspection.",
          "The property-tax homeowner's exemption is also tied to ownership. Ada County's rule is that once the exemption is approved, an owner only needs to reapply \"if you move or if ownership of the property changes.\" A spouse who keeps the house under a new deed, or one who moves out, should check where the exemption stands rather than assume it carried over."
        ],
        "claims": [
          "ada-recorder-maintains-ownership-documents",
          "ada-homeowners-exemption-deadline"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy homes in Ada County with our own capital, in any condition, and the purchase closes through a local title company on a date the sellers choose; a three-week close is realistic. In a divorce that can matter when both spouses want the house sold and settled, and both are ready to sign. You can read [how it works](/how-it-works) or [contact us](/contact).",
          "What we cannot do is solve the legal questions above, and we will not try. If one spouse does not agree to sell, if an order in the case restricts the property, or if the house's character is disputed, those come first and they belong with your attorneys. And if the house is in good shape and there is time to list it, the open market will often bring a higher price; when that is the better route for you, we would rather say so."
        ]
      }
    ]
  },

  "liens-and-judgments-when-selling-in-idaho": {
    "intro": [
      "Nothing in the Idaho statutes on this page forbids selling a house that has a lien or judgment against it. What those statutes do set out is how each kind of lien attaches and how it ends: property taxes are a first lien discharged only by payment or cancellation; most recorded judgment liens run ten years from the judgment unless satisfied or renewed; a mechanic's lien stops binding the property six months after filing unless a court action to enforce it is started or a payment or credit extension is endorsed on the record; and the IRS releases a federal tax lien within 30 days of full payment, or can discharge it from a specific property.",
      "This page describes what Idaho Code and IRS publications say, quoted from the official sources. It is not legal or tax advice and it is not applied to your situation. If a lien or judgment is on your property, an Idaho attorney, and for a federal tax lien a tax professional, should look at it before you sign anything."
    ],
    "sections": [
      {
        "heading": "How a court judgment becomes a lien on an Idaho house",
        "body": [
          "A money judgment and a lien on your house are not the same thing in Idaho. Under Idaho Code 10-1110, a transcript or abstract of a judgment may be recorded with the recorder of any county, and from the time of that recording, and not before, the judgment becomes a lien on the debtor's real property in that county. The lien reaches real property not exempt from execution that the debtor owns at the time, and property acquired afterwards until the lien expires.",
          "Two things follow from that wording. The lien is county by county: recording in one county does not create a lien on property in another. And the lien attaches only to property not exempt from execution. Idaho's homestead exemption from creditors is a separate statute, capped at $175,000 under Idaho Code 55-1003. How that exemption and a recorded judgment interact in a voluntary sale is not something this statute answers, and it is exactly the kind of question to put to an attorney.",
          "In Ada County, the Recorder's Office maintains the documents related to property ownership, and recorded documents are open to public inspection. A recorded abstract of judgment is part of that record."
        ],
        "claims": [
          "ln-judgment-lien-arises-on-recording",
          "id-homestead-creditor-175k",
          "ada-recorder-maintains-ownership-documents"
        ]
      },
      {
        "heading": "How long a judgment lien lasts, and how it can be renewed",
        "body": [
          "For most judgments, Idaho Code 10-1110 says the lien continues ten years from the date of the judgment, unless the judgment is satisfied sooner or enforcement is stayed on appeal. The clock runs from the date of the judgment, not from the date it was recorded.",
          "Ten years is not necessarily the end. Under Idaho Code 10-1111, before the lien or any renewal of it expires, and unless the judgment has been satisfied, the court that entered the judgment may on motion enter an order renewing it. Once that order is recorded the way the original was, the lien continues ten years from the date of the renewal order, and it keeps the original judgment's date and priority. Because the statute allows renewal of a renewal, an old judgment on the record may or may not still be live. That is a question for the court file, not a guess.",
          "Two judgment types run on different clocks. A crime-victim restitution order recorded as a judgment under Idaho Code 19-5305 creates a lien that continues twenty years from the date of the judgment. Child-support judgments have their own rule, covered next."
        ],
        "claims": [
          "ln-judgment-lien-ten-years",
          "ln-judgment-renewal-order",
          "ln-judgment-lien-restitution-twenty-years"
        ]
      },
      {
        "heading": "Child-support liens run on two separate tracks",
        "body": [
          "The first track is the recorded court decree. Under Idaho Code 10-1110, a recorded divorce or separate-maintenance decree that provides for periodic child support or alimony is a lien only for payments that are delinquent or not made when due, not for the whole future obligation. A lien arising from a delinquency under an Idaho child-support judgment continues until ten years after the death or emancipation of the last child owed support, unless the judgment is renewed, satisfied or stayed on appeal.",
          "The second track is administrative. Idaho Code 7-1206 provides that where the Department of Health and Welfare is or has been providing child-support enforcement services, a delinquency creates a lien that arises on and attaches to the obligor's real and personal property. Once the amount equals at least 90 days of support or $2,000, whichever is less, the lien may be perfected by filing with the Idaho Secretary of State. A perfected lien takes in later delinquencies, and it is automatically released when the delinquency reaches a zero balance or is otherwise satisfied.",
          "The practical difference is where the record sits. The decree lien is recorded with a county recorder; the department lien is filed with the Secretary of State. A search of county records alone may not show the second kind."
        ],
        "claims": [
          "ln-judgment-lien-child-support",
          "ln-child-support-department-lien"
        ]
      },
      {
        "heading": "Mechanic's liens: who can file, by when, and for how long",
        "body": [
          "Idaho Code 45-501 gives a lien to every person who performs labor on, or furnishes materials for, the construction, alteration or repair of a building, and to licensed engineers and surveyors under contract for professional services on an improvement. Contractors and subcontractors in charge of the work are treated as the owner's agent for this purpose. In plain terms, the statute's wording reaches people the owner did not hire directly, such as a subcontractor or supplier. Whether an owner who has already paid the general contractor has a defence is not answered by this section, and it is a question for an attorney.",
          "The claimant has a deadline. Idaho Code 45-507 says the claim must be filed for record with the recorder of the county where the property sits within 90 days after the claimant completed the labor or services or furnished the materials. It must be verified by oath, and a copy must be served on the owner, personally or by certified mail, no later than five business days after filing.",
          "The lien also has a shelf life. Under Idaho Code 45-510, a mechanic's lien binds the property for no longer than six months after the claim is filed, unless proceedings to enforce it are started in a proper court within that time, or unless a payment on account or an extension of credit is endorsed on the record of the lien. If the claimant obtains a final judgment on the lien, that judgment's lien ends ten years after it becomes final. A claim that no longer binds the property can still appear on the record, so whether a suit was filed is worth checking rather than assuming.",
          "Two more provisions matter at a sale. Idaho Code 45-506 makes these liens preferred to mortgages and other encumbrances that attached after the work or materials began, so priority looks back to when the job started, not when the claim was filed. And Idaho Code 45-518 allows a mechanic's lien of record to be released by posting a surety bond under sections 45-519 through 45-524; the statutory bond form in 45-519 is written for one and a half times the claim."
        ],
        "claims": [
          "ln-mechanics-lien-who-can-claim",
          "ln-mechanics-lien-ninety-day-filing",
          "ln-mechanics-lien-six-month-duration",
          "ln-mechanics-lien-priority",
          "ln-mechanics-lien-bond-release"
        ]
      },
      {
        "heading": "HOA and condominium assessment liens",
        "body": [
          "Idaho's Homeowner's Association Act defines a homeowner's association as a residential association whose membership is based on owning an interest in real property and which has authority, under recorded covenants, bylaws or other governing documents, to assess and record liens against its members' property. Idaho Code 55-3207 then lets an association levy an assessment against a lot for the reasonable costs of maintaining common areas it owns and maintains.",
          "To claim a lien for that assessment, the association must file a verified claim in the county where the lot sits, stating the amount due after credits and offsets, and within five business days of recording must serve a copy on the owner by personal delivery or certified mail. Once recorded, the claim automatically accumulates later unpaid assessments. The board may enforce the lien, and the association may instead sue for a money judgment without giving up the lien, or take a deed in lieu of foreclosure. Section 55-3207 ties the lien to common-area maintenance assessments; it does not, on its face, say whether fines can be liened, and this page does not either.",
          "For a seller, the most useful provision is Idaho Code 55-3205. On a written request from the member or the member's agent, the association must provide a statement of the member's assessment account within five business days, listing all outstanding assessments, charges and fees, including any transfer fee, late fees and interest. The association is bound by the amounts in that statement, and it may not charge for it.",
          "Condominiums are governed by a different statute. Under Idaho Code 55-1518, a condominium assessment becomes a lien when the management body records a notice of assessment with the county recorder. Unless it is satisfied and released or enforcement is begun, that lien expires one year after the notice is recorded, and the management body may extend it once, by no more than one additional year, by recording a written extension. Whether a particular community falls under 55-1518, the Homeowner's Association Act, or both is a question an attorney can answer from its recorded documents."
        ],
        "claims": [
          "ln-hoa-definition-lien-authority",
          "ln-hoa-lien-claim-requirements",
          "ln-hoa-lien-enforcement",
          "ln-hoa-statement-of-account",
          "ln-condo-assessment-lien-one-year"
        ]
      },
      {
        "heading": "Property taxes come first and do not expire",
        "body": [
          "Idaho Code 63-206 makes property taxes levied on real property a first and prior lien on that property, discharged only by payment or cancellation of the taxes as the tax title provides. The same section says property tax liens are perpetual and continuous. Unlike a judgment or mechanic's lien, there is no expiry clock to wait out. In Ada County the lien date for real property is January 1, and the County Treasurer is the tax collector for every taxing district, including cities and schools.",
          "Unpaid taxes follow a long but fixed path. If real property with a delinquency is not redeemed within three years from the date of delinquency, the county tax collector must issue a tax deed to the county, but only after a notice of pending issue of tax deed has been given and an affidavit of compliance recorded. After a tax deed issues, the record owner or a party in interest may still redeem until the county commissioners contract to sell or convey the property, and in any event no later than fourteen months from the date the tax deed issued. The [foreclosure and tax-delinquency guide](/guides/idaho-foreclosure-vs-property-tax-delinquency) sets those clocks side by side."
        ],
        "claims": [
          "ln-property-tax-first-lien-perpetual",
          "ada-assessment-market-value-jan-1",
          "ada-treasurer-ex-officio-tax-collector",
          "id-tax-deed-three-year-delinquency",
          "id-tax-deed-redemption-fourteen-months"
        ]
      },
      {
        "heading": "Federal tax liens: release, discharge and subordination",
        "body": [
          "The IRS describes a federal tax lien as the government's legal claim against a taxpayer's property, including real estate, when a tax debt is not paid. It exists after the IRS assesses the liability, sends a Notice and Demand for Payment, and the taxpayer neglects or refuses to pay in time. The IRS may file a public Notice of Federal Tax Lien to alert creditors.",
          "The IRS says paying the debt in full is the best way to get rid of the lien, and that it releases the lien within 30 days after the debt is paid. When full payment is not possible, the IRS distinguishes three tools. A discharge removes the lien from specific property. A subordination does not remove the lien but lets another creditor move ahead of the IRS; Publication 784 describes it as letting a named creditor move its junior position ahead of the United States for the property in the certificate, and the IRS ties it to making it easier to get a loan or mortgage, so it is a refinancing tool rather than a way to clear a lien for a sale. A withdrawal removes the public notice, but the taxpayer is still liable for the amount due.",
          "For a sale, the relevant document is IRS Publication 783. A Certificate of Discharge under Internal Revenue Code section 6325(b) removes the United States' lien from the property named in it, and the application is made on Form 14135. Among the bases the publication describes are a discharge where the liability is partly paid with an amount not less than the value of the government's interest in the property, and a discharge where that interest has no value because debts senior to the federal tax lien exceed the property's fair market value or sale value. The IRS decides whether either applies.",
          "On timing, Publication 783 asks that the application be submitted at least 45 days before the transaction date on which the certificate is needed."
        ],
        "claims": [
          "ln-irs-federal-tax-lien-what-it-is",
          "ln-irs-release-thirty-days",
          "ln-irs-discharge-subordination-withdrawal",
          "ln-irs-subordination-pub-784",
          "ln-irs-discharge-apply-45-days",
          "ln-irs-discharge-partial-payment-or-no-value"
        ]
      },
      {
        "heading": "Where each kind of lien is recorded",
        "body": [
          "The statutes above point to different places. Recorded judgments, mechanic's lien claims, HOA lien claims and condominium notices of assessment are all recorded with the county recorder, which in Ada County keeps property-ownership documents open to public inspection. A child-support lien perfected by the Department of Health and Welfare is filed with the Secretary of State instead. A federal tax lien becomes public when the IRS files its Notice of Federal Tax Lien. An HOA balance can be confirmed in writing through the 55-3205 statement of account, which binds the association to its figures.",
          "Knowing which of these apply before you agree a price is what lets you tell whether the sale can cover them. The arithmetic and the legal effect on your own property are for your attorney and the title company handling the closing, not for this page."
        ],
        "claims": [
          "ln-judgment-lien-arises-on-recording",
          "ln-mechanics-lien-ninety-day-filing",
          "ln-hoa-lien-claim-requirements",
          "ln-condo-assessment-lien-one-year",
          "ada-recorder-maintains-ownership-documents",
          "ln-child-support-department-lien",
          "ln-irs-federal-tax-lien-what-it-is",
          "ln-hoa-statement-of-account"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy houses in Ada County with our own capital, in any condition, and our purchases close through a local title company on a date the seller chooses. A three-week close is realistic for us. A lien does not change any of that, but it can change whether three weeks is realistic for the sale as a whole: if a federal tax lien needs a Certificate of Discharge, the IRS asks for the application at least 45 days before closing. [How it works](/how-it-works) explains the steps on our side.",
          "If you have time and enough equity to cover what is recorded against the house, listing it on the open market will often net more than selling to a direct buyer. If you want a number to compare against that, [get in touch](/contact)."
        ],
        "claims": [
          "ln-irs-discharge-apply-45-days"
        ]
      }
    ]
  },
};

export function guideContentFor(slug: string): GuideContent | undefined {
  return guideContent[slug];
}

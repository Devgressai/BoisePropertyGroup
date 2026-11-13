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
          "That list matters for less conventional deals. A seller-financed sale on an installment contract and a lease-option are both covered. The act asks what you know about the house; whether you will fix what you know about is a different conversation, and the act does not make it an excuse. The form's permit question has its own guide: [selling a house with unpermitted work in Ada County](/guides/selling-a-house-with-unpermitted-work-in-ada-county).",
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
          "So the honest summary is: usually no court order, unless the will or a formal order says otherwise. Anyone who tells you the first half without the second half is giving you an incomplete picture. If the house still carries a loan, see [inheriting a house with a mortgage](/guides/inheriting-a-house-with-a-mortgage-in-idaho) and, for a reverse mortgage, [what happens when the borrower dies](/guides/reverse-mortgage-after-the-borrower-dies-in-idaho).",
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

  "selling-a-house-in-probate-in-idaho": {
    "intro": [
      "In Idaho, a house in an open estate is sold by the personal representative, and nobody holds that power until a magistrate or district judge has appointed them and letters have been issued. Once appointed, the Idaho Code gives the personal representative an owner's power over estate title, exercisable without a court order — unless the will or an order in a formal proceeding restricts it. The creditor-claim period, which runs four months from the first published notice to creditors, controls when the estate can be closed; the statute does not write it as a condition of the sale.",
      "This page describes what Idaho statutes and Ada County's own pages say. It is not legal advice and does not apply the law to your estate; an Idaho probate attorney should look at yours."
    ],
    "sections": [
      {
        "heading": "Probate is opened in the county where the person lived, not where the house is",
        "body": [
          "Idaho Code 15-3-201 sets venue for the first probate or appointment proceeding \"In the county where the decedent had his domicile at the time of his death.\" Only for someone who was not domiciled in Idaho does the location of property decide it: then venue is \"in any county where property of the decedent was located at the time of his death.\"",
          "In Ada County, probates are a magistrate-court matter. The county's courts page lists probates among the cases magistrate judges hear, and explains that \"because of the comparatively high volume of cases filed in Ada County, magistrate judges serving Ada County are assigned by the Administrative District Judge to hear specific types of cases\" — probates, guardianships and conservatorships being one such assignment. Ada County sits in the Fourth Judicial District of the Idaho State Courts, which also serves Boise, Elmore and Valley counties. Where the estate's house has a mortgage on it, see [inheriting a house with a mortgage in Idaho](/guides/inheriting-a-house-with-a-mortgage-in-idaho)."
        ],
        "claims": [
          "pb-venue-domicile-county",
          "pb-ada-magistrates-hear-probates",
          "pb-fourth-district-ada"
        ]
      },
      {
        "heading": "Informal or formal: the two ways an estate gets a personal representative",
        "body": [
          "Idaho's probate code has an informal track and a formal track. The word that confuses people is \"registrar\". Idaho Code 15-1-307: \"The acts and orders which this code specifies as performable by the registrar will be performed by a magistrate or district judge.\" So informal probate in Idaho still goes through a judge.",
          "On the informal track, the statutes set minimum waiting periods, not processing times. Under 15-3-302 the registrar issues a written statement of informal probate of a will once the required findings are made, \"if at least five (5) days have elapsed since the decedent's death,\" and that informal probate \"is conclusive as to all persons until superseded by an order in a formal testacy proceeding.\" Under 15-3-307 the registrar appoints the applicant as personal representative once \"at least one hundred twenty (120) hours have elapsed since the decedent's death,\" with a delay to 30 days for a nonresident decedent, subject to exceptions. The same section says \"The status of personal representative and the powers and duties pertaining to the office are fully established by informal appointment.\"",
          "The formal track is different in kind. Idaho Code 15-3-401: \"A formal testacy proceeding is litigation to determine whether a decedent left a valid will.\" Separately, an estate can be placed under supervised administration, which 15-3-501 describes as a proceeding \"under the continuing authority of the court,\" with a supervised personal representative who \"is responsible to the court\" and subject to its directions.",
          "There is also an outer limit on starting at all. Subject to exceptions, 15-3-108 provides that no probate or appointment proceeding \"may be commenced more than three (3) years after the decedent's death.\" If the owner died years ago and nobody opened an estate, that section — and its exceptions — is the first thing to raise with an attorney."
        ],
        "claims": [
          "pb-registrar-is-judge",
          "pb-informal-probate-five-days",
          "pb-informal-appointment-120-hours",
          "pb-formal-testacy-litigation",
          "pb-supervised-administration",
          "pb-probate-three-year-limit"
        ]
      },
      {
        "heading": "Who can be appointed, and what happens when several heirs share the right",
        "body": [
          "Idaho Code 15-3-203 sets the order of priority for appointment, whether the proceedings are formal or informal: first, the person with priority under a probated will; then a surviving spouse who is a devisee; other devisees; the surviving spouse; other heirs; and, \"forty-five (45) days after the death of the decedent, any creditor.\"",
          "When several people share a priority — for example, several adult children who are all heirs — \"those of them who do not renounce must concur in nominating another to act for them, or in applying for appointment.\"",
          "And if nobody steps forward, the statute has a fallback. Where a petition has been filed and 60 days pass with no proper person consenting to act, \"the public administrator shall act as personal representative unless and until a proper person consents to act.\" In Ada County, the Treasurer serves as ex officio public administrator, responsible for the estates of people who die with no one to administer them."
        ],
        "claims": [
          "pb-appointment-priority",
          "ada-treasurer-ex-officio-public-administrator"
        ]
      },
      {
        "heading": "Nothing can be signed until letters are issued",
        "body": [
          "Being named executor in a will does not, by itself, give power over the house. Idaho Code 15-3-103: \"to acquire the powers and undertake the duties and liabilities of a personal representative of a decedent, a person must be appointed by order of the court or registrar, qualify and be issued letters. Administration of an estate is commenced by the issuance of letters.\"",
          "Qualifying is its own step. Under 15-3-601, before receiving letters the personal representative files \"any required bond and a statement of acceptance of the duties of the office,\" including an oath to perform those duties according to law. And under 15-3-701, the \"Duties and powers of a personal representative commence upon his appointment.\"",
          "Letters are also how that authority is shown to others. Idaho Code 15-1-305 requires the clerk, on payment of the fees, to issue certified copies of \"letters issued to personal representatives,\" and adds: \"Certificates relating to letters must show the date of appointment.\" Under 15-1-305A, letters, a statement of informal probate, and any deed executed by an appointed personal representative \"may be recorded in the office of the county recorder of the county in which the real property affected\" is located, and from filing they give notice of their contents to everyone. Probate is opened where the person lived; documents affecting the house are recorded where the house is.",
          "We have not found a primary source that sets out what a particular title company will require from a personal representative before insuring a sale, so this page does not guess. Ask the title company handling the closing early, and ask the estate's attorney what the letters do and do not cover."
        ],
        "claims": [
          "pb-letters-required",
          "pb-qualification-before-letters",
          "pb-powers-commence-on-appointment",
          "pb-certified-letters-date",
          "pb-letters-recordable"
        ]
      },
      {
        "heading": "Once appointed, the personal representative can usually sell without a court order — with two limits",
        "body": [
          "Idaho Code 15-3-711 gives an appointed personal representative \"the same power over the title to property of the estate that an absolute owner would have, in trust however, for the benefit of the creditors and others interested in the estate. This power may be exercised without notice, hearing, or order of court.\" Idaho Code 15-3-715 lists the transactions this covers, including \"(23) Sell, mortgage, or lease any real or personal property of the estate\" and disposing of land \"at public or private sale.\"",
          "That list does not stand alone. 15-3-715 opens: \"Except as restricted or otherwise provided by the will or by an order in a formal proceeding and subject to the priorities stated in section 15-3-902 of this code, a personal representative, acting reasonably for the benefit of the interested persons, may properly:\" — so a will can restrict a sale, a formal-proceeding order can restrict it, and the power is to be used reasonably for the people interested in the estate.",
          "15-3-704 states the default the same way: the personal representative proceeds \"without adjudication, order, or direction of the court,\" except as specified or ordered for a supervised personal representative. A formal testacy proceeding does not by itself stop everything either. Under 15-3-401, once a personal representative receives notice of a formal proceeding they \"must refrain from exercising his power to make any further distribution of the estate\" while it is pending; a petitioner may ask for an order restraining the representative's other powers, and absent such an order the proceeding \"has no effect on the powers and duties of a previously appointed personal representative other than those relating to distribution.\" Whether a sale is wise while a formal proceeding is pending is a question for the estate's attorney, not for a buyer.",
          "The buyer's side is covered in 15-3-714: \"A person who in good faith either assists a personal representative or deals with him for value is protected as if the personal representative properly exercised his power.\" That protects the purchaser; it does not loosen the personal representative's own duty to follow the will. The same section keeps restrictions on a supervised personal representative that are endorsed on the letters effective. The inherited-property side of these sections, including why estate sales are exempt from Idaho's seller disclosure form, is covered in [the inherited-house guide](/guides/selling-an-inherited-house-in-idaho)."
        ],
        "claims": [
          "id-pr-power-over-title",
          "id-pr-powers-limited-by-will",
          "pb-pr-may-sell-real-property",
          "pb-pr-proceeds-without-court-order",
          "pb-supervised-administration",
          "pb-formal-testacy-litigation",
          "pb-good-faith-buyer-protected"
        ]
      },
      {
        "heading": "The creditor clock: four months from first publication, three years at the outside",
        "body": [
          "Under Idaho Code 15-3-801, a personal representative \"upon his appointment may publish a notice to creditors once a week for three (3) successive weeks in a newspaper of general circulation in the county,\" requiring creditors to present claims \"within four (4) months after the date of the first publication of the notice or be forever barred.\" A known creditor can be sent written notice, which sets the later of four months after publication or \"sixty (60) days after the mailing or delivery of the notice.\" The text says \"may\": it is framed as something the personal representative can do, not a step the statute requires.",
          "15-3-803 then sets the outer limit. Claims that arose before death are barred unless presented by the earlier of \"three (3) years after the decedent's death\" or the deadline set by the notice. Two carve-outs matter on a house. State tax claims run on their own clock. And \"Nothing in this section affects or prevents: (1) any proceeding to enforce any mortgage, pledge, or other lien upon property of the estate\" — a mortgage or other lien on the house is not cut off by the creditor deadline.",
          "How does this bear on a sale? The sale power in 15-3-711 is not written as conditional on the claim period running out. What the claim period does control is closing the estate: under 15-3-1003 a personal representative may close by sworn statement \"no earlier than six (6) months after the date of original appointment,\" stating, among other things, that \"the time limitation for presentation of creditors' claims has expired.\" Meanwhile the owner's power is held \"in trust however, for the benefit of the creditors,\" and 15-3-715 makes transactions subject to the statutory priority of claims. When to sell relative to the claim period is a decision for the personal representative and their attorney.",
          "While the house sits in the estate, someone is responsible for it. Under 15-3-709 the personal representative may leave real property with the person presumptively entitled to it until possession is needed for administration, but \"shall pay taxes on, and take all steps reasonably necessary for the management, protection and preservation of, the estate in his possession.\""
        ],
        "claims": [
          "pb-creditor-notice-four-months",
          "pb-claims-barred-three-years",
          "pb-close-no-earlier-six-months",
          "id-pr-power-over-title",
          "id-pr-powers-limited-by-will",
          "pb-pr-possession-and-taxes"
        ]
      },
      {
        "heading": "Can a small-estate affidavit be used to sell the house?",
        "body": [
          "Idaho's affidavit procedure is in 15-3-1201, under the Part heading \"Collection of personal property by affidavit.\" Thirty days after death, a person holding debts owed to the decedent, tangible personal property, or instruments such as stock must hand them to a successor who presents an affidavit stating, among other things, that the probate estate's value \"less liens and encumbrances, does not exceed one hundred thousand dollars ($100,000)\" and that no application or petition for a personal representative or for summary administration \"is pending or has been granted in any jurisdiction.\"",
          "The section's text speaks of debts, tangible personal property and instruments; it does not mention real property. Ada County's Court Assistance Office is more direct: the affidavit \"may be used if he or she did not own real estate\" and had personal property under the dollar limit, and \"The affidavit is not filed with the court.\"",
          "One narrower summary route exists where a surviving spouse is the sole devisee or heir. Under 15-3-1205 the spouse may petition, and after notice and hearing the decree \"shall thereafter have the same effect as a formal decree approving or determining distribution.\" It has a real cost: a spouse who elects it \"shall assume and be liable for any and all indebtedness that might be a claim against the estate of the decedent and there will be no administration of the estate of the decedent.\" The three-year limit in 15-3-108 does not apply to proceedings under 15-3-1201 or 15-3-1205."
        ],
        "claims": [
          "pb-small-estate-affidavit-conditions",
          "pb-ada-small-estate-affidavit-no-real-estate",
          "pb-surviving-spouse-summary",
          "pb-probate-three-year-limit"
        ]
      },
      {
        "heading": "Selling during administration, or after distribution to the heirs",
        "body": [
          "An estate does not have to sell the house itself. Under 15-3-907, when property is distributed in kind \"the personal representative shall execute an instrument or deed of distribution assigning, transferring or releasing the assets to the distributee as evidence of the distributee's title to the property.\" 15-3-910 then deals with a sale by the heir who receives it.",
          "A buyer from that heir is protected by 15-3-910: a purchaser for value from a distributee holding a deed of distribution \"takes title free of rights of any interested person in the estate and incurs no personal liability to the estate, or to any interested person, whether or not the distribution was proper or supported by court order.\" That protects the purchaser. It says nothing about what the heir may still owe other heirs or creditors, and it is not a way around the estate's debts.",
          "The Ada County Recorder maintains the documents related to property ownership in the county, and recorded documents are open to public inspection. And whichever route is taken, the homeowner's exemption does not carry over: Ada County requires a new application \"if you move or if ownership of the property changes,\" so whoever ends up owning and living in the house must apply again."
        ],
        "claims": [
          "pb-deed-of-distribution",
          "pb-purchaser-from-distributee-protected",
          "ada-recorder-maintains-ownership-documents",
          "ada-homeowners-exemption-deadline"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy property in Ada County with our own capital, in any condition, and our purchases close through a local title company. We can only sign with someone who has the authority to sell — in an open estate, that means an appointed personal representative with letters. The seller chooses the closing date, and a three-week close is realistic. [How it works](/how-it-works) sets out the steps, or you can [contact us](/contact).",
          "We are often not the best route. If the house is in good shape, the estate is in no hurry and the heirs agree, listing it with an agent will usually net more. If the will restricts a sale, a formal proceeding is pending, or the debts may exceed what the estate holds, the first call should be to the estate's attorney, not to any buyer."
        ],
        "claims": []
      }
    ]
  },

  "how-a-property-sale-closes-in-idaho": {
    "intro": [
      "At an Idaho closing the seller signs a written deed naming the buyer and the buyer's mailing address, the signature is acknowledged before a notary so the deed can be recorded, and the deed is recorded with the recorder of the county where the property sits, which is what protects the buyer against later purchasers and mortgagees. Around that core, Idaho's title insurance statutes regulate the escrow and closing work of title companies, and federal rules decide who reports the sale to the IRS and when tax must be withheld from a foreign seller.",
      "This page describes what Idaho statutes, Ada County and the IRS say. It is not legal or tax advice and it is not applied to your situation. If anything about your sale is in question, an Idaho attorney or a tax professional should look at it."
    ],
    "sections": [
      {
        "heading": "What an Idaho deed has to contain",
        "body": [
          "Idaho Code 55-601 is short. A conveyance of real property \"may be made by an instrument in writing, subscribed by the party disposing of the same, or by his agent thereunto authorized by writing. The name of the grantee and his complete mailing address must appear on such instrument.\" In plain terms: it is in writing, the seller (or an agent authorised in writing) signs it, and the buyer's name and full mailing address are on it.",
          "Notice what the section does not list. The sale price is not among the elements it requires. The statute neither requires a price nor forbids one, and some deeds do recite what was paid. That silence matters later on this page, when we get to whether Idaho sale prices are public.",
          "The words in a deed carry weight of their own. Under Idaho Code 55-612, using the word \"grant\" in a conveyance of a fee simple implies two promises by the seller, \"and none other,\" unless the deed expressly says otherwise: that the seller has not already conveyed the same estate or any interest in it to someone else, and that the estate is free from encumbrances \"done, made or suffered by the grantor, or any person claiming under him.\" The next section, 55-613, defines encumbrances to include \"taxes, assessments, and all liens upon real property.\"",
          "The second promise is narrower than it sounds. It covers encumbrances the seller, or someone claiming under the seller, created or allowed — not every problem the property has ever had. What a particular deed form promises beyond that depends on its own wording, and that is a question for the attorney or title company preparing it."
        ],
        "claims": [
          "cl-deed-writing-subscribed-grantee-address",
          "cl-grant-deed-implied-covenants",
          "cl-encumbrances-include-taxes-liens"
        ]
      },
      {
        "heading": "Why the seller signs in front of a notary",
        "body": [
          "A deed can be valid without being recorded — Idaho Code 55-815 says \"An unrecorded instrument is valid as between the parties thereto and those who have notice thereof.\" But a buyer wants the deed recorded, and recording has a gate. Under Idaho Code 55-805, \"Before an instrument may be recorded, unless it is otherwise expressly provided, its execution must be acknowledged by the person executing it,\" or proved, with the acknowledgment certified substantially as Idaho's notary law in chapter 1, title 51 prescribes. A deed acknowledged in another state or country under that place's laws is also entitled to record.",
          "Idaho's notary law sets what the notary must check. A notary taking an acknowledgment must determine, \"from personal knowledge or satisfactory evidence of the identity of the individual,\" that the person in front of them is who they claim to be and that the signature is theirs (Idaho Code 51-105). The signer must \"appear personally before the notary public\" (51-106).",
          "Personal appearance does not always mean the same room. Idaho Code 51-114A lets a remotely located individual satisfy 51-106 \"by appearing before a notary public by means of communication technology\" — technology that lets the notary and the signer communicate simultaneously by sight and sound — provided the Idaho notary meets the section's identity, record-confirmation and audio-visual recording conditions. The statute permits remote notarisation; whether a particular closing offers it is up to the title company or closing agent handling it."
        ],
        "claims": [
          "cl-unrecorded-valid-between-parties",
          "cl-acknowledgment-required-to-record",
          "cl-notary-acknowledgment-identity",
          "cl-notary-personal-appearance",
          "cl-remote-notarization-satisfies-appearance"
        ]
      },
      {
        "heading": "Recording is what protects the buyer against everyone else",
        "body": [
          "The deed goes to the recorder of the county where the property is, not the city: Idaho Code 55-808 requires instruments to be recorded \"by the county recorder of the county in which the real property affected thereby is situated.\" For a property anywhere in Ada County — Boise, Meridian, Eagle, Kuna, Star, Garden City or unincorporated land — that is the Ada County Recorder, which maintains all documents related to property ownership in the county.",
          "Under 55-809, an acknowledged instrument \"is deemed to be recorded when\" it is deposited in the recorder's office with the proper officer for record. From the time it is filed, 55-811 makes a recorded conveyance \"constructive notice of the contents thereof to subsequent purchasers and mortgag(e)es\" — the compiler's text, odd spelling included.",
          "The reason the order matters is in 55-606 and 55-812. A conveyance is conclusive against the seller and everyone later claiming under the seller, \"except a purchaser or encumbrancer, who in good faith, and for a valuable consideration, acquires a title or lien by an instrument or valid judgment lien that is first duly recorded.\" And 55-812 makes an unrecorded conveyance (other than a lease of one year or less) void against a later good-faith purchaser or mortgagee for value whose own conveyance is recorded first. Whether any particular person counts as a good-faith purchaser is a fact question for counsel; the mechanism is what the statutes describe.",
          "Ada County publishes its recording fees. Any deed transferring or affecting ownership falls in a predictable-fee category of $15.00 covering the first 30 pages, with $3.00 per page after that, and a document that cannot take a recording label needs a cover sheet that may increase the fee. That is the county's fee for recording the deed document itself — it says nothing about who pays it, which is a matter for the purchase contract. Redacting personal identifying information such as Social Security numbers before recording is the submitter's responsibility, not the Recorder's."
        ],
        "claims": [
          "cl-record-in-county-where-situated",
          "ada-recorder-maintains-ownership-documents",
          "cl-deemed-recorded-on-deposit",
          "cl-recorded-conveyance-constructive-notice",
          "cl-bona-fide-purchaser-first-recorded",
          "id-recording-act-lease-one-year-carveout",
          "cl-ada-deed-recording-fee",
          "ada-recorder-pii-redaction-is-submitter-duty"
        ]
      },
      {
        "heading": "Will my sale price become public?",
        "body": [
          "Idaho's recorded documents are open. Idaho Code 31-2419 requires that \"All books of record, maps, charts, surveys and other papers on file in the recorder's office, must, during office hours, be open for the inspection of any person who may desire to inspect them, and may be inspected without charge.\" Ada County cites the same section for its statement that recorded documents are open for public inspection.",
          "What is not there, as a rule, is the price. The deed statute does not require one, and Idaho is described by its own county assessors as a non-disclosure state. Canyon County's assessor puts it this way: \"Since Idaho is a non-disclosure state, the Assessor's office depends heavily on the public to provide sales information when property is bought and sold.\" That is Canyon County describing Idaho law generally, not an Ada County statement.",
          "So the accurate framing is not that Idaho hides sale prices. The record of who owns what is public and free to inspect; the price is simply not a required part of the deed. One Ada County detail is worth knowing: the Recorder currently blocks deeds, among other document types, from viewing or downloading online, and asks that copy requests go to the office directly. The record is still public — the online view of deeds is what is restricted, and the county calls that restriction current, so it can change."
        ],
        "claims": [
          "cl-recorder-records-open-without-charge",
          "ada-recorder-maintains-ownership-documents",
          "cl-deed-writing-subscribed-grantee-address",
          "cl-idaho-non-disclosure-state",
          "cl-ada-deeds-blocked-online"
        ]
      },
      {
        "heading": "Who handles the money and the paperwork",
        "body": [
          "Idaho regulates a title company's closing work as part of the business of title insurance. Idaho Code 41-2704 applies the title insurance chapter to title insurers, title agents and everyone in the business, and defines that business to include a title insurer's or agent's \"handling of escrows, settlements or closing incident to any contract or policy of title insurance.\" Idaho's separate Escrow Act does not apply to title insurance companies with a valid certificate of authority or to title insurance agents \"having a valid license as a title insurance agent, issued by the Idaho department of insurance\" (Idaho Code 30-905). The same section also exempts, among others, Idaho attorneys performing professional duties (unless running a separate escrow business) and real estate licensees acting in the course of sales they handle.",
          "Escrow officers are covered by statute too. Under 41-2711 an escrow officer is an officer or employee of a title agent whose duties include \"handling escrows, settlements, closings, and funds related thereto.\" Each title agent must file its escrow officers' names with the Director of Insurance and carry a corporate surety bond of at least $10,000 per county, rising by $10,000 for each additional escrow officer in the county, to a maximum of $50,000 per agent regardless of how many counties or officers. That cap is per agent, not per transaction.",
          "Idaho also allows a title insurer to sell closing or settlement protection, under 41-2714, against a licensed title agent's theft or misappropriation of closing funds or failure to follow agreed written closing instructions. The rate may not exceed $25.00, and nobody is required to buy it. Read the list of who may receive it carefully: the statute names \"a buyer, borrower or lender.\" It does not name the seller."
        ],
        "claims": [
          "cl-title-business-includes-escrow-closing",
          "cl-escrow-act-exempts-title-companies",
          "cl-escrow-officer-bond",
          "cl-closing-protection-buyer-lender"
        ]
      },
      {
        "heading": "What Idaho requires before a title policy is issued",
        "body": [
          "Title insurance on Idaho real property cannot be issued, under Idaho Code 41-2708(1), \"unless and until the title insurer or its agent\" owns or leases tract indexes and abstract records for the county where the property is, and \"Has caused to be made a search and examination of the title and a determination of insurability of title in accordance with sound title underwriting practices.\" The statute requires a search and an underwriting decision. It does not promise that a search finds everything, and the policy itself — not this page — sets out what is covered.",
          "Title insurance pricing is filed with the state. Every title insurer must file its schedule of rates with the Director of the Department of Insurance (41-2707), and under 41-2708(3) no title company or agent may \"quote or make any charge for title insurance to any person less than the currently filed rate for such risk with the department of insurance.\" The section carves out one narrow exception for a bona fide employee's residence. We have not sourced any actual rate, so this page does not quote one."
        ],
        "claims": [
          "cl-title-search-before-policy",
          "cl-title-filed-rate-floor"
        ]
      },
      {
        "heading": "Why the closing agent asks for your Social Security number",
        "body": [
          "The IRS instructions are direct: \"File Form 1099-S, Proceeds From Real Estate Transactions, to report the sale or exchange of real estate.\" The person who files it is \"the person responsible for closing the transaction,\" and where a Closing Disclosure or other settlement statement lists a settlement agent, that is the person listed. The instructions also allow a written agreement at or before closing designating who files.",
          "To file, the closing agent needs the seller's taxpayer identification number. The instructions say \"You must request the transferor's TIN no later than the time of closing,\" and the seller \"is required to furnish their complete, non-truncated TIN and to certify that the TIN is correct.\"",
          "There is a reporting exception for some home sales. A filer does not have to report the sale of a residence for $250,000 or less — $500,000 if the certification includes an assurance that the seller is married — if it receives an acceptable written certification, signed by each seller under penalties of perjury, that the home is the seller's principal residence and the full gain is excludable under section 121, with the further assurances the instructions list. Without the certification, the instructions say, \"you must file and furnish Form 1099-S.\" This is an exception to reporting, not a statement about whether any tax is owed; that is a question for a tax professional."
        ],
        "claims": [
          "cl-1099s-reports-real-estate-sales",
          "cl-1099s-tin-requested-at-closing",
          "cl-1099s-principal-residence-certification"
        ]
      },
      {
        "heading": "If the seller is a foreign person: FIRPTA withholding",
        "body": [
          "Under the Foreign Investment in Real Property Tax Act, as the IRS describes it, a disposition of U.S. real property by a foreign person is subject to income tax withholding. Buyers, certain purchasers' agents and settlement officers \"are required to withhold 15% (10% for dispositions before Feb. 17, 2016) of the amount realized on the disposition.\" In most cases the buyer is the withholding agent, must find out whether the seller is a foreign person, and \"may be held liable for the tax\" if it fails to withhold. The IRS lists exceptions and reduced-rate rules; 15% is the general rate, not the answer for every sale.",
          "That is why a seller may be asked for a certification at closing. Among the IRS's listed exceptions is a seller's certification, under penalties of perjury, \"that the transferor is not a foreign person,\" containing the seller's name, U.S. taxpayer identification number and home address. The seller can give it to a qualified substitute, which includes \"the person (including any attorney or title company) responsible for closing the transaction, other than the transferor's agent.\" The certification is not effective if the buyer or substitute knows it is false. Whether you are a foreign person for these rules is a tax question this page cannot answer."
        ],
        "claims": [
          "cl-firpta-buyer-withholds-15-percent",
          "cl-firpta-non-foreign-certification"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy property in Ada County with our own capital, in any condition, and our purchases close through a local title company — so the steps above — the acknowledged deed, the recording and the federal forms — are handled by a title company working under the Idaho statutes described on this page. You choose the closing date, and a three-week close is realistic. If you want to see how an offer from us works, [how it works](/how-it-works) lays it out, and you can [contact us](/contact) when you are ready. If your sale also raises disclosure questions, our [seller disclosure guide](/guides/idaho-seller-disclosure-when-selling-as-is) covers what Idaho requires.",
          "A direct sale is not always the right one. If the property is in good shape and you have time, listing it with an agent will often net more, and the deed, notary and recording rules above apply either way. If an estate, a title problem or a tax question is involved, talk to an attorney or a tax professional before you sign anything — ours included."
        ]
      }
    ]
  },

  "selling-a-house-with-a-well-or-septic-in-ada-county": {
    "intro": [
      "In Ada County a septic system is a Central District Health matter: the district issues septic permits under the state's DEQ rules and can help with existing permit records, and it offers a mortgage survey of the well and septic that, in its words, a lender often requests before a sale. The well itself is an Idaho Department of Water Resources matter: drillers must file a report that becomes a public record, and if the property carries a water right on IDWR's books, Idaho Code 42-248 requires notice of a change in ownership within 120 days.",
      "This page describes what those agencies and statutes say. It is not legal advice and it is not applied to your property. If a water right, an easement or a failing system is part of your sale, an Idaho attorney, and the agency that holds the record, should look at it."
    ],
    "sections": [
      {
        "heading": "Septic in Ada County belongs to Central District Health",
        "body": [
          "Central District Health's Environmental Health Division permits septic systems, reviews land development applications and verifies the location of shallow injection wells across Ada, Boise, Elmore and Valley counties. It is a public health district, not a city or county building department, so a septic question goes to CDH rather than to a city permit counter.",
          "The rules CDH applies are the state's. Idaho's Individual/Subsurface Sewage Disposal Rules, IDAPA 58.01.03, are written by the Department of Environmental Quality, and DEQ says Idaho's seven public health districts administer them under a memorandum of understanding — conducting site evaluations, issuing permits, inspecting installations, and helping with property-specific questions about existing systems and permit records.",
          "Whether a property is on septic at all can turn on which side of a city limit it sits. Inside Boise, residential and commercial buildings must connect to the city sewer system. Our [Ada County page](/sell-my-house-fast-ada-county) covers the county as a whole; the point here is only that a rule for one city does not travel to the parcel next door."
        ],
        "claims": [
          "ada-septic-authority-cdh",
          "ws-deq-health-districts-administer-septic-rules",
          "boise-sewer-connection-required"
        ]
      },
      {
        "heading": "How do I find the septic permit for my property?",
        "body": [
          "Start with the health district. DEQ lists permit status and existing permit records among the things a district can help with, and tells owners to contact the district for the county where the property is located. CDH takes public records requests through a form on its About page and asks that you be specific about the documents you want — the property address, the parcel number and the legal description are the obvious things to include.",
          "Two cautions. CDH's own pages do not say what a septic file contains or how long a request takes, so expect neither to be predictable. And not every system will have a tidy file; that is a reason to gather what you hold yourself.",
          "DEQ's homeowner guide, which CDH still links as its guide for homeowners, says a tank's location can be found from plot plans, septic inspection records, architectural or landscape drawings, or the house plumbing, and it advises keeping a permanent record of maintenance, repairs, sludge and scum levels, pumping, drainfield condition and backups. CDH's own mortgage survey asks for the pumping receipt when a tank has been or will be pumped, so receipts are worth keeping with the deed."
        ],
        "claims": [
          "ws-deq-health-districts-administer-septic-rules",
          "ws-cdh-public-records-request",
          "ws-deq-guide-keep-septic-records",
          "ws-cdh-mortgage-survey-requirements"
        ]
      },
      {
        "heading": "What the septic rule asks of an owner",
        "body": [
          "The septic rule is written around ownership, not around the moment of sale. Its duties sit with whoever owns the land, and they pass to the next owner with it. Whether anything more applies to a particular property at sale — a lender’s request, a condition on the permit — is worth asking Central District Health directly.",
          "Under IDAPA 58.01.03 every owner of real property is jointly and individually responsible for storing, treating and disposing of the wastewater generated on it. With listed exceptions, no one may modify, repair, expand or install a system without a valid installation permit. A failing system — the rule's definition includes one that will not accept wastewater, or discharges it into waters or onto the ground surface — must be permitted and repaired by its owner as soon as practical after the owner becomes aware of the failure, or as directed with proper notice.",
          "One more provision matters at a sale. The rule allows a permit to carry operation, maintenance and monitoring conditions, and those conditions are perpetual unless the system is removed, abandoned or replaced, or the permit is amended or revoked. If your system's permit carries conditions, they are part of what a buyer is taking on, which is one more reason to get the permit itself rather than rely on memory.",
          "Separately, DEQ advises that anyone planning to install a new system have a site evaluation done by the health district and a licensed installer before buying the land. That is advice to a buyer of unbuilt ground, not a rule about selling a house with a working system."
        ],
        "claims": [
          "ws-idapa-owner-responsible-wastewater",
          "ws-idapa-permit-required-to-repair",
          "ws-idapa-failing-system-must-be-repaired",
          "ws-idapa-om-requirements-perpetual",
          "ws-deq-site-evaluation-before-purchase"
        ]
      },
      {
        "heading": "What a CDH mortgage survey is",
        "body": [
          "CDH describes a mortgage survey as something a lender often requests, to locate a well or septic system and check the water and sewage systems before a property sale. It is CDH's service, offered alongside its drinking water testing; CDH does not say any particular loan requires it, and neither do we.",
          "CDH's information sheet asks for a complete, signed application with the legal description and county parcel number, and a plot plan drawn on the application showing the septic tank, the drainfield and every domestic well in relation to the house. If the tank has been or will be pumped, CDH wants the pumping receipt. The inspector must be able to reach the whole drainfield, the tank and the well head. CDH says results are available three to five days after the sample is taken.",
          "On CDH's July 2026 schedule, a survey costs $178 for the septic only, and $178 plus a $20 lab fee for the well only or for the well and septic together; a revisit is $178 plus the lab fee. CDH resets its fees, so check the current schedule before you budget."
        ],
        "claims": [
          "ws-cdh-mortgage-survey-lender-request",
          "ws-cdh-mortgage-survey-requirements",
          "ws-cdh-mortgage-survey-fees-july-2026"
        ]
      },
      {
        "heading": "The well's own paperwork lives at IDWR",
        "body": [
          "Idaho Code 42-238 requires every well driller, including for domestic wells, to complete a well driller's report and deposit it with the Idaho Department of Water Resources within 30 days after the well is completed. The reports become a permanent record available for public use. Before any well is built or its construction changed, Idaho Code 42-235 requires the driller or owner to get a drilling permit from IDWR — $75 for a domestic well.",
          "IDWR's Well Construction Search is where those reports can be read. IDWR says the database holds most driller's reports from July 1987 onward, so an older well may not appear. Since 1997 IDWR has assigned each well a tag number, printed on a metal plate fixed to the casing above ground, and the tag is the most effective way to search; the township, range and section, the well's address, or the name of whoever owned the well when it was drilled also work. Because the report is public, finding it before you list costs nothing but time.",
          "Water quality is a separate question, and CDH puts it on the owner: in Idaho, it says, private well owners are responsible for ensuring their water is safe to drink, and it recommends testing well water once a year for bacteria and nitrates. CDH also says private water can be required to be tested for a house sale if the lender or buyer requires it — so whether a test happens in your sale depends on the buyer and the financing, not on a rule that applies to every sale."
        ],
        "claims": [
          "ws-well-driller-report-public-record",
          "ws-well-drilling-permit-42-235",
          "ws-idwr-well-construction-search",
          "ws-cdh-well-owner-responsible-testing"
        ]
      },
      {
        "heading": "A domestic well usually works without a water-right permit — within limits",
        "body": [
          "Idaho Code 42-227 says that drilling a well and withdrawing water for domestic purposes, as Idaho Code 42-111 defines them, is not subject to the water-right permit process, and that rights to groundwater for those purposes may be acquired by withdrawal and use. The exception is narrow: certain new diversions within subdivisions in regulated groundwater areas need a permit. Domestic wells remain subject to inspection by IDWR and DEQ.",
          "The definition sets the limits. Domestic use covers homes, livestock and related uses including irrigation of up to half an acre, if total use does not exceed 13,000 gallons per day — or any other use not exceeding 2.8 acre-feet a year. It excludes apartments, condominiums and similar multiple-dwelling developments, subdivisions, and commercial establishments unless they fit within that smaller volume limit. For a larger lot watered from the house well, the half-acre figure is the one to read closely.",
          "This law has moved. IDWR reports that the 2025 Legislature revised the domestic-use, shared-well and subdivision statutes and that a further bill, signed February 17, 2026, took effect that day. Anything you read about the domestic exemption from before then may be out of date."
        ],
        "claims": [
          "ws-domestic-well-exempt-42-227",
          "id-domestic-water-13000-gpd",
          "id-domestic-water-exclusions",
          "ws-domestic-exemption-revised-2026"
        ]
      },
      {
        "heading": "Does a water right have to be updated when the property sells?",
        "body": [
          "If the property has a water right on record, yes. Idaho Code 42-248 requires anyone owning or claiming a water right represented by a court decree, a claim filed with IDWR, or an IDWR permit or license to notify IDWR of any change in ownership of any part of the right within 120 days, using IDWR's forms. The notice needs a $25 fee per right — $100 per right if the right is being divided — with no fee for a claim still pending in an adjudication, and it must come with deeds, decrees or other evidence of the conveyance. IDWR updating its records is not, the statute says, a determination of who owns the right.",
          "Whether there is such a record is a fact about your parcel, and the answer is in IDWR's Water Right and Adjudication Search, not in an assumption. IDWR explains that a 1978 statute required holders of beneficial-use rights to record them, other than rights used solely for domestic purposes, so a house well may have nothing on file — or may.",
          "IDWR also says a landowner may have acquired a water right with the land if water was used there before, the prior owner did not reserve the right in the deed, and the right was not forfeited by five or more years of non-use. It tells buyers to make sure they are listed as the current owner with a correct address. If your deed should reserve or convey a right, or a right is to be split, that is a question for an attorney before closing."
        ],
        "claims": [
          "ws-water-right-ownership-notice-120-days",
          "ws-water-right-notice-fee-and-evidence",
          "ws-idwr-1978-claims-excluded-domestic",
          "ws-idwr-water-right-may-pass-with-land"
        ]
      },
      {
        "heading": "Irrigation water and laterals are a separate system",
        "body": [
          "Surface irrigation water is a different system again, delivered by a different set of entities. Ada County's own irrigation districts map identifies 27 of them — irrigation districts, ditch companies, lateral associations, water companies and a drainage district — plus the Boise Project Board of Control as operating agent for five districts. The map shows which entities exist, not which one serves a given address.",
          "If a canal or lateral crosses the lot, two statutes are worth knowing. Idaho Code 42-1204 says the easements and rights-of-way of irrigation districts, lateral ditch associations and similar entities cannot be acquired by adverse possession, and no one may block their personnel's access. Idaho Code 42-1205 bars encroachments onto those easements — fences, gates, structures, landscaping, trees and more — without the entity's written permission, which may not be unreasonably withheld; an unpermitted encroachment that unreasonably or materially interferes must be removed or modified at the expense of whoever caused or permitted it. Both sections were renumbered in 2026, so older documents cite them as 42-1208 and 42-1209.",
          "All of this meets the seller's disclosure form, which must let the seller disclose the source of the water supply and the nature of the sewer system. Our [disclosure guide](/guides/idaho-seller-disclosure-when-selling-as-is) covers when the form applies, and the [land and acreage guide](/guides/selling-land-or-acreage-in-ada-county) covers irrigation on larger parcels."
        ],
        "claims": [
          "ada-27-irrigation-entities",
          "boise-project-five-districts",
          "ws-irrigation-easements-no-adverse-possession",
          "ws-irrigation-encroachment-written-permission",
          "id-disclosure-form-covers-water-sewer-structure"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy houses in any condition with our own capital, including houses on a well and septic, and our purchases close through a local title company on a closing date the seller chooses. A three-week close is realistic. That can suit a seller who would rather not schedule a survey, chase a permit file or line up repairs before selling. [How it works](/how-it-works) sets out the steps.",
          "If your well tests clean, your septic file is in order and the house shows well, listing with an agent may reach more buyers, and that may serve you better. And a direct sale does not change the rules on this page: a failing system's repair duty, a water right's ownership notice and the disclosure form are set by statute and rule, not by who the buyer is."
        ],
        "claims": []
      }
    ]
  },

  "idaho-property-taxes-when-you-sell": {
    "intro": [
      "Idaho values a house as of January 1 each year, and the tax on it is a first and prior lien on the property itself, discharged only by payment or cancellation. That year's bill is not mailed until late November and is due by December 20, or in halves by December 20 and June 20. A sale does not move the homeowner's exemption to the buyer, who has to apply for it, and a sale ends any state property tax deferral on the house.",
      "This page describes what the Idaho Code and Ada County's Assessor and Treasurer say. It is not legal or tax advice, and it does not apply any of this to your sale. How a year's taxes are split between buyer and seller is set by the purchase contract, not by the statutes on this page, so ask your title company or an Idaho attorney about your own closing."
    ],
    "sections": [
      {
        "heading": "Idaho taxes the house as of January 1, and the lien stays on the property",
        "body": [
          "Idaho Code 63-205 requires all taxable property to be assessed every year at market value for assessment purposes as of 12:01 a.m. on January 1 of the year the taxes are levied. The Ada County Assessor puts it plainly: the assessor does not set a value, but estimates what a typical buyer would reasonably pay for the property on January 1. The Assessor also gives January 1 as the lien date for real property.",
          "The lien itself comes from Idaho Code 63-206. Property taxes levied on real property are \"a first and prior lien upon the real property assessed therefor\", and they \"shall only be discharged by the payment or cancellation of the property taxes\". The same section makes property tax liens perpetual and continuous. The statute attaches the lien to the real property and names payment or cancellation as the only ways it is discharged. A change of owner is not on that list.",
          "One detail is easy to get wrong. Section 63-205 sets the assessment date, not the lien date. The January 1 attachment wording in 63-206 appears in the subsection on personal and operating property. For a house, the January 1 lien date in Ada County comes from the Assessor's own statement. Income tax on the sale itself is a different subject, covered in [taxes when you sell a house in Idaho](/guides/taxes-when-you-sell-a-house-in-idaho)."
        ],
        "claims": [
          "pt-assessment-as-of-jan-1",
          "ada-assessor-does-not-set-value",
          "pt-ada-lien-date-jan-1",
          "ln-property-tax-first-lien-perpetual"
        ]
      },
      {
        "heading": "When are Idaho property taxes due, and what if the bill has not come yet?",
        "body": [
          "Under Idaho Code 63-903, property taxes are due in full by December 20 of the year they are levied. They may instead be paid in two halves: the first by December 20, with a grace period to June 20 for the second half, but only if the first half is paid in full. If the first half is not fully paid by December 20, or the second by June 20, the statute says late charges and interest are assessed. The Ada County Treasurer describes the charge on a missed December installment as 2%, plus interest at 1% per month from the following January 1.",
          "The timing matters in a sale. The Treasurer explains that values assessed on January 1 are used for taxes billed in November and due in December, and that primary-roll bills are mailed by the fourth Monday in November. So a sale that closes in, say, August closes before that year's bill exists. The December and June payments for the year still fall due on the same dates whoever owns the house.",
          "Arrears behave differently from the current year. The Treasurer applies payments to the oldest tax balance first, so a payment meant for this year can go to an older delinquency instead. Unpaid Idaho property taxes also run on a much longer clock than a mortgage foreclosure. A tax deed cannot issue until three years after the delinquency, and our [foreclosure and tax delinquency guide](/guides/idaho-foreclosure-vs-property-tax-delinquency) explains that clock in full. The Ada County Treasurer is the county's tax collector for every taxing district, cities and schools included, so a question about what is owed on a parcel goes to the Treasurer."
        ],
        "claims": [
          "pt-taxes-due-dec-20-two-halves",
          "pt-late-charges-if-half-unpaid",
          "pt-ada-late-charge-and-interest-rates",
          "pt-ada-billed-november-due-december",
          "id-tax-deed-three-year-delinquency",
          "ada-treasurer-ex-officio-tax-collector"
        ]
      },
      {
        "heading": "The homeowner's exemption belongs to the owner who lives there, not to the house",
        "body": [
          "Idaho Code 63-602G exempts from property tax the lesser of the first $125,000 of a homestead's market value for assessment purposes, or 50% of that value. For tax purposes a homestead is the owner-occupied primary dwelling plus no more than one acre of the land around it. The Ada County Assessor gives the same 50%-up-to-$125,000 figure. This is the property-tax exemption. It is not the separate creditor-protection homestead in Idaho Code 55-1003, even though Ada County's website calls both a \"Homestead Exemption\".",
          "We did not publish the $125,000 figure until we could confirm when the statute's latest amendment (2026 chapter 236, House Bill 843) took effect, because the statute page shows no effective date. The Legislature's own record settles it. The bill declared an emergency and took effect \"retroactively to January 1, 2026\", and no later version of the section is displayed. The text quoted here is the law in force for the 2026 tax year.",
          "The exemption does not pass to a buyer. Under 63-602G an owner applies only once as long as they still occupy the same homestead. The Ada County Assessor says that once approved the exemption is permanent as long as one owns and occupies the property, and that \"if the property is sold, the new owner must file an application\". To get it for a given tax year, a buyer has to own and occupy the home and file by the close of business on the last county business day in December. The Treasurer notes that the tax bill shows whether a parcel has the exemption, and so does the Assessor's website."
        ],
        "claims": [
          "pt-homestead-exemption-cap-in-force-2026",
          "id-homestead-one-acre-limit",
          "pt-h0843-retroactive-jan-1-2026",
          "pt-homestead-apply-once-conditions",
          "pt-ada-new-owner-must-apply",
          "ada-homeowners-exemption-deadline",
          "pt-ada-faq-bill-shows-exemption"
        ]
      },
      {
        "heading": "Since 2026 the exemption is no longer prorated, and a second claim has consequences",
        "body": [
          "Until this year, 63-602G contained a day-count proration: when a property's eligibility changed during the year, its taxes were prorated by the days spent in each status. House Bill 843 removed that, retroactively to January 1, 2026. The section now says the full exemption is in effect as of January 1 of the tax year in which a complete application is submitted and approved, and that \"the exemption allowed by this section shall not be prorated\". The sponsor's statement of purpose describes the change in the same terms. Material written before 2026 that describes a day-by-day exemption for the year of a sale is out of date.",
          "This is a rule about the exemption, not about the bill. It does not say which party to a sale pays which part of the year's taxes. That is still a term of the purchase contract.",
          "Sellers who move into another home before the old one sells should read one more provision. The statute lets a taxpayer claim the exemption after January 1 on a property that does not already have it. If that taxpayer is still receiving an exemption on a separate property from a prior year, the exemption on the separate property is removed the following tax year. Separately, a taxpayer first found to have claimed more than one homestead exemption owes a penalty equal to the recovered tax, on top of the recovery itself, and a further violation within seven years is a misdemeanor. The Assessor's office applies these rules, and it is the place to ask how they work for your two addresses."
        ],
        "claims": [
          "pt-homestead-exemption-not-prorated",
          "pt-h0843-retroactive-jan-1-2026",
          "pt-h0843-sop-removes-proration",
          "pt-homestead-new-claim-removes-old",
          "pt-homestead-double-claim-penalty"
        ]
      },
      {
        "heading": "The property tax reduction is personal, and it covers one year",
        "body": [
          "Idaho's property tax reduction, often called the circuit breaker, is a separate program from the exemption. A claimant must have applied for the homeowner's exemption and must own the homestead on January 1 or before April 15 of the first claim year. On January 1 they must also fall within a listed group, such as being 65 or older, a widow or widower, blind, or disabled as the statute defines it. Under Idaho Code 63-705 the reduction is at most $1,500, or the actual tax if less, at the lowest income level, falling to $250 at the highest. If the home's current assessed value exceeds the greater of $400,000 or 200% of the county median for exempt homes, the owner is referred to the property tax deferral program instead. That rule has an exception for veterans rated 100% disabled.",
          "Three features matter in a sale. The reduction is allowed \"for the current year only\" and is based on that year's assessed value and levy, and the Ada County Assessor says applicants must apply every year, between January 1 and April 15. Under 63-702, an owner qualifies by occupying the home after January 1 but before April 15, and must not have claimed another reduction for the same year. There is a narrow exception for some disabled veterans who move later in the year. And the right to claim is \"personal to the claimant\" and does not survive the claimant's death, except that a timely claim filed before death is allowed to the personal representative, the heirs or the trust or entity that owns the property.",
          "The homeowner's exemption has its own rule on death. A homestead that qualified the previous year keeps the exemption through the year of the owner's death and the following tax year, provided it stays part of the owner's estate. After that the new owner must reapply. Our [inherited-house guide](/guides/selling-an-inherited-house-in-idaho) covers the estate side of that sale."
        ],
        "claims": [
          "pt-circuit-breaker-claimant-categories",
          "pt-circuit-breaker-max-and-value-threshold",
          "pt-circuit-breaker-current-year-only",
          "pt-ada-circuit-breaker-apply-each-year",
          "pt-circuit-breaker-occupancy-window",
          "pt-circuit-breaker-personal-to-claimant",
          "pt-homestead-death-carryover"
        ]
      },
      {
        "heading": "A sale ends a property tax deferral, and the deferred tax comes due",
        "body": [
          "Idaho's Property Tax Deferral Act lets a qualified owner put off paying property tax. The deferred amount does not go away. It accrues interest and remains a lien on the property under 63-206, and the State Tax Commission records a notice of that lien with the county recorder. Unlike the ordinary tax lien, the deferral lien is not first and prior. Its priority runs from the date it was filed.",
          "Idaho Code 63-718 lists what ends a deferral. One is \"a sale or other transfer of title to the property or any part of the property\", with an exception for a transfer to the surviving spouse of a deceased qualified claimant. Others are the death of the last qualified claimant and the property ceasing to qualify for the homeowner's exemption. Once a deferral ends, any unpaid deferred tax and interest must be paid to the State Tax Commission within 180 days. An owner with a deferral on record can ask the State Tax Commission for the balance well before closing."
        ],
        "claims": [
          "pt-deferral-recorded-lien",
          "pt-deferral-ends-on-sale-180-days"
        ]
      },
      {
        "heading": "Assessment notices arrive in June, and appeals are due the same month",
        "body": [
          "Idaho Code 63-308 requires the valuation assessment notice to be mailed or delivered by the first Monday in June, to the taxpayer's last known address. It must state the current year's market value for assessment purposes and the right to appeal to the county board of equalization. It must also give the previous two years' values and the taxes charged by each taxing district. The Ada County Assessor says owners can view and download their notices from its online property records, and that the appraiser will consider any market evidence an owner submits.",
          "Under Idaho Code 63-501A, an appeal of an assessment on the property roll must be filed in writing by the end of the county's normal business hours on the fourth Monday of June, and the board may consider an appeal only if it is filed on time. In Ada County the Assessor says completed forms go to the Commissioner's Office by 5:00 p.m. that day. The appeal \"will only address the market value of your property\" and \"is not a forum to protest property taxes\". Under 63-502 the taxpayer carries the burden of showing the assessor's determination is wrong, and a preponderance of the evidence is enough.",
          "For a seller, the June calendar is mainly a way to know what the coming bill rests on. If a sale closes before the deadline, whether the seller or the buyer should pursue an appeal is a question for an attorney, not something this page can answer. The Assessor also keeps the county's parcel, ownership and boundary records."
        ],
        "claims": [
          "pt-assessment-notice-first-monday-june",
          "pt-ada-notices-online",
          "pt-appeal-deadline-fourth-monday-june",
          "pt-ada-appeal-filed-with-commissioners",
          "pt-boe-burden-preponderance",
          "ada-assessor-maintains-parcel-gis"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy homes in Ada County in any condition, with our own capital, and purchases close through a local title company on a date the seller chooses. A three-week close is realistic. That can help a seller who needs to time a sale around a December or June due date, a deferral, or an estate's year-end. How the year's taxes are handled at closing is still set out in the contract and settled by the title company, as in any sale. You can read more on [how it works](/how-it-works).",
          "If the house is in good shape and timing is not pressing, listing it with an agent will often net more, and the property tax picture is the same either way. If arrears or a deferral are what is driving the decision, call the Treasurer or the State Tax Commission for the balance first, and talk to an Idaho attorney."
        ]
      }
    ]
  },

  "how-to-avoid-foreclosure-in-idaho": {
    "intro": [
      "An Idaho homeowner who is behind on the mortgage has a set of options that open in a rough order, and most of them run through the mortgage servicer: a repayment plan, forbearance, a loan modification, or paying the past-due amount to reinstate the loan. Idaho Code 45-1506(12) allows the default to be cured at any time within 115 days of the recording of the notice of default, and a federal rule generally bars a servicer from making the first foreclosure notice or filing on a principal residence until the loan is more than 120 days delinquent. Refinancing, a sale, a short sale, a deed in lieu and bankruptcy are the other routes, and a HUD-approved housing counselor will go through all of them free of charge.",
      "This page describes what Idaho Code, federal servicing rules and federal agencies say, quoted from the official sources. It is not legal or tax advice and it is not applied to your loan. We are a property buyer. We cannot stop a foreclosure, negotiate with your lender or promise an outcome. An Idaho attorney and a HUD-approved housing counselor are the people to ask about your own situation."
    ],
    "sections": [
      {
        "heading": "Call the servicer first, before a payment is missed if you can",
        "body": [
          "The Consumer Financial Protection Bureau's advice is direct: \"If you can't pay your mortgage or are worried about missing a mortgage payment, call your mortgage servicer right away.\" It adds that you should also contact a HUD-approved housing counseling agency.",
          "The CFPB says the servicer's number is on the monthly statement, in the coupon book or on the servicer's website. It says to be ready to explain why you cannot pay, whether the problem is temporary or permanent, and the details of your income, expenses and other assets, and to fill out a mortgage assistance application if the servicer gives you one.",
          "The servicer has duties of its own. Under 12 CFR 1024.39, a servicer must make good faith efforts to establish live contact with a delinquent borrower no later than the 36th day of delinquency, and must then tell the borrower about loss mitigation options, if appropriate. No later than the 45th day it must send a written notice that encourages the borrower to make contact, gives the servicer's telephone number and mailing address, and gives the website and toll-free number for finding a housing counselor.",
          "These federal procedures have limits. Under 12 CFR 1024.30 they apply only to a loan secured by the borrower's principal residence, and small servicers, reverse mortgages and certain other lenders are largely outside them. Bankruptcy is a separate route with its own rules, described in [bankruptcy and foreclosure in Idaho](/guides/bankruptcy-and-foreclosure-in-idaho)."
        ],
        "claims": [
          "af-cfpb-call-servicer-right-away",
          "af-cfpb-what-to-tell-servicer",
          "af-regx-live-contact-36-days",
          "af-regx-written-notice-45-days",
          "af-regx-scope"
        ]
      },
      {
        "heading": "What the federal 120-day rule and a complete application do",
        "body": [
          "12 CFR 1024.41(f)(1) says a servicer may not make the first notice or filing required for a judicial or non-judicial foreclosure unless the loan is more than 120 days delinquent. The rule lists two exceptions: a foreclosure based on a due-on-sale clause, and a servicer joining another lienholder's foreclosure. Small servicers are subject to this 120-day rule as well.",
          "The same section sets a timetable for a loss mitigation application. If the servicer receives an application 45 days or more before a foreclosure sale, it must tell the borrower in writing within 5 days, not counting weekends and legal public holidays, whether the application is complete and what is still missing. If it receives a complete application more than 37 days before a foreclosure sale, it must evaluate the borrower for all available options within 30 days and say in writing which, if any, it will offer.",
          "A complete application also restricts the foreclosure itself. If it is submitted before the first foreclosure notice or filing, the servicer may not make that filing unless the borrower has been found ineligible and any appeal is finished or unavailable, the borrower rejects every option offered, or the borrower fails to perform under an agreement. If it is submitted after the foreclosure has started but more than 37 days before a foreclosure sale, the servicer may not conduct the sale, subject to the same three exceptions.",
          "Where a complete application was received 90 days or more before a foreclosure sale, the borrower may appeal a denial of a loan modification. The borrower has 14 days to appeal, different personnel must review it, and the servicer must answer within 30 days. That answer cannot be appealed again.",
          "Two cautions belong with all of this. The rule states that nothing in it \"imposes a duty on a servicer to provide any borrower with any specific loss mitigation option.\" Every protection above also depends on the application being complete and on how many days remain before a sale."
        ],
        "claims": [
          "af-regx-120-day-prefiling",
          "af-regx-small-servicer",
          "af-regx-acknowledgment-5-days",
          "af-regx-evaluation-30-days",
          "af-regx-application-before-referral",
          "af-regx-no-sale-while-pending",
          "af-regx-appeal-14-days",
          "af-regx-no-duty-specific-option"
        ]
      },
      {
        "heading": "Repayment plans and forbearance cover a temporary gap",
        "body": [
          "The CFPB defines a repayment plan as \"an agreement between you and your lender to make up missed mortgage loan payments by adding part of the past-due amount to your regular payments over a period of time.\" The borrower pays more each month until the missed amount is made up. The CFPB cautions that the lender or servicer may consider the loan delinquent until every missed payment is repaid, and may still report the delinquency to the credit reporting agencies.",
          "Forbearance is described by the CFPB as an arrangement in which the servicer or lender lets you temporarily pause payments or make smaller ones. In the CFPB's words, forbearance \"does not erase or decrease the amount you owe on your mortgage. You have to repay any missed or reduced payments.\" A repayment plan might be one way to do that once the forbearance period ends.",
          "The CFPB says forbearance options depend on many factors and tells borrowers to keep asking the servicer questions until they understand three things: the amount to be paid and for how long payments are paused or reduced, how interest accrues during that time, and when and how the paused or reduced amounts are paid back.",
          "Under 12 CFR 1024.41(c)(2)(iii), a servicer may offer a short-term forbearance program or a short-term repayment plan even on an incomplete application. If it does, it must put the specific payment terms and duration in writing, and it may not start or complete a foreclosure while the borrower is performing under that program or plan."
        ],
        "claims": [
          "af-cfpb-repayment-plan-definition",
          "af-cfpb-repayment-plan-still-delinquent",
          "af-cfpb-forbearance-definition",
          "af-cfpb-forbearance-what-to-ask",
          "af-regx-short-term-plan-on-incomplete-application"
        ]
      },
      {
        "heading": "A loan modification changes the loan, and Idaho requires a notice about it",
        "body": [
          "The CFPB defines a loan modification as \"a change in your loan terms.\" It says a modification may involve extending the number of years to repay, reducing the interest rate, or forbearing or reducing the principal balance. It also warns that a borrower who receives a modification and still cannot make the payments may lose the home.",
          "Idaho adds a step of its own. Under Idaho Code 45-1506C, when the loan was made by a state or federally regulated beneficiary and is a noncommercial loan secured by a deed of trust on the borrower's primary residence, a supplemental notice must accompany the notice of default. The statute has the beneficiary check the county assessor's tax rolls: a property granted the homeowner's property tax exemption for the year the notice of default is recorded is deemed the primary residence. If no homeowner's exemption was granted for that year, the section does not apply.",
          "The notice comes with a modification request form. The notice's own wording says the form must be returned by certified mail, return receipt requested, and that the beneficiary must receive it on or before a date that is thirty days after the date of the notice. The date that governs is the one printed on the notice itself.",
          "If the form comes back by that date, the beneficiary must evaluate the request and tell the borrower in writing, not later than 45 days after receiving the form, whether it approves the request, denies it or needs more information. The statute says a trustee's sale \"may not occur until after the beneficiary or the beneficiary's agent timely responds to the grantor.\"",
          "A borrower may also ask to meet. If the request is timely, the beneficiary or its agent must meet in person or speak by telephone before it responds, and whoever meets must have, or be able to obtain, authority to modify the loan. The statute treats the beneficiary as having complied if the borrower does not schedule the meeting within seven business days after the beneficiary attempts contact, or does not attend.",
          "The notice is plain about the limits. It says: \"You may or may not qualify for a loan modification or other alternative to foreclosure.\""
        ],
        "claims": [
          "af-cfpb-modification-definition",
          "af-modnotice-who-gets-it",
          "af-modnotice-form-thirty-days",
          "af-modnotice-response-45-days",
          "af-modnotice-meeting",
          "af-modnotice-may-not-qualify"
        ]
      },
      {
        "heading": "Idaho allows 115 days to cure the default and reinstate the loan",
        "body": [
          "Idaho Code 45-1506(12) gives the borrower a right to cure. At any time within 115 days of the recording of the notice of default, the grantor, a successor in interest, or a subordinate lienholder may pay the beneficiary \"the entire amount then due under the terms of the deed of trust and the obligation secured thereby,\" other than principal that would not be due had no default occurred.",
          "The effect is stated in the same subsection. Once the default is cured, all proceedings \"shall be dismissed or discontinued and the obligation and deed of trust shall be reinstated and shall be and remain in force and effect, the same as if no acceleration had occurred.\"",
          "The amount is more than the missed payments. The statute includes costs and expenses actually incurred in enforcing the obligation, a reasonable trustee's fee, and attorney's fees as the promissory note may provide. The 45-1506C notice tells the borrower how to get the figure: \"The beneficiary can provide you with the exact amount that you owe, but you have to ask.\"",
          "Idaho also requires notice of the trustee's sale to be given at least 120 days before the sale date. That period and the 115-day cure period start from different events, and neither is the federal 120-day delinquency rule described above. An Idaho attorney can say which dates apply to a particular loan. The broader process is set out in [our guide to foreclosure and property tax delinquency](/guides/idaho-foreclosure-vs-property-tax-delinquency)."
        ],
        "claims": [
          "af-cure-within-115-days",
          "af-cure-reinstates-loan",
          "af-cure-amount-includes-costs",
          "af-modnotice-ask-exact-amount",
          "id-trustee-sale-120-day-notice"
        ]
      },
      {
        "heading": "Refinancing or selling pays the loan off",
        "body": [
          "Refinancing is the first item on the CFPB's list of options a servicer might make available. This page has no further source on refinancing.",
          "A sale works through the payoff amount. The CFPB describes the payoff amount as \"how much you will have to pay to satisfy the terms of your mortgage loan and completely pay off your debt.\" It is different from the current balance, because it includes interest through the day of payoff and may include fees that have been charged and not yet paid. For a loan secured by a dwelling, the servicer must provide an accurate payoff statement when asked.",
          "Timing matters. Under Idaho Code 45-1506(10), the trustee's deed conveys to the purchaser at the trustee's sale the interest the grantor had in the property. An owner's own sale therefore has to close before the trustee's sale takes place.",
          "Idaho law also protects an owner who signs a contract during the foreclosure period. Under the Consumer Foreclosure Protection Act, a contract to transfer an interest in the home must be in writing and carry a statutory notice, and the owner may cancel it within five business days of entering into it. That applies to a contract with any buyer, including one with us. The practical side is covered in [selling a house before foreclosure](/sell-house-before-foreclosure-idaho) and in [a cash offer compared with listing](/cash-offer-vs-listing-idaho)."
        ],
        "claims": [
          "af-cfpb-options-servicer-might-offer",
          "af-cfpb-payoff-amount",
          "af-trustee-deed-conveys-grantor-interest",
          "vb-cfpa-written-notice-required",
          "vb-cfpa-five-business-day-rescission"
        ]
      },
      {
        "heading": "Short sale, deed in lieu and bankruptcy, briefly",
        "body": [
          "A short sale and a deed in lieu both depend on the lender. The CFPB defines a short sale as a sale of the home for less than what is owed on the mortgage, possible if the lender or servicer agrees to it. It defines a deed-in-lieu of foreclosure as an arrangement in which the borrower voluntarily turns over ownership of the home to the lender to avoid the foreclosure process. For a short sale the CFPB advises asking the lender to waive any deficiency before going ahead and getting the waiver in writing, and for a deed in lieu it notes there may still be a tax liability. Both questions call for an attorney or tax professional. Both are set out in [short sale vs deed in lieu in Idaho](/guides/short-sale-vs-deed-in-lieu-in-idaho).",
          "Bankruptcy is a federal court process. The federal judiciary's summary of chapter 13 says: \"The automatic stay stops the foreclosure proceeding as soon as the individual files the chapter 13 petition. The individual may then bring the past-due payments current over a reasonable period of time.\" The same summary says the debtor may still lose the home if the foreclosure sale is completed under state law before the petition is filed, or if the debtor fails to make the regular mortgage payments that come due after filing. Whether it fits a household is a question for a bankruptcy attorney."
        ],
        "claims": [
          "af-cfpb-short-sale-definition",
          "af-cfpb-deed-in-lieu-definition",
          "af-uscourts-chapter-13-foreclosure"
        ]
      },
      {
        "heading": "Housing counselors are free, and Idaho's own notice says so",
        "body": [
          "The CFPB describes a housing counselor at a HUD-approved agency as trained and certified by the government to help a borrower assess their finances, evaluate options and make a plan. It says HUD-approved agencies provide foreclosure prevention counseling free of charge and can help a borrower talk to the servicer. It also says a counselor cannot promise that the borrower will keep the home.",
          "HUD says it funds free or very low-cost housing counseling nationwide and that counselors can represent a homeowner in negotiations with the lender. HUD gives (800) 569-4287 as the number for finding a counselor. The CFPB lists the HOPE Hotline at (888) 995-HOPE (4673), open 24 hours a day, seven days a week. Idaho Housing and Finance Association's homeowner page gives the same direction: free housing counseling with a HUD approved counselor.",
          "Idaho wrote the point into the 45-1506C notice: \"Never pay someone to help you obtain a loan modification. Help is available for free from housing counselors who are certified through the department of housing and urban development (HUD).\"",
          "The CFPB lists warning signs of a foreclosure scam. They include being asked to pay upfront for help, a guarantee that you will not lose your home, and being asked to sign over title to your home or to sign documents you do not understand. It also says a borrower facing imminent foreclosure, or served with legal papers, might need to consult an attorney. Our page on [how to check a cash buyer in Idaho](/how-to-check-a-cash-buyer-in-idaho) applies the same caution to buyers, us included. The Idaho and federal protections are in [foreclosure rescue scams in Idaho](/guides/foreclosure-rescue-scams-in-idaho)."
        ],
        "claims": [
          "af-cfpb-housing-counselor-what-they-do",
          "af-hud-counseling-free-or-low-cost",
          "af-cfpb-hope-hotline",
          "af-ihfa-trouble-paying-points-to-counseling",
          "af-modnotice-free-counselors-warning",
          "af-cfpb-no-need-to-pay-scam-signs",
          "af-cfpb-attorney-if-imminent"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy houses in Ada County in any condition, with our own capital. A purchase closes through a local title company, the seller chooses the closing date, and a three-week close is realistic. That can suit an owner who has decided to sell and needs a closing date ahead of a trustee's sale.",
          "We cannot stop a foreclosure, negotiate with a lender, approve a short sale or give legal or tax advice. If you want to keep the house, the routes are the ones above: the servicer, the cure right, a modification, and a housing counselor who costs nothing. If there is time to list the house on the open market, a listing may bring a higher price than we would offer. If the loan balance is more than the house would sell for, any sale needs the lender's agreement, and that decision belongs to the lender."
        ],
        "claims": [
          "af-cfpb-short-sale-definition"
        ]
      }
    ]
  },

  "idaho-foreclosure-timeline": {
    "intro": [
      "An Idaho deed of trust foreclosure runs in a fixed order: a default, a recorded notice of default, a notice of sale, a public auction, and a trustee's deed. With limited exceptions, federal rules bar a servicer from making the first foreclosure notice or filing on a principal residence until the loan is more than 120 days delinquent, and Idaho Code 45-1506 requires notice of the sale at least 120 days before the sale date. The statutory right to cure the default runs for 115 days from the recording of the notice of default, and after the trustee's sale there is no right to redeem the property.",
      "This page describes what Idaho Code and federal regulations say, quoted from the official sources. It is not legal advice and it is not applied to your loan. Every day count below is a minimum or a limit set by statute, and a real case can run longer. An Idaho attorney can tell you where your own case stands."
    ],
    "sections": [
      {
        "heading": "A deed of trust can be foreclosed in Idaho without a court",
        "body": [
          "Idaho Code 45-1502 names three parties to a deed of trust. The grantor conveys real property by a trust deed as security for an obligation, and in a home loan is ordinarily the borrower. The beneficiary is the person for whose benefit the trust deed is given, or a successor. The trustee holds title for the limited purpose of the power of sale and the duty to reconvey.",
          "Idaho Code 45-1503 gives the trustee a power of sale, to be exercised after a breach of the secured obligation. The same section says a deed of trust may be foreclosed by advertisement and sale under the chapter or, at the option of the beneficiary, by foreclosure as provided by law for mortgages on real property. The first route is the nonjudicial process on this page. The second is a court case, the statute gives that choice to the beneficiary, and this page does not cover it.",
          "Section 45-1502(5) limits what can be placed under a trust deed: property inside an incorporated city or village at the time of the transfer, property of not more than 80 acres that is not principally used for agricultural production, or property of not more than 40 acres regardless of use or location.",
          "Under Idaho Code 45-1505 the trustee may foreclose by advertisement and sale if four conditions are met. The trust deed, any assignments and any appointment of a successor trustee are recorded in the county. There is a default under a provision of the deed that authorizes sale. A notice of default has been recorded and mailed. No court action to recover the debt is pending."
        ],
        "claims": [
          "ft-parties-defined",
          "ft-power-of-sale-or-judicial-option",
          "ft-trust-deed-property-limits",
          "ft-foreclosure-conditions"
        ]
      },
      {
        "heading": "Step 1: Federal rules require more than 120 days of delinquency before the first notice",
        "body": [
          "Idaho Code 45-1505 requires a default but sets no waiting period before the notice of default. The waiting period comes from federal mortgage servicing rules.",
          "Under 12 CFR 1024.41(f)(1), a servicer \"shall not make the first notice or filing required by applicable law for any judicial or non-judicial foreclosure process\" unless the borrower's mortgage loan obligation is more than 120 days delinquent. The rule lists two other cases: a foreclosure based on a violation of a due-on-sale clause, and a servicer joining the foreclosure action of a superior or subordinate lienholder.",
          "The rule has a limited reach. Under 12 CFR 1024.30(c)(2), these procedures apply only to a mortgage loan secured by a property that is the borrower's principal residence."
        ],
        "claims": [
          "ft-foreclosure-conditions",
          "ft-federal-120-day-delinquency",
          "ft-federal-principal-residence-scope"
        ]
      },
      {
        "heading": "Step 2: The notice of default is recorded with the county recorder and mailed",
        "body": [
          "Idaho Code 45-1505(3) requires the trustee or beneficiary to file a notice of default for record in the office of the recorder in each county where the property, or any part of it, sits. The notice identifies the deed of trust, states that a breach has occurred, sets out the nature of the breach, and states the election to sell the property.",
          "A copy must be mailed by registered or certified mail, return receipt requested, to any person who has recorded a request for notice. The trustee must also mail the notice to any individual who owns an interest in the property. Service by mail is effective at the time of mailing.",
          "The mailed notice must be attached to a separate sheet in 12-point boldface type. It tells the owner to be cautious about anyone who says they can save the home, and it says: \"Do not delay seeking advice, because the longer you wait, the fewer options you may have.\" The sheet refers to five days to undo certain contracts. The operative section, Idaho Code 45-1603, sets that period at five business days.",
          "For an Ada County property the recorder is the Ada County Recorder's Office, because Idaho Code 55-808 requires recording in the county where the property is situated. The office says it maintains all documents related to property ownership in the county and that recorded documents are open for public inspection. Its online search tool searches by instrument number, party information or parcel number when available. The recording date of the notice of default matters, because the cure period in Step 5 is counted from it."
        ],
        "claims": [
          "ft-notice-of-default-recorded-and-mailed",
          "ft-notice-of-default-warning-sheet",
          "vb-cfpa-five-business-day-rescission",
          "cl-record-in-county-where-situated",
          "ada-recorder-maintains-ownership-documents",
          "ft-ada-recorder-online-search"
        ]
      },
      {
        "heading": "Step 3: A loan modification request has a 30-day deadline and a 45-day answer",
        "body": [
          "Idaho Code 45-1506C adds a step for some homes. It applies to a noncommercial loan made by a state or federally regulated beneficiary and secured by a deed of trust on the borrower's primary residential property. The statute decides primary residence by one test: whether the property has been granted the homeowner's property tax exemption for the year in which the notice of default is recorded. If it has not, the section does not apply.",
          "Where the section applies, a supplemental notice in at least 14-point type must accompany the notice of default provided to the grantor. The statutory form states the amount needed to bring the loan current as of a stated date. It comes with a loan modification request form. The form must be returned by certified mail, return receipt requested, and the beneficiary must receive it on or before a date that is 30 days after the date on the notice. The notice itself says: \"You may or may not qualify for a loan modification or other alternative to foreclosure.\"",
          "If the grantor returns the form by that date, the beneficiary or its agent must evaluate the request. It must answer in writing as soon as reasonably practicable and not later than 45 days after receiving the form, stating whether it approves the request, denies it, or requires additional information. Section 45-1506C(3) then says: \"A trustee's sale for the property subject to the loan may not occur until after the beneficiary or the beneficiary's agent timely responds to the grantor.\" The bar ends with the response, whatever the response is.",
          "The same statutory notice carries a warning: \"Never pay someone to help you obtain a loan modification.\" It says help is available for free from housing counselors certified through the U.S. Department of Housing and Urban Development (HUD), and that the HUD website lists certified counselors in Idaho."
        ],
        "claims": [
          "ft-loan-mod-notice-primary-residence",
          "ft-loan-mod-form-thirty-days",
          "ft-loan-mod-45-day-response",
          "ft-loan-mod-notice-hud-counselors"
        ]
      },
      {
        "heading": "Step 4: The notice of sale goes out at least 120 days before the sale",
        "body": [
          "Idaho Code 45-1506(2) requires notice of the sale to be given after the notice of default is recorded and at least 120 days before the day fixed for the sale. It goes by registered or certified mail, return receipt requested, to the last known address of the grantor, anyone who recorded a request for notice, any successor in interest of the grantor whose interest is of record or actually known, and anyone holding a later lien or interest that is of record or actually known. Under 45-1506(14), service by mail is effective at the time of mailing.",
          "The notice must state the names of the grantor, trustee and beneficiary, a description of the property, where the trust deed is recorded, the default, the sum owing, and the date, time and place of the sale. The sale must be held after 9:00 a.m. and before 4:00 p.m., at a designated place in a county where the property is located.",
          "Four more requirements run on shorter clocks, all counted back from the sale date:",
          "Service and posting. At least three good-faith attempts must be made to serve the notice on an adult occupant, on different days over a period of not less than seven days, each at least 30 days before the sale. At each attempt a copy is posted in a conspicuous place on the property unless an earlier copy is still posted.",
          "Publication. The notice is published in a newspaper of general circulation in each county where the property sits, once a week for four successive weeks, with the last publication at least 30 days before the sale.",
          "Recorded affidavits. The affidavit of mailing, the affidavit of posting when required, and the publication must be recorded in the county at least 20 days before the sale.",
          "Loan modification affidavit. Where 45-1506C applies, the trustee must also record an affidavit of compliance with that section at least 20 days before the sale."
        ],
        "claims": [
          "id-trustee-sale-120-day-notice",
          "ft-notice-of-sale-recipients",
          "ft-mail-effective-on-mailing",
          "ft-notice-of-sale-contents",
          "id-trustee-sale-service-attempts",
          "ft-notice-of-sale-posting",
          "id-trustee-sale-publication",
          "ft-affidavits-recorded-twenty-days",
          "ft-loan-mod-affidavit-twenty-days"
        ]
      },
      {
        "heading": "Step 5: The right to cure lasts 115 days from the recording of the notice of default",
        "body": [
          "Idaho Code 45-1506(12) gives a right to cure the default and reinstate the loan. Where the power of sale is to be exercised, the right may be used at any time within 115 days of the recording of the notice of default. The 115 days are counted from the recording of the notice of default.",
          "The right belongs to the grantor, a successor in interest in the property, a beneficiary under a subordinate deed of trust, and anyone with a subordinate lien or encumbrance of record.",
          "The amount is set by the statute. It is the entire amount then due, \"other than such portion of the principal as would not then be due had no default occurred\", including costs and expenses actually incurred in enforcing the obligation, a reasonable trustee's fee, and attorney's fees as provided in the promissory note.",
          "When that amount is paid, the statute says all proceedings \"shall be dismissed or discontinued\" and the obligation and deed of trust are reinstated \"the same as if no acceleration had occurred\".",
          "Section 45-1506(12) gives no right to cure after the 115 days. Because the notice of sale follows the notice of default and must be given at least 120 days before the sale, the statutory cure period ends before the sale date."
        ],
        "claims": [
          "ft-cure-within-115-days",
          "ft-notice-of-sale-recipients",
          "id-trustee-sale-120-day-notice"
        ]
      },
      {
        "heading": "Step 6: The sale is a public auction, and the date can move",
        "body": [
          "Under Idaho Code 45-1506(8) the sale is held on the date and at the time and place stated in the notice of sale. The trustee sells the property at auction to the highest bidder. Any person may bid, including the beneficiary.",
          "The trustee may postpone the sale at the request of the beneficiary. It does so by announcing the new date and hour publicly at the time and place originally fixed for the sale. No sale may be postponed to a date more than 30 days after the date from which it is postponed. A postponed sale may be postponed again in the same way and within the same limit.",
          "For the loans covered by 45-1506C, the trustee must mail notice of a previously postponed sale at least 14 days before conducting it, to the same persons and by the same means as the original notice of sale. An affidavit of that mailing must be recorded before the sale.",
          "A bankruptcy stay or a court order can also move the date. Idaho Code 45-1506A says that when a sale cannot be held because of the automatic stay of the U.S. Bankruptcy Code or a court stay order, it may be rescheduled after the stay ends. Notice of the rescheduled sale must be mailed at least 30 days before it and published once a week for three successive weeks, with the last publication at least 10 days before the sale.",
          "Under Idaho Code 45-1506B, when a stay is lifted before the sale date, a person with the right to cure may ask the trustee in writing, before the time set for the original sale, to postpone it so that at least 115 days pass between the recording of the notice of default and the rescheduled sale, not counting the time the stay was in effect."
        ],
        "claims": [
          "ft-sale-auction-highest-bidder",
          "ft-postponement-thirty-days",
          "ft-postponed-sale-fourteen-day-mailing",
          "ft-rescheduled-sale-after-stay",
          "ft-stay-lifted-postponement-request"
        ]
      },
      {
        "heading": "Step 7: The trustee's deed, possession on the tenth day, and no right to redeem",
        "body": [
          "The purchaser must pay the price bid forthwith, and on receipt of payment the trustee executes and delivers the trustee's deed. Under Idaho Code 45-1506(10) the deed conveys the interest the grantor had, or had the power to convey, when the trust deed was signed, together with any interest acquired afterwards.",
          "Under 45-1506(11) the purchaser is entitled to possession of the property on the tenth day following the sale. Anyone who remains in possession after that, under any interest except one prior to the deed of trust, is deemed a tenant at sufferance.",
          "Idaho Code 45-1507 sets the order in which the trustee applies the sale proceeds: first to the expenses of the sale, including a reasonable trustee's charge and attorney's fee; then to the obligation secured by the trust deed; then to holders of recorded liens that come after the trust deed; and then \"the surplus, if any,\" to the grantor or the grantor's successor in interest.",
          "Idaho Code 45-1508 makes the sale final. It terminates all interest in the property of every person who was given notice under 45-1506, and it says those persons \"shall have no right to redeem the property from the purchaser at the trustee's sale\". This is the rule for a trustee's sale under a deed of trust. Property tax delinquency runs on a different clock with a different redemption rule, set out in [our guide to foreclosure and property tax delinquency](/guides/idaho-foreclosure-vs-property-tax-delinquency)."
        ],
        "claims": [
          "ft-trustees-deed-on-payment",
          "ft-possession-tenth-day",
          "ft-proceeds-order",
          "ft-sale-final-no-redemption",
          "id-tax-deed-redemption-fourteen-months"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We are a direct buyer of property in Ada County. We cannot stop a foreclosure, negotiate with your lender, give legal or tax advice, or promise that a sale will close before a trustee's sale date. What we can say about ourselves is short. We buy with our own capital. Purchases close through a local title company. You choose the closing date. We buy in any condition. A three-week close is realistic. [How a sale to us works](/how-it-works) is set out step by step, and [selling a house before foreclosure](/sell-house-before-foreclosure-idaho) covers that situation.",
          "A sale is not always the right route. If curing the default or a loan modification would let you keep the house, an Idaho attorney or a HUD-certified housing counselor is the place to start, and the statutory notice says that counseling is free. If there is enough time before the sale date and the house can be listed, the open market may bring a higher price than a direct buyer pays. Idaho Code 45-1603 gives a person whose property is in foreclosure the right to cancel any contract about that property made during the foreclosure period within five business days. A contract with us is no exception."
        ],
        "claims": [
          "ft-loan-mod-notice-hud-counselors",
          "vb-cfpa-five-business-day-rescission"
        ]
      }
    ]
  },

  "short-sale-vs-deed-in-lieu-in-idaho": {
    "intro": [
      "In a short sale you sell the house to a buyer for less than you owe, and the lender agrees to accept the proceeds. In a deed in lieu of foreclosure you hand ownership of the house to the lender to avoid the foreclosure process. Both need the lender's agreement, and neither one automatically releases you from the unpaid balance or from federal income tax on canceled debt, so the written terms matter more than the label.",
      "This page describes what the Consumer Financial Protection Bureau, HUD, Idaho Code and the IRS say, quoted from the official sources and read on November 13, 2026. It is not legal or tax advice and it is not applied to your situation. Before you sign a short sale agreement or a deed in lieu, have an Idaho attorney and a tax professional read the documents."
    ],
    "sections": [
      {
        "heading": "What is a short sale?",
        "body": [
          "The Consumer Financial Protection Bureau (CFPB) defines a short sale as a type of loss mitigation: a sale of your home for less than what you owe on your mortgage. The CFPB calls it an alternative to foreclosure, and notes that because it is a sale, you will have to leave the home.",
          "The sale goes to an ordinary buyer. What makes it a short sale is the lender's part. In the CFPB's words, if your lender or servicer agrees to a short sale, you may be able to sell the home to pay off the mortgage even if the price or proceeds turn out to be less than the balance remaining.",
          "For FHA-insured loans, HUD uses the name Pre-Foreclosure Sale and says it is also known as a short sale. HUD describes it as a home disposition option that may be offered when a borrower cannot keep paying even with a home retention option. If the current market value is not enough to pay the loan in full, the servicer may be able to accept less than the full amount owed by approving eligible borrowers. That description covers FHA-insured loans only."
        ],
        "claims": [
          "ss-cfpb-short-sale-definition",
          "ss-cfpb-short-sale-needs-lender-agreement",
          "ss-hud-fha-pre-foreclosure-sale"
        ]
      },
      {
        "heading": "What is a deed in lieu of foreclosure?",
        "body": [
          "The CFPB defines a deed-in-lieu of foreclosure as an arrangement where you voluntarily turn over ownership of your home to the lender to avoid the foreclosure process. There is no outside buyer. The lender ends up with the property.",
          "For FHA-insured loans, HUD places the deed in lieu after the short sale attempt. HUD says a borrower who is unable to complete a Pre-Foreclosure Sale by the end of its marketing period may be eligible to voluntarily offer to deed the property to HUD in exchange for a release from all obligations under the mortgage. That wording describes the FHA option. It is not a rule for other loan types.",
          "The CFPB also suggests asking the lender or servicer about help with relocation expenses through private programs sometimes called cash-for-keys. It is a question to ask. The CFPB does not say such help is always available."
        ],
        "claims": [
          "ss-cfpb-deed-in-lieu-definition",
          "ss-hud-fha-deed-in-lieu",
          "ss-cfpb-relocation-cash-for-keys"
        ]
      },
      {
        "heading": "Both options depend on the lender saying yes",
        "body": [
          "Neither option is something an owner can complete alone. The CFPB's short sale description starts with the lender or servicer agreeing. A deed in lieu is an arrangement with the lender, and the lender is the party that takes the deed.",
          "A buyer cannot supply that agreement either. In a short sale the buyer makes an offer, and the lender decides whether to accept less than it is owed. That applies to any buyer, including us.",
          "The foreclosure clock is a separate matter. Under Idaho Code 45-1506, notice of a trustee's sale must be given at least 120 days before the day fixed for the sale. That is one statutory minimum inside a longer process. This page does not cover how a pending short sale or deed in lieu request affects a scheduled sale. Ask the servicer and your attorney how the two timelines interact for your loan. Our page on [selling a house before foreclosure in Idaho](/sell-house-before-foreclosure-idaho) covers the ordinary sale route."
        ],
        "claims": [
          "ss-cfpb-short-sale-needs-lender-agreement",
          "ss-cfpb-deed-in-lieu-definition",
          "id-trustee-sale-120-day-notice"
        ]
      },
      {
        "heading": "What Idaho Code says about a deficiency after a foreclosure sale",
        "body": [
          "A deficiency is the part of the debt a foreclosure sale does not cover. Idaho has two statutes on it, one for trust deeds and one for mortgages. Both are written for the situation after a foreclosure sale. They show what a short sale or deed in lieu is being compared against.",
          "For a deed of trust, Idaho Code 45-1512 says a money judgment may be sought for the balance due at any time within 3 months after a sale under the deed of trust. The court must first find the fair market value of the property at the time of sale. The court may not render judgment for more than the amount by which the indebtedness exceeds that fair market value, with interest from the date of sale. In no event may the judgment exceed the difference between the sale price and the entire indebtedness.",
          "For a mortgage foreclosed in court, Idaho Code 6-101 says that if the sheriff's return shows the sale proceeds are insufficient and a balance remains due, judgment can be docketed for that balance against the defendants personally liable for the debt, and it becomes a lien on the judgment debtor's real estate. Idaho Code 6-108 then limits the amount. No Idaho court may enter a deficiency judgment in a mortgage foreclosure for more than the difference between the mortgage indebtedness, plus costs of foreclosure and sale, and the reasonable value of the property as the court determines it on evidence.",
          "Which statute applies depends on the document that secures your loan and on how the lender proceeds. That is a question for an Idaho attorney. For how a judgment lien works once it exists, see [liens and judgments when you sell an Idaho house](/guides/liens-and-judgments-when-selling-in-idaho)."
        ],
        "claims": [
          "ss-trustee-sale-deficiency-three-months",
          "ss-trustee-sale-deficiency-fair-market-value-cap",
          "ss-mortgage-foreclosure-deficiency-docketed",
          "ss-mortgage-deficiency-reasonable-value-cap"
        ]
      },
      {
        "heading": "A short sale or deed in lieu does not release the balance by itself",
        "body": [
          "Idaho Code 45-1512 and 6-108 speak to judgments after a foreclosure sale. Neither section mentions a short sale or a deed in lieu. For those two options, what happens to the unpaid balance comes from the written agreement with the lender.",
          "The CFPB's advice is direct. If you live in a state where you are responsible for a deficiency, ask the lender to waive the deficiency before you go through with a short sale. The CFPB says that in some states the lender could sue after a short sale to collect it. If the lender waives the deficiency, get the waiver in writing and keep it for your records.",
          "The CFPB gives matching advice for a deed in lieu. Make sure it covers the entire amount you still owe on the mortgage loan. You can ask the lender to waive any deficiency, and if the lender agrees, ask for the waiver in writing.",
          "The CFPB does not say how Idaho treats a balance left after a short sale, and the Idaho sections read for this page do not address it. Have an Idaho attorney read the lender's approval letter or the deed in lieu agreement before you sign, and ask specifically whether the remaining balance is released."
        ],
        "claims": [
          "ss-cfpb-short-sale-deficiency-waiver",
          "ss-cfpb-deed-in-lieu-cover-full-balance",
          "ss-trustee-sale-deficiency-three-months",
          "ss-mortgage-deficiency-reasonable-value-cap"
        ]
      },
      {
        "heading": "How the IRS treats canceled mortgage debt in 2026",
        "body": [
          "A waived balance can become a federal tax question. IRS Topic No. 431 says that, in general, if a debt is canceled, forgiven or discharged for less than the amount owed, the canceled amount is taxable and must be reported on the return for the year the cancellation occurred. The IRS lists foreclosure and voluntary transfer of the property to the lender among the ways cancellation can occur for an owner of property securing a debt. The CFPB makes the same point about a deed in lieu: you may still incur a tax liability.",
          "The IRS lists an exclusion for canceled debt on a main home, called qualified principal residence indebtedness. As of the IRS pages read on November 13, 2026, that exclusion is date-limited. Topic No. 431, last reviewed by the IRS on September 24, 2026, lists it as covering debt discharged before January 1, 2026, or discharged subject to an arrangement entered into and evidenced in writing before January 1, 2026. IRS Publication 4681 for 2025 states that this debt cannot be excluded from income for discharges completed or discharge agreements entered into after December 31, 2025. The IRS instructions for Forms 1099-A and 1099-C say the exclusion expires on December 31, 2025.",
          "Other exclusions remain on the IRS list. Topic No. 431 includes debt canceled in a Title 11 bankruptcy case and debt canceled to the extent the taxpayer was insolvent. Publication 4681 explains insolvency as the extent to which total liabilities were more than the fair market value of all assets immediately before the cancellation. An amount that qualifies for exclusion is reported on Form 982, attached to the return.",
          "Topic No. 431 adds a caution for cases where the lender takes the property. The owner is treated as having sold the property to the creditor, and the tax treatment depends on whether the owner was personally liable for the debt. For recourse debt, ordinary income from the cancellation is the amount by which the discharged debt exceeds the property's fair market value. For nonrecourse debt, the IRS says there is no ordinary income from debt cancellation.",
          "On paperwork, the IRS tells covered creditors to file Form 1099-C for a canceled debt of $600 or more once an identifiable event occurs, and it names short sales as an example of such an event. The $600 figure is the creditor's filing threshold. Topic No. 431 says your responsibility to report the correct taxable amount remains regardless of the accuracy of the form you receive.",
          "Two limits on this section. The 2026 edition of Publication 4681 had not been published when this page was written, and Congress can change the law after an IRS page is posted. Publication 4681 itself points readers to the IRS website for legislation enacted after publication. This page also covers federal tax only. Take the lender's written terms to a tax professional before you agree to them."
        ],
        "claims": [
          "ss-irs-canceled-debt-generally-taxable",
          "ss-cfpb-deed-in-lieu-cover-full-balance",
          "ss-irs-principal-residence-exclusion-ended-2025",
          "ss-irs-bankruptcy-insolvency-exclusions",
          "ss-irs-property-taken-treated-as-sale",
          "ss-irs-1099c-600-short-sale-event"
        ]
      },
      {
        "heading": "Idaho's seller disclosure form and these two options",
        "body": [
          "Idaho's property condition disclosure requirement has a list of exempt transfers in Idaho Code 55-2505. One of them is a transfer to a mortgagee by a mortgagor by deed in lieu of foreclosure or in satisfaction of the mortgage debt. Another is a transfer to a beneficiary of a deed of trust by a trustor in default.",
          "Those exemptions describe transfers to the lender. A short sale is a sale by the owner to a buyer, and the foreclosure exemptions quoted here do not name it. Our guide to [Idaho seller disclosure when selling as-is](/guides/idaho-seller-disclosure-when-selling-as-is) covers the form in an ordinary sale."
        ],
        "claims": [
          "id-disclosure-exempt-foreclosure"
        ]
      },
      {
        "heading": "Who to talk to before you sign",
        "body": [
          "Start with the servicer, because only the lender can approve either option. Then get independent help. The CFPB describes a housing counselor through a HUD-approved agency as specially trained and certified by the government to help you assess your financial situation, evaluate your options when you are having trouble paying the mortgage, and make a plan. The CFPB says HUD-approved housing counseling agencies provide foreclosure prevention counseling free of charge and can help you talk to your servicer and understand the options it has offered.",
          "An Idaho attorney should read the deficiency terms. A tax professional should read the canceled debt terms.",
          "Idaho also gives an owner in foreclosure a way out of a contract signed in a hurry. Under Idaho Code 45-1603, an owner whose property is in foreclosure may cancel a contract relating to that property, entered into during the foreclosure period, within five business days by written notice. That right applies to a contract with any buyer, including one with us."
        ],
        "claims": [
          "ss-cfpb-hud-approved-housing-counselor",
          "vb-cfpa-five-business-day-rescission"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We are a direct buyer. We buy with our own capital, in any condition, the purchase closes through a local title company, and the seller chooses the closing date. If your house is worth more than you owe, an ordinary sale pays off the loan at closing and you need neither a short sale nor a deed in lieu. In that case a three-week close with us is realistic, and so is listing the house, which may bring a higher price if you have the time. Our page on a [cash offer vs listing in Idaho](/cash-offer-vs-listing-idaho) compares the two.",
          "If you owe more than the house will sell for, we are a poor fit for most of what you need. We cannot stop a foreclosure, negotiate with your lender, approve a short sale, or give legal or tax advice. We can make an offer that your lender is free to accept or refuse, and the timing then belongs to the lender. A deed in lieu involves no buyer at all. In either case, a HUD-approved housing counselor, an Idaho attorney and a tax professional will serve you better than any buyer can."
        ],
        "claims": []
      }
    ]
  },

  "after-a-foreclosure-sale-in-idaho": {
    "intro": [
      "Idaho Code 45-1508 says a trustee's sale ends the interest of everyone who was given notice of it, and that those people have no right to redeem the property from the purchaser. Under Idaho Code 45-1506(11) the purchaser is entitled to possession on the tenth day following the sale. The sale money is applied in the order set by Idaho Code 45-1507, with any surplus going to the borrower, and under Idaho Code 45-1512 the lender has 3 months to ask a court for a money judgment on any balance, limited by the property's fair market value.",
      "This page describes what Idaho Code and federal law say, quoted from the official sources. It is not legal or tax advice and it is not applied to your situation. If a trustee's sale of your home has happened or is about to, talk to an Idaho attorney. We cannot stop a foreclosure, reverse a sale, or negotiate with a lender."
    ],
    "sections": [
      {
        "heading": "Can I get the house back after the trustee's sale?",
        "body": [
          "Idaho's deed of trust statute has no redemption period after the sale. Idaho Code 45-1508 says a sale made by a trustee forecloses and terminates all interest in the property of all persons to whom notice was given under section 45-1506, and of anyone claiming through them. It then says those persons \"shall have no right to redeem the property from the purchaser at the trustee's sale.\"",
          "The same section addresses mistakes in the notice process. A failure to give notice to one person does not affect the validity of the sale as to people who were notified or who had actual knowledge of the sale. A failure to comply with section 45-1506 does not affect the validity of a sale in favor of a purchaser in good faith for value.",
          "Idaho Code 45-1510(2) describes one way a trustee's deed is undone. Where a sale is invalid because of the automatic stay provisions of the U.S. bankruptcy code, a court's stay order, or otherwise, recording a notice of rescission restores record title and lien priorities to where they stood before the sale. Only the trustee or beneficiary who recorded the deed, or a successor, may record that notice. The former owner cannot record it.",
          "Whether a particular sale was valid is a question for a court and an attorney. This page covers a trustee's sale under a deed of trust. A foreclosure by court action and a county tax deed follow other statutes. Our guide on [foreclosure versus property tax delinquency](/guides/idaho-foreclosure-vs-property-tax-delinquency) explains the tax deed process, which has its own redemption rule."
        ],
        "claims": [
          "as-sale-ends-interest-no-redemption",
          "as-notice-defect-good-faith-purchaser",
          "as-rescission-of-trustee-deed-invalid-sale",
          "id-tax-deed-redemption-fourteen-months"
        ]
      },
      {
        "heading": "What the trustee's deed gives the purchaser",
        "body": [
          "The statute calls the borrower who signed the deed of trust the grantor. Under Idaho Code 45-1506(9), the purchaser at the sale pays the price bid forthwith, and the trustee then executes and delivers the trustee's deed. Under subsection (10), that deed conveys the interest the grantor had, or had the power to convey, when the trust deed was signed, together with any interest the grantor acquired afterwards.",
          "Idaho Code 45-1510(1) covers recording. Once the trustee's deed is recorded in the county where the property is located, the recitals in the deed and in the required affidavits are prima facie evidence of their truth in any court. They are conclusive in favor of a purchaser in good faith for value.",
          "The deed is deemed effective as of the date and time of the sale if it is recorded within fifteen days after the sale. If the county recorder is closed on the fifteenth day, the first business day after it counts. That fifteen-day rule is about the deed's effective date. It gives the former owner no additional time."
        ],
        "claims": [
          "as-trustee-deed-conveys-grantor-interest",
          "as-trustee-deed-recitals-and-effective-date"
        ]
      },
      {
        "heading": "When do I have to leave the house?",
        "body": [
          "Idaho Code 45-1506(11) says the purchaser \"shall be entitled to possession of the property on the tenth day following the sale.\" Anyone who remains in possession after that, under any interest except one prior to the deed of trust, is deemed a tenant at sufferance.",
          "The statute gives the purchaser a court route to possession. Idaho Code 6-310 covers an action exclusively for possession of a tract of five acres or less where the occupant is a tenant at sufferance under 45-1506(11). In that action the complaint may state that no notice is required because of that status. The court must schedule a trial within twelve days from the filing of the complaint. The summons, complaint and notice of trial setting must be served on the occupant not less than five days before the trial date.",
          "Those day counts describe how the court schedules the case. They are not a move-out date for any particular household, and this page does not cover what follows a judgment. Anyone served with papers in a possession action should speak to an attorney right away.",
          "Belongings left behind have their own rule. Under Idaho Code 45-1506(15), on or after the tenth day, a purchaser who reasonably determines the property is unoccupied may remove nontitled personal property and place it in suitable storage. The purchaser may dispose of it only after ninety days' written notice, sent by first class mail to the last known address of the last known occupant and posted in a conspicuous place on the premises. An owner who does not claim the property within those ninety days loses all rights in it."
        ],
        "claims": [
          "as-possession-tenth-day",
          "as-possession-action-tenant-at-sufferance",
          "as-unoccupied-personal-property-ninety-days"
        ]
      },
      {
        "heading": "Who gets the money if the house sells for more than the debt?",
        "body": [
          "Idaho Code 45-1507 sets the order in which the trustee applies the sale proceeds. First come the expenses of the sale, including a reasonable charge by the trustee and a reasonable attorney's fee. Second is the obligation secured by the trust deed. Third are any persons having recorded liens subsequent to the interest of the trustee in the trust deed, as their interests may appear.",
          "The fourth and last item is \"the surplus, if any, to the grantor of the trust deed or to his successor in interest entitled to such surplus.\" The former owner is paid only after the sale costs, the foreclosing loan, and later recorded liens. A later recorded lien, such as a second deed of trust or a recorded judgment lien, comes ahead of the owner in that order. Our guide to [liens and judgments on an Idaho house](/guides/liens-and-judgments-when-selling-in-idaho) explains how those liens arise.",
          "Section 45-1507 sets the order and nothing else. It does not say when the trustee pays, how a former owner claims a surplus, or how a disputed lien is resolved. It puts the duty to apply the proceeds on the trustee. If you believe a sale produced a surplus, an attorney can tell you how to make a claim."
        ],
        "claims": [
          "as-proceeds-order-and-surplus",
          "ln-judgment-lien-arises-on-recording"
        ]
      },
      {
        "heading": "Can the lender still come after me for the balance?",
        "body": [
          "Idaho allows a deficiency judgment after a trustee's sale and limits it in two ways. Idaho Code 45-1512 says that \"at any time within 3 months after any sale under a deed of trust,\" a money judgment may be sought for the balance due on the obligation the deed of trust secured.",
          "The second limit is on the amount. Before entering judgment, the court must find the fair market value of the property at the time of sale. The judgment may not be more than the amount by which the entire debt due at the time of sale exceeds that fair market value, with interest from the date of sale. In no event may it exceed the difference between the amount the property sold for and the entire debt secured by the deed of trust.",
          "So there are two ceilings: the debt less fair market value, and the debt less the sale price. The court makes the fair market value finding. No one else's estimate takes its place, including a buyer's.",
          "Section 45-1512 speaks of the obligation for which the foreclosed deed of trust was given as security. It does not address a separate loan from a different lender that was also secured by the house. Ask an attorney about any other debt of that kind."
        ],
        "claims": [
          "as-deficiency-three-month-window",
          "as-deficiency-fair-market-value-limit"
        ]
      },
      {
        "heading": "What happens to a tenant living in the house?",
        "body": [
          "A federal law, the Protecting Tenants at Foreclosure Act, applies to a foreclosure on a federally-related mortgage loan or on any dwelling or residential real property. It says the immediate successor in interest takes the property subject to giving any bona fide tenant a notice to vacate at least 90 days before the effective date of the notice.",
          "A bona fide tenant with a bona fide lease entered into before the notice of foreclosure may stay until the end of the remaining lease term. The exception is a sale of the unit to a purchaser who will occupy it as a primary residence. In that case the successor in interest may end the lease on the date of that sale, and the tenant still receives the 90 day notice. A tenant without a lease, or with a lease terminable at will, also receives the 90 day notice. The act defines the date of a notice of foreclosure as the date complete title is transferred to the successor.",
          "A lease or tenancy is bona fide only if three things are true. The tenant is not the mortgagor or the mortgagor's child, spouse or parent. The lease or tenancy was the result of an arms-length transaction. The rent is not substantially less than fair market rent, unless it is reduced or subsidized by a federal, state or local subsidy.",
          "The act expired at the end of 2014 and was restored in 2018. The Federal Reserve Board's letter on the restoration says the law became effective on June 23, 2018, and that the restored act does not include an expiration date. The 2024 Edition of the United States Code prints the section as restored and revived. The same letter says the law does not cover homeowners in foreclosure or tenants who enter into lease agreements after a foreclosure sale. The 90 days belongs to tenants. For a former owner, the Idaho rule is the tenth-day rule described above.",
          "Idaho's statute treats people who remain after the tenth day as tenants at sufferance, and the federal act says it does not affect any state or local law that provides longer time periods or other additional protections for tenants. How the two apply to a specific tenancy is a question for an attorney. A landlord thinking about a sale while a lease is running can read [selling a rental with tenants in Idaho](/guides/selling-a-rental-with-tenants-in-idaho)."
        ],
        "claims": [
          "as-ptfa-90-day-notice",
          "as-ptfa-lease-runs-to-end-of-term",
          "as-ptfa-bona-fide-definition",
          "as-ptfa-restored-2018-no-expiration",
          "as-ptfa-does-not-cover-homeowners",
          "as-possession-tenth-day"
        ]
      },
      {
        "heading": "How long a foreclosure can stay on a credit report",
        "body": [
          "The federal Fair Credit Reporting Act sets the reporting period. The statute, 15 U.S.C. 1681c, does not name foreclosure. Its general rule bars a consumer reporting agency from reporting any other adverse item of information, other than records of convictions of crimes, that antedates the report by more than seven years. The Consumer Financial Protection Bureau puts it this way: a credit reporting company generally can report most negative information for seven years.",
          "A deficiency judgment is a court judgment, and the statute treats judgments separately. Civil suits and civil judgments may be reported for seven years from the date of entry or until the governing statute of limitations has expired, whichever is longer.",
          "The statute has exceptions. The time limits do not apply to a credit report used in connection with a credit transaction involving a principal amount of $150,000 or more, the underwriting of life insurance with a face amount of $150,000 or more, or employment at an annual salary of $75,000 or more.",
          "The Bureau also says that no one has the right to remove negative information from a credit report if it is accurate. These rules limit what a credit report may contain. They do not set a credit score or any lender's waiting period for a new loan."
        ],
        "claims": [
          "as-fcra-seven-year-adverse-item",
          "as-fcra-exceptions-large-transactions",
          "as-cfpb-negative-information-seven-years"
        ]
      },
      {
        "heading": "Who to talk to after a sale",
        "body": [
          "The deadlines on this page are short and they are set by statute. An Idaho attorney is the person to ask whether a sale was valid, how to claim a surplus, how to answer a deficiency lawsuit, and what a possession action means for your household.",
          "A housing counselor is a second source of help. The Consumer Financial Protection Bureau says housing counselors can provide advice on buying a home, renting, defaults, forbearances, foreclosures and credit issues. It says the counseling agencies on its searchable list are approved by the U.S. Department of Housing and Urban Development and can offer independent advice, often at little or no cost. A housing counselor is not an attorney and does not replace one."
        ],
        "claims": [
          "as-cfpb-housing-counselors-hud-approved"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "After a trustee's sale we have no role. The former owner no longer holds title, so there is nothing for us to buy from them. We cannot stop a foreclosure, undo a sale, recover a surplus, or negotiate with a lender, and we do not give legal or tax advice. The people who can help at that point are an attorney and a housing counselor.",
          "Before a sale, an owner who still holds title can sell. Idaho requires at least 120 days' notice before a trustee's sale. We buy with our own capital, in any condition, and close through a local title company on a date the seller chooses; a three-week close is realistic. If there is time and the house is in good repair, listing it on the open market may bring a higher price than we would pay. Under Idaho Code 45-1603, a contract signed during the foreclosure period can be cancelled within five business days, and that includes a contract with us. More on timing is on our page about [selling a house before foreclosure](/sell-house-before-foreclosure-idaho)."
        ],
        "claims": [
          "id-trustee-sale-120-day-notice",
          "vb-cfpa-five-business-day-rescission"
        ]
      }
    ]
  },

  "foreclosure-rescue-scams-in-idaho": {
    "intro": [
      "A foreclosure rescue scam takes an upfront fee, a deed or a home's equity on a false promise of saving the owner from foreclosure. Federal Regulation O makes it a violation for a mortgage relief company to collect any fee before you have signed a written agreement with your own lender or servicer. Idaho Code 45-1602 and 45-1603 require a written warning notice with any contract that transfers an interest in a home during the foreclosure period, and give the owner five business days to cancel a contract about the property.",
      "This page describes what those statutes, regulations and agency pages say. It is not legal advice and it is not applied to your situation. We are a direct buyer of houses. We cannot stop a foreclosure, negotiate with your lender or tell you what your rights are in a specific contract. An Idaho attorney can, and a HUD-approved housing counselor can explain your options with the loan."
    ],
    "sections": [
      {
        "heading": "What a foreclosure rescue scam looks like",
        "body": [
          "The Consumer Financial Protection Bureau describes mortgage loan modification scams as schemes to take your money, often by making a false promise of saving you from foreclosure. Its list of what scammers may do is short: ask for fees upfront, promise to get you a loan modification, ask you to sign over the title to your property, ask you to sign papers you do not understand, say you should start making payments to someone other than your servicer or lender, or tell you to stop making mortgage payments altogether.",
          "The Federal Trade Commission names the common versions. In phony counseling, the scammers say they are housing counselors, lawyers or from the government, typically tell you not to contact your lender, lawyer or housing counselor, and may tell you to make your mortgage payments directly to them. In a forensic audit pitch, someone posing as a loan auditor offers to review your mortgage documents. The FTC says scammers cannot promise that a forensic loan audit will get you a loan modification or any other mortgage relief.",
          "Several patterns involve the deed. In a rent-to-buy scheme, you give up the deed and are told you can stay as a renter and buy the home back later. In a rescue loan scheme, a document that gives away the deed is buried in a stack of loan papers you are pressed to sign quickly. In equity skimming, the FTC says, scammers tell you that you can get the home back once you are on your feet, or trick you into selling for cash for much less than similar homes sell for. The FTC's warning is the same in each case: if you transfer the deed you are not likely to get it back, and transferring the deed does not transfer the mortgage.",
          "The Idaho Attorney General's Consumer Protection Manual says foreclosure rescue companies advertise that they can help distressed consumers save their homes, but often strip consumers of their equity and make them tenants in their own homes.",
          "The FTC adds that scammers may want payment only by cashier's check, wire transfer or a mobile payment app, because it is hard to get that money back."
        ],
        "claims": [
          "fs-cfpb-scam-warning-signs",
          "fs-ftc-phony-counseling",
          "fs-ftc-forensic-audits",
          "fs-ftc-rent-to-buy-and-rescue-loans",
          "vb-ftc-equity-skimming",
          "vb-ftc-deed-transfer-warning",
          "fs-idag-manual-foreclosure-rescue",
          "vb-ftc-upfront-payment-methods"
        ]
      },
      {
        "heading": "Federal law bars upfront fees for mortgage relief",
        "body": [
          "The federal rule is 12 CFR part 1015, known as Regulation O. The FTC calls it the Mortgage Assistance Relief Services (MARS) Rule. It covers any service, plan or program offered for payment that is represented to help a consumer with things such as stopping, preventing or postponing a foreclosure sale, getting a loan modification or forbearance, or negotiating a short sale or a deed-in-lieu of foreclosure. It applies to loans on a dwelling, which the rule defines as a residential structure of four or fewer units. The lender, the servicer and their agents are outside the definition of a provider.",
          "Section 1015.5(a) is the advance-fee ban. It is a violation for a provider to request or receive payment of any fee or other consideration until the consumer has executed a written agreement with the loan holder or servicer that incorporates the offer of relief the provider obtained. The trigger is the consumer's signed agreement with the lender or servicer.",
          "The FTC's summary: it is illegal for a company to charge you a penny until it has given you a written offer for a loan modification or other relief from your lender and you accept the offer. The CFPB adds that the company must also give you a written document from the lender or servicer describing the key changes to your mortgage, and a reminder that you may reject the offer without any charge. The regulation requires that reminder on a separate written page.",
          "Attorneys are treated differently, within limits. Under section 1015.7, an attorney who provides these services as part of the practice of law, is licensed in the state where the consumer lives or the home is located, and complies with state law is exempt from most of the rule. That attorney is exempt from the advance-fee ban as well only if money received before the legal work is done goes into a trust account holding the client's funds. The FTC notes that a lawyer working for a company does not mean the company can charge an upfront fee."
        ],
        "claims": [
          "fs-rego-scope-regulation-o",
          "fs-rego-mars-definition",
          "fs-rego-provider-excludes-lender-servicer",
          "fs-rego-advance-fee-ban",
          "fs-ftc-upfront-fee-illegal-mars-rule",
          "fs-cfpb-fees-only-after-written-offer",
          "fs-rego-right-to-reject-offer-disclosure",
          "fs-rego-attorney-exemption",
          "fs-ftc-lawyer-check"
        ]
      },
      {
        "heading": "What a mortgage relief company must tell you, and what it may not say",
        "body": [
          "Regulation O requires specific sentences in a provider's advertising. Every general advertisement must state that the company is not associated with the government and that its service is not approved by the government or your lender. Where the company has represented that it will get a result such as a loan modification, it must add that even if you accept the offer and use the service, your lender may not agree to change your loan.",
          "If a provider has represented that you should stop making loan payments, it must disclose, close to that statement, that if you stop paying your mortgage you could lose your home and damage your credit rating.",
          "Section 1015.3 lists what a provider may not represent. It is a violation to represent that a consumer cannot or should not contact or communicate with the lender or servicer. It is also a violation to misrepresent that the service is affiliated with, endorsed or approved by the government, a government agency, a nonprofit housing counselor agency or program, or the consumer's lender."
        ],
        "claims": [
          "fs-rego-required-advertising-disclosures",
          "fs-rego-prohibited-representations"
        ]
      },
      {
        "heading": "Idaho requires a license to arrange loan modifications for pay",
        "body": [
          "Idaho regulates paid loan modification work under the Idaho Residential Mortgage Practices Act. Idaho Code 26-31-201 defines loan modification activities as engaging in, or offering to engage in, effecting loan modifications in Idaho for compensation or gain. The same section counts engaging in loan modification activities on behalf of a borrower as mortgage brokering activities. A refinancing is outside the definition of a loan modification.",
          "Idaho Code 26-31-203 says no person, except an exempt one, shall engage in mortgage brokering activities without first obtaining a license from the department. A non-exempt person who does so is guilty of a felony on conviction. The exemptions in 26-31-202 include Idaho attorneys, to the extent they are retained by their clients and the activity is ancillary to representing the client.",
          "Idaho also sets a written-agreement rule. Under Idaho Code 26-31-211(11), a licensee, or a person required to hold the license, may not receive a fee for loan modification activities except under a written agreement. The agreement must specify the fee, specify the terms of the loan for which modification will be sought, and disclose the expected impact on the monthly payment and the length of the loan.",
          "The Idaho Department of Finance is the licensing agency. It says the act charges it with licensing and regulating mortgage lenders and brokers, mortgage loan modification companies and mortgage loan originators, and that all mortgage licensing is handled through the Nationwide Multistate Licensing System and Registry (NMLS). The Department tells consumers to confirm a provider is licensed by using its licensee lookup page."
        ],
        "claims": [
          "fs-irmpa-loan-modification-is-brokering",
          "fs-irmpa-unlicensed-activity-felony",
          "fs-irmpa-attorney-exemption",
          "fs-irmpa-loan-mod-fee-written-agreement",
          "fs-idfin-licenses-loan-modification-companies",
          "fs-idfin-license-lookup-and-complaints"
        ]
      },
      {
        "heading": "Idaho requires a written notice and gives five business days to cancel",
        "body": [
          "Idaho's Consumer Foreclosure Protection Act is Idaho Code 45-1601 to 45-1605. The Legislature found that some persons and businesses defraud homeowners of their title, equity or other value under the guise of stopping or postponing a foreclosure sale. It also directed that the chapter be read so that it does not inhibit transactions with legitimate lenders and investors.",
          "Section 45-1602 applies during the foreclosure period described in section 45-1506, the section that requires notice of a trustee's sale at least 120 days before the sale date. During that period, any contract or agreement with the owner of record that involves the transfer of any interest in residential real property subject to foreclosure must be in writing. It must be accompanied by a notice in at least 12-point boldface type.",
          "The notice is headed \"NOTICE REQUIRED BY IDAHO LAW\". It says some individuals or businesses may say they can \"save\" your home from foreclosure, that you should be cautious about such claims, and that a plan to \"rescue\" you may result in your losing valuable equity. It tells you to consult an attorney or financial professional if possible, and adds: \"Do not delay seeking advice, because the longer you wait, the fewer options you may have.\" It points to HUD's list of approved housing counselors and to the Idaho Attorney General's website. If the deal was solicited, negotiated or represented to the consumer in Spanish, the notice must be in Spanish, on a form prepared by the office of the attorney general.",
          "The cancellation right is in Idaho Code 45-1603. A person whose property is in foreclosure as described in section 45-1505 has the right to cancel or rescind any and all contracts or agreements relating to the property entered into during the foreclosure period, within five business days of entering into the contract. The same section says neither funds nor an interest in the property shall be transferred or transferable until the five days have passed.",
          "Cancellation occurs when the owner gives written notice of cancellation to all other parties to the contract. The notice need not take any particular form. It is effective if it indicates the intention not to be bound. A notice given by mail is effective when deposited in the mail, properly addressed with postage prepaid. Notice by certified mail, return receipt requested, to the address in the contract is conclusive proof of notice of service.",
          "One wording difference is worth knowing. The printed notice in 45-1602 says \"five (5) days\". Section 45-1603, which creates the right, says five business days. An attorney can say how the period runs for a specific contract."
        ],
        "claims": [
          "vb-cfpa-legislative-findings",
          "vb-cfpa-written-notice-required",
          "fs-cfpa-notice-heading-and-rescission-line",
          "fs-cfpa-spanish-language-notice",
          "id-trustee-sale-120-day-notice",
          "vb-cfpa-five-business-day-rescission",
          "fs-cfpa-mailed-cancellation-effective-on-deposit"
        ]
      },
      {
        "heading": "These Idaho protections also cover a contract to sell your house to a buyer",
        "body": [
          "Section 45-1602 reaches any contract that involves the transfer of any interest in the home, and a sale is one. Section 45-1604 lists who the chapter does not apply to: regulated lenders, banks, trust companies, savings and loan associations, credit unions and industrial loan companies, licensed mortgage lenders and brokers, employees and agents of those organizations acting in that role, and family members of the owner of record.",
          "Nothing in that list excludes a company that buys houses, and that includes us. If you sign a purchase contract with us during the foreclosure period, the written notice and the five-business-day cancellation right in this chapter are yours. The bar on transferring funds or an interest in the property before the five days have passed applies as well.",
          "Section 45-1605 makes a person who violates the chapter liable for penalties and damages under chapter 6, title 48, Idaho Code, in addition to any other penalty provided by law.",
          "The act does not treat buyers as scammers. The Legislature said the chapter should not inhibit transactions with legitimate lenders and investors. Every buyer can be checked the same way, and [how to check a cash buyer in Idaho](/how-to-check-a-cash-buyer-in-idaho) sets out the public records to use."
        ],
        "claims": [
          "vb-cfpa-exclusions",
          "vb-cfpa-written-notice-required",
          "vb-cfpa-five-business-day-rescission",
          "vb-cfpa-penalties-title-48",
          "vb-cfpa-legislative-findings"
        ]
      },
      {
        "heading": "Help from your servicer and a HUD-approved housing counselor",
        "body": [
          "The FTC's first instruction is to contact your mortgage servicer or lender immediately if you are having trouble paying or have received a foreclosure notice, even if the foreclosure process has already started.",
          "The second is a housing counselor. The CFPB's housing counselor search lists counseling agencies approved by the U.S. Department of Housing and Urban Development. The CFPB says they can offer independent advice, often at little or no cost, on defaults, forbearances and foreclosures, and that not every counselor offers all services. HUD says you can find a housing counseling agency by calling 800-569-4287.",
          "The Idaho Attorney General's manual says consumers should consult a private attorney before they sign any contract involving the ownership of their homes. For how the Idaho process itself runs, see [Idaho foreclosure vs. property tax delinquency](/guides/idaho-foreclosure-vs-property-tax-delinquency)."
        ],
        "claims": [
          "fs-ftc-legitimate-help",
          "fs-cfpb-housing-counselors-hud-approved",
          "fs-hud-housing-counseling-phone",
          "fs-idag-manual-foreclosure-rescue"
        ]
      },
      {
        "heading": "Where to report a foreclosure rescue scam in Idaho",
        "body": [
          "Idaho Attorney General. The Consumer Protection Division enforces Idaho's Consumer Protection Act and takes complaints through the Consumer Complaint Form on ag.idaho.gov. The division lists its phone as 208-334-2424, toll-free 1-800-432-3545. The office says a consumer may inform it without requesting action, or may request an informal dispute resolution process.",
          "Idaho Department of Finance. The Department invites written complaints, with supporting documents, about institutions it regulates and alleged violations of its laws and rules. If the company is one it does not regulate, the Department says it will refer the complaint to the correct agency. It also says it cannot give legal advice.",
          "Federal Trade Commission. The FTC says to report a suspected mortgage relief scam at ReportFraud.ftc.gov and to your state attorney general.",
          "Consumer Financial Protection Bureau. The CFPB says you can report a company by submitting a complaint online or by calling (855) 411-CFPB (2372)."
        ],
        "claims": [
          "fs-idag-consumer-protection-complaints",
          "fs-idag-informal-dispute-resolution",
          "fs-idfin-license-lookup-and-complaints",
          "fs-ftc-where-to-report",
          "fs-cfpb-report-and-get-help"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy property in Ada County with our own capital, in any condition. A purchase closes through a local title company, the seller chooses the closing date, and a three-week close is realistic. A purchase is a sale and nothing more. We cannot stop or postpone a foreclosure, negotiate with a lender, or promise an outcome with your loan. Our page on [selling a house before foreclosure in Idaho](/sell-house-before-foreclosure-idaho) covers that route.",
          "A sale to us is the wrong route if you can keep the home. If your servicer will agree to a repayment plan or a modification you can afford, or you can bring the loan current, talk to the servicer and a housing counselor first. If the house is in sound condition and there is time before the sale date, listing it may bring a higher price than we would pay. If you do sign with any buyer during the foreclosure period, read the Idaho notice and have an attorney look at the contract inside the five business days."
        ],
        "claims": []
      }
    ]
  },

  "inheriting-a-house-with-a-mortgage-in-idaho": {
    "intro": [
      "When an Idaho homeowner dies, the lien stays on the house and the payments keep falling due. A federal statute, 12 U.S.C. 1701j-3(d), bars a lender from calling the loan due under a due-on-sale clause because a home with fewer than five dwelling units passed to a relative on the borrower's death. The person who inherits can keep paying and ask to take over the loan, sell the house and pay the loan off, or let the house go. If payments stop, the lender keeps its right to foreclose.",
      "This page describes what federal statute, federal mortgage servicing rules, the Consumer Financial Protection Bureau and Idaho Code say, quoted from the official sources. It is not legal or tax advice and it is not applied to your loan or your family. We are a property buyer. We cannot stop a foreclosure, negotiate with a lender or promise an outcome. An Idaho attorney and a HUD-approved housing counselor are the people to ask about your own situation."
    ],
    "sections": [
      {
        "heading": "The loan does not end when the owner dies",
        "body": [
          "Idaho's probate code treats a mortgage as something that stays attached to the property. Idaho Code 15-2-609 says a specific devise, meaning a gift of particular property in a will, \"passes subject to any security interest existing at the date of death, without right of exoneration, regardless of a general directive in the will to pay debts.\" That section speaks only of a specific devise. A house that passes without a will, or under a different kind of gift, is a question for a probate attorney.",
          "The same code keeps the lender's remedy in place. Idaho Code 15-3-812 stops ordinary judgment creditors from levying on estate property, and then says the section does not prevent \"the enforcement of mortgages, pledges or liens upon real or personal property in an appropriate proceeding.\" Idaho Code 15-3-104 makes creditors wait for a personal representative to be appointed before enforcing a claim against the estate, and states that it has no application to a secured creditor enforcing its right to its security, except as to any deficiency judgment.",
          "The Consumer Financial Protection Bureau put the practical point this way in a December 2024 report: where there is a mortgage on the home, people who become homeowners after a death \"must act quickly to make mortgage payments in order to avoid foreclosure.\""
        ],
        "claims": [
          "im-idaho-specific-devise-passes-subject-to-lien",
          "im-idaho-liens-enforceable-against-estate-property",
          "im-idaho-claims-procedure-excludes-secured-creditor-security",
          "im-cfpb-spotlight-act-quickly-on-payments"
        ]
      },
      {
        "heading": "Can the lender call the whole loan due because the owner died?",
        "body": [
          "A loan contract may contain a due-on-sale clause. 12 U.S.C. 1701j-3 defines it as a provision that lets a lender declare the secured sums due and payable if the property, or an interest in it, is sold or transferred without the lender's prior written consent. The statute, part of the Garn-St Germain Depository Institutions Act of 1982, generally lets lenders enforce these clauses according to the loan contract.",
          "Subsection (d) carves out exceptions. For a loan secured by residential real property \"containing less than five dwelling units,\" a lender may not exercise a due-on-sale clause upon \"a transfer by devise, descent, or operation of law on the death of a joint tenant or tenant by the entirety,\" upon \"a transfer to a relative resulting from the death of a borrower,\" or upon \"a transfer where the spouse or children of the borrower become an owner of the property.\"",
          "The limits of that protection matter. The section does not define \"relative.\" It concerns the due-on-sale clause only, and it says nothing about missed payments. It does not make the person who inherits the borrower, and it does not require a lender to approve an assumption. The statute says only that a lender \"is encouraged to permit an assumption\" at the existing contract rate or a blended rate."
        ],
        "claims": [
          "im-garn-due-on-sale-clause-defined",
          "im-garn-due-on-sale-enforceable-by-contract",
          "im-garn-exempt-transfers-on-death",
          "im-garn-assumption-encouraged-not-required"
        ]
      },
      {
        "heading": "What a successor in interest is under federal servicing rules",
        "body": [
          "The CFPB describes the mortgage servicer as the company that sends the monthly mortgage statement and responds to borrower inquiries. The CFPB's Regulation X sets rules for how a servicer deals with the people who take ownership after a death. 12 CFR 1024.31 defines a successor in interest as a person to whom an ownership interest in the mortgaged property is transferred from a borrower by one of five listed kinds of transfer. Three of them match the statute above: a transfer on the death of a joint tenant or tenant by the entirety, a transfer to a relative resulting from the death of a borrower, and a transfer where the spouse or children of the borrower become an owner.",
          "A confirmed successor in interest is a successor in interest \"once a servicer has confirmed the successor in interest's identity and ownership interest\" in the property. Under 12 CFR 1024.30(d), a confirmed successor in interest \"shall be considered a borrower\" for purposes of the servicing rules. That status is about information, notices and servicing procedures. It is separate from owing the debt, which is covered below.",
          "These rules have limits. Under 12 CFR 1024.30, small servicers, reverse mortgages and certain other lenders are outside the general servicing policies and the loss mitigation procedures, and the early intervention and loss mitigation procedures apply only to a loan secured by the borrower's principal residence. Idaho's trust deed statute also uses the phrase \"successor in interest,\" for its own purposes. The two are different definitions."
        ],
        "claims": [
          "im-cfpb-inherited-home-contact-servicer-proof",
          "im-regx-successor-in-interest-defined",
          "im-regx-confirmed-successor-defined",
          "im-regx-confirmed-successor-treated-as-borrower",
          "af-regx-scope"
        ]
      },
      {
        "heading": "How to get information about the loan",
        "body": [
          "The CFPB says a person who has inherited a home should inform the loan servicer, and that the person may need to show proof of their right to the home before the servicer releases certain account information. After a death, the CFPB says, that proof \"might include a copy of the executed will and the death certificate or a letter from the executor of the deceased person's estate.\" The servicer should say what proof it needs.",
          "Regulation X sets out the servicer's side. Under 12 CFR 1024.36(i), when a person sends a written request saying they may be a successor in interest, with the borrower's name and enough information to identify the loan account, the servicer must respond with a written description of the documents it reasonably requires to confirm the person's identity and ownership interest, and with contact information including a telephone number. Until confirmation, the servicer is not required to provide other account information, and it must indicate that the request can be resubmitted once the person is confirmed.",
          "12 CFR 1024.38(b)(1)(vi) requires servicers covered by that section to keep policies and procedures reasonably designed so that, on notice of a borrower's death, they can promptly facilitate communication with potential successors, promptly describe the documents they need, and promptly make a confirmation determination and notify the person of the result. The rule's word is \"promptly.\" It gives no number of days.",
          "In Idaho the person with authority over a decedent's estate is the personal representative, and that authority comes from being appointed and issued letters. Our guide to [selling a house in probate in Idaho](/guides/selling-a-house-in-probate-in-idaho) covers how letters are obtained in Ada County."
        ],
        "claims": [
          "im-cfpb-inherited-home-contact-servicer-proof",
          "im-regx-potential-successor-written-request",
          "im-regx-before-confirmation-limited-information",
          "im-regx-servicer-policies-after-death",
          "af-regx-scope",
          "pb-letters-required"
        ]
      },
      {
        "heading": "Inheriting the house is different from owing the debt",
        "body": [
          "Regulation X addresses liability in the notice a servicer may send to a confirmed successor in interest who is not liable on the loan. Under 12 CFR 1024.32(c)(1), that notice must explain that unless the successor assumes the mortgage loan obligation under State law, the successor \"is not liable for the mortgage debt and cannot be required to use the successor in interest's assets to pay the mortgage debt, except that the lender has a security interest in the property and a right to foreclose on the property, when permitted by law and authorized under the mortgage loan contract.\"",
          "The CFPB said much the same in a 2014 interpretive rule: where a successor acquires property that is subject to a mortgage, \"the successor is not personally liable for the associated debt, but may choose to assume the debt.\"",
          "The Regulation X notice is addressed to a successor who is not liable on the loan. A co-borrower, a spouse who signed the note, and anyone who later assumes the loan stand in a different position, and Idaho's rules on a married couple's debts and on claims against an estate are outside this page. Ask an Idaho attorney before assuming you owe nothing or that you owe everything.",
          "The same notice comes with an acknowledgment form. The rule says there is no time limit to return it, and that the servicer will not begin sending certain notices and communications until it is returned. Whether or not the form is signed, the notice must explain that the successor is entitled to submit notices of error, requests for information, and requests for a payoff statement."
        ],
        "claims": [
          "im-regx-successor-not-liable-unless-assumes",
          "im-cfpb-2014-successor-not-personally-liable-may-assume",
          "im-regx-successor-notice-acknowledgment-form",
          "im-regx-successor-may-request-payoff-and-information"
        ]
      },
      {
        "heading": "Choice one: keep paying, and ask about taking over the loan",
        "body": [
          "The CFPB suggests asking the servicer how to continue making payments on the loan or how to seek a loan modification. Its December 2024 report ties making the mortgage payments to avoiding foreclosure.",
          "Taking over the loan in your own name is a separate step, and it needs the lender's agreement. The CFPB's 2014 interpretive rule says that when a successor who already has title is added as an obligor on the existing loan, and that step is not an \"assumption\" as Regulation Z defines it, the step is not subject to the federal Ability-to-Repay Rule. The same document says creditors \"may agree\" to add the successor as a named obligor. It removes one federal requirement from the process. It does not oblige a creditor to say yes, and the status of that 2014 interpretation today is something to confirm with an attorney or a housing counselor.",
          "In its December 2024 report the CFPB said federal rules and mortgage program guidelines require servicers to help successor homeowners get the information they need to manage the existing mortgage and, if the homeowner chooses, to assume the existing loan terms. It also reported complaints from homeowners who said they were incorrectly told they had to refinance into a new loan. Whether a particular loan can be assumed depends on the loan and on who owns or insures it.",
          "A HUD-approved housing counselor can go through these options and help with the servicer. The CFPB says such agencies provide foreclosure prevention counseling free of charge, and that a counselor cannot promise that a borrower will keep the home."
        ],
        "claims": [
          "im-cfpb-inherited-home-ask-about-payments-and-help",
          "im-cfpb-spotlight-act-quickly-on-payments",
          "im-cfpb-2014-adding-successor-not-subject-to-atr",
          "im-cfpb-spotlight-refinance-pressure-reports",
          "im-garn-assumption-encouraged-not-required",
          "af-cfpb-housing-counselor-what-they-do"
        ]
      },
      {
        "heading": "Choice two: sell the house and pay the loan off",
        "body": [
          "The CFPB describes the payoff amount as how much must be paid to satisfy the loan and completely pay off the debt, and says it differs from the current balance because it includes interest through the payoff day and may include unpaid fees. Under Idaho Code 45-1514, once the obligation secured by a deed of trust is performed, the trustee reconveys the property on the beneficiary's written request.",
          "Who signs the sale depends on where the estate stands. An Idaho personal representative acquires powers by being appointed and issued letters. Idaho Code 15-3-715 lists selling real property among the transactions a personal representative may carry out, subject to any restriction in the will or a court order. Idaho Code 15-3-814 adds that where estate assets are encumbered by a mortgage, the personal representative may pay the encumbrance or any part of it \"if it appears to be for the best interest of the estate.\"",
          "If the house would sell for less than the loan balance, the sale is a short sale and needs the lender. The CFPB defines a short sale as a sale for less than what is owed, possible only if the lender or servicer agrees.",
          "The sale itself is covered in [selling an inherited house in Idaho](/guides/selling-an-inherited-house-in-idaho)."
        ],
        "claims": [
          "af-cfpb-payoff-amount",
          "sk-reconveyance-on-performance",
          "pb-letters-required",
          "pb-pr-may-sell-real-property",
          "id-pr-powers-limited-by-will",
          "im-idaho-pr-may-pay-or-convey-encumbered-asset",
          "sk-cfpb-short-sale-definition"
        ]
      },
      {
        "heading": "Choice three: let the house go, and what a trustee's sale does",
        "body": [
          "Idaho Code 15-3-814 also lets a personal representative \"convey or transfer the assets to the creditor in satisfaction of his lien,\" where that appears to be in the best interest of the estate. A lender is not obliged by that section to accept the property.",
          "If payments stop on a loan secured by a deed of trust, Idaho Code 45-1503 gives the trustee a power of sale after the breach, and lets the beneficiary choose foreclosure through the courts instead. Under 12 CFR 1024.41(f)(1), where the federal rule applies, a servicer may not make the first foreclosure notice or filing unless the loan is more than 120 days delinquent, with listed exceptions. Idaho Code 45-1505 then requires a notice of default to be recorded and mailed, including to any individual who owns an interest in the property.",
          "Notice of the trustee's sale must be given at least 120 days before the sale date. Idaho Code 45-1506(2) includes among the people who must receive it any successor in interest of the grantor whose interest is of record before the notice of default or is actually known to the trustee or beneficiary. These two 120-day periods are separate and are measured from different events.",
          "Idaho Code 45-1506(12) lets the grantor or a successor in interest cure the default at any time within 115 days of the recording of the notice of default by paying the amount then due, other than principal that would not be due had there been no default. Once the sale is held, Idaho Code 45-1508 says it terminates the interest of every person who was given notice, with no right to redeem.",
          "Idaho Code 45-1512 allows a money judgment for a remaining balance to be sought within 3 months after a trustee's sale, limited by the property's fair market value as found by the court. Whether that could reach an estate or any heir is a legal question for an Idaho attorney. The steps and day counts are set out in the [Idaho foreclosure timeline](/guides/idaho-foreclosure-timeline)."
        ],
        "claims": [
          "im-idaho-pr-may-pay-or-convey-encumbered-asset",
          "ft-power-of-sale-or-judicial-option",
          "af-regx-120-day-prefiling",
          "af-regx-scope",
          "ft-notice-of-default-recorded-and-mailed",
          "id-trustee-sale-120-day-notice",
          "ft-notice-of-sale-recipients",
          "af-cure-within-115-days",
          "ft-sale-final-no-redemption",
          "as-deficiency-three-month-window",
          "as-deficiency-fair-market-value-limit"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy houses in Ada County in any condition, with our own capital. A purchase closes through a local title company, the seller chooses the closing date, and a three-week close is realistic. That can suit an estate or an heir who has decided to sell and does not want to carry the payments for long. Our page on [selling an inherited house](/sell-inherited-house-idaho) describes the process.",
          "We cannot stop a foreclosure, negotiate with a lender, arrange an assumption or give legal or tax advice. If you want to keep the house, the route runs through the servicer, and a HUD-approved housing counselor costs nothing. If there is time to list the house on the open market, a listing may bring a higher price than we would offer. If the loan balance is more than the house would sell for, any sale needs the lender's agreement, and that decision belongs to the lender."
        ],
        "claims": [
          "af-cfpb-payoff-amount",
          "af-cfpb-housing-counselor-what-they-do",
          "sk-cfpb-short-sale-definition"
        ]
      }
    ]
  },

  "reverse-mortgage-after-the-borrower-dies-in-idaho": {
    "intro": [
      "For a Home Equity Conversion Mortgage (HECM), the FHA-insured reverse mortgage, federal regulation 24 CFR 206.27 says the loan balance becomes due and payable in full when a borrower dies and the home is not the principal residence of at least one surviving borrower. Under 24 CFR 206.125 the lender then sends a due and payable notice to the estate and heirs, who have 30 days from the date of that notice to pay the balance, sell the home, or give the lender a deed in lieu of foreclosure. The CFPB says heirs can satisfy a HECM by selling the home for at least 95 percent of its appraised value when the balance is higher than the home's value, and that the timeline might be extended up to six months.",
      "This page describes what the federal HECM regulation, the CFPB, HUD and Idaho Code say, quoted from the official sources. It is not legal or tax advice and it is not applied to your situation. The loan documents and the servicer's letters control the dates on a particular loan. Talk to an Idaho attorney or a HUD-approved housing counseling agency. We cannot stop a foreclosure, negotiate with a lender or servicer, or extend a deadline."
    ],
    "sections": [
      {
        "heading": "These rules cover HECMs, the FHA-insured reverse mortgage",
        "body": [
          "The CFPB lists three kinds of reverse mortgage loans: those insured by the Federal Housing Administration (FHA), proprietary loans that are not FHA-insured, and single-purpose loans offered by state and local governments. It says most reverse mortgage loans today are HECMs, and that non-HECM reverse mortgage loans are not federally insured. HUD says the HECM is the only reverse mortgage insured by the U.S. Federal Government.",
          "Everything on this page comes from the HECM rules in 24 CFR part 206 and from CFPB and HUD pages about HECMs. A proprietary or single-purpose reverse mortgage follows its own loan documents. The time limits and percentages below should not be assumed to apply to one.",
          "The CFPB describes how the loan works. The title to the home stays in the borrower's name. The borrower makes no monthly mortgage payments. Interest and fees are added to the balance each month, so the balance grows. The CFPB says \"the homeowners or their heirs will eventually have to pay back the loan, usually by selling the home.\""
        ],
        "claims": [
          "rv-cfpb-three-types-of-reverse-mortgage",
          "rv-hud-hecm-only-federally-insured",
          "rv-cfpb-reverse-mortgage-how-it-works"
        ]
      },
      {
        "heading": "When does a reverse mortgage become due after a death?",
        "body": [
          "24 CFR 206.27(c)(1) sets out what a HECM mortgage must say. The balance \"will be due and payable in full if a borrower dies and the property is not the principal residence of at least one surviving borrower.\" The same sentence carries an exception: due and payable status is deferred if the requirements of the Deferral Period for an Eligible Non-Borrowing Spouse are met.",
          "A death therefore does not always make the loan due. The CFPB says that when there is a co-borrower and one borrower dies, the co-borrower can remain in the home and keep receiving loan payments as long as they meet the obligations of the loan.",
          "The regulation treats an heir and a borrower differently. 24 CFR 206.3 defines a borrower as an original borrower under the HECM loan agreement and note, and says the term \"does not include successors or assigns of a borrower.\""
        ],
        "claims": [
          "rv-hecm-due-when-last-borrower-dies",
          "rv-cfpb-coborrower-remains-in-home",
          "rv-hecm-borrower-definition"
        ]
      },
      {
        "heading": "What notice do heirs get, and how long do they have?",
        "body": [
          "24 CFR 206.125(a) puts the first steps on the lender, which the regulation calls the mortgagee. The mortgagee must notify the FHA Commissioner within 60 days of the mortgage becoming due and payable because of a death. It must then notify the borrower's estate and heirs, as applicable, within 30 days that the mortgage is due and payable.",
          "The regulation then says the mortgagee \"shall give the applicable party 30 days from the date of notice\" to take one of the listed actions.",
          "The CFPB describes it the same way. Once heirs receive a due and payable notice, \"they have 30 days to buy, sell, or turn the home over to the lender to satisfy the debt.\" The CFPB adds that \"it might be possible for the timeline to be extended up to six months so your heirs can sell the home or obtain their own loan to purchase the home.\" The CFPB's wording is that an extension might be possible. It does not describe one as automatic.",
          "HUD publishes a one-page fact sheet for heirs, dated 9/2019. It says the lender \"may approve 90-day extensions\" with satisfactory documentation that the estate or heirs are actively trying to sell the property or repay the loan. The same fact sheet words the first deadline differently from the regulation: it says the loan must be satisfied \"within 30 days of the date of the borrower's death.\" The regulation and the newer CFPB page both count from the notice. The servicer's letter states the dates it is applying, and the fact sheet tells heirs to contact the HECM lender immediately."
        ],
        "claims": [
          "rv-hecm-due-notice-30-days-to-act",
          "rv-cfpb-heirs-30-days-up-to-six-months",
          "rv-hud-fact-sheet-30-days-and-90-day-extensions",
          "rv-hud-fact-sheet-taxes-insurance-estate"
        ]
      },
      {
        "heading": "The options: pay the loan off, sell the house, or deed it to the lender",
        "body": [
          "24 CFR 206.125(a)(2) lists the actions open to the notified party. They include paying the outstanding loan balance in full, with accrued interest, mortgage insurance premium and mortgagee advances; selling the property; and providing the mortgagee with a deed in lieu of foreclosure. The list ends with any other actions the Commissioner permits through notice.",
          "On a sale, the regulation sets a floor. The property may be sold for an amount not less than the amount the Commissioner determines through notice, \"which shall not exceed 95 percent of the appraised value,\" with the net proceeds applied to the loan balance. The regulation itself caps the floor at 95 percent. The working figure comes from HUD's notice, which the servicer applies. The CFPB and HUD both describe it to consumers as a sale for at least 95 percent of the appraised value.",
          "Keeping the house is where the official sources do not read alike. The CFPB page last reviewed on August 28, 2026 says \"to keep the home, heirs must pay the full loan balance.\" HUD's 2019 fact sheet says the same: if heirs prefer to keep the home, the loan balance \"must be paid off in full.\" A CFPB page last reviewed on January 2, 2025 says heirs who want to keep the home repay \"either the full loan balance or 95 percent of the home's appraised value\", whichever is less.",
          "The regulation says that for this section, \"sell includes the transfer of title by operation of law,\" and the HUD fact sheet says any post-death transfer is considered a sale. What a servicer will accept from an heir who wants to keep the house is a question for the servicer, in writing, and for an attorney or a HUD-approved housing counseling agency."
        ],
        "claims": [
          "rv-hecm-options-after-due-notice",
          "rv-hecm-sale-floor-95-percent-appraised",
          "rv-cfpb-heirs-keep-full-balance-sell-95-percent",
          "rv-hud-fact-sheet-sell-95-or-pay-in-full",
          "rv-cfpb-heirs-lesser-of-balance-or-95-percent"
        ]
      },
      {
        "heading": "Selling when the loan balance is higher than the home's value",
        "body": [
          "The 95 percent figure is measured against an appraisal the lender orders. Under 24 CFR 206.125(b), the mortgagee must have the property appraised no later than 30 days after an applicable party requests it in connection with a potential sale. When the mortgage is due and payable, the appraisal is at the mortgagee's expense, and the mortgagee has a right to be reimbursed out of the sale proceeds.",
          "24 CFR 206.125(c) covers the sale itself. Where the HECM is due and payable when the contract is signed, \"the borrower or other party with legal right to dispose of the property\" may sell it for the amount set under the 95 percent rule. The mortgagee must then satisfy the mortgage of record to facilitate the sale. Two conditions come with that: there are no junior liens, and all the net proceeds from the sale are paid to the mortgagee.",
          "The CFPB explains both outcomes. If the home is worth more than the amount owed, heirs can sell it, repay the loan, \"and keep the difference.\" If the home is worth less than the amount owed, heirs can pay off the loan by selling for at least 95 percent of the appraised value, and \"the rest of the loan is covered by the mortgage insurance that the reverse mortgage borrower paid during the duration of the loan.\"",
          "On personal liability, 24 CFR 206.27(b)(8) requires a HECM mortgage to say that \"the borrower shall have no personal liability for payment of the outstanding loan balance,\" that the mortgagee \"shall enforce the debt only through sale of the property,\" and that the mortgagee may not obtain a deficiency judgment against the borrower if the mortgage is foreclosed. Idaho's general statute for deeds of trust, Idaho Code 45-1512, allows a money judgment for the balance to be sought within 3 months after a trustee's sale. How the federal provision and the Idaho statute apply to a particular estate is a question for an Idaho attorney."
        ],
        "claims": [
          "rv-hecm-appraisal-within-30-days-of-request",
          "rv-hecm-sale-by-party-with-legal-right",
          "rv-hecm-sale-floor-95-percent-appraised",
          "rv-cfpb-sale-surplus-or-insurance-covers-rest",
          "rv-hecm-no-personal-liability-no-deficiency",
          "ss-trustee-sale-deficiency-three-months"
        ]
      },
      {
        "heading": "What if a spouse who was not on the loan still lives in the house?",
        "body": [
          "The HECM rules have a separate track for a surviving spouse who was not a borrower. 24 CFR 206.3 defines the Deferral Period as the time after the death of the last surviving borrower during which due and payable status is deferred for an Eligible Non-Borrowing Spouse.",
          "24 CFR 206.55 sets the conditions. The spouse must have been married to the borrower at loan closing and for the rest of the borrower's life. The spouse must have been disclosed to the lender at origination and specifically named as an Eligible Non-Borrowing Spouse in the loan documents. The spouse must have occupied the home, and continue to occupy it, as a principal residence. The Commissioner may prescribe other requirements.",
          "The section adds duties after the death. Within 90 days from the death of the last surviving borrower, the spouse must establish legal ownership or another ongoing legal right to remain in the property for life. The spouse must also make sure the borrower's other obligations under the loan documents continue to be met.",
          "The regulation is strict about who qualifies. A spouse who was ineligible at loan origination \"is not subsequently eligible for a Deferral Period when the borrowing spouse dies.\" If a non-borrowing spouse no longer meets the qualifying attributes, the HECM becomes immediately due and payable. 24 CFR 206.55(f) also says nothing in the section interferes with the ability of the estate or heirs to dispose of the property if they are otherwise legally entitled to.",
          "The CFPB says the process differs by loan age. It describes one process for HECMs with FHA case numbers assigned on or after August 4, 2014 and another for earlier loans. It says an Eligible Non-Borrowing Spouse \"will not get any money from the reverse mortgage\" and that qualifying \"may be difficult.\" It suggests help from an attorney or a HUD-approved housing counseling agency."
        ],
        "claims": [
          "rv-hecm-deferral-period-definition",
          "rv-hecm-eligible-spouse-qualifying-attributes",
          "rv-hecm-deferral-90-days-legal-right",
          "rv-hecm-ineligible-spouse-due-immediately",
          "rv-cfpb-nonborrowing-spouse-case-number-date"
        ]
      },
      {
        "heading": "Who has the legal right to sell the house in Idaho?",
        "body": [
          "The federal rule lets a \"party with legal right to dispose of the property\" sell. It does not say who that is. Where the house is part of a probate estate, Idaho's probate code addresses it.",
          "Under Idaho Code 15-3-103, a person acquires the powers of a personal representative only by being appointed by the court or registrar, qualifying, and being issued letters. Idaho Code 15-3-715 lists selling real property of the estate among the transactions a personal representative may carry out, subject to any restriction in the will or in a court order.",
          "Appointment has its own steps. On an application for informal appointment, the registrar appoints the applicant once at least 120 hours have passed since the death. That figure is a statutory minimum, and court processing time is separate.",
          "24 CFR 206.125 sets its 30 days without mentioning probate. The house also has to be carried in the meantime. HUD's fact sheet says property taxes and insurance \"remain the responsibility of the borrower's estate until title is transferred.\" Idaho Code 15-3-709 requires a personal representative to pay taxes on, and take reasonable steps to protect and preserve, the estate in their possession.",
          "Our guides on [selling a house in probate in Idaho](/guides/selling-a-house-in-probate-in-idaho) and [selling an inherited house in Idaho](/guides/selling-an-inherited-house-in-idaho) cover letters, authority and deeds in more detail."
        ],
        "claims": [
          "rv-hecm-sale-by-party-with-legal-right",
          "pb-letters-required",
          "pb-pr-may-sell-real-property",
          "id-pr-powers-limited-by-will",
          "pb-informal-appointment-120-hours",
          "rv-hud-fact-sheet-taxes-insurance-estate",
          "pb-pr-possession-and-taxes"
        ]
      },
      {
        "heading": "If nobody acts: deed in lieu, foreclosure, and who to call",
        "body": [
          "A deed in lieu of foreclosure hands the house to the lender. Under 24 CFR 206.125(f), the mortgagee must accept one from the borrower or other party with legal right to dispose of the property, provided it is filed for recording within 9 months of the due date and the mortgagee is able to obtain good and marketable title. In exchange, the mortgagee cancels the credit instrument and satisfies the mortgage of record.",
          "If the loan is not paid, the house is not sold and no deed is given, the regulation turns to foreclosure. 24 CFR 206.125(d) requires the mortgagee to commence foreclosure within six months of the due and payable date, or within such additional time as the Commissioner approves. 24 CFR 206.129(d)(1) ties that date to when the mortgagee notifies or should have notified the Commissioner. This is a deadline on the lender, and the regulation gives heirs no fixed six months. Idaho Code 45-1505 allows a deed of trust to be foreclosed by a trustee's sale when its conditions are met. In that process, Idaho Code 45-1506 requires notice of the trustee's sale at least 120 days before the sale date. Idaho Code 45-1508 says the people given notice have no right to redeem the property from the purchaser after the sale. Our [Idaho foreclosure timeline](/guides/idaho-foreclosure-timeline) walks through each step.",
          "The federal loss mitigation procedures in Regulation X do not reach these loans. 12 CFR 1024.30 exempts a servicer of a reverse mortgage transaction from sections 1024.38 through 1024.41, except as section 1024.41(j) provides.",
          "The first call is to the servicer. HUD's fact sheet says to \"contact the HECM lender immediately to review your responsibilities and options.\" The CFPB says heirs can consult a HUD-approved housing counseling agency or an attorney. It describes a housing counselor at a HUD-approved agency as trained and certified by the government, and says a counselor cannot promise that anyone will keep a home."
        ],
        "claims": [
          "rv-hecm-deed-in-lieu-nine-months",
          "rv-hecm-foreclosure-within-six-months",
          "rv-hecm-due-and-payable-date-definition",
          "id-trustee-sale-120-day-notice",
          "ft-sale-final-no-redemption",
          "af-regx-scope",
          "rv-hud-fact-sheet-taxes-insurance-estate",
          "rv-cfpb-heirs-30-days-up-to-six-months",
          "af-cfpb-housing-counselor-what-they-do",
          "ft-foreclosure-conditions"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy houses in Ada County with our own capital, in any condition. A purchase closes through a local title company on a date the seller chooses, and a three-week close is realistic. The CFPB says that when a home is worth more than the amount owed, heirs can sell it, repay the loan and keep the difference. That is the case where a sale to us can work. We can only buy from someone with the legal right to sell, and the probate section above describes how a personal representative gets that authority. Our page on [selling an inherited house](/sell-inherited-house-idaho) explains how that works with us.",
          "We are the wrong fit in several cases. Where the balance is higher than the home's value, the price has to meet the amount set under the 95 percent rule, measured against the lender's appraisal, and our offer may be lower than that. Listing the house on the open market may bring a higher price than we would pay, if the notice period allows the time. A deed in lieu is between the estate and the lender and does not involve us. We cannot stop a foreclosure, negotiate with a servicer, obtain an extension, or give legal or tax advice."
        ],
        "claims": [
          "rv-hecm-sale-floor-95-percent-appraised",
          "rv-hecm-sale-by-party-with-legal-right",
          "pb-letters-required",
          "rv-cfpb-sale-surplus-or-insurance-covers-rest"
        ]
      }
    ]
  },

  "taxes-when-you-sell-a-house-in-idaho": {
    "intro": [
      "A house sale can produce a capital gain, and income tax is figured on the gain, not on the sale price. The IRS says a seller with a gain on a main home may qualify to exclude up to $250,000 of it from income, or up to $500,000 on a joint return, if the ownership and use tests are met. Idaho starts from federal taxable income, and Idaho Code 63-3022H allows an individual a deduction of 60% of the capital gain net income from qualified Idaho property, a category that includes real property held at least twelve months as that section defines real property.",
      "This page describes what the IRS, the Idaho Code and the Idaho State Tax Commission say, quoted from the official sources as they read on November 13, 2026. It is not tax or legal advice and it does not apply any rule to your sale. Several figures below belong to tax year 2025 because the 2026 editions had not been published, and each one is labeled. Ask a tax professional about your own return before you rely on any of it. Property tax is a separate subject, covered in our guide to [Idaho property taxes when you sell](/guides/idaho-property-taxes-when-you-sell)."
    ],
    "sections": [
      {
        "heading": "The federal exclusion on a main home: up to $250,000, or $500,000 on a joint return",
        "body": [
          "IRS Topic 701, last reviewed by the IRS on November 9, 2026, says that if you have a capital gain from the sale of your main home, you may qualify to exclude up to $250,000 of that gain from your income, or up to $500,000 if you file a joint return with your spouse.",
          "Topic 701 says that in general you must meet two tests. The ownership test is met by owning the home for at least 24 months out of the 5 years leading up to the date of the sale. The use test is met by using the home as a residence for at least 24 months of the previous 5 years. The two tests can be met during different 2-year periods, but both must fall inside the 5-year period ending on the date of the sale.",
          "Publication 523, the IRS guide to selling a home, adds detail. Its current edition is the 2025 edition, written for 2025 returns. It says that for a married couple filing jointly only one spouse has to meet the ownership requirement, but each spouse must meet the residence requirement individually to get the full exclusion. It counts the residence requirement as a total of 24 months (730 days), which does not have to be a single block of time.",
          "Two limits sit next to the tests. Topic 701 says you are generally not eligible if you excluded the gain from the sale of another home during the two-year period before this sale. Publication 523 says a seller who does not meet the Eligibility Test may still qualify for a partial exclusion if the main reason for the sale was a change in workplace location, a health issue, or an unforeseeable event. The publication defines each of those terms."
        ],
        "claims": [
          "cg-irs-exclusion-250k-500k",
          "cg-irs-ownership-and-use-tests",
          "cg-irs-pub523-joint-return-tests",
          "cg-irs-two-year-lookback",
          "cg-irs-partial-exclusion"
        ]
      },
      {
        "heading": "How the IRS measures gain: amount realized minus adjusted basis",
        "body": [
          "Publication 523 (2025) says that to figure the gain or loss on a main home you need the selling price, the amount realized, and the adjusted basis. Its worksheet describes the amount realized as the sale price minus selling expenses. You subtract the adjusted basis from the amount realized. The mortgage balance is not one of the terms in that formula.",
          "IRS Topic 703 says that in most situations the basis of an asset is its cost to you. Basis then moves. Topic 703 says to increase it by items such as the cost of improvements that add to the value of the property, and to decrease it by items such as allowable depreciation and insurance reimbursements for casualty and theft losses. The result is the adjusted basis.",
          "If the adjusted basis is greater than the amount realized, Publication 523 says you sold your home at a loss. It says you cannot deduct that loss, and that you do not need to pay tax on the money you received from the sale.",
          "For gain that is taxable, IRS Topic 409 separates long-term from short-term. Generally a gain is long-term if you held the asset for more than one year and short-term if you held it one year or less, and net short-term gains are taxed as ordinary income. Topic 409 notes exceptions to the holding rule, including for property acquired from a decedent, and sends readers to Publication 544 for them. For taxable years beginning in 2025, Topic 409 says the rate on most net capital gain is no higher than 15% for most individuals, that some or all of it may be taxed at 0%, and that a 20% rate applies above the income thresholds set for the 15% rate. The page did not give thresholds for 2026 when we read it."
        ],
        "claims": [
          "cg-irs-gain-is-amount-realized-less-basis",
          "cg-irs-basis-cost-and-adjustments",
          "cg-irs-loss-on-home-not-deductible",
          "cg-irs-long-term-more-than-one-year",
          "cg-irs-capital-gain-rates-ty2025"
        ]
      },
      {
        "heading": "Rental or business use can leave part of the gain taxable",
        "body": [
          "The exclusion is written for a main home, and Publication 523 (2025) narrows it where the property was used another way. It says gain from the sale of a main home is not excludable if it is allocable to periods of nonqualified use. Nonqualified use means any period after 2008 when neither you nor your spouse or former spouse used the property as your main home, with certain exceptions that the publication lists.",
          "Depreciation is treated separately. Publication 523 says that if you were entitled to take depreciation deductions because you used your home for business or as rental property, you cannot exclude the part of your gain equal to any depreciation allowed or allowable for periods after May 6, 1997. Topic 409 says the portion of any unrecaptured section 1250 gain from selling section 1250 real property is taxed at a maximum 25% rate, again for taxable years beginning in 2025.",
          "A house that was a rental for all or part of the time you owned it calls for a tax professional and your depreciation records."
        ],
        "claims": [
          "cg-irs-nonqualified-use",
          "cg-irs-depreciation-not-excludable",
          "cg-irs-capital-gain-rates-ty2025"
        ]
      },
      {
        "heading": "What is the basis of an inherited house?",
        "body": [
          "An inherited house does not use the previous owner's purchase price. Publication 523 (2025) says that if you inherited your home from a decedent, your basis is the fair market value of the property on the date of the decedent's death, or on the later alternate valuation date chosen by the personal representative of the estate. If a federal estate tax return (Form 706) was filed or required, the value listed on that return is your basis. The IRS wording is fair market value at death, and that value can be lower than what the decedent paid as well as higher.",
          "Publication 551, revised December 2025, states the same rule for property generally. The basis of property inherited from a decedent is generally the fair market value at the date of the individual's death, or the value on the alternate valuation date if the personal representative chooses it. The publication lists other possibilities and exceptions.",
          "Idaho is one of the community property states Publication 551 names. It says that when either spouse dies, the total value of the community property, even the part belonging to the surviving spouse, generally becomes the basis of the entire property. For that rule to apply, at least half the value of the community property interest must be includible in the decedent's gross estate. Whether a particular house was community property is a question of Idaho law for an attorney.",
          "The home-sale exclusion and the basis rule are different things. The exclusion depends on the seller's own ownership and use of a main home. The basis rule changes the number the gain is measured from. Our guide to [selling an inherited house in Idaho](/guides/selling-an-inherited-house-in-idaho) covers who has authority to sell."
        ],
        "claims": [
          "cg-irs-inherited-home-basis-pub523",
          "cg-irs-inherited-basis-pub551",
          "cg-irs-community-property-basis",
          "cg-irs-ownership-and-use-tests"
        ]
      },
      {
        "heading": "Form 1099-S: the closing agent may report the sale to the IRS",
        "body": [
          "IRS instructions direct that Form 1099-S, Proceeds From Real Estate Transactions, be filed to report the sale or exchange of real estate. The person responsible for closing the transaction files it. Where a settlement statement lists a settlement agent, that is the person responsible. The instructions also require the filer to request the seller's taxpayer identification number no later than the time of closing.",
          "There is a reporting exception for some home sales. The instructions say the filer need not report the sale of a residence for $250,000 or less, or $500,000 if the certification includes an assurance that the seller is married, if the filer receives an acceptable written certification from the seller that the home is the seller's principal residence and that the full gain is excludable. Each seller signs it under penalties of perjury. The filer is not required to obtain the certification, and without it the form must be filed. This is a rule about whether a form is filed. It does not decide whether tax is owed.",
          "Topic 701 says that if you receive a Form 1099-S you must report the sale of the home on your return even if the gain is excludable. It also says you must report the sale if you cannot exclude all of the gain.",
          "A separate federal rule applies to foreign sellers. The IRS says a disposition of a U.S. real property interest by a foreign person is subject to withholding under FIRPTA, generally 15% of the amount realized, and that in most cases the buyer is the withholding agent. One exception the IRS lists is the seller's certification, under penalties of perjury, that the seller is not a foreign person. Our guide to [how a property sale closes in Idaho](/guides/how-a-property-sale-closes-in-idaho) explains where these papers appear at closing."
        ],
        "claims": [
          "cl-1099s-reports-real-estate-sales",
          "cl-1099s-tin-requested-at-closing",
          "cl-1099s-principal-residence-certification",
          "cg-irs-report-sale-if-1099s",
          "cl-firpta-buyer-withholds-15-percent",
          "cl-firpta-non-foreign-certification"
        ]
      },
      {
        "heading": "How Idaho taxes the gain, for residents and nonresidents",
        "body": [
          "Idaho's income tax starts from the federal figure. Idaho Code 63-3011B defines taxable income as \"federal taxable income as determined under the Internal Revenue Code\". Section 63-3011C defines Idaho taxable income as that amount \"as modified pursuant to the Idaho adjustments specifically provided in this chapter\". The capital gains deduction described in the next section is one of those adjustments.",
          "The Idaho State Tax Commission states that the income tax rate for 2025 is 5.3% on Idaho taxable income. The page did not show a 2026 rate when we read it. The Commission also says that gross income includes gains from property sales.",
          "Residency decides how much income Idaho reaches. The Tax Commission says Idaho taxes all of a resident's income, including income from sources outside Idaho, and taxes only a nonresident's income from Idaho sources. It defines Idaho source income as income from transactions or activities that take place in Idaho, or from property in Idaho.",
          "The statute is specific about real estate. Under Idaho Code 63-3026A, a nonresident's Idaho taxable income includes only the components derived from or related to sources within Idaho, and income is from an Idaho source when it is attributable to \"the ownership or disposition of any interest in real or tangible personal property located in this state\". The Tax Commission says nonresidents of Idaho must file if their total gross income from Idaho sources is more than $2,500. A seller who lives in another state should ask a tax professional how the two states' returns fit together."
        ],
        "claims": [
          "cg-id-taxable-income-is-federal-as-modified",
          "cg-istc-rate-2025",
          "cg-istc-residency-what-idaho-taxes",
          "cg-istc-idaho-source-income-property",
          "cg-id-3026a-nonresident-real-property-source"
        ]
      },
      {
        "heading": "Idaho's capital gains deduction: what Idaho Code 63-3022H covers",
        "body": [
          "Idaho Code 63-3022H(1) gives an individual taxpayer who reports capital gain net income a deduction of sixty percent of the capital gain net income from the sale or exchange of \"qualified property\". The sixty percent is a deduction taken in determining Idaho taxable income.",
          "Subsection (3) defines qualified property. The property must have had an Idaho situs at the time of sale, and one of the listed categories is \"Real property held at least twelve (12) months\". The other categories cover business equipment, livestock, timber and certain partnership interests.",
          "The statute's definition of real property is narrower than everyday speech. Subsection (6) says real property \"means land\" and includes a qualified conservation easement, certain grazing permits or leases, and any other property defined in section 1250(c) of the Internal Revenue Code as \"section 1250 property\" conveyed in perpetuity. The words house, home and residence do not appear in the section. Subsection (7) excludes property that has been depreciated under section 1245 of the Internal Revenue Code.",
          "The Tax Commission's own form shows how it administers the deduction. Its Form CG for tax year 2025 has a line 2 for \"Qualifying capital gain from sale of personal residence from federal Schedule D\", and the instructions say to enter there \"the taxable gain from the sale of your Idaho home from federal Schedule D\". The 2026 form had not been published when we read the page. A form line is not a ruling on any one sale, and the gain still has to meet the statute's tests.",
          "Subsection (2) sets limits. The deduction is limited to the capital gain net income from all property included in taxable income, and gains treated as ordinary income by the Internal Revenue Code do not qualify. The Tax Commission adds that gains from real property not located in Idaho do not qualify, and that the deduction is computed on Form CG. Whether a given sale produces a qualifying gain, and how much, is a question for a tax professional."
        ],
        "claims": [
          "cg-id-3022h-sixty-percent-deduction",
          "cg-id-3022h-real-property-twelve-months",
          "cg-id-3022h-real-property-definition",
          "cg-istc-form-cg-2025-residence-line",
          "cg-id-3022h-limits",
          "cg-istc-deduction-up-to-60-idaho-property"
        ]
      },
      {
        "heading": "A sale for less than the loan balance raises a different tax question",
        "body": [
          "Everything above is about gain. A sale where the lender accepts less than it is owed raises a second question, which is canceled debt. The IRS says that, in general, if a debt is canceled, forgiven or discharged for less than the amount owed, the canceled amount is taxable and must be reported for the year the cancellation occurred. The same IRS page lists exceptions and exclusions.",
          "The IRS also says that when a creditor takes property securing a debt in full or partial satisfaction of it, the owner is treated as having sold the property to the creditor. As the IRS pages read on November 13, 2026, the exclusion for canceled qualified principal residence debt covers debt discharged before January 1, 2026, or under a written arrangement entered into before that date. Our guide to [short sales and deeds in lieu in Idaho](/guides/short-sale-vs-deed-in-lieu-in-idaho) sets out what the IRS says in full. This is federal material only, and a tax professional should review any agreement before you sign it."
        ],
        "claims": [
          "ss-irs-canceled-debt-generally-taxable",
          "ss-irs-property-taken-treated-as-sale",
          "ss-irs-principal-residence-exclusion-ended-2025"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We are a direct buyer in Ada County. We buy with our own capital, in any condition, and the purchase closes through a local title company on a closing date the seller chooses. A three-week close is realistic. Because the seller picks the date, a seller whose tax professional says the timing of a sale matters can set the closing date to suit that plan.",
          "We do not give tax advice, and we cannot tell you what you will owe or whether an exclusion or deduction applies to you. The tax rules on this page apply the same way whoever buys the house. If a listing on the open market is likely to bring you a higher price and you have the time and the house is ready for it, that route may serve you better. Talk to a tax professional before you choose, and bring your purchase records, improvement records and any depreciation history."
        ],
        "claims": []
      }
    ]
  },

  "bankruptcy-and-foreclosure-in-idaho": {
    "intro": [
      "A bankruptcy petition triggers the automatic stay in 11 U.S.C. 362, and the U.S. Courts say that in a chapter 13 case the stay stops a foreclosure proceeding as soon as the petition is filed. The stay can end: section 362(d) lets a creditor ask the bankruptcy court for relief from it, and Idaho Code 45-1506A lets a trustee's sale be rescheduled after the stay expires or terminates. The U.S. Courts also say the debtor may still lose the home if the foreclosure sale is completed under state law before the petition is filed, or if the regular mortgage payments that come due after filing are not made.",
      "This page describes what the Bankruptcy Code, Idaho Code and the federal courts' own publications say, quoted from the official sources. It is not legal advice and it is not applied to your loan, your sale date or your case. Whether to file, when, and under which chapter are decisions to make with a bankruptcy attorney. We are a property buyer. We cannot stop a foreclosure, negotiate with a lender or promise an outcome."
    ],
    "sections": [
      {
        "heading": "What the automatic stay is, in the statute's words",
        "body": [
          "Section 362(a) of the Bankruptcy Code says a petition \"operates as a stay, applicable to all entities\" of a list of acts. The list includes any act to obtain possession of property of the estate or to exercise control over it, any act to create, perfect, or enforce any lien against property of the estate, and any act to collect a claim against the debtor that arose before the case began.",
          "Subsection (a) does not use the word foreclosure. The plain statement comes from the U.S. Courts, which say of chapter 13: \"The automatic stay stops the foreclosure proceeding as soon as the individual files the chapter 13 petition.\" Idaho's trust deed statute points the same way. Idaho Code 45-1506A deals with a sale that \"cannot be held at the time scheduled by reason of automatic stay provisions of the U.S. bankruptcy code (11 U.S.C. 362)\".",
          "The U.S. Courts attach three qualifiers. Filing stops \"most\" collection actions. It does not stay \"certain types of actions\" listed in section 362(b). And \"the stay may be effective only for a short time in some situations.\""
        ],
        "claims": [
          "bk-362a-stay-scope",
          "bk-uscourts-stay-described",
          "af-uscourts-chapter-13-foreclosure",
          "ft-rescheduled-sale-after-stay"
        ]
      },
      {
        "heading": "A creditor can ask the court to lift the stay",
        "body": [
          "Section 362(d) says that on request of a party in interest, and after notice and a hearing, the court \"shall grant relief from the stay\" in the situations it lists. Relief can mean terminating, annulling, modifying or conditioning the stay. The first ground is \"for cause, including the lack of adequate protection of an interest in property\" of the party asking. The second applies to a stay of an act against property where the debtor does not have an equity in the property and the property is not necessary to an effective reorganization.",
          "Section 362(e) sets clocks on that request. Thirty days after a request for relief from the stay of an act against property of the estate, the stay ends as to the party that asked, unless the court orders it continued. In an individual's chapter 7, 11 or 13 case, the stay terminates 60 days after the request unless the court decides within that period or the period is extended. These are deadlines for handling a request. They do not measure how long a stay lasts.",
          "Earlier cases change the picture. Under section 362(c)(3), if an individual had a case pending within the preceding 1-year period that was dismissed, the stay as to a debt or property securing that debt terminates with respect to the debtor on the 30th day after the later case is filed, unless the court extends it on a showing of good faith. Under section 362(c)(4), if two or more cases were pending within the previous year and were dismissed, the stay does not go into effect at all unless a party asks within 30 days and shows the later case was filed in good faith.",
          "Section 362(d)(4) addresses real property directly. A secured creditor is entitled to relief if the court finds the filing was part of a scheme to delay, hinder, or defraud creditors that involved either a transfer of an interest in the property without the secured creditor's consent or court approval, or multiple bankruptcy filings affecting the property. If recorded under state law, that order binds any other bankruptcy case affecting the property filed within 2 years, subject to a later debtor's motion for relief."
        ],
        "claims": [
          "bk-362d-relief-from-stay",
          "bk-362e-thirty-and-sixty-days",
          "bk-362c3-prior-case-thirty-days",
          "bk-362c4-two-prior-cases-no-stay",
          "bk-362d4-scheme-order-two-years"
        ]
      },
      {
        "heading": "What Idaho's trust deed statute says about a sale stopped by a stay",
        "body": [
          "An Idaho trust deed foreclosure requires notice of the trustee's sale at least 120 days before the day fixed for the sale, as [the Idaho foreclosure timeline](/guides/idaho-foreclosure-timeline) sets out. The clocks after a bankruptcy stay are shorter.",
          "Under Idaho Code 45-1506A, a sale that could not be held because of the automatic stay may be rescheduled and conducted after the stay expires or terminates. Notice of the rescheduled sale must be mailed at least 30 days before the new date and published once a week for three successive weeks, with the last publication at least 10 days before the sale.",
          "Idaho Code 45-1506B covers a stay that is lifted before the original sale date. A person with the right to reinstate may ask the trustee in writing, before the time set for the original sale, to postpone the sale so that at least 115 days elapse from the recording of the notice of default to the new sale date, not counting the time the stay was in effect.",
          "A sale that has already happened is treated differently. The U.S. Courts say the debtor may still lose the home if the mortgage company completes the foreclosure sale under state law before the petition is filed. Under Idaho Code 45-1508, a trustee's sale terminates the interest of every person who was given notice, with no right to redeem the property from the purchaser. Idaho Code 45-1510(2) describes a sale that is invalid because of the automatic stay, and lets only the trustee or beneficiary who recorded the trustee's deed record a notice of rescission. Whether a particular sale was valid is a question for a bankruptcy attorney."
        ],
        "claims": [
          "id-trustee-sale-120-day-notice",
          "ft-rescheduled-sale-after-stay",
          "ft-stay-lifted-postponement-request",
          "af-uscourts-chapter-13-foreclosure",
          "ft-sale-final-no-redemption",
          "as-rescission-of-trustee-deed-invalid-sale"
        ]
      },
      {
        "heading": "Chapter 7, as the U.S. Courts describe it",
        "body": [
          "The U.S. Courts describe chapter 7 as liquidation: \"the sale of a debtor's nonexempt property and the distribution of the proceeds to creditors.\" There is no repayment plan. A bankruptcy trustee gathers and sells the debtor's nonexempt assets and pays creditors from the proceeds. The page warns that \"the filing of a petition under chapter 7 may result in the loss of property.\"",
          "On when a chapter 7 trustee sells, the U.S. Courts say the trustee sells the debtor's property if it is free and clear of liens and not exempt, or \"if it is worth more than any security interest or lien attached to the property and any exemption that the debtor holds in the property.\" If all the debtor's assets are exempt or subject to valid liens, the trustee will normally file a \"no asset\" report. The page says most chapter 7 cases involving individual debtors are no asset cases.",
          "A chapter 7 discharge does not remove the mortgage lien. The U.S. Courts say \"a bankruptcy discharge does not extinguish a lien on property\" and that secured creditors may retain some rights to seize property securing a debt even after a discharge is granted."
        ],
        "claims": [
          "bk-uscourts-chapter-7-liquidation",
          "bk-uscourts-chapter-7-trustee-sells-when",
          "bk-uscourts-discharge-does-not-remove-lien"
        ]
      },
      {
        "heading": "Chapter 13 and catching up on mortgage arrears through a plan",
        "body": [
          "The U.S. Courts describe chapter 13 as adjustment of debts of an individual with regular income, also called a wage earner's plan. The debtor proposes a plan to repay all or part of the debts in installments, usually over three to five years, and no plan may run longer than five years.",
          "On mortgages, the U.S. Courts say that by filing under chapter 13 a person can halt foreclosure proceedings and may cure delinquent mortgage payments over time. The same page adds: \"Nevertheless, they must still make all mortgage payments that come due during the chapter 13 plan on time.\" The page adds that payments to the home mortgage lender may be made over the original loan schedule so long as any arrearage is made up during the plan.",
          "The statute behind this is 11 U.S.C. 1322. Subsection (b)(5) lets a plan provide for \"the curing of any default within a reasonable time and maintenance of payments while the case is pending\" on a long-term secured claim. Subsection (c)(1) says a default on a lien on the debtor's principal residence may be cured \"until such residence is sold at a foreclosure sale that is conducted in accordance with applicable nonbankruptcy law.\" The section does not say at what moment an Idaho trustee's sale counts as sold for this purpose. That is a question for a bankruptcy attorney.",
          "A plan carries duties. The U.S. Courts say the debtor must start making plan payments to the trustee within 30 days after filing, even before the court approves the plan, and may not incur new debt without consulting the trustee. If the debtor fails to make the payments due under the confirmed plan, the court may dismiss the case or convert it to a chapter 7 liquidation. Under section 362(c), the stay of an act against property of the estate continues until the property is no longer property of the estate, and the stay of any other act continues until the case is closed or dismissed or a discharge is granted or denied, whichever comes first."
        ],
        "claims": [
          "bk-uscourts-chapter-13-described",
          "bk-uscourts-chapter-13-cure-over-time",
          "af-uscourts-chapter-13-foreclosure",
          "bk-1322-cure-until-foreclosure-sale",
          "bk-uscourts-chapter-13-payments-and-failure",
          "bk-362c-stay-duration"
        ]
      },
      {
        "heading": "Selling a house during a bankruptcy case runs through the case",
        "body": [
          "The U.S. Courts say that commencement of a bankruptcy case creates an estate, and that \"the estate technically becomes the temporary legal owner of all the debtor's property.\"",
          "The sale power over that property is in 11 U.S.C. 363(b)(1): \"The trustee, after notice and a hearing, may use, sell, or lease, other than in the ordinary course of business, property of the estate\". In chapter 13, section 1303 gives the debtor, exclusive of the trustee, the rights and powers of a trustee under section 363(b), and section 1306(b) says the debtor remains in possession of all property of the estate except as provided in a confirmed plan or the order confirming it.",
          "Read together, these sections place a sale of estate property inside the bankruptcy case, with notice and a hearing, in either chapter. We did not read the definition of \"after notice and a hearing\", the section on what plan confirmation does to ownership, or the District of Idaho's local rules on sale motions, so this page does not describe the procedure.",
          "Section 362(d)(4), described above, names a transfer of an interest in the property without the secured creditor's consent or court approval. If the house is in an open bankruptcy case, whether, how and when it can be sold are questions for the debtor's bankruptcy attorney and the case trustee, before any buyer."
        ],
        "claims": [
          "bk-uscourts-estate-temporary-owner",
          "bk-363b-sale-after-notice-and-hearing",
          "bk-1303-chapter-13-debtor-sale-powers",
          "bk-362d4-scheme-order-two-years"
        ]
      },
      {
        "heading": "Idaho's homestead exemption protects equity from some creditors, and it does not reach the deed of trust",
        "body": [
          "The U.S. Courts say the Bankruptcy Code lets an individual debtor protect some property because it is exempt under federal bankruptcy law or under the laws of the debtor's home state, and that many states have adopted their own exemption law in place of the federal exemptions. Idaho is one of them. Idaho Code 11-609 says that in any federal bankruptcy proceeding an individual debtor \"may exempt from property of the estate only such property as is specified under the laws of this state.\"",
          "Idaho Code 55-1008 makes the homestead exempt from attachment and from execution or forced sale for the debts of the owner, up to the amount in section 55-1003, which is capped at $175,000. This creditor-protection homestead is a different statute from the property tax homeowner's exemption in Idaho Code 63-602G.",
          "The exemption has stated exceptions. Under Idaho Code 55-1005, the homestead is subject to execution or forced sale in satisfaction of judgments on debts secured by mortgages, deeds of trust or other consensual liens on the premises, where the lien was executed and acknowledged by the husband and wife or by an unmarried claimant, or was recorded before the homestead became effective. A trustee's sale forecloses a deed of trust, one of the liens the section names. The section speaks of judgments and does not mention a trustee's sale by name.",
          "The U.S. Courts' description of when a chapter 7 trustee sells property compares what the property is worth with the liens on it plus any exemption the debtor holds. We do not work that comparison through here, because which exemptions apply to a given debtor depends on the Bankruptcy Code and the facts. The U.S. Courts' own advice is: \"The debtor should consult an attorney to determine the exemptions available in the state where the debtor lives.\""
        ],
        "claims": [
          "bk-uscourts-exemptions-ask-an-attorney",
          "bk-idaho-exemptions-state-law-only",
          "bk-homestead-exempt-from-forced-sale",
          "id-homestead-creditor-175k",
          "id-homeowners-tax-exemption-125k",
          "bk-homestead-subject-to-deeds-of-trust",
          "ft-foreclosure-conditions",
          "bk-uscourts-chapter-7-trustee-sells-when"
        ]
      },
      {
        "heading": "Credit counseling comes first, and the court is in Boise, Coeur d'Alene and Pocatello",
        "body": [
          "Under 11 U.S.C. 109(h)(1), an individual may not be a debtor unless, during the 180-day period ending on the date the petition is filed, the individual received a briefing from an approved nonprofit budget and credit counseling agency. Section 109(h)(3) has a narrow exception for a debtor who certifies exigent circumstances and an unsuccessful request for counseling, in a form satisfactory to the court. That exception lasts no more than 30 days after the petition is filed, or 15 days more if the court orders it for cause.",
          "The U.S. Trustee Program, which approves the agencies, says that if the credit counseling course is not completed before filing, \"the case could be dismissed.\" The U.S. Courts say a second course, debtor education, takes place after filing, and that only providers approved by the U.S. Trustee Program may issue the certificates.",
          "This counseling is separate from housing counseling. HUD says it funds free or very low-cost housing counseling nationwide. The non-bankruptcy options a housing counselor goes through are in [how to avoid foreclosure in Idaho](/guides/how-to-avoid-foreclosure-in-idaho).",
          "The federal bankruptcy court for Idaho is the U.S. Bankruptcy Court for the District of Idaho. The District of Idaho says its offices are located in Boise, Coeur d'Alene, and Pocatello.",
          "The U.S. Courts say: \"Seeking the advice of a qualified lawyer is strongly recommended because bankruptcy has long-term financial and legal consequences.\" The same page says a person who is unable to afford an attorney may qualify for free legal services. One filing also affects the next: the U.S. Courts say a person who voluntarily dismissed a case after creditors sought relief from the stay cannot file under any chapter during the following 180 days."
        ],
        "claims": [
          "bk-109h-credit-counseling-180-days",
          "bk-109h-exigent-circumstances-exception",
          "bk-ust-counseling-case-could-be-dismissed",
          "bk-uscourts-counseling-before-education-after",
          "af-hud-counseling-free-or-low-cost",
          "bk-idaho-bankruptcy-court-offices",
          "bk-uscourts-lawyer-strongly-recommended",
          "bk-uscourts-180-day-bar"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy property in Ada County in any condition, with our own capital. A purchase closes through a local title company, the seller chooses the closing date, and a three-week close is realistic. That can suit an owner who has not filed, has decided to sell, and has enough time before the trustee's sale for a sale to close and pay off the loan. The page on [whether to sell or keep a house facing foreclosure](/sell-or-keep-house-facing-foreclosure-idaho) sets out when a sale works. Under Idaho Code 45-1603, an owner whose property is in foreclosure may cancel a contract signed during the foreclosure period within five business days, and that includes a contract with us.",
          "We cannot stop a foreclosure, negotiate with a lender, or give legal advice, and we have no say in a bankruptcy case. If you want to keep the house, the routes are the lender, the cure right, a housing counselor, and whatever a bankruptcy attorney advises. If you have already filed, talk to your bankruptcy attorney before any buyer, because the sources above place a sale of estate property inside the case. If there is time to list the house on the open market, a listing may bring a higher price than we would offer."
        ],
        "claims": [
          "vb-cfpa-five-business-day-rescission",
          "bk-363b-sale-after-notice-and-hearing",
          "af-cure-within-115-days"
        ]
      }
    ]
  },

  "selling-a-house-with-unpermitted-work-in-ada-county": {
    "intro": [
      "Idaho's seller disclosure form asks directly whether any substantial additions or alterations were made without a building permit, and no exemption from the form depends on the house being sold as-is. Building permits and code enforcement in Ada County belong to the city the property sits in, or to Ada County for unincorporated land. Ada County, Boise and Eagle each have a written rule for seeking a permit after work has started. Each adds an investigation fee, and none promises that a permit will be issued.",
      "This page describes what the statutes, local codes and agency pages say. It is not legal advice and it is not applied to your property. We are a direct buyer of property. We cannot tell you whether past work needed a permit, how to answer a disclosure question, or how an enforcement case will end. The building department for your address can answer the first question, and an Idaho attorney can answer the other two."
    ],
    "sections": [
      {
        "heading": "What the Idaho disclosure form asks about permits and violations",
        "body": [
          "Idaho Code 55-2504 requires a seller of residential property with one to four dwelling units to complete a property condition disclosure form unless the transfer is exempt. The form is printed in Idaho Code 55-2508. Three of its questions bear on unpermitted work and code cases.",
          "Question 8 reads: \"Have any substantial additions or alterations been made without a building permit?\" The statute does not define \"substantial\", and the question is worded without naming who did the work.",
          "Question 6 asks the seller to describe any conditions that may affect the ability to clear title, and lists encroachments, easements, zoning violations and lot line disputes as examples. Question 9 asks for \"any other problems, including legal, physical or other not listed above that you know concerning the property.\"",
          "The form does not use the words \"code enforcement\". Whether an open case belongs under question 6 or question 9 on your form is a question for an Idaho attorney. Our guide to [Idaho seller disclosure in an as-is sale](/guides/idaho-seller-disclosure-when-selling-as-is) covers the rest of the chapter."
        ],
        "claims": [
          "id-disclosure-required-1-to-4-units",
          "cv-form-q8-additions-without-permit",
          "cv-form-q6-zoning-violations-title",
          "cv-form-q9-other-problems-legal"
        ]
      },
      {
        "heading": "The form records what you know, and it must be completed in good faith",
        "body": [
          "The form says that, unless otherwise advised, the seller has no expertise in construction, architecture or engineering. It encourages the purchaser to obtain professional inspections. It ends with the seller certifying that the information is true and correct to the best of the seller's knowledge as of the date signed.",
          "Idaho Code 55-2507 requires the form to state that it records conditions and information actually known by the seller, that it is not a warranty, and that it is not a substitute for inspections. Idaho Code 55-2511 says a seller is not liable for an error or omission that was not within the seller's personal knowledge. By its terms that section reaches errors and omissions outside the seller's personal knowledge.",
          "Idaho Code 55-2516 requires every disclosure to be made in good faith, defined as honesty in fact in the conduct of the transaction. Idaho Code 55-2513 requires the seller to amend the form before closing on discovering that information in it has changed.",
          "Under Idaho Code 55-2517, a failure to comply does not by itself invalidate a transfer, and a person who willfully or negligently violates the chapter is liable for the buyer's actual damages."
        ],
        "claims": [
          "cv-form-seller-certification-and-purpose",
          "id-disclosure-actual-knowledge-not-warranty",
          "id-disclosure-no-liability-outside-personal-knowledge",
          "id-disclosure-good-faith-honesty-in-fact",
          "id-disclosure-amend-before-closing",
          "id-disclosure-failure-actual-damages"
        ]
      },
      {
        "heading": "Idaho law leaves the permit rules to the local government",
        "body": [
          "Idaho Code 39-4111(2) makes it unlawful to do, or cause or permit to be done, any construction, improvement, extension or alteration of a building in a local government jurisdiction enforcing building codes without first procuring a permit under that local government's ordinance. The statute does not list which jobs need a permit. The local ordinance does.",
          "The lists differ from one jurisdiction to the next. Ada County's residential code amendment, which applies in unincorporated Ada County, exempts roof repair including complete replacement of roof coverings on one- and two-family dwellings. It also exempts one-story detached storage sheds whose floor area does not exceed 200 square feet, fences not over 6 feet high, and decks not more than 30 inches above grade that do not serve the required exit door. The City of Star lists re-roofing among the jobs that need a building permit. Kuna lists the installation of fences among the work that needs a residential building permit.",
          "A rule read on one city's website says nothing about the house across the city limit. These are also the current lists. They do not show what was required in the year older work was done.",
          "Idaho Code 39-4126 makes a willful violation of the state building code act a misdemeanor, with a fine of not more than $300, imprisonment for not more than 90 days, or both. Each day a violation continues is a separate offense under that section. Local codes set their own penalties, described below."
        ],
        "claims": [
          "cv-id-permit-required-local-jurisdiction",
          "cv-ada-exempt-work-list",
          "cv-ada-building-code-applies-unincorporated",
          "star-building-permit-triggers",
          "kuna-permit-triggers-include-fences",
          "cv-id-building-code-violation-misdemeanor"
        ]
      },
      {
        "heading": "Who issues building permits for your address",
        "body": [
          "Start by confirming which jurisdiction the parcel is in. The City of Star notes that ZIP codes are managed by the Postal Service for mail delivery and do not reflect municipal boundaries, and it points to the Ada County Assessor's website, which shows city boundaries.",
          "Boise: the Planning and Development Services Building Division is responsible for issuing building permits and overseeing building construction within the City of Boise. Its phone number is (208) 608-7070.",
          "Meridian: Building Services is responsible for structural, fire, electrical, mechanical and plumbing permits within the City of Meridian, from application through field inspection. It also handles permits for remodels, fences, sheds and garages. Its phone number is 208-887-2211.",
          "Eagle: the Building Department tells owners never to guess whether a permit is needed and to contact the department before starting. Its phone number is 208-489-8760.",
          "Kuna: the Building Department conducts plan reviews and inspects all phases of construction and modifications. The city says electrical and plumbing permits are available at the Kuna Building Department.",
          "Star: the Building Department administers and enforces the adopted building codes and the city's unified code. Its page lists 208-286-7247. Star says its building department is only required to keep residential permitting records for 2 years.",
          "Garden City: the Building Division processes building permits, plan reviews and permit issuance. The city contracts with outside providers for plan review and inspection, and building permits are still submitted through Garden City. Mechanical, electrical and plumbing permits go directly through the state. The phone number is (208) 472-2921.",
          "Unincorporated Ada County: the county's building code ordinance applies in the unincorporated areas, and the Building Division reviews plans and inspects buildings. The Permitting Division says all electrical and plumbing work needs separate permits through the State of Idaho. Its phone number is 208-287-7900."
        ],
        "claims": [
          "star-certificate-of-occupancy-city-vs-zip",
          "cv-star-records-two-years-and-boundary-lookup",
          "cv-boise-building-division-issues-permits",
          "cv-meridian-building-services-scope",
          "cv-eagle-building-department-permit-faq",
          "cv-kuna-building-department-scope",
          "cv-star-building-department-scope",
          "cv-gardencity-building-services-contract",
          "cv-ada-building-code-applies-unincorporated",
          "ada-building-division-scope",
          "cv-ada-electrical-plumbing-permits-state"
        ]
      },
      {
        "heading": "Who handles an open code enforcement case",
        "body": [
          "Ada County Code Enforcement investigates land use and building code complaints in unincorporated Ada County only, and states that it does not enforce code violations within city limits. It lists construction or remodeling without building permits among the issues it handles. When a specialist confirms a violation, the property owner is notified in writing and given an opportunity to cure it within a specified time frame. An owner who does not cure may face civil District Court proceedings.",
          "Boise: the Code Compliance office says it enforces Boise City Code for businesses, sanitation and zoning. Boise's dwelling building code also says the Building Division may request assistance from code compliance officers to gain compliance in noncompliant cases. The city's online case lookup shows closed cases only. Open or active cases do not appear, so a clean search there does not show that a property has no open case.",
          "Meridian: Code Enforcement officers, part of the Meridian Police Department, investigate and enforce city ordinances that include parcel zoning issues and permit violations. The city's number for reporting is 208-846-7326.",
          "Eagle: complaints go through an online form that assigns a tracking number and a Code Enforcement Officer. The city lists building without a permit as an example of a request, and gives 208-489-8810 for help.",
          "Star: for a public nuisance, the city says its Code Enforcement Officer visits the property and the Zoning Administrator sends a letter. The owner or resident then has fifteen days from receipt to abate the nuisance before the matter can go to the City Council. The page describes nuisances such as weeds, trash and abandoned vehicles. It does not say whether the same steps apply to unpermitted construction.",
          "Kuna: the city says code enforcement covers its zoning, sanitation and nuisance ordinances and works on a complaint-driven basis. Garden City: the Code Enforcement page gives (208) 472-2950 for speaking to a code enforcement officer and states no procedure.",
          "If you have a notice in hand, the office named on the notice is the one to call. Ask for the case status and the steps to close it in writing."
        ],
        "claims": [
          "ada-code-enforcement-unincorporated-only",
          "cv-ada-code-enforcement-notice-and-cure",
          "cv-boise-code-compliance-scope",
          "cv-boise-building-code-penalties",
          "cv-boise-case-lookup-closed-cases-only",
          "cv-meridian-code-enforcement-scope",
          "cv-eagle-code-enforcement-complaints",
          "cv-star-code-enforcement-fifteen-days",
          "cv-kuna-code-enforcement-complaint-driven",
          "cv-gardencity-code-enforcement-contact"
        ]
      },
      {
        "heading": "Can you get a permit after the work is done?",
        "body": [
          "We found a written rule on this in three local codes. None of the three promises approval.",
          "Unincorporated Ada County: if work is commenced without first obtaining a required county building permit, an investigative fee equal to the county permit fee for that work must be paid before the county accepts a building permit application. The fee is in addition to any later permit fee. The ordinance says payment \"does not vest the illegal work with any legitimacy, nor does it establish any right to an Ada County permit\". Ada County Code 7-2-12 makes each violation of the building code chapter a misdemeanor and lets the county bring an action to correct or abate a violation.",
          "Boise: under Boise City Code 9-1B-21, a person who commences work before obtaining the necessary permits is subject to a special investigation before a permit may be issued for that work. A special investigation fee equal to the permit fee is collected in addition to the permit fee, whether or not a permit is issued. Boise City Code 9-1B-29 makes a violation of the dwelling code a misdemeanor with a fine of not more than $1,000, imprisonment for not more than 180 days, or both. The same section lets the building official charge an infraction with a $300 fine instead, and lets a prosecuting attorney reduce a misdemeanor charge to that infraction if the defendant engages in corrective actions resulting in fully completed and permitted work.",
          "Eagle: under the city's residential code section R108.6, work begun before obtaining the necessary permits is subject to a special investigation that is made before a permit may be issued, with an investigation fee in addition to the permit fee.",
          "For Meridian, Kuna, Star and Garden City we did not find a primary source on after-the-fact permits, so this page says nothing about their rules. Call the building department listed above for the address.",
          "None of these sources says what the inspector will need to see. Ask the building department that question before you spend money on plans."
        ],
        "claims": [
          "cv-ada-investigative-fee-work-without-permit",
          "cv-ada-building-code-penalties",
          "cv-boise-special-investigation-fee",
          "cv-boise-building-code-penalties",
          "cv-eagle-investigation-fee-work-before-permit"
        ]
      },
      {
        "heading": "What an as-is sale changes and what it does not",
        "body": [
          "An as-is sale does not remove the disclosure form. Idaho Code 55-2505 lists sixteen kinds of exempt transfer, and none of them turns on the property being sold as-is, for cash, or in poor repair. If one of the sixteen fits your sale, such as certain inherited property, the form is not required. Idaho Code 55-2514 then still preserves any duty to disclose that comes from another Idaho statute or from Idaho common law.",
          "An as-is sale does not change the local government's records. In unincorporated Ada County, a building division permit is issued to the owner of the property and remains tied to the specific property even as the ownership may change. In Boise, a building permit can be transferred to another party who provides a document signed by the original permit holder consenting to the transfer and to the conditions of the original approval.",
          "We found no city or county page that says what happens to an open enforcement case when the property is sold. Ask the office that opened the case before closing, and ask an Idaho attorney how the answer should be reflected in the contract.",
          "What an as-is clause does between a seller and a buyer comes from the contract itself. This page does not interpret contracts. Our page on [selling a house as-is in Idaho](/sell-house-as-is-idaho) describes how that kind of sale works with us."
        ],
        "claims": [
          "id-disclosure-sixteen-exemptions",
          "id-disclosure-other-duties-preserved",
          "cv-ada-permit-required-tied-to-property",
          "cv-boise-permit-transfer"
        ]
      },
      {
        "heading": "Where we fit, and where we do not",
        "body": [
          "We buy property in any condition with our own capital, and unpermitted work is part of a property's condition. The purchase closes through a local title company, you choose the closing date, and a three-week close is realistic. A sale to us is not one of the exemptions in Idaho Code 55-2505, so the disclosure form still applies unless another exemption fits your transfer. Tell us about unpermitted work and any open case when you [contact us](/contact). [How we calculate an offer](/how-we-calculate-an-offer) explains what goes into the number.",
          "We are not the right route for every seller. If the building department tells you the work can be permitted and you have the time and money to finish that process, listing the house afterward on the open market may bring you more than a direct sale. We cannot resolve an enforcement case for you, obtain a permit for you before closing, or tell you what the law requires of you. The building department and an Idaho attorney can."
        ],
        "claims": [
          "id-disclosure-sixteen-exemptions"
        ]
      }
    ]
  },
};

export function guideContentFor(slug: string): GuideContent | undefined {
  return guideContent[slug];
}

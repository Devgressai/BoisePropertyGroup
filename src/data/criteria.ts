/**
 * Acquisition criteria, stated plainly.
 *
 * A seller of a single house and a broker with a 40-unit building both want the
 * same thing from this page: whether it is worth picking up the phone. Vague
 * criteria waste everyone's time, so these are specific about what we will look
 * at and honest about what we will not.
 *
 * The multifamily line deliberately shows where the break falls. Five units is
 * not a legal definition of "commercial" — six different systems put the
 * boundary in different places — but above four units the asset leaves
 * residential financing and residential comparable-sales appraisal and is
 * valued on its income, which is what actually changes for the seller.
 *
 * NOTHING here claims a track record, a fund size, assets under management or a
 * closed transaction. None of that exists yet and none may be implied.
 */
export interface Criterion {
  label: string;
  value: string;
}

export const criteria: Criterion[] = [
  { label: "Geography", value: "Ada County first — Boise, Meridian, Eagle, Kuna, Star, Garden City and unincorporated county. Selectively wider across the Treasure Valley." },
  { label: "Residential", value: "Single-family, duplex, triplex and fourplex, and small portfolios. Any condition, occupied or vacant." },
  { label: "Multifamily", value: "Five units and up — priced on rent roll and NOI rather than comparable sales — through to several hundred. Stabilised, partly vacant, or mid-turnaround. Fourplexes and below we buy too; those we handle as residential." },
  { label: "Commercial", value: "Office and industrial — single tenant, multi tenant, or empty. Flex, warehouse, shop and yard." },
  { label: "Land", value: "Infill lots, acreage, rural parcels, and ground with access, easement, water or floodplain complications." },
  { label: "Condition", value: "Deferred maintenance is not a disqualifier. Neither is a problem attached to title, tenancy or entitlement." },
  { label: "Timeline", value: "Set by the seller. We can work to a fast close or wait months if that is what the situation needs." },
  { label: "What we will not do", value: "Tie a property up under contract while we look for someone to assign it to. If we agree a number, we are the buyer." },
];

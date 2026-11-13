/**
 * Knowledge pillars.
 *
 * These exist because the evidence supports them, not because a keyword grid
 * has a cell. Each is promoted from the opportunity map's HIGH-evidence
 * clusters, and each rests on statute or an Ada County primary source.
 *
 * Ordering matters: on Boise Bath — same metro, comparable domain age — 356
 * guide pages earned 208 clicks over 28 days while 110 commercial local pages
 * earned zero. Informational depth is what a new domain can actually win.
 */
export interface Guide {
  slug: string;
  title: string;
  h1: string;
  description: string;
  cluster:
    | "estate" | "distress" | "tenants" | "land" | "disclosure" | "manufactured"
    | "probate" | "divorce" | "liens" | "closing" | "property-tax" | "well-septic";
  /**
   * ISO dates, taken from git history. `updated` moves ONLY when the guide's
   * substance changes — never to look fresh. Rendered visibly on the page and
   * in its Article schema, and the two must always agree.
   */
  published: string;
  updated: string;
}

export const guides: Guide[] = [
  {
    slug: "selling-an-inherited-house-in-idaho",
    title: "Selling an Inherited House in Idaho",
    h1: "Selling an inherited house in Idaho",
    description:
      "What an Idaho personal representative can and cannot do with estate property, when a court order is needed, and why estate sales are exempt from the seller disclosure requirement.",
    cluster: "estate",
    published: "2026-09-10",
    updated: "2026-09-10",
  },
  {
    slug: "idaho-foreclosure-vs-property-tax-delinquency",
    title: "Foreclosure vs Property Tax Delinquency in Idaho",
    h1: "Two different clocks: foreclosure and tax delinquency in Idaho",
    description:
      "A trustee's sale needs 120 days' notice. A tax deed takes three years. Confusing the two is the most expensive mistake a distressed Idaho owner can make.",
    cluster: "distress",
    published: "2026-09-10",
    updated: "2026-09-10",
  },
  {
    slug: "selling-a-rental-with-tenants-in-idaho",
    title: "Selling a Rental With Tenants in Idaho",
    h1: "Selling a rental with tenants in Idaho",
    description:
      "Who owes the security deposit after a sale, what Idaho's recording act says about unrecorded leases, and the narrow remedy for occupants who are not tenants.",
    cluster: "tenants",
    published: "2026-09-10",
    updated: "2026-09-10",
  },
  {
    slug: "selling-a-manufactured-home-in-idaho",
    title: "Selling a Manufactured Home in Idaho",
    h1: "Selling a manufactured home in Idaho",
    description:
      "Whether your manufactured home is real property or personal property decides how it is sold, who can finance it, and whether it can be moved at all. Idaho makes the conversion easy and the reversal hard.",
    cluster: "manufactured",
    published: "2026-09-10",
    updated: "2026-09-10",
  },
  {
    slug: "selling-land-or-acreage-in-ada-county",
    title: "Selling Land or Acreage in Ada County",
    h1: "Selling land or acreage in Ada County",
    description:
      "What the ground can legally become is decided by water, irrigation, access and who governs the parcel — not by its size. The constraints that actually bind on Ada County land, and where each one is administered.",
    cluster: "land",
    published: "2026-09-11",
    updated: "2026-09-12",
  },
  {
    slug: "idaho-seller-disclosure-when-selling-as-is",
    title: "Idaho Seller Disclosure When Selling a House As-Is",
    h1: "Idaho seller disclosure when you sell a house as-is",
    description:
      "Selling as-is does not remove Idaho's property condition disclosure. Who must disclose, the sixteen exemptions, the ten-day and three-day deadlines, where seller liability sits, and the federal lead-paint rule for pre-1978 homes.",
    cluster: "disclosure",
    published: "2026-09-12",
    updated: "2026-09-12",
  },
  {
    slug: "selling-a-house-during-a-divorce-in-idaho",
    title: "Selling a House During a Divorce in Idaho",
    h1: "Selling a house during a divorce in Idaho: who has to sign",
    description:
      "What Idaho's community property statutes say about who must sign a sale, how temporary orders and injunctions fit in, and how a divorce decree divides a house.",
    cluster: "divorce",
    published: "2026-11-12",
    updated: "2026-11-12",
  },
  {
    slug: "liens-and-judgments-when-selling-in-idaho",
    title: "Selling an Idaho House With a Lien",
    h1: "Liens and judgments when you sell an Idaho house",
    description:
      "What Idaho Code and the IRS say about judgment, mechanic's, HOA, child-support, property-tax and federal tax liens on a house, and how each one ends.",
    cluster: "liens",
    published: "2026-11-12",
    updated: "2026-11-12",
  },
  {
    slug: "selling-a-house-in-probate-in-idaho",
    title: "Selling a House in Probate in Idaho",
    h1: "Selling a house that is going through probate in Idaho",
    description:
      "How an Idaho estate gets a personal representative, what letters are, how the creditor clock runs, and when a house in probate can be sold in Ada County.",
    cluster: "probate",
    published: "2026-11-12",
    updated: "2026-11-12",
  },
  {
    slug: "how-a-property-sale-closes-in-idaho",
    title: "How a Property Sale Closes in Idaho",
    h1: "What actually happens at closing when you sell property in Idaho",
    description:
      "What Idaho law says a deed must contain, how it is notarised and recorded, who runs the closing, and the federal tax forms involved. Sourced to statute.",
    cluster: "closing",
    published: "2026-11-12",
    updated: "2026-11-12",
  },
  {
    slug: "selling-a-house-with-a-well-or-septic-in-ada-county",
    title: "Selling a House With a Well or Septic",
    h1: "Selling an Ada County house on a private well or septic system",
    description:
      "Who regulates septic and wells in Ada County, where the permit and well records are, what a CDH mortgage survey is, and when a water right must be updated.",
    cluster: "well-septic",
    published: "2026-11-12",
    updated: "2026-11-12",
  },
  {
    slug: "idaho-property-taxes-when-you-sell",
    title: "Idaho Property Taxes When You Sell a House",
    h1: "What happens to Idaho property taxes when you sell a house",
    description:
      "The January 1 lien, the December and June due dates, why the homeowner's exemption does not pass to a buyer, and what a sale does to tax relief and deferrals.",
    cluster: "property-tax",
    published: "2026-11-12",
    updated: "2026-11-12",
  },
  {
    slug: "how-to-avoid-foreclosure-in-idaho",
    title: "How to Avoid Foreclosure in Idaho",
    h1: "How to avoid foreclosure in Idaho: the options, in order",
    description:
      "The options an Idaho homeowner has before a trustee's sale, in the order they open: servicer plans, modification, the 115-day cure right, sale, counseling.",
    cluster: "distress",
    published: "2026-11-13",
    updated: "2026-11-13",
  },
  {
    slug: "idaho-foreclosure-timeline",
    title: "Idaho Foreclosure Timeline, Step by Step",
    h1: "The Idaho foreclosure timeline, from the first missed payment to the trustee's deed",
    description:
      "Each step of an Idaho deed of trust foreclosure, who must act, and the minimum days between steps, quoted from Idaho Code and federal rules.",
    cluster: "distress",
    published: "2026-11-13",
    updated: "2026-11-13",
  },
  {
    slug: "short-sale-vs-deed-in-lieu-in-idaho",
    title: "Short Sale vs Deed in Lieu in Idaho",
    h1: "Short sale vs deed in lieu of foreclosure in Idaho",
    description:
      "How a short sale and a deed in lieu differ, why both need the lender's consent, what Idaho Code says on deficiencies, and what the IRS says on canceled debt.",
    cluster: "distress",
    published: "2026-11-13",
    updated: "2026-11-13",
  },
  {
    slug: "after-a-foreclosure-sale-in-idaho",
    title: "After a Foreclosure Sale in Idaho",
    h1: "What happens after a foreclosure sale in Idaho",
    description:
      "What Idaho Code says after a trustee's sale: no redemption, possession on the tenth day, who gets surplus money, deficiency limits, tenants, and credit reports.",
    cluster: "distress",
    published: "2026-11-13",
    updated: "2026-11-13",
  },
  {
    slug: "foreclosure-rescue-scams-in-idaho",
    title: "Foreclosure Rescue Scams in Idaho",
    h1: "Foreclosure rescue scams in Idaho: the warning signs and the laws that protect you",
    description:
      "How foreclosure rescue and mortgage relief scams work, what Idaho and federal law require of anyone who contracts with you in foreclosure, and where to report.",
    cluster: "distress",
    published: "2026-11-13",
    updated: "2026-11-13",
  },
  {
    slug: "inheriting-a-house-with-a-mortgage-in-idaho",
    title: "Inheriting a House With a Mortgage in Idaho",
    h1: "Inheriting a house with a mortgage in Idaho: what happens to the loan",
    description:
      "What happens to the mortgage when an Idaho homeowner dies: the federal due-on-sale exemption, successor in interest rights, and the choices an heir has.",
    cluster: "estate",
    published: "2026-11-13",
    updated: "2026-11-13",
  },
  {
    slug: "reverse-mortgage-after-the-borrower-dies-in-idaho",
    title: "Reverse Mortgage After Death in Idaho",
    h1: "What happens to a reverse mortgage when the borrower dies in Idaho",
    description:
      "What federal HECM rules say when the last reverse mortgage borrower dies: when the loan comes due, the 30-day notice, the 95 percent sale rule, Idaho probate.",
    cluster: "estate",
    published: "2026-11-13",
    updated: "2026-11-13",
  },
  {
    slug: "taxes-when-you-sell-a-house-in-idaho",
    title: "Taxes When You Sell a House in Idaho",
    h1: "Income taxes when you sell a house in Idaho",
    description:
      "What the IRS says about the home-sale exclusion, basis and Form 1099-S, and what Idaho Code 63-3022H and the Idaho State Tax Commission say about the gain.",
    cluster: "property-tax",
    published: "2026-11-13",
    updated: "2026-11-13",
  },
  {
    slug: "bankruptcy-and-foreclosure-in-idaho",
    title: "Bankruptcy and Foreclosure in Idaho",
    h1: "Bankruptcy and foreclosure in Idaho: what a filing does and does not do to a trustee's sale",
    description:
      "What federal law and the U.S. Courts say a bankruptcy filing does to a pending Idaho trustee's sale: the automatic stay, chapter 7, chapter 13, selling.",
    cluster: "distress",
    published: "2026-11-13",
    updated: "2026-11-13",
  },
  {
    slug: "selling-a-house-with-unpermitted-work-in-ada-county",
    title: "Selling a House With Unpermitted Work",
    h1: "Selling a house with unpermitted work or an open code case in Ada County",
    description:
      "What Idaho's disclosure form asks about permits, which Ada County office handles permits and code cases for your address, and what an as-is sale changes.",
    cluster: "disclosure",
    published: "2026-11-13",
    updated: "2026-11-13",
  },
];

export function guideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

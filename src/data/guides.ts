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
  cluster: "estate" | "distress" | "tenants" | "land" | "disclosure";
}

export const guides: Guide[] = [
  {
    slug: "selling-an-inherited-house-in-idaho",
    title: "Selling an Inherited House in Idaho",
    h1: "Selling an inherited house in Idaho",
    description:
      "What an Idaho personal representative can and cannot do with estate property, when a court order is needed, and why estate sales are exempt from the seller disclosure requirement.",
    cluster: "estate",
  },
  {
    slug: "idaho-foreclosure-vs-property-tax-delinquency",
    title: "Foreclosure vs Property Tax Delinquency in Idaho",
    h1: "Two different clocks: foreclosure and tax delinquency in Idaho",
    description:
      "A trustee's sale needs 120 days' notice. A tax deed takes three years. Confusing the two is the most expensive mistake a distressed Idaho owner can make.",
    cluster: "distress",
  },
  {
    slug: "selling-a-rental-with-tenants-in-idaho",
    title: "Selling a Rental With Tenants in Idaho",
    h1: "Selling a rental with tenants in Idaho",
    description:
      "Who owes the security deposit after a sale, what Idaho's recording act says about unrecorded leases, and the narrow remedy for occupants who are not tenants.",
    cluster: "tenants",
  },
];

export function guideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

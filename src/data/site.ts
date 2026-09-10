/**
 * SINGLE SOURCE OF BUSINESS IDENTITY.
 *
 * Every unset field is an EMPTY STRING, never a plausible-looking placeholder.
 * Components must check `isSet()` and render nothing rather than a fake. A
 * phone number that looks real but isn't is worse than no phone number: it
 * costs a seller a call and costs us the lead.
 *
 * Sierra ships `trust.ts` with empty arrays for the same reason.
 */
export const site = {
  name: "Boise Property Group",
  /** Legal entity. BLOCKED — owner has not supplied it. */
  legalEntity: "",
  domain: "boisepropertygroup.com",
  url: "https://boisepropertygroup.com",

  /** NAP. All BLOCKED pending owner input. Do not invent. */
  phone: "",
  phoneHref: "",
  email: "",
  address: { street: "", city: "", state: "ID", zip: "" },

  market: {
    county: "Ada County",
    region: "Treasure Valley",
    state: "Idaho",
    cities: ["Boise", "Meridian", "Eagle", "Kuna", "Star", "Garden City"],
  },

  /**
   * Trust data ships EMPTY. No review counts, no years in business, no
   * transaction volume, no awards, no BBB status — none of it exists yet and
   * none may be invented. See the honesty rule in docs/DECISIONS.md.
   */
  trust: {
    reviews: [] as { author: string; body: string; source: string }[],
    yearsInBusiness: null as number | null,
    transactionsClosed: null as number | null,
  },
} as const;

/** True when a business field has a real value. */
export function isSet(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export const hasPhone = isSet(site.phone);
export const hasEmail = isSet(site.email);
export const hasAddress = isSet(site.address.street) && isSet(site.address.city);
export const hasLegalEntity = isSet(site.legalEntity);

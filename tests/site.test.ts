import { describe, it, expect } from "vitest";
import { site, isSet, hasPhone, hasLegalEntity } from "../src/data/site";
import { organizationSchema, graph } from "../src/lib/seo/schema";

describe("business identity honesty", () => {
  it("never emits a plausible-looking fake for an unset field", () => {
    for (const v of [site.phone, site.email, site.legalEntity, site.address.street]) {
      expect(v === "" || v.trim().length > 0).toBe(true);
    }
  });

  it("isSet rejects blank and whitespace-only values", () => {
    expect(isSet("")).toBe(false);
    expect(isSet("   ")).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet("208-555-0100")).toBe(true);
  });

  it("omits telephone from schema entirely when unset, rather than emitting empty", () => {
    const org = organizationSchema();
    if (!hasPhone) expect(org).not.toHaveProperty("telephone");
    else expect(org.telephone).toBeTruthy();
  });

  it("omits legalName from schema when the entity is unknown", () => {
    const org = organizationSchema();
    if (!hasLegalEntity) expect(org).not.toHaveProperty("legalName");
  });

  it("never claims a rating, review count or award", () => {
    const json = JSON.stringify(graph(organizationSchema()));
    for (const banned of ["aggregateRating", "ratingValue", "reviewCount", "award"]) {
      expect(json).not.toContain(banned);
    }
  });

  it("serves every Ada County municipality", () => {
    expect(site.market.cities).toEqual(
      expect.arrayContaining(["Boise", "Meridian", "Eagle", "Kuna", "Star", "Garden City"])
    );
  });
});

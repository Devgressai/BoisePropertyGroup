import { describe, it, expect } from "vitest";
import { site, isSet, hasPhone, hasLegalEntity } from "../src/data/site";
import { organizationSchema, graph } from "../src/lib/seo/schema";

describe("business identity honesty", () => {
  it("never contains a plausible-looking fake in any business field", () => {
    // The original version of this test compared each field to "" and was
    // tautological — every field IS "" today, so TypeScript narrowed the else
    // branch to `never` and CI rejected it. This is the test that actually
    // matters: it fails the build if someone later drops in a 555 number, a
    // lorem address or a TODO, which is exactly how fake NAP reaches
    // production.
    const PLACEHOLDER =
      /\b555[-.\s]?\d{4}\b|lorem|example\.com|\bTBD\b|\bTODO\b|\bXXX\b|123[-.\s]?4567/i;
    const fields: readonly string[] = [
      site.phone,
      site.email,
      site.legalEntity,
      site.address.street,
      site.address.city,
      site.address.zip,
    ];
    for (const value of fields) {
      expect(PLACEHOLDER.test(value)).toBe(false);
      expect(value).toBe(value.trim());
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

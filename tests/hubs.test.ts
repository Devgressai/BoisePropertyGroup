import { describe, it, expect } from "vitest";
import { claim } from "../src/data/claims";
import { commercialClaim } from "../src/data/commercial-claims";
import { COMMERCIAL_PAGES } from "../src/data/commercial-content";
import { placeBySlug, county } from "../src/data/geography";
import {
  LOCATIONS_COUNTYWIDE,
  LOCATIONS_COUNTY_LINE,
  LOCATIONS_LINES,
  COMMERCIAL_LINES,
} from "../src/data/hub-content";

/**
 * Hub lines restate facts; each must rest on approved evidence and point at a
 * page that exists. Structural checks only, so they hold as coverage grows.
 */
describe("hub lines", () => {
  it("every locations line cites approved residential claims", () => {
    for (const l of [...LOCATIONS_COUNTYWIDE, LOCATIONS_COUNTY_LINE, ...LOCATIONS_LINES]) {
      expect(l.claims.length, l.slug).toBeGreaterThan(0);
      for (const id of l.claims) expect(claim(id), `${l.slug} cites ${id}`).toBeDefined();
    }
  });

  it("every place line names a real place", () => {
    for (const l of LOCATIONS_LINES) expect(placeBySlug(l.slug), l.slug).toBeDefined();
    expect(LOCATIONS_COUNTY_LINE.slug).toBe(county.slug);
  });

  it("every commercial line cites approved commercial claims and names a real page", () => {
    const slugs = new Set(COMMERCIAL_PAGES.map((p) => p.slug));
    for (const l of COMMERCIAL_LINES) {
      expect(slugs.has(l.slug), l.slug).toBe(true);
      expect(l.claims.length, l.slug).toBeGreaterThan(0);
      for (const id of l.claims) expect(commercialClaim(id), `${l.slug} cites ${id}`).toBeDefined();
    }
  });

  it("the multifamily line keeps the five-unit floor visible", () => {
    const mf = COMMERCIAL_LINES.find((l) => l.slug === "multifamily");
    expect(mf?.line).toMatch(/\bfive units\b/i);
  });

  it("hub copy carries no em dashes", () => {
    for (const l of [...LOCATIONS_COUNTYWIDE, LOCATIONS_COUNTY_LINE, ...LOCATIONS_LINES, ...COMMERCIAL_LINES])
      expect(l.line, l.slug).not.toMatch(/—/);
  });
});

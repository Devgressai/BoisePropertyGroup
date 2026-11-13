import { describe, it, expect } from "vitest";
import { calculateOffer, calculateAsIsListing, calculateListing } from "../src/lib/offer-math";

describe("offer math (owner-set rates, 2026-11-13)", () => {
  it("offer = value − work − holding − margin, never negative", () => {
    const o = calculateOffer(500_000, "significant");
    expect(o.repairs).toBe(62_500);
    expect(o.holding).toBe(17_000);
    expect(o.margin).toBe(45_000);
    expect(o.offer).toBe(500_000 - 62_500 - 17_000 - 45_000);
    expect(calculateOffer(0, "major").offer).toBe(0);
  });
  it("on a move-in-ready house, listing nets more than our offer", () => {
    expect(calculateListing(500_000, "ready").net).toBeGreaterThan(calculateOffer(500_000, "ready").offer);
    expect(calculateAsIsListing(500_000, "ready").net).toBeGreaterThan(calculateOffer(500_000, "ready").offer);
  });
});

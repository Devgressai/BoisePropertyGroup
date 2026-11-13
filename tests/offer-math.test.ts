import { describe, it, expect } from "vitest";
import { calculateOffer, calculateAsIsListing, calculateListing, clampArv, range, CONDITION_TIERS, ARV_MIN, ARV_MAX } from "../src/lib/offer-math";

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
  it("bad input never produces a negative or NaN figure", () => {
    for (const bad of [NaN, -1, -500_000, Infinity, 0]) {
      for (const t of CONDITION_TIERS) {
        for (const r of [calculateOffer(bad, t.key), calculateAsIsListing(bad, t.key), calculateListing(bad, t.key)]) {
          for (const v of Object.values(r)) {
            expect(Number.isFinite(v)).toBe(true);
            expect(v).toBeGreaterThanOrEqual(0);
          }
        }
      }
    }
  });
  it("clamps typed values to the worksheet's bounds", () => {
    expect(clampArv("")).toBe(ARV_MIN);
    expect(clampArv("abc")).toBe(ARV_MIN);
    expect(clampArv("-400000")).toBe(400_000); // the minus sign is not a digit; the figure is read
    expect(clampArv("$425,499")).toBe(425_000);
    expect(clampArv(99_000_000)).toBe(ARV_MAX);
    expect(clampArv(1)).toBe(ARV_MIN);
  });
  it("every line adds up at the bounds and in the middle, for every condition", () => {
    for (const arv of [ARV_MIN, 500_000, ARV_MAX]) {
      for (const t of CONDITION_TIERS) {
        const o = calculateOffer(arv, t.key);
        expect(o.offer).toBe(arv - o.repairs - o.holding - o.margin);
        const a = calculateAsIsListing(arv, t.key);
        expect(a.net).toBe(a.price - a.commission - a.closing - a.carrying);
        const l = calculateListing(arv, t.key);
        expect(l.net).toBe(l.price - l.repairs - l.commission - l.closing - l.carrying);
        const b = range(o.offer);
        expect(b.low).toBeLessThanOrEqual(o.offer);
        expect(b.high).toBeGreaterThanOrEqual(o.offer);
      }
    }
  });
});

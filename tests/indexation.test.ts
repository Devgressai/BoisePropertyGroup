import { describe, it, expect } from "vitest";
import { places, county, renderablePlaces, indexablePlaces } from "../src/data/geography";
import { decideIndexation, robotsFor, countWords, MIN_UNIQUE_CLAIMS } from "../src/lib/seo/indexation";
import { contentFor } from "../src/data/place-content";
import { claims, publishable, claimsUniqueTo } from "../src/data/claims";

const LONG = "word ".repeat(900);

describe("indexation gate", () => {
  it("follow is ALWAYS true, even when noindex", () => {
    for (const p of places) {
      const r = robotsFor(decideIndexation(p, 0));
      expect(r.follow).toBe(true);
    }
  });

  it("refuses to index a place with no unique evidence, however long the page", () => {
    const hidden = places.find((p) => p.buildVerdict === "DO_NOT_BUILD");
    expect(hidden).toBeDefined();
    const d = decideIndexation(hidden!, 100000);
    expect(d.indexable).toBe(false);
  });

  it("refuses to index a place whose claims are all inherited", () => {
    const thin = places.find((p) => p.buildVerdict === "RENDER_NOINDEX");
    expect(thin).toBeDefined();
    expect(claimsUniqueTo(thin!.id).length).toBeLessThan(MIN_UNIQUE_CLAIMS);
    expect(decideIndexation(thin!, 100000).indexable).toBe(false);
  });

  it("indexes only places with enough distinctive material", () => {
    for (const p of indexablePlaces) {
      expect(claimsUniqueTo(p.id).length).toBeGreaterThanOrEqual(MIN_UNIQUE_CLAIMS);
    }
  });

  it("refuses to index a qualifying place that is too thin to be worth reading", () => {
    const strong = indexablePlaces[0];
    expect(decideIndexation(strong, 120).indexable).toBe(false);
    expect(decideIndexation(strong, 900).indexable).toBe(true);
  });

  it("every place that renders has content or a template, and every BUILD place is hand-written", () => {
    for (const p of renderablePlaces) {
      if (p.buildVerdict === "BUILD") expect(contentFor(p.slug)).toBeDefined();
    }
    expect(contentFor(county.slug)).toBeDefined();
  });

  it("hand-written pages clear the word floor on their own content", () => {
    for (const p of places.filter((x) => x.buildVerdict === "BUILD")) {
      const c = contentFor(p.slug)!;
      const words = countWords(...c.intro, ...c.sections.flatMap((s) => s.body));
      expect(words).toBeGreaterThanOrEqual(600);
    }
  });
});

describe("claim registry safety", () => {
  it("a flagged claim can never be published", () => {
    const flagged = claims.filter((c) => c.verificationFlag !== null);
    const pub = publishable(claims);
    for (const f of flagged) expect(pub.find((c) => c.id === f.id)).toBeUndefined();
  });

  it("every publishable claim carries at least one source", () => {
    for (const c of publishable(claims)) expect(c.sources.length).toBeGreaterThan(0);
  });
});

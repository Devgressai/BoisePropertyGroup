import { describe, it, expect } from "vitest";
import { TOPIC_PAGES, EXAMPLE_ARV, exampleRoutes } from "../src/data/topic-pages";
import { OFFER_RATES, CONDITION_TIERS, calculateOffer, formatUsd } from "../src/lib/offer-math";
import { guides, AS_IS_FACTS, DEFAULT_HANDOFF } from "../src/data/guides";
import { publishedTopics, situationForGuide } from "../src/lib/seo/registry";
import { guideContent } from "../src/data/guide-content";
import { places, county } from "../src/data/geography";
import { resolveClaim, decideTopicIndexation } from "../src/lib/seo/topicIndexation";
import { renderedTitle, metaDescription, TITLE_MAX, DESCRIPTION_MAX } from "../src/lib/seo/meta";
// @ts-expect-error — plain .mjs, shared with the local gate on purpose.
import { IMPLIES_HISTORY, APPRAISAL_PROMISE } from "../scripts/validation/prose-rules.mjs";

/**
 * Business promises the owner has NOT confirmed (2026-09-13). The only
 * business facts allowed: own capital · local title company · seller sets the
 * date · any condition · three-week close realistic. Assert meaning, with
 * alternatives, so better prose still passes.
 */
const UNCONFIRMED_PROMISE = [
  /\bno (?:hidden )?fees\b/i,
  /\bwe(?:'ll| will)? (?:pay|cover) (?:all |the |your )?closing costs\b/i,
  /(?<!not |cannot |can't |never )\bstop (?:your |the |a )?foreclosure\b/i,
  /\bwe (?:do not|don't|never) assign\b/i,
  /\bcash in (?:as little as )?\d+ days\b/i,
  /\bwe guarantee\b|\bguaranteed (?:offer|sale|price|close|closing)\b/i,
];

const proseOf = (c: { intro: string[]; sections: { heading: string; body: string[] }[] }) =>
  [...c.intro, ...c.sections.flatMap((s) => [s.heading, ...s.body])].join("\n");

const residentialPages = [
  ...TOPIC_PAGES.map((p) => ({ id: `/${p.slug}`, prose: proseOf(p) })),
  ...Object.entries(guideContent).map(([slug, c]) => ({ id: `/guides/${slug}`, prose: proseOf(c) })),
];

describe("topic pages (BOFU situations, MOFU decisions)", () => {
  it("every cited claim resolves to an approved claim", () => {
    for (const p of TOPIC_PAGES)
      for (const s of p.sections)
        for (const id of s.claims ?? []) expect(resolveClaim(id), `${p.slug} → ${id}`).toBeDefined();
  });

  it("never collides with a place or county URL", () => {
    const taken = new Set([county.slug, ...places.map((p) => p.slug)]);
    for (const p of TOPIC_PAGES) expect(taken.has(p.slug), p.slug).toBe(false);
    expect(new Set(TOPIC_PAGES.map((p) => p.slug)).size).toBe(TOPIC_PAGES.length);
  });

  it("links down only to guides that exist", () => {
    const slugs = new Set(guides.map((g) => g.slug));
    for (const p of TOPIC_PAGES) for (const g of p.guides) {
      // A planned guide may be named before it is written; the template drops it until it has content.
      if (!slugs.has(g)) expect(g, `${p.slug} names unknown guide ${g}`).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("titles and descriptions fit the snippet", () => {
    for (const p of TOPIC_PAGES) {
      expect(renderedTitle(p.title).length, p.title).toBeLessThanOrEqual(TITLE_MAX);
      expect(p.description.length, p.slug).toBeLessThanOrEqual(DESCRIPTION_MAX);
      expect(metaDescription(p.description)).toBe(p.description);
    }
  });

  it("every page written so far clears its own gate", () => {
    for (const p of TOPIC_PAGES) expect(decideTopicIndexation(p), p.slug).toEqual({ indexable: true, reason: "" });
  });
});

describe("guide to selling-page handoff", () => {
  it("every guide names at least one selling page, and each is a published situation page", () => {
    const live = new Set(publishedTopics("situation").map((p) => p.slug));
    for (const g of guides) {
      expect(g.sell.length, g.slug).toBeGreaterThan(0);
      for (const s of g.sell) expect(live.has(s), `${g.slug} -> ${s}`).toBe(true);
    }
  });

  it("the primary selling page is the one the template and NextSteps use", () => {
    for (const g of guides) expect(situationForGuide(g.slug)?.slug, g.slug).toBe(g.sell[0]);
  });

  it("the as-is block makes no unconfirmed promise and stays plain text", () => {
    const texts = [AS_IS_FACTS, DEFAULT_HANDOFF, ...guides.map((g) => g.handoff ?? "")];
    for (const t of texts) {
      for (const re of [...(IMPLIES_HISTORY as RegExp[]), ...(APPRAISAL_PROMISE as RegExp[]), ...UNCONFIRMED_PROMISE]) {
        expect(t, `matched ${re}`).not.toMatch(re);
      }
      expect(t, "links belong to the block, not the sentence").not.toMatch(/\]\(\//);
      expect(t, "no em dashes in new copy").not.toMatch(/—/);
    }
  });

  it("guide descriptions fit the snippet without being cut", () => {
    for (const g of guides) {
      expect(g.description.length, g.slug).toBeLessThanOrEqual(DESCRIPTION_MAX);
      expect(metaDescription(g.description)).toBe(g.description);
    }
  });

  it("the land guide and the land selling page do not share a title or H1", () => {
    const guide = guides.find((g) => g.slug === "selling-land-or-acreage-in-ada-county")!;
    const page = TOPIC_PAGES.find((p) => p.slug === "sell-land-idaho")!;
    const norm = (s: string) => s.toLowerCase().replace(/^(selling|sell)\s+/, "").replace(/,?\s*idaho$/, "");
    expect(norm(guide.title)).not.toBe(norm(page.title));
    expect(norm(guide.h1)).not.toBe(norm(page.h1));
  });
});

describe("residential prose rules (guides + topic pages)", () => {
  for (const { id, prose } of residentialPages) {
    it(`${id} implies no history, promises no appraisal, makes no unconfirmed promise`, () => {
      for (const re of [...(IMPLIES_HISTORY as RegExp[]), ...(APPRAISAL_PROMISE as RegExp[]), ...UNCONFIRMED_PROMISE]) {
        expect(prose, `${id} matched ${re}`).not.toMatch(re);
      }
    });
  }
});

describe("decision pages state the offer model as implemented", () => {
  const page = (slug: string) => TOPIC_PAGES.find((p) => p.slug === slug)!;
  const pct = (r: number) => `${+(r * 100).toFixed(2)}%`;

  it("the calculation page names every rate offer-math.ts uses", () => {
    const prose = proseOf(page("how-we-calculate-an-offer"));
    for (const r of [OFFER_RATES.margin, OFFER_RATES.resale, OFFER_RATES.monthlyCarry, OFFER_RATES.commission, OFFER_RATES.sellerClosing])
      expect(prose).toContain(pct(r));
    for (const t of CONDITION_TIERS) {
      expect(prose).toContain(`${t.label.toLowerCase()} ${pct(t.repairRate)}`);
      expect(prose).toContain(`${t.months} months for ${t.label.toLowerCase()}`);
    }
    const o = calculateOffer(EXAMPLE_ARV, "significant");
    expect(prose).toContain(formatUsd(o.offer));
  });

  it("'listing wins' holds on the model's own numbers", () => {
    const cosmetic = exampleRoutes("cosmetic");
    expect(cosmetic.asIs.net).toBeGreaterThan(cosmetic.offer.offer);
    const major = exampleRoutes("major");
    expect(major.reno.net).toBeGreaterThan(major.offer.offer);
    const prose = proseOf(page("cash-offer-vs-listing-idaho"));
    expect(prose).toContain(formatUsd(cosmetic.offer.offer));
    expect(prose).toMatch(/listing wins/i);
  });

  it("commission appears only as the model's stated assumption", () => {
    const prose = proseOf(page("cash-offer-vs-listing-idaho"));
    expect(prose).toMatch(/assumptions, not market figures/);
    expect(prose).not.toMatch(/(?:typical|average|standard|usual) commission/i);
  });

  it("no em dashes in the rewritten decision pages", () => {
    for (const s of ["cash-offer-vs-listing-idaho", "how-we-calculate-an-offer", "how-to-check-a-cash-buyer-in-idaho"])
      expect(proseOf(page(s)) + page(s).title + page(s).description, s).not.toMatch(/—/);
  });
});

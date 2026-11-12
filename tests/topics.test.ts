import { describe, it, expect } from "vitest";
import { TOPIC_PAGES } from "../src/data/topic-pages";
import { guides } from "../src/data/guides";
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

describe("residential prose rules (guides + topic pages)", () => {
  for (const { id, prose } of residentialPages) {
    it(`${id} implies no history, promises no appraisal, makes no unconfirmed promise`, () => {
      for (const re of [...(IMPLIES_HISTORY as RegExp[]), ...(APPRAISAL_PROMISE as RegExp[]), ...UNCONFIRMED_PROMISE]) {
        expect(prose, `${id} matched ${re}`).not.toMatch(re);
      }
    });
  }
});

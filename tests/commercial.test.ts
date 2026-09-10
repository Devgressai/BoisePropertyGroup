import { describe, it, expect } from "vitest";
import { COMMERCIAL_PAGES, commercialPage } from "../src/data/commercial-content";
import {
  commercialClaims,
  commercialClaim,
  claimsUniqueToAssetClass,
  commercialClaimsByTopic,
} from "../src/data/commercial-claims";
import { MIN_UNIQUE_CLAIMS, MIN_WORDS, countWords } from "../src/lib/seo/indexation";
// @ts-expect-error — plain .mjs, shared with the local gate on purpose.
import { checkProse } from "../scripts/validation/prose-rules.mjs";

const prose = (slug: string) => {
  const p = commercialPage(slug)!;
  return [...p.intro, ...p.sections.flatMap((s) => [s.heading, ...s.body])].join(" ");
};

describe("commercial evidence", () => {
  it("emits no claim that is unsourced", () => {
    for (const c of commercialClaims) expect(c.sources.length).toBeGreaterThan(0);
  });

  it("every citation on a page resolves to an approved claim", () => {
    for (const page of COMMERCIAL_PAGES) {
      for (const id of page.citedClaims) {
        expect(commercialClaim(id), `${page.slug} cites ${id}`).toBeDefined();
      }
    }
  });

  it("every page clears the differentiation and length gates", () => {
    for (const page of COMMERCIAL_PAGES) {
      const differentiating =
        page.kind === "explainer"
          ? new Set(
              (page.gateTopics ?? []).flatMap((t) => commercialClaimsByTopic(t).map((c) => c.id)),
            ).size
          : claimsUniqueToAssetClass(page.assetClass).length;
      expect(differentiating, page.slug).toBeGreaterThanOrEqual(MIN_UNIQUE_CLAIMS);
      expect(countWords(prose(page.slug)), page.slug).toBeGreaterThanOrEqual(MIN_WORDS);
    }
  });
});

describe("prose rules", () => {
  /**
   * The rules live in scripts/validation/prose-rules.mjs, shared with the local
   * gate. They used to live only here, which meant they could not run without a
   * remote build — and they cost a red CI run on a change that made a page
   * BETTER: "six systems, and they do not agree" became "seven systems, and no
   * two of them agree", and a test matching the literal phrase failed it.
   *
   * So they assert MEANING with alternatives, not wording. Between them they
   * hold four things that would otherwise erode a sentence at a time: no page
   * may imply a completed transaction, carry landlord-exit phrasing, promise a
   * valuation, or state an undated market statistic.
   */
  for (const page of COMMERCIAL_PAGES) {
    it(`${page.slug} satisfies every prose rule`, () => {
      expect(checkProse(page, prose(page.slug))).toEqual([]);
    });
  }
});

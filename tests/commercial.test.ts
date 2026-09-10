import { describe, it, expect } from "vitest";
import { COMMERCIAL_PAGES, commercialPage } from "../src/data/commercial-content";
import {
  commercialClaims,
  commercialClaim,
  claimsUniqueToAssetClass,
} from "../src/data/commercial-claims";
import { MIN_UNIQUE_CLAIMS, MIN_WORDS, countWords } from "../src/lib/seo/indexation";

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
      expect(claimsUniqueToAssetClass(page.assetClass).length).toBeGreaterThanOrEqual(
        MIN_UNIQUE_CLAIMS,
      );
      expect(countWords(prose(page.slug))).toBeGreaterThanOrEqual(MIN_WORDS);
    }
  });
});

describe("the prime constraint — capability is never history", () => {
  /**
   * There is no completed transaction, in any asset class. "We consider
   * industrial property" must never drift into "we have acquired industrial
   * property throughout Boise". This is the claim most likely to appear by
   * accident, because it is the one every competitor makes.
   */
  const HISTORY = [
    /\bwe(?:'ve| have)\s+(?:bought|purchased|acquired|closed|sold)\b/i,
    /\bwe (?:buy|close) (?:hundreds|dozens|\d+)\b/i,
    /\b(?:properties|deals|buildings) (?:we(?:'ve| have)|already) (?:bought|closed|acquired)\b/i,
    /\bour (?:portfolio|track record|past (?:deals|acquisitions))\b/i,
    /\byears of experience\b/i,
    /\btrusted by\b/i,
  ];

  it("no commercial page implies a completed transaction", () => {
    for (const page of COMMERCIAL_PAGES) {
      for (const pat of HISTORY) {
        expect(prose(page.slug), `${page.slug} matched ${pat}`).not.toMatch(pat);
      }
    }
  });
});

describe("the vocabulary boundary", () => {
  /**
   * The risk runs one way. Our residential pages are not threatened by the
   * SERP — they are threatened by our own copy. Landlord-exit language on a
   * commercial page makes it a residential page in the index.
   */
  const LANDLORD_EXIT = [
    /tired of (?:managing|being a landlord)/i,
    /no repairs,?\s*no fees/i,
    /sell your rental fast/i,
    /problem tenants?/i,
    /we buy houses/i,
  ];

  it("carries no landlord-exit phrasing", () => {
    for (const page of COMMERCIAL_PAGES) {
      for (const pat of LANDLORD_EXIT) {
        expect(prose(page.slug), `${page.slug} matched ${pat}`).not.toMatch(pat);
      }
    }
  });

  it("the multifamily page states its unit floor in visible copy", () => {
    expect(prose("multifamily")).toMatch(/\bfive units\b|\bmore than four units\b/i);
  });

  it("the multifamily page carries the income vocabulary that classifies it", () => {
    expect(prose("multifamily")).toMatch(/\brent roll\b/i);
    expect(prose("multifamily")).toMatch(/\bnet operating income\b|\bNOI\b/i);
  });

  it("keeps duplex through fourplex on the residential side", () => {
    // Conceding this range is deliberate: it sits below the federal
    // four-unit finance boundary, and it is where the incumbent residential
    // cash buyers are genuinely credible.
    expect(prose("multifamily")).not.toMatch(/\bwe buy (?:duplex|triplex|fourplex)/i);
  });
});

describe("valuation boundary", () => {
  /**
   * We may explain how value is determined. We may never state or imply what a
   * reader's property is worth — we are a buyer, and an opinion of value from a
   * buyer is not an opinion of value.
   */
  const APPRAISAL_PROMISE = [
    /free (?:valuation|appraisal|property analysis)/i,
    /what(?:'s| is) your (?:building|property) worth/i,
    /we(?:'ll| will) tell you what it(?:'s| is) worth/i,
    /instant (?:offer|valuation)/i,
    /\bwe appraise\b/i,
  ];

  it("promises no appraisal", () => {
    for (const page of COMMERCIAL_PAGES) {
      for (const pat of APPRAISAL_PROMISE) {
        expect(prose(page.slug), `${page.slug} matched ${pat}`).not.toMatch(pat);
      }
    }
  });

  it("says out loud that the multifamily boundary is contested", () => {
    /**
     * This was first written as a banned-phrase test forbidding "five units is
     * the legal definition". It failed — on the page's own REBUTTAL of that
     * idea. A negative test that cannot tell an assertion from a correction
     * pressures the next writer to delete the correction, which is the
     * opposite of what it was for.
     *
     * So it asserts the positive instead: the page must show that the systems
     * disagree, which is the only honest version of the fact.
     */
    const mf = prose("multifamily");
    expect(mf).toMatch(/\bdo not agree\b|\bdisagree\b|\bdepends on which\b/i);
    expect(mf).toMatch(/\bnot a legal fact\b|\bno one system\b|\bno single\b/i);
  });
});

describe("undated market statistics", () => {
  it("no page states a cap rate, vacancy rate or price per foot", () => {
    const BANNED = /\b\d+(?:\.\d+)?\s*(?:%|percent)\s*(?:cap|vacancy|absorption)|\bcap rate of\b|\$\d[\d,]*\s*(?:per|\/)\s*(?:square )?f(?:oo|)t/i;
    for (const page of COMMERCIAL_PAGES) {
      expect(prose(page.slug), page.slug).not.toMatch(BANNED);
    }
  });
});

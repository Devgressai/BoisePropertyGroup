import { describe, it, expect } from "vitest";
import robots from "../src/app/robots";
import sitemap from "../src/app/sitemap";
import { site } from "../src/data/site";
import { places } from "../src/data/geography";
import { contentFor } from "../src/data/place-content";

describe("robots", () => {
  const r = robots();

  it("is open for crawling", () => {
    const wildcard = r.rules as { userAgent?: string; allow?: string; disallow?: string }[];
    const all = wildcard.find((x) => x.userAgent === "*");
    expect(all?.allow).toBe("/");
    expect(all?.disallow).toBe("/api/");
  });

  it("advertises the sitemap on the canonical host", () => {
    expect(r.sitemap).toBe(`${site.url}/sitemap.xml`);
    // The canonical host is the APEX. If this ever becomes www, every canonical
    // tag and every sitemap URL on the site points somewhere that redirects
    // away — the mismatch that produces zero indexing.
    expect(site.url).not.toMatch(/\/\/www\./);
  });

  it("names AI crawlers explicitly rather than relying on the wildcard", () => {
    const agents = (r.rules as { userAgent?: string }[]).map((x) => x.userAgent);
    for (const a of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]) {
      expect(agents).toContain(a);
    }
  });
});

describe("sitemap", () => {
  const urls = sitemap().map((u) => u.url);

  it("advertises only self-canonical, indexable URLs", () => {
    // A sitemap that lists a noindex page is a mixed signal and wastes crawl
    // budget. The filter here must mirror the gate the routes apply.
    for (const p of places) {
      if (!p.indexable || !contentFor(p.slug)) {
        expect(urls, `${p.name} is noindex and must not be advertised`).not.toContain(
          `${site.url}/${p.slug}`,
        );
      }
    }
  });

  it("uses the canonical host for every entry, with no duplicates", () => {
    for (const u of urls) expect(u.startsWith(site.url)).toBe(true);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("includes the commercial pages", () => {
    expect(urls).toContain(`${site.url}/commercial`);
    expect(urls.some((u) => u.includes("/commercial/"))).toBe(true);
  });
});

describe("the site-wide robots default", () => {
  /**
   * Regression lock. robots.txt and the layout's metadata are two separate
   * switches, and opening only the first left the homepage, both hub pages and
   * four static pages serving `noindex, follow` while the sitemap advertised
   * them. Nothing else caught it: robots.txt was open, every page returned 200,
   * the sitemap was correct, and the canonical tags were self-referential.
   */
  it("is indexable, so a page that sets no directive is not silently hidden", async () => {
    const { metadata } = await import("../src/app/layout");
    const robotsMeta = (metadata as { robots?: { index?: boolean; follow?: boolean } }).robots;
    expect(robotsMeta?.index).toBe(true);
    // follow is NEVER false anywhere on this site — a noindex,nofollow page
    // absorbs link equity and passes none on.
    expect(robotsMeta?.follow).toBe(true);
  });
});

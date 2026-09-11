import { describe, it, expect } from "vitest";
import robots from "../src/app/robots";
import sitemap from "../src/app/sitemap";
import { site } from "../src/data/site";
import { places } from "../src/data/geography";
import { contentFor } from "../src/data/place-content";
import { decideIndexation, countWords } from "../src/lib/seo/indexation";
import { SITE_ROBOTS_DEFAULT } from "../src/lib/seo/defaults";

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

  it("agrees with the computed gate for every place, not a static flag", () => {
    /**
     * The sitemap and the page must answer "is this indexable" the same way.
     * They used to consult different things — the sitemap read the hand-set
     * `indexable` field, the route computed it. They agreed at the time, which
     * is precisely how the previous defect of this shape stayed hidden.
     */
    for (const p of places) {
      const content = contentFor(p.slug);
      const listed = urls.includes(`${site.url}/${p.slug}`);
      if (!content) {
        expect(listed, `${p.name} has no content and must not be listed`).toBe(false);
        continue;
      }
      const words = countWords(
        ...(content.intro ?? []),
        ...(content.sections ?? []).flatMap((s) => [s.heading, ...s.body]),
      );
      expect(listed, `${p.name} sitemap listing must match the computed gate`).toBe(
        decideIndexation(p, words).indexable,
      );
    }
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
  it("is indexable, so a page that sets no directive is not silently hidden", () => {
    // Imported from lib rather than from the layout on purpose: importing the
    // layout pulls in next/font, which does not run under vitest — which is
    // precisely why this directive went untested and unnoticed for a launch.
    expect(SITE_ROBOTS_DEFAULT.index).toBe(true);
    // follow is NEVER false anywhere on this site — a noindex,nofollow page
    // absorbs link equity and passes none on.
    expect(SITE_ROBOTS_DEFAULT.follow).toBe(true);
  });
});

describe("the internal link graph", () => {
  /**
   * One question, one answer. "Is this place worth linking to" was being decided
   * four different ways across this repo: `buildVerdict` in internalLinks, the
   * hand-set `indexable` flag in geography, and decideIndexation() in the route,
   * the sitemap and the footer.
   *
   * The cost was real rather than theoretical — five of Boise's seven sibling
   * links pointed at ~338-word stubs that render noindex, so most of a reader's
   * options from the strongest page on the site led nowhere.
   */
  it("never links to a place whose page asks not to be indexed", async () => {
    const { linksForPlace, linksForCounty } = await import("../src/lib/seo/internalLinks");
    const bySlug = new Map(places.map((p) => [`/${p.slug}`, p]));

    const check = (links: { href: string }[], from: string) => {
      for (const l of links) {
        const target = bySlug.get(l.href);
        if (!target) continue; // hub or non-place link
        const content = contentFor(target.slug);
        expect(content, `${from} links to ${target.name}, which has no content`).toBeTruthy();
        const words = countWords(
          ...(content!.intro ?? []),
          ...(content!.sections ?? []).flatMap((s) => [s.heading, ...s.body]),
        );
        expect(
          decideIndexation(target, words).indexable,
          `${from} links to ${target.name}, which renders noindex`,
        ).toBe(true);
      }
    };

    for (const p of places) check(linksForPlace(p), p.name);
    check(linksForCounty(), "the county page");
  });
});

describe("in-prose links", () => {
  /**
   * Every [label](/path) in body copy must land on an INDEXABLE page. Checked
   * against the sitemap itself, because that is where indexability is decided —
   * a local copy of the route list would be one more place the answer could
   * drift, and this site has fixed four defects of exactly that shape.
   */
  it("point only at pages the sitemap advertises", async () => {
    const { guideContent } = await import("../src/data/guide-content");
    const { placeContent } = await import("../src/data/place-content");
    const { COMMERCIAL_PAGES } = await import("../src/data/commercial-content");
    const { extractInlineLinks } = await import("../src/lib/content/inline-syntax");
    const advertised = new Set(sitemap().map((u) => u.url.replace(site.url, "") || "/"));

    const bodies = [
      ...Object.values(guideContent),
      ...Object.values(placeContent ?? {}),
      ...COMMERCIAL_PAGES,
    ].flatMap((c) => [...(c.intro ?? []), ...(c.sections ?? []).flatMap((s) => s.body)]);

    const links = bodies.flatMap(extractInlineLinks);
    expect(links.length).toBeGreaterThan(0);
    for (const l of links) {
      expect(advertised, `"${l.label}" -> ${l.href} is not an indexable page`).toContain(
        l.href.split("#")[0],
      );
    }
  });
});

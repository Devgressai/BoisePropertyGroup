import { describe, it, expect } from "vitest";
import sitemap from "../src/app/sitemap";
import { site } from "../src/data/site";
import { guides } from "../src/data/guides";
import { COMMERCIAL_PAGES } from "../src/data/commercial-content";
import { places } from "../src/data/geography";
import { registry, nextSteps, publishedGuides } from "../src/lib/seo/registry";
import { renderedTitle, metaDescription, TITLE_MAX, DESCRIPTION_MAX } from "../src/lib/seo/meta";

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const today = new Date().toISOString().slice(0, 10);

describe("page registry — the frame every page hangs on", () => {
  const reg = registry();
  const paths = new Set(reg.map((e) => e.path));

  it("is exactly what the sitemap advertises", () => {
    const advertised = sitemap().map((u) => u.url.replace(site.url, "") || "/");
    expect(new Set(advertised)).toEqual(paths);
    expect(advertised.length).toBe(reg.length);
  });

  it("has no duplicate paths", () => {
    expect(paths.size).toBe(reg.length);
  });

  it("gives every page a funnel stage and a parent that exists", () => {
    for (const e of reg) {
      expect(["tofu", "mofu", "bofu"], e.path).toContain(e.stage);
      if (e.path === "/") expect(e.parent).toBeNull();
      else expect(paths.has(e.parent as string), `${e.path} → parent ${e.parent}`).toBe(true);
    }
  });

  it("dates every page with a real, non-future ISO date", () => {
    for (const e of reg) {
      expect(e.updated, e.path).toMatch(ISO);
      expect(e.updated <= today, `${e.path} updated ${e.updated} is in the future`).toBe(true);
    }
  });

  it("leaves no dead ends: every page links forward to pages that exist", () => {
    for (const e of reg) {
      const steps = nextSteps(e.path);
      expect(steps.length, e.path).toBeGreaterThan(0);
      for (const s of steps) {
        expect(paths.has(s.href), `${e.path} → ${s.href}`).toBe(true);
        expect(s.href).not.toBe(e.path);
      }
    }
  });
});

describe("guides carry honest dates", () => {
  it("published ≤ updated ≤ today, all ISO", () => {
    for (const g of guides) {
      expect(g.published, g.slug).toMatch(ISO);
      expect(g.updated, g.slug).toMatch(ISO);
      expect(g.published <= g.updated, g.slug).toBe(true);
      expect(g.updated <= today, g.slug).toBe(true);
    }
  });
});

describe("search snippets fit", () => {
  it("guide, commercial and place titles render within the display limit", () => {
    const titles = [
      ...publishedGuides().map((g) => g.title),
      ...COMMERCIAL_PAGES.map((c) => c.seoTitle ?? c.title),
      ...places.map((p) => `We Buy Property in ${p.name}, Idaho`),
    ];
    for (const t of titles) expect(renderedTitle(t).length, t).toBeLessThanOrEqual(TITLE_MAX);
  });

  it("descriptions are cut to fit, at a word boundary", () => {
    const descs = [...guides.map((g) => g.description), ...COMMERCIAL_PAGES.map((c) => c.description)];
    for (const d of descs) {
      const out = metaDescription(d) as string;
      expect(out.length, d).toBeLessThanOrEqual(DESCRIPTION_MAX);
      expect(d.startsWith(out.replace(/…$/, ""))).toBe(true);
    }
  });
});

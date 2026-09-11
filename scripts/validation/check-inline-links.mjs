#!/usr/bin/env node
/**
 * In-prose link gate (local).
 *
 * Every [label](/path) written into body copy must point at a page that exists,
 * and a page must not link to itself. The authoritative check — that the target
 * is INDEXABLE — runs in vitest against the real sitemap, because the sitemap is
 * the one place that decision is made and this script cannot import it. This is
 * the fast local layer, so a typo'd slug fails before a push rather than after.
 */
import { resolve } from "node:path";
import { loadTsModule } from "../migration/load-ts.mjs";

const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
const gc = loadTsModule(resolve("src/data/guide-content.ts"));
const pc = loadTsModule(resolve("src/data/place-content.ts"));
const cc = loadTsModule(resolve("src/data/commercial-content.ts"));

const pages = [
  ...Object.entries(gc.guideContent).map(([slug, c]) => ({ path: `/guides/${slug}`, c })),
  ...Object.entries(pc.placeContent ?? {}).map(([slug, c]) => ({ path: `/${slug}`, c })),
  ...cc.COMMERCIAL_PAGES.map((c) => ({ path: `/commercial/${c.slug}`, c })),
];
const known = new Set([
  "/", "/locations", "/guides", "/how-it-works", "/what-we-buy", "/about", "/contact", "/commercial",
  ...pages.map((p) => p.path),
]);

let links = 0;
const problems = [];
for (const { path, c } of pages) {
  for (const text of [...(c.intro ?? []), ...(c.sections ?? []).flatMap((s) => s.body)]) {
    for (const m of text.matchAll(LINK)) {
      links++;
      const href = m[2].split("#")[0];
      if (!known.has(href)) problems.push(`${path} links to ${href}, which is not a page`);
      if (href === path) problems.push(`${path} links to itself ("${m[1]}")`);
    }
  }
}
if (problems.length) {
  console.error("INLINE LINKS: FAIL");
  for (const p of problems) console.error("  " + p);
  process.exit(1);
}
console.log(`INLINE LINKS: PASS — ${links} in-prose links across ${pages.length} pages`);

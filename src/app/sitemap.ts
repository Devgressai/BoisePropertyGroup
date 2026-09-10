import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { places, county } from "@/data/geography";
import { guides } from "@/data/guides";
import { guideContentFor } from "@/data/guide-content";
import { contentFor } from "@/data/place-content";
import { COMMERCIAL_PAGES } from "@/data/commercial-content";
import { claimsUniqueToAssetClass, commercialClaimsByTopic } from "@/data/commercial-claims";
import { MIN_UNIQUE_CLAIMS, MIN_WORDS, countWords, decideIndexation } from "@/lib/seo/indexation";

/**
 * ONLY indexable, self-canonical URLs. A sitemap that advertises a noindex page
 * is a mixed signal and wastes crawl budget, so the filters here mirror the
 * gates the routes themselves apply.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const modified = new Date("2026-09-10");
  const urls: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: modified },
    { url: `${site.url}/locations`, lastModified: modified },
    { url: `${site.url}/guides`, lastModified: modified },
    { url: `${site.url}/how-it-works`, lastModified: modified },
    { url: `${site.url}/what-we-buy`, lastModified: modified },
    { url: `${site.url}/about`, lastModified: modified },
    { url: `${site.url}/contact`, lastModified: modified },
  ];

  if (contentFor(county.slug)) urls.push({ url: `${site.url}/${county.slug}`, lastModified: modified });

  /**
   * COMPUTE the decision, do not read the static flag.
   *
   * There are two independent answers to "is this place indexable": the
   * hand-set `indexable` field in the generated geography module, and
   * decideIndexation(), which derives it from unique claims and word count.
   * The ROUTE renders the computed one. This used to read the static one.
   *
   * They agree today, which is exactly how the last defect of this shape hid:
   * robots.txt was opened while the layout's own default still said noindex,
   * and the homepage sat unindexed behind a switch that looked flipped. Two
   * sources of truth for one question is the bug, whether or not they currently
   * disagree — so the sitemap now asks the same function the page asks.
   */
  for (const p of places) {
    const content = contentFor(p.slug);
    if (!content) continue;
    const words = countWords(
      ...(content.intro ?? []),
      ...(content.sections ?? []).flatMap((s) => [s.heading, ...s.body]),
    );
    if (decideIndexation(p, words).indexable) {
      urls.push({ url: `${site.url}/${p.slug}`, lastModified: modified });
    }
  }
  urls.push({ url: `${site.url}/commercial`, lastModified: modified });
  for (const c of COMMERCIAL_PAGES) {
    // Mirror the gate the route applies, so the sitemap never advertises a
    // page the page itself asks not to be indexed.
    const unique =
      c.kind === "explainer"
        ? new Set((c.gateTopics ?? []).flatMap((t) => commercialClaimsByTopic(t).map((x) => x.id))).size
        : new Set([c.assetClass, ...(c.alsoCovers ?? [])].flatMap((a) => claimsUniqueToAssetClass(a).map((x) => x.id))).size;
    const words = countWords(...c.intro, ...c.sections.flatMap((s) => [s.heading, ...s.body]));
    if (unique >= MIN_UNIQUE_CLAIMS && words >= MIN_WORDS) {
      urls.push({ url: `${site.url}/commercial/${c.slug}`, lastModified: modified });
    }
  }

  for (const g of guides) {
    if (guideContentFor(g.slug)) urls.push({ url: `${site.url}/guides/${g.slug}`, lastModified: modified });
  }
  return urls;
}

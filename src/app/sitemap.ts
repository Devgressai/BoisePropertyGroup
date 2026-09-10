import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { places, county } from "@/data/geography";
import { guides } from "@/data/guides";
import { guideContentFor } from "@/data/guide-content";
import { contentFor } from "@/data/place-content";
import { COMMERCIAL_PAGES } from "@/data/commercial-content";
import { claimsUniqueToAssetClass, commercialClaimsByTopic } from "@/data/commercial-claims";
import { MIN_UNIQUE_CLAIMS, MIN_WORDS, countWords } from "@/lib/seo/indexation";

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

  for (const p of places) {
    if (p.indexable && contentFor(p.slug)) urls.push({ url: `${site.url}/${p.slug}`, lastModified: modified });
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

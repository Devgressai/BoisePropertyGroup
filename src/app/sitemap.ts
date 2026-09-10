import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { places, county } from "@/data/geography";
import { guides } from "@/data/guides";
import { guideContentFor } from "@/data/guide-content";
import { contentFor } from "@/data/place-content";

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
  ];

  if (contentFor(county.slug)) urls.push({ url: `${site.url}/${county.slug}`, lastModified: modified });

  for (const p of places) {
    if (p.indexable && contentFor(p.slug)) urls.push({ url: `${site.url}/${p.slug}`, lastModified: modified });
  }
  for (const g of guides) {
    if (guideContentFor(g.slug)) urls.push({ url: `${site.url}/guides/${g.slug}`, lastModified: modified });
  }
  return urls;
}

import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { registry } from "@/lib/seo/registry";

/**
 * ONLY indexable, self-canonical URLs — read straight from the page registry,
 * which asks the same gates the routes ask. This file used to keep its own copy
 * of the static pages and re-derive the place and commercial gates; two copies
 * of one decision is how a sitemap comes to advertise a noindex page.
 *
 * lastmod is each page's real last substantive change, not one date stamped
 * on everything — a uniform lastmod tells a crawler nothing.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return registry().map((e) => ({
    url: e.path === "/" ? site.url : `${site.url}${e.path}`,
    lastModified: new Date(e.updated),
  }));
}

import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/**
 * The sitemap lists ONLY indexable, self-canonical URLs. It must never
 * advertise a noindex page — that is a mixed signal that wastes crawl budget.
 * Today only the homepage exists.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date("2026-09-09") }];
}

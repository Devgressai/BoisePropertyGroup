import type { Metadata } from "next";
import { site } from "@/data/site";

/** Google shows roughly 60 characters of a title and ~160 of a description. */
export const TITLE_MAX = 65;
export const DESCRIPTION_MAX = 160;
const SUFFIX = ` | ${site.name}`;

/** Brand share card, 1200×630. Built from the hero photograph; no claims beyond owner-confirmed ones. */
export const OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Boise Property Group — sell the property on your terms. Direct property buyer in Ada County, Idaho",
};

/**
 * The brand suffix is appended only when the whole thing still fits. A title
 * that overruns is truncated by Google at an arbitrary character, which usually
 * cuts the suffix in half anyway — so a long title goes out without it.
 */
export function pageTitle(title: string): Metadata["title"] {
  return title.length + SUFFIX.length <= TITLE_MAX ? title : { absolute: title };
}

/** The title string as rendered, for tests. */
export function renderedTitle(title: string): string {
  return title.length + SUFFIX.length <= TITLE_MAX ? `${title}${SUFFIX}` : title;
}

/**
 * A description cut at a fixed character count ends mid-word ("close to the
 * co"). Prefer the first sentence when it fits; otherwise stop at a word
 * boundary and mark the cut. Never rewrites — only shortens what the page says.
 */
export function metaDescription(text: string | undefined): string | undefined {
  if (!text) return undefined;
  if (text.length <= DESCRIPTION_MAX) return text;
  const sentence = text.match(/^.{60,160}?[.!?](?=\s|$)/);
  if (sentence) return sentence[0];
  return `${text.slice(0, DESCRIPTION_MAX - 5).replace(/\s+\S*$/, "")}…`;
}

/**
 * Per-page metadata in one call.
 *
 * openGraph is set per page ON PURPOSE. Next merges metadata shallowly, so a
 * page that set no openGraph inherited the root layout's — including
 * `og:url = https://boisepropertygroup.com` — and every shared link on the site
 * claimed to be the homepage.
 */
export function pageMetadata({
  path,
  title,
  description,
  robots,
  type = "website",
}: {
  path: string;
  title: string;
  description?: string;
  robots?: Metadata["robots"];
  type?: "website" | "article";
}): Metadata {
  const desc = metaDescription(description);
  return {
    title: pageTitle(title),
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: "en_US",
      title,
      description: desc,
      images: [OG_IMAGE],
    },
    ...(robots ? { robots } : {}),
  };
}

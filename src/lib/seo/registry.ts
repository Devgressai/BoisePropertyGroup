import { places, county } from "@/data/geography";
import { contentFor } from "@/data/place-content";
import { guides } from "@/data/guides";
import { guideContentFor } from "@/data/guide-content";
import { COMMERCIAL_PAGES } from "@/data/commercial-content";
import { decideCommercialIndexation } from "@/lib/seo/commercialIndexation";
import { isWorthLinking } from "@/lib/seo/internalLinks";
import { TOPIC_PAGES } from "@/data/topic-pages";
import { decideTopicIndexation } from "@/lib/seo/topicIndexation";

/**
 * THE PAGE REGISTRY — every published, indexable URL, and what job it does.
 *
 * This is the frame the SEO / GEO / AEO program is built on. Before it, the
 * question "which pages exist" had four answers (sitemap, footer, llms.txt,
 * link graph), each re-deriving it, and nothing anywhere said what a page was
 * FOR. Now the sitemap, llms.txt and the funnel links all read this one list,
 * and a new page cannot ship without declaring its stage and its parent.
 *
 * FUNNEL STAGES — decided by the reader's question, not by the page template:
 *   tofu  "What is true / what are my options?"  Statute-and-evidence knowledge.
 *         Wins informational search and is what answer engines quote.
 *   mofu  "Is a direct sale right for me, and are these people credible?"
 *         Process, trust, valuation method, comparisons.
 *   bofu  "Who buys property like mine, here, now?"  Place pages, criteria,
 *         commercial asset pages, contact. Every bofu page carries the form.
 *
 * Every page, whatever its stage, links FORWARD one stage (nextSteps) so no
 * reader hits a dead end, and every page reaches the offer form via FinalCTA.
 *
 * `updated` moves only when a page's substance changes. It feeds the sitemap
 * lastmod, schema dateModified and the visible date — they must always agree.
 */
export type Stage = "tofu" | "mofu" | "bofu";
export type Kind = "home" | "hub" | "place" | "guide" | "commercial" | "process" | "trust" | "conversion" | "situation" | "decision";

export interface PageEntry {
  path: string;
  label: string;
  kind: Kind;
  stage: Stage;
  /** The hub this page sits under; null only for the homepage. */
  parent: string | null;
  updated: string;
}

/** Last substantive change to each content source, from git history. */
const PLACE_CONTENT_UPDATED = "2026-09-12";
const COMMERCIAL_CONTENT_UPDATED = "2026-09-12";

/** Place pages that have earned an index — the SAME gate the route uses. */
export function publishedPlaces() {
  return places.filter(isWorthLinking);
}
export function publishedGuides() {
  return guides.filter((g) => guideContentFor(g.slug));
}
export function publishedTopics(kind?: "situation" | "decision") {
  return TOPIC_PAGES.filter((p) => (!kind || p.kind === kind) && decideTopicIndexation(p).indexable);
}
/** The BOFU situation page a guide hands its reader to, if one is published. */
export function situationForGuide(guideSlug: string) {
  return publishedTopics("situation").find((p) => p.guides.includes(guideSlug));
}
export function publishedCommercial() {
  return COMMERCIAL_PAGES.filter((c) => decideCommercialIndexation(c).indexable);
}

/** Commercial explainers answer "how does this work" (tofu); asset pages answer "who buys mine" (bofu). */
const commercialStage = (kind: "asset" | "explainer"): Stage => (kind === "explainer" ? "tofu" : "bofu");

export function registry(): PageEntry[] {
  const out: PageEntry[] = [
    { path: "/", label: "Home", kind: "home", stage: "bofu", parent: null, updated: "2026-11-11" },
    { path: "/how-it-works", label: "How it works", kind: "process", stage: "mofu", parent: "/", updated: "2026-11-11" },
    { path: "/about", label: "About", kind: "trust", stage: "mofu", parent: "/", updated: "2026-11-11" },
    { path: "/what-we-buy", label: "What we buy", kind: "conversion", stage: "bofu", parent: "/", updated: "2026-11-11" },
    { path: "/contact", label: "Contact", kind: "conversion", stage: "bofu", parent: "/", updated: "2026-11-11" },
    { path: "/locations", label: "Areas we buy in", kind: "hub", stage: "bofu", parent: "/", updated: "2026-09-17" },
    { path: "/guides", label: "Guides", kind: "hub", stage: "tofu", parent: "/", updated: "2026-09-16" },
    { path: "/commercial", label: "Commercial", kind: "hub", stage: "mofu", parent: "/", updated: "2026-09-16" },
  ];

  if (contentFor(county.slug)) {
    out.push({ path: `/${county.slug}`, label: county.name, kind: "place", stage: "bofu", parent: "/locations", updated: PLACE_CONTENT_UPDATED });
  }
  for (const p of publishedPlaces()) {
    out.push({ path: `/${p.slug}`, label: p.name, kind: "place", stage: "bofu", parent: "/locations", updated: PLACE_CONTENT_UPDATED });
  }
  for (const c of publishedCommercial()) {
    out.push({ path: `/commercial/${c.slug}`, label: c.eyebrow, kind: "commercial", stage: commercialStage(c.kind), parent: "/commercial", updated: COMMERCIAL_CONTENT_UPDATED });
  }
  for (const t of publishedTopics()) {
    out.push({
      path: `/${t.slug}`,
      label: t.h1,
      kind: t.kind,
      stage: t.kind === "situation" ? "bofu" : "mofu",
      parent: t.kind === "situation" ? "/what-we-buy" : "/how-it-works",
      updated: t.updated,
    });
  }
  for (const g of publishedGuides()) {
    out.push({ path: `/guides/${g.slug}`, label: g.h1, kind: "guide", stage: "tofu", parent: "/guides", updated: g.updated });
  }
  return out;
}

export function entryFor(path: string): PageEntry | undefined {
  return registry().find((e) => e.path === path);
}

export interface NextStep {
  href: string;
  label: string;
  note: string;
}

/**
 * Where a reader goes next — always one stage FORWARD, never sideways into a
 * loop. A tofu reader learns how a direct sale works; a mofu reader sees what
 * we buy and where; a bofu reader gets the reassurance pages that close the
 * gap. Labels are navigational, not claims.
 */
export function nextSteps(path: string): NextStep[] {
  const e = entryFor(path);
  if (!e) return [];
  const howItWorks = { href: "/how-it-works", label: "How a direct sale works", note: "Three steps, and you set the date." };
  const whatWeBuy = { href: "/what-we-buy", label: "What we buy", note: "Houses, land and commercial — the criteria." };
  const areas = { href: "/locations", label: "Areas we buy in", note: "Ada County and its six cities." };
  const guidesHub = { href: "/guides", label: "Idaho selling guides", note: "Probate, foreclosure, tenants, disclosure." };
  const about = { href: "/about", label: "Who we are", note: "How we work, and what we will not claim." };
  const contact = { href: "/contact", label: "Get an offer", note: "Start with the address — one field." };

  const compare = { href: "/cash-offer-vs-listing-idaho", label: "Direct sale or listing?", note: "An honest comparison, and when to list." };
  const offerMath = { href: "/how-we-calculate-an-offer", label: "How we calculate an offer", note: "The four numbers, all shown to you." };
  // A guide hands its reader to the situation page that buys what it explains.
  const situation = e.kind === "guide" ? situationForGuide(path.replace("/guides/", "")) : undefined;
  const sell = situation ? { href: `/${situation.slug}`, label: situation.h1, note: "When you are ready to sell." } : undefined;

  const pick =
    e.stage === "tofu" ? [...(sell ? [sell] : []), compare, howItWorks, whatWeBuy]
    : e.kind === "situation" ? [offerMath, compare, about]
    : e.kind === "decision" ? [whatWeBuy, offerMath, areas]
    : e.stage === "mofu" ? [compare, whatWeBuy, guidesHub]
    : [howItWorks, about, guidesHub];
  // A page never recommends itself, and the offer is always reachable.
  // Only published destinations: a topic page whose gate fails must not be linked.
  const live = (s: NextStep) => s.href !== path && (s.href === "/contact" || !!entryFor(s.href));
  return [...pick.filter(live).slice(0, 2), contact].filter(live);
}

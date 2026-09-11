import { places, county, type Place } from "@/data/geography";
import { contentFor } from "@/data/place-content";
import { decideIndexation, countWords } from "@/lib/seo/indexation";
import { decideCommercialIndexation } from "@/lib/seo/commercialIndexation";
import { claimsForEntity } from "@/data/claims";
import { guides, type Guide } from "@/data/guides";
import { guideContentFor } from "@/data/guide-content";
import { COMMERCIAL_PAGES } from "@/data/commercial-content";
import { claimsForAssetClass } from "@/data/commercial-claims";

/**
 * The link graph is DERIVED from the data, not authored in JSX.
 *
 * On Sierra roughly 60% of 16,031 edges come from four pure functions like
 * these, which is why that graph has zero orphans across 894 indexable pages.
 * An authored graph rots the moment a page is added.
 *
 * WHICH places get linked is COMPUTED, using the same decideIndexation() the
 * route, the sitemap and the footer use. It previously filtered on
 * `buildVerdict !== "DO_NOT_BUILD"`, which was a FOURTH mechanism for one
 * question — alongside the hand-set `indexable` flag and the computed gate —
 * and it let every place page link to four stubs of ~338 words that render
 * noindex. Five of Boise's seven sibling links went to pages with no
 * hand-written content at all.
 *
 * The stubs are not orphaned by this: /locations lists all seven places and is
 * linked from the footer and every place page, which is the right home for a
 * page that exists but has not earned its own audience yet.
 */
function isWorthLinking(p: Place): boolean {
  const content = contentFor(p.slug);
  if (!content) return false;
  const words = countWords(
    ...(content.intro ?? []),
    ...(content.sections ?? []).flatMap((s) => [s.heading, ...s.body]),
  );
  return decideIndexation(p, words).indexable;
}
export interface LinkItem {
  href: string;
  label: string;
  reason: "parent" | "sibling" | "child" | "hub" | "guide" | "commercial";
}

export function linksForPlace(place: Place): LinkItem[] {
  const out: LinkItem[] = [
    { href: `/${county.slug}`, label: `Selling in ${county.name}`, reason: "parent" },
  ];
  // Siblings, largest first, excluding self and any page that has not earned
  // an audience. A reader clicking a city name should not land on a stub.
  for (const p of places) {
    if (p.id === place.id || !isWorthLinking(p)) continue;
    out.push({ href: `/${p.slug}`, label: p.name, reason: "sibling" });
  }
  out.push({ href: "/locations", label: "All areas we buy in", reason: "hub" });
  return out;
}

/**
 * WHICH GUIDE CLUSTER A CLAIM TOPIC IMPLIES.
 *
 * Explicit, not inferred by string similarity, because a wrong edge here sends
 * a reader from a city page to a guide that does not discuss their situation —
 * and an edge nobody can explain is one nobody can audit. A topic absent from
 * this table produces no edge, which is the safe default.
 *
 * Only clusters that have a PUBLISHED guide can ever match; `land` and
 * `disclosure` are deliberately listed so the edges appear on their own if
 * those guides are ever written, rather than needing a second edit here.
 */
const TOPIC_TO_CLUSTER: Record<string, Guide["cluster"]> = {
  probate: "estate",
  inheritance: "estate",
  title: "estate",
  deeds: "estate",
  recording: "estate",
  foreclosure: "distress",
  "property-taxes": "distress",
  liens: "distress",
  "code-enforcement": "distress",
  tenants: "tenants",
  "manufactured-housing": "manufactured",
  "real-vs-personal-property": "manufactured",
  land: "land",
  acreage: "land",
  water: "land",
  irrigation: "land",
  subdivision: "land",
  easements: "land",
  access: "land",
  septic: "land",
  disclosure: "disclosure",
};

/**
 * Cross-cluster edges: a place to the knowledge and commercial pages its OWN
 * evidence touches.
 *
 * Guides, commercial pages and place pages were three sealed islands joined
 * only through the navbar and footer. Measured before this existed: every place
 * page linked to zero guides and zero commercial pages, and no guide or
 * commercial page linked to a place. Chrome-only connection means a crawler
 * sees the same edge from all 18 URLs and learns nothing about which page
 * belongs beside which.
 *
 * The edge is EARNED, not assigned: a place links to a guide only when a claim
 * NAMING that place carries a topic the guide's cluster covers, and to a
 * commercial page only when a commercial claim names the place. So Boise links
 * to the distress guide because Boise has property-tax claims, and not to the
 * tenants guide because no tenancy claim names it.
 *
 * ⚠️ This is a weaker test than the indexation gate's, deliberately. That gate
 * uses claimsUniqueTo() — a claim naming six cities differentiates none of
 * them. Here we use claimsForEntity(), which counts a claim naming Boise even
 * if it names Meridian too, because RELEVANCE is not DIFFERENTIATION: a statute
 * that applies to Boise is worth linking from Boise's page whether or not it
 * also applies next door. Applying the stricter test here would produce almost
 * no edges, which is the failure this function exists to fix.
 */
export function knowledgeLinksForPlace(place: Place): LinkItem[] {
  const topics = new Set(claimsForEntity(place.id).flatMap((c) => c.topics));
  const clusters = new Set(
    [...topics].map((t) => TOPIC_TO_CLUSTER[t]).filter((c): c is Guide["cluster"] => Boolean(c)),
  );

  const out: LinkItem[] = [];
  for (const g of guides) {
    // A guide with no written content renders a stub; never link to one.
    if (!guideContentFor(g.slug) || !clusters.has(g.cluster)) continue;
    out.push({ href: `/guides/${g.slug}`, label: g.h1, reason: "guide" });
  }

  for (const page of COMMERCIAL_PAGES) {
    if (!decideCommercialIndexation(page).indexable) continue;
    const named = [
      ...claimsForAssetClass(page.assetClass),
      ...(page.alsoCovers ?? []).flatMap((a) => claimsForAssetClass(a)),
    ].some((c) => c.entities.includes(place.id));
    if (!named) continue;
    out.push({ href: `/commercial/${page.slug}`, label: page.eyebrow, reason: "commercial" });
  }
  return out;
}

/** The reverse edge: which places a guide's cluster is evidenced in. */
export function placesForGuide(cluster: Guide["cluster"]): LinkItem[] {
  const topics = Object.entries(TOPIC_TO_CLUSTER)
    .filter(([, c]) => c === cluster)
    .map(([t]) => t);
  const out: LinkItem[] = [];
  /**
   * The county is included alongside the places. It is not a Place — it has no
   * buildVerdict — but this loop only reads id, name and slug, and the
   * isWorthLinking() check below is skipped for it, so the narrow shape is
   * enough and states exactly what is relied on.
   */
  type Linkable = { id: string; name: string; slug: string };
  for (const p of [county as Linkable, ...(places as readonly Linkable[])]) {
    if (!contentFor(p.slug)) continue;
    if (p.slug !== county.slug && !isWorthLinking(p as Place)) continue;
    const has = claimsForEntity(p.id).some((c) => c.topics.some((t) => topics.includes(t)));
    if (has) out.push({ href: `/${p.slug}`, label: p.name, reason: "child" });
  }
  return out;
}

export function linksForCounty(): LinkItem[] {
  return [
    ...places
      .filter(isWorthLinking)
      .map((p) => ({ href: `/${p.slug}`, label: p.name, reason: "child" as const })),
    { href: "/locations", label: "All areas we buy in", reason: "hub" as const },
  ];
}

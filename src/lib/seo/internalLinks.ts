import { places, county, type Place } from "@/data/geography";
import { contentFor } from "@/data/place-content";
import { decideIndexation, countWords } from "@/lib/seo/indexation";

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
  reason: "parent" | "sibling" | "child" | "hub";
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

export function linksForCounty(): LinkItem[] {
  return [
    ...places
      .filter(isWorthLinking)
      .map((p) => ({ href: `/${p.slug}`, label: p.name, reason: "child" as const })),
    { href: "/locations", label: "All areas we buy in", reason: "hub" as const },
  ];
}

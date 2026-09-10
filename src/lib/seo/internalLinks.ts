import { places, county, type Place } from "@/data/geography";

/**
 * The link graph is DERIVED from the data, not authored in JSX.
 *
 * On Sierra roughly 60% of 16,031 edges come from four pure functions like
 * these, which is why that graph has zero orphans across 894 indexable pages.
 * An authored graph rots the moment a page is added.
 */
export interface LinkItem {
  href: string;
  label: string;
  reason: "parent" | "sibling" | "child" | "hub";
}

export function linksForPlace(place: Place): LinkItem[] {
  const out: LinkItem[] = [
    { href: `/${county.slug}`, label: `Selling in ${county.name}`, reason: "parent" },
  ];
  // Siblings, largest first, excluding self and anything that should not exist.
  for (const p of places) {
    if (p.id === place.id || p.buildVerdict === "DO_NOT_BUILD") continue;
    out.push({ href: `/${p.slug}`, label: p.name, reason: "sibling" });
  }
  out.push({ href: "/locations", label: "All areas we buy in", reason: "hub" });
  return out;
}

export function linksForCounty(): LinkItem[] {
  return [
    ...places
      .filter((p) => p.buildVerdict !== "DO_NOT_BUILD")
      .map((p) => ({ href: `/${p.slug}`, label: p.name, reason: "child" as const })),
    { href: "/locations", label: "All areas we buy in", reason: "hub" as const },
  ];
}

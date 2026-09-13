import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { places, county, placeBySlug, renderablePlaces, type Place } from "@/data/geography";
import { contentFor, type PlaceContent } from "@/data/place-content";
import { decideIndexation, robotsFor, countWords } from "@/lib/seo/indexation";
import { linksForPlace, linksForCounty, knowledgeLinksForPlace } from "@/lib/seo/internalLinks";
import { graph, organizationSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { site } from "@/data/site";
import PlacePage from "@/components/seo/PlacePage";

/**
 * Every valid slug is prerendered, so an unknown slug is a true 404 rather
 * than an on-demand render. This also prevents a streamed 200 flushing before
 * notFound() runs, which is what produced soft-404s on Sierra.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: county.slug }, ...renderablePlaces.map((p) => ({ slug: p.slug }))];
}

/** Placeholder shown for a place that renders but has not earned an index. */
function templateContent(name: string): PlaceContent {
  return {
    intro: [
      `We buy houses, land and problem property in ${name}, Idaho — in any condition and in any situation.`,
    ],
    sections: [
      {
        heading: `Selling property in ${name}`,
        body: [
          `${name} sits in Ada County, so the Assessor values the property, the Treasurer collects the tax and the Recorder holds the deed — all county-wide. Land use and building permits are the city's.`,
          `We are still gathering the ${name}-specific material that would make this page worth reading on its own. Until it exists, this page is not listed in search.`,
        ],
      },
    ],
  };
}

function resolve(slug: string) {
  if (slug === county.slug) {
    const content = contentFor(slug);
    if (!content) return null;
    return {
      kind: "county" as const,
      name: county.name,
      title: `We Buy Property in ${county.name}, Idaho`,
      eyebrow: "Ada County, Idaho",
      content,
      links: [...linksForCounty(), ...knowledgeLinksForPlace(county as unknown as Place)],
      caveat: null,
      indexable: county.indexable,
      stats: [
        { label: "Residents", value: "535,799", note: "Census Bureau, Population Estimates Vintage 2024" },
        { label: "Incorporated cities", value: "6", note: "plus unincorporated county — Census place file" },
        { label: "Irrigation entities", value: "27", note: "Ada County irrigation districts map" },
      ],
    };
  }
  const place = placeBySlug(slug);
  if (!place) return null;
  const authored = contentFor(slug);
  const content = authored ?? templateContent(place.name);
  const words = countWords(...content.intro, ...content.sections.flatMap((s) => s.body));
  const decision = decideIndexation(place, words);
  return {
    kind: "place" as const,
    name: place.name,
    title: `We Buy Property in ${place.name}, Idaho`,
    eyebrow: `${place.name} · Ada County, Idaho`,
    content,
    links: [...linksForPlace(place), ...knowledgeLinksForPlace(place)],
    caveat: place.spansMultipleCounties ? place.caveat : null,
    indexable: decision.indexable,
    stats: [
      place.population2024Census
        ? { label: "Residents", value: place.population2024Census.toLocaleString(), note: "Census Bureau, Population Estimates Vintage 2024" }
        : null,
      place.growthPct2020to2024 != null
        ? { label: "Growth", value: `${place.growthPct2020to2024}%`, note: "2020 census base to 2024 estimate, same vintage" }
        : null,
      { label: "County", value: place.counties.length > 1 ? "Two" : "Ada", note: place.counties.join(" and ") },
    ].filter(Boolean) as { label: string; value: string; note: string }[],
  };
}

/**
 * A description cut at a fixed character count ends mid-word ("close to the
 * co"). Prefer the first sentence when it fits; otherwise stop at a word
 * boundary and mark the cut.
 */
function metaDescription(text: string | undefined): string | undefined {
  if (!text) return undefined;
  if (text.length <= 160) return text;
  const sentence = text.match(/^.{60,160}?[.!?](?=\s|$)/);
  if (sentence) return sentence[0];
  return `${text.slice(0, 155).replace(/\s+\S*$/, "")}…`;
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) return {};
  return {
    title: r.title,
    description: metaDescription(r.content.intro[0]),
    alternates: { canonical: `/${slug}` },
    // Pre-launch the site-wide robots directive still applies; this records the
    // page-level decision so flipping the launch flag needs no further edits.
    robots: robotsFor({ indexable: r.indexable, reason: "" }),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) notFound();
  const jsonLd = graph(
    organizationSchema(),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Areas", href: "/locations" },
      { label: r.name },
    ])
  );
  return (
    <>
      <PlacePage
        title={r.title}
        eyebrow={r.eyebrow}
        content={r.content}
        links={r.links}
        caveat={r.caveat}
        stats={r.stats}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

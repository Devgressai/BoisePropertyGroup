import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { places, county, placeBySlug, renderablePlaces, type Place } from "@/data/geography";
import { contentFor, type PlaceContent } from "@/data/place-content";
import { decideIndexation, robotsFor, countWords } from "@/lib/seo/indexation";
import { linksForPlace, linksForCounty, knowledgeLinksForPlace } from "@/lib/seo/internalLinks";
import { pageMetadata, metaDescription } from "@/lib/seo/meta";
import PageSchema from "@/components/seo/PageSchema";
import { serviceSchema, articleSchema } from "@/lib/seo/schema";
import { citedClaims } from "@/lib/seo/topicIndexation";
import PlacePage from "@/components/seo/PlacePage";
import TopicPageView from "@/components/seo/TopicPageView";
import { TOPIC_PAGES, topicPage } from "@/data/topic-pages";
import { decideTopicIndexation } from "@/lib/seo/topicIndexation";

/**
 * SEARCH TITLE AND DESCRIPTION FOR A PLACE PAGE (2026-11-13).
 *
 * The H1 stays "We Buy Property in <place>". The search title and description
 * are written for what Search Console shows people typing ("sell my house fast
 * meridian idaho", "sell my house for cash", "as is"): the description was the
 * page's first paragraph, which opens with census figures and says nothing a
 * seller is looking for. Every phrase is an owner-confirmed fact (2026-09-13):
 * own capital, any condition, the seller sets the date, three weeks realistic.
 */
const placeSearchTitle = (name: string) => `Sell My House Fast in ${name}, Idaho`;
const placeSearchDescription = (name: string) =>
  `We buy houses in ${name}, Idaho for cash, as-is, with no lender to wait on. You choose the closing date. Three weeks is realistic. Start with the address.`;

/**
 * Every valid slug is prerendered, so an unknown slug is a true 404 rather
 * than an on-demand render. This also prevents a streamed 200 flushing before
 * notFound() runs, which is what produced soft-404s on Sierra.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: county.slug },
    ...renderablePlaces.map((p) => ({ slug: p.slug })),
    // BOFU situation and MOFU decision pages share this flat, depth-1 URL space.
    ...TOPIC_PAGES.map((p) => ({ slug: p.slug })),
  ];
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

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = topicPage(slug);
  if (topic) {
    return pageMetadata({
      path: `/${slug}`,
      title: topic.title,
      description: topic.description,
      type: "article",
      robots: { index: decideTopicIndexation(topic).indexable, follow: true },
    });
  }
  const r = resolve(slug);
  if (!r) return {};
  return pageMetadata({
    path: `/${slug}`,
    title: placeSearchTitle(r.name),
    description: placeSearchDescription(r.name),
    robots: robotsFor({ indexable: r.indexable, reason: "" }),
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = topicPage(slug);
  if (topic) {
    return (
      <>
        <TopicPageView page={topic} />
        <PageSchema
          path={`/${slug}`}
          name={topic.title}
          description={metaDescription(topic.description)}
          extra={
            topic.kind === "situation"
              ? [serviceSchema({ path: `/${slug}`, name: topic.h1, description: topic.description })]
              : [
                  articleSchema({
                    path: `/${slug}`,
                    headline: topic.h1,
                    description: topic.description,
                    published: topic.published,
                    updated: topic.updated,
                    sources: [...new Map(citedClaims(topic).flatMap((c) => c.sources).map((s) => [s.url, s])).values()],
                  }),
                ]
          }
        />
      </>
    );
  }
  const r = resolve(slug);
  if (!r) notFound();
  return (
    <>
      <PlacePage
        title={r.title}
        eyebrow={r.eyebrow}
        content={r.content}
        links={r.links}
        caveat={r.caveat}
        stats={r.stats}
        path={`/${slug}`}
      />
      <PageSchema
        path={`/${slug}`}
        name={placeSearchTitle(r.name)}
        description={placeSearchDescription(r.name)}
        extra={[
          serviceSchema({
            path: `/${slug}`,
            name: `We buy houses and property in ${r.name}, Idaho`,
            description: placeSearchDescription(r.name),
            area: r.kind === "place" ? `${r.name}, Idaho` : undefined,
          }),
        ]}
      />
    </>
  );
}

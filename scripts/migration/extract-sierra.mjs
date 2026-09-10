/**
 * Phase 0 — forensic extraction of the Sierra Property Buyers architecture.
 *
 * Sierra is READ-ONLY. This script opens its files, executes its data and SEO
 * modules in-process, and writes manifests into THIS repository only.
 *
 * It executes Sierra's real pageIndex/internalLinks/canonical modules rather
 * than re-deriving them, so the manifests describe what Sierra actually does —
 * not what its documentation claims. (Those already disagree: CLAUDE.md says
 * 16 counties / 180 cities; the data holds 24 / 266.)
 */
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { loadTsModule } from "./load-ts.mjs";

const SIERRA = "/Users/george/sierrapropertybuyers";
const SRC = `${SIERRA}/src`;
const OUT = "data/migration";
mkdirSync(OUT, { recursive: true });

const L = (p) => loadTsModule(`${SRC}/${p}`);

// ── Sierra modules ────────────────────────────────────────────────────────
const pageIndex = L("lib/seo/pageIndex.ts");
const internalLinks = L("lib/seo/internalLinks.ts");
const anchorText = L("lib/seo/anchorText.ts");
const canonical = L("lib/seo/canonical.ts");
const counties = L("data/counties.ts");
const locations = L("data/locations.ts");
const situations = L("data/situations.ts");
const propertyTypes = L("data/property-types.ts");
const financingTopics = L("data/financing-topics.ts");
const regions = L("data/regions.ts");
const countyTopic = L("data/county-topic-combos.ts");
const guides = L("data/guides.ts");
const glossary = L("data/glossary.ts");
const combos = L("data/city-situation-combos.ts");
const blog = L("data/blog-posts.ts");
const cityContent = L("data/city-content.ts");
const countyContent = L("data/county-content.ts");
const situationContent = L("data/situation-content.ts");
const guideContent = L("data/guide-content.ts");
const ptContent = L("data/property-type-content/index.ts");
const finContent = L("data/financing-content/index.ts");
const ctContent = L("data/county-topic-content.ts");
const comboContent = L("data/combo-content.ts");

const seoPages = pageIndex.seoPages;

// ── Indexability, replicating (seo)/[slug]/page.tsx + sitemap.ts ──────────
function contentGetterFor(type) {
  switch (type) {
    case "city": return (s) => !!cityContent.getCityContent(s);
    case "county": return (s) => !!countyContent.getCountyContent(s);
    case "propertyType": return (s) => !!ptContent.getPropertyTypeContent(s);
    case "financing": return (s) => !!finContent.getFinancingContent(s);
    case "region": return (s) => !!regions.getRegionContent(s);
    case "countyTopic": return (s) => !!ctContent.getCountyTopicContent(s);
    case "situation": return (s) => !!situationContent.hasSituationContent(s);
    default: return () => true;
  }
}
const CONTENT_SOURCE = {
  city: "src/data/city-content.ts (+ -north-a/b, -lassen, -humboldt, -solano…)",
  county: "src/data/county-content.ts (+ county-content-north.ts)",
  propertyType: "src/data/property-type-content/*.ts",
  financing: "src/data/financing-content/*.ts",
  region: "src/data/region-content.ts",
  countyTopic: "src/data/county-topic-content{,-land,-firefc,-fin}.ts",
  situation: "src/data/situation-content.ts (+ fire/foreclosure/extra maps)",
};
const TEMPLATE = {
  county: "src/components/seo/CountyPage.tsx",
  city: "src/components/seo/CityPage.tsx",
  situation: "src/components/seo/SituationPage.tsx",
  propertyType: "src/components/seo/PropertyTypePage.tsx",
  financing: "src/components/seo/FinancingTopicPage.tsx",
  region: "src/components/seo/RegionPage.tsx",
  countyTopic: "src/components/seo/CountyTopicPage.tsx",
};
const INTENT = {
  county: "local transactional",
  city: "local transactional",
  situation: "transactional",
  propertyType: "transactional",
  financing: "commercial investigation",
  region: "local commercial investigation",
  countyTopic: "local transactional",
  combo: "local transactional",
  guide: "informational",
  blog: "informational",
  glossary: "informational",
  static: "navigational",
};

// ── Route inventory ───────────────────────────────────────────────────────
const routes = [];
const childrenOf = new Map();
for (const p of seoPages) {
  if (p.parentSlug) {
    if (!childrenOf.has(p.parentSlug)) childrenOf.set(p.parentSlug, []);
    childrenOf.get(p.parentSlug).push(p.slug);
  }
}

for (const p of seoPages) {
  const hasContent = contentGetterFor(p.type)(p.slug);
  const links = internalLinks.getInternalLinks(p.slug);
  const outbound = [
    ...links.contextualLinks, ...links.nearbyLinks, ...links.situationLinks,
    ...links.countyLinks, ...links.siblingLinks,
  ];
  routes.push({
    url: `/${p.slug}`,
    routeFamily: "(seo)/[slug]",
    pageType: p.type,
    parent: p.parentSlug ? `/${p.parentSlug}` : null,
    children: (childrenOf.get(p.slug) ?? []).map((s) => `/${s}`),
    pillar: p.pillarSlug ? `/${p.pillarSlug}` : null,
    cluster: p.cluster ?? null,
    primaryIntent: INTENT[p.type] ?? null,
    likelyTargetKeyword: p.h1,
    locationEntity: p.city ? `${p.city}, ${p.state ?? "CA"}` : p.county ?? null,
    countyEntity: p.county ?? null,
    contentSource: CONTENT_SOURCE[p.type] ?? null,
    template: TEMPLATE[p.type] ?? null,
    outboundInternalLinks: outbound.length,
    breadcrumbPath: buildBreadcrumb(p),
    schemaTypes: schemaFor(p.type),
    canonicalStatus: "self",
    indexable: hasContent,
    indexationGate: hasContent ? "content present" : "noindex,follow — no hand-written content",
    inSitemap: hasContent,
    metadataSource: "generateMetadata in src/app/(seo)/[slug]/page.tsx",
    priority: p.priority,
  });
}

function buildBreadcrumb(p) {
  if (p.type === "city" && p.parentSlug) {
    const parent = pageIndex.getPageBySlug(p.parentSlug);
    return ["Home", "Locations", parent?.county ?? "County", p.city ?? p.h1];
  }
  if (p.type === "county") return ["Home", "Locations", p.county ?? p.h1];
  if (p.type === "situation") return ["Home", "Situations", p.h1];
  if (p.type === "propertyType") return ["Home", "Property Types", p.h1];
  if (p.type === "financing") return ["Home", "Creative Financing", p.h1];
  if (p.type === "region") return ["Home", "Locations", p.h1];
  if (p.type === "countyTopic") return ["Home", "Locations", p.county ?? "", p.h1];
  return ["Home", p.h1];
}
function schemaFor(type) {
  const base = ["LocalBusiness", "BreadcrumbList", "WebPage", "OfferCatalog"];
  if (type === "county" || type === "region") return [...base, "Service", "CollectionPage", "ItemList"];
  if (type === "city") return [...base, "Service", "FAQPage"];
  return [...base, "Service"];
}

// Combos
const NOINDEX_COMBOS = comboContent.NOINDEX_COMBO_SLUGS ?? new Set();
for (const c of combos.cityComboPages) {
  const content = comboContent.getComboContent(c.slug);
  const indexable =
    !NOINDEX_COMBOS.has(c.slug) &&
    !!content && (content.sections?.length >= 2 || !!content.bulletSections?.length);
  routes.push({
    url: `/${c.slug}`, routeFamily: "(seo)/[slug] — combo branch", pageType: "combo",
    parent: `/${c.citySlug}`, children: [], pillar: `/${c.situationSlug}`,
    cluster: "city-situation", primaryIntent: INTENT.combo, likelyTargetKeyword: c.h1,
    locationEntity: c.cityName, countyEntity: c.county,
    contentSource: "src/data/combo-content.ts (+ combo-depth/*.ts)",
    template: "src/components/seo/ComboPageView.tsx",
    outboundInternalLinks: null,
    breadcrumbPath: ["Home", "Locations", c.county, c.cityName, c.situationName],
    schemaTypes: ["LocalBusiness", "BreadcrumbList", "WebPage", "Service"],
    canonicalStatus: "self", indexable,
    indexationGate: indexable ? "2+ sections or bulletSections" : "noindex,follow — under section threshold or explicitly excluded",
    inSitemap: indexable, metadataSource: "comboMetadata in ComboPageView.tsx", priority: 60,
  });
}

// Guides / blog / glossary
for (const g of guides.guides) {
  const self = canonical.isGuideSelfCanonical(g.slug);
  routes.push({
    url: `/guides/${g.slug}`, routeFamily: "guides/[slug]", pageType: "guide",
    parent: "/guides", children: [], pillar: null, cluster: g.category,
    primaryIntent: INTENT.guide, likelyTargetKeyword: g.h1,
    locationEntity: null, countyEntity: null,
    contentSource: "src/data/guide-content{,-dev,-investing,-sellfast-b}.ts",
    template: "src/app/guides/[slug]/page.tsx", outboundInternalLinks: null,
    breadcrumbPath: ["Home", "Guides", g.h1],
    schemaTypes: ["Article", "BreadcrumbList", "WebPage", "FAQPage"],
    canonicalStatus: self ? "self" : `canonical -> ${canonical.getGuideCanonicalPath(g.slug)}`,
    indexable: self, indexationGate: self ? "self-canonical + content present" : "consolidated to stronger sibling",
    inSitemap: self, metadataSource: "generateMetadata in guides/[slug]/page.tsx", priority: 70,
  });
}
for (const b of blog.blogPosts) {
  const self = canonical.isBlogSelfCanonical(b.slug);
  routes.push({
    url: `/blog/${b.slug}`, routeFamily: "blog/[slug]", pageType: "blog",
    parent: "/blog", children: [], pillar: null, cluster: b.category ?? null,
    primaryIntent: INTENT.blog, likelyTargetKeyword: b.title ?? b.h1 ?? b.slug,
    locationEntity: null, countyEntity: null,
    contentSource: "src/data/blog-posts.ts (+ blog-depth/*, blog-listicles/, estate-sales/, without-realtor/)",
    template: "src/app/blog/[slug]/page.tsx", outboundInternalLinks: null,
    breadcrumbPath: ["Home", "Blog", b.title ?? b.slug],
    schemaTypes: ["Article", "BreadcrumbList", "WebPage"],
    canonicalStatus: self ? "self" : `canonical -> ${canonical.getBlogCanonicalPath(b.slug)}`,
    indexable: self, indexationGate: self ? "self-canonical" : "consolidated to money page",
    inSitemap: self, metadataSource: "generateMetadata in blog/[slug]/page.tsx", priority: 50,
  });
}
for (const t of glossary.glossaryTerms) {
  const self = canonical.isGlossarySelfCanonical(t.slug);
  routes.push({
    url: `/glossary/${t.slug}`, routeFamily: "glossary/[term]", pageType: "glossary",
    parent: "/glossary", children: [], pillar: null, cluster: "glossary",
    primaryIntent: INTENT.glossary, likelyTargetKeyword: t.term,
    locationEntity: null, countyEntity: null,
    contentSource: "src/data/glossary.ts (+ glossary-depth/*.ts)",
    template: "src/app/glossary/[term]/page.tsx", outboundInternalLinks: (t.relatedTermSlugs?.length ?? 0) + (t.relatedPageSlugs?.length ?? 0),
    breadcrumbPath: ["Home", "Glossary", t.term],
    schemaTypes: ["DefinedTerm", "BreadcrumbList", "WebPage"],
    canonicalStatus: self ? "self" : `canonical -> ${canonical.getGlossaryCanonicalPath(t.slug)}`,
    indexable: self, indexationGate: self ? "self-canonical" : "consolidated to topic page",
    inSitemap: self, metadataSource: "generateMetadata in glossary/[term]/page.tsx", priority: 40,
  });
}

// Static routes, read from sitemap.ts so the list cannot drift
const sitemapSrc = readFileSync(`${SRC}/app/sitemap.ts`, "utf8");
const staticBlock = sitemapSrc.slice(sitemapSrc.indexOf("const staticRoutes"), sitemapSrc.indexOf("];", sitemapSrc.indexOf("const staticRoutes")));
const staticRoutes = [...staticBlock.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
for (const path of staticRoutes) {
  routes.push({
    url: path, routeFamily: "static", pageType: "static", parent: path === "/" ? null : "/",
    children: [], pillar: null, cluster: null, primaryIntent: INTENT.static,
    likelyTargetKeyword: null, locationEntity: null, countyEntity: null,
    contentSource: "hand-written JSX", template: `src/app${path === "/" ? "/page.tsx" : path + "/page.tsx"}`,
    outboundInternalLinks: null, breadcrumbPath: ["Home"],
    schemaTypes: ["LocalBusiness", "WebSite", "Organization", "BreadcrumbList"],
    canonicalStatus: "self", indexable: true, indexationGate: "always",
    inSitemap: true, metadataSource: "page-level metadata export", priority: 90,
  });
}

// ── Internal link graph ───────────────────────────────────────────────────
const edges = [];
const REASON_TO_RELATIONSHIP = {
  parent: "parent", child: "child", nearby: "related city", sibling: "sibling",
  situation: "related seller situation", guide: "supporting guide",
  county: "related county", "cluster-sibling": "sibling", pillar: "pillar",
  "property-type": "related property type", "primary-market": "cross-cluster link",
};
for (const p of seoPages) {
  const links = internalLinks.getInternalLinks(p.slug);
  for (const [bucket, items] of Object.entries(links)) {
    for (const item of items) {
      edges.push({
        source: `/${p.slug}`, destination: `/${item.slug}`,
        anchorText: anchorText.getDeterministicAnchorText(
          pageIndex.getPageBySlug(item.slug) ?? { slug: item.slug, title: item.title, h1: item.h1, type: "unknown" }, 0),
        component: "src/components/seo/InternalLinkSection.tsx",
        linkContext: bucket, relationshipType: REASON_TO_RELATIONSHIP[item.reason] ?? item.reason,
        reason: item.reason,
      });
    }
  }
}
// Header + footer, parsed from the components
function hrefsFrom(file) {
  if (!existsSync(file)) return [];
  return [...readFileSync(file, "utf8").matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]);
}
for (const href of new Set(hrefsFrom(`${SRC}/components/Navbar.tsx`)))
  edges.push({ source: "*", destination: href, anchorText: null, component: "src/components/Navbar.tsx", linkContext: "header", relationshipType: "header", reason: "nav" });
for (const href of new Set(hrefsFrom(`${SRC}/components/Footer.tsx`)))
  edges.push({ source: "*", destination: href, anchorText: null, component: "src/components/Footer.tsx", linkContext: "footer", relationshipType: "footer", reason: "nav" });
// Glossary contextual links
for (const t of glossary.glossaryTerms) {
  for (const rel of t.relatedTermSlugs ?? [])
    edges.push({ source: `/glossary/${t.slug}`, destination: `/glossary/${rel}`, anchorText: null, component: "src/app/glossary/[term]/page.tsx", linkContext: "related terms", relationshipType: "sibling", reason: "glossary-sibling" });
  for (const rel of t.relatedPageSlugs ?? [])
    edges.push({ source: `/glossary/${t.slug}`, destination: `/${rel}`, anchorText: null, component: "src/app/glossary/[term]/page.tsx", linkContext: "related pages", relationshipType: "commercial conversion path", reason: "glossary-to-money" });
}

// ── Edges from hub pages and the link helpers ─────────────────────────────
// Replicated from the hub sources read directly (src/app/*/page.tsx), so the
// orphan figure reflects Sierra's real link graph rather than the subset that
// getInternalLinks() happens to cover.
const glossaryLinks = L("lib/seo/glossaryLinks.ts");
const guideLinks = L("lib/seo/guideLinks.ts");

function hubEdge(from, to, note) {
  edges.push({ source: from, destination: to, anchorText: null,
    component: `src/app${from === "/" ? "" : from}/page.tsx`,
    linkContext: "hub listing", relationshipType: "child", reason: note });
}
for (const c of counties.counties) hubEdge("/locations", `/${c.slug}`, "hub-county");
for (const l of locations.allLocations) hubEdge("/locations", `/${l.slug}`, "hub-city");
for (const s of situations.situations) hubEdge("/situations", `/${s.slug}`, "hub-situation");
for (const pt of propertyTypes.propertyTypes) hubEdge("/property-types", `/${pt.slug}`, "hub-property-type");
for (const f of financingTopics.financingTopics) hubEdge("/creative-financing", `/${f.slug}`, "hub-financing");
for (const g of guides.guides) hubEdge("/guides", `/guides/${g.slug}`, "hub-guide");
for (const t of glossary.glossaryTerms) hubEdge("/glossary", `/glossary/${t.slug}`, "hub-glossary");

// /blog links only nine hand-picked city/county buckets — NOT every post.
// Source: src/app/blog/page.tsx lines 26-34.
const blogHubBuckets = (p) =>
  p.city === "Auburn" || p.city === "Grass Valley" || p.county === "Santa Cruz County" ||
  p.city === "Roseville" || p.county === "Sacramento County" ||
  (p.county === "Placer County" && p.city !== "Auburn" && p.city !== "Roseville") ||
  p.county === "El Dorado County" ||
  (p.county === "Nevada County" && p.city !== "Grass Valley") ||
  p.county === "Yuba County";
for (const b of blog.blogPosts) if (blogHubBuckets(b)) hubEdge("/blog", `/blog/${b.slug}`, "hub-blog");

// Per-page helper links
const slugOf = (x) => (typeof x === "string" ? x : x?.slug);
for (const p of seoPages) {
  const from = `/${p.slug}`;
  try {
    for (const g of guideLinks.getGuidesForPage(p.slug) ?? [])
      edges.push({ source: from, destination: `/guides/${slugOf(g)}`, anchorText: null,
        component: "src/components/seo/RelatedGuides.tsx", linkContext: "related guides",
        relationshipType: "supporting guide", reason: "guide-engine" });
  } catch {}
  try {
    for (const t of glossaryLinks.getGlossaryTermsForPage(p.slug) ?? [])
      edges.push({ source: from, destination: `/glossary/${slugOf(t)}`, anchorText: null,
        component: "src/components/seo/KeyTerms.tsx", linkContext: "key terms",
        relationshipType: "supporting definition", reason: "glossary-engine" });
  } catch {}
  if (p.type === "city") {
    try {
      for (const c of combos.getCombosByCity(p.slug) ?? [])
        edges.push({ source: from, destination: `/${slugOf(c)}`, anchorText: null,
          component: "src/components/seo/CityPage.tsx", linkContext: "city combos",
          relationshipType: "child", reason: "city-combo" });
    } catch {}
    try {
      for (const b of blog.getBlogPostsByCity(p.city) ?? [])
        edges.push({ source: from, destination: `/blog/${slugOf(b)}`, anchorText: null,
          component: "src/app/(seo)/[slug]/page.tsx", linkContext: "local blog",
          relationshipType: "supporting guide", reason: "city-blog" });
    } catch {}
  }
  if (p.type === "situation") {
    try {
      for (const c of combos.getCombosBySituation(p.slug) ?? [])
        edges.push({ source: from, destination: `/${slugOf(c)}`, anchorText: null,
          component: "src/components/seo/SituationPage.tsx", linkContext: "situation combos",
          relationshipType: "child", reason: "situation-combo" });
    } catch {}
  }
  if (p.type === "county") {
    try {
      for (const b of blog.getBlogPostsByCounty(p.county) ?? [])
        edges.push({ source: from, destination: `/blog/${slugOf(b)}`, anchorText: null,
          component: "src/app/(seo)/[slug]/page.tsx", linkContext: "county blog",
          relationshipType: "supporting guide", reason: "county-blog" });
    } catch {}
  }
}

// ── Hardcoded slug references anywhere in app/ or components/ ─────────────
// Sierra links several routes from hand-written JSX rather than from the link
// engine: the homepage lists the Lake Tahoe and Gold Country regions, and
// CoastalRegionNav.tsx hardcodes the seven coastal sub-regions. Without this
// pass those pages look orphaned when they are not.
import { readdirSync, statSync } from "node:fs";
function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = `${dir}/${name}`;
    const st = statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (name.endsWith(".tsx")) acc.push(full);
  }
  return acc;
}
const knownSlugs = new Set(routes.map((r) => r.url.replace(/^\//, "")).filter((s) => s && !s.includes("/")));
const tsxFiles = [...walk(`${SRC}/app`), ...walk(`${SRC}/components`)];
for (const file of tsxFiles) {
  const text = readFileSync(file, "utf8");
  const rel = file.replace(`${SIERRA}/`, "");
  // Source route: an app/**/page.tsx maps to a URL; a component is sitewide.
  let source = "component";
  const m = rel.match(/^src\/app\/(.*)\/page\.tsx$/);
  if (m) {
    const seg = m[1].replace(/\((?:[^)]*)\)\//g, "").replace(/\/?\[[^\]]+\]/g, "");
    source = "/" + seg;
    if (source === "/") source = "/";
  } else if (rel === "src/app/page.tsx") source = "/";
  const seen = new Set();
  for (const sm of text.matchAll(/["'`]([a-z0-9-]{6,})["'`]/g)) {
    const slug = sm[1];
    if (!knownSlugs.has(slug) || seen.has(slug)) continue;
    seen.add(slug);
    edges.push({ source, destination: `/${slug}`, anchorText: null, component: rel,
      linkContext: "hardcoded JSX", relationshipType: "contextual editorial link",
      reason: "hardcoded" });
  }
}

// Inbound counts back onto the inventory
const inbound = new Map();
const inboundContextual = new Map();
const HUBBY = new Set(["hub listing", "header", "footer"]);
for (const e of edges) {
  if (e.source === "*") continue;
  inbound.set(e.destination, (inbound.get(e.destination) ?? 0) + 1);
  if (!HUBBY.has(e.linkContext))
    inboundContextual.set(e.destination, (inboundContextual.get(e.destination) ?? 0) + 1);
}
for (const r of routes) {
  r.inboundInternalLinks = inbound.get(r.url) ?? 0;
  r.inboundContextualLinks = inboundContextual.get(r.url) ?? 0;
  // Sierra's own distinction (scripts/check-orphans-all.ts): reachable only via
  // its own index page is technically crawlable and practically invisible.
  r.hubOnly = r.inboundInternalLinks > 0 && r.inboundContextualLinks === 0;
}

// ── Topical / entity graph ────────────────────────────────────────────────
const entities = [];
const relationships = [];
entities.push({ id: "state:ca", type: "state", name: "California" });
for (const c of counties.counties) {
  entities.push({ id: `county:${c.slug}`, type: "county", name: c.name, url: `/${c.slug}` });
  relationships.push({ from: `county:${c.slug}`, to: "state:ca", type: "containedIn" });
}
for (const l of locations.allLocations) {
  entities.push({ id: `city:${l.slug}`, type: l.isIncorporated ? "city" : "community", name: l.name, url: `/${l.slug}`, priority: l.priority });
  relationships.push({ from: `city:${l.slug}`, to: `county:${l.countySlug}`, type: "containedIn" });
  for (const n of l.nearby ?? []) relationships.push({ from: `city:${l.slug}`, to: `city:${n}`, type: "adjacentTo" });
}
for (const r of regions.regions) {
  entities.push({ id: `region:${r.slug}`, type: "region", name: r.name, url: `/${r.slug}` });
  for (const cs of r.countySlugs ?? []) relationships.push({ from: `county:${cs}`, to: `region:${r.slug}`, type: "partOfRegion" });
  for (const cs of r.citySlugs ?? []) relationships.push({ from: `city:${cs}`, to: `region:${r.slug}`, type: "partOfRegion" });
}
for (const s of situations.situations) {
  entities.push({ id: `situation:${s.slug}`, type: "sellerSituation", name: s.name, url: `/${s.slug}`, cluster: s.cluster ?? null });
}
for (const pt of propertyTypes.propertyTypes) {
  entities.push({ id: `propertyType:${pt.slug}`, type: "propertyType", name: pt.name, url: `/${pt.slug}`, cluster: pt.cluster, isPillar: !!pt.isPillar });
}
for (const f of financingTopics.financingTopics) {
  entities.push({ id: `financing:${f.slug}`, type: "transactionTopic", name: f.name, url: `/${f.slug}`, cluster: f.cluster, isPillar: !!f.isPillar });
}
for (const g of guides.guides) entities.push({ id: `guide:${g.slug}`, type: "guideTopic", name: g.h1, url: `/guides/${g.slug}`, cluster: g.category });
for (const t of glossary.glossaryTerms) entities.push({ id: `term:${t.slug}`, type: "definedTerm", name: t.term, url: `/glossary/${t.slug}` });
for (const c of counties.counties)
  for (const s of c.situationSlugs ?? [])
    relationships.push({ from: `county:${c.slug}`, to: `situation:${s}`, type: "relevantSituation" });
for (const ct of countyTopic.countyTopicCombos)
  relationships.push({ from: ct.countySlug ? `county:${ct.countySlug}` : `city:${ct.citySlug}`, to: `propertyType:${ct.topicPillarSlug}`, type: "relevantTopic", topic: ct.topic });

// ── Write ─────────────────────────────────────────────────────────────────
const generatedAt = new Date().toISOString().slice(0, 10);
const meta = { generatedAt, source: "sierrapropertybuyers (read-only)", generator: "scripts/migration/extract-sierra.mjs" };

writeFileSync(`${OUT}/sierra-route-inventory.json`, JSON.stringify({ ...meta, totalRoutes: routes.length, routes }, null, 2));
writeFileSync(`${OUT}/sierra-link-graph.json`, JSON.stringify({ ...meta, totalEdges: edges.length, edges }, null, 2));
writeFileSync(`${OUT}/sierra-topical-graph.json`, JSON.stringify({ ...meta, totalEntities: entities.length, totalRelationships: relationships.length, entities, relationships }, null, 2));

// ── Summary to stdout ─────────────────────────────────────────────────────
const byType = {};
for (const r of routes) {
  byType[r.pageType] ??= { total: 0, indexable: 0 };
  byType[r.pageType].total++;
  if (r.indexable) byType[r.pageType].indexable++;
}
console.log("ROUTE INVENTORY");
console.log("type              total  indexable  noindex");
for (const [t, v] of Object.entries(byType).sort((a, b) => b[1].total - a[1].total))
  console.log(`${t.padEnd(18)}${String(v.total).padStart(5)}${String(v.indexable).padStart(11)}${String(v.total - v.indexable).padStart(9)}`);
const tot = routes.length, idx = routes.filter((r) => r.indexable).length;
console.log(`${"TOTAL".padEnd(18)}${String(tot).padStart(5)}${String(idx).padStart(11)}${String(tot - idx).padStart(9)}`);
console.log(`\nLINK GRAPH: ${edges.length} edges`);
console.log(`TOPICAL GRAPH: ${entities.length} entities, ${relationships.length} relationships`);
const orphans = routes.filter((r) => r.indexable && r.inboundInternalLinks === 0 && r.routeFamily !== "static");
const hubOnly = routes.filter((r) => r.indexable && r.hubOnly && r.routeFamily !== "static");
console.log(`ORPHANS   (indexable, 0 inbound at all):        ${orphans.length}`);
console.log(`HUB-ONLY  (indexable, only its index links it): ${hubOnly.length}`);
const hubByType = {};
for (const r of hubOnly) hubByType[r.pageType] = (hubByType[r.pageType] ?? 0) + 1;
if (hubOnly.length) console.log("  hub-only by type:", JSON.stringify(hubByType));
const dist = {};
for (const r of routes.filter((x) => x.indexable)) {
  const b = r.inboundContextualLinks === 0 ? "0" : r.inboundContextualLinks <= 2 ? "1-2"
    : r.inboundContextualLinks <= 10 ? "3-10" : r.inboundContextualLinks <= 50 ? "11-50" : "50+";
  dist[b] = (dist[b] ?? 0) + 1;
}
console.log("CONTEXTUAL INBOUND distribution (indexable):", JSON.stringify(dist));

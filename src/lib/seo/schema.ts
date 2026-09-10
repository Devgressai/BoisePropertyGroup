import { site, isSet, hasAddress } from "@/data/site";

/**
 * Structured data must reflect VISIBLE, TRUE content.
 *
 * No claimed address, telephone, rating, review count or award that does not
 * exist. Fields are omitted entirely when unset rather than emitted empty —
 * an empty `telephone` is a worse signal than no `telephone`.
 */
export function organizationSchema() {
  const node: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    areaServed: site.market.cities.map((c) => ({
      "@type": "City",
      name: `${c}, ${site.market.state}`,
    })),
  };
  if (isSet(site.legalEntity)) node.legalName = site.legalEntity;
  if (isSet(site.phone)) node.telephone = site.phone;
  if (isSet(site.email)) node.email = site.email;
  if (hasAddress) {
    node.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    };
  }
  return node;
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };
}

/** Assembles a connected @graph rather than disconnected blobs. */
export function graph(...nodes: Record<string, unknown>[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/**
 * Structured data for a commercial asset page.
 *
 * Deliberately modest. It says what the page is ABOUT and lists the sources it
 * cites, both of which are visible on the page. It does NOT emit a Service, an
 * Offer, a Product or an AggregateRating, because we have no transaction
 * history and structured data is exactly where an unearned claim slips past
 * review — nobody proofreads JSON-LD.
 *
 * It also carries no valuation statement of any kind. See
 * research/commercial/COMMERCIAL-VALUATION-EDUCATION-MODEL.md §6.
 */
export function commercialPageSchema({
  slug,
  title,
  description,
  about,
  sources,
}: {
  slug: string;
  title: string;
  description: string;
  about: string;
  sources: { title: string; url: string; publisher: string }[];
}) {
  return {
    "@type": "WebPage",
    "@id": `${site.url}/commercial/${slug}#webpage`,
    url: `${site.url}/commercial/${slug}`,
    name: title,
    description,
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` },
    about: { "@type": "Thing", name: about },
    // Every source is a visible link in the page's evidence block.
    citation: sources.map((s) => ({
      "@type": "CreativeWork",
      name: s.title,
      url: s.url,
      publisher: { "@type": "Organization", name: s.publisher },
    })),
  };
}

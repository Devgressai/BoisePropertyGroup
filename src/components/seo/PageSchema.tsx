import { entryFor } from "@/lib/seo/registry";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/seo/schema";

/**
 * WebPage + BreadcrumbList for a registry page. The breadcrumb is walked from
 * the registry's parent chain, so it cannot disagree with the site structure.
 * Organization and WebSite are emitted once, by the root layout.
 */
export default function PageSchema({
  path,
  name,
  description,
  type,
  extra = [],
}: {
  path: string;
  name: string;
  description?: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";
  extra?: Record<string, unknown>[];
}) {
  const entry = entryFor(path);
  const chain: { label: string; href?: string }[] = [];
  for (let e = entry; e; e = e.parent ? entryFor(e.parent) : undefined) {
    chain.unshift({ label: e.label, href: e.path });
  }
  const nodes: Record<string, unknown>[] = [
    webPageSchema({ path, name, description, updated: entry?.updated, type }),
  ];
  if (chain.length > 1) nodes.push(breadcrumbSchema(chain));
  nodes.push(...extra);
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph(...nodes)) }} />
  );
}

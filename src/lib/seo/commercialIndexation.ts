import { commercialPage, type CommercialPageContent } from "@/data/commercial-content";
import { claimsUniqueToAssetClass, commercialClaimsByTopic } from "@/data/commercial-claims";
import {
  MIN_UNIQUE_CLAIMS,
  MIN_WORDS,
  countWords,
  type IndexDecision,
} from "@/lib/seo/indexation";

/**
 * THE COMMERCIAL QUALITY GATE — one copy, for every consumer.
 *
 * This logic already existed TWICE: privately inside the /commercial/[asset]
 * route, and inline in sitemap.ts with a comment explaining that it had to
 * mirror the route by hand. The link graph needed it as a third consumer, and
 * a third hand-maintained copy of an indexation decision is exactly the shape
 * of the last two defects on this site — robots.txt opened while the layout
 * still said noindex, and a sitemap reading a static flag while the route
 * computed one. Both were invisible because two sources of truth agreed until
 * the day they did not.
 *
 * Same rule as location pages: a page always renders and always passes equity —
 * `follow` is never false. Indexing is earned by carrying enough evidence that
 * is true of THIS asset class and not of every commercial building, plus enough
 * hand-written content to be worth a reader's time.
 */
export function decideCommercialIndexation(
  content: CommercialPageContent | undefined,
): IndexDecision {
  if (!content) return { indexable: false, reason: "no content" };

  // An explainer is not about a kind of building, so counting claims that
  // differentiate an asset class would measure the wrong thing. It is gated on
  // the topics it is actually about instead.
  const unique =
    content.kind === "explainer"
      ? new Set(
          (content.gateTopics ?? []).flatMap((t) =>
            commercialClaimsByTopic(t).map((c) => c.id),
          ),
        ).size
      : new Set(
          [content.assetClass, ...(content.alsoCovers ?? [])].flatMap((a) =>
            claimsUniqueToAssetClass(a).map((x) => x.id),
          ),
        ).size;

  const words = countWords(
    ...content.intro,
    ...content.sections.flatMap((s) => [s.heading, ...s.body]),
  );

  if (unique < MIN_UNIQUE_CLAIMS)
    return {
      indexable: false,
      reason: `${unique} differentiating claims, needs ${MIN_UNIQUE_CLAIMS}`,
    };
  if (words < MIN_WORDS)
    return { indexable: false, reason: `${words} words, needs ${MIN_WORDS}` };
  return { indexable: true, reason: `${unique} differentiating claims, ${words} words` };
}

/** Convenience for callers holding a slug rather than the content object. */
export function decideCommercialIndexationBySlug(slug: string): IndexDecision {
  return decideCommercialIndexation(commercialPage(slug));
}

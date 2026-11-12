import type { TopicPage } from "@/data/topic-pages";
import { claim as residentialClaim } from "@/data/claims";
import { commercialClaim } from "@/data/commercial-claims";
import { countWords } from "@/lib/seo/indexation";

/**
 * When a topic page may be indexed — computed, like every other gate here.
 *
 * A SITUATION page competes on the most templated query space there is ("we
 * buy inherited houses <place>"), which is exactly what the August 2026 spam
 * update punished on sibling sites. So it must rest on at least three approved
 * claims specific to the situation and carry real length. A DECISION page is
 * about our own method and has no statute to cite, so it is gated on length.
 */
export const SITUATION_MIN_CLAIMS = 3;
export const TOPIC_MIN_WORDS = 600;

export function resolveClaim(id: string) {
  return residentialClaim(id) ?? commercialClaim(id);
}

export function topicWords(p: TopicPage): number {
  return countWords(...p.intro, ...p.sections.flatMap((s) => [s.heading, ...s.body]));
}

export function citedClaims(p: TopicPage) {
  return [...new Set(p.sections.flatMap((s) => s.claims ?? []))]
    .map(resolveClaim)
    .filter((c): c is NonNullable<ReturnType<typeof resolveClaim>> => c !== undefined);
}

export function decideTopicIndexation(p: TopicPage): { indexable: boolean; reason: string } {
  const words = topicWords(p);
  if (words < TOPIC_MIN_WORDS) return { indexable: false, reason: `${words} words < ${TOPIC_MIN_WORDS}` };
  if (p.kind === "situation") {
    const n = citedClaims(p).length;
    if (n < SITUATION_MIN_CLAIMS) return { indexable: false, reason: `${n} claims < ${SITUATION_MIN_CLAIMS}` };
  }
  return { indexable: true, reason: "" };
}

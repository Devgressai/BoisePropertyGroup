import type { Place } from "@/data/geography";
import { claimsUniqueTo, claimsForEntity } from "@/data/claims";

/**
 * THE QUALITY GATE.
 *
 * A page always RENDERS and always passes link equity. Indexing is earned.
 *
 * `follow` is never false. A noindex,nofollow page absorbs equity and passes
 * none on — a dead end in the graph.
 *
 * The differentiation test is the important one: a location page that cannot
 * say anything its neighbours cannot say is a doorway page, however well
 * sourced its inherited material is. Six Ada County cities inherit an identical
 * county administration layer, so inherited claims cannot be the qualifier.
 */
export const MIN_UNIQUE_CLAIMS = 3;
export const MIN_WORDS = 600;

export interface IndexDecision {
  indexable: boolean;
  reason: string;
}

export function decideIndexation(place: Place, bodyWordCount: number): IndexDecision {
  const unique = claimsUniqueTo(place.id).length;
  const total = claimsForEntity(place.id).length;

  if (place.buildVerdict === "DO_NOT_BUILD") {
    return { indexable: false, reason: "no evidence unique to this place — page should not exist" };
  }
  if (unique < MIN_UNIQUE_CLAIMS) {
    return {
      indexable: false,
      reason: `only ${unique} claim(s) unique to this place (needs ${MIN_UNIQUE_CLAIMS}); ${total} inherited claims cannot differentiate it`,
    };
  }
  if (bodyWordCount < MIN_WORDS) {
    return { indexable: false, reason: `${bodyWordCount} words of hand-written content (needs ${MIN_WORDS})` };
  }
  return { indexable: true, reason: `${unique} unique claims, ${bodyWordCount} words` };
}

/** Metadata robots directive. `follow` is ALWAYS true. */
export function robotsFor(decision: IndexDecision) {
  return { index: decision.indexable, follow: true };
}

export function countWords(...blocks: string[]): number {
  return blocks.join(" ").trim().split(/\s+/).filter(Boolean).length;
}

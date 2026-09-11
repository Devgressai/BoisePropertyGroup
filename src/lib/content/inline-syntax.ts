/**
 * In-prose links, as markdown-style markup inside body strings: [label](/path)
 *
 * Until 2026-09-11 there was no way to put a link inside a sentence on this
 * site. Body copy is plain strings, so every internal link was chrome or a card
 * and zero were contextual — a county hub could summarise five guides and link
 * to none of them where it named them.
 *
 * Deliberately narrow: INTERNAL paths only (must start with "/"), no nesting,
 * no formatting. Every link is checked by a gate against the routes that are
 * actually indexable, so a typo or a link to a noindex page fails the build
 * rather than shipping.
 *
 * This module has no JSX so the indexation gate can import it — word counts
 * must strip the markup or a link would inflate the count that decides whether
 * a page may be indexed.
 */
export const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** The visible text of a body string: markup removed, labels kept. */
export function stripInline(text: string): string {
  return text.replace(INLINE_LINK, "$1");
}

/** Every internal link written into a body string. */
export function extractInlineLinks(text: string): { label: string; href: string }[] {
  return [...text.matchAll(INLINE_LINK)].map((m) => ({ label: m[1], href: m[2] }));
}

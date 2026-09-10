/**
 * The site-wide robots default, as a named value.
 *
 * It lived inline in the root layout's metadata, where nothing could test it —
 * importing the layout pulls in next/font, which does not run outside Next. So
 * the one directive that silently governs every page without its own logic was
 * the one directive no check could see.
 *
 * That is how the homepage, both hub pages and four static pages came to serve
 * `noindex, follow` while the sitemap advertised all seven: robots.txt was
 * opened and this was not, and neither the build, the sitemap nor the canonical
 * tags could reveal it.
 *
 * Pages that compute their own directive (place pages, commercial pages)
 * override this. Everything else inherits it.
 */
export const SITE_ROBOTS_DEFAULT = {
  index: true,
  /** NEVER false, anywhere. A noindex,nofollow page absorbs equity and passes none on. */
  follow: true,
} as const;

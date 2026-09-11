import Link from "next/link";
import { site, hasPhone, hasEmail, hasAddress, hasLegalEntity } from "@/data/site";
import { places, county } from "@/data/geography";
import { contentFor } from "@/data/place-content";
import { decideIndexation, countWords } from "@/lib/seo/indexation";

/**
 * Footer navigation.
 *
 * The Areas column lists ONLY places whose page is indexable, and links each to
 * its own URL. It previously named Ada County, Boise and Star but pointed all
 * three at /locations — three labels, one destination, no equity reaching the
 * pages themselves.
 *
 * Places whose pages are noindex are deliberately absent — navigation must not
 * link to a page that asks not to be indexed. They belong here when they earn
 * it, not before.
 *
 * That list is COMPUTED, not typed. Hardcoding which cities are indexable would
 * be a third copy of a decision the page and the sitemap already make, and the
 * last two defects on this site were both exactly that: robots.txt opened while
 * the layout still said noindex, and a sitemap reading a static flag while the
 * route computed one. When a city earns its page, it appears here on its own.
 */
const areaLinks: [string, string][] = [
  ...(contentFor(county.slug) ? ([[county.name, `/${county.slug}`]] as [string, string][]) : []),
  ...places
    .filter((p) => {
      const content = contentFor(p.slug);
      if (!content) return false;
      const words = countWords(
        ...(content.intro ?? []),
        ...(content.sections ?? []).flatMap((s) => [s.heading, ...s.body]),
      );
      return decideIndexation(p, words).indexable;
    })
    .map((p) => [p.name, `/${p.slug}`] as [string, string]),
  ["All areas", "/locations"],
];
const COLS = [
  { h: "Sell", links: [["How It Works", "/how-it-works"], ["What We Buy", "/what-we-buy"], ["Commercial", "/commercial"], ["Get an Offer", "#offer"]] },
  { h: "Areas", links: areaLinks },
  { h: "Learn", links: [["Guides", "/guides"], ["About", "/about"], ["Contact", "/contact"]] },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--bpg-ink)] pb-10 pt-16 text-white/70">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="display-md text-white" style={{ fontSize: "1.35rem", lineHeight: 1.1 }}>
              Boise Property Group
            </p>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed">
              Direct property buyers in Ada County and the Treasure Valley, Idaho.
            </p>
            {/* NAP renders only when real. Never a plausible placeholder. */}
            {hasPhone && <p className="mt-4 text-sm"><a href={site.phoneHref} className="text-white no-underline">{site.phone}</a></p>}
            {hasEmail && <p className="mt-1 text-sm"><a href={`mailto:${site.email}`} className="text-white no-underline">{site.email}</a></p>}
            {hasAddress && (
              <address className="mt-3 text-sm not-italic leading-relaxed">
                {site.address.street}<br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
            )}
          </div>
          {COLS.map((c) => (
            <div key={c.h}>
              <h2 className="eyebrow text-white">{c.h}</h2>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm no-underline transition-colors hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {hasLegalEntity ? site.legalEntity : site.name}. All rights reserved.
          </p>
          <p>
            Site by <a href="https://webvello.com" className="text-white no-underline">webvello.com</a>
          </p>
        </div>
        <p className="mt-5 max-w-[70ch] text-xs leading-relaxed text-white/45">
          Information on this site describes Idaho statutes and Ada County procedures and cites its
          sources. It is not legal advice and is not applied to your circumstances. Consult an
          attorney about your own property.
        </p>
      </div>
    </footer>
  );
}

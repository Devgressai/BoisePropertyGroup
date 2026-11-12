import Link from "next/link";
import { county } from "@/data/geography";
import { contentFor } from "@/data/place-content";
import { publishedPlaces, publishedGuides } from "@/lib/seo/registry";

/**
 * The homepage's routes into the site: every published area and every
 * published guide, read from the registry so a new city or guide appears here
 * the day it earns its page.
 *
 * Before this the homepage body linked to two URLs, and /locations and /guides
 * were reachable only from the navbar — both were still "unknown to Google"
 * eight weeks after the sitemap was submitted (gsc inspect, 2026-11-11).
 */
export default function Explore() {
  const areas = [
    ...(contentFor(county.slug) ? [{ href: `/${county.slug}`, label: county.name }] : []),
    ...publishedPlaces().map((p) => ({ href: `/${p.slug}`, label: p.name })),
  ];
  const guides = publishedGuides();
  return (
    <section className="section bg-white" aria-labelledby="explore">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">Areas and guides</p>
          <h2 id="explore" className="display-lg mt-4 text-[var(--bpg-ink)]">
            Find your city, or read the law.
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            Each area page covers what governs property there. Each guide covers one situation under
            Idaho law, with its sources.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <h3 className="serif text-[1.3rem] font-semibold text-[var(--bpg-ink)]">
              <Link href="/locations" className="no-underline hover:underline">Areas we buy in</Link>
            </h3>
            <ul className="mt-4">
              {areas.map((a) => (
                <li key={a.href} className="border-t border-[var(--bpg-border)] last:border-b">
                  <Link href={a.href} className="group flex items-center justify-between py-3.5 text-[var(--bpg-ink)] no-underline">
                    {a.label}
                    <span aria-hidden="true" className="text-[var(--bpg-accent)] transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="serif text-[1.3rem] font-semibold text-[var(--bpg-ink)]">
              <Link href="/guides" className="no-underline hover:underline">Idaho selling guides</Link>
            </h3>
            <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">
              {guides.map((g) => (
                <li key={g.slug} className="border-t border-[var(--bpg-border)]">
                  <Link href={`/guides/${g.slug}`} className="group flex items-center justify-between gap-4 py-3.5 text-[var(--bpg-ink)] no-underline">
                    {g.title}
                    <span aria-hidden="true" className="text-[var(--bpg-accent)] transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

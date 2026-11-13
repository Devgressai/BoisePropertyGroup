import Link from "next/link";
import { county } from "@/data/geography";
import { contentFor } from "@/data/place-content";
import { publishedPlaces, publishedGuides } from "@/lib/seo/registry";
import { GUIDE_GROUPS } from "@/data/guides";

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
            Your city, and the rules that apply.
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            An area page covers what governs property there. A guide covers one situation under
            Idaho law, with its sources.
          </p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[13rem_1fr] lg:gap-8">
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
            {/* Grouped and folded: the homepage is not a research index. The
                links stay in the HTML, so every guide is still one step from home. */}
            <div className="mt-4 border-b border-[var(--bpg-border)]">
              {GUIDE_GROUPS.map((grp) => {
                const list = guides.filter((g) => grp.clusters.includes(g.cluster));
                if (list.length === 0) return null;
                return (
                  <details key={grp.id} className="group border-t border-[var(--bpg-border)]">
                    <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 text-[var(--bpg-ink)] [&::-webkit-details-marker]:hidden">
                      <span className="font-medium">{grp.h}</span>
                      <span className="flex items-center gap-3 text-sm text-[var(--bpg-muted)]">
                        {list.length} {list.length === 1 ? "guide" : "guides"}
                        <span aria-hidden="true" className="text-[1.2rem] leading-none text-[var(--bpg-accent)] group-open:hidden">+</span>
                        <span aria-hidden="true" className="hidden text-[1.2rem] leading-none text-[var(--bpg-accent)] group-open:inline">−</span>
                      </span>
                    </summary>
                    <ul className="pb-4">
                      {list.map((g) => (
                        <li key={g.slug}>
                          <Link href={`/guides/${g.slug}`} className="flex min-h-[44px] items-center text-[0.98rem] text-[var(--bpg-accent-ink)] underline-offset-2 hover:underline">
                            {g.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

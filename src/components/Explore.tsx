import Link from "next/link";
import { county } from "@/data/geography";
import { contentFor } from "@/data/place-content";
import { publishedPlaces, publishedGuides } from "@/lib/seo/registry";
import { IconPin, IconScale } from "./Icons";

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
    <section className="wrap py-20 sm:py-24" aria-labelledby="explore">
      <div className="text-center">
        <hr className="rule-accent centered" />
        <h2 id="explore" className="display-lg mt-6 text-[var(--bpg-ink)]">
          Start where you are
        </h2>
        <p className="lede mx-auto mt-4 max-w-[38rem] text-[var(--bpg-muted)]">
          Find your city, or read what Idaho law says about the situation you are in.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="card p-7">
          <div className="flex items-center gap-3.5">
            <span className="chip" style={{ background: "#DCEBF9", color: "var(--bpg-accent-ink)" }}>
              <IconPin />
            </span>
            <h3 className="text-[1.15rem] font-semibold text-[var(--bpg-ink)]">
              <Link href="/locations" className="no-underline hover:text-[var(--bpg-accent-ink)]">Areas we buy in</Link>
            </h3>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {areas.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-7">
          <div className="flex items-center gap-3.5">
            <span className="chip" style={{ background: "#FBE8CE", color: "var(--bpg-warm)" }}>
              <IconScale />
            </span>
            <h3 className="text-[1.15rem] font-semibold text-[var(--bpg-ink)]">
              <Link href="/guides" className="no-underline hover:text-[var(--bpg-accent-ink)]">Idaho selling guides</Link>
            </h3>
          </div>
          <ul className="mt-5 space-y-2.5">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

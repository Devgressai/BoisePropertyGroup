import Link from "next/link";
import Inline from "@/lib/content/Inline";

/**
 * The reading layout shared by guides, situation, decision, place and
 * commercial pages (2026-11-12).
 *
 * Editorial, not cards: sections divided by hairlines with serif headings, and
 * on wide screens a sticky rail with the page's contents and one quiet offer
 * panel. The rail is navigation, so it repeats nothing the article does not
 * already say.
 */
export const anchor = (h: string) => h.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

export default function ArticleBody({
  sections,
  children,
  offerLabel = "Get an offer",
  offerNote = "Start with the address. We come back with a number and the working behind it.",
}: {
  sections: { heading: string; body: string[] }[];
  /** Anything that follows the sections inside the reading column. */
  children?: React.ReactNode;
  offerLabel?: string;
  offerNote?: string;
}) {
  return (
    <div className="wrap grid gap-14 py-16 sm:py-20 lg:grid-cols-[minmax(0,46rem)_15rem] lg:justify-between">
      <article className="min-w-0">
        {sections.map((s, i) => (
          <section
            key={s.heading}
            aria-labelledby={anchor(s.heading)}
            className={i === 0 ? "" : "mt-12 border-t border-[var(--bpg-border)] pt-12"}
          >
            <h2 id={anchor(s.heading)} className="display-md scroll-mt-28 text-[var(--bpg-ink)]">
              {s.heading}
            </h2>
            <div className="mt-5 space-y-5 text-[1.05rem] leading-[1.75] text-[#26384A]">
              {s.body.map((p) => (
                <p key={p.slice(0, 40)}><Inline text={p} /></p>
              ))}
            </div>
          </section>
        ))}
        {children}
      </article>

      <aside className="hidden lg:block">
        <div className="sticky top-28 space-y-8">
          {sections.length > 2 && (
            <nav aria-label="On this page">
              <p className="eyebrow text-[var(--bpg-warm)]">On this page</p>
              <ol className="mt-4 max-h-[calc(100vh-22rem)] space-y-2.5 overflow-y-auto border-l border-[var(--bpg-border)]">
                {sections.map((s) => (
                  <li key={s.heading}>
                    <a
                      href={`#${anchor(s.heading)}`}
                      className="-ml-px block border-l border-transparent pl-4 text-[0.88rem] leading-snug text-[var(--bpg-muted)] no-underline hover:border-[var(--bpg-ink)] hover:text-[var(--bpg-ink)]"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <div className="rounded-xl bg-[var(--bpg-navy)] p-5 text-[var(--bpg-on-navy-muted)]">
            <p className="serif text-[1.15rem] font-semibold text-white">{offerLabel}</p>
            <p className="mt-2 text-[0.85rem] leading-relaxed">{offerNote}</p>
            <Link href="#offer" className="btn btn-brass mt-4 w-full !min-h-[44px] !text-[0.9rem]">
              Start with the address
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

/** A hairline list of links with arrows — replaces underlined link clouds. */
export function LinkList({ heading, items, cols = 2 }: { heading: string; items: { href: string; label: string }[]; cols?: 1 | 2 | 3 }) {
  if (items.length === 0) return null;
  const grid = cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : cols === 2 ? "sm:grid-cols-2" : "";
  return (
    <div>
      <h2 className="eyebrow text-[var(--bpg-warm)]">{heading}</h2>
      <ul className={`mt-4 grid gap-x-10 ${grid}`}>
        {items.map((l) => (
          <li key={l.href} className="border-t border-[var(--bpg-border)]">
            <Link href={l.href} className="group flex items-center justify-between gap-4 py-3.5 text-[var(--bpg-ink)] no-underline">
              {l.label}
              <span aria-hidden="true" className="text-[var(--bpg-accent)] transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

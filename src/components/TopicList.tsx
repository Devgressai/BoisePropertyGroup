import Link from "next/link";
import { publishedTopics } from "@/lib/seo/registry";

/**
 * Hub listing for topic pages: /what-we-buy lists the BOFU situations it is
 * the parent of; /how-it-works lists the MOFU decision pages. Read from the
 * registry, so a page appears here the day its gate passes.
 */
export default function TopicList({
  kind,
  heading,
  lede,
}: {
  kind: "situation" | "decision";
  heading: string;
  lede: string;
}) {
  const pages = publishedTopics(kind);
  if (pages.length === 0) return null;
  return (
    <section className="wrap py-16 sm:py-20" aria-labelledby={`topics-${kind}`}>
      <h2 id={`topics-${kind}`} className="display-lg text-[var(--bpg-ink)]">{heading}</h2>
      <p className="lede mt-4 max-w-[44rem] text-[var(--bpg-muted)]">{lede}</p>
      <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
        {pages.map((p) => (
          <li key={p.slug} className="border-t border-[var(--bpg-border)]">
            <Link href={`/${p.slug}`} className="group block py-6 no-underline">
              <span className="eyebrow text-[var(--bpg-warm)]">{p.eyebrow}</span>
              <span className="serif mt-2 flex items-start justify-between gap-4 text-[1.3rem] font-semibold leading-snug text-[var(--bpg-ink)]">
                {p.h1}
                <span aria-hidden="true" className="text-[var(--bpg-accent)] transition-transform group-hover:translate-x-1">→</span>
              </span>
              <span className="mt-2 block text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">{p.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

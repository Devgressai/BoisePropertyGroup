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
    <section className="wrap py-16" aria-labelledby={`topics-${kind}`}>
      <hr className="rule-accent" />
      <h2 id={`topics-${kind}`} className="display-md mt-5 text-[var(--bpg-ink)]">{heading}</h2>
      <p className="mt-3 max-w-[44rem] text-[var(--bpg-muted)]">{lede}</p>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((p) => (
          <li key={p.slug}>
            <Link href={`/${p.slug}`} className="card card-lift block h-full p-6 no-underline">
              <span className="eyebrow text-[var(--bpg-accent-ink)]">{p.eyebrow}</span>
              <span className="mt-2 block text-[1.05rem] font-semibold text-[var(--bpg-ink)]">{p.h1}</span>
              <span className="mt-2 block text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">{p.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

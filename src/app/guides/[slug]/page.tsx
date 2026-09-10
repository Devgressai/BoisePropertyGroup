import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import { guides, guideBySlug } from "@/data/guides";
import { guideContentFor } from "@/data/guide-content";
import { graph, organizationSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `/guides/${slug}` },
    // A guide indexes only when it has hand-written content behind it.
    robots: { index: !!guideContentFor(slug), follow: true },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  const content = guideContentFor(slug);
  if (!g || !content) notFound();

  const anchor = (h: string) => h.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  const jsonLd = graph(
    organizationSchema(),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Guides", href: "/guides" },
      { label: g.title },
    ])
  );

  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="bg-[var(--bpg-ink)] py-16 text-white sm:py-20">
          <div className="wrap">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
              <Link href="/" className="no-underline hover:text-white">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/guides" className="no-underline hover:text-white">Guides</Link>
            </nav>
            <h1 className="display-lg max-w-[22ch] text-white">{g.h1}</h1>
            <div className="mt-7 max-w-[44rem] space-y-4">
              {content.intro.map((p) => (
                <p key={p.slice(0, 40)} className="lede text-white/80">{p}</p>
              ))}
            </div>
          </div>
        </header>

        <article className="wrap py-16 sm:py-20">
          <div className="max-w-[46rem] space-y-14">
            {content.sections.map((s) => (
              <section key={s.heading} aria-labelledby={anchor(s.heading)}>
                <hr className="rule-accent" />
                <h2 id={anchor(s.heading)} className="display-md mt-5 text-[var(--bpg-ink)]">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 40)} className="leading-relaxed">{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="mt-16 max-w-[46rem] border-t border-[var(--bpg-border)] pt-8">
            <h2 className="eyebrow text-[var(--bpg-muted)]">Other guides</h2>
            <ul className="mt-4 space-y-2.5">
              {guides.filter((o) => o.slug !== g.slug).map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/guides/${o.slug}`}
                    className="text-[var(--bpg-ink)] underline decoration-[var(--bpg-border-strong)] underline-offset-4 hover:decoration-[var(--bpg-accent)]"
                  >
                    {o.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </article>
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

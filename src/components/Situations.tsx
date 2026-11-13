import Link from "next/link";
import { entryFor } from "@/lib/seo/registry";

/**
 * "What's actually going on?" — the seller names their situation in their own
 * words and lands on the page written for it. People rarely arrive wanting to
 * sell a house; they arrive because something else happened first.
 *
 * These are paraphrased situations in the reader's voice, NOT quotations from
 * anyone. Only published pages are linked (registry check), so an unpublished
 * situation drops out rather than 404ing.
 */
const ITEMS: { q: string; href: string }[] = [
  { q: "I inherited a house I don't want", href: "/sell-inherited-house-idaho" },
  { q: "The estate is in probate", href: "/guides/selling-a-house-in-probate-in-idaho" },
  { q: "I'm behind on the payments", href: "/sell-house-before-foreclosure-idaho" },
  { q: "We're divorcing and need it sold", href: "/sell-house-divorce-idaho" },
  { q: "It needs more work than I can take on", href: "/sell-house-as-is-idaho" },
  { q: "There are tenants in it", href: "/sell-rental-property-idaho" },
  { q: "It's land I've never really used", href: "/sell-land-idaho" },
  { q: "It's a manufactured home", href: "/sell-manufactured-home-idaho" },
  { q: "There's a lien or judgment on it", href: "/guides/liens-and-judgments-when-selling-in-idaho" },
  { q: "It's an apartment building or commercial", href: "/commercial" },
  { q: "I'm deciding whether to list it instead", href: "/cash-offer-vs-listing-idaho" },
  { q: "I want to know how you'd price it", href: "/how-we-calculate-an-offer" },
];

export default function Situations() {
  const items = ITEMS.filter((i) => entryFor(i.href));
  return (
    <section className="section bg-white" aria-labelledby="situations">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow text-[var(--bpg-warm)]">Start where you are</p>
          <h2 id="situations" className="display-lg mt-4 text-[var(--bpg-ink)]">
            What&rsquo;s actually going on?
          </h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            Most people get here because something else happened first. Pick yours for a plain
            account of your options under Idaho law.
          </p>
        </div>
        <ul className="section-body mt-10 grid gap-x-12 border-t border-[var(--bpg-border)] sm:grid-cols-2">
          {items.map((i) => (
            <li key={i.href} className="border-b border-[var(--bpg-border)]">
              <Link
                href={i.href}
                className="group flex items-center justify-between gap-4 py-[1.05rem] text-[1.02rem] text-[var(--bpg-ink)] no-underline"
              >
                <span>&ldquo;{i.q}&rdquo;</span>
                <span aria-hidden="true" className="text-[var(--bpg-accent)] transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="section-body mt-8 text-[0.95rem] text-[var(--bpg-muted)]">
          Something else, or nothing you want to explain yet?{" "}
          <Link href="/what-we-buy" className="font-semibold text-[var(--bpg-ink)] underline decoration-[var(--bpg-brass)] underline-offset-4">
            See everything we buy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

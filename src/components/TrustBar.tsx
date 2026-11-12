import Link from "next/link";
import { site } from "@/data/site";

/**
 * Thin strip under the hero. Facts only: where we buy, and the one thing this
 * site does that a template cannot — cite its sources. No counts, no reviews.
 */
export default function TrustBar() {
  return (
    <div className="border-y border-[var(--bpg-border)] bg-white">
      <div className="wrap flex flex-col gap-2 py-4 text-sm text-[var(--bpg-muted)] md:flex-row md:items-center md:justify-between">
        <p>
          A direct buyer for <span className="font-semibold text-[var(--bpg-ink)]">{site.market.county}</span> and
          the {site.market.region} &mdash; we buy with our own capital.
        </p>
        <ul className="flex flex-wrap gap-x-7 gap-y-1 font-semibold text-[var(--bpg-ink)]">
          <li>{site.market.cities.length} cities</li>
          <li>
            <Link href="/guides" className="no-underline hover:underline">Every claim cites its source</Link>
          </li>
          <li>
            <Link href="/how-to-check-a-cash-buyer-in-idaho" className="no-underline hover:underline">How to check any buyer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

import Link from "next/link";
import { nextSteps } from "@/lib/seo/registry";

/**
 * The funnel's forward edge. Every page links one stage onward (see
 * lib/seo/registry.ts), so no reader — and no crawler — reaches a dead end.
 * Before this, /how-it-works and /contact linked to nothing in their body and
 * the homepage body linked to two pages.
 */
export default function NextSteps({ path, heading = "Where to next" }: { path: string; heading?: string }) {
  const steps = nextSteps(path);
  if (steps.length === 0) return null;
  return (
    <nav aria-label={heading} className="wrap py-14">
      <h2 className="eyebrow text-[var(--bpg-muted)]">{heading}</h2>
      <ul className="mt-5 grid gap-x-10 sm:grid-cols-3">
        {steps.map((s) => (
          <li key={s.href} className="border-t border-[var(--bpg-ink)]">
            <Link href={s.href} className="group block h-full py-5 no-underline">
              <span className="serif flex items-center justify-between gap-3 text-[1.2rem] font-semibold text-[var(--bpg-ink)]">
                {s.label}
                <span aria-hidden="true" className="text-[var(--bpg-accent)] transition-transform group-hover:translate-x-1">→</span>
              </span>
              <span className="mt-1.5 block text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">{s.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

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
      <ul className="mt-5 grid gap-5 sm:grid-cols-3">
        {steps.map((s) => (
          <li key={s.href}>
            <Link href={s.href} className="card card-lift block h-full p-6 no-underline">
              <span className="block text-[1.05rem] font-semibold text-[var(--bpg-ink)]">{s.label}</span>
              <span className="mt-1.5 block text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">{s.note}</span>
              <span className="eyebrow mt-4 block text-[var(--bpg-accent-ink)]" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

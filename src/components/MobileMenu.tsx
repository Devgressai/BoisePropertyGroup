"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

/**
 * The small-screen menu. Before this the header showed only the logo and the
 * offer button below 1024px, so nothing but the footer led to the process,
 * criteria, areas, guides or About pages on a phone.
 *
 * A disclosure, not a modal: the page stays reachable behind it. Escape and a
 * link press close it, and focus returns to the button.
 */
export default function MobileMenu({ links, phone, phoneHref }: { links: { label: string; href: string }[]; phone?: string; phoneHref?: string }) {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={btn}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-[var(--bpg-border-strong)] text-[var(--bpg-ink)]"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <div
        id={id}
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-[var(--bpg-ink)] bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_24px_40px_-24px_rgba(14,34,56,0.35)]"
      >
        <ul className="wrap">
          {links.map((l) => (
            <li key={l.href} className="border-t border-[var(--bpg-border)] first:border-t-0">
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="serif flex min-h-[56px] items-center justify-between text-[1.2rem] font-semibold text-[var(--bpg-ink)] no-underline"
              >
                {l.label}
                <span aria-hidden="true" className="text-[var(--bpg-accent)]">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="wrap grid gap-3 border-t border-[var(--bpg-ink)] py-5">
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
            Request an offer
          </Link>
          {phone && phoneHref && (
            <a href={phoneHref} className="btn btn-secondary w-full">
              Call {phone}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

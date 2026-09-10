import Link from "next/link";
import { site, hasPhone } from "@/data/site";

const NAV = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "What We Buy", href: "/what-we-buy" },
  { label: "Areas", href: "/locations" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--bpg-border)] bg-[var(--bpg-background)]/95 backdrop-blur">
      <nav className="wrap flex h-[72px] items-center justify-between gap-6" aria-label="Primary">
        <Link href="/" className="flex items-baseline gap-2 no-underline">
          <span
            className="display-md text-[var(--bpg-ink)]"
            style={{ fontSize: "1.35rem", lineHeight: 1 }}
          >
            Boise Property Group
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-[var(--bpg-muted)] no-underline transition-colors hover:text-[var(--bpg-ink)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {hasPhone && (
            <a
              href={site.phoneHref}
              className="hidden text-sm font-semibold text-[var(--bpg-ink)] no-underline sm:block"
            >
              {site.phone}
            </a>
          )}
          <Link href="#offer" className="btn btn-primary !min-h-[46px] !px-5 !text-[0.94rem]">
            Get an Offer
          </Link>
        </div>
      </nav>
    </header>
  );
}

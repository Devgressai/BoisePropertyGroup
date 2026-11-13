import Link from "next/link";
import { site, hasPhone } from "@/data/site";
import MobileMenu from "./MobileMenu";

const NAV = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "What We Buy", href: "/what-we-buy" },
  { label: "Commercial", href: "/commercial" },
  { label: "Areas", href: "/locations" },
  { label: "Seller Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--bpg-border)] bg-white/95 backdrop-blur">
      <nav className="wrap relative flex h-[72px] items-center justify-between gap-4" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-[var(--bpg-navy)] font-[family-name:var(--font-display)] text-[1.05rem] font-semibold leading-none text-[var(--bpg-brass)]"
          >
            B
          </span>
          <span className="display-md whitespace-nowrap text-[var(--bpg-ink)] max-[400px]:!text-[1rem]" style={{ fontSize: "1.2rem", lineHeight: 1 }}>
            Boise Property Group
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-[var(--bpg-muted)] no-underline transition-colors hover:text-[var(--bpg-accent-ink)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {hasPhone && (
            <a
              href={site.phoneHref}
              className="hidden text-sm font-semibold text-[var(--bpg-ink)] no-underline md:block"
            >
              {site.phone}
            </a>
          )}
          {/* Wrapped: .btn is unlayered CSS, so a display utility on it would lose. */}
          <span className="max-[480px]:hidden">
            <Link href="#offer" className="btn btn-primary !min-h-[46px] whitespace-nowrap !px-5 !text-[0.94rem]">
              Request an Offer
            </Link>
          </span>
          <MobileMenu links={NAV} phone={hasPhone ? site.phone : undefined} phoneHref={hasPhone ? site.phoneHref : undefined} />
        </div>
      </nav>
    </header>
  );
}

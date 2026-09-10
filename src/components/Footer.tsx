import Link from "next/link";
import { site, hasPhone, hasEmail, hasAddress, hasLegalEntity } from "@/data/site";

const COLS = [
  { h: "Sell", links: [["How It Works", "/how-it-works"], ["What We Buy", "/what-we-buy"], ["Get an Offer", "#offer"]] },
  { h: "Areas", links: [["Ada County", "/locations"], ["Boise", "/locations"], ["Star", "/locations"]] },
  { h: "Learn", links: [["Guides", "/guides"], ["About", "/about"], ["Contact", "/contact"]] },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--bpg-ink)] pb-10 pt-16 text-white/70">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="display-md text-white" style={{ fontSize: "1.35rem", lineHeight: 1.1 }}>
              Boise Property Group
            </p>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed">
              Direct property buyers in Ada County and the Treasure Valley, Idaho.
            </p>
            {/* NAP renders only when real. Never a plausible placeholder. */}
            {hasPhone && <p className="mt-4 text-sm"><a href={site.phoneHref} className="text-white no-underline">{site.phone}</a></p>}
            {hasEmail && <p className="mt-1 text-sm"><a href={`mailto:${site.email}`} className="text-white no-underline">{site.email}</a></p>}
            {hasAddress && (
              <address className="mt-3 text-sm not-italic leading-relaxed">
                {site.address.street}<br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
            )}
          </div>
          {COLS.map((c) => (
            <div key={c.h}>
              <h2 className="eyebrow text-white">{c.h}</h2>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm no-underline transition-colors hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {hasLegalEntity ? site.legalEntity : site.name}. All rights reserved.
          </p>
          <p>
            Site by <a href="https://webvello.com" className="text-white no-underline">webvello.com</a>
          </p>
        </div>
        <p className="mt-5 max-w-[70ch] text-xs leading-relaxed text-white/45">
          Information on this site describes Idaho statutes and Ada County procedures and cites its
          sources. It is not legal advice and is not applied to your circumstances. Consult an
          attorney about your own property.
        </p>
      </div>
    </footer>
  );
}

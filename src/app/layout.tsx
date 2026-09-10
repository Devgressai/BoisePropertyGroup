import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { graph, organizationSchema, websiteSchema } from "@/lib/seo/schema";

/** TWO families only. Sierra is mid-migration across four and it shows. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — We Buy Property in Ada County, Idaho`,
    template: `%s | ${site.name}`,
  },
  description:
    "We buy houses, land, multifamily, office and industrial property across Ada County and the Treasure Valley — Boise, Meridian, Eagle, Kuna, Star and Garden City. Direct offers, your timeline.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
  },
  robots: {
    /**
     * SITE-WIDE DEFAULT. Pages that compute their own directive — the place
     * pages, the commercial pages — override this; every page that does not
     * inherits it.
     *
     * This was `index: false` and stayed that way when robots.txt was opened on
     * 2026-09-10, because they are two separate switches and only one was
     * flipped. The result was the worst possible shape of failure: the
     * HOMEPAGE, /about, /contact, /how-it-works, /what-we-buy and both hub
     * pages served `noindex, follow` while the sitemap advertised all seven.
     * Nothing surfaced it — robots.txt was open, every page returned 200, and
     * the sitemap looked correct. Only reading the rendered meta tag showed it.
     *
     * Defaulting to noindex looks like the safe choice and is not: it fails
     * silently and it fails on the pages nobody thinks to check. Indexation is
     * still EARNED here, but it is earned by a gate that says no explicitly
     * (see lib/seo/indexation.ts), never by a default that says no quietly.
     */
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = graph(organizationSchema(), websiteSchema());
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-[var(--bpg-ink)]"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

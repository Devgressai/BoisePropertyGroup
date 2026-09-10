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
    // Pre-launch: nothing indexes until real NAP and a registered domain exist.
    // Flipping this is a deliberate act, not a default.
    index: false,
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

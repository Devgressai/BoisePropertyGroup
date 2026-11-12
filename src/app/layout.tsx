import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { SITE_ROBOTS_DEFAULT } from "@/lib/seo/defaults";
import { OG_IMAGE } from "@/lib/seo/meta";
import { graph, organizationSchema, websiteSchema } from "@/lib/seo/schema";

/** TWO families only. Sierra is mid-migration across four and it shows. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const display = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-face",
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
  // No `url` here: pages that set no openGraph inherited it, so every page
  // declared og:url = the homepage. Pages set their own via pageMetadata().
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image" },
  robots: SITE_ROBOTS_DEFAULT,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = graph(organizationSchema(), websiteSchema());
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
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

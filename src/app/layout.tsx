import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { SITE_ROBOTS_DEFAULT } from "@/lib/seo/defaults";
import { graph, organizationSchema, websiteSchema } from "@/lib/seo/schema";

/** TWO families only. Sierra is mid-migration across four and it shows. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
  },
  robots: SITE_ROBOTS_DEFAULT,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = graph(organizationSchema(), websiteSchema());
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
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

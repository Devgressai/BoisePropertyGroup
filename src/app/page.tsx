import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeBuy from "@/components/WhatWeBuy";
import HowItWorks from "@/components/HowItWorks";
import HumanScale from "@/components/HumanScale";
import LocalKnowledge from "@/components/LocalKnowledge";
import WhenNotToSell from "@/components/WhenNotToSell";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Explore from "@/components/Explore";
import PageSchema from "@/components/seo/PageSchema";
import { pageMetadata } from "@/lib/seo/meta";

/**
 * The homepage sets its own canonical. The root layout used to set "/" for
 * every route, so any page that forgot to override it — and every 404 — told
 * Google it was a copy of the homepage.
 */
// Absolute: the layout's title template does not apply to the root page itself.
const TITLE = "Boise Property Group — We Buy Property in Ada County, Idaho";
const DESCRIPTION =
  "We buy houses, land, multifamily and commercial property across Ada County — Boise, Meridian, Eagle, Kuna, Star and Garden City. You choose the closing date.";
export const metadata: Metadata = {
  ...pageMetadata({ path: "/", title: TITLE, description: DESCRIPTION }),
  title: { absolute: TITLE },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <Hero />
        <WhatWeBuy />
        <HowItWorks />
        <HumanScale />
        <LocalKnowledge />
        <WhenNotToSell />
        <Explore />
        <FinalCTA anchor={false} />
      </main>
      <Footer />
      <MobileCTA />
      <PageSchema path="/" name={TITLE} description={DESCRIPTION} />
    </>
  );
}

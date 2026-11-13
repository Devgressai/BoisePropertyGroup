import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeBuy from "@/components/WhatWeBuy";
import HowItWorks from "@/components/HowItWorks";
import Situations from "@/components/Situations";
import OfferMath from "@/components/OfferMath";
import LocalKnowledge from "@/components/LocalKnowledge";
import WhenNotToSell from "@/components/WhenNotToSell";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Explore from "@/components/Explore";
import WhoWeAre from "@/components/WhoWeAre";
import Questions, { QA_TEXT } from "@/components/Questions";
import { serviceSchema, faqSchema } from "@/lib/seo/schema";
import PageSchema from "@/components/seo/PageSchema";
import { pageMetadata } from "@/lib/seo/meta";

/**
 * The homepage sets its own canonical. The root layout used to set "/" for
 * every route, so any page that forgot to override it — and every 404 — told
 * Google it was a copy of the homepage.
 */
// Absolute: the layout's title template does not apply to the root page itself.
const TITLE = "We Buy Houses in Boise, Idaho | Boise Property Group";
const DESCRIPTION =
  "We buy houses, land and commercial property in Boise and across Ada County with our own capital. Any condition, and you choose the closing date.";
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
        <OfferMath />
        <WhenNotToSell />
        <HowItWorks />
        <WhoWeAre />
        <Questions />
        <Situations />
        <LocalKnowledge />
        <Explore />
        <FinalCTA anchor={false} />
      </main>
      <Footer />
      <MobileCTA />
      <PageSchema
        path="/"
        name={TITLE}
        description={DESCRIPTION}
        extra={[
          serviceSchema({ path: "/", name: "We buy houses, land and commercial property in Ada County, Idaho", description: DESCRIPTION }),
          faqSchema("/", QA_TEXT),
        ]}
      />
    </>
  );
}

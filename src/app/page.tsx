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

/**
 * The homepage sets its own canonical. The root layout used to set "/" for
 * every route, so any page that forgot to override it — and every 404 — told
 * Google it was a copy of the homepage.
 */
export const metadata: Metadata = { alternates: { canonical: "/" } };

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
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

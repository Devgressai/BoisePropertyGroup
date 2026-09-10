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

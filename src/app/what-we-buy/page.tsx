import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/meta";
import NextSteps from "@/components/NextSteps";
import PageSchema from "@/components/seo/PageSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import FinalCTA from "@/components/FinalCTA";
import WhatWeBuy from "@/components/WhatWeBuy";
import TopicList from "@/components/TopicList";
import { criteria } from "@/data/criteria";

const TITLE = "What We Buy — Acquisition Criteria";
const DESCRIPTION =
  "Acquisition criteria for Ada County and the Treasure Valley: residential, multifamily at any size, office, industrial and land — including property with problems attached.";

export const metadata: Metadata = pageMetadata({ path: "/what-we-buy", title: TITLE, description: DESCRIPTION });

export default function WhatWeBuyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-warm)]">Acquisition criteria</p>
            <h1 className="display-xl mt-4 max-w-[16ch] text-[var(--bpg-ink)]">What we buy</h1>
            <p className="lede mt-6 max-w-[44rem] text-[var(--bpg-muted)]">
              Specific enough to be useful. If your property is on this page, it is worth a
              conversation; if it is not, we will tell you rather than waste your time.
            </p>
          </div>
        </header>

        <div className="wrap py-16">
          <dl className="max-w-[52rem] divide-y divide-[var(--bpg-border)] border-y border-[var(--bpg-border)]">
            {criteria.map((c) => (
              <div key={c.label} className="grid gap-2 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8">
                <dt className="font-semibold text-[var(--bpg-ink)]">{c.label}</dt>
                <dd className="leading-relaxed text-[var(--bpg-muted)]">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <WhatWeBuy />
        <TopicList kind="situation" heading="By situation" lede="Inherited, as-is, tenanted, divorcing, behind on payments, land, manufactured homes — what a direct sale looks like in each, and the Idaho rules that apply." />
        <NextSteps path="/what-we-buy" />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
      <PageSchema path="/what-we-buy" name={TITLE} description={DESCRIPTION} type="WebPage" />
    </>
  );
}

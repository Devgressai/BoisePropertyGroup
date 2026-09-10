import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import OfferForm from "@/components/OfferForm";
import { site, hasPhone, hasEmail, hasAddress } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Boise Property Group about a property in Ada County or the Treasure Valley.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const anyNap = hasPhone || hasEmail || hasAddress;
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="bg-[var(--bpg-ink)] py-16 text-white sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-accent)]">Contact</p>
            <h1 className="display-xl mt-4 max-w-[16ch] text-white">Start with the address</h1>
            <p className="lede mt-6 max-w-[42rem] text-white/85">
              Houses, multifamily at any size, office, industrial or land. Tell us what it is and
              we will come back with a number and the working behind it.
            </p>
            <div className="mt-9 max-w-[34rem]">
              <OfferForm tone="dark" />
            </div>
          </div>
        </header>

        {/* NAP renders only when real. An unset field shows nothing rather than
            a plausible-looking placeholder. */}
        {anyNap && (
          <div className="wrap py-14">
            <h2 className="eyebrow text-[var(--bpg-muted)]">Direct</h2>
            <div className="mt-4 space-y-2">
              {hasPhone && <p><a href={site.phoneHref} className="text-[var(--bpg-ink)]">{site.phone}</a></p>}
              {hasEmail && <p><a href={`mailto:${site.email}`} className="text-[var(--bpg-ink)]">{site.email}</a></p>}
              {hasAddress && (
                <address className="not-italic leading-relaxed text-[var(--bpg-muted)]">
                  {site.address.street}<br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

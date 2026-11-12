import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/meta";
import NextSteps from "@/components/NextSteps";
import PageSchema from "@/components/seo/PageSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import OfferForm from "@/components/OfferForm";
import { site, hasPhone, hasEmail, hasAddress } from "@/data/site";

const TITLE = "Get an Offer on Your Ada County Property";
const DESCRIPTION =
  "Houses, land or commercial property in Ada County, Idaho. Start with the address and we come back with a number and the working behind it.";

export const metadata: Metadata = pageMetadata({ path: "/contact", title: TITLE, description: DESCRIPTION });

export default function Contact() {
  const anyNap = hasPhone || hasEmail || hasAddress;
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-accent)]">Contact</p>
            <h1 className="display-xl mt-4 max-w-[16ch] text-[var(--bpg-ink)]">Start with the address</h1>
            <p className="lede mt-6 max-w-[42rem] text-[var(--bpg-muted)]">
              Houses, multifamily at any size, office, industrial or land. Tell us what it is and
              we will come back with a number and the working behind it.
            </p>
            {/* id="offer": the navbar and mobile bar link to #offer on every page. */}
            <div id="offer" className="mt-9 max-w-[34rem] scroll-mt-24">
              <OfferForm />
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
        <NextSteps path="/contact" />
      </main>
      <Footer />
      <MobileCTA />
      <PageSchema path="/contact" name={TITLE} description={DESCRIPTION} type="ContactPage" />
    </>
  );
}

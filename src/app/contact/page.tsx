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

const NEXT = [
  { t: "You send the address", d: "It comes to us when you press the button. Then your name and a phone number, so we can reach you with the number." },
  { t: "We do the arithmetic", d: "We look at the parcel record and the property and build an offer you can check line by line." },
  { t: "You decide, and you set the date", d: "No obligation. If you accept, the sale closes through a local title company on the date you choose. A three-week close is realistic." },
];

export default function Contact() {
  const anyNap = hasPhone || hasEmail || hasAddress;
  return (
    <>
      <Navbar />
      <main id="main" className="pb-20 lg:pb-0">
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap grid gap-12 lg:grid-cols-[1fr_minmax(0,34rem)] lg:items-start">
            <div>
              <p className="eyebrow text-[var(--bpg-warm)]">Contact</p>
              <h1 className="display-xl mt-4 max-w-[16ch] text-[var(--bpg-ink)]">Start with the address</h1>
              <p className="lede mt-6 max-w-[38rem] text-[var(--bpg-muted)]">
                Houses, land, multifamily at any size, office or industrial. Tell us where it is and
                we will come back with a number and the working behind it.
              </p>

              {/* Only owner-confirmed facts (2026-09-13). No response-time promise. */}
              <h2 className="eyebrow mt-12 text-[var(--bpg-ink)]">What happens next</h2>
              <ol className="mt-5 space-y-5">
                {NEXT.map((n, i) => (
                  <li key={n.t} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--bpg-tint)] font-semibold text-[var(--bpg-accent-ink)]"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--bpg-ink)]">{n.t}</p>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-[var(--bpg-muted)]">{n.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* id="offer": the navbar and mobile bar link to #offer on every page. */}
            <div id="offer" className="scroll-mt-24 lg:sticky lg:top-24">
              <div data-offer-form className="form-panel p-6 sm:p-7">
                <h2 className="serif text-[1.35rem] font-semibold text-[var(--bpg-ink)]">Request an offer</h2>
                <p className="mb-4 mt-1 text-sm text-[var(--bpg-muted)]">Step 1 of 2: where the property is.</p>
                <OfferForm bare />
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--bpg-muted)]">
                <li>Land with no street address: enter the parcel number and the nearest city.</li>
                <li>Commercial or multifamily: the address is enough to start. We ask for a rent roll later, never on this form.</li>
                {hasPhone && (
                  <li>
                    Rather talk first? Call{" "}
                    <a href={site.phoneHref} className="font-semibold text-[var(--bpg-ink)]">{site.phone}</a>.
                  </li>
                )}
              </ul>
              {hasPhone && (
                <noscript>
                  <p className="mt-4 border-l-4 border-[var(--bpg-accent)] bg-white p-4 text-sm text-[var(--bpg-ink)]">
                    This form needs JavaScript. Without it, please call {site.phone}.
                  </p>
                </noscript>
              )}
            </div>
          </div>
        </header>

        {/* NAP renders only when real. An unset field shows nothing rather than
            a plausible-looking placeholder. */}
        {anyNap && (
          <div className="wrap py-14">
            <h2 className="eyebrow text-[var(--bpg-muted)]">By phone</h2>
            <div className="mt-4 space-y-2">
              {hasPhone && <p><a href={site.phoneHref} className="serif text-[1.6rem] font-semibold text-[var(--bpg-ink)] no-underline hover:underline">{site.phone}</a></p>}
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

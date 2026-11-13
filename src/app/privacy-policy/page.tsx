import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/meta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site, hasPhone } from "@/data/site";
import { CONSENT_CONTACT, CONSENT_PARTNERS, MARKETING_PARTNERS } from "@/lib/lead";

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "What Boise Property Group collects when you ask for an offer, how we use it, who it goes to, and how calls and texts work.";
const UPDATED = "November 13, 2026";

export const metadata: Metadata = pageMetadata({ path: "/privacy-policy", title: TITLE, description: DESCRIPTION });

/**
 * ⚠️ EVERY SENTENCE HERE MUST STAY TRUE OF THE CODE.
 * It describes exactly what src/app/api/offer/route.ts collects and sends, the
 * consent wording in src/lib/lead.ts, and the partner list MARKETING_PARTNERS.
 * If the form gains a field, analytics or a cookie is added, or a partner is
 * named, change this page in the same commit. Written 2026-11-13 as a plain
 * statement of current practice; the owner should have it reviewed by an
 * attorney, particularly before any lead goes to a partner.
 */
export default function PrivacyPolicy() {
  const contact = hasPhone ? (
    <>
      call or text us at <a href={site.phoneHref}>{site.phone}</a>
    </>
  ) : (
    <>use the form on our <a href="/contact">contact page</a></>
  );

  const SECTIONS: { h: string; body: React.ReactNode }[] = [
    {
      h: "Who we are",
      body: (
        <p>
          {site.name} buys property directly from owners in {site.market.county}, {site.market.state}.
          This policy covers {site.domain} and the offer form on it. To reach us about anything here,{" "}
          {contact}.
        </p>
      ),
    },
    {
      h: "What we collect",
      body: (
        <>
          <p>Only what you type into the offer form:</p>
          <ul>
            <li>The property address. It is sent to us as soon as you submit it, before the second step.</li>
            <li>Your name and phone number, and your email address if you give one.</li>
            <li>The answers you choose: how you prefer to be contacted, your situation, your timeline, your relationship to the property, and any notes.</li>
            <li>Which consent boxes you ticked, the exact wording of each, and the time you sent the form.</li>
          </ul>
          <p>
            To stop the form being abused, our server briefly looks at the internet address your request
            comes from and counts recent submissions. That count is kept in memory only and is not
            stored with your details. Our hosting provider keeps standard technical logs.
          </p>
        </>
      ),
    },
    {
      h: "What we do not collect",
      body: (
        <p>
          The site sets no advertising or analytics cookies and runs no tracking scripts. We do not
          ask for your Social Security number, bank details or date of birth through this site.
        </p>
      ),
    },
    {
      h: "How we use it",
      body: (
        <p>
          To look at your property, work out an offer, contact you about it, and keep a record of what
          you agreed to. We do not use your details for anything unrelated to the property you asked
          about unless you agree.
        </p>
      ),
    },
    {
      h: "Calls and text messages",
      body: (
        <>
          <p>Sending the form requires your agreement to this:</p>
          <blockquote>{CONSENT_CONTACT}</blockquote>
          <p>
            Reply STOP to any text and we will stop texting you. To stop calls as well, tell us on the
            call or {contact}. Message frequency depends on the conversation about your property.
            We do not share the mobile number or text-message consent you give us with anyone for
            their own marketing unless you tick the separate optional box below.
          </p>
        </>
      ),
    },
    {
      h: "Marketing partners",
      body: (
        <>
          <p>The form has a second, optional box, unticked unless you tick it:</p>
          <blockquote>{CONSENT_PARTNERS}</blockquote>
          {MARKETING_PARTNERS.length === 0 ? (
            <p>
              <strong>We have no marketing partners at present, and share your details with none,
              whether or not you ticked that box.</strong> If that changes, each partner will be named
              here, by name, before any information goes to them, and it will go only for sellers who
              ticked the box.
            </p>
          ) : (
            <>
              <p>If you tick it, your name, phone number and property address may go to these partners only:</p>
              <ul>
                {MARKETING_PARTNERS.map((p) => (
                  <li key={p.name}>{p.site ? <a href={p.site} rel="nofollow">{p.name}</a> : p.name}</li>
                ))}
              </ul>
              <p>Each partner handles your details under its own privacy policy. You can withdraw this consent at any time by telling us or replying STOP to a partner&rsquo;s text.</p>
            </>
          )}
        </>
      ),
    },
    {
      h: "Who else receives it",
      body: (
        <ul>
          <li><strong>Service providers.</strong> Resend delivers the form to our email inbox, and Vercel hosts the site. They handle your details only to provide those services to us.</li>
          <li><strong>A sale.</strong> If you go ahead, the title company and others needed to close the purchase receive what they need to do so.</li>
          <li><strong>The law.</strong> We disclose information when the law requires it.</li>
        </ul>
      ),
    },
    {
      h: "We do not sell it",
      body: <p>We do not sell your personal information.</p>,
    },
    {
      h: "How long we keep it",
      body: (
        <p>
          As long as we need it to talk to you about the property, and afterwards for our business
          records and any legal obligation. Ask us to delete it and we will, unless we have to keep it
          for a sale that went ahead.
        </p>
      ),
    },
    {
      h: "Your choices",
      body: (
        <p>
          You can ask what we hold about you, correct it, or have it deleted, and you can withdraw
          consent to calls and texts at any time. To do any of these, {contact}.
        </p>
      ),
    },
    {
      h: "Children",
      body: <p>This site is not meant for anyone under 18, and we do not knowingly collect information from children.</p>,
    },
    {
      h: "Changes",
      body: <p>If we change this policy, the new version will appear here with a new date. Partners are always named here before any information goes to them.</p>,
    },
  ];

  return (
    <>
      <Navbar />
      <main id="main">
        <header className="glow border-b border-[var(--bpg-border)] py-16 sm:py-20">
          <div className="wrap">
            <p className="eyebrow text-[var(--bpg-warm)]">Privacy</p>
            <h1 className="display-xl mt-4 text-[var(--bpg-ink)]">Privacy policy</h1>
            <p className="mt-4 text-sm text-[var(--bpg-muted)]">Last updated {UPDATED}</p>
          </div>
        </header>

        <div className="wrap py-16 sm:py-20">
          {SECTIONS.map((s) => (
            <section
              key={s.h}
              className="grid gap-x-12 gap-y-3 border-t border-[var(--bpg-border)] py-9 first:border-t-0 first:pt-0 md:grid-cols-[14rem_minmax(0,44rem)]"
            >
              <h2 className="serif text-[1.3rem] font-semibold leading-snug text-[var(--bpg-ink)]">{s.h}</h2>
              <div className="policy space-y-4 text-[1rem] leading-[1.75] text-[#26384A]">{s.body}</div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

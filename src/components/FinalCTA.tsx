import OfferForm from "./OfferForm";
import { site } from "@/data/site";

/**
 * The closing band is navy: the one dark surface on the page besides the
 * footer, so the last thing a reader meets is the most serious-looking, with
 * the single brass button on it.
 *
 * It has no id="offer" of its own when the page already carries one higher up
 * (the homepage hero, /contact) — two would make the navbar button a coin toss.
 */
export default function FinalCTA({ anchor = true }: { anchor?: boolean }) {
  return (
    <section id={anchor ? "offer" : undefined} className="glow-close scroll-mt-24 py-20 sm:py-28">
      <div className="wrap">
        <div className="mx-auto max-w-[42rem] text-center">
          <hr className="rule-accent centered" />
          <h2 className="display-lg mt-6 text-[var(--bpg-on-navy)]">Start with the address.</h2>
          <p className="lede mt-5 text-[var(--bpg-on-navy-muted)]">
            One field. We will look at the parcel and the comparable sales, then come back with a
            number and the working behind it. No obligation, and no pressure if the answer is that
            you should list it instead.
          </p>
          <div className="form-panel mx-auto mt-9 max-w-[36rem] p-5 text-left sm:p-6">
            <OfferForm bare />
          </div>
          <p className="mt-8 text-sm text-[var(--bpg-on-navy-muted)]">
            Serving {site.market.cities.join(", ")} and unincorporated {site.market.county}.
          </p>
        </div>
      </div>
    </section>
  );
}

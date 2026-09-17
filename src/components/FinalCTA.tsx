import OfferForm from "./OfferForm";
import { site } from "@/data/site";

export default function FinalCTA() {
  return (
    <section id="offer" className="glow-close py-20 sm:py-28">
      <div className="wrap">
        <div className="mx-auto max-w-[42rem] text-center">
          <hr className="rule-accent centered" />
          <h2 className="display-lg mt-6 text-[var(--bpg-ink)]">Start with the address.</h2>
          <p className="lede mt-5 text-[var(--bpg-muted)]">
            One field. We will look at the parcel and the comparable sales, then come back with a
            number and the working behind it. No obligation, and no pressure if the answer is that
            you should list it instead.
          </p>
          <div className="mx-auto mt-9 max-w-[36rem] text-left">
            <OfferForm />
          </div>
          <p className="mt-8 text-sm text-[var(--bpg-muted)]">
            Serving {site.market.cities.join(", ")} and unincorporated {site.market.county}.
          </p>
        </div>
      </div>
    </section>
  );
}

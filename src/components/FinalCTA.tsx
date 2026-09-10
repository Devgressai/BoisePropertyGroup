import OfferForm from "./OfferForm";
import { site } from "@/data/site";

export default function FinalCTA() {
  return (
    <section id="offer" className="bg-[var(--bpg-primary)] py-20 text-white sm:py-28">
      <div className="wrap">
        <div className="max-w-[42rem]">
          <hr className="rule-accent" />
          <h2 className="display-lg mt-6 text-white">Start with the address.</h2>
          <p className="lede mt-5 text-white/80">
            One field. We will look at the parcel and the comparable sales, then come back with a
            number and the working behind it. No obligation, and no pressure if the answer is that
            you should list it instead.
          </p>
          <div className="mt-9">
            <OfferForm tone="dark" />
          </div>
          <p className="mt-8 text-sm text-white/65">
            Serving {site.market.cities.join(", ")} and unincorporated {site.market.county}.
          </p>
        </div>
      </div>
    </section>
  );
}

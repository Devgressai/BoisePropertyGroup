import { calculateOffer, formatUsd } from "@/lib/offer-math";

/**
 * A sample offer worksheet, drawn as the sheet of paper a seller receives.
 *
 * It is the product, shown: four lines and a total. The figures are computed
 * from the same formula as the calculator (src/lib/offer-math.ts), for one
 * stated example, and the sheet is labelled a sample. It is not a record of a
 * purchase and must never be captioned as one.
 */
export default function OfferSheet({ className = "" }: { className?: string }) {
  const o = calculateOffer(500_000, "significant");
  const rows: [string, string][] = [
    ["Value once the work is done", formatUsd(o.arv)],
    ["The work it needs", "−" + formatUsd(o.repairs)],
    [`Holding ${o.months} months, and reselling`, "−" + formatUsd(o.holding)],
    ["Our margin", "−" + formatUsd(o.margin)],
  ];
  return (
    <figure className={`bg-white text-[var(--bpg-ink)] shadow-[0_30px_60px_-28px_rgba(14,34,56,0.55)] ${className}`}>
      <div className="flex items-center justify-between border-b border-[var(--bpg-ink)] px-5 py-3">
        <p className="eyebrow !text-[0.68rem]">Offer worksheet</p>
        <p className="eyebrow !text-[0.68rem] text-[var(--bpg-warm)]">Sample</p>
      </div>
      <dl className="px-5">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4 border-b border-[var(--bpg-border)] py-2.5 text-[0.88rem]">
            <dt className="text-[var(--bpg-muted)]">{k}</dt>
            <dd className="whitespace-nowrap tabular-nums">{v}</dd>
          </div>
        ))}
        <div className="flex items-baseline justify-between gap-4 py-3.5">
          <dt className="text-[0.88rem] font-semibold">Our offer</dt>
          <dd className="serif whitespace-nowrap text-[1.7rem] font-semibold leading-none tabular-nums">{formatUsd(o.offer)}</dd>
        </div>
      </dl>
      <figcaption className="border-t border-[var(--bpg-border)] bg-[var(--bpg-sand)] px-5 py-3 text-[0.78rem] leading-snug text-[var(--bpg-muted)]">
        Every offer arrives like this: four lines you can check. Example shown is a house needing
        significant repairs.
      </figcaption>
    </figure>
  );
}

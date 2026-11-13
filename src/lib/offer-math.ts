/**
 * The offer formula, stated in code so the homepage can show its work.
 *
 * ⚠️ OWNER-SUPPLIED (2026-11-13): "same calc that we have on sierra property
 * buyers". The rates below are the same rates as that model, on the owner's
 * instruction. Do not change a rate without the owner's word, and keep the
 * homepage labelling it an illustration, not a quote.
 *
 * WORDING RULE: the margin line is never labelled "profit" and never presented
 * as a markup percentage. It is the spread the business runs on, in plain words.
 */

export type ConditionKey = "ready" | "cosmetic" | "significant" | "major";

export interface ConditionTier {
  key: ConditionKey;
  label: string;
  /** What a seller would recognise about their own house. */
  hint: string;
  /** Cost of the work as a share of after-repair value. */
  repairRate: number;
  /** Months we expect to own it, which drives the holding cost. */
  months: number;
  /**
   * The extra discount an as-it-stands retail buyer takes on the open market,
   * beyond the bare cost of the work: the buyer pool for a house needing real
   * work is thin and harder to finance. Zero for a move-in-ready house.
   */
  asIsDiscount: number;
}

export const CONDITION_TIERS: ConditionTier[] = [
  { key: "ready", label: "Move-in ready", hint: "Updated and clean; little more than paint and cleaning", repairRate: 0.02, months: 2, asIsDiscount: 0 },
  { key: "cosmetic", label: "Cosmetic updates", hint: "Dated kitchen or baths, tired flooring, but sound", repairRate: 0.06, months: 3, asIsDiscount: 0.02 },
  { key: "significant", label: "Significant repairs", hint: "Roof, systems, or several rooms need real work", repairRate: 0.125, months: 4, asIsDiscount: 0.05 },
  { key: "major", label: "Major work", hint: "Structural, fire damage, or long vacant; not livable now", repairRate: 0.2, months: 6, asIsDiscount: 0.09 },
];

/** Cost of selling it again: title, escrow and the commission on our resale. */
const RESALE_COST_RATE = 0.02;
/** Monthly holding: property tax, insurance, utilities, the cost of our capital. */
const MONTHLY_CARRY_RATE = 0.0035;
/** The spread the business runs on, as a share of after-repair value. */
const MARGIN_RATE = 0.09;
/** Listing side: agent commission and the seller's own closing costs. */
const COMMISSION_RATE = 0.05;
const SELLER_CLOSING_RATE = 0.01;

/** Bounds of the worksheet's value input. Outside them the model is not meant to be read. */
export const ARV_MIN = 150_000;
export const ARV_MAX = 1_500_000;
export const ARV_DEFAULT = 500_000;
export const CONDITION_DEFAULT: ConditionKey = "significant";

/** Whatever was typed, as a whole-dollar value inside the bounds. */
export function clampArv(input: unknown): number {
  const n = typeof input === "number" ? input : Number(String(input ?? "").replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(n) || n <= 0) return ARV_MIN;
  return Math.min(ARV_MAX, Math.max(ARV_MIN, Math.round(n / 1000) * 1000));
}

/** A non-finite or negative value is treated as zero rather than propagated. */
const safe = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

const tierOf = (c: ConditionKey) => CONDITION_TIERS.find((t) => t.key === c) ?? CONDITION_TIERS[1];

export function calculateOffer(rawArv: number, condition: ConditionKey) {
  const arv = safe(rawArv);
  const tier = tierOf(condition);
  const repairs = Math.round(arv * tier.repairRate);
  const holding = Math.round(arv * (RESALE_COST_RATE + MONTHLY_CARRY_RATE * tier.months));
  const margin = Math.round(arv * MARGIN_RATE);
  const offer = Math.max(0, arv - repairs - holding - margin);
  return { arv, repairs, holding, margin, offer, months: tier.months };
}

/** List it as it stands: the buyer prices in the work; you fund none of it. */
export function calculateAsIsListing(rawArv: number, condition: ConditionKey) {
  const arv = safe(rawArv);
  const tier = tierOf(condition);
  const price = Math.round(arv * (1 - tier.repairRate - tier.asIsDiscount));
  const commission = Math.round(price * COMMISSION_RATE);
  const closing = Math.round(price * SELLER_CLOSING_RATE);
  const months = 2;
  const carrying = Math.round(arv * MONTHLY_CARRY_RATE * months);
  return { price, commission, closing, carrying, months, net: price - commission - closing - carrying };
}

/**
 * Do the work, then list. Deliberately generous to listing: the repairs are
 * deducted because you have to fund them to reach the after-repair value.
 */
export function calculateListing(rawArv: number, condition: ConditionKey) {
  const arv = safe(rawArv);
  const tier = tierOf(condition);
  const repairs = Math.round(arv * tier.repairRate);
  const commission = Math.round(arv * COMMISSION_RATE);
  const closing = Math.round(arv * SELLER_CLOSING_RATE);
  const months = tier.months + 2;
  const carrying = Math.round(arv * MONTHLY_CARRY_RATE * months);
  return { price: arv, repairs, commission, closing, carrying, months, net: arv - repairs - commission - closing - carrying };
}

/** A ± band around a figure, so nothing reads as false precision. */
export function range(value: number, pct = 0.04) {
  const d = Math.round(value * pct);
  return { low: value - d, high: value + d };
}

export const formatUsd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

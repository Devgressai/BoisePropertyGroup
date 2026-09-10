/**
 * Prose rules for commercial pages — ONE definition, enforced in two places.
 *
 * These were written only as vitest assertions, which meant they could not run
 * locally (no node_modules here) and only failed in CI. That cost a red build
 * on a change that made the page BETTER: the multifamily page said "six
 * systems, and they do not agree", the seventh boundary was found, the sentence
 * became "seven systems, and no two of them agree" — a stronger statement — and
 * a test matching the literal phrase "do not agree" failed it.
 *
 * Two lessons are baked in here. Assert the MEANING, with enough alternatives
 * that better prose still passes; and keep the rules somewhere the local gate
 * can run them, so prose is not validated only by a remote build.
 */

/** Phrasings that would imply a transaction history we do not have. */
export const IMPLIES_HISTORY = [
  /\bwe(?:'ve| have)\s+(?:bought|purchased|acquired|closed|sold)\b/i,
  /\bwe (?:buy|close) (?:hundreds|dozens|\d+)\b/i,
  /\bour (?:portfolio|track record|past (?:deals|acquisitions))\b/i,
  /\byears of experience\b/i,
  /\btrusted by\b/i,
];

/** Landlord-exit phrasing. Residential owns every one of these. */
export const LANDLORD_EXIT = [
  /tired of (?:managing|being a landlord)/i,
  /no repairs,?\s*no fees/i,
  /sell your rental fast/i,
  /problem tenants?/i,
  /we buy houses/i,
];

/** Anything that promises an appraisal. We are the buyer; we do not appraise. */
export const APPRAISAL_PROMISE = [
  /free (?:valuation|appraisal|property analysis)/i,
  /what(?:'s| is) your (?:building|property) worth/i,
  /we(?:'ll| will) tell you what it(?:'s| is) worth/i,
  /instant (?:offer|valuation)/i,
  /\bwe appraise\b/i,
];

/** Undated market statistics, which are prohibited outright. */
export const MARKET_STATISTIC = [
  /\b\d+(?:\.\d+)?\s*(?:%|percent)\s*(?:cap|vacancy|absorption)/i,
  /\bcap rate of\b/i,
  /\$\d[\d,]*\s*(?:per|\/)\s*(?:square )?f(?:oo|)t/i,
];

/**
 * Things a page MUST say. Each is a set of alternatives on the same point, so
 * rewording survives and only dropping the point fails.
 */
export const REQUIRED = {
  multifamily: [
    { name: "unit floor in visible copy", any: [/\bfive units\b/i, /\bmore than four units\b/i, /\bfive or more units\b/i] },
    { name: "rent roll", any: [/\brent roll\b/i] },
    { name: "net operating income", any: [/\bnet operating income\b/i, /\bNOI\b/] },
    {
      name: "says the systems disagree",
      any: [/\bdo not agree\b/i, /\bdisagree\b/i, /\bno two of them agree\b/i, /\bdepends on (?:which|the question)\b/i],
    },
    {
      name: "refuses a single legal definition",
      any: [/\bnot a legal fact\b/i, /\bno one system\b/i, /\bno single\b/i, /\bno two of them\b/i],
    },
  ],
};

/** Concessions that must stay on the residential side. */
export const MUST_NOT_CLAIM = {
  multifamily: [{ name: "does not claim duplex/triplex/fourplex", pattern: /\bwe buy (?:duplex|triplex|fourplex)/i }],
};

export function checkProse(page, prose) {
  const failures = [];
  const scan = (list, label) => {
    for (const pat of list) if (pat.test(prose)) failures.push(`${label}: ${pat}`);
  };
  scan(IMPLIES_HISTORY, "implies a completed transaction");
  scan(LANDLORD_EXIT, "landlord-exit phrasing");
  scan(APPRAISAL_PROMISE, "promises an appraisal");
  scan(MARKET_STATISTIC, "undated market statistic");
  for (const req of REQUIRED[page.assetClass] ?? []) {
    if (page.kind !== "asset") continue;
    if (!req.any.some((p) => p.test(prose))) failures.push(`missing required point — ${req.name}`);
  }
  for (const rule of MUST_NOT_CLAIM[page.assetClass] ?? []) {
    if (rule.pattern.test(prose)) failures.push(`must not claim — ${rule.name}`);
  }
  return failures;
}

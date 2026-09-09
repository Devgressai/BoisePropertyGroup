/** Arithmetic red-team over the statistics registries. Exits non-zero on failure. */
import { readFileSync } from "node:fs";
const S = [
  ...JSON.parse(readFileSync("data/idaho/statistics/ada-statistics.json", "utf8")).statistics,
  ...JSON.parse(readFileSync("data/idaho/statistics/ada-statistics-compass.json", "utf8")).statistics,
];
const claims = JSON.parse(readFileSync("data/idaho/evidence/ada-claims.json", "utf8")).claims;
const v = (id) => S.find((x) => x.id === id)?.value;
let fail = 0;
const chk = (n, p, d) => { if (!p) fail++; console.log(`${p ? "  PASS" : "x FAIL"}  ${n.padEnd(46)} ${d}`); };

const starAda = v("star-pop-2024-ada-part"), starAll = v("star-pop-2024");
chk("Star county parts vs whole place", starAda != null && starAll != null && starAda < starAll, `${starAda} of ${starAll}`);

const parts = ["boise", "meridian", "eagle", "kuna", "star", "garden-city", "unincorporated-ada-county"]
  .map((k) => v(`compass-${k}-pop-2024`)).filter((x) => x != null);
const sum = parts.reduce((a, b) => a + b, 0), tot = v("compass-ada-pop-2024");
chk("COMPASS parts sum to county total", sum === tot, `${sum} vs ${tot}`);

const aci = ["boise", "meridian", "kuna", "eagle", "star", "garden-city", "outside-acis"]
  .map((k) => v(`compass-aci-${k}-2024`)).filter((x) => x != null).reduce((a, b) => a + b, 0);
chk("ACI parts sum to county total", aci === tot, `${aci} vs ${tot}`);

for (const c of ["boise-city", "meridian", "eagle", "kuna", "star", "garden-city"]) {
  const a = v(`${c}-pop-2020`), b = v(`${c}-pop-2024`), g = v(`${c}-growth-2020-2024`);
  const calc = a && b ? Math.round(((b - a) / a) * 1000) / 10 : null;
  chk(`growth reproducible: ${c}`, calc === g, `${g}% vs ${calc}%`);
}

chk("Census and COMPASS differ as documented", v("ada-pop-2024") !== tot, `${v("ada-pop-2024")} vs ${tot}`);
chk("no naked statistics", S.filter((s) => !s.year || !s.sourceId || !s.dataset).length === 0, "");

const irr = claims.find((c) => c.id === "ada-27-irrigation-entities");
chk("irrigation enumeration deduplicated",
  !!irr?.enumeration && irr.enumeration.length === new Set(irr.enumeration.map((x) => x.toLowerCase())).size,
  `${irr?.enumeration?.length} entries`);

console.log(fail ? `\n${fail} FAILURES` : "\nRED-TEAM ARITHMETIC: PASS");
process.exit(fail ? 1 : 0);

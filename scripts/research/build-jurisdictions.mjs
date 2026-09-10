/**
 * Ada County jurisdiction database — which authority performs which property
 * function, for which places.
 *
 * The whole point is the SPLIT: land use in unincorporated Ada County is the
 * county's; inside a city it is that city's. Septic is a health district's.
 * Roads are the highway district's, even inside cities. A page that tells a
 * Boise seller to "contact Ada County" about zoning is wrong.
 *
 * Any row without a verified sourceId is emitted with status UNVERIFIED and
 * must not drive published copy.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const sources = JSON.parse(readFileSync("data/idaho/sources/ada-county-sources.json", "utf8")).sources;
const entities = JSON.parse(readFileSync("data/idaho/entities/ada-county-entities.json", "utf8")).entities;
const verified = new Set(sources.filter((s) => s.status === "VERIFIED").map((s) => s.id));

const CITIES = entities.filter((e) => e.entityType === "CITY").map((e) => e.id);
const UNINC = "area:unincorporated-ada";
const ALL = [...CITIES, UNINC];

// [function, appliesTo, authority, officialResource, sourceIds, note]
const ROWS = [
  ["assessment", ALL, "Ada County Assessor", "https://adacounty.id.gov/assessor/",
    ["ada-assessor-real-manufactured"], "County-wide. All non-exempt property assessed at market value as of January 1."],
  ["homeowner-tax-exemption", ALL, "Ada County Assessor", "https://adacounty.id.gov/assessor/tax-relief-programs/homeowners-exemption/",
    ["ada-assessor-homeowners-exemption", "idcode-63-602g"], "Applied for through the county Assessor regardless of which city the property sits in."],
  ["roads", ALL, "Ada County Highway District", null,
    ["idcode-40-1406", "idcode-40-1415", "ada-county-transportation"],
    "Statute bars cities in a countywide highway district from maintaining city highways or taxing for them. Ada County itself states it controls no roadway infrastructure. State highways remain with the Idaho Transportation Department."],
  ["septic", ALL, "Central District Health — Environmental Health Division", "https://cdh.idaho.gov/environmental-health/water-wastewater-septic/",
    ["cdh-septic"], "A public health district, not a city or county building department. Covers Ada, Boise, Elmore and Valley counties."],
  ["land-use-planning", [UNINC], "Ada County Development Services — Planning Division", "https://adacounty.id.gov/developmentservices/",
    ["ada-dev-services"], "UNINCORPORATED ONLY. 64,427 residents."],
  ["plats-private-roads-hillside-floodplain-boundary", [UNINC], "Ada County Development Services — Engineering & Surveying Division", "https://adacounty.id.gov/developmentservices/",
    ["ada-dev-services"], "UNINCORPORATED ONLY. Covers preliminary plats, drainage, private roads, hillside applications, floodplain permits and boundary adjustments."],
  ["building-permits", [UNINC], "Ada County Development Services — Building Division", "https://adacounty.id.gov/developmentservices/",
    ["ada-dev-services"], "The county page does not state whether building inspection extends inside cities; do not assert that it does."],
  ["sewer", ["city:boise-city"], "City of Boise Public Works", "https://www.cityofboise.org/departments/public-works/sewer/",
    ["boise-sewer"], "Connection is MANDATORY for residential and commercial buildings inside Boise. Contrast with septic in unincorporated county."],
  ["sewer", [UNINC], "Central District Health (on-site septic)", "https://cdh.idaho.gov/environmental-health/water-wastewater-septic/",
    ["cdh-septic"], "On-site subsurface sewage disposal, permitted by the health district."],
  ["sewer", ["city:meridian","city:eagle","city:kuna","city:star","city:garden-city"], null, null, [], "NOT RESEARCHED per city."],
  ["water-rights", ALL, "Idaho Department of Water Resources", "https://idwr.idaho.gov/water-rights/domestic-exemption/",
    [], "Domestic-use definition is statutory (42-111). IDWR page NOT yet retrieved."],
  ["land-use-planning", ["city:boise-city"], "City of Boise Planning and Development Services", "https://www.cityofboise.org/departments/planning-and-development-services/", ["boise-pds"], "Five divisions incl. Building, which issues permits and oversees development in the city."],
  ["land-use-planning", ["city:star"], "City of Star Planning & Zoning", "https://staridaho.org/1205/Planning-Zoning", ["star-planning-zoning","star-faq"], "Administers Star's Unified Development Code. One-time administrative two-lot division available."],
  ["land-use-planning", ["city:eagle"], "City of Eagle Planning and Zoning Department", "https://www.cityofeagle.org/185/Planning-Zoning-Department", ["eagle-planning"], "Administers the Zoning Ordinance, Land Subdivision Ordinance, FLOOD CONTROL ORDINANCE and Comprehensive Plan."],
  ["land-use-planning", ["city:garden-city"], "Garden City Planning Division", "https://gardencityidaho.org/departments/development-services/planning-services/", ["gardencity-planning"], "Annexation, zoning, CUPs, design review, signage, subdivisions."],
  ["land-use-planning", ["city:kuna"], "City of Kuna Planning & Zoning", "https://www.kunacity.id.gov/FAQ.aspx", ["kuna-faq"], "Every property in city limits is zoned; Kuna Municipal Code 5-3-2 is the Official Land Use Table, closed-list (unlisted use = prohibited)."],
  ["land-use-planning", ["city:meridian"], "City of Meridian Community Development — Planning Division", "https://meridiancity.org/community-development/planning/", ["meridian-building-permits-aug-2025"], "Meridian HTML 403s to automated fetch; sourced via the city's PDF permit reports."],
  ["building-permits", CITIES, null, null, [], "Presumed city-level. Only Boise is sourced (PDS Building Division). Not verified for the other five."],
  ["code-enforcement", [UNINC], "Ada County Code Enforcement (Development Services / Sheriff)", "https://adacounty.id.gov/sheriff/services/code-enforcement/",
    ["ada-sheriff-code-enforcement"], "UNINCORPORATED ONLY. The county expressly does NOT enforce within city limits."],
  ["code-enforcement", CITIES, "the city's own municipal agency", null,
    ["ada-sheriff-code-enforcement"], "Ada County directs city residents to their municipal agency. The specific city agency has not been identified per city."],
  ["recording", ALL, "Ada County Clerk/Recorder", "https://adacounty.id.gov/clerk/property-records/",
    ["ada-property-records"], "County-wide regardless of city. Recorded documents are public under Idaho Code 31-2419; PII redaction is the submitter's duty."],
  ["tax-collection", ALL, "Ada County Treasurer (ex officio tax collector)", "https://adacounty.id.gov/treasurer/",
    ["ada-treasurer"], "Collects for ALL taxing districts including cities and schools. The Assessor values; the Treasurer collects."],
  ["public-administration-of-estates", ALL, "Ada County Treasurer (ex officio public administrator)", "https://adacounty.id.gov/treasurer/",
    ["ada-treasurer"], "Administers estates of decedents with no one to administer them."],
  ["gis-parcel-records", ALL, "Ada County Assessor", "https://adacounty.id.gov/assessor/property-assessments-records/assessors-property-records/",
    ["ada-assessor-property-records"], "County-wide. The Assessor also manages ADDRESSING for all parcels in the county. Records of Survey and subdivision plats available here."],
  ["addressing", ALL, "Ada County Assessor", "https://adacounty.id.gov/assessor/property-assessments-records/assessors-property-records/",
    ["ada-assessor-property-records"], "County-wide."],
];

const rows = [];
for (const [fn, applies, authority, resource, sourceIds, note] of ROWS) {
  for (const entity of applies) {
    const ok = sourceIds.length > 0 && sourceIds.every((s) => verified.has(s));
    rows.push({
      function: fn, entity, responsibleAuthority: authority, officialResource: resource,
      sourceIds, status: ok ? "VERIFIED" : (authority ? "UNVERIFIED" : "UNRESEARCHED"), note,
    });
  }
}

mkdirSync("data/idaho/jurisdictions", { recursive: true });
writeFileSync("data/idaho/jurisdictions/ada-jurisdictions.json", JSON.stringify({
  generatedAt: "2026-09-09", generator: "scripts/research/build-jurisdictions.mjs",
  rule: "A row that is not VERIFIED must not drive published copy. An UNRESEARCHED function means no page may state who performs it.",
  totalRows: rows.length, rows,
}, null, 2));

const byStatus = {};
for (const r of rows) byStatus[r.status] = (byStatus[r.status] ?? 0) + 1;
console.log(`jurisdiction rows: ${rows.length}`, JSON.stringify(byStatus));
const fns = [...new Set(rows.map((r) => r.function))];
console.log("\nfunction                                         verified/total");
for (const f of fns) {
  const rs = rows.filter((r) => r.function === f);
  console.log(`  ${f.padEnd(48)} ${rs.filter((r) => r.status === "VERIFIED").length}/${rs.length}`);
}
console.log("\nUNRESEARCHED functions (no page may state who performs these):");
console.log("  " + fns.filter((f) => rows.filter((r) => r.function === f).every((r) => r.status === "UNRESEARCHED")).join(", "));

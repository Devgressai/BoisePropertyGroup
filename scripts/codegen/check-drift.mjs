/** Fails if generated data is stale relative to the registries. */
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";
let fail = 0;
for (const [gen, out] of [
  ["scripts/codegen/build-geography.mjs", "src/data/geography.ts"],
  ["scripts/codegen/build-claims.mjs", "src/data/claims.ts"],
]) {
  const before = readFileSync(out, "utf8");
  execSync(`node ${gen}`, { stdio: "ignore" });
  const after = readFileSync(out, "utf8");
  const ok = before === after;
  if (!ok) fail++;
  console.log(`${ok ? "  PASS" : "x FAIL"}  ${out}${ok ? "" : " — regenerate and commit"}`);
}
console.log(fail ? "\nCODEGEN DRIFT DETECTED" : "\nCODEGEN: in sync");
process.exit(fail ? 1 : 0);

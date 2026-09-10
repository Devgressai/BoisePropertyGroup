#!/usr/bin/env node
/**
 * Extracts committed PDF sources to committed text, so the quote audit has an
 * artifact it can actually re-open.
 *
 * This exists because the audit was verifying six claims against files in
 * /tmp. Locally it passed; in CI those files do not exist. The PDFs themselves
 * were committed all along — the EXTRACTION was not, which meant the evidence
 * for those claims was, in practice, un-re-checkable by anyone but me on this
 * machine. That is not evidence.
 *
 * The extracted text is committed alongside the PDF and treated as generated
 * output: regenerate with this script, and CI checks it has not drifted.
 *
 * Requires pdftotext (poppler). Not available in CI, which is deliberate — CI
 * checks the committed text, it does not re-extract.
 */
import { readdirSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, basename } from "node:path";

const OUT = "data/idaho/raw/extracted";
mkdirSync(OUT, { recursive: true });

const dirs = ["data/idaho/raw/pdf", "data/idaho/raw/cache"];
let n = 0;
for (const dir of dirs) {
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter((x) => x.toLowerCase().endsWith(".pdf"))) {
    const src = join(dir, f);
    const dest = join(OUT, basename(f, ".pdf") + ".txt");
    let text;
    try {
      text = execFileSync("pdftotext", ["-layout", "-enc", "UTF-8", src, "-"], {
        encoding: "utf8",
        maxBuffer: 64 * 1024 * 1024,
      });
    } catch (err) {
      console.error(`  SKIP ${f} — ${err.message.split("\n")[0]}`);
      continue;
    }
    writeFileSync(dest, text);
    n++;
    console.log(`  ${dest}  (${text.length.toLocaleString()} chars)`);
  }
}
console.log(`\nextracted ${n} PDF(s)`);

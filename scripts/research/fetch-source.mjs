/**
 * Primary-source fetcher for Phase 2 research.
 *
 * Several Idaho government sites (achdidaho.org, adacounty.id.gov) return 403
 * to the default agent. They serve normally to a browser UA. This fetches with
 * one, CACHES THE RAW HTML under data/idaho/raw/cache/, and prints extracted
 * text — so every claim traces back to a stored copy of the page it came from
 * and can be re-checked later without re-fetching.
 *
 * Usage: node scripts/research/fetch-source.mjs <url> [grep-regex]
 */
import { writeFileSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";
const CACHE = "data/idaho/raw/cache";
mkdirSync(CACHE, { recursive: true });

export function cachePathFor(url) {
  return `${CACHE}/${createHash("sha1").update(url).digest("hex").slice(0, 16)}.html`;
}

export async function fetchSource(url, { force = false } = {}) {
  const path = cachePathFor(url);
  if (existsSync(path) && !force) return { html: readFileSync(path, "utf8"), path, cached: true };
  const res = await fetch(url, {
    headers: { "User-Agent": UA, "Accept": "text/html,application/xhtml+xml", "Accept-Language": "en-US,en;q=0.9" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const html = await res.text();
  writeFileSync(path, html);
  writeFileSync(path.replace(/\.html$/, ".meta.json"), JSON.stringify({
    url, fetchedAt: new Date().toISOString(), status: res.status, finalUrl: res.url, bytes: html.length,
  }, null, 2));
  return { html, path, cached: false };
}

/** Strip scripts/styles/markup and collapse whitespace into readable lines. */
export function toText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<(br|\/p|\/div|\/li|\/h[1-6]|\/tr)\s*>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&#0?39;/g, "'")
    .replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#8217;/g, "'")
    .split("\n").map((l) => l.replace(/[ \t]+/g, " ").trim()).filter((l) => l.length > 2)
    .join("\n").replace(/\n{3,}/g, "\n\n");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [url, pattern] = process.argv.slice(2);
  const { html, path, cached } = await fetchSource(url);
  const text = toText(html);
  console.error(`# ${cached ? "cached" : "fetched"} -> ${path}  (${html.length} bytes html, ${text.length} chars text)`);
  if (pattern) {
    const re = new RegExp(pattern, "i");
    const lines = text.split("\n");
    lines.forEach((l, i) => { if (re.test(l)) console.log(`${String(i).padStart(5)}| ${l}`); });
  } else console.log(text.slice(0, 6000));
}

#!/usr/bin/env node
/**
 * Tell IndexNow engines (Bing, Yandex, Seznam, Naver) about every URL in the
 * LIVE sitemap. Run after a deploy has landed — pinging before the page is
 * served asks an engine to crawl the old version.
 *
 * The key file is public/<key>.txt; IndexNow fetches it from the site root to
 * prove the ping came from the site's owner. Google does not take IndexNow.
 *
 *   node scripts/seo/indexnow.mjs            # ping every sitemap URL
 *   node scripts/seo/indexnow.mjs --dry-run  # list what would be sent
 */
const HOST = "boisepropertygroup.com";
const KEY = "6885fa20a1b4081e99101ff3cc989df7";
const dryRun = process.argv.includes("--dry-run");

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (urlList.length === 0) throw new Error("sitemap returned no <loc> entries");

const keyFile = await fetch(`https://${HOST}/${KEY}.txt`);
if (!keyFile.ok || (await keyFile.text()).trim() !== KEY) {
  throw new Error(`key file not live at https://${HOST}/${KEY}.txt — deploy first`);
}

console.log(`${urlList.length} URLs from the live sitemap`);
if (dryRun) {
  console.log(urlList.join("\n"));
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: HTTP ${res.status}`, (await res.text()).slice(0, 200));
if (![200, 202].includes(res.status)) process.exit(1);

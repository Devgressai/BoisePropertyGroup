# Capturing Cloudflare-gated code libraries with Chrome over CDP

`scripts/research/fetch-source.mjs` returns **HTTP 403** for every municipal code
library that sits behind a Cloudflare bot challenge:

| Host | Serves | Fetcher |
|---|---|---|
| `codelibrary.amlegal.com` | Boise, Eagle, Ada County | 403 |
| `ecode360.com` | Garden City | 403 |
| `www.codepublishing.com` | (redirects to ecode360) | 403 |
| `library.municode.com` | Meridian, Star, Kuna | 200 but Angular shell only |
| `api.municode.com` | the same three, as JSON | **200 — use this instead** |

For Municode, skip the SPA and hit the JSON API directly (see the bottom of this
file). For amlegal and ecode360, drive a real Chrome.

## The whole trick is the User-Agent

Chrome's own headless UA contains the literal string `HeadlessChrome`, and
Cloudflare gates on it. Override it and the challenge solves itself in about ten
seconds. Nothing else about the browser needs to be disguised.

`--dump-dom` does **not** work: it snapshots while the interstitial is still up.
You get a 28 KB page whose title is `Just a moment...`, sometimes with the text
"Verification successful. Waiting for … to respond" — which is the tell that the
UA is right but you sampled too early. `--virtual-time-budget` does not fix it
either; virtual time does not wait on the network. You need real elapsed time,
so drive the browser over CDP.

## 1. Launch once, keep it up

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=old --disable-gpu --no-sandbox --no-first-run \
  --remote-debugging-port=9333 --user-data-dir=/tmp/cprof --window-size=1280,2000 \
  --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36" \
  about:blank &
```

`--user-data-dir` persists the clearance cookie, so only the first request to a
host pays the ~10s challenge. Keep the browser alive across a batch of fetches
and stop it when you are done:

```bash
pkill -f "remote-debugging-port=9333"
```

## 2. Verify the UA before fetching anything

```bash
curl -s http://127.0.0.1:9333/json/version | grep User-Agent
```

If this still says `HeadlessChrome`, every fetch will be challenged. This one
check explains essentially every failure mode of this recipe.

## 3. `cdp.mjs`

Node 18+ only (uses the global `fetch` and `WebSocket`). Usage:
`node cdp.mjs <url> [wait_ms]` — prints the rendered DOM to stdout.

```js
const port = 9333;
const target = process.argv[2];
const res = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(target)}`, {method:'PUT'});
const tab = await res.json();
const ws = new WebSocket(tab.webSocketDebuggerUrl);
let id=0; const pending=new Map();
const send=(method,params={})=>new Promise(r=>{const i=++id;pending.set(i,r);ws.send(JSON.stringify({id:i,method,params}));});
await new Promise(r=>ws.addEventListener('open',r));
ws.addEventListener('message',e=>{const m=JSON.parse(e.data); if(m.id&&pending.has(m.id)){pending.get(m.id)(m.result);pending.delete(m.id);}});
await new Promise(r=>setTimeout(r, Number(process.argv[3]||20000)));
const r2=await send('Runtime.evaluate',{expression:'document.documentElement.outerHTML',returnByValue:true});
process.stdout.write(r2?.result?.value||'');
await fetch(`http://127.0.0.1:${port}/json/close/${tab.id}`);
ws.close();
```

Wait 15000–25000 ms. Under ~12000 you will sometimes capture the interstitial.
**Always check `<title>` before trusting a capture** — `Just a moment...` means
you got the challenge, not the page.

## 4. Write the capture into the evidence cache

A capture that lives only in a scratchpad is not citable. Write it under the
fetcher's own hash naming so the artifact is found by the same lookup, and mark
its provenance so it can never quietly pass as a fetcher response:

```js
import { writeFileSync, readFileSync } from "node:fs";
import { cachePathFor } from "/ABSOLUTE/PATH/scripts/research/fetch-source.mjs";
const [url, file] = process.argv.slice(2);
const html = readFileSync(file, "utf8");
writeFileSync(cachePathFor(url), html);
writeFileSync(cachePathFor(url, "meta.json"), JSON.stringify({
  url, fetchedAt: new Date().toISOString(), status: 200, finalUrl: url,
  contentType: "text/html; charset=utf-8", bytes: html.length,
  fetchedVia: "chrome-cdp",
  note: "fetch-source.mjs returns HTTP 403 for this host (Cloudflare bot challenge). Captured as rendered DOM via local Chrome over CDP with a non-HeadlessChrome user agent. Content is the live page, not a fetcher response.",
}, null, 2));
```

Run it with the repo root as cwd — `fetch-source.mjs` resolves `CACHE` relatively.

`fetchedVia` is not cosmetic. check-evidence requires any artifact carrying it to
also carry a `note` saying why the fetcher could not be used, and prints the
count on every run. **Never write a CDP capture without both fields.**

### Why this artifact is legitimate

amlegal and ecode360 render server-side. The DOM Chrome returns *is* the served
document, tables and footnote definitions included — not a client-side
reconstruction. That is what makes the capture quotable. Do not use this recipe
on a site that assembles its content in the browser from an API without
recording that fact.

## 5. Navigating amlegal

Node ids are opaque (`0-0-0-9941`), so walk to them:

1. `/codes/<client>/latest/overview` — TOC links plus the version banner
   (`Code current through: Ord. …`). Always record that banner.
2. A title page lists its chapters; a chapter page lists its sections as
   `href="…/0-0-0-NNNN#JD_<section>"` — regex out `#JD_` to map section numbers
   to node ids in one pass.
3. `Next Doc` / `Previous Doc` chain at chapter level, not section level.

Client slugs are terse: `boise_id`, `eagleid`, `adacountyid`. A wrong slug
returns a 200 page titled `Not found`, so check the title.

## 6. Municode without a browser

No Chrome needed; the fetcher caches these fine and JSON counts as text.

```
api.municode.com/Clients/keyword?keyword=<city>      -> ClientID
api.municode.com/Products/clientId/<ClientID>        -> ProductID
api.municode.com/Jobs/latest/<ProductID>             -> job Id + BannerText (the version)
api.municode.com/codesToc/fullTree?productId=&jobId= -> every heading + nodeId
api.municode.com/CodesContent?productId=&jobId=&nodeId=&groupChunks=false
```

`Jobs/latest` takes a **ProductID**, not a ClientID — with a ClientID it returns
HTTP 204 and no body. `BannerText` carries the supplement number and the
"Codified through Ordinance No. …" line; quote it as the version. The same
response's `NewOrds` array lists ordinances **adopted but not yet codified** —
check it before treating the codified text as current.

## 7. Failure modes worth recognising

| Symptom | Cause |
|---|---|
| `<title>Just a moment...` | UA says HeadlessChrome, or the wait was too short |
| "Verification successful. Waiting for …" | UA is fine; you sampled too early |
| 28 KB page, every time | `--dump-dom` instead of CDP |
| amlegal page titled `Not found` | wrong client slug |
| Municode `Jobs/latest` returns 204 | passed a ClientID where a ProductID belongs |
| Cached `.html` that extracts 0 chars | a binary went through `res.text()` — see the guard in `fetch-source.mjs` |

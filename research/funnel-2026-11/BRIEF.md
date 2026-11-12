# Research + draft brief — Idaho knowledge guides (TOFU), Nov 2026

You are writing ONE evidence-backed guide for boisepropertygroup.com, a direct
property buyer in Ada County, Idaho. Repo: `~/BoisePropertyGroup`. The site's
whole edge is that every fact is traced to a primary source, quoted, and dated.
Read two existing guides first for voice and structure:
`src/data/guide-content.ts` (e.g. "selling-an-inherited-house-in-idaho",
"idaho-seller-disclosure-when-selling-as-is") and `src/data/guides.ts`.

## Hard rules (a violation means the work is discarded)

1. **Every factual assertion traces to a claim** with a primary source (Idaho
   Code at legislature.idaho.gov, Idaho court/agency sites, Ada County, city
   sites, eCFR, IRS). No blogs, law-firm pages, Zillow, Wikipedia, AI summaries.
2. **Quotes are verbatim** from the page you cached. Join separated passages
   with `...` only. Every `quotedLanguage` and `amendmentHistory` string must
   pass: `node scripts/validation/verify-quotes.mjs research/funnel-2026-11/<topic>/claims.json`
   (it must report your claims fully verified; PARTIAL = fail).
3. **Cache every source** with `node scripts/research/fetch-source.mjs <url> [grep-regex]`
   (stores raw HTML under data/idaho/raw/cache/; PDFs: then run
   `node scripts/research/extract-pdf-text.mjs` — read it first). For Idaho Code,
   cite the section page (`https://legislature.idaho.gov/statutesrules/idstat/titleNN/tNNchMM/sectNN-MMMM/`)
   and copy the compiler's history note verbatim into `amendmentHistory`.
   Check for FUTURE-DATED amendments (e.g. "effective July 1, 2027" versions);
   record `futureDatedAmendment: true|false`.
4. **Cite the section that contains the quoted language**, not a neighbour.
5. **Never apply law to a reader's facts.** Describe what the statute says,
   attributed, and point to an attorney. No legal/tax advice.
6. **Honesty about the business** — the company has NO transaction history, NO
   reviews, NO named staff. Never write "we've bought", "our clients", "years
   of experience", "trusted by", "hundreds of", numbers of deals, speed records.
   The ONLY business facts you may state (owner-confirmed): we buy with our own
   capital; purchases close through a local title company; the seller chooses
   the closing date; we buy in any condition; a three-week close is realistic.
   Do NOT claim: no fees / we pay closing costs / we don't assign contracts /
   cash in X days / we stop foreclosure. Never promise an appraisal or value.
7. **No numbers without a claim.** Any dollar figure, percentage, day count or
   deadline in prose must come from one of your (or an existing) claims.
8. If something can't be sourced, leave it out. A shorter true page beats a
   longer padded one. Never centroid geography; never carry a rule across a
   city limit; a county rule is not a city rule.

## Reuse before you research

Existing approved claims: `data/idaho/evidence/ada-claims.json` (127). Existing
sources: `data/idaho/sources/ada-county-sources.json`. Search them by topic
(`node -e` + `require`). Cite existing claim ids freely in your content — do not
duplicate them. Entity ids allowed (use only these): state:id county:ada
city:boise-city city:eagle city:garden-city city:kuna city:meridian city:star
area:unincorporated-ada region:treasure-valley.

## Deliverables — write ONLY inside `research/funnel-2026-11/<topic>/`

Do NOT edit any file under src/, data/idaho/evidence, data/idaho/sources, or
scripts/. (Writing new cache files under data/idaho/raw/ via the fetch script
is expected.) Do not git commit.

1. `sources.json` — `{ "sources": [ ... ] }`, each shaped EXACTLY like entries in
   ada-county-sources.json (id, title, publisher, organizationType, url,
   [retrievalUrl], sourceTier, jurisdiction, topic, publicationDate,
   updatedDate, accessedDate "2026-11-12", freshnessClass (STATUTORY for Idaho
   Code; SLOW-CHANGING / FAST-CHANGING otherwise), authorityNotes,
   stalenessRisk, claimsSupported, entitiesSupported, status "VERIFIED").
   Source id convention: `idcode-<section>` e.g. `idcode-32-912`. Skip any
   source already in the registry (reuse its id).
2. `claims.json` — `{ "claims": [ ... ] }`, shaped EXACTLY like ada-claims.json
   entries (id, claim, quotedLanguage, entity, topic, sourceIds, confidence
   HIGH|MEDIUM, jurisdiction, temporalStatus "CURRENT", amendmentHistory,
   futureDatedAmendment, approvedForPublication true, verifiedOn "2026-11-12",
   notes). Prefix every NEW claim id with your prefix (given below). Use
   `notes` for the traps (e.g. "must be stated with X").
3. `guide.json` — the page:
   ```json
   {
     "guide": { "slug": "...", "title": "≤ 43 chars", "h1": "...",
                "description": "≤ 160 chars, plain, no hype", "cluster": "<given>",
                "published": "2026-11-12", "updated": "2026-11-12" },
     "content": { "intro": ["..."], "sections": [ { "heading": "...", "body": ["..."], "claims": ["ids"] } ] }
   }
   ```
   - **intro[0] is the direct answer** to the page's main question in 2–3
     sentences (answer engines lift it). intro[1] = the not-legal-advice line.
   - 6–9 sections, ~1,500–2,500 words total. Headings are statements or the
     literal question a seller asks. Each section lists the claim ids it rests on.
   - Inline links allowed ONLY to existing internal paths, written
     `[label](/path)`: /how-it-works, /what-we-buy, /locations, /contact,
     /sell-my-house-fast-ada-county, /sell-my-house-fast-boise-id (and other
     city pages), /guides/<existing slug>. 2–4 links, where they genuinely help.
   - Final section: "Where we fit, and where we do not" — 2 short paragraphs,
     only the owner-confirmed facts, and say honestly when listing or another
     route serves the seller better.
4. `NOTES.md` — what you could NOT source, traps, and anything a reviewer
   should double-check. Be candid.

Finish by running the verify-quotes command above and `node -e` JSON-parse of
all three files. Report: page slug, word count, new claims/sources count,
verify-quotes result, and the top 3 risks.

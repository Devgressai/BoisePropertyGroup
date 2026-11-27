# NOTES: deepen sell-house-code-violations-idaho (prefix cv2-)

Dates: accessed / verified 2026-11-26. 4 new sections (~870 words), 20 new claims, 14 new sources.
Reused registry claims: boise-pds-records-center-permit-history, meridian-permit-records-online,
star-permit-records-portal-and-retention.
verify-quotes: 1320/1320 fully verified, 0 partial, 0 not found. I also checked each cv2- quote
against its own source's cache file, so none of them is matched only by some other page.

## Registry merge: existing sources that need claimsSupported updates
- star-code-enforcement: add cv2-star-cleanup-costs-admin-fee
- gardencity-public-records-page: add cv2-gardencity-records-request-form

## How sources were fetched
- Idaho Code (50-334, 50-1008, 74-103), cityofboise.org and adacounty.id.gov: fetch-source.mjs.
  The statute pages each show one version. I found no future-dated text.
- codelibrary.amlegal.com (Ada County, Boise, Eagle) and ecode360.com (Garden City) return 403 or
  render only with JavaScript. I captured the DOM with local headless Chrome (`--dump-dom`, desktop UA)
  into the cache path fetch-source.mjs uses (sha1 of the URL), and the meta.json records
  `fetchedVia: chrome-headless-dump-dom`. Re-running fetch-source.mjs with force on those URLs will
  return 403.
- The codepublishing.com URL for Garden City's code now redirects to eCode360. I trashed that redirect
  capture and cited https://ecode360.com/47106154.
- Meridian weed brochure (PDF): fetch-source.mjs, then extract-pdf-text.mjs. That script re-extracts
  every cached PDF, so other files under data/idaho/raw/extracted/ were rewritten too. They should be
  byte-identical, but a reviewer may want to check the git diff.
- Navigation captures (code tables of contents, chapter landing pages) were left in the cache uncited.
  Two "Not found" amlegal captures (guessed Meridian slugs) were trashed.

## What I could NOT source (left out)
- **A recorded notice of violation.** None of the codes I read lets a city or the county record the
  notice itself with the Ada County Recorder. That covers Ada County zoning enforcement 8-8, the Ada
  County nuisance ordinance, Boise Title 4 ch. 1 and 2, Boise 11-05-07, Boise ch. 9-11, Eagle 4-1 and
  8-7-9, Eagle 8-11, and Garden City 4-3. The page says "We found no ordinance". This is a statement
  of absence, limited to the sections in sources.json. Boise's dangerous buildings code adopts the 1997
  Uniform Code for the Abatement of Dangerous Buildings. The unamended model text is not online, and
  it may contain a recording provision I could not read. An attorney should check.
- **Meridian City Code** is on Municode, which renders only with JavaScript. I did not get the code
  text. Meridian appears only through its weed brochure, and the page does not say a Meridian lien
  attaches. A search snippet from a Meridian council packet showed 50-1008 assessment language. I did
  not use it, because it is a meeting attachment, not codified text.
- **Kuna** nuisance and abatement code was not located. The page says "We did not find Kuna's rule."
- **Star's code** (Municode) was not read. The page uses only the city page's sentence, which says
  nothing about a lien.
- **After-the-fact permits in Meridian, Kuna, Star and Garden City.** I found nothing new beyond the
  first round. A Meridian "do I need a permit" PDF returned 404. **Opening walls or retroactive
  inspection:** no Idaho primary source says either. The page says so.
- **Ada County Development Services' own records-request steps.** The ?p=511 page returned 403. I used
  the county-wide Public Records Request page instead. The permit-list PDFs on the Permit Records page
  were not opened, so the page does not describe their contents.

## Traps
1. **50-334 is a city power.** It does not cover counties. Its three-mile extension beyond city limits
   was deliberately left out of the prose. Ada County's lien comes from its own ordinance (5-9-6).
2. **"May" throughout.** Boise and Eagle list the special assessment or lien as one option among
   several. The prose says "may".
3. **Boise 11-05-07 "this Code" means the development code (Title 11).** It does not mean the building
   code. The permit-withholding power is about developments with permits already granted. The prose
   gives both the withholding and the conditional-permit alternative. It never says Boise will refuse
   a buyer a permit.
4. **Dangerous-building, restoration and chronic-nuisance provisions are narrow.** Boise 9-11-8, Eagle
   8-11-7 and Garden City 4-3-7 apply only after specific processes. Each is stated with its trigger.
5. **The Ada County nuisance ordinance excludes rural area district zoning** (amended 1-20-2026). The
   page states the exclusion. It does not say which parcels fall in such a district.
6. **Boise's permit list is current.** It does not show what applied when older work was done, and the
   page says so. The wall-covering sentence is about new projects. The page does not present it as an
   inspection procedure for old work.
7. **74-103 timing changed in 2024 and 2025.** Resident and nonresident periods are both stated.
8. **Meridian brochure quote** is built from column fragments joined with "...", because the PDF text
   interleaves columns. Each fragment is verbatim.

## For an attorney
- The "Does a code violation get recorded against the house?" section rests on an absence finding,
  plus a model code (1997 UCADB) that I could not read. Please confirm before publishing.
- The Eagle owner-of-record presumption (4-1-2) is described as rebuttable, as the code says.
- The page never says whether an unpaid assessment or lien must be paid at closing or survives a
  sale. No source read addresses that.

## Section placement
- "Can the city charge cleanup costs to the property?" goes after "What happens with an open code
  enforcement case?"
- "Does a code violation get recorded against the house?" goes after "Does a permit stay with the house
  when it sells?"
- "Can unpermitted work in Boise be approved before you sell?" goes after "Why buyers and insurers ask
  about it"
- "How do you get a property's permit and case history?" uses null, so it goes before "What a sale
  looks like with us".
- Links used: /sell-my-house-fast-eagle-id, -boise-id, -meridian-id, -star-id.

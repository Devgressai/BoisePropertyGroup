# Query → Canonical Route Map

**Status: INFERRED, not observed.** No search-volume data has been collected
yet; that is Phase 2 (`data/idaho/search/ada-query-map.json`). Nothing in this
file carries a volume figure, because inventing one would make every downstream
prioritisation decision fictional.

What this file *does* fix now is **route ownership**: which single page is
allowed to target each intent cluster. That decision has to exist before pages
are written, because cannibalization is cheap to prevent and expensive to undo —
Sierra is still unwinding it through 13 canonical overrides.

## Doctrine

1. **One page owns one intent.** Synonymous phrasings map to the same canonical
   page; they do not each get a URL.
2. **A definitional page and a transactional page are different intents** and may
   both exist. Sierra verified this against GSC: `/glossary/notice-of-default`
   and `/notice-of-default-california` both earn impressions on separate intents.
3. **A city page and a city+situation page are the same intent** unless evidence
   proves otherwise. Default to the city page. This is why the combo layer is
   not inherited.
4. **A page with no owner is not a page.** If no cluster below maps to it, it
   does not get built.

## Ownership table

Volume column deliberately omitted. `Evidence` names what Phase 2 must supply
before the route is allowed to index.

| Intent cluster | Representative phrasings | Canonical route | Supporting routes | Evidence required |
|---|---|---|---|---|
| Boise cash sale | sell my house fast boise · we buy houses boise · cash home buyers boise · sell house for cash boise | `/sell-my-house-fast-boise-id` | county hub, how-it-works, offer math | Boise housing stock, jurisdiction map |
| Ada County cash sale | sell my house fast ada county · cash home buyers ada county | `/sell-my-house-fast-ada-county` | all city pages | County functions vs city functions |
| Meridian / Eagle / Kuna / Star / Garden City | same pattern per city | one route per city | county hub | Per-city differentiation, or the page stays noindex |
| As-is sale | sell house as is idaho · sell house without repairs boise | `/sell-house-as-is-idaho` | city pages, property condition guide | Idaho disclosure duty |
| Inherited property | sell inherited house idaho · inherited property boise | `/sell-inherited-house-idaho` | probate guide, Ada County | Idaho probate process, personal representative authority |
| Probate sale | selling house in probate idaho · probate real estate ada county | `/sell-house-probate-idaho` | inherited pillar, Idaho courts resources | Idaho probate code, Ada County court resources |
| Foreclosure | stop foreclosure idaho · sell before foreclosure boise · behind on payments | `/avoid-foreclosure-idaho` | notice pages, Idaho foreclosure guide | Idaho deed-of-trust process, statutory notice periods |
| Selling with tenants | sell rental with tenants idaho · sell house with tenants boise | `/sell-rental-property-idaho` | landlord/tenant guide | Idaho landlord-tenant, lease survival on sale |
| Divorce | sell house during divorce idaho | `/sell-house-divorce-idaho` | — | Idaho community property treatment |
| Major repairs | sell fixer upper boise · house needs repairs | `/sell-house-major-repairs-idaho` | as-is pillar | — |
| Vacant property | sell vacant house boise | `/sell-vacant-house-idaho` | — | Ada code enforcement |
| Land | sell land idaho · sell vacant land ada county · sell acreage boise | `/sell-land-idaho` | acreage, lots, county hub | Zoning, access, parcel division by jurisdiction |
| Acreage / rural | sell acreage idaho · rural property kuna | `/sell-acreage-idaho` | land pillar, well/septic, irrigation | Well/septic authority, irrigation districts |
| Buildable / infill lot | sell infill lot boise · sell buildable lot | `/sell-buildable-lot-idaho` | land pillar, development guide | Municipal permitting differences |
| Problem property | landlocked · no access · no utilities · easement problems | `/sell-difficult-property-idaho` | access, utilities, easement guides | ACHD road authority, easement recording |
| Manufactured / mobile | sell mobile home idaho · manufactured home boise | `/sell-manufactured-home-idaho` | — | Idaho titling vs real property conversion |
| Property taxes / delinquency | idaho property tax · ada county tax delinquent | knowledge pillar | county hub | Idaho tax deed process — distinct from foreclosure |
| Water / irrigation | irrigation district boise · water rights with property | knowledge pillar | acreage, land | Boise Project, Nampa & Meridian ID, ditch easements |
| Well / septic | well and septic ada county · sell house on septic | knowledge pillar | acreage | Central District Health authority |
| Roads / access | ACHD · private road · shared driveway | knowledge pillar | difficult property | **ACHD owns roads in every Ada city — no CA analogue** |

## Known cannibalization risks

| Risk | Ruling |
|---|---|
| `sell my house fast boise` vs `we buy houses boise` | Same intent, same page. Phrase choice in H1 decided by GSC once data exists — Sierra flipped Placer County's H1 to "We Buy Houses" on a 133-vs-14 impression split. |
| Boise city page vs Ada County hub | County hub **summarises and links**; it must not reproduce city content. This is the exact collision that produced most of MoKan's stride-1 duplication hits. |
| `sell-land-idaho` vs `sell-acreage-idaho` | Real distinction (raw parcel vs improved rural acreage) — but only if the acreage page carries well/septic/irrigation evidence the land pillar does not. Otherwise merge. |
| Inherited vs probate | Different legal states (estate settled vs estate open). Keep separate **only** if the probate page carries Idaho procedural evidence. |
| Knowledge pillar vs its commercial parent | Pillar answers; parent converts. Pillar must not carry an offer CTA above the fold. |
| City page vs `/locations` hub | Hub lists and links only. |

## Open questions for Phase 2

1. Do Star and Kuna have enough distinct search demand to justify indexable pages, or do they render noindex and feed the county hub?
2. Is `sell land` or `sell acreage` the dominant Treasure Valley phrasing?
3. Does "Treasure Valley" carry commercial search intent, or is it purely a
   regional descriptor people use in conversation and not in queries?
4. Do Idaho sellers search "cash home buyers" or "we buy houses" at Boise scale?

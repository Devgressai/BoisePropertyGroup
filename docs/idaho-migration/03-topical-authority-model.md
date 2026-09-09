# 03 — Topical Authority Model

**Machine-readable:** `data/migration/sierra-topical-graph.json`
**605 entities, 1,811 relationships.**

## Entity types

| Type | Count |
|---|---:|
| community (unincorporated) | 196 |
| guideTopic | 109 |
| city (incorporated) | 70 |
| propertyType | 66 |
| definedTerm | 52 |
| sellerSituation | 49 |
| transactionTopic (financing) | 28 |
| county | 24 |
| region | 10 |
| state | 1 |

## Relationships

| Relationship | Count | Derived from |
|---|---:|---|
| adjacentTo | 1,023 | `Location.nearby[]` |
| containedIn | 290 | city → county, county → state |
| relevantSituation | 240 | `County.situationSlugs[]` |
| partOfRegion | 158 | `Region.countySlugs[]` / `citySlugs[]` |
| relevantTopic | 100 | county×topic matrix |

## The shape of the model

Sierra runs **four parallel taxonomies** that intersect through geography:

```
                         state:ca
                            │ containedIn
                     ┌──────┴──────┐
                  county (24)   region (10)
                     │ containedIn      ↑ partOfRegion
              city / community (266) ───┘
                     │
     ┌───────────────┼───────────────┬──────────────┐
 sellerSituation  propertyType   transactionTopic  guideTopic
      (49)            (66)            (28)            (109)
                                                        │ supports
                                                   definedTerm (52)
```

Geography is the spine. Situations, property types and financing topics are
**state-wide** pages that geography links into; they are not per-city. The
combos were the mechanism for intersecting them — and are exactly what Idaho
drops.

## What is strong here

1. **Entities have stable identity independent of display name.** Slugs are the
   key throughout. Nothing matches on `"Placer County"` as a string.
2. **`adjacentTo` is hand-curated, not computed.** 1,023 `nearby` relationships
   were authored per location. That is expensive and it is why "nearby markets"
   blocks read sensibly rather than listing whatever is closest by centroid.
3. **Clusters carry an explicit pillar.** `pillarSlug` on property types and
   financing topics makes hub-and-spoke structural, not implied by linking.
4. **Regions sit above counties**, giving a home for cross-county geography
   (Lake Tahoe spans two counties; the coast spans nine).

## What is weak

1. **The community/city distinction is only `isIncorporated`.** 196 of 266
   locations are unincorporated areas — neighbourhoods, CDPs and informal names
   modelled identically to cities. Ada County's equivalent question (is Hidden
   Springs a place we page? is the Boise Bench?) needs a real answer, not a
   boolean.
2. **No jurisdiction modelling at all.** Nothing in the graph knows which body
   permits, zones, assesses or records. For Idaho this is the single largest
   addition, and it is where genuine local differentiation lives — Ada County
   Highway District alone is a jurisdiction with no California analogue.
3. **`relevantSituation` is county-level only.** Cities inherit a default set of
   five situation slugs from `pageIndex.ts`, identical for all 266. Every city
   page therefore claims the same five relevances regardless of its housing
   stock — the kind of undifferentiated signal that makes location pages read
   as templated.
4. **The fact layer is declared but barely populated.** `types/facts.ts` defines
   a real system; `data/facts.ts` holds only `containedIn` and `partOfRegion`
   pairs generated from the site's own registry. **Every fact in Sierra's fact
   store cites Sierra as its source.** There is no external evidence in it.

## The Idaho model

Inherit the spine. Add the two layers Sierra lacks:

```
state:id
  └── region:treasure-valley        (geographic/economic, NOT administrative)
        └── county:ada
              ├── city:boise | meridian | eagle | kuna | star | garden-city
              └── unincorporated Ada County

  ╔══════════════ NEW ══════════════╗
  ║ jurisdiction:*                  ║  assessment · recording · tax · planning
  ║   ada-assessor, ada-recorder,   ║  zoning · permits · code · GIS · utilities
  ║   ada-treasurer, ACHD,          ║
  ║   city planning depts,          ║  entity ──governedBy──▶ jurisdiction
  ║   irrigation districts,         ║           ──assessedBy─▶
  ║   Central District Health       ║           ──roadsBy────▶
  ╚═════════════════════════════════╝

  ╔══════════════ NEW ══════════════╗
  ║ claim:*  ──supportedBy──▶ source:*
  ║          ──describes────▶ entity:*
  ║          ──usefulFor────▶ pageType
  ╚═════════════════════════════════╝
```

**Treasure Valley must be modelled as a geographic/economic region, never as an
administrative unit.** It has no government, no boundary of record, and no
authority. Modelling it as a county-equivalent would put a false claim into the
entity graph and into every schema block derived from it.

`relevantSituation` becomes per-city and evidence-backed: a city asserts a
situation only where something in the claim registry supports it.

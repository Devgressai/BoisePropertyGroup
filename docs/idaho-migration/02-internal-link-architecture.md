# 02 — Internal Link Architecture

**Machine-readable:** `data/migration/sierra-link-graph.json` (5.1 MB, 16,031 edges)

Each edge carries `source`, `destination`, `anchorText`, `component`,
`linkContext`, `relationshipType`, `reason`.

## Edges by relationship

| Relationship | Edges |
|---|---:|
| sibling | 2,589 |
| supporting guide | 2,306 |
| supporting definition | 2,277 |
| child | 2,058 |
| related seller situation | 1,450 |
| related city | 1,210 |
| related county | 1,195 |
| related property type | 1,160 |
| parent | 732 |
| cross-cluster link | 588 |
| pillar | 210 |
| commercial conversion path | 154 |
| contextual editorial link | 99 |

## Edges by source component

| Context | Edges | Emitted by |
|---|---:|---|
| contextualLinks | 2,660 | `internalLinks.ts` |
| siblingLinks | 2,404 | `internalLinks.ts` |
| key terms | 2,277 | `glossaryLinks.ts` → `KeyTerms.tsx` |
| related guides | 2,172 | `guideLinks.ts` → `RelatedGuides.tsx` |
| countyLinks | 1,561 | `internalLinks.ts` |
| situationLinks | 1,450 | `internalLinks.ts` |
| nearbyLinks | 1,210 | `internalLinks.ts` |
| hub listing | 732 | hub pages |
| city combos / situation combos | 990 | combo helpers |
| related terms / related pages | 339 | glossary page |
| hardcoded JSX | 99 | homepage, `CoastalRegionNav.tsx`, nav, footer |
| local / county blog | 134 | city and county pages |

**Roughly 60% of all edges come from four pure functions.** That is the property
worth inheriting: the graph is derived, not authored, so it cannot rot when
pages are added.

## Health

- **Orphans: 0** among 894 indexable pages.
- **Hub-only: 97** — reachable only from their own index. 37 blog, 26 property
  types, 22 situations, 6 cities, 6 financing topics.
- **115 indexable pages have zero contextual inbound links.**

Contextual inbound distribution across indexable pages:

| Contextual inbound | Pages |
|---|---:|
| 0 | 115 |
| 1–2 | 408 |
| 3–10 | 152 |
| 11–50 | 161 |
| 50+ | 58 |

The long tail is thin. 523 of 894 indexable pages (**59%**) have two or fewer
contextual inbound links. Link equity concentrates hard at the top:

| Inbound | URL |
|---:|---|
| 393 | `/glossary/escrow` |
| 392 | `/glossary/arv` |
| 391 | `/sell-land` |
| 389 | `/glossary/holding-costs` |
| 343 | `/sell-difficult-property` |
| 340 | `/avoid-foreclosure` |
| 321 | `/sell-my-house-fast-placer-county` |

**Finding.** The three most-linked pages on a cash-buyer site are glossary
definitions. `KeyTerms.tsx` fires on nearly every page and points at the same
handful of terms, so a definitional page outranks every money page for internal
PageRank. This is almost certainly not the intended distribution.

**Idaho decision:** cap per-target inbound from any single automated component,
and weight the glossary layer below the commercial layer. Definitions should
support money pages, not absorb their equity.

## Anchor text

`anchorText.ts` rotates deterministically via a hand-written `stableHash`,
seeded per link context, from 3–5 phrasings per page type. No `Math.random()`,
so anchors are stable across builds — deliberately, since a shifting anchor set
between two crawls reads as manipulation.

**KEEP unchanged.** The phrasing tables become Idaho phrasings; the mechanism
does not change.

## Extractor limitations

Recorded so these numbers are not over-read:

1. `Navbar.tsx` and `Footer.tsx` build links from a `navLinks` array rather than
   literal `href="/..."`, so they appear under `hardcoded JSX` from a
   `component` source rather than as header/footer edges.
2. Conditional rendering is not modelled. `CoastalRegionNav` only renders on one
   slug; the extractor credits its edges unconditionally.
3. In-prose links inside content data are not parsed, so the real contextual
   count is a floor, not a ceiling.

None of these change the ranking of findings above.

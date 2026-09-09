# SEO STATUS

**Updated:** 2026-09-09

No pages exist. This records the architecture decisions that are fixed.

| Decision | Value |
|---|---|
| URL scheme | Flat, depth-1 slugs |
| Canonical host | Apex, `www` 301s to it |
| Indexation | Content-gated; `index:false, follow:true` until the gate passes |
| `follow` | Never false |
| Sitemap | Filtered by the same gates as the routes; segmentation seam built, unused |
| Combos | Not inherited |
| Link graph | Derived from pure functions, checked in CI |
| Anchor text | Deterministic, build-stable |
| AI crawlers | 11 named agents explicitly allowed |

## Baselines to establish after launch

- GSC property + verification
- Indexed vs submitted, by page type
- Clicks by bucket — commercial vs knowledge, the split that decided the build order

## Carried-forward diagnosis

Four portfolio measurements agree the binding constraint on a new site in this
niche is **off-page authority**, not page count:

- Sierra: ~9 clicks / 5,899 impressions on 748 indexed pages (late July 2026, re-pull before use)
- Boise Bath: 110 commercial pages → 0 clicks; 356 guides → 208 clicks (28d to 2026-08-31)
- IronCrest: Google refuses 56% of URLs; saturation confirmed 7×
- Sierra: the year's most valuable event was one Redfin citation

Off-page work is a first-class deliverable here, not an afterthought.

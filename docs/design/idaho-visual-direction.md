# Idaho Visual Direction

Three candidate systems. **Every ratio below is computed** by
`scripts/migration/build-visual-direction.mjs` using the WCAG 2.x relative
luminance formula — none is estimated.

## Constraints

1. **Light reading surfaces.** Deep colour is confined to header, footer,
   buttons and section emphasis. This is not a dark site.
2. **One palette scale.** Sierra carries two coexisting scales as acknowledged
   debt; we ship one.
3. **Split accent.** Sierra's logo brass is 3.0:1 on white — fine for rules and
   for text on dark, unusable for small text on light — so it needs a second
   darker token. Every palette here declares `accent` (dark surfaces, rules,
   large text) and `accentInk` (small text on light) from the outset.
4. **Accent scarcity.** At most one accent element per viewport, marking the
   single most important action.
5. **Not a costume.** Idaho as material and light, not as sagebrush clip-art,
   mountain silhouettes, or Western lettering.


---

## Palette A — High Desert

Sagebrush, basalt and sandstone — the Snake River Plain rather than a mountain postcard. Sage carries structure; the accent is a fired-clay orange sampled from the canyon rimrock, used once per viewport. Reads as land and agriculture, which is what this business actually buys.

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--ada-ink` | `#1A211C` | Headlines, dark full-bleed sections, footer |
| `--ada-primary` | `#3D5545` | Primary surface and buttons |
| `--ada-primaryDark` | `#2A3B31` | Pressed/hover state, deep section fill |
| `--ada-surface` | `#FFFFFF` | Card and panel surface |
| `--ada-background` | `#F8F6F1` | Page background |
| `--ada-sand` | `#E6E0D4` | Secondary surface, subtle fills |
| `--ada-border` | `#D8D1C3` | Decorative dividers only |
| `--ada-borderStrong` | `#8A8272` | Input and control boundaries (>=3:1) |
| `--ada-text` | `#1A211C` | Body text |
| `--ada-muted` | `#5C645B` | Secondary text |
| `--ada-accent` | `#B4541F` | Accent — dark surfaces, rules, large text ONLY |
| `--ada-accentInk` | `#93430F` | Accent — small text on light surfaces |
| `--ada-success` | `#2F6B4F` | Success state |
| `--ada-warning` | `#8A6212` | Warning state |

### Measured contrast

| Pair | Ratio | WCAG |
|---|---:|---|
| Body text on page background | 15.21:1 | AAA |
| Body text on card surface | 16.43:1 | AAA |
| Secondary text on background | 5.67:1 | AA |
| Button label (white on primary) | 8.13:1 | AAA |
| Text on dark footer/hero | 16.43:1 | AAA |
| Accent on dark surface (rules + large text) | 3.31:1 | AA large only |
| Accent as LARGE text/rule on background | 4.6:1 | AA |
| Accent as SMALL text on background | 6.37:1 | AA |
| Accent as SMALL text on card | 6.88:1 | AA |
| Primary as text on background | 7.53:1 | AAA |
| Decorative divider (no WCAG minimum) | 1.41:1 | decorative — exempt |
| Input/control boundary (needs 3:1) | 3.52:1 | AA large only |

**Failures: 0.**

---

## Palette B — Boise River

Cottonwood green and river blue. Cooler and more institutional than A — closer to a title company or a credit union than a contractor. Blue does conversion work; green does structure. Lowest risk, least distinctive.

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--ada-ink` | `#141B23` | Headlines, dark full-bleed sections, footer |
| `--ada-primary` | `#1F4A5C` | Primary surface and buttons |
| `--ada-primaryDark` | `#153541` | Pressed/hover state, deep section fill |
| `--ada-surface` | `#FFFFFF` | Card and panel surface |
| `--ada-background` | `#F6F8F8` | Page background |
| `--ada-sand` | `#DFE7E8` | Secondary surface, subtle fills |
| `--ada-border` | `#CBD7D9` | Decorative dividers only |
| `--ada-borderStrong` | `#78868A` | Input and control boundaries (>=3:1) |
| `--ada-text` | `#141B23` | Body text |
| `--ada-muted` | `#54626A` | Secondary text |
| `--ada-accent` | `#2E7D5B` | Accent — dark surfaces, rules, large text ONLY |
| `--ada-accentInk` | `#1F6247` | Accent — small text on light surfaces |
| `--ada-success` | `#2F6B4F` | Success state |
| `--ada-warning` | `#8A6212` | Warning state |

### Measured contrast

| Pair | Ratio | WCAG |
|---|---:|---|
| Body text on page background | 16.27:1 | AAA |
| Body text on card surface | 17.34:1 | AAA |
| Secondary text on background | 5.91:1 | AA |
| Button label (white on primary) | 9.58:1 | AAA |
| Text on dark footer/hero | 17.34:1 | AAA |
| Accent on dark surface (rules + large text) | 3.47:1 | AA large only |
| Accent as LARGE text/rule on background | 4.69:1 | AA |
| Accent as SMALL text on background | 6.8:1 | AA |
| Accent as SMALL text on card | 7.25:1 | AAA |
| Primary as text on background | 8.99:1 | AAA |
| Decorative divider (no WCAG minimum) | 1.38:1 | decorative — exempt |
| Input/control boundary (needs 3:1) | 3.53:1 | AA large only |

**Failures: 0.**

---

## Palette C — Foothills

Charcoal and dry-grass gold. The foothills in August, not in a brochure. Most contemporary of the three and the most dependent on typography and spacing to avoid reading as generic SaaS. Gold is decorative only — it cannot carry small text at any usable weight.

### Tokens

| Token | Hex | Role |
|---|---|---|
| `--ada-ink` | `#1C1C1A` | Headlines, dark full-bleed sections, footer |
| `--ada-primary` | `#33362F` | Primary surface and buttons |
| `--ada-primaryDark` | `#212420` | Pressed/hover state, deep section fill |
| `--ada-surface` | `#FFFFFF` | Card and panel surface |
| `--ada-background` | `#FAF8F4` | Page background |
| `--ada-sand` | `#E9E4D9` | Secondary surface, subtle fills |
| `--ada-border` | `#D9D3C6` | Decorative dividers only |
| `--ada-borderStrong` | `#8C8578` | Input and control boundaries (>=3:1) |
| `--ada-text` | `#1C1C1A` | Body text |
| `--ada-muted` | `#5E5F58` | Secondary text |
| `--ada-accent` | `#9A6B12` | Accent — dark surfaces, rules, large text ONLY |
| `--ada-accentInk` | `#7C5509` | Accent — small text on light surfaces |
| `--ada-success` | `#2F6B4F` | Success state |
| `--ada-warning` | `#8A6212` | Warning state |

### Measured contrast

| Pair | Ratio | WCAG |
|---|---:|---|
| Body text on page background | 16.09:1 | AAA |
| Body text on card surface | 17.07:1 | AAA |
| Secondary text on background | 6.08:1 | AA |
| Button label (white on primary) | 12.28:1 | AAA |
| Text on dark footer/hero | 17.07:1 | AAA |
| Accent on dark surface (rules + large text) | 3.65:1 | AA large only |
| Accent as LARGE text/rule on background | 4.41:1 | AA large only |
| Accent as SMALL text on background | 6.26:1 | AA |
| Accent as SMALL text on card | 6.64:1 | AA |
| Primary as text on background | 11.58:1 | AAA |
| Decorative divider (no WCAG minimum) | 1.41:1 | decorative — exempt |
| Input/control boundary (needs 3:1) | 3.45:1 | AA large only |

**Failures: 0.**

---

## Recommendation

**Palette A — High Desert.**

All three clear every non-exempt pair, so the decision is not accessibility, it is differentiation.

- **A** is the only one that looks like the Snake River Plain rather than
  generic professional-services design. Sage and sandstone are what Ada County
  actually looks like outside the foothills, and the fired-clay accent has
  enough warmth to carry a CTA without shouting. It is also furthest from
  Sierra's pine-and-brass, which matters: these are separate businesses and
  should not look like a chain.
- **B** is the safe choice and the forgettable one. Blue-green reads as
  institutional trust, which suits the transaction, but every title company and
  credit union in the valley already looks like this.
- **C** depends heavily on typography to avoid reading as a generic SaaS
  product, and its gold accent cannot carry small text at any usable weight —
  which is exactly the trap Sierra fell into and had to patch.

Type pairing for A: one grotesque for body, one high-contrast serif for display,
and **two families total**. Sierra is mid-migration across four and it shows.

## Imagery

Real Treasure Valley property, not mountains. The business buys houses, infill
lots, acreage and problem parcels; the imagery should show those. Generated
imagery is permitted as illustration and must be captioned as illustration —
never a face presented as a real person, never a property captioned as one we
bought. That rule is inherited from Sierra verbatim and is not negotiable.

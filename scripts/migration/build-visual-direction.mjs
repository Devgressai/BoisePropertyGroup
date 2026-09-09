/**
 * Generates docs/design/idaho-visual-direction.md.
 *
 * Every contrast ratio in that document is computed here (WCAG 2.x relative
 * luminance), not asserted. Sierra shipped a brass accent at 3.0:1 on white and
 * had to add a second darker token for small text once that was measured; the
 * point of computing up front is to not repeat that.
 */
import { writeFileSync } from "node:fs";

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lum = (h) => {
  const [r, g, b] = hex(h).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
const r2 = (a, b) => Math.round(ratio(a, b) * 100) / 100;
const verdict = (v, large = false) =>
  v >= 7 ? "AAA" : v >= 4.5 ? "AA" : large && v >= 3 ? "AA large only" : "FAIL";

const PALETTES = [
  {
    id: "A", name: "High Desert",
    rationale:
      "Sagebrush, basalt and sandstone — the Snake River Plain rather than a mountain postcard. Sage carries structure; the accent is a fired-clay orange sampled from the canyon rimrock, used once per viewport. Reads as land and agriculture, which is what this business actually buys.",
    tokens: {
      ink: "#1A211C", primary: "#3D5545", primaryDark: "#2A3B31", surface: "#FFFFFF",
      background: "#F8F6F1", sand: "#E6E0D4", border: "#D8D1C3", borderStrong: "#8A8272", text: "#1A211C",
      muted: "#5C645B", accent: "#B4541F", accentInk: "#93430F", success: "#2F6B4F", warning: "#8A6212",
    },
  },
  {
    id: "B", name: "Boise River",
    rationale:
      "Cottonwood green and river blue. Cooler and more institutional than A — closer to a title company or a credit union than a contractor. Blue does conversion work; green does structure. Lowest risk, least distinctive.",
    tokens: {
      ink: "#141B23", primary: "#1F4A5C", primaryDark: "#153541", surface: "#FFFFFF",
      background: "#F6F8F8", sand: "#DFE7E8", border: "#CBD7D9", borderStrong: "#78868A", text: "#141B23",
      muted: "#54626A", accent: "#2E7D5B", accentInk: "#1F6247", success: "#2F6B4F", warning: "#8A6212",
    },
  },
  {
    id: "C", name: "Foothills",
    rationale:
      "Charcoal and dry-grass gold. The foothills in August, not in a brochure. Most contemporary of the three and the most dependent on typography and spacing to avoid reading as generic SaaS. Gold is decorative only — it cannot carry small text at any usable weight.",
    tokens: {
      ink: "#1C1C1A", primary: "#33362F", primaryDark: "#212420", surface: "#FFFFFF",
      background: "#FAF8F4", sand: "#E9E4D9", border: "#D9D3C6", borderStrong: "#8C8578", text: "#1C1C1A",
      muted: "#5E5F58", accent: "#9A6B12", accentInk: "#7C5509", success: "#2F6B4F", warning: "#8A6212",
    },
  },
];

const PAIRS = [
  ["text", "background", "Body text on page background", false],
  ["text", "surface", "Body text on card surface", false],
  ["muted", "background", "Secondary text on background", false],
  ["surface", "primary", "Button label (white on primary)", false],
  ["surface", "ink", "Text on dark footer/hero", false],
  ["accent", "ink", "Accent on dark surface (rules + large text)", true],
  ["accent", "background", "Accent as LARGE text/rule on background", true],
  ["accentInk", "background", "Accent as SMALL text on background", false],
  ["accentInk", "surface", "Accent as SMALL text on card", false],
  ["primary", "background", "Primary as text on background", false],
  ["border", "background", "Decorative divider (no WCAG minimum)", true],
  ["borderStrong", "background", "Input/control boundary (needs 3:1)", true],
];

let md = `# Idaho Visual Direction

Three candidate systems. **Every ratio below is computed** by
\`scripts/migration/build-visual-direction.mjs\` using the WCAG 2.x relative
luminance formula — none is estimated.

## Constraints

1. **Light reading surfaces.** Deep colour is confined to header, footer,
   buttons and section emphasis. This is not a dark site.
2. **One palette scale.** Sierra carries two coexisting scales as acknowledged
   debt; we ship one.
3. **Split accent.** Sierra's logo brass is 3.0:1 on white — fine for rules and
   for text on dark, unusable for small text on light — so it needs a second
   darker token. Every palette here declares \`accent\` (dark surfaces, rules,
   large text) and \`accentInk\` (small text on light) from the outset.
4. **Accent scarcity.** At most one accent element per viewport, marking the
   single most important action.
5. **Not a costume.** Idaho as material and light, not as sagebrush clip-art,
   mountain silhouettes, or Western lettering.

`;

for (const p of PALETTES) {
  md += `\n---\n\n## Palette ${p.id} — ${p.name}\n\n${p.rationale}\n\n### Tokens\n\n| Token | Hex | Role |\n|---|---|---|\n`;
  const roles = {
    ink: "Headlines, dark full-bleed sections, footer", primary: "Primary surface and buttons",
    primaryDark: "Pressed/hover state, deep section fill", surface: "Card and panel surface",
    background: "Page background", sand: "Secondary surface, subtle fills",
    border: "Decorative dividers only",
    borderStrong: "Input and control boundaries (>=3:1)", text: "Body text", muted: "Secondary text",
    accent: "Accent — dark surfaces, rules, large text ONLY", accentInk: "Accent — small text on light surfaces",
    success: "Success state", warning: "Warning state",
  };
  for (const [k, v] of Object.entries(p.tokens)) md += `| \`--ada-${k}\` | \`${v}\` | ${roles[k]} |\n`;
  md += `\n### Measured contrast\n\n| Pair | Ratio | WCAG |\n|---|---:|---|\n`;
  let fails = 0;
  for (const [a, b, label, large] of PAIRS) {
    const v = r2(p.tokens[a], p.tokens[b]);
    const exempt = a === "border";
    const vd = exempt ? "decorative — exempt" : verdict(v, large);
    if (vd === "FAIL") fails++;
    md += `| ${label} | ${v}:1 | ${vd} |\n`;
  }
  md += `\n**Failures: ${fails}.**\n`;
  p.fails = fails;
}

const best = PALETTES.reduce((a, b) => (a.fails <= b.fails ? a : b));
const allPass = PALETTES.every((x) => x.fails === 0);
md += `\n---\n\n## Recommendation

**Palette A — High Desert.**

${allPass ? "All three clear every non-exempt pair, so the decision is not accessibility, it is differentiation." : "NOTE: at least one palette has an unresolved contrast failure — see the tables above."}

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
`;

writeFileSync("docs/design/idaho-visual-direction.md", md);
console.log("palette failures:", PALETTES.map((p) => `${p.id}=${p.fails}`).join(" "));

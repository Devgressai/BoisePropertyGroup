import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * The palette is verified, not eyeballed.
 *
 * Every token is read from globals.css itself, so the test can never drift
 * from what ships. The pairs below are the ones the components actually put
 * together; a new surface or text colour belongs here before it belongs in a
 * component. Thresholds are WCAG 2.x: 4.5:1 for body text, 3:1 for large text
 * and for input/control boundaries (1.4.11).
 */
const css = readFileSync(resolve(__dirname, "../src/app/globals.css"), "utf8");
const root = css.match(/:root\s*\{([\s\S]*?)\n\}/)?.[1] ?? "";
const tokens: Record<string, string> = {};
for (const m of root.matchAll(/--bpg-([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})/g)) tokens[m[1]] = m[2];

const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lum = (h: string) => {
  const [r, g, b] = hex(h).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};
const t = (name: string) => {
  const v = tokens[name];
  if (!v) throw new Error(`token --bpg-${name} missing from :root`);
  return v;
};

const LIGHT_SURFACES = [
  "surface",
  "background",
  "sand",
  "tint",
  "tint-res",
  "tint-land",
  "tint-com",
  "warm-tint",
  "mint",
  "lilac",
];

describe("palette contrast (computed from globals.css)", () => {
  it("parses the tokens", () => {
    expect(Object.keys(tokens).length).toBeGreaterThan(10);
  });

  it("body and muted text read on every light surface (>= 4.5:1)", () => {
    for (const s of LIGHT_SURFACES) {
      expect(ratio(t("text"), t(s)), `text on ${s}`).toBeGreaterThanOrEqual(4.5);
      expect(ratio(t("muted"), t(s)), `muted on ${s}`).toBeGreaterThanOrEqual(4.5);
      expect(ratio(t("ink"), t(s)), `ink on ${s}`).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("accent-ink carries small text on every light surface (>= 4.5:1)", () => {
    for (const s of LIGHT_SURFACES) {
      expect(ratio(t("accent-ink"), t(s)), `accent-ink on ${s}`).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("accent carries large text and rules on every light surface (>= 3:1)", () => {
    for (const s of LIGHT_SURFACES) {
      expect(ratio(t("accent"), t(s)), `accent on ${s}`).toBeGreaterThanOrEqual(3);
    }
  });

  it("white text reads on the primary button and its hover state (>= 4.5:1)", () => {
    expect(ratio("#FFFFFF", t("primary"))).toBeGreaterThanOrEqual(4.5);
    expect(ratio("#FFFFFF", t("primary-dark"))).toBeGreaterThanOrEqual(4.5);
  });

  it("control boundaries meet 1.4.11 on every surface an input sits on (>= 3:1)", () => {
    for (const s of ["surface", "background", "sand", "tint"]) {
      expect(ratio(t("border-strong"), t(s)), `border-strong on ${s}`).toBeGreaterThanOrEqual(3);
    }
  });

  it("the page is light: every reading surface is near-white", () => {
    for (const s of LIGHT_SURFACES) expect(lum(t(s)), s).toBeGreaterThan(0.8);
  });

  /**
   * The warm secondary is split on the same rule as the blue. `warm` carries
   * small text; `warm-bright` is a fill that ink sits on and must NEVER be used
   * for text on a light surface — this test is what keeps that from drifting.
   */
  it("warm carries small text on every light surface (>= 4.5:1)", () => {
    for (const s of LIGHT_SURFACES) {
      expect(ratio(t("warm"), t(s)), `warm on ${s}`).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("ink reads on the bright warm fill (>= 4.5:1), which is a fill and not a text colour", () => {
    expect(ratio(t("ink"), t("warm-bright"))).toBeGreaterThanOrEqual(4.5);
    // Stated as a fact about the token, so a later edit to something that could
    // pass as text colour fails here rather than silently shipping.
    expect(ratio(t("warm-bright"), t("surface"))).toBeLessThan(3);
  });
});

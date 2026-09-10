# Decision Log

Material architectural decisions. Append-only; supersede rather than edit.

---

## 2026-09-09 — Sierra Property Buyers is a read-only donor

**Decision.** `~/sierrapropertybuyers` is never written to. The engine is copied out.

**Alternatives.** Fork in place; branch inside Sierra; extract to a shared package.

**Reason.** Sierra is live, pushes straight to `main` → Vercel with no CI and no
stage branch, so a stray write reaches production with nothing to catch it. It
also holds the portfolio's only third-party press citation and ~89K lines of
non-reproducible content.

**SEO / UX / technical.** None here; protects a live ranking asset. Enforced by
requiring `git status --porcelain` in Sierra to be empty before any task is
called done.

---

## 2026-09-09 — Flat, depth-1 URL architecture

**Decision.** Money pages live at `/sell-my-house-fast-boise-id`, not
`/locations/ada-county/boise/`.

**Alternatives.** Nested hierarchy; hybrid (flat commercial, nested informational).

**Reason.** Owner's call, and the donor supports it: `next.config.ts` already
301s seven `/locations/<county>` paths to flat slugs, so the nested scheme was
tried and abandoned. Keyword-in-slug at depth 1, and one dynamic route can serve
every SEO page type.

**SEO.** Preserves the donor's proven convention. **Technical.** Next.js cannot
mount two parallel `/[x]` routes, so all SEO types share one route with disjoint
slugs.

---

## 2026-09-09 — The city × situation combo layer is not inherited

**Decision.** Sierra's 495 combo routes have no Idaho equivalent.

**Alternatives.** Inherit fully; inherit a subset for Boise only.

**Reason.** Six municipalities cannot support combinatorial expansion, and the
pattern is already underperforming on the donor: 361 of 495 combos are unindexed
there. Building them would be creating pages because permutations exist.

**SEO.** Removes the largest doorway-page risk. **Technical.** Drops 12,019
lines of content architecture and the combo branch of the dynamic route.
**Consequence.** Ada Phase 1 lands near 120–160 routes, not 1,100.

---

## 2026-09-09 — Knowledge pillars before the remaining municipalities

**Decision.** Phase 7 builds the Ada County and Boise anchors; Phase 8 builds
the Idaho knowledge pillars; Phase 9 builds Meridian, Eagle, Kuna, Star and
Garden City, evidence-gated.

**Alternatives.** All six cities first, as the original brief specified;
both tracks in parallel.

**Reason.** Boise Bath — same metro, comparable domain age — measured 110
commercial city×service pages earning **0 clicks** while 356 guide pages earned
208, over 28 days to 2026-08-31. 75 of those 110 are indexed and ranking at
positions 29–56, so the constraint is competitiveness, not discovery.

**Caveat recorded.** Boise Bath sells remodels; cash-buyer intent is
lower-volume and higher-intent, so this is a directional finding, not a
prediction of zero.

**SEO.** Puts effort where clicks were actually measured. **UX.** A seller
landing on a knowledge pillar gets an answer whether or not they convert.

---

## 2026-09-09 — Vitest and CI from the first commit

**Decision.** The Idaho repo has a test runner and CI before it has pages.

**Alternatives.** Mirror the donor, which has neither.

**Reason.** Sierra has 14 `check:*` scripts and nothing that runs them. Across
the portfolio, "no CI" is the most repeated cause of shipped defects.

**Technical.** CI green is the merge gate; local builds are never run.

---

## 2026-09-09 — Treasure Valley is modelled as a geographic/economic region

**Decision.** Never as an administrative unit.

**Reason.** It has no government, no boundary of record and no authority.
Modelling it as county-equivalent would put a false claim into the entity graph
and into every schema block derived from it.

---

## 2026-09-09 — One palette scale, split accent from the outset

**Decision.** Ship a single token scale with `accent` (dark surfaces, rules,
large text) and `accentInk` (small text on light) defined together, plus
`border` (decorative) and `borderStrong` (≥3:1 control boundaries).

**Reason.** Sierra shipped a 3.0:1 accent, discovered it could not carry small
text, and patched in a second token; it also carries two coexisting scales as
acknowledged debt. Both are avoidable by measuring first.

**Technical.** Contrast is computed in
`scripts/migration/build-visual-direction.mjs`, not asserted.

---

## 2026-09-10 — Vercel framework preset must be Next.js, not "Other"

**Decision.** The Vercel project's Framework Preset is `Next.js`.

**Symptom this fixes.** With the preset left on `Other`, every deployment
reported **Ready** and every single path returned **404 NOT_FOUND** — including
`/robots.txt`, which the app generates at runtime.

**Cause.** On `Other`, Vercel runs `npm run build` (which succeeds, producing
`.next/`), then discards it and serves the **`public/` directory** as a static
site. `public/` holds one image and no `index.html`, so there is nothing to
serve at any route.

**Why it was hard to spot.** Every signal pointed away from the real cause: the
build succeeded, CI was green, deployments were Ready in 30-40s, and the repo
was fully pushed. Vercel's own deployment thumbnail rendered the 404, which
looked like an application fault rather than a platform setting.

**How to diagnose it next time.** `vercel project inspect <name> --scope <team>`
prints Framework Preset and Output Directory. If Output Directory reads
``public` if it exists, or `.`` on a Next.js app, the preset is wrong. The
tell-tale is that `/robots.txt` 404s: a running Next app always serves it.

**Note.** The setting lives under **Settings → Build and Deployment**, not
Settings → General.

# Phase 14 — Accessibility and performance

**Status:** NOT STARTED

## Objective

WCAG 2.2 AA, strong Core Web Vitals.

## Inputs

- Phase 5 shell

## Files involved

- `components`
- `CI checks`

## Implementation steps

1. Landmarks, focus states, labels, heading order, reduced motion, touch targets
2. Server components, minimal client JS

## Validation

- 0 contrast failures
- 0 heading-order violations
- CWV green

## Risks

- Accessibility overlays instead of real markup

## Completion criteria

- A11y + perf gates green

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

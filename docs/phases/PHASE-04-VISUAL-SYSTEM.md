# Phase 04 — Visual system and design adaptation

**Status:** NOT STARTED

## Objective

One Idaho palette, verified.

## Inputs

- docs/design/idaho-visual-direction.md

## Files involved

- `src/app/globals.css`
- `docs/design/*`

## Implementation steps

1. Select one palette
2. Define the single token scale
3. Pick two font families
4. Set imagery rules

## Validation

- Every token pair computed, 0 non-exempt contrast failures
- One scale only

## Risks

- Shipping two scales like Sierra
- An accent that cannot carry small text

## Completion criteria

- Palette selected and committed

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

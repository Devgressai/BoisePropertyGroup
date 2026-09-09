# Phase 09 — Remaining Ada municipalities

**Status:** NOT STARTED

## Objective

Meridian, Eagle, Kuna, Star, Garden City — evidence-gated.

## Inputs

- Phase 2 differentiation matrix

## Files involved

- `city content`

## Implementation steps

1. Author only where the differentiation matrix supports it
2. Render all; index only those that pass

## Validation

- No city indexes on INSUFFICIENT evidence

## Risks

- Six near-identical city pages

## Completion criteria

- Each city either indexable with real differentiation, or noindex,follow

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

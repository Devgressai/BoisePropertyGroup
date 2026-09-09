# Phase 03 — Idaho information architecture

**Status:** NOT STARTED

## Objective

Fix routes, intents and ownership.

## Inputs

- Phase 2 evidence
- docs/seo/query-intent-map.md

## Files involved

- `docs/seo/*`
- `data/idaho/links/*`

## Implementation steps

1. Confirm flat slug scheme
2. Assign one canonical route per intent cluster
3. Decide which municipalities index at launch

## Validation

- No intent cluster without an owner
- No route without an intent

## Risks

- Creating routes because a permutation exists

## Completion criteria

- Route list approved
- Cannibalization rulings recorded

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

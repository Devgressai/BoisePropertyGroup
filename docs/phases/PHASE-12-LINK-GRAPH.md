# Phase 12 — Internal link graph

**Status:** NOT STARTED

## Objective

A dense, derived graph — not an authored one.

## Inputs

- All content phases

## Files involved

- `src/lib/seo/internalLinks.ts`
- `scripts/validation/check-orphans.ts`

## Implementation steps

1. Tune relationships for the Idaho taxonomy
2. Cap per-target inbound so definitions do not outrank money pages
3. Run ORPHAN + HUB-ONLY in CI

## Validation

- 0 orphans
- Hub-only under threshold
- No page above the inbound cap

## Risks

- Repeating Sierra's outcome where glossary terms hold the top 3 inbound counts

## Completion criteria

- Graph checks green in CI

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

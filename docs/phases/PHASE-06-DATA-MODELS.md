# Phase 06 — Taxonomy and data models

**Status:** NOT STARTED

## Objective

Typed Idaho entities with codegen and drift checks.

## Inputs

- Phase 2 evidence

## Files involved

- `src/data/**`
- `scripts/validation/*`

## Implementation steps

1. Geography generated from the Census place-to-county crosswalk
2. Situation / property-type / knowledge taxonomies
3. Claim + source + jurisdiction types
4. Codegen drift check

## Validation

- check:geography-drift green
- 0 slug collisions

## Risks

- Nearest-centroid county assignment — shipped a live factual error on MoKan

## Completion criteria

- All taxonomies typed and generated

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

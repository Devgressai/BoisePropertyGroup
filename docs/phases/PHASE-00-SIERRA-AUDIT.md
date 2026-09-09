# Phase 00 — Sierra forensic analysis

**Status:** COMPLETE

## Objective

Understand the donor system completely before copying any of it.

## Inputs

- ~/sierrapropertybuyers (read-only)

## Files involved

- `scripts/migration/*`
- `docs/idaho-migration/0*.md`
- `data/migration/*.json`

## Implementation steps

1. Build a TS module loader that executes Sierra's data + SEO modules
2. Generate route inventory, link graph, topical graph
3. Write the forensic audit, route inventory, link architecture, topical model, SEO extraction and migration matrix

## Validation

- Manifests regenerate deterministically
- Sierra git status --porcelain empty

## Risks

- Executing Sierra's modules could in principle run side effects — they are pure data, verified by reading

## Completion criteria

- 6 docs + 4 manifests exist
- 0 orphans figure reproduced

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

# Phase 01 — Architecture extraction + graph modelling

**Status:** NOT STARTED

## Objective

Decide what transfers, what changes and what dies.

## Inputs

- docs/idaho-migration/*

## Files involved

- `data/migration/idaho-migration-matrix.json`
- `docs/idaho-migration/05-*.md`

## Implementation steps

1. Classify every Sierra system KEEP / KEEP+IMPROVE / REFACTOR / IDAHO-SPECIFIC / DO NOT TRANSFER
2. Record evidence needed and risk per entry

## Validation

- Every entry has a verdict and a named evidence requirement

## Risks

- Classifying a weakness as KEEP because it exists

## Completion criteria

- 45 systems classified
- High-risk transfers enumerated

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

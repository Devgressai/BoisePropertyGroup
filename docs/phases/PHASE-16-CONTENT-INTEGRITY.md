# Phase 16 — Content integrity

**Status:** NOT STARTED

## Objective

Prove the corpus is honest and distinct.

## Inputs

- All content

## Files involved

- `scripts/validation/*`

## Implementation steps

1. California residue scan
2. Unsourced claim scan
3. Stride-1 duplication
4. Placeholder scan

## Validation

- 0 CA residue
- 0 unsourced claims
- 0 duplication hits outside the statutory-quotation allowlist

## Risks

- Coarse duplication strides that sample rather than prove

## Completion criteria

- Integrity gates green

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

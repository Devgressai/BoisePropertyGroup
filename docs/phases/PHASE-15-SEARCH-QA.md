# Phase 15 — SEO / AEO / GEO / AI-search QA

**Status:** NOT STARTED

## Objective

Verify the retrieval story end to end.

## Inputs

- All prior

## Files involved

- `docs/seo/*`

## Implementation steps

1. Duplicate title/description/H1 checks
2. Canonical conflicts
3. Answer-extraction structures
4. AI-crawler access

## Validation

- 0 duplicate titles/descriptions/H1s
- 0 index/noindex conflicts

## Risks

- Distorting prose for machines

## Completion criteria

- QA gates green

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

# Phase 07 — Ada County + Boise anchors

**Status:** NOT STARTED

## Objective

The two commercial pages that must carry the site.

## Inputs

- Phase 2 + 6

## Files involved

- `src/data/locations.ts`
- `content files`

## Implementation steps

1. Ada County hub: county functions, municipalities, administration, links
2. Boise pillar: housing stock, jurisdiction, situations, property types

## Validation

- Both pass the quality gate
- County hub summarises and links, never reproduces city content

## Risks

- Hub duplicating its children — the top source of MoKan duplication hits

## Completion criteria

- Both indexable

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

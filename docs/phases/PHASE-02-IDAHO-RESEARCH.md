# Phase 02 — Idaho research + evidence layer

**Status:** NOT STARTED

## Objective

Build the verified Ada County knowledge system before any page is written.

## Inputs

- Primary government sources

## Files involved

- `research/idaho/ada-county/**`
- `data/idaho/**`

## Implementation steps

1. Source registry
2. Entity + geographic graph
3. Municipal dossiers
4. Jurisdiction database
5. Idaho property law, probate, foreclosure, landlord-tenant
6. Land, water/irrigation, well/septic, flood, wildfire
7. Housing statistics
8. Search + SERP + competitor intelligence
9. Claim registry + evidence graph
10. City differentiation matrix
11. Three review passes

## Validation

- ADA COUNTY EVIDENCE GATE: PASS
- 0 statistics without a year and source
- 0 approved claims without evidence

## Risks

- Citing a homepage for a specific claim
- Mixing dataset years
- Statute text served ahead of its effective date
- Secondary sources laundering a non-existent statute

## Completion criteria

- Every municipality entity VERIFIED
- All validation scripts pass

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

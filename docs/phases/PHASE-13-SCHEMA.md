# Phase 13 — Schema, metadata, sitemaps

**Status:** NOT STARTED

## Objective

Structured data that reflects visible content.

## Inputs

- Phase 2 entities + jurisdictions

## Files involved

- `src/lib/seo/schema.ts`
- `sitemap`
- `robots`

## Implementation steps

1. Entity @id graph incl. jurisdictions
2. LocalBusiness with real NAP
3. Sitemap == indexable set

## Validation

- Schema validates
- 0 claimed attributes that do not exist

## Risks

- Claiming ratings, awards or addresses that are not real

## Completion criteria

- Schema + sitemap green

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

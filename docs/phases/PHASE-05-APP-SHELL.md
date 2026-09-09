# Phase 05 — Core application shell

**Status:** NOT STARTED

## Objective

A deployable Next 15 app with CI from the first commit.

## Inputs

- Sierra engine (copied)

## Files involved

- `src/app/**`
- `src/lib/**`
- `package.json`
- `.github/workflows/*`

## Implementation steps

1. Next 15 + React 19 + TS strict + Tailwind v4
2. Copy src/lib/seo/* and src/types/*
3. Vitest + CI workflow
4. Layout, Navbar, Footer, security headers, robots, sitemap seam

## Validation

- CI green
- Production build passes in CI

## Risks

- Building locally instead of letting CI verify

## Completion criteria

- CI green on first push
- Deploys

## Rollback

This repository is main-only and Sierra is read-only, so rollback is `git revert`
of this phase's commits. No phase mutates the donor repository or any live
deployment; Vercel and DNS remain the owner's actions.

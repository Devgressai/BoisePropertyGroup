# Boise Property Group

Direct property-buying platform for Ada County and the Treasure Valley, Idaho.

Second-generation build of the Sierra Property Buyers architecture: the SEO
engine, link graph, indexation gating and page templates are inherited; every
factual layer is rebuilt from verified Idaho sources.

## Ground rules

1. **`~/sierrapropertybuyers` is READ-ONLY.** It is the architectural donor and
   a live production site with no CI and no stage branch. Read it and copy out
   of it. Never write to it. `git status --porcelain` there must be empty.
2. **No fabricated facts.** Every Idaho claim that depends on law, jurisdiction,
   tax, geography, housing or process carries a source and a verification date.
   Missing evidence is recorded, not invented.
3. **CI green is the gate.** Never build locally; push and let CI verify.
4. **Indexation is earned.** Pages render and pass link equity from day one, but
   `index` requires passing the quality gate. `follow` is never false.

## Layout

| Path | Purpose |
|---|---|
| `docs/idaho-migration/` | Phase 0 forensic audit of Sierra |
| `docs/phases/` | One file per implementation phase |
| `data/migration/` | Generated manifests describing Sierra |
| `research/idaho/ada-county/` | Ada County research dossiers |
| `data/idaho/` | Machine-readable Idaho evidence system |
| `scripts/migration/` | Sierra extraction tooling |
| `scripts/validation/` | Evidence and content integrity checks |

## Regenerating the Sierra manifests

```bash
node scripts/migration/extract-sierra.mjs
```

Reads `~/sierrapropertybuyers` and rewrites `data/migration/*.json`. Pure read;
it opens no file outside that repo's `src/`.

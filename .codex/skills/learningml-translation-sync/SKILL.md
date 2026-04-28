---
name: learningml-translation-sync
description: Maintain reciprocal Spanish/English post translations in the LearningML Astro site. Use when creating, renaming, pairing, validating, or repairing `translation:` frontmatter in `src/content/posts/es/**` and `src/content/posts/en/**`, or when using the repo translation scripts.
---

# LearningML Translation Sync

Use this skill when the task affects bilingual post pairing.

## Files involved

- Posts:
  - `src/content/posts/es/<slug>/index.md`
  - `src/content/posts/en/<slug>/index.md`
- Validation script: `scripts/validate-post-translations.mjs`
- Apply script: `scripts/apply-post-translations.mjs`
- Mapping file: `scripts/posts-map.md`

## Rules

- Every translated post pair should have `translation:` in both files.
- The mapping must be reciprocal:
  - if `es/a -> en/b`, then `en/b -> es/a`
- Slugs may differ across languages.
- The validator checks existence, missing fields, and reciprocal mappings.

## Workflow

1. Identify the ES and EN slugs involved.
2. Edit frontmatter in both files together whenever possible.
3. If updating many mappings at once, use `scripts/posts-map.md` plus `bun run apply:translations`.
4. Run `bun run check:translations`.
5. If the validator fails, fix the content rather than bypassing the script.

## Important limitation

- The provided translation tooling only covers `posts`, not `pages`.
- For `pages`, maintain `translation:` manually and verify route behavior yourself.

## Common mistakes

- Renaming only one side of a translated post pair.
- Forgetting to update `translation:` after a slug change.
- Assuming same-language slugs must match across ES and EN.

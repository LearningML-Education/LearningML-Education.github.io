---
name: learningml-astro-site-change
description: Modify the Astro application layer of the LearningML website. Use when changing routes, layouts, homepage sections, blog listing behavior, public env handling, or other code under `src/pages/**`, `src/layouts/**`, `src/utils/**`, or `astro.config.mjs`.
---

# LearningML Astro Site Change

Use this skill when the task is primarily code, routing, or presentation logic in Astro.

## Main code areas

- `src/pages/index.astro` and `src/pages/en/index.astro`: current homepage implementation.
- `src/pages/[slug].astro` and `src/pages/en/[slug].astro`: dynamic content routes.
- `src/pages/blog/index.astro` and `src/pages/en/blog/index.astro`: blog indexes and filtering.
- `src/layouts/Base.astro`: global shell, nav, footer, analytics, fonts.
- `src/layouts/Post.astro`: article/page presentation.
- `src/utils/postSlug.ts`: slug normalization.
- `src/utils/truncateHtml.ts`: excerpt generation.

## Repo-specific constraints

- This is a mostly static site. Avoid adding client-side complexity without a clear need.
- Spanish routes live at root; English routes live under `/en/`.
- Dynamic routes merge `posts` and `pages`; `posts` take precedence when slugs collide.
- The site already has a visual language. Extend it rather than replacing it casually.

## Environment variables

Be careful with:

- `PUBLIC_LML_OPEN_EDITOR_URL`
- `PUBLIC_LML_OPEN_SCRATCH_URL`
- `PUBLIC_LML_DESKTOP_URL`
- `PUBLIC_LML_BUDGET_CURRENT`
- `PUBLIC_LML_MONTHLY_COST`
- `PUBLIC_LML_BUDGET_ORIGIN_DATE`

Prefer preserving existing fallback behavior unless the task explicitly changes it.

## Validation

- For route or UI code changes, run `bun run build`.
- If route changes affect translated posts, also run `bun run check:translations`.

## Avoid

- Editing `wp-export/output/**` as if it controlled the live app.
- Breaking alternate language links when moving or renaming content.
- Introducing a framework or dependency unless the task truly requires it.

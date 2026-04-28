---
name: learningml-release-readiness
description: Check whether LearningML website changes are safe to release. Use when validating builds, translation integrity, env-dependent homepage behavior, or GitHub Pages deployment assumptions before tagging or shipping the Astro site.
---

# LearningML Release Readiness

Use this skill before a release, before opening a PR, or after significant content/site changes.

## What to verify

- The site builds with `bun run build`.
- Post translation mappings pass with `bun run check:translations`.
- Homepage and CTA changes still respect public env fallbacks.
- No live content was mistakenly edited under `wp-export/output/**` instead of `src/content/**`.
- Any new slug still resolves to the intended ES or EN route.

## Deployment facts

- Deployment is defined in `.github/workflows/deploy.yml`.
- GitHub Pages publish happens on tags matching `v*` or by manual dispatch.
- The build artifact is `dist/`.
- Bun version in CI is `1.3.6`.

## Minimal release checklist

1. Review changed files for source-of-truth mistakes.
2. Run `bun run check:translations` if posts were touched.
3. Run `bun run build` for site changes.
4. Report any env vars needed to exercise affected CTAs or homepage sections.
5. Call out residual risks clearly if validation could not be completed.

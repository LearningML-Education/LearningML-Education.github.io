---
name: learningml-content-authoring
description: Create or edit LearningML website pages and blog posts in Markdown for this Astro repo. Use when the task involves `src/content/pages/**` or `src/content/posts/**`, bilingual editorial updates, frontmatter, content-local images, or keeping the educational LearningML tone consistent.
---

# LearningML Content Authoring

Use this skill when the work is mainly editorial and the source of truth is Markdown content.

## Source of truth

- Active content lives in `src/content/pages/**` and `src/content/posts/**`.
- `wp-export/output/**` is reference or migration material, not the normal place to edit.

## Content model

### Posts

- Paths:
  - `src/content/posts/es/<slug>/index.md`
  - `src/content/posts/en/<slug>/index.md`
- Required frontmatter fields:
  - `title`
  - `date`
  - `categories`
  - `translation`

### Pages

- Paths:
  - `src/content/pages/es/<slug>/index.md`
  - `src/content/pages/en/<slug>/index.md`
- Typical frontmatter fields:
  - `title` optional
  - `date` optional
  - `translation` optional

## Editing rules

- Prefer editing existing content entries over creating parallel copies elsewhere.
- Keep ES/EN versions aligned in structure when they are intended as translations.
- Preserve or improve readability in Markdown before reaching for embedded HTML.
- Use embedded HTML only for layout or media cases Markdown cannot express well.
- Keep image assets near the entry when they are specific to one post or page.
- Use `public/` only for shared assets or assets that need a stable absolute URL.

## Tone and audience

- Write for educators, students, and people learning AI through practice.
- Favor concrete explanations, classroom usefulness, and plain language over hype.
- Keep claims grounded in what LearningML actually does.

## Safety checks

- Verify slug collisions before creating a new page or post.
- If you touch posts in both languages, confirm `translation:` is present and points to the opposite slug.
- If the task changes post metadata, run `bun run check:translations`.

## When not to use this skill

- If the change is mainly in Astro layouts, routes, or environment-driven UI, use the Astro-focused repo skill instead.

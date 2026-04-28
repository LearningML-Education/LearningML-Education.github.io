# LearningML Website Agent Guide

Este repositorio contiene la web pública de LearningML construida con Astro y contenido en Markdown.

## Objetivo del repo

- Publicar una web estática bilingüe para `learningml.org`.
- Mantener páginas y posts en `src/content`.
- Generar HTML estático con Astro.
- Desplegar en GitHub Pages mediante tags `v*`.

## Fuente de verdad

- Edita contenido vivo en `src/content/pages/**` y `src/content/posts/**`.
- Usa `public/**` para assets globales servidos por ruta absoluta.
- Trata `wp-export/output/**` como material de migración o referencia histórica. No debe ser la fuente principal de nuevas ediciones salvo petición expresa.

## Stack y comandos

- Runtime y package manager: `bun@1.3.6`
- Framework: `astro@4`
- Desarrollo local: `bun run dev`
- Build: `bun run build`
- Validación de traducciones de posts: `bun run check:translations`
- Aplicación masiva de mappings ES/EN: `bun run apply:translations`

## Mapa del proyecto

- `src/pages/index.astro` y `src/pages/en/index.astro`: home ES/EN.
- `src/pages/[slug].astro` y `src/pages/en/[slug].astro`: rutas dinámicas para páginas y posts.
- `src/pages/blog/index.astro` y `src/pages/en/blog/index.astro`: listados del blog.
- `src/layouts/Base.astro`: shell global, navegación, footer, tipografías, analytics.
- `src/layouts/Post.astro`: layout de posts/páginas de contenido.
- `src/content/config.ts`: schema de frontmatter para `posts` y `pages`.
- `scripts/validate-post-translations.mjs`: exige reciprocidad ES/EN en posts.
- `scripts/apply-post-translations.mjs`: escribe `translation:` a partir de `scripts/posts-map.md`.

## Modelo de contenido

### Posts

Ubicación:

- `src/content/posts/es/<slug>/index.md`
- `src/content/posts/en/<slug>/index.md`

Frontmatter mínimo:

```yaml
---
title: "..."
date: 2026-03-05
categories:
  - "..."
translation: other-language-slug
---
```

Reglas:

- `translation` debe apuntar al slug de la versión en el otro idioma.
- El mapping debe ser recíproco.
- Los slugs ES y EN pueden ser distintos.
- Las categorías se usan en el filtrado del blog, así que conviene mantenerlas coherentes y normalizadas.

### Pages

Ubicación:

- `src/content/pages/es/<slug>/index.md`
- `src/content/pages/en/<slug>/index.md`

Frontmatter permitido:

```yaml
---
title: "..."
date: 2024-03-26
translation: other-language-slug
---
```

Notas:

- `title` y `date` son opcionales en `pages`.
- Si existe `translation`, el layout construye el selector de idioma.

## Routing y precedencia

- Las URLs públicas son `/<slug>/` para ES y `/en/<slug>/` para EN.
- `normalizePostSlug()` elimina prefijos `es/` y `en/` y el sufijo `/index`.
- En las rutas dinámicas, si un `post` y una `page` comparten slug, gana el `post`.
- Antes de crear nuevo contenido, comprueba que no colisiona con otro slug ya existente.

## Convenciones editoriales

- Mantén el contenido bilingüe alineado cuando exista equivalente ES/EN.
- Si creas o renombras un post, actualiza ambos lados o deja claro que falta la traducción.
- Usa Markdown simple y HTML embebido solo cuando aporte algo real.
- Conserva imágenes cerca del contenido cuando sean específicas de ese post/página.
- Usa `public/` para recursos compartidos o cuando la URL pública estable importe.
- Respeta el tono educativo, práctico y claro de LearningML.

## Convenciones de UI

- Mantén la estética ya establecida: verdes, fondos claros, `Nunito`/`Nunito Sans`, layouts limpios y accesibles.
- Cambios globales de navegación, footer o tipografía suelen pasar por `src/layouts/Base.astro`.
- Cambios de legibilidad de artículos suelen pasar por `src/layouts/Post.astro`.
- No introduzcas complejidad de cliente innecesaria en un sitio mayoritariamente estático.

## Variables públicas

La home y algunas CTAs dependen de:

- `PUBLIC_LML_OPEN_EDITOR_URL`
- `PUBLIC_LML_OPEN_SCRATCH_URL`
- `PUBLIC_LML_DESKTOP_URL`
- `PUBLIC_LML_BUDGET_CURRENT`
- `PUBLIC_LML_MONTHLY_COST`
- `PUBLIC_LML_BUDGET_ORIGIN_DATE`

Reglas:

- Usa fallback razonable si el código existente ya lo hace.
- No hardcodees secretos.
- Recuerda que GitHub Actions inyecta estas variables en el workflow de deploy.

## Deploy

- El despliegue ocurre desde `.github/workflows/deploy.yml`.
- Se publica con `workflow_dispatch` o al empujar tags con patrón `v*`.
- El artefacto publicado es `dist/`.

## Flujo recomendado para agentes

1. Determina si la tarea es de contenido, traducción o Astro.
2. Edita la fuente viva en `src/content` o `src/**`; evita tocar `wp-export/output`.
3. Si hay posts ES/EN implicados, revisa `translation:` en ambos.
4. Ejecuta la validación mínima relevante:
   - contenido/post bilingüe: `bun run check:translations`
   - cambios de sitio: `bun run build`
5. Resume archivos cambiados, validación realizada y riesgos pendientes.

## Qué evitar

- No mover contenido vivo a `wp-export/output`.
- No romper enlaces ES/EN al cambiar slugs sin actualizar `translation`.
- No asumir que una página Markdown controla por sí sola la home actual: la home principal está implementada en Astro.
- No introducir dependencias nuevas sin necesidad clara.

## Skills locales

Este repo incluye skills específicas en `.codex/skills/` para:

- autoría y edición de contenido LearningML
- mantenimiento de traducciones de posts
- cambios estructurales en Astro
- comprobación de preparación para release

Úsalas cuando la tarea encaje en uno de esos flujos.

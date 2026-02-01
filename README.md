# LearningML — Sitio web

Sitio base en Astro para la home de LearningML Education. Este repositorio será el punto de partida para construir la web pública del proyecto.

## Desarrollo local

Requisitos:
- Bun 1.3.6 (o compatible)

Pasos:
```bash
cd learningML-education.github.io
bun install
bun run dev
```

Abrir: http://localhost:4321

## Traducciones de posts (ES/EN)

Los posts viven en:
- `src/content/posts/es/<slug>/index.md`
- `src/content/posts/en/<slug>/index.md`

Cada post debe declarar el slug de su traducción mediante frontmatter:

```yaml
translation: slug-de-la-traduccion
```

Reglas:
- El mapeo debe ser recíproco: si `es/a` apunta a `en/b`, entonces `en/b` debe apuntar a `es/a`.
- Los slugs pueden ser distintos entre ES y EN.

Rutas:
- ES: `/<slug>/`
- EN: `/en/<slug>/`

Validación:
```bash
bun run check:translations
```

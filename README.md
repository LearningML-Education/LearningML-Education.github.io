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

## Variables de entorno (home)

Puedes configurar los enlaces principales de la home con variables públicas de Astro:

```bash
PUBLIC_LML_OPEN_EDITOR_URL=/lml-editor/
PUBLIC_LML_OPEN_SCRATCH_URL=/scratch/
PUBLIC_LML_DESKTOP_URL=/learningml-desktop/
PUBLIC_LML_BUDGET_CURRENT=1200
PUBLIC_LML_MONTHLY_COST=50
PUBLIC_LML_BUDGET_ORIGIN_DATE=2025-03-01
```

En local puedes definirlas en un fichero `.env`.

### Variables en GitHub Actions (deploy)

El workflow `.github/workflows/deploy.yml` inyecta estas variables en el paso de `build` usando:

- `vars.*` (Actions Variables), o
- `secrets.*` (Actions Secrets), como fallback.

Debes definirlas en:

`Settings > Secrets and variables > Actions > Variables`  
o en  
`Settings > Secrets and variables > Actions > Secrets`

Nombres:

- `PUBLIC_LML_OPEN_EDITOR_URL`
- `PUBLIC_LML_OPEN_SCRATCH_URL`
- `PUBLIC_LML_DESKTOP_URL`
- `PUBLIC_LML_BUDGET_CURRENT`
- `PUBLIC_LML_MONTHLY_COST`
- `PUBLIC_LML_BUDGET_ORIGIN_DATE`

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

## Publicar en LinkedIn desde la terminal

La CLI publica desde el perfil personal autorizado o desde la página de LearningML, sin añadir ningún componente dinámico a la web. Requiere Bun y una aplicación de LinkedIn.

1. Crea una app en [LinkedIn Developers](https://www.linkedin.com/developers/apps), activa **Sign In with LinkedIn using OpenID Connect** y **Share on LinkedIn**, y configura como URL de retorno `http://127.0.0.1:8787/linkedin/callback`. El primer producto permite a la CLI identificar el perfil autorizado y el segundo concede `w_member_social` para publicar.
2. Copia el ejemplo de configuración y completa el identificador y secreto de cliente. Si LinkedIn deja de admitir la versión de API indicada, actualiza `LINKEDIN_API_VERSION` según su documentación.

   ```bash
   cp .env.linkedin.example .env.linkedin
   ```

3. Autoriza la cuenta que publica (debe tener permisos de administración de la página para el destino `learningml`):

   ```bash
   bun run linkedin:login
   ```

4. Previsualiza y publica un borrador de texto. La publicación solo se realiza tras escribir exactamente `PUBLICAR`.

   ```bash
   bun run linkedin:preview -- --as personal --file borrador-linkedin.txt
   bun run linkedin:publish -- --as learningml --file borrador-linkedin.txt
   ```

`.env.linkedin` y `.linkedin/session.json` contienen secretos locales y están excluidos de Git.

Para publicar desde una página, LinkedIn exige una aplicación independiente aprobada para **Community Management API**. No se puede añadir ese producto a la aplicación de perfil personal; consulta la documentación de LinkedIn antes de configurar el destino `learningml`.

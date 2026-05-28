# Progreso del portfolio — Kevin De La Fuente

> **Archivo vivo.** Claude lo actualiza al final de cada sesión y cuando
> completa tareas significativas. Si vas a cerrar la sesión y este archivo
> no se actualizó en los últimos turnos, pediselo: *"actualizá PROGRESO.md
> antes de cerrar"*.

---

## Estado actual

**Fase activa:** Fase 1 — V1 funcional (5 secciones + SEO listas, falta pulido)
**Última actualización:** 2026-05-28 (sesión 6 — Claude Code)
**URL prod:** https://portfolio-kevin-psi.vercel.app
**Repo:** https://github.com/kevindlf/portfolio-kevin
**Próxima acción:** Fase 1 cerrada salvo screenshots de proyectos (Kevin pasa archivos a `public/projects/` → agregar slot de preview en cards). Lighthouse OK (94/96/100/100), og:image dinámico OK. Luego Fase 2 (Three.js hero, mobile menu, form Resend).

---

## Bitácora de sesiones

### Sesión 1 — 2026-05-24 (Cowork)
**Objetivo:** Armar estructura base del proyecto.

**Hecho:**
- Estructura de carpetas: `.claude/agents/`, `docs/`, `public/`
- `CLAUDE.md` maestro (12 secciones) con stack, sistema visual, reglas
- 5 agentes especializados: `frontend-designer`, `three-js-specialist`, `content-translator`, `seo-optimizer`, `code-reviewer`
- `docs/SKILLS.md` con los 8 comandos `npx skills add`
- `docs/TEMPLATE_REFERENCE.md` (qué tomar y qué NO del repo davidhckh)
- `docs/CONTENT.md` con copy oficial ES/EN
- `docs/ROADMAP.md` con 4 fases
- `README.md`, `.gitignore`, `.env.example`, `package.json` esqueleto

**Pendiente para próxima sesión:**
- Instalar skills (Kevin lo hace desde su editor)
- `npx create-next-app@latest .` (sobreescribe `package.json` — esperado)
- Instalar deps 3D: `npm i three @react-three/fiber @react-three/drei framer-motion next-intl`
- Configurar Tailwind con tokens del CLAUDE.md sección 5
- `git init` y push a GitHub (`kevindelafuente/portfolio`)
- Conectar a Vercel y deploy de "Hello World" bilingüe

**Decisiones tomadas:**
- Stack final: Next.js 16 + React 19 + TypeScript strict + Three.js (R3F)
- Tema: dark mode tipo David Hck
- Idioma: ES + EN toggle con next-intl
- Inspiración: davidhckh/portfolio-2025 (NO copiar)
- Skills installation scope: project para específicas, global solo `find-skills` y `skill-creator`

**Decisiones abiertas** (preguntar cuando se llegue al punto):
- Color accent definitivo: violeta vs cyan vs verde lima
- Form contacto: Resend (con DNS) vs `mailto:` simple
- Dominio custom (sugerencia: `kevindelafuente.dev`) vs subdominio Vercel
- CV descargable como PDF en header: sí/no
- Repo GitHub público o privado al principio
- Twitter/X handle para meta tags

---

### Sesión 2 — 2026-05-24 (Claude Code)
**Objetivo:** Bootstrappear Next.js 16 en el repo y dejar dev server corriendo.

**Hecho:**
- Backup de archivos en riesgo (`README.md`, `.gitignore`, `.env.example` → `.bak`)
- Movido todo lo no-Next a `../portfolio-kevin-staging/` (Next CLI rechaza directorio no vacío incluso con `--yes`)
- `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*" --use-npm --yes`
- Versiones instaladas: `next@16.2.6`, `react@19.2.4`, `typescript@^5`, `tailwindcss@^4` (PostCSS), `eslint@^9`
- `tsconfig.json` con `strict: true` confirmado, alias `@/*` → `./src/*`
- Next 16 también ejecutó `git init` automáticamente (no estaba planeado pero suma)
- Next 16 generó `AGENTS.md` (warning de breaking changes en N16) — se conserva
- Restaurado `CLAUDE.md`, `PROGRESO.md`, `.agents/`, `.sixth/`, `skills-lock.json`, `README.md`, `.env.example`, `.gitignore` desde staging (custom `.gitignore` era superset del de Next)
- Limpieza completa de staging y `.bak`
- Smoke test: `npm run dev` → Ready in 417ms con Turbopack, `curl http://localhost:3000/` → HTTP 200 (16872 bytes)

**Pendiente para próxima sesión:**
- `npm i next-intl three @react-three/fiber @react-three/drei framer-motion`
- Configurar `next-intl` con locales `es`/`en` (estructura `src/app/[locale]/`)
- Aplicar tokens de color/tipografía del CLAUDE.md §5 en `src/app/globals.css`
- Decidir color accent definitivo (violeta vs cyan vs verde lima)
- Push del repo a GitHub (`kevindelafuente/portfolio` — confirmar nombre y público/privado)
- Link a Vercel, deploy "Hello World" bilingüe

**Decisiones tomadas:**
- Flags Next: `--typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*" --use-npm`
- Turbopack queda habilitado (default en Next 16)
- Tailwind 4 con PostCSS (sin `tailwind.config.ts` — CSS-first via `@tailwindcss/postcss`)
- Estrategia de conflictos en bootstrap futuro: staging fuera del cwd (la flag `--yes` no salta el check de directorio no vacío)
- `AGENTS.md` de Next se conserva (warning útil sobre breaking changes en N16)

**Decisiones abiertas:**
- Form contacto (Resend vs `mailto:`)
- Dominio (custom vs Vercel)
- CV PDF en header (sí/no)
- Twitter/X handle para meta tags

---

### Sesión 3 — 2026-05-24 (Claude Code, continuación)
**Objetivo:** Instalar deps restantes Fase 0 y aplicar tokens visuales.

**Hecho:**
- `npm i next-intl@4.12.0 three@0.184.0 @react-three/fiber@9.6.1 @react-three/drei@10.7.7 framer-motion@12.40.0`
- `npm i -D @types/three@0.184.1`
- Bug observado: primer `npm install` con args reescribió `next` a `^9.3.3` y falló ERESOLVE — corregido manualmente a `16.2.6` y re-sincronizado
- `src/app/globals.css` reescrito con tokens CLAUDE.md §5 (dark default, `color-scheme: dark`, `@theme inline` mapeando bg/fg/accent/border, `::selection` accent, `prefers-reduced-motion` respetado)
- `src/app/layout.tsx`: `lang="es"`, metadata real (título + descripción), body usa `var(--font-sans)`
- Smoke test: Ready 400ms, HTTP 200 (17152 bytes)

**Pendiente para próxima sesión:**
- Configurar `next-intl` con locales `es`/`en`: middleware, `[locale]` segment, `messages/{es,en}.json` con copy de `docs/CONTENT.md`
- `git remote add origin git@github.com:kevindelafuente/portfolio.git` + push (público)
- Vercel link + deploy "Hello World" bilingüe
- Reescribir `src/app/page.tsx` con nombre + titular ES como Hello World

**Decisiones tomadas:**
- Color accent: **violeta `#7c5cff`** (definitivo)
- Tema dark por default (sin toggle light en V1, alineado con CLAUDE.md §5)
- GitHub repo: `kevindelafuente/portfolio` público (deferred al próximo turno por scope)

---

### Sesión 4 — 2026-05-24 (Claude Code, continuación)
**Objetivo:** Hello World biligüe + i18n completo.

**Hecho:**
- Hello World con tokens visibles en `src/app/[locale]/page.tsx` (nombre, role, stack chips, card "próximos pasos")
- `src/i18n/routing.ts` — locales `['es', 'en']`, default `es`, `localePrefix: 'always'`
- `src/i18n/navigation.ts` — `Link`, `redirect`, `usePathname`, `useRouter` locale-aware
- `src/i18n/request.ts` — `getRequestConfig` carga `messages/{locale}.json`
- `src/proxy.ts` — `createMiddleware(routing)` con matcher (renombrado de `middleware.ts` — Next 16 deprecó la convención)
- `next.config.ts` — wrapped con `createNextIntlPlugin("./src/i18n/request.ts")`
- `src/app/[locale]/layout.tsx` — `generateStaticParams`, `generateMetadata` async (lee `meta.title`/`meta.description` por locale), `setRequestLocale`, `NextIntlClientProvider`, `notFound()` si locale inválido
- `src/app/[locale]/page.tsx` — Server Component async con `getTranslations`, usa keys `hero.*`, `status.items.*`
- `src/components/lang-switcher.tsx` — Client Component, toggle ES/EN preservando pathname con `useRouter().replace(pathname, { locale })`, accent violeta cuando activo, disabled durante transition
- `messages/es.json` y `messages/en.json` — namespace `meta`, `hero`, `status`, `langSwitch`
- Smoke test: `/` → 307 a `/es`, `/es` 200 (ES copy), `/en` 200 (EN copy), `/fr` 307 (fallback default), title HTML cambia por locale, lang attribute correcto

**Pendiente para próxima sesión:**
- Vercel dashboard import + deploy (Kevin lo hace)
- Verificar prod `/`, `/es`, `/en` + toggle
- Cerrar Fase 0 → arrancar Fase 1 (header con toggle, footer, secciones)

**Decisiones tomadas:**
- next-intl v4 con `localePrefix: 'always'` (URLs explícitas `/es/...` y `/en/...`, mejor SEO + hreflang)
- Default locale `es` (mercado primario hispano)
- Convención Next 16: archivo `proxy.ts` no `middleware.ts`
- `messages/*.json` namespace plano por sección (`hero`, `status`, etc.) — facilita lazy splitting futuro si crece
- GitHub handle real: `kevindlf` (no `kevindelafuente` como decía CLAUDE.md inicialmente)
- Repo: `github.com/kevindlf/portfolio-kevin` (público) — Kevin creó el repo vacío en GitHub, push hecho desde local
- Branch principal: `main` (renombrado de `master` antes del primer push)
- Vercel: import vía dashboard (no CLI, evita install global)

---

### Sesión 5 — 2026-05-24 (Claude Code, arranque Fase 1)
**Objetivo:** Header + Footer + Hero real con copy oficial.

**Hecho:**
- `messages/{es,en}.json` reescritos: namespaces `nav`, `footer` agregados, `hero` con copy oficial CONTENT.md (tagline, subtitle, ctaPrimary, ctaSecondary). Removidos placeholders Fase 0 (phase/chips/status)
- `src/components/header.tsx` (Server) — sticky top-0 con backdrop-blur, logo `kdlf.` (con punto accent), nav anchors ocultos en mobile (#about #projects #stack #contact), LangSwitcher
- `src/components/footer.tsx` (Server) — copyright dinámico con ICU `{year}`, links GitHub `kevindlf`/LinkedIn `kevindelafuente`/Email `delafuentekevin204@gmail.com`, builtWith
- `src/app/[locale]/layout.tsx` — Header + main + Footer dentro de `NextIntlClientProvider`, `<body id="top">` para link "home" del header
- `src/app/[locale]/page.tsx` reescrito — Hero estático: eyebrow role (mono uppercase accent), H1 nombre (5xl→7xl→5.5rem), tagline 2-3xl, subtitle muted, CTA primario violeta sólido con hover translate-y + focus-visible outline, CTA secundario border + bg-elevated, glow accent decorativo absoluto (blur 120px) aria-hidden, indicador "scroll ↓" bottom
- 3 commits separados (uno por scope): `chore(i18n)`, `feat(layout)`, `feat(hero)`
- Bug observado: PowerShell heredoc `@'...'@` falla con char `↓` en el body — workaround: escribir mensaje a archivo + `git commit -F`
- Push: `c08d42b..b1d27fb main -> main`
- Deploy prod auto-Vercel verificado (~60s): https://portfolio-kevin-psi.vercel.app con header/hero/footer en ambos locales

**Pendiente para próxima sesión:**
- Sección About (`#about`) — copy oficial CLAUDE.md §4.2 + CONTENT.md
- Sección Proyectos (`#projects`) — cards Catan Phones + Velour Fragancias (Kevin pasa paths de screenshots)
- Sección Stack (`#stack`) — grid agrupado por categoría
- Sección Contacto (`#contact`) — email + LinkedIn (sin form todavía)
- Metadata SEO + JSON-LD Person

**Decisiones tomadas:**
- Logo header: `kdlf.` (iniciales con punto accent) — más corto que nombre completo, espacio para nav
- Nav mobile: oculto en este turno (`hidden md:flex`), mobile menu = Fase 2 si suma
- Anchors single-page (`#about` etc.) — no rutas separadas, todo scroll dentro de `/{locale}`
- Footer links externos: 3 fijos (GitHub, LinkedIn, Email) — no se traducen, son destinos
- Hero: glow violeta decorativo en lugar de partículas 3D (eso es Fase 2)
- Convención commits Fase 1: **uno por sección/scope** (`feat(header)`, `feat(hero)`, etc.) confirmado funcionando

---

### Sesión 6 — 2026-05-28 (Claude Code, secciones + SEO)
**Objetivo:** Completar las 4 secciones restantes de Fase 1 + SEO + acreditar Claude.

**Hecho:**
- `src/components/about.tsx` — 2-col desktop: texto (title + p1/p2 + p3 workflow IA) + card de datos (`<dl>`: Ubicación, Formación, Foco)
- `src/components/projects.tsx` — grid 2-col, cards Catan Phones + Velour (period, name, subtitle accent, description, chips de stack, link prod `↗`), hover border accent. Stack chips como constantes (no se traducen)
- `src/components/stack.tsx` — grid agrupado por categoría (Backend/Frontend/DB/DevOps/Integraciones), sin skill bars
- `src/components/contact.tsx` — title + body + CTA mailto (accent) + LinkedIn. Sin form (V1)
- Acreditar Claude: footer.builtWith "· asistido por Claude", chip "Claude (Anthropic)" en Integraciones, `about.p3` (Claude desarrollo / Gemini producto). Uso real confirmado: Claude en dev workflow
- SEO: `generateMetadata` con metadataBase + Open Graph + Twitter card + canonical + alternates hreflang (es/en/x-default); JSON-LD Person schema en layout; `src/app/sitemap.ts` + `robots.ts`; `src/lib/site.ts` (SITE_URL + PERSON reutilizables)
- `messages/{es,en}.json` — namespaces `about`, `projects`, `stack`, `contact` sincronizados con CONTENT.md
- `docs/CONTENT.md` actualizado como source of truth (card datos, labels, Claude, about.p3)
- Lighthouse prod `/es` (mobile): Perf 94, A11y 96, Best 100, SEO 100 — supera target 90/100/95
- Fix LinkedIn: URL anterior redirigía a otro Kevin De La Fuente. Corregida a `https://www.linkedin.com/in/kevindelafuente-729465350/` en footer, contacto, JSON-LD (site.ts), README, CLAUDE.md y agente seo-optimizer
- Claude a la par de Gemini: About p3 reescrito (dev con Claude+Gemini en paralelo; Gemini integrado en chatbots) + chip "Claude (Anthropic)" en stack de Catan y Velour
- `og:image` dinámico: `src/app/[locale]/opengraph-image.tsx` con Next ImageResponse (1200x630, dark + glow violeta, nombre/rol/stack, logo kdlf.), por locale, sin assets externos. Twitter card → `summary_large_image`. Verificado visual + prod 200 image/png
- Commits (autor noreply): `2ca707a` feat(sections), `02f5cbb` feat(content Claude), `6978187` feat(contact), `e87d7f4` feat(seo), `48149e7` Lighthouse, `31dfd46` fix LinkedIn, `aee811e`+`85e48bc` Claude paralelo, `8a93f48` og:image. Todos push fast-forward, deploy prod verificado (~30s)

**Pendiente para próxima sesión:**
- **Screenshots de proyectos** (único bloqueante Fase 1): Kevin pasa capturas de **Catan Phones** y **Velour/perfumería** → `public/projects/`. Specs: homepage/hero del sitio prod, desktop landscape (~16:9), buena resolución (1 por proyecto mínimo). Después: agregar slot de preview arriba de cada card en `projects.tsx` + `next/image`
- "Los otros" proyectos (ej. clínica nefrológica académica): NO están en cards actuales. Solo si se decide agregar card nueva (opcional V2)
- Cerrar Fase 1 → Fase 2 (Three.js hero, mobile menu, form Resend)

**Decisiones tomadas:**
- Identidad git: config **LOCAL** con noreply `165217130+kevindlf@users.noreply.github.com` (no global). Razón: Vercel Hobby rechaza deploy si el commit author no mapea a la cuenta owner; máquina compartida entre clientes. Guardado en memoria de Claude
- About columna derecha = card de datos (no foto, no stats numéricas)
- Componentes flat en `src/components/` (no subcarpetas del CLAUDE.md §6) — sigue convención header/footer de sesión 5
- Claude acreditado en footer + Stack/Integraciones + About p3 + stack de ambos proyectos. Aclaración de Kevin (2026-05-28): el DESARROLLO (diseño, código, BD) lo hizo con Claude y Gemini en paralelo (alternaba por límite de tokens); los chatbots de Catan/Velour integran Gemini (API). Claude figura como herramienta de build, no como integración de producto
- Contacto V1: mailto + LinkedIn, sin form Resend (deferred a Fase 2)
- Tech names (chips) como constantes en componentes, no vía i18n (no se traducen)

**Decisiones tomadas (cont.):**
- og:image RESUELTO: generado dinámico con ImageResponse (no asset estático, no screenshot del hero)
- Screenshots: solo Catan + Velour (los 2 cards actuales). Card de proyecto académico = opcional V2

**Decisiones abiertas:**
- Form contacto Resend (Fase 2) vs seguir con mailto
- Dominio custom vs subdominio Vercel
- CV PDF en header (sí/no), Twitter/X handle para meta tags
- ¿Agregar card de proyecto académico (clínica nefrológica) en V2?

---

## Checklist Fase 0 — Setup

- [x] Estructura del proyecto creada
- [x] `CLAUDE.md` armado
- [x] Agentes definidos
- [x] Docs base (SKILLS, CONTENT, ROADMAP, TEMPLATE_REFERENCE)
- [ ] Skills instaladas (Kevin)
- [x] `create-next-app` ejecutado
- [x] Dependencias 3D + i18n instaladas (next-intl, three, R3F, drei, framer-motion)
- [x] `next-intl` configurado con `es` y `en`
- [x] Tailwind con tokens del CLAUDE.md (dark mode, accent violeta #7c5cff)
- [x] Git init (hecho por create-next-app) + push a GitHub (`kevindlf/portfolio-kevin`)
- [x] Vercel conectado (Kevin importó por dashboard)
- [x] Primer deploy "Hello World" bilingüe funcionando (https://portfolio-kevin-psi.vercel.app)

→ **Fase 0 CERRADA 2026-05-24.** Arrancar **Fase 1**.

---

## Checklist Fase 1 — V1 funcional

_(no arrancar hasta cerrar Fase 0)_

- [x] Header con toggle ES/EN (sticky, blur, nav anchors)
- [x] Footer minimal (copyright dinámico, GitHub/LinkedIn/Email, builtWith)
- [x] Hero estático (sin 3D todavía) — nombre + tagline + 2 CTAs + glow accent
- [x] Sección About (2-col: texto + card de datos)
- [x] Sección Proyectos (Catan Phones + Velour) — falta screenshots
- [x] Sección Stack (grid agrupado por categoría)
- [x] Sección Contacto (mailto + LinkedIn, sin form)
- [x] Metadata SEO básica (OG, Twitter, hreflang, JSON-LD Person, sitemap, robots)
- [x] Deploy a Vercel (auto en push a main)
- [x] Lighthouse ≥ 90/100/95 — prod /es mobile: Perf 94, A11y 96, Best 100, SEO 100 (2026-05-28)

---

## Bloqueos / decisiones pendientes

_(vacío por ahora — Claude agrega acá si encuentra algo que no puede resolver solo)_

---

## Cómo mantener este archivo

**Cuándo actualizar:**
- Al cerrar cada sesión de trabajo
- Al completar una tarea del checklist
- Cuando aparezca un bloqueo o se tome una decisión nueva
- Cuando se cambie de fase

**Qué agregar en cada sesión:**
1. Una nueva sección `### Sesión N — fecha`
2. **Hecho:** lista de outputs concretos (archivos, deploys, decisiones)
3. **Pendiente para próxima sesión:** lo más importante en orden de prioridad
4. **Decisiones tomadas:** las que se cerraron
5. **Decisiones abiertas:** las nuevas que aparecieron

**Qué NO poner acá:**
- Código completo (vive en los archivos del proyecto)
- Errores de runtime resueltos (los resuelve git log)
- Logs de comandos
- Conversaciones largas con Claude

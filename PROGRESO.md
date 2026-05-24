# Progreso del portfolio — Kevin De La Fuente

> **Archivo vivo.** Claude lo actualiza al final de cada sesión y cuando
> completa tareas significativas. Si vas a cerrar la sesión y este archivo
> no se actualizó en los últimos turnos, pediselo: *"actualizá PROGRESO.md
> antes de cerrar"*.

---

## Estado actual

**Fase activa:** Fase 0 — Setup
**Última actualización:** 2026-05-24 (sesión 2 — Claude Code)
**Próxima acción:** Instalar deps Fase 0 restantes (`next-intl`, `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`), configurar tokens Tailwind del CLAUDE.md §5, configurar `next-intl` con locales `es`/`en`, push a GitHub y conectar Vercel.

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

**Decisiones abiertas** (sin novedades respecto a sesión 1):
- Color accent (violeta / cyan / verde lima)
- Form contacto (Resend vs `mailto:`)
- Dominio (custom vs Vercel)
- CV PDF en header (sí/no)
- Repo GitHub (público/privado)
- Twitter/X handle para meta tags

---

## Checklist Fase 0 — Setup

- [x] Estructura del proyecto creada
- [x] `CLAUDE.md` armado
- [x] Agentes definidos
- [x] Docs base (SKILLS, CONTENT, ROADMAP, TEMPLATE_REFERENCE)
- [ ] Skills instaladas (Kevin)
- [x] `create-next-app` ejecutado
- [ ] Dependencias 3D instaladas
- [ ] `next-intl` configurado con `es` y `en`
- [ ] Tailwind con tokens del CLAUDE.md
- [x] Git init (hecho por create-next-app); falta push a GitHub
- [ ] Vercel conectado
- [ ] Primer deploy "Hello World" bilingüe funcionando

→ Cuando todo esto esté tildado, pasar a **Fase 1**.

---

## Checklist Fase 1 — V1 funcional

_(no arrancar hasta cerrar Fase 0)_

- [ ] Header con toggle ES/EN
- [ ] Footer minimal
- [ ] Hero estático (sin 3D todavía)
- [ ] Sección About
- [ ] Sección Proyectos (Catan Phones + Velour)
- [ ] Sección Stack
- [ ] Sección Contacto
- [ ] Metadata SEO básica
- [ ] Deploy a Vercel
- [ ] Lighthouse ≥ 90 / 100 / 95

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

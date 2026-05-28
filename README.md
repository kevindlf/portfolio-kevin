# Portfolio — Kevin De La Fuente

Portfolio personal de Kevin De La Fuente, Fullstack Developer (Java · Spring
Boot · Next.js · React) basado en Mendoza, Argentina.

🌐 **En vivo:** _pendiente de deploy_
💼 **LinkedIn:** [linkedin.com/in/kevindelafuente-729465350](https://www.linkedin.com/in/kevindelafuente-729465350/)

---

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5 strict**
- **Three.js** + **@react-three/fiber** para escenas 3D inmersivas
- **Tailwind CSS 4** + **shadcn/ui**
- **next-intl** para ES/EN
- **framer-motion** para transiciones
- Deploy en **Vercel**

Inspiración visual (no copiado): [davidhckh/portfolio-2025](https://github.com/davidhckh/portfolio-2025).
Stack distinto, contenido propio, identidad propia.

---

## Estructura

```
portfolio-kevin/
├── CLAUDE.md              ← contexto maestro (LEER ANTES DE CODEAR)
├── .claude/
│   └── agents/            ← 5 agentes especializados
├── docs/
│   ├── SKILLS.md          ← skills recomendadas
│   ├── TEMPLATE_REFERENCE.md
│   ├── CONTENT.md         ← copy ES/EN
│   └── ROADMAP.md         ← plan por fases
├── public/                ← assets (favicon, screenshots)
└── src/                   ← código (pendiente, ver ROADMAP fase 0)
```

---

## Empezar a trabajar

1. **Leer `CLAUDE.md`** — contexto, stack, reglas, decisiones.
2. **Leer `docs/ROADMAP.md`** — qué fase toca y qué tareas tiene.
3. **Instalar skills** desde `docs/SKILLS.md`.
4. **Fase 0 del roadmap:**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --app --src-dir
   npm i three @react-three/fiber @react-three/drei framer-motion next-intl
   ```
5. **Cada sesión termina con commit + push.** Cada fase termina con deploy.

---

## Agentes disponibles

Desde Claude Code, invocar con `@<nombre>`:

- `@frontend-designer` — UI, Tailwind, a11y, responsive
- `@three-js-specialist` — escenas R3F, shaders, performance
- `@content-translator` — sincronizar messages/{es,en}.json
- `@seo-optimizer` — metadata, OG, JSON-LD, Core Web Vitals
- `@code-reviewer` — review pre-merge obligatorio

---

## Reglas no negociables

Ver `CLAUDE.md` sección 9. Las más importantes:

- Todo string visible va via `next-intl` (nunca hardcoded)
- `prefers-reduced-motion` respetado siempre
- Lighthouse ≥ 90 performance, ≥ 95 a11y, = 100 SEO
- Cero copia literal del template de David Hck
- Solo los proyectos reales (Catan Phones y Velour) — no inventar

# Portfolio de Kevin De La Fuente — Contexto maestro del proyecto

Este archivo es la fuente de verdad para Claude (Code, Cowork o cualquier agente)
trabajando en este repositorio. Leer SIEMPRE este archivo antes de generar código,
modificar componentes o agregar contenido.

---

## 1. Identidad del proyecto

- **Nombre del proyecto:** portfolio-kevin
- **Dueño:** Kevin De La Fuente
- **Ubicación:** Rivadavia, Mendoza, Argentina
- **Email de contacto público:** kevindlf2004@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/kevindelafuente-729465350/
- **Objetivo del portfolio (doble foco):**
  1. **Vender servicios freelance** — webs y tiendas online a medida (con panel de
     administración) a comercios/pymes. Sección "Servicios" con paquetes, precios y
     CTA de WhatsApp; demos en vivo como prueba.
  2. **Estar abierto a oportunidades** de empleo Fullstack/Backend/Frontend.
  Se destaca el trabajo real ya entregado (Catan Phones, Velour Fragancias) y la
  capacidad de aprender e implementar tecnologías modernas de forma autónoma.
  NOTA: el posicionamiento dejó de ser "junior buscando primera experiencia" — ese
  encuadre subvaluaba el perfil. Ver el CLAUDE.md maestro en la carpeta padre
  (`../CLAUDE.md`) para el contexto completo de la operación freelance.

---

## 2. Inspiración y posicionamiento

- **Repo de referencia (NO copiar, solo inspiración visual):**
  https://github.com/davidhckh/portfolio-2025
- **Qué tomamos del template:** estética inmersiva, uso de Three.js para
  animaciones de fondo y transiciones, dark mode, scroll narrativo, microinteracciones.
- **Qué NO copiamos:** el stack (David usa Vue, nosotros Next.js + React),
  textos, layout exacto, identidad visual. El portfolio tiene que ser claramente
  de Kevin, no una reskin del template.
- **Tono:** profesional, técnico, junior con proyectos reales — sin sobrevender.

---

## 3. Stack técnico

### Framework
- **Next.js 16** (App Router, Server Components donde tenga sentido,
  Client Components para Three.js)
- **React 19**
- **TypeScript 5 (strict mode)**

### 3D y animación
- **three** + **@react-three/fiber** + **@react-three/drei**
- **gsap** o **framer-motion** para transiciones y scroll (decidir al implementar
  cada sección — framer-motion suele ser más rápido de iterar)
- **lenis** para smooth scrolling si lo amerita

### Estilos
- **Tailwind CSS 4**
- **shadcn/ui** solo para componentes utilitarios (botones, tooltips, dialogs)
- Variables CSS para tokens de tema (ver sección 5)

### Internacionalización
- **next-intl** — toggle ES/EN
- Idioma default: español (mercado local + internacional hispanohablante)
- Contenido en `messages/es.json` y `messages/en.json`

### Formularios / contacto
- **React Hook Form + Zod** para validación
- Envío de email vía **Resend** (server action) — la decisión final se toma al
  implementar; alternativa: simple `mailto:` para evitar setup de DNS

### Deploy
- **Vercel** (alineado con el resto de proyectos de Kevin)
- Dominio: por definir (sugerencia: `kevindelafuente.dev` o subdominio en Vercel)

### Calidad
- ESLint + Prettier (config de Next.js + Tailwind plugin)
- TypeScript strict
- No tests automatizados en V1 — agregar Playwright si el portfolio crece

---

## 4. Secciones del portfolio

Orden top-to-bottom de la single-page:

### 4.1 Hero
- Nombre: **Kevin De La Fuente**
- Titular (ES): *Fullstack Developer — Java · Spring Boot · Next.js · React*
- Subtítulo (ES): *Construyo productos web end-to-end. Buscando mi primera
  experiencia formal en IT.*
- CTA primario: "Ver proyectos" (scroll a sección 4.3)
- CTA secundario: "Contactarme" (link a email o sección contacto)
- **Animación Three.js:** fondo con partículas o geometría abstracta reactiva
  al mouse. Mantener bajo costo de performance (< 60 fps en mobile).

### 4.2 Sobre mí (About)
Texto base (ES), Claude debe traducir a EN para `messages/en.json`:

> Soy Analista en Programación de Sistemas (Universidad Champagnat, 2025).
> Me especializo en aprender y aplicar tecnologías modernas de forma autónoma —
> desde Spring Boot 4 y Docker hasta Prisma, NextAuth y Gemini AI — traduciéndolas
> en soluciones concretas según las necesidades de cada cliente.
>
> Trabajo con dos stacks principales: Java + Spring Boot con frontend Next.js
> separado, o fullstack Next.js con Prisma y Supabase. En ambos integro IA
> generativa (Gemini), Cloudinary, deploy en Vercel/Railway con Docker, y
> aplico buenas prácticas de seguridad por iniciativa propia.

### 4.3 Proyectos
Cards horizontales o grid 2-col. Cada card incluye: screenshot/preview,
título, descripción corta, stack chips, link a producción, link a GitHub
(si está público).

**Proyecto 1 — Catan Phones**
- URL prod: https://catan-phones.vercel.app/
- Período: abril 2026 – mayo 2026
- Descripción corta: *E-commerce productivo end-to-end para tienda de
  celulares. Backend Spring Boot 4 con auth JWT y auditoría de seguridad de
  9 puntos. Frontend Next.js 16 + React 19 con chatbot Gemini AI y checkout
  híbrido vía WhatsApp/Instagram. Panel admin unificado para canal online y
  ventas físicas.*
- Stack: Java 21, Spring Boot 4, JWT, PostgreSQL, Supabase, Next.js 16,
  React 19, TypeScript, Tailwind, Docker, Railway, Vercel, Cloudinary, Gemini AI

**Proyecto 2 — Velour Fragancias**
- URL prod: https://perfumeria-essence.vercel.app/
- Período: marzo 2026 – abril 2026
- Descripción corta: *Tienda online completa para perfumería con catálogo,
  carrito persistido, sistema de pedidos con estados y panel admin. NextAuth.js
  v5, Prisma + Supabase, chatbot Gemini AI, Cloudinary, checkout vía WhatsApp.
  Cron jobs en Vercel, SEO completo, rate limiting y bcrypt.*
- Stack: Next.js, React, TypeScript, Prisma, Supabase, PostgreSQL, NextAuth.js,
  Zustand, Tailwind, Cloudinary, Gemini AI, Vercel, Zod

**(Opcional V2)** Proyecto académico destacado: Sistema de gestión para
clínica nefrológica (Java + Spring Boot + MySQL/PostgreSQL).

### 4.4 Stack técnico
Visualización agrupada por categoría:
- **Backend:** Java, Spring Boot, Spring Security, JWT, Hibernate/JPA, Maven
- **Frontend:** Next.js, React, TypeScript, Tailwind, shadcn/ui
- **Base de datos:** PostgreSQL, Supabase, Prisma
- **DevOps:** Docker, Vercel, Railway, Git/GitHub
- **Integraciones:** Google Gemini AI, Cloudinary, NextAuth.js, Zod

**Sugerencia de implementación:** grid de logos con tooltip al hover, agrupados
por categoría con tabs o filtros. NO usar barras de "nivel de skill" — es
percibido como junior y no aporta info real.

---

## 5. Sistema visual

### Paleta (dark mode — definir tokens en `globals.css`)
```css
--bg: #0a0a0b;            /* casi negro */
--bg-elevated: #131316;
--fg: #ededee;            /* texto principal */
--fg-muted: #8a8a93;      /* texto secundario */
--accent: #7c5cff;        /* violeta — color signature, ajustable */
--accent-glow: #7c5cff33; /* glow para Three.js y hovers */
--border: #1f1f24;
```

> El accent es ajustable: violeta funciona bien con three.js dark.
> Alternativas viables: cyan eléctrico (#22d3ee), verde lima (#a3e635).
> Confirmar con Kevin antes de pintar todo.

### Tipografía
- **Display / Hero:** Geist Sans o Inter (variable, weights 400-700)
- **Mono (código, tags de stack):** Geist Mono o JetBrains Mono
- Usar `next/font/google` para zero-FOUT

### Layout
- Container max-width: `72rem` (1152px) — `max-w-6xl`
- Padding mobile: `px-6`, desktop: `px-12`
- Spacing entre secciones: `py-24 md:py-32`
- Grid base: 12 columnas en desktop, 4 en mobile

---

## 6. Estructura de carpetas esperada

Cuando Claude Code implemente el proyecto, debe seguir esta estructura:

```
portfolio-kevin/
├── CLAUDE.md                   ← este archivo (NO modificar sin confirmar)
├── README.md                   ← descripción pública del repo
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── .gitignore
├── .env.example
├── .claude/
│   ├── agents/                 ← agentes especializados (ver sección 7)
│   └── commands/               ← slash commands custom (ver sección 8)
├── docs/
│   ├── SKILLS.md               ← skills a instalar con npx
│   ├── TEMPLATE_REFERENCE.md   ← qué tomamos de David Hck y qué no
│   ├── CONTENT.md              ← textos finales ES/EN
│   └── ROADMAP.md              ← fases V1 → V2 → V3
├── public/
│   ├── favicon.svg
│   └── projects/               ← screenshots de Catan Phones y Velour
├── messages/
│   ├── es.json
│   └── en.json
└── src/
    ├── app/
    │   ├── [locale]/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   └── globals.css
    │   └── api/
    ├── components/
    │   ├── hero/
    │   ├── about/
    │   ├── projects/
    │   ├── stack/
    │   ├── contact/
    │   ├── three/              ← componentes Three.js (R3F)
    │   └── ui/                 ← shadcn/ui
    ├── lib/
    └── i18n/
```

---

## 7. Agentes (.claude/agents/)

El proyecto define agentes especializados para tareas recurrentes. Ver cada
archivo en `.claude/agents/` para el system prompt completo.

- **frontend-designer** — UI, layouts, Tailwind, accesibilidad
- **three-js-specialist** — escenas R3F, shaders, performance
- **content-translator** — sincronizar textos ES/EN, mantener tono
- **seo-optimizer** — metadata, Open Graph, structured data, sitemap
- **code-reviewer** — review pre-merge, foco en TS strict, a11y y performance

Para invocarlos desde Claude Code: `@frontend-designer revisa este componente`.

---

## 8. Skills recomendadas

Ver `docs/SKILLS.md` para la lista completa con comandos de instalación
(`npx skills add ...`).

Skills priorizadas:
1. `frontend-design` (anthropics/skills)
2. `ui-ux-pro-max`
3. `impeccable`
4. `caveman`
5. `supabase` (si en el futuro agregamos backend)
6. `nano-banana-2` (generación de imágenes/assets visuales)
7. `find-skills` (descubrir más skills cuando haga falta)
8. `skill-creator` (crear skills propias del proyecto)

---

## 9. Reglas de trabajo para Claude

Estas reglas son **bloqueantes**. Si algo entra en conflicto, preguntar antes
de avanzar.

1. **Idioma:** todo contenido visible al usuario debe existir en ES y EN. Nunca
   hardcodear strings en componentes — siempre vía `next-intl`.
2. **Performance:** cualquier escena Three.js debe medirse con DevTools.
   Target: 60fps desktop, 30fps mobile mínimo. Si no llega, simplificar.
3. **Accesibilidad:** contraste mínimo AA, `prefers-reduced-motion` respetado
   para animaciones, alt en imágenes, focus visible.
4. **SEO:** cada página con `<title>`, meta description, Open Graph, JSON-LD
   Person schema con datos de Kevin.
5. **No inventar proyectos:** los únicos proyectos reales son Catan Phones y
   Velour Fragancias. Cualquier otro es académico o personal y debe marcarse
   como tal.
6. **No copiar literal del template:** está prohibido copiar componentes, CSS
   o estructura del repo davidhckh/portfolio-2025. Inspirarse, no clonar.
7. **Antes de instalar dependencias nuevas:** consultar con Kevin si son fuera
   de las listadas en sección 3.
8. **Commits:** mensajes en español, formato `tipo(scope): descripción` ej:
   `feat(hero): agregar partículas reactivas al mouse`.
9. **PROGRESO.md es obligatorio:** mantener `PROGRESO.md` actualizado.
   - Al **completar una tarea significativa** (sección terminada, deploy, decisión cerrada): tildar el checklist y agregar en la sesión activa.
   - Al **cerrar sesión** (cuando el usuario diga "hasta acá", "vamos a cerrar", "guardá todo" o equivalente): actualizar la bitácora con Hecho, Pendiente, Decisiones tomadas y abiertas.
   - Al **detectar que el contexto se está agotando** (mensajes de "context low", "long_conversation_reminder", o el usuario lo menciona): proactivamente actualizar `PROGRESO.md` ANTES de seguir trabajando, para no perder el estado.
   - Si Kevin pide explícito "actualizá PROGRESO" o "guardá progreso", hacerlo inmediatamente.
   - Nunca poner código completo, logs o conversaciones en PROGRESO.md — solo estado, decisiones y próximos pasos.

---

## 10. Datos personales y profesionales (canónicos)

Para no duplicar info, los datos canónicos viven en el CLAUDE.md de la carpeta
padre (`../CLAUDE.md` — el de "Linkedlin y CVs"). Este portfolio referencia
esos datos pero los usa con el tono y formato definidos arriba.

Diferencias clave entre el CLAUDE.md padre y este:
- El padre se usa para LinkedIn y CVs (formato profesional plano)
- Este se usa para el portfolio (formato visual, narrativo, bilingüe)

---

## 11. Próximos pasos sugeridos (para Claude Code en el editor)

1. `npx create-next-app@latest . --typescript --tailwind --app --src-dir`
   (sobreescribir archivos existentes con cuidado, mantener este CLAUDE.md)
2. Instalar dependencias 3D y animación:
   `npm i three @react-three/fiber @react-three/drei framer-motion`
3. Instalar i18n: `npm i next-intl`
4. Configurar Tailwind con tokens de sección 5
5. Implementar layout base con locale en `app/[locale]/layout.tsx`
6. Construir secciones en este orden: Hero → About → Proyectos → Stack → Contacto
7. Antes de cada sección, leer la spec correspondiente en este archivo
8. Después de cada sección, correr `@code-reviewer` antes de commitear

---

## 12. Decisiones abiertas (preguntar a Kevin cuando se llegue al punto)

- [ ] Color accent definitivo (violeta vs cyan vs verde lima)
- [ ] ¿Incluir un blog/notas en V2?
- [ ] ¿Form de contacto con Resend o solo `mailto:`?
- [ ] ¿Dominio custom o subdominio Vercel?
- [ ] ¿Mostrar CV descargable como PDF en el header?

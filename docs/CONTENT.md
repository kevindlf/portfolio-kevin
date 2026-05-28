# Copy maestro — ES / EN

Fuente de verdad de todo el texto visible del portfolio. Lo que esté acá
manda. Si hay discrepancia entre este archivo y `messages/*.json`, este gana.

> Después de actualizar este archivo, invocar `@content-translator` para
> sincronizar `messages/es.json` y `messages/en.json`.

---

## Hero

| Clave | ES | EN |
|---|---|---|
| `hero.name` | Kevin De La Fuente | Kevin De La Fuente |
| `hero.role` | Fullstack Developer | Fullstack Developer |
| `hero.tagline` | Construyo productos web end-to-end. | I build end-to-end web products. |
| `hero.subtitle` | Java · Spring Boot · Next.js · React. Buscando mi primera experiencia formal en IT. | Java · Spring Boot · Next.js · React. Open to my first formal IT role. |
| `hero.ctaPrimary` | Ver proyectos | See projects |
| `hero.ctaSecondary` | Contactarme | Get in touch |

---

## About

### ES

> Soy Analista en Programación de Sistemas (Universidad Champagnat, 2025).
> Me especializo en aprender y aplicar tecnologías modernas de forma autónoma
> — desde Spring Boot 4 y Docker hasta Prisma, NextAuth y Gemini AI —
> traduciéndolas en soluciones concretas según las necesidades de cada
> cliente.
>
> Trabajo con dos stacks principales: Java + Spring Boot con frontend Next.js
> separado, o fullstack Next.js con Prisma y Supabase. En ambos integro IA
> generativa (Gemini), Cloudinary, deploy en Vercel/Railway con Docker, y
> aplico buenas prácticas de seguridad por iniciativa propia.

### EN

> I'm a Systems Programming Analyst (Universidad Champagnat, 2025). I
> specialize in independently learning and applying modern technologies — from
> Spring Boot 4 and Docker to Prisma, NextAuth and Gemini AI — turning them
> into concrete solutions tailored to each client's needs.
>
> I work with two main stacks: Java + Spring Boot with a separate Next.js
> frontend, or fullstack Next.js with Prisma and Supabase. In both I
> integrate generative AI (Gemini), Cloudinary, deploy on Vercel/Railway
> with Docker, and apply security best practices on my own initiative.

### Card de datos rápidos (columna derecha)

| Clave | ES | EN |
|---|---|---|
| `about.title` | Sobre mí | About |
| `about.facts.locationLabel` | Ubicación | Location |
| `about.facts.locationValue` | Rivadavia, Mendoza, Argentina | Rivadavia, Mendoza, Argentina |
| `about.facts.educationLabel` | Formación | Education |
| `about.facts.educationValue` | Analista en Programación de Sistemas · Universidad Champagnat, 2025 | Systems Programming Analyst · Universidad Champagnat, 2025 |
| `about.facts.focusLabel` | Foco | Focus |
| `about.facts.focusValue` | Fullstack — Java / Spring Boot · Next.js / React | Fullstack — Java / Spring Boot · Next.js / React |

> `about.p1` y `about.p2` = los dos párrafos de arriba (ES/EN), textual.

---

## Proyectos

### Catan Phones

| Campo | ES | EN |
|---|---|---|
| Título | Catan Phones | Catan Phones |
| Subtítulo | E-commerce de celulares · Fullstack freelance | Mobile phone e-commerce · Freelance fullstack |
| Período | Abr 2026 – May 2026 | Apr 2026 – May 2026 |
| Descripción | E-commerce productivo end-to-end. Backend Spring Boot 4 con auth JWT y auditoría de seguridad de 9 puntos aplicada por iniciativa propia. Frontend Next.js 16 + React 19 con chatbot Gemini AI y checkout híbrido vía WhatsApp e Instagram. Panel admin unificado para canal online y ventas físicas. | Production e-commerce, end-to-end. Spring Boot 4 backend with JWT auth and a self-initiated 9-point security audit. Next.js 16 + React 19 frontend with Gemini AI chatbot and hybrid checkout via WhatsApp and Instagram. Unified admin panel for online and in-store sales. |
| URL prod | https://catan-phones.vercel.app/ | https://catan-phones.vercel.app/ |

**Stack:** Java 21, Spring Boot 4, Spring Security, JWT, PostgreSQL, Supabase,
Next.js 16, React 19, TypeScript, Tailwind, Docker, Railway, Vercel,
Cloudinary, Gemini AI

### Velour Fragancias

| Campo | ES | EN |
|---|---|---|
| Título | Velour Fragancias | Velour Fragancias |
| Subtítulo | E-commerce de perfumería · Fullstack freelance | Perfume e-commerce · Freelance fullstack |
| Período | Mar 2026 – Abr 2026 | Mar 2026 – Apr 2026 |
| Descripción | Tienda online completa con catálogo, carrito persistido, sistema de pedidos con estados y panel admin para canal online y ventas físicas. NextAuth.js v5, Prisma + Supabase, chatbot Gemini AI, Cloudinary, checkout vía WhatsApp. Cron jobs en Vercel, SEO completo, rate limiting y bcrypt. | Full online store with catalog, persistent cart, order tracking and admin panel for both online and in-store sales. NextAuth.js v5, Prisma + Supabase, Gemini AI chatbot, Cloudinary, WhatsApp checkout. Vercel cron jobs, full SEO, rate limiting and bcrypt. |
| URL prod | https://perfumeria-essence.vercel.app/ | https://perfumeria-essence.vercel.app/ |

**Stack:** Next.js, React, TypeScript, Prisma, Supabase, PostgreSQL,
NextAuth.js, Zustand, Tailwind, Cloudinary, Gemini AI, Vercel, Zod

Labels de sección:
- `projects.title` (ES) → "Proyectos" | (EN) → "Projects"
- `projects.liveLabel` (ES) → "Ver sitio" | (EN) → "View site"

> Stack chips = constantes en `src/components/projects.tsx` (nombres tech, no
> se traducen). Screenshots pendientes (Kevin pasa paths a `public/projects/`).

---

## Stack (agrupado)

| Grupo | Tecnologías |
|---|---|
| Backend | Java, Spring Boot, Spring Security, JWT, Hibernate/JPA, Maven |
| Frontend | Next.js, React, TypeScript, Tailwind CSS, shadcn/ui |
| Base de datos | PostgreSQL, Supabase, Prisma |
| DevOps | Docker, Vercel, Railway, Git/GitHub |
| Integraciones | Google Gemini AI, Cloudinary, NextAuth.js, Zod |

Labels:
- `stack.title` (ES) → "Stack técnico" | (EN) → "Tech stack"
- `stack.backend` (ES) → "Backend" | (EN) → "Backend"
- `stack.frontend` (ES) → "Frontend" | (EN) → "Frontend"
- `stack.database` (ES) → "Base de datos" | (EN) → "Database"
- `stack.devops` (ES) → "DevOps" | (EN) → "DevOps"
- `stack.integrations` (ES) → "Integraciones" | (EN) → "Integrations"

---

## Contacto

| Clave | ES | EN |
|---|---|---|
| `contact.title` | Trabajemos juntos | Let's work together |
| `contact.body` | Estoy abierto a roles junior fullstack o backend, tanto remoto como en Mendoza/Argentina. | I'm open to junior fullstack or backend roles, remote or in Mendoza/Argentina. |
| `contact.emailLabel` | Email | Email |
| `contact.linkedinLabel` | LinkedIn | LinkedIn |

---

## Footer

| Clave | ES | EN |
|---|---|---|
| `footer.copyright` | © {year} Kevin De La Fuente | © {year} Kevin De La Fuente |
| `footer.builtWith` | Hecho con Next.js, React y Three.js | Built with Next.js, React and Three.js |

---

## Header / Navegación

| Clave | ES | EN |
|---|---|---|
| `nav.about` | Sobre mí | About |
| `nav.projects` | Proyectos | Projects |
| `nav.stack` | Stack | Stack |
| `nav.contact` | Contacto | Contact |
| `nav.languageToggle` | EN | ES |

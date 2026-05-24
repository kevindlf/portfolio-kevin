# Roadmap del portfolio

Plan por fases. Cada fase es un MVP que se puede deployar. NO arrancar la
fase siguiente hasta tener la anterior en producción y funcionando.

---

## Fase 0 — Setup (1 sesión)

- [x] Crear estructura del proyecto, CLAUDE.md, agents/, docs/
- [ ] `npx create-next-app@latest .` con TS, Tailwind, App Router, src/
- [ ] Configurar Tailwind con tokens del CLAUDE.md
- [ ] Configurar `next-intl` con locales `es` y `en`
- [ ] Inicializar git, primer commit
- [ ] Push a GitHub (repo nuevo: `kevindelafuente/portfolio`)
- [ ] Conectar a Vercel y deploy de un "Hello World" bilingüe

**Salida esperada:** sitio deployed que dice "Kevin De La Fuente" en ES y EN.

---

## Fase 1 — V1 funcional (3-4 sesiones)

- [ ] Layout raíz: header con toggle ES/EN, footer minimal
- [ ] **Hero estático** (sin Three.js todavía): nombre, titular, CTA
- [ ] Sección About con copy oficial bilingüe
- [ ] Sección Proyectos: cards de Catan Phones y Velour Fragancias
  - Screenshots reales en `public/projects/`
  - Stack chips
  - Link a producción
- [ ] Sección Stack: grid de tecnologías agrupadas
- [ ] Sección Contacto: email + LinkedIn (sin formulario todavía)
- [ ] Metadata SEO básica con `seo-optimizer`
- [ ] Deploy a Vercel
- [ ] Lighthouse ≥ 90 performance / 100 SEO / 95 a11y

**Salida esperada:** portfolio profesional que ya podés mandar en aplicaciones.
Funciona en mobile y desktop. Sin animaciones fancy todavía.

---

## Fase 2 — Inmersión 3D (2-3 sesiones)

- [ ] Hero con Three.js: escena de partículas o geometría abstracta
- [ ] Transiciones entre secciones con framer-motion
- [ ] Smooth scroll con lenis (si suma — medir)
- [ ] Cursor custom sutil
- [ ] Microinteracciones en cards de proyectos (hover reveal)
- [ ] `prefers-reduced-motion`: versión estática de cada animación
- [ ] Re-test Lighthouse (mantener ≥ 90 performance)

**Salida esperada:** portfolio inmersivo que destaca visualmente sin
sacrificar performance ni accesibilidad.

---

## Fase 3 — Pulido y conversión (1-2 sesiones)

- [ ] OG image dinámica por idioma con `next/og`
- [ ] Favicon completo (svg + ico + apple-touch)
- [ ] Form de contacto con Resend (server action + Zod)
- [ ] CV descargable como PDF en header (link directo, no popup)
- [ ] JSON-LD Person schema validado
- [ ] Pasada de `impeccable` sección por sección
- [ ] Pasada de `ui-ux-pro-max` para detectar fricciones de UX
- [ ] Analytics minimal (Vercel Analytics o Plausible)

**Salida esperada:** portfolio listo para usarse activamente en aplicaciones,
con tracking de visitas y forma fácil de contactar.

---

## Fase 4 — Diferenciación opcional (cuando aplique)

Ideas para considerar SOLO si el portfolio ya está en producción y querés
seguir invirtiendo tiempo:

- [ ] Blog/notas técnicas (MDX en `app/[locale]/blog/`)
- [ ] Demo interactivo embebido de algún proyecto
- [ ] Sección "now" (qué estoy estudiando/construyendo este mes)
- [ ] Testimonios de clientes freelance (con permiso)
- [ ] Dominio custom (`kevindelafuente.dev` o similar)
- [ ] Integración con LinkedIn API para mostrar última actividad

---

## Reglas de oro

1. **No saltar fases.** Si Fase 1 no está deployed, no arrancar Fase 2.
2. **Cada fase termina con deploy a producción**, no en "está casi listo en local".
3. **Cada fase aplica el checklist de `code-reviewer` antes de mergear a main.**
4. **Si una fase se demora más de 2 semanas, parar y replantear scope.**

# Referencia al template de inspiración

## Repo origen
[davidhckh/portfolio-2025](https://github.com/davidhckh/portfolio-2025) —
*Interactive developer portfolio built with Three.js, Vue and modern web
technologies, focused on immersive user experiences, smooth animations and
high-performance frontend architecture.*

---

## Qué tomamos como inspiración

### Concepto y feeling
- **Inmersivo:** scroll narrativo, transiciones suaves, foco en una cosa por
  pantalla en lugar de mostrar todo de una.
- **Dark mode:** fondo casi negro con acentos vibrantes.
- **Hero con Three.js:** una escena 3D abstracta como fondo del primer
  viewport, no decorativa-vacía sino con un mood.
- **Microinteracciones:** cursores custom, hover states con peso, transiciones
  entre secciones que no son simples fades.

### Patrones de UX
- Indicador de scroll en el hero (sutil, no agresivo)
- Tipografía display grande en hero, cae a tamaño normal en el resto
- Cards de proyectos con preview hover (video corto o reveal de stack)
- Navegación lateral o top fija con anchor links que respetan scroll smooth

### Estructura de secciones
El orden general (Hero → About → Work → Stack → Contact) es estándar y nos
sirve. Lo mantenemos.

---

## Qué NO copiamos

### Stack
- **Vue → Next.js + React.** Cambio fundamental. No copiamos componentes Vue
  a React; los reimplementamos pensando en RSC, Server Actions y la mentalidad
  de Next.js.
- **Su sistema de build (Vite) → Turbopack/Next build.** Diferente toolchain.
- **Sus packages específicos de Vue (vue-router, pinia, etc.)** → equivalentes
  React (next-intl, zustand si hace falta).

### Contenido
- Cero copia de textos, naming, casos de uso o claims.
- Los proyectos son DIFERENTES: David tiene los suyos, Kevin tiene Catan
  Phones y Velour Fragancias.
- El tono es DIFERENTE: el portfolio de Kevin es de un junior buscando primera
  experiencia formal con freelance ya entregado, no de un senior establecido.

### Identidad visual
- La paleta es DIFERENTE (ver CLAUDE.md sección 5). David usa su propio
  acento; Kevin usa el suyo (a definir entre violeta/cyan/lima).
- La tipografía es DIFERENTE.
- El logo / wordmark es DIFERENTE.

### Código
- **Prohibido copy-paste de archivos del template.** Si necesitás un patrón
  similar (ej: scroll smooth, partículas), reimplementalo desde cero con
  buenas prácticas de R3F, leyendo docs oficiales — no parsear el código de
  David.
- Esto es ético (atribución y propiedad) y técnico (lo de Vue no traduce 1:1
  a React).

---

## Cómo trabajar con esta referencia

1. **Mirá su sitio en vivo (si está deployed) para entender el feeling.**
2. **NO clones el repo.** No lo necesitás. Si querés ver cómo resolvió algo,
   abrílo en GitHub en navegador, mirá el approach conceptual, cerrá la tab.
3. **Pensá: "¿cómo lo haría yo en Next.js + React, con MI contenido?"**
4. **Si en algún momento tu portfolio se siente "igual" al de David, parate
   y rediseñá esa parte.** El portfolio tiene que ser claramente de Kevin.

---

## Diferenciadores claros que SÍ son de Kevin

Para que el portfolio se sienta propio:

- **Posicionamiento:** "Junior con proyectos freelance reales entregados."
  David se vende como senior; Kevin se vende como talento emergente con
  evidencia concreta.
- **Stack visible:** Java + Spring Boot al frente. Pocos portfolios de
  Next.js muestran Java backend, esto te diferencia.
- **Bilingüe ES/EN:** muchos templates son solo en inglés. ES nativo +
  EN profesional te abre el mercado local y remoto.
- **Casos de uso reales argentinos:** WhatsApp/Instagram checkout, panel
  admin para tienda física + online. Es contenido específico de la realidad
  PyME LATAM, no genérico.
- **IA generativa integrada:** Gemini AI en proyectos, no como buzzword sino
  como feature funcional. Mostralo con un mini demo si podés.

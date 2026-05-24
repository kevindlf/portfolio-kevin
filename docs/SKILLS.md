# Skills recomendadas para el portfolio

Lista curada de skills (capacidades de Claude/Claude Code) que potencian el
desarrollo de este portfolio. Instalalas desde tu terminal en la raíz del
proyecto.

> **Nota:** los comandos `npx skills add ...` requieren tener Node.js instalado.
> Si todavía no instalaste Claude Code en tu editor, hacelo primero desde
> https://claude.com/claude-code.

---

## Instalación rápida (todas de una)

```bash
# Skills core para este proyecto
npx skills add https://github.com/anthropics/skills --skill frontend-design
npx skills add https://github.com/juliusbrussee/caveman --skill caveman
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
npx skills add https://github.com/pbakaus/impeccable --skill impeccable
npx skills add https://github.com/agentspace-so/runcomfy-agent-skills --skill nano-banana-2
npx skills add https://github.com/supabase/agent-skills --skill supabase

# Utilidades extra (opcionales pero recomendadas)
npx skills add https://github.com/vercel-labs/skills --skill find-skills
npx skills add https://github.com/anthropics/skills --skill skill-creator
```

---

## Catálogo y cuándo usar cada una

### 1. `frontend-design` — anthropics/skills
**Para qué:** patrones de diseño de UI, mejores prácticas de componentes,
sistema de diseño, tokens.
**Cuándo invocarla:** al armar el sistema visual base (paleta, tipografía,
espaciado), al crear componentes nuevos, al revisar consistencia visual entre
secciones.
**Comando:**
```bash
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

### 2. `caveman` — juliusbrussee/caveman
**Para qué:** simplifica decisiones de UI/UX devolviendo el approach más
directo posible. Antídoto contra el over-engineering.
**Cuándo invocarla:** cuando una sección crezca de complejidad sin razón,
o cuando dudes entre 3 implementaciones y necesites elegir la más simple.
**Comando:**
```bash
npx skills add https://github.com/juliusbrussee/caveman --skill caveman
```

### 3. `ui-ux-pro-max` — nextlevelbuilder/ui-ux-pro-max-skill
**Para qué:** auditoría UX, microinteracciones, jerarquía visual, flujos de
conversión.
**Cuándo invocarla:** después de implementar cada sección visible (Hero,
About, Proyectos, Stack) para que te dé feedback de UX.
**Comando:**
```bash
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
```

### 4. `impeccable` — pbakaus/impeccable
**Para qué:** pulido fino — micro-detalles tipográficos, espaciado óptico,
contraste, alineación pixel-perfect.
**Cuándo invocarla:** en la pasada final antes de deploy a producción, sección
por sección. Esperá a tener todo armado.
**Comando:**
```bash
npx skills add https://github.com/pbakaus/impeccable --skill impeccable
```

### 5. `nano-banana-2` — agentspace-so/runcomfy-agent-skills
**Para qué:** generar imágenes y assets visuales (favicons, OG images, fondos
abstractos, ilustraciones).
**Cuándo invocarla:** al generar el OG image (1200x630), el favicon, o
texturas para Three.js.
**Comando:**
```bash
npx skills add https://github.com/agentspace-so/runcomfy-agent-skills --skill nano-banana-2
```

### 6. `supabase` — supabase/agent-skills
**Para qué:** queries, RLS, migraciones, auth.
**Cuándo invocarla:** SOLO si en V2 agregás un backend (ej: formulario de
contacto que guarde leads, un blog, analytics propias). En V1 del portfolio
no hace falta.
**Comando:**
```bash
npx skills add https://github.com/supabase/agent-skills --skill supabase
```

### 7. `find-skills` — vercel-labs/skills (utilidad)
**Para qué:** buscar nuevas skills disponibles cuando te aparece un problema
fuera del scope de las que ya tenés.
**Cuándo invocarla:** ad-hoc, cuando dudes si existe una skill para algo
específico.
**Comando:**
```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

### 8. `skill-creator` — anthropics/skills (utilidad)
**Para qué:** crear skills propias del proyecto, por ejemplo una skill
"portfolio-kevin-content" que conozca el copy y stack y lo aplique automáticamente.
**Cuándo invocarla:** una vez que tengas patrones repetitivos en el proyecto
y quieras automatizarlos.
**Comando:**
```bash
npx skills add https://github.com/anthropics/skills --skill skill-creator
```

---

## Cómo usar una skill desde Claude Code

Una vez instalada, invocala así en tu mensaje:

```
@frontend-design revisá la jerarquía visual de src/components/hero/Hero.tsx
@caveman simplificá este componente, está sobre-ingenierizado
@impeccable hacé pasada final sobre la sección About antes del deploy
```

Las skills se combinan con los agentes que están en `.claude/agents/`. Un
flujo típico sería:

1. `@frontend-designer` implementa la sección
2. `@ui-ux-pro-max` (skill) audita UX
3. `@code-reviewer` revisa código
4. `@impeccable` (skill) pulido final
5. Deploy

---

## Mantenimiento

- **Listar las que tenés instaladas:**
  ```bash
  npx skills list
  ```
- **Remover una:**
  ```bash
  npx skills remove <nombre>
  ```
- **Actualizar todas:**
  ```bash
  npx skills update
  ```

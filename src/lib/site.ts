export const SITE_URL = "https://portfolio-kevin-psi.vercel.app";

export const PERSON = {
  name: "Kevin De La Fuente",
  jobTitle: "Fullstack Developer",
  email: "kevindlf2004@gmail.com",
  locality: "Rivadavia",
  region: "Mendoza",
  country: "AR",
  university: "Universidad Champagnat",
  github: "https://github.com/kevindlf",
  linkedin: "https://www.linkedin.com/in/kevindelafuente-729465350/",
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "Prisma",
  ],
} as const;

// WhatsApp de contacto de Kevin (Rivadavia, Mendoza).
// Formato wa.me: 54 (país) + 9 (móvil) + 2634 (área) + 383534.
export const WHATSAPP = "5492634383534";

export const WHATSAPP_DEFAULT_MSG =
  "Hola Kevin! Vi tu portfolio y quiero consultarte por un proyecto.";

/** Arma un link de WhatsApp con mensaje pre-cargado. */
export function waLink(message: string = WHATSAPP_DEFAULT_MSG): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

// Demos revendibles (viven en ../portfolio-demos, publicadas aparte).
// Cargar la URL en vivo cuando esté publicada; si queda "", se muestra "Pronto".
// `key` es literal (lo usa i18n); `url` es string para admitir "" (demo sin publicar).
type DemoKey = "barberia" | "gym" | "gastro" | "padel" | "bazar";
export const DEMOS: readonly { key: DemoKey; url: string }[] = [
  { key: "barberia", url: "https://barberia-demo-sigma.vercel.app/" },
  { key: "gym", url: "https://gym-demo-chi-two.vercel.app/" },
  { key: "gastro", url: "https://gastro-demo-rho.vercel.app/" },
  { key: "padel", url: "https://padel-demo-beta.vercel.app/" },
  { key: "bazar", url: "https://bazar-demo-dusky.vercel.app/" },
];

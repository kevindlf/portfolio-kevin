import { getTranslations } from "next-intl/server";
import { Reveal } from "./reveal";

const GROUPS = [
  {
    key: "backend",
    items: ["Java", "Spring Boot", "Spring Security", "JWT", "Hibernate/JPA", "Maven"],
  },
  {
    key: "frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    key: "database",
    items: ["PostgreSQL", "Supabase", "Prisma"],
  },
  {
    key: "devops",
    items: ["Docker", "Vercel", "Railway", "Git/GitHub"],
  },
  {
    key: "integrations",
    items: ["Google Gemini AI", "Claude (Anthropic)", "Cloudinary", "NextAuth.js", "Zod"],
  },
] as const;

export async function Stack() {
  const t = await getTranslations("stack");

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="scroll-mt-16 px-6 py-24 md:px-12 md:py-32"
    >
      <Reveal className="mx-auto w-full max-w-6xl">
        <h2
          id="stack-title"
          className="text-3xl font-semibold tracking-tight text-[color:var(--fg)] md:text-4xl"
        >
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {GROUPS.map(({ key, items }) => (
            <div
              key={key}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6 md:p-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                {t(key)}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-1 font-mono text-xs text-[color:var(--fg)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

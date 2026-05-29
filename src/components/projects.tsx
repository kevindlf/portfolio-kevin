import { getTranslations } from "next-intl/server";
import { Reveal } from "./reveal";

const PROJECTS = [
  {
    key: "catan",
    url: "https://catan-phones.vercel.app/",
    stack: [
      "Java 21",
      "Spring Boot 4",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Supabase",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind",
      "Docker",
      "Railway",
      "Vercel",
      "Cloudinary",
      "Gemini AI",
      "Claude (Anthropic)",
    ],
  },
  {
    key: "velour",
    url: "https://perfumeria-essence.vercel.app/",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "NextAuth.js",
      "Zustand",
      "Tailwind",
      "Cloudinary",
      "Gemini AI",
      "Vercel",
      "Zod",
      "Claude (Anthropic)",
    ],
  },
] as const;

export async function Projects() {
  const t = await getTranslations("projects");

  return (
    <section
      id="projects"
      className="scroll-mt-16 px-6 py-24 md:px-12 md:py-32"
    >
      <Reveal className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--fg)] md:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map(({ key, url, stack }) => (
            <article
              key={key}
              className="group flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)] md:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
                {t(`${key}.period`)}
              </p>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-[color:var(--fg)] md:text-2xl">
                {t(`${key}.name`)}
              </h3>

              <p className="mt-1 text-sm text-[color:var(--accent)]">
                {t(`${key}.subtitle`)}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[color:var(--fg-muted)]">
                {t(`${key}.description`)}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[color:var(--border)] px-3 py-1 font-mono text-xs text-[color:var(--fg-muted)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex h-10 w-fit items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg)] px-5 font-mono text-sm font-medium text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
              >
                {t("liveLabel")}
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

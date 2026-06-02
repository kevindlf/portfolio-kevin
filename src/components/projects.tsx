import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "./reveal";
import { ProjectGallery } from "./project-gallery";

const catanShots = Array.from({ length: 13 }, (_, i) => `/projects/catan/${i + 1}.png`);
const velourShots = Array.from({ length: 11 }, (_, i) => `/projects/velour/${i + 1}.png`);

const PROJECTS = [
  {
    key: "catan",
    url: "https://catan-phones.vercel.app/",
    image: "/projects/catan.png",
    gallery: catanShots,
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
    image: "/projects/velour.png",
    gallery: velourShots,
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

const ACADEMIC = [
  {
    key: "clinica",
    repo: "https://github.com/kevindlf/ProyectoClinicaHospital",
    stack: ["Java", "Spring Boot", "PostgreSQL", "MySQL", "MVC", "REST APIs"],
  },
  {
    key: "inventario",
    repo: "https://github.com/kevindlf/inventario-fullstack",
    stack: ["Angular", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "REST APIs"],
  },
  {
    key: "bodega",
    repo: "https://github.com/kevindlf/BodegaTittarelliModifica",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
] as const;

export async function Projects() {
  const t = await getTranslations("projects");

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-16 px-6 py-24 md:px-12 md:py-32"
    >
      <Reveal className="mx-auto w-full max-w-6xl">
        <h2
          id="projects-title"
          className="text-3xl font-semibold tracking-tight text-[color:var(--fg)] md:text-4xl"
        >
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map(({ key, url, image, gallery, stack }) => (
            <article
              key={key}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="block overflow-hidden border-b border-[color:var(--border)]"
              >
                <Image
                  src={image}
                  alt={t(`${key}.name`)}
                  width={1200}
                  height={630}
                  className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </a>

              <div className="flex flex-1 flex-col p-6 md:p-8">
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

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-fit items-center justify-center rounded-full bg-[color:var(--accent)] px-5 font-mono text-sm font-medium text-[color:var(--bg)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                >
                  {t("liveLabel")}
                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
                <ProjectGallery images={gallery} name={t(`${key}.name`)} />
              </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-20 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
          {t("academicTitle")}
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {ACADEMIC.map(({ key, repo, stack }) => (
            <article
              key={key}
              className="group flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <h4 className="text-base font-semibold tracking-tight text-[color:var(--fg)]">
                {t(`${key}.name`)}
              </h4>

              <p className="mt-1 text-xs text-[color:var(--accent)]">
                {t(`${key}.subtitle`)}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[color:var(--fg-muted)]">
                {t(`${key}.description`)}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[color:var(--border)] px-2.5 py-0.5 font-mono text-[0.7rem] text-[color:var(--fg-muted)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center pt-5 font-mono text-xs text-[color:var(--fg)] transition-colors hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
              >
                {t("repoLabel")}
                <span
                  aria-hidden="true"
                  className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

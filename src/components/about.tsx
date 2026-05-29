import { getTranslations } from "next-intl/server";
import { Reveal } from "./reveal";

const FACTS = ["location", "education", "focus", "languages"] as const;

const COURSES = [
  {
    name: "Spring Framework 5 + REST: de cero a experto",
    meta: "Udemy · 2025 · 10.5 h",
    url: "https://ude.my/UC-d910fddd-581f-42cb-9159-76cc8a988376",
  },
  {
    name: "Angular y Spring Boot: App Full Stack",
    meta: "Udemy · 2025 · 3.5 h",
    url: "https://ude.my/UC-45caa950-f9bb-47e7-aced-50589ee360ae",
  },
] as const;

export async function About() {
  const t = await getTranslations("about");

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-16 px-6 py-24 md:px-12 md:py-32"
    >
      <Reveal className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2
            id="about-title"
            className="text-3xl font-semibold tracking-tight text-[color:var(--fg)] md:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--fg-muted)] md:text-lg">
            {t("p1")}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[color:var(--fg-muted)] md:text-lg">
            {t("p2")}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[color:var(--fg-muted)] md:text-lg">
            {t("p3")}
          </p>
        </div>

        <aside className="md:col-span-5">
          <dl className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6 md:p-8">
            {FACTS.map((fact, i) => (
              <div key={fact} className={i > 0 ? "mt-6" : undefined}>
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  {t(`facts.${fact}Label`)}
                </dt>
                <dd className="mt-2 text-sm text-[color:var(--fg)] md:text-base">
                  {t(`facts.${fact}Value`)}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
              {t("coursesTitle")}
            </p>
            <ul className="mt-4 flex flex-col gap-4">
              {COURSES.map((course) => (
                <li key={course.url}>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                  >
                    <span className="text-sm text-[color:var(--fg)] transition-colors group-hover:text-[color:var(--accent)]">
                      {course.name}
                      <span aria-hidden="true" className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </span>
                    <span className="mt-1 block font-mono text-xs text-[color:var(--fg-muted)]">
                      {course.meta} · {t("courseVerify")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Reveal>
    </section>
  );
}

import { getTranslations } from "next-intl/server";

const FACTS = ["location", "education", "focus"] as const;

export async function About() {
  const t = await getTranslations("about");

  return (
    <section
      id="about"
      className="scroll-mt-16 px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--fg)] md:text-4xl">
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
        </aside>
      </div>
    </section>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hero");

  return (
    <main className="flex flex-1 flex-col">
      <section
        id="hero"
        className="relative flex min-h-[calc(100svh-4rem)] flex-1 items-center justify-center overflow-hidden px-6 py-24 md:px-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent-glow)] blur-[120px]" />
        </div>

        <div className="w-full max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
            {t("role")}
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-[color:var(--fg)] md:text-7xl lg:text-[5.5rem]">
            {t("name")}
          </h1>

          <p className="mt-8 max-w-2xl text-2xl leading-tight text-[color:var(--fg)] md:text-3xl">
            {t("tagline")}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--fg-muted)] md:text-lg">
            {t("subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 font-mono text-sm font-medium text-[color:var(--bg)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
            >
              {t("ctaPrimary")}
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-6 font-mono text-sm font-medium text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-[color:var(--fg-muted)]"
        >
          scroll ↓
        </div>
      </section>

      <About />
      <Projects />
      <Stack />
    </main>
  );
}

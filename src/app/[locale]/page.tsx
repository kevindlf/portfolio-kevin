import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeroBackground } from "@/components/three/hero-background";
import { HeroIntro } from "@/components/hero-intro";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";

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
        aria-labelledby="hero-title"
        className="relative flex min-h-[calc(100svh-4rem)] flex-1 items-center justify-center overflow-hidden px-6 py-24 md:px-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent-glow)] blur-[120px]" />
        </div>

        <HeroBackground />

        <HeroIntro
          role={t("role")}
          name={t("name")}
          tagline={t("tagline")}
          subtitle={t("subtitle")}
          ctaPrimary={t("ctaPrimary")}
          ctaSecondary={t("ctaSecondary")}
        />

        <div
          aria-hidden="true"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-[color:var(--fg-muted)]"
        >
          scroll ↓
        </div>
      </section>

      <Stats />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
}

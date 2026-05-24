import { getTranslations, setRequestLocale } from "next-intl/server";
import { LangSwitcher } from "@/components/lang-switcher";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24 md:px-12">
      <div className="w-full max-w-6xl">
        <div className="mb-12 flex items-center justify-between gap-4">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[color:var(--accent)]">
            {t("hero.phase")}
          </p>
          <LangSwitcher />
        </div>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[color:var(--fg)] md:text-7xl">
          {t("hero.name")}
        </h1>

        <p className="mt-4 text-xl text-[color:var(--fg-muted)] md:text-2xl">
          {t("hero.role")} ·{" "}
          <span className="text-[color:var(--fg)]">{t("hero.stack")}</span>
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-[color:var(--fg-muted)] md:text-lg">
          {t("hero.subtitle")}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs">
          {(["next", "react", "ts", "tailwind"] as const).map((k) => (
            <span
              key={k}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1 text-[color:var(--fg-muted)]"
            >
              {t(`hero.chips.${k}`)}
            </span>
          ))}
          <span className="rounded-full border border-[color:var(--accent)] bg-[color:var(--accent-glow)] px-3 py-1 text-[color:var(--accent)]">
            {t("hero.chips.three")}
          </span>
        </div>

        <div
          className="mt-16 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6"
          aria-label={t("status.title")}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--fg-muted)]">
            {t("status.title")}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--fg)]">
            {(["i18n", "deploy", "phase1"] as const).map((k) => (
              <li key={k}>
                <span className="text-[color:var(--accent)]">→</span>{" "}
                {t(`status.items.${k}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

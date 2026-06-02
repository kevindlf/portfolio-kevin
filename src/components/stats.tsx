import { getTranslations } from "next-intl/server";
import { Reveal } from "./reveal";

const STATS = ["projects", "delivered", "audit", "autonomy"] as const;

export async function Stats() {
  const t = await getTranslations("stats");

  return (
    <section className="px-6 md:px-12">
      <Reveal className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] md:grid-cols-4">
        {STATS.map((key) => (
          <div
            key={key}
            className="flex flex-col items-center justify-center gap-2 bg-[color:var(--bg-elevated)] px-4 py-8 text-center"
          >
            <span className="text-4xl font-semibold tracking-tight text-[color:var(--accent)] md:text-5xl">
              {t(`${key}Value`)}
            </span>
            <span className="font-mono text-xs leading-snug text-[color:var(--fg-muted)]">
              {t(`${key}Label`)}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

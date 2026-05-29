import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main className="relative flex min-h-[calc(100svh-4rem)] flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24 text-center md:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent-glow)] blur-[120px]" />
      </div>

      <p className="font-mono text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">
        {t("code")}
      </p>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[color:var(--fg)] md:text-5xl">
        {t("title")}
      </h1>

      <p className="mt-4 max-w-md text-base leading-relaxed text-[color:var(--fg-muted)]">
        {t("body")}
      </p>

      <Link
        href="/"
        className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 font-mono text-sm font-medium text-[color:var(--bg)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
      >
        {t("home")}
      </Link>
    </main>
  );
}

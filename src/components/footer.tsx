import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--bg)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-[color:var(--fg-muted)] md:flex-row md:px-12">
        <p>{t("copyright", { year })}</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kevindlf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[color:var(--fg)]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevindelafuente-729465350/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[color:var(--fg)]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kevindlf2004@gmail.com"
            className="transition-colors hover:text-[color:var(--fg)]"
          >
            Email
          </a>
        </div>

        <p className="text-[color:var(--fg-muted)]/70">{t("builtWith")}</p>
      </div>
    </footer>
  );
}

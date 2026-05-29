import { getTranslations } from "next-intl/server";
import { LangSwitcher } from "./lang-switcher";
import { MobileMenu } from "./mobile-menu";
import { NAV_LINKS, CV_URL } from "@/lib/nav";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/80 backdrop-blur-xl">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[color:var(--accent)] focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-[color:var(--bg)]"
      >
        {t("skipToContent")}
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-12">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-[color:var(--fg)] transition-colors hover:text-[color:var(--accent)]"
          aria-label="Kevin De La Fuente — Home"
        >
          kdlf<span className="text-[color:var(--accent)]">.</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 font-mono text-sm md:flex"
        >
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--fg)]"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CV_URL}
            download
            aria-label={t("downloadCv")}
            className="hidden h-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 font-mono text-xs text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] md:inline-flex"
          >
            {t("cv")}
            <span aria-hidden="true" className="ml-1.5">
              ↓
            </span>
          </a>
          <LangSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

import { getTranslations } from "next-intl/server";
import { LangSwitcher } from "./lang-switcher";

const NAV_LINKS = [
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "stack", href: "#stack" },
  { key: "contact", href: "#contact" },
] as const;

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/80 backdrop-blur-xl">
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

        <LangSwitcher />
      </div>
    </header>
  );
}

"use client";

import { useTranslations, useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LangSwitcher() {
  const t = useTranslations("langSwitch");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-1 font-mono text-xs"
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => {
        const isActive = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            disabled={isPending || isActive}
            onClick={() =>
              startTransition(() => router.replace(pathname, { locale: loc }))
            }
            aria-current={isActive ? "true" : undefined}
            className={[
              "rounded-full px-3 py-1 uppercase tracking-widest transition-colors",
              isActive
                ? "bg-[color:var(--accent)] text-[color:var(--bg)]"
                : "text-[color:var(--fg-muted)] hover:text-[color:var(--fg)]",
            ].join(" ")}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}

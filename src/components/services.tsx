import { getTranslations } from "next-intl/server";
import { Reveal } from "./reveal";
import { DEMOS, waLink } from "@/lib/site";

// Planes locales (Argentina), modelo mensual. Los montos viven en messages/*.json
// (services.plans.<key>.monthly / .setup) para no hardcodearlos acá.
// hasSetup = false → sin costo inicial. permanence = null → sin permanencia.
const PLANS = [
  { key: "web", hasSetup: false, permanence: 6, featured: false },
  { key: "store", hasSetup: true, permanence: 12, featured: true },
  { key: "maintenance", hasSetup: false, permanence: null, featured: false },
] as const;

// Precios del exterior, por proyecto (USD). Textos en services.exterior.<key>.
const EXTERIOR = ["landing", "site", "ecommerce", "store"] as const;

export async function Services() {
  const t = await getTranslations("services");

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-16 px-6 py-24 md:px-12 md:py-32"
    >
      <Reveal className="mx-auto w-full max-w-6xl">
        <h2
          id="services-title"
          className="text-3xl font-semibold tracking-tight text-[color:var(--fg)] md:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--fg-muted)] md:text-lg">
          {t("subtitle")}
        </p>

        {/* Planes mensuales */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.key}
              className={`flex flex-col rounded-2xl border bg-[color:var(--bg-elevated)] p-6 ${
                plan.featured
                  ? "border-[color:var(--accent)] shadow-[0_0_0_1px_var(--accent)]"
                  : "border-[color:var(--border)]"
              }`}
            >
              <h3 className="text-lg font-semibold text-[color:var(--fg)]">
                {t(`plans.${plan.key}.name`)}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--fg-muted)]">
                {t(`plans.${plan.key}.desc`)}
              </p>

              <p className="mt-5">
                <span className="text-2xl font-semibold text-[color:var(--accent)]">
                  {t(`plans.${plan.key}.monthly`)}
                </span>
                <span className="font-mono text-sm text-[color:var(--fg-muted)]">
                  {t("monthly")}
                </span>
              </p>

              <dl className="mt-3 space-y-1 font-mono text-xs text-[color:var(--fg-muted)]">
                <div className="flex justify-between gap-2">
                  <dt>{t("setupLabel")}</dt>
                  <dd className="text-[color:var(--fg)]">
                    {plan.hasSetup ? t(`plans.${plan.key}.setup`) : t("noSetup")}
                  </dd>
                </div>
                {plan.permanence ? (
                  <div className="flex justify-between gap-2">
                    <dt>{t("permanenceLabel")}</dt>
                    <dd className="text-[color:var(--fg)]">
                      {plan.permanence} {t("monthsUnit")}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
          ))}
        </div>

        {/* Exterior — por proyecto, USD */}
        <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6">
          <h3 className="text-sm font-semibold text-[color:var(--fg)]">
            {t("exteriorTitle")}
          </h3>
          <ul className="mt-3 grid gap-2 font-mono text-xs text-[color:var(--fg-muted)] sm:grid-cols-2 lg:grid-cols-4">
            {EXTERIOR.map((key) => (
              <li
                key={key}
                className="flex justify-between gap-2 rounded-lg border border-[color:var(--border)] px-3 py-2"
              >
                <span>{t(`exterior.${key}.name`)}</span>
                <span className="text-[color:var(--fg)]">
                  {t(`exterior.${key}.price`)}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-[color:var(--fg-muted)]">
            {t("exteriorNote")}
          </p>
        </div>

        {/* Demos en vivo */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold tracking-tight text-[color:var(--fg)] md:text-2xl">
            {t("demosTitle")}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--fg-muted)] md:text-base">
            {t("demosSubtitle")}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DEMOS.map((demo) => {
              const inner = (
                <>
                  <div>
                    <p className="text-base font-semibold text-[color:var(--fg)] transition-colors group-hover:text-[color:var(--accent)]">
                      {t(`demos.${demo.key}.name`)}
                    </p>
                    <p className="mt-1 text-sm text-[color:var(--fg-muted)]">
                      {t(`demos.${demo.key}.tagline`)}
                    </p>
                  </div>
                  <span className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                    {demo.url ? (
                      <>
                        {t("viewDemo")}
                        <span
                          aria-hidden="true"
                          className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </>
                    ) : (
                      <span className="text-[color:var(--fg-muted)]">
                        {t("demoSoon")}
                      </span>
                    )}
                  </span>
                </>
              );

              const cardClass =
                "flex h-full flex-col justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-5";

              return demo.url ? (
                <a
                  key={demo.key}
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${cardClass} transition-colors hover:border-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]`}
                >
                  {inner}
                </a>
              ) : (
                <div key={demo.key} className={`group ${cardClass}`}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href={waLink(
              "Hola Kevin! Vi tus servicios en el portfolio y quiero pedirte un presupuesto.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 font-mono text-sm font-medium text-[color:var(--bg)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            {t("cta")}
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

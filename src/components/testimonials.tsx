import { getTranslations } from "next-intl/server";
import { Reveal } from "./reveal";

/**
 * Testimonios REALES de clientes. Vacío a propósito.
 * Cuando tengas una frase real (pedila con la plantilla #6 del freelance-kit),
 * agregá un objeto acá. La sección se muestra sola en cuanto haya al menos uno.
 * NO inventar testimonios ni atribuir frases que el cliente no dijo.
 *
 * Ejemplo de formato:
 *   { quote: "La tienda quedó rápida y prolija...", author: "Velour Fragancias", role: "Perfumería" }
 */
const TESTIMONIALS: { quote: string; author: string; role: string }[] = [];

export async function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  const t = await getTranslations("testimonials");

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="scroll-mt-16 px-6 py-24 md:px-12 md:py-32"
    >
      <Reveal className="mx-auto w-full max-w-6xl">
        <h2
          id="testimonials-title"
          className="text-3xl font-semibold tracking-tight text-[color:var(--fg)] md:text-4xl"
        >
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--fg-muted)] md:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((item, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6 md:p-8"
            >
              <blockquote className="flex-1 text-base leading-relaxed text-[color:var(--fg)]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className="block text-sm font-semibold text-[color:var(--fg)]">
                  {item.author}
                </span>
                <span className="block font-mono text-xs text-[color:var(--fg-muted)]">
                  {item.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import { Reveal } from "./reveal";

const EMAIL = "delafuentekevin204@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/kevindelafuente-729465350/";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-16 px-6 py-24 md:px-12 md:py-32"
    >
      <Reveal className="mx-auto w-full max-w-6xl">
        <h2
          id="contact-title"
          className="text-3xl font-semibold tracking-tight text-[color:var(--fg)] md:text-4xl"
        >
          {t("title")}
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--fg-muted)] md:text-lg">
          {t("body")}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 font-mono text-sm font-medium text-[color:var(--bg)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            {t("emailLabel")}
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-6 font-mono text-sm font-medium text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
          >
            {t("linkedinLabel")}
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

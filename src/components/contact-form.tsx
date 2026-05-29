"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { sendContact } from "@/app/actions/contact";

type Status = "idle" | "ok" | "error";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<Status>("idle");
  const [pending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactInput) => {
    setStatus("idle");
    const fd = new FormData();
    fd.set("name", data.name);
    fd.set("email", data.email);
    fd.set("message", data.message);
    fd.set("company", data.company ?? "");
    startTransition(async () => {
      const res = await sendContact(null, fd);
      if (res.ok) {
        setStatus("ok");
        reset();
      } else {
        setStatus("error");
      }
    });
  };

  const fieldClass =
    "w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--fg)] outline-none transition-colors placeholder:text-[color:var(--fg-muted)] focus:border-[color:var(--accent)]";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Company
          <input type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-[color:var(--fg-muted)]">
          {t("nameLabel")}
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={fieldClass}
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{t(`errors.${errors.name.message}`)}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-[color:var(--fg-muted)]">
          {t("emailLabel")}
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{t(`errors.${errors.email.message}`)}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.15em] text-[color:var(--fg-muted)]">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${fieldClass} resize-y`}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{t(`errors.${errors.message.message}`)}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 font-mono text-sm font-medium text-[color:var(--bg)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? t("sending") : t("send")}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "ok" && (
            <span className="text-[color:var(--accent)]">{t("success")}</span>
          )}
          {status === "error" && (
            <span className="text-red-400">{t("errorSend")}</span>
          )}
        </p>
      </div>
    </form>
  );
}

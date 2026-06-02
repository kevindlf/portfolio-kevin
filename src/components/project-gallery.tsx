"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function ProjectGallery({
  images,
  name,
}: {
  images: readonly string[];
  name: string;
}) {
  const t = useTranslations("projects");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => openAt(0)}
        className="inline-flex h-10 w-fit items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg)] px-5 font-mono text-sm font-medium text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
      >
        {t("galleryLabel")}
        <span aria-hidden="true" className="ml-2 text-[color:var(--fg-muted)]">
          ({images.length})
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={name}
          className="fixed inset-0 z-[90] flex flex-col bg-black/85 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-6 py-4 font-mono text-xs text-[color:var(--fg-muted)]">
            <span className="text-[color:var(--fg)]">{name}</span>
            <div className="flex items-center gap-4">
              <span>
                {t("galleryCounter", { current: index + 1, total: images.length })}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label={t("galleryClose")}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                ✕
              </button>
            </div>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-6 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              aria-label={t("galleryPrev")}
              className="absolute left-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)]/80 text-lg text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] md:left-4"
            >
              ‹
            </button>

            <div className="relative max-h-full w-full max-w-5xl">
              <Image
                src={images[index]}
                alt={`${name} — ${index + 1}`}
                width={1920}
                height={1080}
                className="mx-auto h-auto max-h-[80vh] w-auto rounded-xl border border-[color:var(--border)] object-contain"
                sizes="(min-width: 768px) 80vw, 100vw"
                priority
              />
            </div>

            <button
              type="button"
              onClick={next}
              aria-label={t("galleryNext")}
              className="absolute right-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)]/80 text-lg text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] md:right-4"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}

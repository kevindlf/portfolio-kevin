"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroIntro({
  role,
  name,
  tagline,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: {
  role: string;
  name: string;
  tagline: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="w-full max-w-6xl"
      variants={container}
      initial={reduce ? false : "hidden"}
      animate="show"
    >
      <motion.p
        variants={item}
        className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]"
      >
        {role}
      </motion.p>

      <motion.h1
        variants={item}
        id="hero-title"
        className="mt-6 bg-gradient-to-br from-[color:var(--fg)] via-[color:var(--fg)] to-[color:var(--accent)] bg-clip-text text-5xl font-semibold leading-[1.02] tracking-tight text-transparent md:text-7xl lg:text-[5.5rem]"
      >
        {name}
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-8 max-w-2xl text-2xl leading-tight text-[color:var(--fg)] md:text-3xl"
      >
        {tagline}
      </motion.p>

      <motion.p
        variants={item}
        className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--fg-muted)] md:text-lg"
      >
        {subtitle}
      </motion.p>

      <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 font-mono text-sm font-medium text-[color:var(--bg)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
        >
          {ctaPrimary}
          <span aria-hidden="true" className="ml-2">
            ↓
          </span>
        </a>
        <a
          href="#contact"
          className="inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-6 font-mono text-sm font-medium text-[color:var(--fg)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
        >
          {ctaSecondary}
        </a>
      </motion.div>
    </motion.div>
  );
}

"use client";

import dynamic from "next/dynamic";

const HeroParticles = dynamic(() => import("./hero-particles"), { ssr: false });

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <HeroParticles />
    </div>
  );
}

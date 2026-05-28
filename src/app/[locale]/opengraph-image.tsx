import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";
import { PERSON } from "@/lib/site";

export const alt = "Kevin De La Fuente — Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0b",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background: "#7c5cff",
            opacity: 0.22,
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: "26px",
            letterSpacing: "8px",
            textTransform: "uppercase",
            color: "#7c5cff",
          }}
        >
          {PERSON.jobTitle}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "24px",
            fontSize: "92px",
            fontWeight: 700,
            lineHeight: 1.02,
            color: "#ededee",
          }}
        >
          {PERSON.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "32px",
            fontSize: "32px",
            color: "#8a8a93",
          }}
        >
          Java · Spring Boot · Next.js · React
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "80px",
            left: "80px",
            fontSize: "28px",
            color: "#ededee",
          }}
        >
          kdlf<span style={{ color: "#7c5cff" }}>.</span>
        </div>
      </div>
    ),
    size,
  );
}

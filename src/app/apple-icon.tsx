import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0b",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 700,
            color: "#ededee",
            fontFamily: "monospace",
            lineHeight: 1,
          }}
        >
          k
        </div>
        <div
          style={{
            position: "absolute",
            right: 38,
            bottom: 46,
            width: 22,
            height: 22,
            borderRadius: "9999px",
            backgroundColor: "#7c5cff",
          }}
        />
      </div>
    ),
    size,
  );
}

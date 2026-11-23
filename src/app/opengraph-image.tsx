import { ImageResponse } from "next/og";

export const alt =
  "Faraz Ahmed — Full Stack Software Engineer. Building production software for the web.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#101110",
        padding: "64px 76px",
        color: "#efefeb",
        fontFamily: "sans-serif",
        border: "1px solid #32352d",
      }}
    >
      <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
        faraz<span style={{ color: "#c3ed83" }}>.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#c3ed83",
            fontSize: 18,
            letterSpacing: 3,
            marginBottom: 25,
          }}
        >
          FULL STACK SOFTWARE ENGINEER
        </div>
        <div
          style={{
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: -4,
            fontWeight: 700,
          }}
        >
          Building production
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: -4,
            fontWeight: 700,
          }}
        >
          software for the web<span style={{ color: "#c3ed83" }}>.</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#a0a39a",
          fontSize: 20,
        }}
      >
        <span>Faraz Ahmed</span>
        <span>Lahore, Pakistan</span>
      </div>
    </div>,
    size,
  );
}

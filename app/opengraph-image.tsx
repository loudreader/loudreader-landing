import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

// Default Open Graph image for every route that doesn't define its own.
// Generated at build time — no binary asset to keep in sync with the brand.
export const alt = "LoudReader - Every text is an audiobook.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "logo2.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1d1d1f",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 170,
            height: 170,
            borderRadius: 40,
            backgroundColor: "#f7f5f2",
            marginBottom: 44,
          }}
        >
          <img src={logoSrc} alt="" width={128} height={128} />
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -4,
          }}
        >
          LoudReader
        </div>
        <div style={{ fontSize: 38, color: "#9ca3af", marginTop: 18 }}>
          Every text is an audiobook.
        </div>
        <div style={{ fontSize: 26, color: "#6b7280", marginTop: 44 }}>
          Start for free · Offline · Private
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mukul Patidar - Java Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#090a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "sans-serif",
          border: "2px solid #1e2436",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid #10b981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#10b981",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            &gt;_
          </div>
          <div style={{ color: "#9ca3af", fontSize: 24, fontFamily: "monospace" }}>
            mukulpatidar.dev
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              color: "#10b981",
              fontSize: 28,
              fontWeight: 600,
              fontFamily: "monospace",
            }}
          >
            JAVA FULL STACK DEVELOPER
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            MUKUL PATIDAR
          </div>
          <div
            style={{
              color: "#d1d5db",
              fontSize: 28,
              maxWidth: 900,
            }}
          >
            Building secure, scalable backend systems with Java and Spring Boot.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            color: "#9ca3af",
            fontSize: 20,
            borderTop: "1px solid #1e2436",
            paddingTop: 32,
          }}
        >
          <span>Spring Boot</span>
          <span>•</span>
          <span>Spring Security</span>
          <span>•</span>
          <span>JWT</span>
          <span>•</span>
          <span>MySQL</span>
          <span>•</span>
          <span>REST APIs</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


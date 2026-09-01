export const dynamic = "force-static";

import { ImageResponse } from "next/og";

export const alt = "Grupo Affix, somando aos seus negócios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "74px 82px", background: "#151719", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "#c7a45a", letterSpacing: 4, textTransform: "uppercase" }}>Grupo Affix</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 950 }}>Transforme seus recebíveis em capital de giro imediato.</div>
        <div style={{ fontSize: 28, color: "#c8c9ca" }}>Somando aos seus negócios</div>
      </div>
      <div style={{ width: 180, height: 8, background: "#c7a45a" }} />
    </div>,
    size,
  );
}

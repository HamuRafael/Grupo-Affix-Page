export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grupo Affix",
    short_name: "Affix",
    description: "Soluções financeiras para empresas e investidores.",
    start_url: "/",
    display: "standalone",
    background_color: "#151719",
    theme_color: "#c7a45a",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

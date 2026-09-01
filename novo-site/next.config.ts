import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/pages/index.html", destination: "/", permanent: true },
      { source: "/pages/quemsomos.html", destination: "/quem-somos", permanent: true },
      { source: "/pages/solucoes.html", destination: "/#solucoes", permanent: true },
      { source: "/pages/antecipacao.html", destination: "/solucoes/antecipacao-de-recebiveis", permanent: true },
      { source: "/pages/capitalgiro.html", destination: "/solucoes/capital-de-giro", permanent: true },
      { source: "/pages/creditoagro.html", destination: "/solucoes/solucoes-agro", permanent: true },
      { source: "/pages/contaescrow.html", destination: "/solucoes/conta-escrow", permanent: true },
      { source: "/pages/fomentoimobiliario.html", destination: "/solucoes/credito-para-construtoras", permanent: true },
      { source: "/pages/contato.html", destination: "/contato", permanent: true },
      { source: "/pages/blog.html", destination: "/blog", permanent: true },
      { source: "/pages/blog-detalhes.html", destination: "/blog/o-que-e-securitizacao", permanent: true },
      { source: "/pages/reuniao.html", destination: "/contato", permanent: true },
      { source: "/pages/trabalheconosco.html", destination: "/trabalhe-conosco", permanent: true },
      { source: "/auth/login.html", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'; object-src 'none'; base-uri 'self'" },
        ],
      },
    ];
  },
};

export default nextConfig;

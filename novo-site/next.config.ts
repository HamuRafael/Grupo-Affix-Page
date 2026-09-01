import type { NextConfig } from "next";

// Export estático: o site sai como HTML/CSS/JS puros na pasta out/ e sobe por FTP
// para a hospedagem compartilhada da Locaweb, que não roda Node.
// Redirects das URLs antigas e headers de segurança moram em public/.htaccess,
// já que aqui eles exigiriam um servidor Next rodando.
const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  images: {
    // Sem servidor não há otimizador de imagens; os arquivos já vão comprimidos.
    unoptimized: true,
  },
};

export default nextConfig;

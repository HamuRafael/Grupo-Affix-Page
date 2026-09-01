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

// Nota: no modo export, o prefetch do Next 16.3 pede arquivos achatados
// (__next.rota.__PAGE__.txt) mas o exporter grava pastas aninhadas
// (__next.rota/__PAGE__.txt). O scripts/achatar-prefetch.js corrige a pasta
// out/ depois do build; rode o build sempre via "npm run build:site".

export default nextConfig;

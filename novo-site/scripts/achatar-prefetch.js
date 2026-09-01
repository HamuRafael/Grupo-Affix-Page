// Corrige o descompasso do Next 16.3 no modo export: o navegador pede os
// arquivos de prefetch com nome achatado (__next.rota.__PAGE__.txt), mas o
// exporter grava pastas aninhadas (__next.rota/__PAGE__.txt). Sem este passo,
// cada prefetch vira um 404 no console em produção.
//
// Rode depois de todo build: `node scripts/achatar-prefetch.js`
// (ou simplesmente use `npm run build:site`, que já encadeia os dois).
const fs = require("fs");
const path = require("path");

const raizOut = path.join(__dirname, "..", "out");
let movidos = 0;

function achatarPasta(dirNext, dirPai, prefixo) {
  for (const item of fs.readdirSync(dirNext, { withFileTypes: true })) {
    const caminho = path.join(dirNext, item.name);
    if (item.isDirectory()) {
      achatarPasta(caminho, dirPai, `${prefixo}.${item.name}`);
    } else {
      fs.renameSync(caminho, path.join(dirPai, `${prefixo}.${item.name}`));
      movidos += 1;
    }
  }
  fs.rmdirSync(dirNext);
}

function percorrer(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!item.isDirectory()) continue;
    const caminho = path.join(dir, item.name);
    if (item.name.startsWith("__next.")) {
      achatarPasta(caminho, dir, item.name);
    } else {
      percorrer(caminho);
    }
  }
}

if (!fs.existsSync(raizOut)) {
  console.error("Pasta out/ não encontrada. Rode `npx next build` antes.");
  process.exit(1);
}

percorrer(raizOut);
console.log(`Prefetch corrigido: ${movidos} arquivo(s) achatado(s) em out/.`);

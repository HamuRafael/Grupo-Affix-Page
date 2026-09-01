import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "O endereço acessado não existe no site do Grupo Affix.",
  // Sem o null, a página herdaria o canônico da home e se declararia como ela.
  alternates: { canonical: null },
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="not-found" id="conteudo-principal">
      <span>404</span>
      <h1>Esta página não foi encontrada.</h1>
      <p>O endereço pode ter mudado ou não estar mais disponível.</p>
      <Link className="button button-gold" href="/">Voltar para o início</Link>
    </main>
  );
}

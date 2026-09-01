import type { Metadata } from "next";
import Link from "next/link";
import { defaultOgImage, ogDefaults, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site do Grupo Affix.",
  alternates: { canonical: "/termos" },
  openGraph: {
    ...ogDefaults,
    type: "website",
    title: "Termos de Uso | Grupo Affix",
    description: "Termos de uso do site do Grupo Affix.",
    url: `${siteUrl}/termos`,
    images: [defaultOgImage],
  },
};

export default function TermsPage() {
  return (
    <main className="legal-page" id="conteudo-principal">
      <div className="container legal-content">
        <h1>Termos de Uso</h1>
        <p className="legal-notice"><strong>Minuta para validação:</strong> este texto deve ser revisado pelas áreas jurídica e de compliance antes da publicação em produção.</p>

        <h2>Finalidade do site</h2>
        <p>O site apresenta informações institucionais e canais de contato do Grupo Affix. O conteúdo possui caráter informativo e não representa aprovação automática de crédito, recomendação ou proposta definitiva.</p>

        <h2>Simulações</h2>
        <p>Os resultados do simulador são estimativas simplificadas. Taxas, prazos, limites e valores finais dependem de análise, documentação, características dos títulos e condições aplicáveis à operação.</p>

        <h2>Uso adequado</h2>
        <p>O visitante se compromete a fornecer informações verdadeiras, não interferir no funcionamento do site e não utilizar seus canais para atividades ilícitas ou abusivas.</p>

        <h2>Disponibilidade</h2>
        <p>O Grupo Affix pode atualizar conteúdos e funcionalidades, bem como suspender temporariamente recursos para manutenção, segurança ou adequação regulatória.</p>

        <Link className="text-link" href="/">Voltar para o início</Link>
      </div>
    </main>
  );
}

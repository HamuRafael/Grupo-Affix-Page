import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/site";
import { defaultOgImage, ogDefaults, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Informações sobre o tratamento de dados pessoais no site do Grupo Affix.",
  alternates: { canonical: "/privacidade" },
  openGraph: {
    ...ogDefaults,
    type: "website",
    title: "Política de Privacidade | Grupo Affix",
    description: "Informações sobre o tratamento de dados pessoais no site do Grupo Affix.",
    url: `${siteUrl}/privacidade`,
    images: [defaultOgImage],
  },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page" id="conteudo-principal">
      <div className="container legal-content">
        <h1>Política de Privacidade</h1>
        <p className="legal-notice"><strong>Minuta para validação:</strong> este texto deve ser revisado pelas áreas jurídica e de compliance antes da publicação em produção.</p>

        <h2>Dados enviados pelo formulário</h2>
        <p>Ao solicitar contato, o visitante informa nome, e-mail, telefone, CNPJ, faixa de faturamento, solução de interesse e mensagem. Esses dados são utilizados para responder à solicitação e prestar atendimento comercial.</p>

        <h2>Base e finalidade do tratamento</h2>
        <p>Os dados são tratados para atender à solicitação realizada pelo titular, manter o histórico do atendimento e cumprir obrigações legais ou regulatórias aplicáveis.</p>

        <h2>Compartilhamento e armazenamento</h2>
        <p>Os dados podem ser processados por fornecedores necessários ao funcionamento do canal de atendimento, como serviços de e-mail, hospedagem, proteção contra spam e CRM, sempre limitados à finalidade informada.</p>

        <h2>Direitos do titular</h2>
        <p>O titular pode solicitar confirmação, acesso, correção, informação sobre compartilhamento e demais direitos previstos na legislação aplicável por meio do e-mail <a href={`mailto:${company.email}`}>{company.email}</a>.</p>

        <h2>Cookies</h2>
        <p>Cookies essenciais podem ser utilizados para o funcionamento e a segurança do site. Ferramentas analíticas ou de marketing somente devem ser ativadas de acordo com as preferências registradas no banner de consentimento.</p>

        <Link className="text-link" href="/">Voltar para o início</Link>
      </div>
    </main>
  );
}

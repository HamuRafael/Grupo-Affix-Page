import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { defaultOgImage, ogDefaults, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Investidores em FIDC",
  description:
    "Entenda como funciona um FIDC e saiba como se tornar um investidor do Grupo Affix, com o suporte de uma equipe especializada.",
  alternates: { canonical: "/investidores" },
  openGraph: {
    ...ogDefaults,
    type: "website",
    title: "Investidores | Grupo Affix",
    description:
      "Entenda como funciona um FIDC e saiba como se tornar um investidor do Grupo Affix.",
    url: `${siteUrl}/investidores`,
    images: [defaultOgImage],
  },
};

const fidcSteps = [
  {
    number: "01",
    title: "Empresas cedem seus créditos",
    description:
      "Empresas transferem ao fundo direitos creditórios como duplicatas, cheques e contratos de vendas a prazo.",
  },
  {
    number: "02",
    title: "O fundo adquire os títulos",
    description:
      "O FIDC compra esses créditos com desconto, formando uma carteira diversificada de recebíveis.",
  },
  {
    number: "03",
    title: "Os títulos são pagos",
    description:
      "Os devedores quitam os títulos nos vencimentos, gerando o resultado da carteira do fundo.",
  },
  {
    number: "04",
    title: "O resultado remunera os cotistas",
    description:
      "O rendimento da carteira é distribuído aos investidores conforme as regras do regulamento do fundo.",
  },
];

const investorReasons = [
  {
    icon: "shield",
    title: "Experiência desde 2013",
    description:
      "Atuamos no setor de fomento empresarial como FIDC e Securitizadora de recebíveis desde 2013.",
  },
  {
    icon: "handshake",
    title: "Equipe especializada",
    description:
      "Conte com a orientação e o suporte de uma equipe altamente especializada em análise e gestão de crédito.",
  },
  {
    icon: "chart",
    title: "Participação na economia real",
    description:
      "Seu investimento participa do desenvolvimento financeiro de empresas de diversos setores do Brasil.",
  },
];

export default function InvestorsPage() {
  return (
    <main id="conteudo-principal">
      <PageHero title="Seja um investidor Affix.">
        <p>
          Você pode se tornar um investidor Affix, investindo em uma empresa sólida e rentável, que participa do desenvolvimento financeiro de muitas outras empresas.
        </p>
      </PageHero>

      <section className="section fidc-explainer" aria-labelledby="fidc-title">
        <div className="container detail-layout">
          <div className="detail-intro">
            <h2 id="fidc-title">Como funciona um FIDC?</h2>
            <p>
              O FIDC, Fundo de Investimento em Direitos Creditórios, é um fundo que investe em créditos a receber de empresas. Ele possibilita a securitização desses ativos, transformando-os em títulos negociáveis no mercado.
            </p>
          </div>
          <div className="detail-media">
            <Image
              src="/images/fidc-investimento.jpg"
              alt="Blocos de madeira formando a sigla FIDC com pilhas de moedas sobre eles"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
        </div>
        <div className="container fidc-steps-wrap">
          <ol className="fidc-steps">
            {fidcSteps.map((step) => (
              <li key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="investor-section investor-page-media" aria-label="Investir com o Grupo Affix">
        <div className="investor-media">
          <Image src="/images/investidor.jpg" alt="Profissional analisando oportunidades de investimento" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="investor-copy">
          <h2>Por que investir com o Grupo Affix?</h2>
          <p>
            Desde 2013 no setor de fomento empresarial como FIDC e Securitizadora de recebíveis, o Grupo Affix oferece diversas soluções financeiras para empresas, além de investimentos seguros com boa rentabilidade.
          </p>
          <ul className="hero-trust" aria-label="Motivos para investir">
            {investorReasons.map((reason) => (
              <li key={reason.title}><Icon name="check" size={18} /> {reason.title}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="investor-reasons-title">
        <div className="container detail-intro">
          <h2 id="investor-reasons-title">O que você encontra na Affix</h2>
        </div>
        <div className="container detail-grid">
          {investorReasons.map((reason) => (
            <article className="detail-card" key={reason.title}>
              <span className="benefit-icon"><Icon name={reason.icon} size={26} /></span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
        <div className="container">
          <p className="legal-notice">
            Este conteúdo tem caráter informativo e não constitui oferta, recomendação de investimento ou promessa de rentabilidade. Condições, riscos e documentos devem ser avaliados junto à nossa equipe.
          </p>
        </div>
      </section>

      <CtaBand
        title="Quer conhecer as oportunidades?"
        description="Fale com a nossa equipe e receba as informações e os documentos da sua análise."
      />
    </main>
  );
}

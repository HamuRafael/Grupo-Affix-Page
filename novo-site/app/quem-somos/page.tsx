import type { Metadata } from "next";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { defaultOgImage, ogDefaults, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça o Grupo Affix, FIDC e Securitizadora desde 2013, especializado em antecipação de recebíveis, capital de giro e soluções financeiras para empresas.",
  alternates: { canonical: "/quem-somos" },
  openGraph: {
    ...ogDefaults,
    type: "website",
    url: `${siteUrl}/quem-somos`,
    title: "Quem Somos | Grupo Affix",
    description:
      "Conheça o Grupo Affix, FIDC e Securitizadora desde 2013, especializado em soluções financeiras para empresas.",
    images: [defaultOgImage],
  },
};

export default function AboutPage() {
  return (
    <main id="conteudo-principal">
      <PageHero title="Quem somos.">
        <p>
          O Grupo Affix é FIDC e Securitizadora desde 2013, com soluções financeiras personalizadas para empresas de todo o Brasil.
        </p>
      </PageHero>
      <About />
      <Benefits />
      <CtaBand
        title="Vamos conversar sobre o seu negócio?"
        description="Fale com a nossa equipe e encontre a solução financeira mais adequada para sua empresa."
      />
    </main>
  );
}

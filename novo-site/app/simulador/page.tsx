import type { Metadata } from "next";
import { Simulator } from "@/components/Simulator";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { defaultOgImage, ogDefaults, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Simulador de Antecipação de Recebíveis",
  description:
    "Simule a antecipação dos seus recebíveis e envie os dados para uma análise personalizada da equipe do Grupo Affix.",
  alternates: { canonical: "/simulador" },
  openGraph: {
    ...ogDefaults,
    type: "website",
    title: "Simulador de Antecipação | Grupo Affix",
    description:
      "Simule a antecipação dos seus recebíveis e receba uma análise personalizada.",
    url: `${siteUrl}/simulador`,
    images: [defaultOgImage],
  },
};

export default function SimulatorPage() {
  return (
    <main id="conteudo-principal">
      <PageHero title="Simule a antecipação dos seus recebíveis.">
        <p>
          Faça uma estimativa inicial em segundos. Depois, envie os dados pelo formulário e receba uma análise personalizada da nossa equipe.
        </p>
      </PageHero>
      <Simulator />
      <ContactSection />
    </main>
  );
}

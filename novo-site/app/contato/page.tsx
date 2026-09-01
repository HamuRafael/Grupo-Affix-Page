import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { defaultOgImage, ogDefaults, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Grupo Affix para falar sobre antecipação de recebíveis, capital de giro, crédito empresarial e soluções financeiras.",
  alternates: { canonical: "/contato" },
  openGraph: {
    ...ogDefaults,
    type: "website",
    url: `${siteUrl}/contato`,
    title: "Contato | Grupo Affix",
    description:
      "Fale com o Grupo Affix sobre antecipação de recebíveis, capital de giro e crédito para empresas.",
    images: [defaultOgImage],
  },
};

export default function ContactPage() {
  return (
    <main id="conteudo-principal">
      <PageHero title="Fale com o Grupo Affix.">
        <p>
          Conte com uma equipe especializada em antecipação de recebíveis, FIDC, capital de giro e crédito empresarial.
        </p>
      </PageHero>
      <ContactSection />
    </main>
  );
}

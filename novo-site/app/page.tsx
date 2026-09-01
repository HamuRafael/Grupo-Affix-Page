import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Faq } from "@/components/Faq";
import { ContactSection } from "@/components/ContactSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { company, faqs, socialLinks } from "@/data/site";
import { absoluteUrl, defaultDescription, defaultOgImage, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: "Grupo Affix | Antecipação de Recebíveis e FIDC" },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Grupo Affix | Antecipação de Recebíveis e FIDC",
    description: defaultDescription,
    images: [defaultOgImage],
  },
};

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "@id": `${siteUrl}/#empresa`,
      name: "Grupo Affix",
      alternateName: ["Grupo Affix FIDC e Securitizadora", "Affix FIDC"],
      description: defaultDescription,
      url: siteUrl,
      logo: absoluteUrl("/images/logo-affix.png"),
      foundingDate: "2013",
      areaServed: { "@type": "Country", name: "Brasil" },
      serviceType: [
        "Antecipação de recebíveis",
        "Capital de giro",
        "Crédito empresarial",
        "Crédito para agronegócio",
        "Securitização de recebíveis",
      ],
      knowsAbout: ["FIDC", "Direitos creditórios", "Soluções financeiras"],
      email: company.email,
      telephone: company.phoneDisplay,
      sameAs: socialLinks.map((social) => social.href),
      identifier: { "@type": "PropertyValue", name: "CNPJ", value: company.cnpj },
      address: {
        "@type": "PostalAddress",
        streetAddress: "QS 01 Rua 210 Lote 40, Torre A, Sala 1301",
        addressLocality: "Brasília",
        addressRegion: "DF",
        postalCode: "71950-904",
        addressCountry: "BR",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main id="conteudo-principal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <ScrollReveal />
      <Hero />
      <Solutions />
      <About />
      <Faq />
      <ContactSection showForm={false} />
      <Partners />
    </main>
  );
}

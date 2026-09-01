import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";
import { CookieConsent } from "@/components/CookieConsent";
import { Interactions } from "@/components/Interactions";
import { ContactModal } from "@/components/ContactModal";
import { SimulatorModal } from "@/components/SimulatorModal";
import { defaultDescription, defaultKeywords, defaultOgImage, siteName, siteUrl } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Grupo Affix",
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: siteName,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  // Só o formato do card: sem title/description fixos, o X usa as tags Open Graph de
  // cada página, que já são específicas. Definir textos aqui os tornaria genéricos em
  // todas as rotas internas.
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={geistSans.variable}>
        <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
        <Interactions />
        <Header />
        {children}
        <Footer />
        <ContactModal />
        <SimulatorModal />
        <WhatsappButton />
        <CookieConsent enabled={process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true"} />
      </body>
    </html>
  );
}

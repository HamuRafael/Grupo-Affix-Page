export const siteUrl = process.env.SITE_URL ?? "https://grupoaffix.com.br";
export const siteName = "Grupo Affix";

// Base para o openGraph das páginas internas. O objeto openGraph de uma página substitui
// o do layout por inteiro, então site_name e locale somem se não forem repetidos aqui.
export const ogDefaults = {
  siteName,
  locale: "pt_BR",
} as const;

export const defaultDescription =
  "Grupo Affix é FIDC e Securitizadora desde 2013, com antecipação de recebíveis, capital de giro, crédito empresarial e soluções financeiras para o agronegócio em todo o Brasil.";

export const defaultKeywords = [
  "Grupo Affix",
  "FIDC",
  "antecipação de recebíveis",
  "capital de giro",
  "crédito para empresas",
  "crédito para agronegócio",
  "soluções financeiras",
  "securitizadora",
];

export const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Grupo Affix, FIDC e Securitizadora",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

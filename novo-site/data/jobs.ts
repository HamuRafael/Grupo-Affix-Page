export type Job = {
  title: string;
  area: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

// ATENÇÃO: vagas de demonstração para validar o layout.
// Substituir pelo conteúdo real do RH antes de publicar.
export const jobs: Job[] = [
  {
    title: "Analista de Crédito",
    area: "Operações",
    type: "CLT",
    location: "Brasília/DF, presencial",
    summary:
      "Análise de operações de antecipação de recebíveis, avaliação de títulos e apoio ao comitê de crédito.",
    responsibilities: [
      "Analisar documentação de cedentes e sacados",
      "Avaliar a qualidade dos títulos apresentados para antecipação",
      "Apoiar o comitê de crédito com pareceres e indicadores",
      "Acompanhar limites e comportamento da carteira",
    ],
    requirements: [
      "Formação em Administração, Economia, Contabilidade ou áreas afins",
      "Experiência com análise de crédito PJ",
      "Conhecimento de FIDC, factoring ou securitização é diferencial",
      "Boa comunicação e organização",
    ],
  },
  {
    title: "Executivo(a) Comercial",
    area: "Comercial",
    type: "CLT",
    location: "Brasília/DF, híbrido",
    summary:
      "Prospecção e relacionamento com empresas que precisam de capital de giro, conduzindo a jornada do primeiro contato ao fechamento.",
    responsibilities: [
      "Prospectar empresas com potencial para antecipação de recebíveis",
      "Conduzir reuniões, propostas e negociações",
      "Manter relacionamento próximo com a carteira de clientes",
      "Trabalhar metas com apoio de indicadores e CRM",
    ],
    requirements: [
      "Experiência comercial B2B, preferencialmente em serviços financeiros",
      "Perfil de dono, ambição e foco em resultado",
      "Disponibilidade para visitas a clientes no DF e entorno",
      "CNH B é diferencial",
    ],
  },
  {
    title: "Assistente de Operações",
    area: "Operações",
    type: "CLT",
    location: "Brasília/DF, presencial",
    summary:
      "Apoio ao cadastro de clientes, conferência de documentos e rotinas operacionais das antecipações.",
    responsibilities: [
      "Realizar cadastro e atualização de dados de clientes",
      "Conferir documentação das operações",
      "Apoiar as rotinas de formalização e cobrança",
      "Atender clientes em dúvidas operacionais",
    ],
    requirements: [
      "Ensino superior em andamento ou concluído",
      "Atenção a detalhes e organização",
      "Boa comunicação escrita e verbal",
      "Conhecimento de Excel",
    ],
  },
  
];

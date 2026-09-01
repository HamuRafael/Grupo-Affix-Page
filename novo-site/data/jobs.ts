export type Job = {
  title: string;
  area: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

// ─────────────────────────────────────────────────────────────────────────────
// COMO PUBLICAR UMA VAGA
//
// 1. Copie o modelo comentado abaixo e cole DENTRO dos colchetes de `jobs`.
// 2. Preencha os campos com o texto aprovado pelo RH.
// 3. Rode `npx next build` e suba a pasta out/ para o servidor (mesmo processo
//    do go-live). A vaga aparece em /trabalhe-conosco com formulário de
//    candidatura próprio; o currículo chega por e-mail com o título da vaga
//    no assunto.
//
// Campos:
//   title            → nome da vaga (aparece no card e no assunto do e-mail)
//   area             → setor (ex.: "Comercial", "Operações", "TI")
//   type             → regime (ex.: "CLT", "Estágio", "PJ")
//   location         → cidade e modelo (ex.: "Brasília/DF, presencial")
//   summary          → resumo de 1 ou 2 frases sobre a vaga
//   responsibilities → lista do que a pessoa vai fazer (3 a 5 itens)
//   requirements     → lista do que a empresa busca (3 a 5 itens)
//
// Com a lista vazia, a página mostra automaticamente o aviso de que não há
// vagas no momento e oferece o envio de currículo para o banco de talentos.
// ─────────────────────────────────────────────────────────────────────────────

export const jobs: Job[] = [
  // {
  //   title: "Analista de Crédito",
  //   area: "Operações",
  //   type: "CLT",
  //   location: "Brasília/DF, presencial",
  //   summary:
  //     "Análise de operações de antecipação de recebíveis, avaliação de títulos e apoio ao comitê de crédito.",
  //   responsibilities: [
  //     "Analisar documentação de cedentes e sacados",
  //     "Avaliar a qualidade dos títulos apresentados para antecipação",
  //     "Apoiar o comitê de crédito com pareceres e indicadores",
  //   ],
  //   requirements: [
  //     "Formação em Administração, Economia, Contabilidade ou áreas afins",
  //     "Experiência com análise de crédito PJ",
  //     "Conhecimento de FIDC, factoring ou securitização é diferencial",
  //   ],
  // },
];

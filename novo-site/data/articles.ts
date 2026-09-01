export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  quote?: { text: string; author: string };
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  // Data de publicação no formato AAAA-MM-DD; alimenta o JSON-LD e o sitemap.
  datePublished: string;
  image: string;
  imageAlt: string;
  tags: string[];
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "o-que-e-securitizacao",
    datePublished: "2026-08-28",
    title: "O que é Securitização e como funciona?",
    description:
      "Descubra como a securitização transforma ativos em recursos financeiros e beneficia empresas e investidores.",
    image: "/images/blog-securitizacao.jpeg",
    imageAlt: "Profissionais assinando um acordo de securitização",
    tags: ["Securitização", "FIDC", "Gestão Financeira"],
    sections: [
      {
        paragraphs: [
      "Securitização é uma forma de estruturar direitos creditórios — valores que uma empresa tem a receber — para conectá-los ao mercado de capitais. A estrutura pode envolver a cessão desses recebíveis e a emissão de valores mobiliários, conforme a operação escolhida.",
      "Para a empresa cedente, a operação pode antecipar recursos que só entrariam no caixa no futuro. As condições, os custos, as garantias e a alocação dos riscos variam conforme os documentos da operação e a análise de crédito.",
        ],
      },
      {
        heading: "Como funciona a Securitização?",
        paragraphs: [
          "Em linhas gerais, a empresa identifica os recebíveis que pretende negociar, a documentação é analisada e as partes definem preço, prazo, garantias e responsabilidades. A forma jurídica da estrutura pode variar; por isso, cada operação deve ser examinada individualmente.",
          "Um FIDC é um fundo que investe em direitos creditórios. Ele pode adquirir recebíveis de empresas, desde que a operação atenda à política do fundo e aos critérios de análise aplicáveis. FIDC e companhia securitizadora são estruturas diferentes, embora ambas atuem no universo dos recebíveis.",
        ],
        quote: {
          text: "Uma boa estrutura de recebíveis começa com informação confiável, documentos consistentes e análise adequada dos riscos.",
          author: "Grupo Affix",
        },
      },
      {
        heading: "Benefícios da Securitização",
        list: [
          "Possibilidade de antecipar valores a receber, conforme aprovação da operação.",
          "Alternativa para diversificar fontes de recursos da empresa.",
          "Estruturação de prazos e condições compatíveis com o ciclo de vendas.",
          "Análise individual de recebíveis, sacados e documentação.",
          "Maior previsibilidade de caixa quando a operação é adequada ao negócio.",
        ],
        paragraphs: [
          "A securitização não substitui o planejamento financeiro. Antes de contratar, compare custos, obrigações, garantias e impactos contábeis com o apoio de profissionais habilitados.",
        ],
      },
    ],
  },
  {
    slug: "fidcs-liquidez-empresas",
    datePublished: "2026-08-28",
    title: "Como os FIDCs impulsionam a liquidez das empresas",
    description:
      "Entenda o papel dos Fundos de Investimento em Direitos Creditórios (FIDCs) no financiamento de negócios e projetos.",
    image: "/images/blog-fidc.jpg",
    imageAlt: "Ilustração da sigla FIDC sobre notas e moedas",
    tags: ["FIDC", "Liquidez", "Crédito"],
    sections: [
      {
        paragraphs: [
      "O FIDC, Fundo de Investimento em Direitos Creditórios, é uma modalidade de fundo que investe predominantemente em direitos creditórios, como valores originados de duplicatas, contratos e outros recebíveis. Sua constituição e funcionamento seguem regras da Comissão de Valores Mobiliários (CVM).",
          "Quando uma empresa vende a prazo, o dinheiro só entra no caixa no vencimento das faturas. Ao ceder esses recebíveis a um FIDC, ela recebe os valores de forma antecipada e pode usar os recursos em compras, folha de pagamento, estoque ou expansão.",
        ],
      },
      {
        heading: "Por que o FIDC melhora a liquidez?",
        list: [
          "A empresa pode antecipar valores de vendas a prazo, após análise e aprovação.",
          "A capacidade de operação depende da qualidade dos recebíveis, da documentação e das políticas de crédito.",
          "A cessão de recebíveis tem características próprias e deve ser diferenciada de um empréstimo conforme os contratos e as responsabilidades assumidas.",
          "A análise costuma considerar títulos, sacados, histórico de pagamento e concentração da carteira.",
        ],
      },
      {
        heading: "Quem regula e fiscaliza",
        paragraphs: [
          "Os FIDCs são regulados pela CVM, inclusive pelas regras específicas do Anexo Normativo II da Resolução CVM 175. A estrutura de cada fundo define os prestadores de serviços, suas responsabilidades e as informações que devem ser divulgadas.",
          "É esse arranjo que permite ao Grupo Affix, atuando como FIDC e Securitizadora desde 2013, oferecer soluções de antecipação com análise individual de cada operação.",
        ],
      },
    ],
  },
  {
    slug: "beneficios-fiscais-securitizacao",
    datePublished: "2026-08-28",
    title: "Cessão de recebíveis: cuidados tributários e contábeis",
    description:
      "Entenda por que a tributação e a contabilização de uma cessão de recebíveis exigem análise individual da operação.",
    image: "/images/solucoes/capital-de-giro.jpg",
    imageAlt: "Aperto de mãos sobre mesa com contrato e relatórios",
    tags: ["Securitização", "Tributos", "Gestão Financeira"],
    sections: [
      {
        paragraphs: [
      "A cessão de recebíveis pode afetar a escrituração contábil e a tributação da empresa. Não existe, porém, um benefício fiscal automático: o tratamento depende do regime tributário, dos termos contratuais, da existência de coobrigação e das particularidades da operação.",
      "Também não é seguro concluir, de forma genérica, que uma cessão não gera endividamento. A classificação contábil e os efeitos econômicos devem ser avaliados pela administração da empresa e por seus assessores contábeis e tributários.",
        ],
      },
      {
        heading: "Pontos que merecem atenção",
        list: [
          "O deságio, as despesas e as receitas da operação exigem avaliação conforme o regime tributário aplicável.",
          "Cláusulas como coobrigação, garantias e recompra podem mudar a análise jurídica, contábil e tributária.",
          "Os reflexos nos indicadores financeiros dependem da essência econômica da transação e da forma de contabilização adotada.",
          "A decisão deve ser tomada caso a caso, com documentação e orientação especializada.",
        ],
      },
      {
        heading: "O papel da assessoria especializada",
        paragraphs: [
          "Os efeitos fiscais dependem do regime de tributação, do tipo de recebível e da estrutura da operação. Por isso, é essencial contar com contadores e assessores especializados para avaliar o enquadramento correto de cada caso.",
          "Este conteúdo tem caráter informativo e não substitui a orientação contábil ou tributária profissional.",
        ],
      },
    ],
  },
  {
    slug: "tendencias-mercado-fidcs",
    datePublished: "2026-08-28",
    title: "Tendências para o mercado de FIDCs",
    description:
      "Confira as principais tendências e projeções para o setor de FIDCs no Brasil e no mundo.",
    image: "/images/blog-tendencias.jpeg",
    imageAlt: "Composição com a sigla FIDC sobre cédulas de real e moedas",
    tags: ["FIDC", "Mercado", "Tendências"],
    sections: [
      {
        paragraphs: [
      "Os FIDCs têm se consolidado como uma alternativa de estruturação para direitos creditórios no mercado brasileiro. O interesse por essa modalidade acompanha a necessidade de empresas organizarem fluxo de caixa e de investidores avaliarem ativos com critérios de risco claros.",
      "O ambiente regulatório continua evoluindo. Por isso, participantes do mercado devem acompanhar as normas da CVM e os documentos específicos de cada fundo antes de tomar decisões.",
        ],
      },
      {
        heading: "Movimentos que estão moldando o setor",
        list: [
          "Digitalização das operações, com registro eletrônico de duplicatas e menos papel.",
          "Aprimoramento das regras de transparência e divulgação de informações.",
          "Crescimento da securitização no agronegócio e no setor imobiliário.",
          "Uso de dados e tecnologia para análise de crédito mais rápida e precisa.",
        ],
      },
      {
        heading: "O que isso significa para as empresas",
        paragraphs: [
          "Tecnologia e dados podem tornar processos de análise mais eficientes, mas não eliminam a necessidade de validar documentos, sacados e condições comerciais.",
          "Para quem busca capital de giro, entender como funciona a antecipação de recebíveis ajuda a comparar propostas e escolher parceiros transparentes.",
        ],
      },
    ],
  },
  {
    slug: "securitizacao-no-agro",
    datePublished: "2026-08-28",
    title: "Securitização no setor agro: como funciona?",
    description:
      "Descubra como o setor agropecuário utiliza a securitização para antecipar receitas e viabilizar projetos.",
    image: "/images/blog-agro.jpg",
    imageAlt: "Plantação em fileiras vista de perto",
    tags: ["Agronegócio", "Securitização", "Crédito Rural"],
    sections: [
      {
        paragraphs: [
          "O agronegócio tem um ciclo financeiro particular: os custos se concentram no plantio, e a receita só chega na colheita e na venda da produção. A securitização ajuda a equilibrar esse descompasso, permitindo que produtores e empresas do setor antecipem valores a receber.",
      "Entre os exemplos de direitos creditórios que podem ser analisados estão recebíveis originados de vendas, contratos comerciais e documentos que comprovem a operação. A elegibilidade depende do tipo de título, do devedor, das garantias e da documentação apresentada.",
        ],
      },
      {
        heading: "Como o produtor se beneficia",
        list: [
          "Recursos para organizar compras, custeio e compromissos do ciclo produtivo.",
          "Maior previsibilidade de caixa entre o plantio, a colheita e a comercialização.",
          "Possibilidade de negociar prazos de acordo com o ciclo comercial, quando a operação for aprovada.",
          "Análise de recebíveis vinculados à atividade, respeitando a documentação e as garantias disponíveis.",
        ],
      },
      {
        heading: "Um mercado em expansão",
        paragraphs: [
          "Instrumentos como a securitização de recebíveis agrícolas vêm ganhando espaço como alternativa ao crédito rural tradicional, dando mais autonomia ao produtor na gestão do seu fluxo de caixa.",
          "O Grupo Affix analisa cada operação de forma individual, considerando os documentos, o ciclo do negócio e as características dos recebíveis apresentados.",
        ],
      },
    ],
  },
  {
    slug: "riscos-securitizacao-credito",
    datePublished: "2026-08-28",
    title: "Como avaliar os riscos na securitização de crédito?",
    description:
      "Veja como as empresas podem mitigar riscos ao estruturar operações de securitização de crédito.",
    image: "/images/blog-riscos.jpg",
    imageAlt: "Profissional diante de um diagrama de gestão de riscos",
    tags: ["Gestão de Riscos", "Securitização", "Crédito"],
    sections: [
      {
        paragraphs: [
          "Toda operação de crédito envolve riscos, e na securitização não é diferente. Os principais são a inadimplência dos devedores dos títulos, a flutuação das taxas de juros e mudanças nas condições do mercado.",
      "Esses riscos podem ser avaliados e reduzidos com análise rigorosa dos recebíveis e uma estrutura bem documentada, mas não são eliminados. Por isso, a decisão deve considerar o perfil da carteira e as responsabilidades previstas em contrato.",
        ],
      },
      {
        heading: "Práticas que reduzem o risco",
        list: [
          "Análise da qualidade dos títulos e do histórico de pagamento dos devedores.",
          "Diversificação da carteira, evitando concentração em poucos devedores.",
          "Verificação da documentação que comprova a existência dos créditos.",
          "Acompanhamento contínuo da carteira após a operação.",
          "Definição clara de garantias, limites e responsabilidades entre as partes.",
        ],
      },
      {
        heading: "O papel da análise especializada",
        paragraphs: [
          "O processo de análise envolve a verificação da documentação dos recebíveis, a análise de crédito do cliente, a avaliação dos riscos envolvidos e a definição das condições de antecipação, como prazos e taxas.",
          "Contar com uma equipe especializada em análise, precificação e acompanhamento de carteiras contribui para decisões mais bem fundamentadas. Ainda assim, cada operação está sujeita aos riscos previstos em seus documentos e às condições de mercado.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

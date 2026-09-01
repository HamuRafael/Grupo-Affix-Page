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
          "A securitização é um processo financeiro em que uma empresa transforma seus recebíveis ou ativos em recursos financeiros por meio da emissão de títulos negociáveis no mercado. Esses títulos são adquiridos por investidores, permitindo à empresa obter liquidez imediata e investir no crescimento do seu negócio.",
          "Empresas de diversos setores, como o financeiro, comercial e agropecuário, utilizam a securitização para antecipar receitas, reduzir riscos de inadimplência e otimizar sua gestão de caixa. Essa estratégia não apenas beneficia as empresas, mas também oferece aos investidores uma alternativa atrativa de rendimento, muitas vezes com garantia de lastro em ativos reais.",
        ],
      },
      {
        heading: "Como funciona a Securitização?",
        paragraphs: [
          "O processo de securitização envolve a transferência de recebíveis de uma empresa para uma entidade chamada Sociedade de Propósito Específico (SPE). Essa SPE emite títulos baseados nesses ativos e os vende a investidores no mercado financeiro. Os investidores recebem retornos com base nos pagamentos dos recebíveis pela empresa de origem.",
          "Um exemplo comum são os Fundos de Investimento em Direitos Creditórios (FIDCs), que estruturam operações de securitização para empresas, proporcionando flexibilidade financeira e acesso a recursos a custos competitivos.",
        ],
        quote: {
          text: "A securitização transforma desafios financeiros em oportunidades, conectando empresas a investidores em busca de rentabilidade e segurança.",
          author: "Grupo Affix",
        },
      },
      {
        heading: "Benefícios da Securitização",
        list: [
          "Liquidez imediata para empresas ao antecipar recebíveis.",
          "Diversificação das fontes de financiamento corporativo.",
          "Mitigação de riscos de inadimplência ao transferir ativos.",
          "Possibilidade de menores custos financeiros em comparação a empréstimos.",
          "Cria oportunidades de investimento atrativas e seguras.",
        ],
        paragraphs: [
          "A securitização é uma ferramenta poderosa para alavancar o potencial financeiro das empresas, permitindo que elas se concentrem no crescimento e na inovação sem comprometer sua saúde financeira.",
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
          "O FIDC, Fundo de Investimento em Direitos Creditórios, é um fundo que destina a maior parte do seu patrimônio à compra de créditos a receber de empresas, como duplicatas, cheques e contratos. Na prática, ele funciona como uma ponte entre empresas que precisam de caixa agora e investidores que buscam rentabilidade.",
          "Quando uma empresa vende a prazo, o dinheiro só entra no caixa no vencimento das faturas. Ao ceder esses recebíveis a um FIDC, ela recebe os valores de forma antecipada e pode usar os recursos em compras, folha de pagamento, estoque ou expansão.",
        ],
      },
      {
        heading: "Por que o FIDC melhora a liquidez?",
        list: [
          "A empresa transforma vendas a prazo em capital de giro imediato.",
          "O limite de operação acompanha o volume de vendas, crescendo junto com o negócio.",
          "A operação não é um empréstimo, é a venda de um direito que a empresa já possui.",
          "A análise considera a qualidade dos títulos, o que pode beneficiar empresas em crescimento.",
        ],
      },
      {
        heading: "Quem regula e fiscaliza",
        paragraphs: [
          "Os FIDCs são regulamentados pela Comissão de Valores Mobiliários (CVM) e contam com estruturas de administração, custódia e auditoria independentes, o que traz governança e transparência para as operações.",
          "É esse arranjo que permite ao Grupo Affix, atuando como FIDC e Securitizadora desde 2013, oferecer soluções de antecipação com análise individual de cada operação.",
        ],
      },
    ],
  },
  {
    slug: "beneficios-fiscais-securitizacao",
    datePublished: "2026-08-28",
    title: "Benefícios fiscais na securitização de recebíveis",
    description:
      "Saiba como empresas podem otimizar sua carga tributária ao utilizar instrumentos de securitização.",
    image: "/images/solucoes/capital-de-giro.jpg",
    imageAlt: "Aperto de mãos sobre mesa com contrato e relatórios",
    tags: ["Securitização", "Tributos", "Gestão Financeira"],
    sections: [
      {
        paragraphs: [
          "Além de melhorar o fluxo de caixa, a securitização de recebíveis pode trazer efeitos positivos na organização fiscal e contábil das empresas. A operação de cessão de créditos tem natureza diferente da de um empréstimo, e essa diferença aparece no balanço.",
          "Em um financiamento tradicional, a empresa assume uma dívida e registra juros como despesa ao longo do tempo. Na cessão de recebíveis, a empresa vende um ativo que já possui, o que não aumenta seu endividamento.",
        ],
      },
      {
        heading: "Pontos que merecem atenção",
        list: [
          "O deságio da cessão pode ser tratado como despesa dedutível, conforme o regime tributário da empresa.",
          "A operação não gera passivo bancário, o que preserva indicadores de endividamento.",
          "Balanços mais saudáveis tendem a melhorar a avaliação de crédito da empresa.",
          "Cada regime tributário tem regras próprias, a análise deve ser feita caso a caso.",
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
          "O mercado de FIDCs vem crescendo de forma consistente no Brasil, impulsionado pela busca das empresas por alternativas de financiamento fora do sistema bancário tradicional e pelo interesse dos investidores em produtos com lastro em ativos reais.",
          "A evolução da regulamentação da CVM ampliou o acesso a esse mercado, aumentando a transparência das carteiras e criando novas possibilidades de estruturação de fundos.",
        ],
      },
      {
        heading: "Movimentos que estão moldando o setor",
        list: [
          "Digitalização das operações, com registro eletrônico de duplicatas e menos papel.",
          "Ampliação do acesso de investidores a fundos antes restritos.",
          "Crescimento da securitização no agronegócio e no setor imobiliário.",
          "Uso de dados e tecnologia para análise de crédito mais rápida e precisa.",
        ],
      },
      {
        heading: "O que isso significa para as empresas",
        paragraphs: [
          "Com mais competição e tecnologia, a tendência é que a antecipação de recebíveis fique cada vez mais ágil e acessível para empresas de todos os portes, incluindo pequenos e médios negócios que antes dependiam apenas de bancos.",
          "Para quem precisa de capital de giro, entender esse mercado ajuda a negociar melhores condições e a escolher parceiros sólidos e transparentes.",
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
          "No agro, é possível antecipar recebíveis como duplicatas de vendas de grãos, contratos de fornecimento, cheques de transações comerciais, boletos relacionados a vendas de produtos agrícolas e até mesmo recebíveis de financiamentos agrícolas.",
        ],
      },
      {
        heading: "Como o produtor se beneficia",
        list: [
          "Caixa disponível para custeio de plantio, sementes e insumos.",
          "Financiamento de máquinas e implementos sem esperar a safra.",
          "Prazos negociados de acordo com a data da colheita.",
          "Antecipação de subvenções e programas de incentivo ao setor.",
        ],
      },
      {
        heading: "Um mercado em expansão",
        paragraphs: [
          "Instrumentos como a securitização de recebíveis agrícolas vêm ganhando espaço como alternativa ao crédito rural tradicional, dando mais autonomia ao produtor na gestão do seu fluxo de caixa.",
          "O Grupo Affix oferece soluções financeiras específicas para o agronegócio, possibilitando maior fluidez financeira para os produtores.",
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
          "A boa notícia é que esses riscos podem ser medidos e mitigados com uma análise rigorosa dos recebíveis e uma estrutura de operação bem desenhada.",
        ],
      },
      {
        heading: "Práticas que reduzem o risco",
        list: [
          "Análise da qualidade dos títulos e do histórico de pagamento dos devedores.",
          "Diversificação da carteira, evitando concentração em poucos devedores.",
          "Verificação da documentação que comprova a existência dos créditos.",
          "Acompanhamento contínuo da carteira após a operação.",
        ],
      },
      {
        heading: "O papel da análise especializada",
        paragraphs: [
          "O processo de análise envolve a verificação da documentação dos recebíveis, a análise de crédito do cliente, a avaliação dos riscos envolvidos e a definição das condições de antecipação, como prazos e taxas.",
          "Contar com uma equipe especializada em análise, precificação e recuperação de carteiras de crédito faz diferença na segurança de cada operação.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

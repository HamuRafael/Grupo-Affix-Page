export type SolutionPage = {
  slug: string;
  navLabel: string;
  title: string;
  metaDescription: string;
  image: { src: string; alt: string };
  intro: string[];
  highlightsTitle: string;
  highlights: { icon: string; title: string; description: string }[];
  modalitiesTitle?: string;
  modalities?: string[];
  closingTitle?: string;
  closing?: string;
  showProcess?: boolean;
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "antecipacao-de-recebiveis",
    navLabel: "Antecipação de Recebíveis",
    title: "Antecipação de Recebíveis",
    metaDescription:
      "Antecipe duplicatas, cheques, boletos e contratos com análise rápida e atendimento personalizado do Grupo Affix.",
    image: {
      src: "/images/solucoes/antecipacao-recebiveis.jpg",
      alt: "Equipe reunida analisando gráficos de desempenho em um notebook",
    },
    intro: [
      "Antecipação de recebíveis é uma escolha inteligente, pois você utiliza recursos que já são seus, sem precisar recorrer a empréstimos.",
      "Após o envio dos seus títulos, como cheques e duplicatas, nossa equipe realiza uma análise rápida e eficiente. Em poucas horas você recebe uma resposta clara e transparente.",
      "Ao contrário dos bancos, no Grupo Affix avaliamos suas operações individualmente, definindo seu limite com base no volume de operações e na qualidade dos títulos, com um atendimento totalmente personalizado.",
    ],
    highlightsTitle: "Por que antecipar com o Grupo Affix?",
    highlights: [
      {
        icon: "handshake",
        title: "Atendimento personalizado",
        description:
          "Avaliamos cada operação individualmente, definindo limites de acordo com o seu volume e a qualidade dos títulos.",
      },
      {
        icon: "bolt",
        title: "Resposta em poucas horas",
        description:
          "Análise rápida e eficiente da documentação, com retorno claro e transparente para sua empresa.",
      },
      {
        icon: "chart",
        title: "Recursos que já são seus",
        description:
          "Você transforma vendas a prazo em caixa imediato, sem contrair novas dívidas ou recorrer a empréstimos.",
      },
    ],
    modalitiesTitle: "Modalidades de títulos disponíveis para operação",
    modalities: ["Duplicatas", "Cheques", "Boletos", "Notas Fiscais", "Contratos", "Cartão de Crédito"],
    showProcess: true,
  },
  {
    slug: "capital-de-giro",
    navLabel: "Capital de Giro",
    title: "Capital de Giro",
    metaDescription:
      "Capital de giro com garantia real de imóveis ou bens, com condições flexíveis e processo ágil no Grupo Affix.",
    image: {
      src: "/images/solucoes/capital-de-giro.jpg",
      alt: "Aperto de mãos sobre uma mesa com contrato, notebook e relatórios financeiros",
    },
    intro: [
      "Com o uso de garantia real, como imóveis ou bens, disponibilizamos capital de giro para impulsionar o crescimento e a produtividade dos nossos clientes.",
      "Desenvolvemos operações financeiras sob medida, com condições favoráveis e taxas competitivas, garantidas pela solidez dos bens dados em garantia.",
    ],
    highlightsTitle: "Capital de Giro com Garantia Real",
    highlights: [
      {
        icon: "chart",
        title: "Taxas reduzidas e competitivas",
        description:
          "Condições financeiras exclusivas, garantidas pela solidez de seus imóveis ou bens como garantia.",
      },
      {
        icon: "bolt",
        title: "Acesso ao crédito imediato",
        description:
          "Obtenha o capital necessário de forma rápida, utilizando imóveis ou bens como garantia para impulsionar sua operação.",
      },
      {
        icon: "handshake",
        title: "Condições flexíveis",
        description:
          "Prazos adaptados ao fluxo de caixa do cliente, permitindo maior tranquilidade para gerenciar o pagamento.",
      },
      {
        icon: "growth",
        title: "Foco na expansão do negócio",
        description:
          "Soluções financeiras voltadas para investir no crescimento do seu empreendimento sem comprometer o fluxo de caixa.",
      },
      {
        icon: "home",
        title: "Garantia real com imóveis",
        description:
          "Use bens imobiliários como garantia para potencializar suas operações, com segurança e condições personalizadas.",
      },
      {
        icon: "shield",
        title: "Processo simples e ágil",
        description:
          "Operações descomplicadas e suporte especializado em todas as etapas, com análise eficiente e 100% digital.",
      },
    ],
    closingTitle: "Por que escolher o Grupo Affix para Capital de Giro?",
    closing:
      "Nossa abordagem une agilidade nos processos, segurança jurídica e condições atrativas, sempre com foco em impulsionar o crescimento sustentável e a saúde financeira dos nossos parceiros.",
  },
  {
    slug: "solucoes-agro",
    navLabel: "Soluções Agro",
    title: "Soluções Financeiras para o Agronegócio",
    metaDescription:
      "Crédito especializado para produtores rurais: antecipação de recebíveis agrícolas, financiamento de safra e prazos ajustados à colheita.",
    image: {
      src: "/images/solucoes/solucoes-agro.jpg",
      alt: "Lavoura em fileiras ao amanhecer",
    },
    intro: [
      "No Grupo Affix, entendemos a importância do agronegócio para o crescimento econômico do Brasil. Por isso, oferecemos soluções financeiras personalizadas, como a antecipação de recebíveis agrícolas, que garantem a liquidez necessária para o produtor rural investir em seu negócio e aumentar sua produtividade.",
      "Oferecemos soluções sob medida para atender às necessidades financeiras de pequenos, médios e grandes produtores rurais, com transparência e compromisso com o setor agropecuário.",
    ],
    highlightsTitle: "Benefícios para o agro",
    highlights: [
      {
        icon: "chart",
        title: "Taxas competitivas",
        description:
          "Taxa atrativa e diferenciada, desenvolvida para o seu segmento e para a sua operação.",
      },
      {
        icon: "growth",
        title: "Crédito para expansão",
        description:
          "Financiamentos para aquisição ou renovação de máquinas e implementos agrícolas.",
      },
      {
        icon: "agro",
        title: "Prazo safra e safrinha",
        description: "Negocie a antecipação de acordo com a data da sua colheita.",
      },
      {
        icon: "receivable",
        title: "Financiamento de safra",
        description:
          "Soluções para custeio de plantio, compra de sementes, insumos e outros gastos relacionados à produção agrícola.",
      },
      {
        icon: "handshake",
        title: "Antecipação de subvenções",
        description:
          "Antecipação de valores a receber do governo, como subsídios ou programas de incentivo ao setor agrícola.",
      },
      {
        icon: "bolt",
        title: "Simples e rápido",
        description:
          "Operações totalmente digitais, ágeis e eficientes, com equipe especializada em todas as fases da operação.",
      },
    ],
  },
  {
    slug: "conta-escrow",
    navLabel: "Conta Escrow",
    title: "Conta Escrow",
    metaDescription:
      "Mais segurança em suas transações: conta escrow com gestão profissional do Grupo Affix e abertura em apenas um dia.",
    image: {
      src: "/images/solucoes/conta-escrow.jpg",
      alt: "Fachada de vidro de um edifício corporativo visto de baixo",
    },
    intro: [
      "O termo Escrow vem do inglês e significa garantia. É uma solução financeira que garante segurança e transparência em negociações, assegurando que todos os direitos e condições acordados entre as partes sejam devidamente cumpridos.",
      "Ideal para contratos de compra e venda, fusões, grandes projetos ou transações que exijam segurança, o Grupo Affix oferece gestão profissional e confiável, apoiado por anos de experiência no mercado e uma equipe altamente especializada.",
    ],
    highlightsTitle: "Entenda como funciona a Conta Escrow",
    highlights: [
      {
        icon: "bolt",
        title: "Criação da conta",
        description:
          "A conta é criada no mesmo dia pelo Grupo Affix para garantir a segurança das transações.",
      },
      {
        icon: "lock",
        title: "Depósito de valores",
        description:
          "Os recursos financeiros são depositados na conta até que as condições do contrato sejam cumpridas.",
      },
      {
        icon: "shield",
        title: "Validação do contrato",
        description:
          "Nossa equipe garante que todas as cláusulas acordadas sejam atendidas antes da liberação.",
      },
      {
        icon: "check",
        title: "Liberação de recursos",
        description:
          "Após o cumprimento do contrato, os valores são liberados com total segurança.",
      },
    ],
    modalitiesTitle: "Modalidades de operações com Conta Escrow",
    modalities: [
      "Compra e Venda",
      "Fusões e Aquisições",
      "Projetos Imobiliários",
      "Disputas Judiciais",
      "Garantias Contratuais",
    ],
    closingTitle: "A segurança da Escrow com flexibilidade",
    closing:
      "Você garante segurança jurídica, protegendo os fundos até que todas as condições sejam atendidas, e prevenção de fraudes, reduzindo riscos com soluções de controle e protesto. Além disso, conta com gestão ágil e simplificada e abertura em apenas um dia, facilitando o início das operações de forma rápida e prática.",
  },
  {
    slug: "credito-para-construtoras",
    navLabel: "Crédito para Construtoras",
    title: "Fomento Imobiliário e Crédito para Construtoras",
    metaDescription:
      "Fomento imobiliário para construtoras e incorporadoras: antecipação de parcelas, financiamento de projetos e assessoria especializada.",
    image: {
      src: "/images/solucoes/credito-construtoras.jpg",
      alt: "Vista aérea de um bairro residencial com casas e ruas arborizadas",
    },
    intro: [
      "Entendemos as necessidades do mercado imobiliário e oferecemos um atendimento ágil e personalizado, com atenção total ao cliente.",
      "Ao somar ao seu negócio, garantimos não apenas recursos, mas também suporte especializado e estratégias que impulsionam seus projetos. Trabalhar com o Grupo Affix é escolher um parceiro que valoriza a sua visão e transforma possibilidades em realizações concretas.",
    ],
    highlightsTitle: "Diferenciais do Fomento Imobiliário",
    highlights: [
      {
        icon: "chart",
        title: "Flexibilidade financeira",
        description:
          "Soluções de financiamento flexíveis, ajustadas às necessidades e dimensões específicas de cada projeto imobiliário.",
      },
      {
        icon: "bolt",
        title: "Agilidade na aprovação",
        description:
          "Processos de aprovação ágeis e descomplicados, permitindo o início rápido e a continuidade dos seus projetos.",
      },
      {
        icon: "handshake",
        title: "Alianças estratégicas",
        description:
          "Parcerias que ampliam o acesso a recursos e criam novas oportunidades para seus empreendimentos.",
      },
      {
        icon: "shield",
        title: "Assessoria especializada",
        description:
          "Consultoria estratégica e insights valiosos para potencializar seus investimentos e minimizar riscos operacionais.",
      },
    ],
    modalitiesTitle: "Modalidades de operações no Fomento Imobiliário",
    modalities: [
      "Compra e Venda",
      "Construções Residenciais",
      "Incorporação Imobiliária",
      "Financiamento de Projetos",
      "Garantias Contratuais",
    ],
    closingTitle: "Por que escolher o Grupo Affix para o Fomento Imobiliário?",
    closing:
      "Acreditamos que confiança é construída com experiência, transparência e resultados. Com anos de atuação no mercado, oferecemos soluções financeiras robustas e personalizadas que atendem às demandas do setor imobiliário. Nossa abordagem combina processos ágeis, segurança jurídica e um compromisso inabalável com o sucesso dos nossos parceiros.",
  },
  {
    slug: "antecipacao-de-alugueis",
    navLabel: "Antecipação de Aluguéis",
    title: "Antecipação de Aluguéis",
    metaDescription:
      "Antecipe os valores de aluguéis a receber e obtenha liquidez imediata para novos investimentos com o Grupo Affix.",
    image: {
      src: "/images/solucoes/antecipacao-alugueis.jpeg",
      alt: "Consultor apresentando cálculos em uma negociação de contrato de aluguel",
    },
    intro: [
      "Antecipe os valores de aluguéis a receber e obtenha liquidez para novos investimentos.",
      "Com a análise individual das suas operações e um atendimento totalmente personalizado, transformamos contratos de locação em recursos disponíveis para o seu planejamento.",
    ],
    highlightsTitle: "Como a antecipação de aluguéis ajuda você",
    highlights: [
      {
        icon: "home",
        title: "Liquidez imediata",
        description:
          "Receba agora os valores de contratos de locação, sem esperar os vencimentos mensais.",
      },
      {
        icon: "handshake",
        title: "Análise individual",
        description:
          "Avaliamos cada operação de acordo com o contrato e a qualidade dos recebíveis envolvidos.",
      },
      {
        icon: "growth",
        title: "Recursos para investir",
        description:
          "Use a liquidez obtida para novos investimentos, reformas ou ampliação do seu patrimônio.",
      },
    ],
    showProcess: true,
  },
];

export function getSolutionPage(slug: string) {
  return solutionPages.find((page) => page.slug === slug);
}

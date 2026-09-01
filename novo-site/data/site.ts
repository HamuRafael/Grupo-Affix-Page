export type NavigationItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavigationItem[] = [
  { label: "Início", href: "/#inicio" },
  {
    label: "Soluções",
    href: "/#solucoes",
    children: [
      { label: "Antecipação de Recebíveis", href: "/solucoes/antecipacao-de-recebiveis" },
      { label: "Capital de Giro", href: "/solucoes/capital-de-giro" },
      { label: "Soluções Agro", href: "/solucoes/solucoes-agro" },
      { label: "Conta Escrow", href: "/solucoes/conta-escrow" },
      { label: "Crédito para Construtoras", href: "/solucoes/credito-para-construtoras" },
      { label: "Antecipação de Aluguéis", href: "/solucoes/antecipacao-de-alugueis" },
    ],
  },
  { label: "Investidores", href: "/investidores" },
  { label: "Quem somos", href: "/quem-somos" },
  {
    label: "Conteúdos",
    href: "/blog",
    children: [
      { label: "Simulador", href: "/simulador" },
      { label: "Blog", href: "/blog" },
      { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
    ],
  },
];

export const cultureValues = [
  {
    icon: "handshake",
    title: "Transparência",
    description:
      "Agimos com clareza, verdade e responsabilidade em todas as nossas relações.",
  },
  {
    icon: "autonomy",
    title: "Autonomia e Efetividade",
    description:
      "Temos liberdade com responsabilidade para agir com agilidade, eficiência e foco em resultados.",
  },
  {
    icon: "target",
    title: "Foco em Resultados",
    description:
      "Somos movidos por metas que geram impacto e valor para o negócio.",
  },
  {
    icon: "team",
    title: "Espírito Vibrante",
    description:
      "Valorizamos o trabalho em equipe, o respeito e um ambiente leve, colaborativo e motivador.",
  },
  {
    icon: "bulb",
    title: "Inovação",
    description:
      "Buscamos novas ideias, soluções e tecnologias para evoluir e fazer diferente.",
  },
] as const;

export const solutions = [
  {
    icon: "receivable",
    title: "Antecipação de Recebíveis",
    description:
      "Receba de forma antecipada os valores de vendas a prazo, otimizando o fluxo de caixa da sua empresa.",
    href: "/solucoes/antecipacao-de-recebiveis",
  },
  {
    icon: "growth",
    title: "Capital de Giro",
    description:
      "Com acesso facilitado ao capital de giro, utilizando garantia real, como imóveis ou automóveis, para obter melhores condições de financiamento e impulsionar.",
    href: "/solucoes/capital-de-giro",
  },
  {
    icon: "agro",
    title: "Soluções Agro",
    description:
      "Oferecemos crédito especializado para produtores rurais e empresas do agronegócio, viabilizando investimentos em maquinários, insumos e expansão de negócios.",
    href: "/solucoes/solucoes-agro",
  },
  {
    icon: "lock",
    title: "Conta Escrow",
    description:
      "Seus recebíveis são antecipados enquanto os clientes pagam diretamente na conta, gerenciada pelo Grupo Affix.",
    href: "/solucoes/conta-escrow",
  },
  {
    icon: "building",
    title: "Crédito para Construtoras",
    description:
      "Antecipe parcelas da venda do imóvel e garanta capital de giro, fluxo de caixa e novos investimentos para sua empresa.",
    href: "/solucoes/credito-para-construtoras",
  },
  {
    icon: "home",
    title: "Antecipação de Aluguéis",
    description:
      "Antecipe os valores de aluguéis a receber e obtenha liquidez para novos investimentos.",
    href: "/solucoes/antecipacao-de-alugueis",
  },
  {
    icon: "creditcard",
    title: "Antecipação de Cartão de Crédito",
    description:
      "Receba antecipadamente os valores de vendas realizadas via cartão de crédito.",
    href: "/solucoes/antecipacao-de-recebiveis",
  },
  {
    icon: "briefcase",
    title: "Gestão de Ativos",
    description:
      "Conte com uma equipe capacitada para administrar seus ativos securitizados com excelência.",
    href: "/#contato",
    ctaLabel: "Falar com especialista",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Cadastro simples",
    description:
      "Solicitaremos apenas os documentos essenciais para começarmos a parceria.",
  },
  {
    number: "02",
    title: "Análise de crédito",
    description:
      "Nosso comitê de crédito avalia rapidamente sua documentação com total transparência.",
  },
  {
    number: "03",
    title: "Envio dos títulos",
    description:
      "Os títulos irão para análise e você obterá uma resposta rápida e sem complicação.",
  },
  {
    number: "04",
    title: "Crédito em conta",
    description:
      "Após a aprovação, o valor pode ser transferido para sua conta em menos de 24 horas.",
  },
] as const;

export const missionVisionValues = [
  {
    icon: "target",
    title: "Nossa Missão",
    description:
      "Ampliar o acesso ao crédito para os nossos clientes, oferecendo soluções financeiras personalizadas e gerando valor aos nossos Somadores.",
  },
  {
    icon: "eye",
    title: "Nossa Visão",
    description:
      "Nos consolidar como o maior FIDC do DF, com profissionais ambiciosos e competentes, sendo reconhecidos pela excelência e credibilidade.",
  },
  {
    icon: "star",
    title: "Nossos Valores",
    description:
      "Transparência, Foco no Resultado, Autonomia e Efetividade, Inovação e Espírito Vibrante. É o que nos move todos os dias.",
  },
] as const;

export const differentials = [
  {
    title: "Atendimento Humanizado",
    description:
      "Atendemos de forma real, adequada às particularidades e necessidades dos nossos clientes e parceiros.",
  },
  {
    title: "Experiência e Capacidade",
    description:
      "Em análise, consultoria, precificação e recuperação de carteiras de crédito com uma equipe de ponta.",
  },
  {
    title: "Segurança Jurídica e Financeira",
    description:
      "Equipe altamente especializada para garantir segurança e conformidade com regulamentações.",
  },
] as const;

export const partners = [
  { name: "CreditHub", image: "/images/parceiros/credithub.png", role: "Pesquisa e informação de crédito" },
  { name: "Singulare", image: "/images/parceiros/singulare.png", role: "Administração de fundos" },
  { name: "CRDC", image: "/images/parceiros/crdc.png", role: "Registro de duplicatas" },
  { name: "Ouro Preto Investimentos", image: "/images/parceiros/ouro-preto.png", role: "Gestão de investimentos" },
  { name: "BRB", image: "/images/parceiros/brb.png", role: "Instituição bancária" },
  { name: "Bradesco", image: "/images/parceiros/bradesco.png", role: "Instituição bancária" },
  { name: "Q Certifica", image: "/images/parceiros/q-certifica.png", role: "Certificação" },
  { name: "Austin Rating", image: "/images/parceiros/austin-rating.png", role: "Agência classificadora de risco" },
] as const;

export const faqs = [
  {
    question: "O que é antecipação de recebíveis?",
    answer:
      "A antecipação de recebíveis é uma operação financeira que permite que as empresas recebam os valores de seus créditos de forma antecipada, sem esperar o vencimento das faturas.",
  },
  {
    question: "Como funciona um FIDC?",
    answer:
      "O FIDC (Fundo de Investimento em Direitos Creditórios) é um fundo que investe em créditos a receber de empresas. Ele possibilita a securitização desses ativos, transformando-os em títulos negociáveis no mercado.",
  },
  {
    question: "Quais tipos de recebíveis podem ser antecipados?",
    answer:
      "São passíveis de antecipação recebíveis de duplicatas, cheques, contratos e boletos. Eles podem ser provenientes de transações comerciais realizadas com empresas ou pessoas físicas.",
  },
  {
    question: "Quais são as vantagens de antecipar meus recebíveis com o Grupo Affix?",
    answer:
      "Ao antecipar seus recebíveis conosco, você garante liquidez imediata, melhora o fluxo de caixa e pode investir no crescimento do seu negócio sem esperar o vencimento das faturas.",
  },
  {
    question: "Minha empresa está negativada; posso ainda assim antecipar recebíveis?",
    answer:
      "Sim, oferecemos soluções de antecipação de recebíveis para empresas com restrições no CNPJ, proporcionando maiores limites de crédito e flexibilidade para regularizar sua situação sem aumentar as dívidas.",
  },
  {
    question: "Quais documentos são necessários para realizar a antecipação?",
    answer:
      "Para a antecipação de recebíveis, são exigidos documentos como a prova da existência dos créditos (duplicatas, boletos, contratos) e a comprovação de que a empresa está em conformidade com a legislação vigente.",
  },
  {
    question: "Quais recebíveis do agronegócio posso antecipar?",
    answer:
      "No agronegócio, é possível antecipar recebíveis como duplicatas de vendas de grãos, contratos de fornecimento, cheques de transações comerciais, boletos relacionados a vendas de produtos agrícolas e até mesmo recebíveis de financiamentos agrícolas.",
  },
  {
    question: "Quais são os benefícios de uma securitizadora?",
    answer:
      "A securitizadora oferece benefícios como maior liquidez para as empresas, redução de custos financeiros e otimização do fluxo de caixa, ao transformar recebíveis em recursos imediatos.",
  },
  {
    question: "Quais os riscos envolvidos na antecipação de recebíveis?",
    answer:
      "Os riscos podem incluir inadimplência dos devedores, flutuação das taxas de juros e mudanças nas condições do mercado. A gestão adequada dos recebíveis e uma análise rigorosa são fundamentais para mitigar esses riscos.",
  },
  {
    question: "Como funciona a antecipação de contratos de aluguel?",
    answer:
      "A antecipação de contratos de aluguel envolve o recebimento antecipado de parcelas futuras de contratos de locação. Esses contratos são usados como garantia para viabilizar a antecipação junto a uma instituição financeira.",
  },
  {
    question: "Como o Grupo Affix pode apoiar empresas do agronegócio?",
    answer:
      "O Grupo Affix oferece soluções financeiras específicas para o agronegócio, como a antecipação de recebíveis provenientes da venda de grãos, contratos de fornecimento e financiamentos agrícolas, possibilitando maior fluidez financeira para os produtores.",
  },
  {
    question: "Qual é o processo de análise para antecipação de recebíveis?",
    answer:
      "O processo de análise envolve a verificação da documentação dos recebíveis, a análise de crédito do cliente, a avaliação dos riscos envolvidos e a definição das condições de antecipação, como prazos e taxas de juros.",
  },
] as const;

// Os artigos do blog, com conteúdo completo, ficam em data/articles.ts.

export const company = {
  phoneDisplay: "+55 61 3297-2310",
  phoneHref: "tel:+556132972310",
  whatsappHref:
    "https://api.whatsapp.com/send?phone=5561993998904&text=Quero%20antecipar%20meus%20receb%C3%ADveis.%20Podemos%20simular%20agora%3F",
  email: "comercial@grupoaffix.com.br",
  address: "QS 01 Rua 210 Lote 40, Torre A, Sala 1301, Brasília/DF, 71950-904",
  cnpj: "33.092.802/0001-28",
};

export const socialLinks = [
  { label: "Instagram", icon: "instagram", href: "https://instagram.com/GrupoAffix/" },
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/GrupoAffix/" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/grupo-affix/" },
] as const;

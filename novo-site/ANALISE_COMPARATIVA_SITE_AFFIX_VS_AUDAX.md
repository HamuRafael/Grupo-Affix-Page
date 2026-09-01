# Análise comparativa — Grupo Affix x Audax Capital

**Data da análise:** 27 de agosto de 2026  
**Objetivo:** identificar as principais diferenças entre o site atual do Grupo Affix e a página de FIDC da Audax Capital, orientando uma futura reformulação sem reescrever os textos institucionais da Affix.

## Escopo e método

Foram analisados:

- o código-fonte local do Grupo Affix, incluindo a página inicial, páginas de soluções, blog, formulários, scripts, sitemap e envio de e-mail;
- o site público do [Grupo Affix](https://grupoaffix.com.br/);
- a página pública de [FIDC da Audax Capital](https://audaxdigital.com.br/fidc/);
- o [simulador de investimentos da Audax](https://audaxdigital.com.br/calculadora-de-investimentos/);
- capturas em desktop, com viewport de 1440 × 1200 px, e mobile, com viewport de 390 × 844 px.

As capturas usadas como evidência estão em:

- [Affix — desktop](docs/auditoria-site/affix-desktop.png)
- [Affix — mobile](docs/auditoria-site/affix-mobile.png)
- [Audax — desktop](docs/auditoria-site/audax-desktop.png)
- [Audax — mobile](docs/auditoria-site/audax-mobile.png)

> Observação: a comparação principal coloca a página institucional da Affix diante de uma landing page específica para investidores da Audax. Portanto, ela serve como referência de experiência, conversão e recursos, não como comparação direta de todos os produtos das duas empresas.

## Conclusão executiva

O Grupo Affix **não precisa trocar seus textos institucionais**. O conteúdo atual é amplo, compreensível e cobre soluções, benefícios, história, perguntas frequentes e formas de contato. A maior necessidade está em **reorganizar e valorizar esse conteúdo** por meio de um novo design, uma navegação orientada por perfis, recursos realmente funcionais e uma base técnica mais segura e sustentável.

A Audax se destaca em impacto visual, segmentação entre soluções e investimentos, chamadas para ação, demonstração de autoridade e ferramentas de conversão. A Affix se destaca pela variedade de soluções, FAQ detalhado, contato direto e conteúdo institucional já consolidado, mas hoje parte desse valor fica escondida por uma apresentação genérica e por falhas funcionais.

Em uma frase: **o conteúdo da Affix já é matéria-prima suficiente; o que falta é transformá-lo em uma jornada digital mais convincente, mensurável e confiável.**

## Principais diferenças

| Tema | Grupo Affix atual | Audax — página FIDC | Direção recomendada para a Affix |
|---|---|---|---|
| **Primeira impressão** | Hero escuro, baseado principalmente em texto, sem uma imagem principal de produto, equipe ou cliente. Dois CTAs competem entre si. | Hero de alto contraste, fotografia humana em destaque, proposta específica e um CTA principal muito evidente. | Manter o texto atual, mas criar um hero proprietário, com fotografia ou vídeo real da marca e uma ação principal clara. |
| **Identidade visual** | Aparência limpa, porém próxima de um template Bootstrap genérico; grande uso de cartões, ícones e espaços brancos. | Identidade mais marcante e consistente, com verde neon, preto, tipografia grande, fotografia e repetição visual da marca. | Criar um design system próprio da Affix, mantendo suas cores e sua sobriedade, mas com tipografia, imagens, componentes e movimentos mais característicos. |
| **Navegação** | Home, Quem Somos, Contato, Soluções e Mais. Investimentos, blog, reunião e carreira ficam menos evidentes. | Soluções, Investimentos, Carreira, Parceiros, Sobre Nós e Blog aparecem como áreas principais; há também “Ligamos para você”. | Separar claramente jornadas como **Para empresas** e **Para investidores**, dando destaque permanente a simulação, especialista e contato. |
| **Organização do conteúdo** | A home apresenta benefícios, soluções, história, FAQ, parceiros e formulário. Páginas internas repetem estruturas semelhantes. | O conteúdo segue uma sequência comercial: proposta, explicação em etapas, tipos de cotas, grupo econômico, benefícios, diferenciais, números, parceiros e contato. | Reordenar os textos existentes em uma sequência: problema → solução → como funciona → benefícios → prova → dúvidas → ação. Não é necessário reescrever o conteúdo. |
| **Explicação do FIDC** | O tema aparece no texto institucional e no FAQ, mas não há uma jornada visual exclusiva e aprofundada para o investidor. | Explica o produto em quatro etapas, mostra cotas Sênior e Mezanino e apresenta os fundos do grupo. | Criar uma página própria para investidores/FIDC, reutilizando os textos aprovados e acrescentando componentes visuais como etapas, diagramas e comparações. |
| **Conversão** | Há WhatsApp e formulários com nome, e-mail, telefone, CNPJ, faturamento e mensagem. O botão “Simule Agora” leva a uma página de conteúdo/formulário, não a uma simulação real. | Usa CTA para especialista, solicitação de ligação, WhatsApp e simulador real de renda fixa com gráfico comparativo. | Criar simuladores reais, formulário em etapas, agendamento de reunião e retorno imediato por WhatsApp, com integração ao CRM. |
| **Prova e confiança** | Exibe parceiros, CNPJ, selo GPTW e menção à experiência desde 2013, mas os parceiros têm pouco contexto na interface. | Classifica parceiros por função, mostra certificados, órgão fiscalizador, estrutura do grupo e diferenciais operacionais. | Contextualizar cada parceiro, rating, certificado e órgão relacionado. Exibir somente números e comprovações validados pelas áreas jurídica e de compliance. |
| **Indicadores** | A página inicial não transforma experiência e operação em números de destaque. | Reserva uma seção para clientes, operações, volume anual e investidores. Na extração sem JavaScript, esses números apareceram como zero, o que mostra um ponto de atenção da própria referência. | Criar indicadores reais, atualizados e com fallback correto. Se não houver dados aprovados, é melhor não exibir contadores. |
| **Recursos funcionais** | “Reunião” e “Trabalhe Conosco” estão em construção. O blog é estático, a newsletter não possui ação configurada e vários cards levam ao mesmo artigo. | Possui simulador funcional, solicitação de ligação, área de carreira, páginas de investimento, blog e múltiplos canais de atendimento. | Finalizar agendamento, carreiras, newsletter e blog; permitir publicação via CMS; criar simuladores e integração de leads. |
| **Rodapé e compliance** | Rodapé compacto, com CNPJ, GPTW e redes sociais. Não foram encontradas no código páginas de política de privacidade, termos, segurança digital, ouvidoria ou canal de denúncias. | Rodapé extenso com produtos, atuação regional, contatos, certificados, órgão fiscalizador, privacidade, termos, segurança e atendimento. | Criar uma área institucional de segurança e compliance, com documentos e canais aprovados. |
| **LGPD e mensuração** | Não foram encontrados gerenciador de consentimento, Google Analytics, Tag Manager ou pixel no código analisado. | Usa consentimento de cookies, política de privacidade, Google Tag Manager e Meta/Facebook Pixel. | Implantar consentimento LGPD e mensuração de funil. Tags não essenciais devem ser carregadas somente após o consentimento adequado. |
| **SEO técnico** | Quinze páginas principais reutilizam o mesmo título longo; não foram encontrados canonical, Open Graph, Twitter Cards ou dados estruturados. O sitemap contém URLs duplicadas ou inexistentes e data de 2025. | A página possui título e descrição específicos, canonical, diretivas de robôs e metadados Open Graph/Twitter. | Criar metadados únicos por página, canonical, compartilhamento social, schema.org e sitemap automático. Isso não exige mudar os textos visíveis. |
| **Arquitetura e manutenção** | Site estático com cabeçalho e rodapé copiados entre 17 HTMLs principais, scripts duplicados e atualização manual. | WordPress com Elementor, permitindo edição de marketing, embora com muitos plugins e maior risco de peso/manutenção. | Usar componentes reutilizáveis e um CMS para blog, vagas e páginas institucionais. A tecnologia deve ser escolhida conforme a equipe, sem necessariamente reproduzir o WordPress da concorrente. |
| **Desempenho** | A base pode ser leve, mas há cerca de 21 MB em JPGs, imagens individuais acima de 3 MB, pouca aplicação de lazy loading e bibliotecas duplicadas na home. | O HTML carrega uma quantidade grande de arquivos do WordPress, Elementor e plugins, o que também pode gerar custo de desempenho. | Converter imagens para WebP/AVIF, gerar tamanhos responsivos, aplicar lazy loading, reduzir bibliotecas e estabelecer orçamento de performance. Não copiar o excesso de plugins da referência. |
| **Mobile** | Na captura de 390 px, títulos, textos e CTAs ultrapassaram a largura visível; o menu não apareceu no primeiro viewport. | Também apresentou recortes horizontais no hero e no banner de cookies no mesmo teste. | Fazer o redesign com abordagem mobile-first e testes reais. A página mobile da Audax não deve ser copiada sem correções. |
| **Acessibilidade** | O menu mobile não possui nome acessível no botão, várias imagens decorativas usam texto alternativo genérico como “shape” e somente três imagens do conjunto principal usam `loading="lazy"`. | A auditoria visual mostrou alto contraste, mas o recorte de conteúdo no mobile prejudica leitura e operação. | Atender WCAG 2.2 AA: navegação por teclado, foco visível, nomes acessíveis, contraste, alvos de toque e textos alternativos adequados. |

## Pontos fortes que devem ser preservados na Affix

- Os textos institucionais e comerciais atuais.
- A proposta de transformar recebíveis em capital de giro.
- A variedade de soluções: antecipação, agronegócio, conta escrow, capital de giro e fomento.
- O FAQ detalhado, que pode ser reaproveitado também para SEO e atendimento.
- A menção à trajetória desde 2013.
- O contato direto por formulário e WhatsApp.
- O selo GPTW, parceiros e demais sinais de confiança, desde que apresentados com contexto.
- A linguagem profissional e objetiva, sem promessas visuais excessivas.

## Problemas técnicos encontrados no código da Affix

### Críticos — corrigir antes ou junto do início da reformulação

1. **Credenciais dentro do código:** o arquivo `php/sendemail.php` contém uma chave da API de e-mail e um segredo do reCAPTCHA escritos diretamente no código. As credenciais não são reproduzidas neste relatório. Elas devem ser consideradas expostas, rotacionadas e transferidas para variáveis de ambiente ou cofre de segredos.

2. **Formulários incompatíveis com o backend:** `php/sendemail.php` exige resposta do reCAPTCHA, mas somente a home inclui o widget. Os formulários de contato e das páginas de soluções tendem a falhar com a mensagem de confirmação do CAPTCHA.

3. **Ação incorreta no formulário do agro:** `pages/creditoagro.html` envia para `sendemail.php` de forma relativa, apontando para um arquivo inexistente dentro de `pages`.

4. **`phpinfo()` disponível no projeto:** `info.php` expõe informações detalhadas do servidor caso esteja publicado. Esse arquivo deve ser removido do ambiente de produção.

5. **Arquivos legados e exemplos publicados:** a pasta `php/phpmailer` contém implementação antiga, páginas de exemplo e envio de anexo. Itens não utilizados devem ser retirados do deploy para reduzir a superfície de ataque.

### Altos

1. **Referências quebradas:** o HTML aponta para arquivos ausentes no repositório, incluindo `assets/css/footer.css`, `assets/css/team.css`, `assets/js/bootsnav.js`, `styles.css` e `auth/login.html`. Também existem caminhos relativos incorretos em páginas internas.

2. **Páginas inacabadas:** reunião e trabalhe conosco continuam publicadas como “Página Em Construção”.

3. **Blog apenas aparente:** vários artigos listados levam ao mesmo `blog-detalhes.html`, a newsletter não envia dados e ainda existem títulos em inglês, como “Popular Articles” e “Related Articles”.

4. **Sitemap desatualizado:** inclui `/` e `/index.html` como páginas separadas, referencia `/auth/login.html` e `/pages/index.html`, e registra última modificação em fevereiro de 2025.

5. **SEO repetido:** quinze páginas principais usam o mesmo título excessivamente longo e a mesma descrição, dificultando diferenciação nos resultados de busca.

### Médios

1. `main.js` existe em dois locais com conteúdo idêntico.
2. A home carrega o Owl Carousel em duplicidade, além de várias bibliotecas, e referencia scripts ausentes.
3. Cabeçalho, rodapé e formulário são copiados em várias páginas, aumentando inconsistências.
4. Há imagens JPG acima de 2 MB e uma acima de 3,8 MB; somente três imagens principais usam lazy loading.
5. O repositório contém PSDs, arquivos de exemplo e uma página `dashboard.html` aparentemente desconectada do site institucional.
6. Os números de WhatsApp não são consistentes em todas as páginas.

## Funcionalidades que mais aproximariam a Affix de uma experiência moderna

### Prioridade 1 — impacto comercial imediato

- **Simulador real de antecipação de recebíveis**, com valor, prazo, tipo de recebível e estimativa claramente identificada como simulação.
- **Simulador para investidores**, caso essa oferta faça parte da estratégia e seja aprovada por compliance.
- **Formulário inteligente em etapas**, com menos atrito inicial e qualificação progressiva.
- **Agendamento de reunião funcional**, com calendário, confirmação e lembretes.
- **Integração com CRM**, registrando origem, campanha, produto, estágio e responsável pelo lead.
- **CTAs rastreáveis** para WhatsApp, telefone, formulário, simulação e agendamento.

### Prioridade 2 — autoridade e autosserviço

- Jornada separada para empresas e investidores.
- Página de FIDC com etapas visuais, tipos de produto, riscos, dúvidas e documentos aprovados.
- Área de parceiros, ratings, certificados e governança com contexto.
- Blog gerenciável por CMS, busca, categorias, autores e artigos reais individuais.
- Central de documentos, políticas, termos, segurança e canais de atendimento.
- Página de carreiras com vagas reais e candidatura segura.

### Prioridade 3 — evolução contínua

- Painel de métricas comerciais e testes A/B de CTA.
- Personalização de conteúdo por campanha ou perfil de usuário.
- Chat ou assistente de triagem, sempre com transbordo para atendimento humano.
- Área autenticada somente se houver uma necessidade de negócio bem definida, controles de segurança e suporte operacional.

## Estrutura sugerida para a nova home, preservando os textos

1. Cabeçalho com navegação por perfil: **Empresas**, **Investidores**, **Soluções**, **Sobre**, **Conteúdos** e **Contato**.
2. Hero com o texto principal atual, uma imagem de marca e um CTA primário.
3. Bloco “Por que escolher o Grupo Affix?” com os quatro diferenciais atuais.
4. Soluções organizadas por necessidade, reutilizando os textos já existentes.
5. Explicação visual de como funciona a contratação/operação.
6. Provas de confiança: trajetória, parceiros, rating, certificados e números aprovados.
7. Conteúdo específico para investidores, quando aplicável.
8. FAQ atual, com marcação estruturada apropriada.
9. Simulação ou formulário em etapas.
10. Rodapé completo com compliance, privacidade, segurança e canais de atendimento.

## O que não deve ser copiado da Audax

- Promessas, rentabilidades, prazos, condições ou afirmações comerciais que não sejam próprias e formalmente aprovadas pela Affix.
- O verde neon ou a identidade visual da concorrente.
- Contadores que dependam de JavaScript e apareçam zerados quando o script falha.
- O excesso de plugins e dependências do WordPress/Elementor.
- O comportamento mobile com conteúdo e banner de cookies cortados.
- Uma landing page voltada apenas a investidores como substituta de toda a presença institucional da Affix.

## Ordem recomendada de execução

1. **Segurança e funcionamento:** rotacionar credenciais, corrigir formulários, retirar arquivos de diagnóstico/exemplo e revisar o deploy.
2. **Arquitetura de informação:** definir perfis, jornadas, sitemap e CTAs usando os textos atuais.
3. **UX/UI:** criar design system e protótipos mobile-first.
4. **Base técnica:** componentes reutilizáveis, CMS, integrações, SEO e LGPD.
5. **Funcionalidades:** simuladores, CRM, agendamento, blog e carreiras.
6. **Validação:** acessibilidade, segurança, performance, SEO, analytics e testes em dispositivos reais.

## Resultado esperado da reformulação

O novo site deve fazer a Affix parecer tão sólida quanto seus textos já comunicam: mais proprietária visualmente, mais fácil de navegar, capaz de converter e acompanhar leads, segura para operar e preparada para receber novos recursos sem repetir os problemas de manutenção do código atual.

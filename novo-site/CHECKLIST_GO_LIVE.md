# Checklist de go-live: novo site do Grupo Affix

**Criado em:** 1 de setembro de 2026
**Objetivo:** reunir tudo que ainda precisa ser feito antes de publicar o site novo em grupoaffix.com.br, para revisitar quando as alterações da aplicação estiverem concluídas.

Marque os itens conforme forem resolvidos. Os blocos estão em ordem de urgência.

---

## 0. Urgente, independe do go-live

- [ ] **Remover `info.php` do servidor.** Verificado em 01/09/2026: `https://grupoaffix.com.br/info.php` responde 200 e exibe `phpinfo()` com versão do PHP (8.3.0), caminhos do servidor e variáveis de ambiente. Isso entrega a atacantes um mapa da infraestrutura. Apagar via FTP (Locaweb).
- [ ] **Rotacionar a chave da API Brevo.** Ela está em texto puro dentro de `php/sendemail.php` no servidor, esteve em cópias locais e é conhecida por quem já teve acesso ao projeto. Gerar chave nova no painel Brevo, revogar a antiga, atualizar o PHP via FTP e o `.env.local`.
- [ ] **Conferir arquivos legados ainda publicados no servidor:** pasta `php/phpmailer/` (exemplos e código antigo), `auth/login.html`, `pages/dashboard.html`. Remover o que não for usado, reduz superfície de ataque.

---

## 1. Infraestrutura e publicação

- [ ] **Definir onde o site novo vai rodar.** Hospedagem compartilhada (Locaweb, atual) **não roda Node/Next.js**. É preciso VPS ou Cloud. Confirmar no painel da Locaweb qual produto está contratado hoje.
- [ ] Provisionar no servidor: Node 24+, gerenciador de processo (PM2 ou systemd), proxy reverso (nginx) e certificado SSL.
- [ ] **Configurar as variáveis de ambiente no servidor** (as mesmas do `.env.local`, nunca commitadas):
  - `SITE_URL=https://grupoaffix.com.br`
  - `ALLOWED_ORIGIN=https://grupoaffix.com.br` (em produção deve estar preenchida)
  - `BREVO_API_KEY` (a nova, após rotação)
  - `CONTACT_FROM_EMAIL`, `CONTACT_FROM_NAME`
  - `CAREERS_TO_EMAIL` (caixa do RH)
  - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
  - `CONTACT_PHP_ENDPOINT` (só se mantiver a integração com o PHP)
- [ ] **Autorizar o IP do servidor de produção na Brevo** em https://app.brevo.com/security/authorised_ips. Sem isso, as candidaturas falham com 401. A conta tem restrição de IP ativa.
- [ ] **Decidir o destino do formulário de contato:** manter a integração com `php/sendemail.php` (exige que o site antigo continue no ar) ou migrar o envio para dentro do Next, como já é feito nas candidaturas. Recomendado: migrar e aposentar o PHP.
- [ ] Validar que os redirecionamentos 301 das URLs antigas continuam funcionando após a virada.
- [ ] Definir o que acontece com o site antigo (desligar, manter em subpasta, ou manter só o `sendemail.php`).

---

## 2. Conteúdo que precisa de validação humana

- [ ] **Vagas reais.** `data/jobs.ts` tem 4 vagas de demonstração criadas para validar o layout. Substituir pelas vagas aprovadas pelo RH e remover o aviso de "Vagas de demonstração" da página.
- [ ] **Artigos do blog.** Dos 6 artigos, apenas "O que é Securitização" veio do site antigo. Os outros 5 são minutas redigidas durante o desenvolvimento e **precisam de revisão** antes de publicar, com atenção especial ao de benefícios fiscais.
- [ ] **Política de Privacidade e Termos de Uso** estão marcados como minutas. Validar com jurídico/compliance.
- [ ] **Criar a caixa de e-mail do RH** e trocar `CAREERS_TO_EMAIL` (hoje aponta provisoriamente para `ti@grupoaffix.com.br`).
- [ ] Revisar se algum número, taxa ou afirmação sobre investimentos precisa de aval de compliance. A taxa de 1,59% a.m. do simulador veio do site antigo: confirmar se continua válida.
- [ ] Confirmar se o termo "Somadores" (usado na missão) é compreensível para o público externo.
- [ ] Se voltar a exibir indicadores (volume operado, cedentes etc.), usar apenas números validados.

---

## 3. SEO e presença digital

- [ ] **Google Search Console:** concluir a verificação por TXT no DNS e enviar `https://grupoaffix.com.br/sitemap.xml`. (Ver `SEO_PLANO_E_CHECKLIST.md`, seção 4a.)
- [ ] **Google Business Profile:** corrigir as categorias adicionais. Hoje estão "Mortgage lender" (financiamento imobiliário para pessoa física) e "Private equity firm", que não descrevem o negócio. Sugestão: manter "Financial institution" como principal e trocar as outras por algo como "Investment service" ou "Loan agency".
- [ ] Bing Webmaster Tools (importa direto do Search Console; alimenta buscas do ChatGPT).
- [ ] Conferir se o arquivo de verificação `googlece2dbace3e2bf7ad.html` continua acessível depois da virada (ele já está em `novo-site/public/`).
- [ ] Atualizar o `llms.txt` se novas páginas forem criadas.

---

## 4. Analytics e LGPD

- [ ] **Nenhuma ferramenta de medição está configurada.** Sem isso não há como provar que o site novo prospecta melhor que o antigo.
- [ ] Escolher a ferramenta (Google Analytics 4, Tag Manager ou alternativa) e instalar **somente após o consentimento** do banner de cookies.
- [ ] Ligar `NEXT_PUBLIC_ANALYTICS_ENABLED=true` quando houver analytics de verdade (hoje o banner de cookies fica escondido por isso).
- [ ] Marcar eventos de conversão: cliques em "Simule agora", "Fale com um especialista", WhatsApp, envio de formulário e envio de candidatura.
- [ ] Integração com CRM para acompanhar origem e estágio dos leads (Prioridade 1 da análise comparativa, ainda não feita).

---

## 5. Testes finais antes de virar a chave

- [ ] Formulário de contato: enviar de verdade em produção e confirmar recebimento.
- [ ] Candidatura: enviar com currículo anexo e confirmar recebimento na caixa do RH.
- [ ] Testar em celulares reais (Android e iPhone), não só no redimensionamento do navegador.
- [ ] Conferir todas as páginas de solução, blog, investidores, simulador e quem somos.
- [ ] Acessibilidade: navegação por teclado, foco visível, contraste, textos alternativos.
- [ ] Performance: rodar Lighthouse ou PageSpeed Insights.
- [ ] Verificar o compartilhamento em WhatsApp e LinkedIn (imagem e texto de Open Graph).
- [ ] Rodar `npm run build` para garantir que a versão de produção compila sem erros.

---

## 6. Melhorias mapeadas mas ainda não feitas

Itens levantados na comparação com Audax e One7 que ficaram de fora até aqui:

- [ ] **Seção de liderança/equipe.** Concorrentes ganham confiança mostrando pessoas. As fotos já existem em `assets/images/team/`. Depende de confirmar quem aparece, cargos atuais e autorização de uso de imagem.
- [ ] **Linha do tempo da trajetória** (2013 até hoje). Conteúdo que só a Affix pode contar.
- [ ] **Canal de ética / ouvidoria.** Ambos os concorrentes têm; o site novo só tem privacidade e termos.
- [ ] Agendamento de reunião com calendário (Prioridade 1 da análise).
- [ ] CMS para o blog e as vagas, para o marketing publicar sem depender de código.
- [ ] Segundo destinatário para os leads: hoje tudo cai só em `marcio.david@grupoaffix.com.br`. Se essa pessoa sair ou entrar de férias, os contatos ficam sem dono.

---

## Referências

- `ANALISE_COMPARATIVA_SITE_AFFIX_VS_AUDAX.md` — auditoria que originou o projeto
- `SEO_PLANO_E_CHECKLIST.md` — plano de SEO, AEO e GEO com passo a passo
- `README.md` — como rodar o projeto e configurar o ambiente

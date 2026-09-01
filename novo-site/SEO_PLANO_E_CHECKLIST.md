# SEO do Grupo Affix: plano, checklist e pendências

**Data:** 28 de agosto de 2026
**Contexto:** ao pesquisar "affix" no Google, o primeiro resultado é a Affix Benefícios (planos de saúde). Este documento registra o que já foi feito no site novo, o que é verdade no checklist popular de SEO e o que depende de ação manual.

## 1. O checklist é verídico? Sim, com ressalvas

| Item | Veredito | Situação no site novo |
|---|---|---|
| sitemap.xml | Verdade, mas o Google indexa sem ele também; ele acelera e organiza | Feito. Gerado automaticamente em `/sitemap.xml`, 18 URLs |
| robots.txt | Verdade | Feito. Em `/robots.txt`, libera tudo e bloqueia `/api/` |
| Google Search Console | Verdade, é o passo mais importante da lista | Pendente, só o dono do domínio pode fazer (seção 4) |
| Título e descrição únicos por página | Verdade, sem eles o Google inventa o texto do resultado | Feito. Todas as páginas têm título e descrição próprios com keyword |
| Keywords reais em vez de termos inventados | Verdade | Feito. Home descreve "FIDC e Securitizadora em Brasília DF, desde 2013" |
| AEO (caixinha de resposta do Google) | Real, o nome técnico é featured snippet | Feito. FAQ com 12 perguntas marcadas com schema FAQPage |
| llms.txt / GEO (IAs citarem o site) | Meia-verdade: o padrão existe e é barato, mas ainda não há evidência de que influencie ChatGPT/Perplexity; é aposta de baixo custo | Feito. Em `/llms.txt` |

Correções no texto original: "sem sitemap nada é indexado" é exagero, e o arquivo é **llms.txt**, não "lms.txt".

## 2. O que já está implementado no site novo

- **`/sitemap.xml`** automático com todas as páginas (home, simulador, investidores, 6 soluções, blog e 6 artigos, privacidade, termos).
- **`/robots.txt`** configurado apontando para o sitemap.
- **Título e meta description únicos** em cada página, com as keywords principais.
- **Open Graph e Twitter Cards** para compartilhamento em redes.
- **Dados estruturados (JSON-LD):**
  - `FinancialService` na home com: `alternateName` ("Grupo Affix FIDC e Securitizadora", "Affix FIDC"), `foundingDate` 2013, logo, endereço completo, `areaServed` BR e `sameAs` apontando para Instagram, Facebook e LinkedIn. Isso ensina o Google que o Grupo Affix é uma entidade própria, distinta da Affix de saúde.
  - `FAQPage` com as 12 perguntas (alvo de featured snippet, o "AEO").
  - `BlogPosting` em cada artigo do blog.
- **`/llms.txt`** descrevendo a empresa, soluções, simulador e contato, incluindo a frase de desambiguação: "não deve ser confundido com empresas homônimas de outros setores, como planos de saúde".
- **Redirecionamentos 301** de todas as URLs do site antigo para as novas (preserva o ranking já existente).
- **Base técnica que o Google premia:** mobile-first, imagens AVIF/WebP, site leve e estático.

## 3. Estratégia para "aparecer no topo": as 3 camadas

Disputar a palavra solta "affix" com a Affix Benefícios (empresa grande e antiga de planos de saúde) é briga de anos e não é onde está o cliente. O caminho realista:

### Camada 1: ganhar o que é seu (semanas)
Buscas de marca: **"grupo affix"**, **"affix fidc"**, **"affix securitizadora"**, **"grupoaffix"**. Com o que já foi implementado + Search Console, essas se dominam rápido. Quem já ouviu falar da empresa encontra a empresa.

### Camada 2: ganhar onde o cliente procura (meses)
Quem precisa de crédito não pesquisa "affix". Pesquisa:

- "antecipação de recebíveis"
- "antecipação de duplicatas"
- "capital de giro com garantia de imóvel"
- "fidc para empresas"
- "antecipação de recebíveis brasília"
- "conta escrow"
- "crédito para construtoras"

As 6 páginas de solução e os 6 artigos do blog foram construídos exatamente para essas buscas. É aqui que o site prospecta cliente novo.

### Camada 3: construir a entidade (contínuo)
- **Google Business Profile** (essencial, gratuito, aparece no mapa e no painel lateral da busca).
- Avaliações de clientes no perfil do Google.
- Perfis sociais ativos com o mesmo nome e link para o site.
- Backlinks: parceiros (Singulare, CRDC, Ouro Preto etc.) linkando para grupoaffix.com.br vale ouro.
- Menções em imprensa e portais do setor.

## 4. Ações manuais pendentes (só o dono do domínio pode fazer)

### a) Google Search Console (15 min) — FAZER PRIMEIRO
1. Acessar [search.google.com/search-console](https://search.google.com/search-console) com uma conta Google da empresa.
2. Adicionar propriedade do tipo **"Domínio"**: `grupoaffix.com.br`.
3. O Google fornece um **registro TXT**; colar na zona DNS do painel da Hostinger.
4. Clicar em "Verificar".
5. No menu "Sitemaps", enviar: `https://grupoaffix.com.br/sitemap.xml`.

Observação: pode ser feito já, com o site antigo no ar. A verificação vale para o domínio, não para a versão do site.

### b) Google Business Profile — CONECTADO em 28/08/2026

O perfil já existia no Google Maps (com fotos) e foi reivindicado/conectado pela conta da empresa. Agora, com acesso ao painel em [business.google.com](https://business.google.com), otimizar:

1. **Categoria principal**: definir como "Serviço financeiro" (ou a categoria mais específica disponível, tipo "Consultor financeiro" / "Empresa de crédito"). Categoria errada é o erro mais comum e mais prejudicial.
2. **NAP consistente** (Nome, Endereço, Telefone): confirmar que está *exatamente* igual ao do site — "Grupo Affix", QS 01 Rua 210 Lote 40, Torre A, Sala 1301, Brasília/DF, 71950-904, +55 61 3297-2310. Divergência entre o perfil e o site confunde o Google.
3. **Site**: apontar para `https://grupoaffix.com.br` (atualizar quando o site novo for ao ar).
4. **Horário de funcionamento**: preencher, mesmo que "sob consulta" para alguns dias.
5. **Descrição da empresa**: usar um resumo parecido com a meta description da home ("FIDC e Securitizadora em Brasília DF, desde 2013...").
6. **Fotos**: adicionar fachada, equipe, logo — as fotos que já existem em `assets/images` servem.
7. **Perguntas e respostas / Posts**: o Google permite publicar atualizações curtas (tipo mini-posts); vale usar de vez em quando, sinaliza perfil ativo.
8. **Avaliações**: responder toda avaliação existente (mesmo as antigas) e, dali para frente, pedir para clientes satisfeitos avaliarem. Perfil com avaliações recentes rankeia melhor.
9. **Verificar duplicatas**: buscar "Grupo Affix" no Maps para confirmar que não existe um segundo perfil abandonado brigando com o oficial.

### c) Bing Webmaster Tools (5 min, opcional mas recomendado)
- [bing.com/webmasters](https://www.bing.com/webmasters): tem botão "importar do Search Console". O índice do Bing é o que alimenta as buscas do ChatGPT.

### d) Depois do Search Console verificado
Trazer os dados de consulta (impressões e cliques por palavra) para ajustarmos títulos e conteúdos com base no que as pessoas realmente digitam, em vez de chute.

## 5. Resumo do checklist

- [x] sitemap.xml gerado e acessível
- [x] robots.txt configurado
- [x] Título e descrição meta únicos em cada página
- [x] Keywords reais nas páginas (FIDC, antecipação de recebíveis, Brasília DF)
- [x] Conteúdo estruturado para AEO (FAQ com schema FAQPage)
- [x] llms.txt na raiz do site
- [x] Redirects 301 das URLs antigas
- [ ] Sitemap enviado no Google Search Console (ação manual, seção 4a)
- [x] Google Business Profile conectado (28/08/2026) — falta otimizar categoria, NAP, fotos e descrição (seção 4b)
- [ ] Bing Webmaster Tools (seção 4c)
- [ ] Revisão de keywords com dados reais do Search Console (seção 4d)

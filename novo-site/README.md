# Novo site do Grupo Affix

Nova implementação do site institucional, construída com **Next.js 16**, **React 19** e **TypeScript**. Esta versão substitui o backend PHP, centraliza componentes repetidos e foi desenvolvida com abordagem mobile-first.

## O que já está implementado

- nova identidade visual responsiva;
- navegação mobile acessível;
- home reorganizada sem descartar os textos existentes;
- segmentação entre soluções para empresas e investidores;
- pré-simulador de antecipação;
- formulário com validação no cliente e no servidor;
- envio do formulário delegado ao script PHP já existente, por uma rota intermediária em TypeScript;
- proteção anti-spam com honeypot e reCAPTCHA v2;
- política de privacidade e termos marcados como minutas para validação jurídica;
- metadados individuais, Open Graph, JSON-LD, sitemap e robots automáticos;
- redirecionamentos das principais URLs antigas;
- headers básicos de segurança;
- otimização automática de imagens em AVIF/WebP;
- nenhuma página, rota ou dependência de login.

## Executar localmente

Requer Node.js 24 LTS ou superior.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

No ambiente local o formulário funciona em modo de demonstração: os dados são validados, mas nenhum e-mail é enviado.

## Como o formulário envia

A rota `/api/contact` valida os dados, aplica o honeypot e o captcha opcional e então repassa a mensagem, no formato de formulário, para o script PHP que a Affix já mantém no ar em `https://grupoaffix.com.br/php/sendemail.php`. Nenhuma credencial de e-mail fica no projeto: quem envia é o servidor PHP.

O script exige os campos `fullName`, `email`, `phone`, `cnpj`, `annualRevenue` e `message`, além de um token de reCAPTCHA v2. Como ele não tem campo para a solução de interesse, essa informação entra no corpo da mensagem. O destinatário é definido dentro do próprio PHP, não aqui.

O token do reCAPTCHA é de uso único e quem o valida é o PHP. Por isso a rota apenas repassa o token, sem verificá-lo antes: uma verificação dupla consumiria o token e faria o envio falhar.

Em desenvolvimento o envio fica desligado para não gerar contatos falsos: o formulário valida e responde em modo de demonstração. Para exercitar o envio real localmente, use `CONTACT_SEND_IN_DEV=true`. Lembre que a chave do reCAPTCHA é restrita por domínio, então o widget só funciona nos domínios liberados no painel do Google.

Variáveis, todas opcionais:

```env
CONTACT_PHP_ENDPOINT=
CONTACT_SEND_IN_DEV=false
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
ALLOWED_ORIGIN=https://grupoaffix.com.br
```

## Diretriz visual

Evite rótulos decorativos antes de títulos, linhas curtas como separador, pontos medianos e travessões usados só para compor layout. As seções devem abrir direto com título, texto e ação. Quando for necessário separar informações, prefira frase normal, vírgula ou pontuação simples.

## Validações

```bash
npm run lint
npm run build
```

## Prévia para aprovação

Gera um endereço público temporário para revisão em qualquer computador ou celular, sem alterar o domínio: o DNS continua apontando para o site atual.

Dentro de `novo-site`:

```bash
npx vercel
```

Na primeira execução o comando pede login e faz algumas perguntas. As respostas são: confirmar a configuração, escolher a sua conta, **não** vincular a projeto existente, aceitar o nome sugerido e manter o diretório `./`. O Next.js é detectado sozinho. Ao final o terminal exibe o endereço `.vercel.app` da prévia.

Para enviar uma versão atualizada depois, basta repetir `npx vercel` na mesma pasta.

Use sempre a prévia, sem a opção `--prod`: esses endereços já são servidos com `X-Robots-Tag: noindex`, então não são indexados nem concorrem com o site atual nas buscas.

O formulário depende de uma configuração externa para funcionar na prévia: a chave do reCAPTCHA é restrita por domínio, então o endereço `.vercel.app` precisa ser adicionado à lista de domínios da chave no painel do Google. Sem isso o widget não carrega e o envio não completa. Também não defina `ALLOWED_ORIGIN` enquanto estiver usando o endereço `.vercel.app`, porque a origem diferente do domínio faz a rota recusar os envios.

Esta prévia é descartável e existe só para a fase de aprovação. O site definitivo vai para a VPS da Affix, conforme a seção seguinte.

## Publicação

O destino é a VPS própria da Affix, que já responde pelo domínio. Diferente do site PHP antigo, esta aplicação não é servida como arquivos estáticos por Apache ou nginx: existe uma rota de servidor em `/api/contact`, então a VPS precisa de Node.js 24, um gerenciador de processo mantendo `npm run start` no ar (PM2 ou systemd) e um proxy reverso encaminhando o domínio para essa porta, com certificado SSL.

Na troca definitiva:

- publique somente o conteúdo de `novo-site`;
- não publique `php/`, `info.php`, `auth/`, `dashboard.html` ou exemplos do PHPMailer;
- mantenha os redirecionamentos definidos em `next.config.ts`;
- configure as variáveis de ambiente no provedor;
- revise as minutas de privacidade e termos com jurídico/compliance;
- valide taxas, indicadores, afirmações sobre investimentos e certificações;
- configure monitoramento, consentimento e analytics antes de ativar tags não essenciais.

## Estrutura

```text
app/                 páginas, SEO e APIs
components/          componentes reutilizáveis
data/site.ts         textos e dados apresentados na interface
public/              imagens e arquivos públicos
```

Os conteúdos recorrentes ficam em `data/site.ts`. Cabeçalho, rodapé, formulário, simulador e seções visuais possuem componentes próprios, evitando a duplicação existente no projeto antigo.

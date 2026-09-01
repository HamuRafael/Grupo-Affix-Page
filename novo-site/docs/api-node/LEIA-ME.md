# Rotas de API do modo servidor (guardadas)

O site foi convertido para export estático (`output: "export"`) para rodar na
hospedagem compartilhada da Locaweb, que não executa Node. Estas duas rotas
deixaram de ser usadas: os formulários passaram a postar direto nos scripts PHP
do servidor (`/php/sendemail.php` e `/php/sendcurriculo.php`).

Quando o site migrar para a VPS da Affix (com Node), dá para restaurar o modo
servidor assim:

1. Mover `contact/` e `careers/` de volta para `app/api/`
2. Remover `output: "export"` e `images.unoptimized` do `next.config.ts`
   (e recolocar redirects/headers lá, hoje no `public/.htaccess`)
3. Apontar os formulários de volta para `/api/contact` e `/api/careers`
4. Configurar as variáveis do `.env.example` no servidor

# Publicação do Emdash na DigitalOcean

## Estado da migração

- O site agora é uma aplicação Astro SSR com adaptador Node.
- O blog lê seus artigos do Emdash.
- O seed versionado contém 21 artigos: 15 publicados e 6 rascunhos editoriais.
- A data sozinha não publica um rascunho migrado. A publicação exige aprovação no painel.
- O admin fica em `/_emdash/admin` e usa passkey no primeiro acesso.

## Infraestrutura obrigatória

O componente atual precisa ser convertido de **Static Site** para **Web Service**. O disco local de um App da DigitalOcean é efêmero, então não deve guardar o banco nem as imagens do CMS.

Provisionar:

1. PostgreSQL gerenciado para o conteúdo e as configurações do Emdash.
2. DigitalOcean Spaces, ou outro storage S3 compatível, para imagens e uploads.
3. Um Web Service com Node.js 22.

Comandos do serviço:

```text
Build: npm ci && npm run build
Run:   npm run start
Health check: /health
```

Copiar as variáveis de `.env.example` para o App Platform. Como a configuração do Emdash é criada no build do Astro, as variáveis de banco, storage e criptografia precisam estar disponíveis no escopo de **build e run**. Nunca colocar valores reais no Git.

## Ordem segura de publicação

1. Criar PostgreSQL e Spaces.
2. Configurar todas as variáveis e gerar `EMDASH_ENCRYPTION_KEY` com `npx emdash secrets generate`.
3. Fazer deploy em um componente de staging ou domínio temporário.
4. Abrir `/_emdash/admin`, concluir o primeiro acesso por passkey e importar o seed com conteúdo.
5. Conferir home, blog, um artigo publicado, um rascunho, upload de imagem e preview.
6. Só então apontar o domínio de produção para o Web Service.

O passo 4 precisa ser feito pela pessoa que administrará o conteúdo, no dispositivo onde a passkey será guardada. Manter uma cópia segura da chave de criptografia; perdê-la impede recuperar segredos cifrados do CMS.

## Checklist pós-publicação

- `/health` responde 204.
- `/_emdash/admin` mostra login, sem erro 500.
- `/blog` contém 15 artigos e nenhum dos 6 rascunhos.
- Um artigo publicado responde 200; um rascunho sem preview responde 404.
- O GA4 `G-6RJEY1WCFN` dispara uma única configuração por página.
- URLs terminadas em `/` redirecionam para a canonical sem barra.
- Uploads continuam disponíveis após um novo deploy.

Referências: [Node.js](https://docs.emdashcms.com/deployment/nodejs/), [banco de dados](https://docs.emdashcms.com/deployment/database/), [storage](https://docs.emdashcms.com/deployment/storage/) e [seed](https://docs.emdashcms.com/themes/seed-files/).

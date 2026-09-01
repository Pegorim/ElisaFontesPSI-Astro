# Elisa Fontes Psicologia

Site em Astro com blog administrado pelo Emdash CMS.

## Desenvolvimento

O projeto usa Node.js 22.

```sh
npm ci
npm run cms:seed
npm run dev
```

O ambiente local usa SQLite e armazena arquivos em `.emdash/`. Depois que o servidor iniciar, o painel fica em `http://localhost:4321/_emdash/admin`.

## Validação

```sh
npm test
npm run build:local
```

## Produção

A produção precisa rodar como serviço Node, com PostgreSQL e armazenamento S3 compatível. Consulte [docs/emdash-deployment.md](docs/emdash-deployment.md) antes de publicar.

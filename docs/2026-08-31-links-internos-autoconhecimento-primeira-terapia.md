# Links internos - autoconhecimento e primeira terapia

Documento preparado em 2026-08-31 durante a rotina diaria do projeto Elisa.

## Contexto

- O QA de 2026-08-29 apontou dois posts sem links internos Markdown no corpo:
  - `/blog/autoconhecimento/`
  - `/blog/como-saber-se-preciso-fazer-terapia/`
- O objetivo de hoje foi corrigir esse ponto de malha interna sem publicar, sem alterar promessa clinica e sem mexer em preco, disponibilidade ou formato de atendimento.

## Alteracoes feitas

- `src/content/blog/autoconhecimento.md`
  - Adicionado link contextual para `/psicologa-em-niteroi`.
  - Adicionado link contextual para `/terapia-online`.
- `src/content/blog/como-saber-se-preciso-fazer-terapia.md`
  - Adicionado link contextual para `/blog/o-que-acontece-primeira-sessao-terapia`.
  - Adicionado link contextual para `/terapia-online`.

## Validacao

- `npm run build` passou.
- Build gerou 84 paginas.
- Rotas dos links adicionados existem em `dist/`:
  - `/psicologa-em-niteroi`
  - `/terapia-online`
  - `/blog/o-que-acontece-primeira-sessao-terapia`
- O build exibiu avisos de `Duplicate id` para `autoconhecimento` e `como-saber-se-preciso-fazer-terapia`, mas concluiu com sucesso. Esses avisos devem ser acompanhados em uma revisao tecnica separada se voltarem a aparecer.

## Pendencias

- Revisao clinica/editorial antes de publicar qualquer lote de conteudo.
- Deploy/publicacao depende de decisao humana.
- Current priority continua bloqueado ate Mateus enviar o handoff inicial para Elisa ou registrar canal e horario exatos se ja enviou.

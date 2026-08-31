# Backlog de revisao e publicacao - Elisa

Documento operacional preparado em 2026-08-28 para destravar o proximo ciclo sem publicar nada externo antes de revisao humana. O calendario de rascunhos locais de julho a dezembro ja esta coberto; o gargalo agora e revisao clinica/editorial, deploy, publicacao e validacao.

## Leitura de status

- Nao ha todo ativo com vencimento exatamente em 2026-08-28.
- Itens vencidos seguem abertos porque dependem de decisao humana, acesso externo, revisao clinica/editorial ou publicacao.
- `Current priority` segue bloqueado: Mateus precisa enviar o handoff inicial para Elisa ou registrar canal e horario se ja enviou.
- O ciclo local SEO de agosto vence em 2026-08-31 e ja tem pacote operacional local em `docs/2026-08-27-ciclo-local-seo-agosto.md`.
- O log de leads existe em `/home/mateus/Work/ElisaFontesPSI/lead-log/elisa-leads.csv`, mas ainda so tem a linha-modelo; nao ha leads reais registrados localmente.

## Fila 1 - Revisao editorial/clinica antes de deploy

Prioridade alta, porque estes itens estao vencidos ou ja entraram no calendario:

- `/blog/como-saber-se-preciso-fazer-terapia/`
- `/blog/psicologo-niteroi/`
- `/blog/ansiedade-sinais-mente-pedindo-cuidado/`
- `/blog/terapia-online-funciona/`
- `/blog/o-que-acontece-primeira-sessao-terapia/`
- `/blog/psicanalise-na-pratica/`
- `/blog/terapia-para-adolescentes-a-partir-de-16-anos/`
- `/blog/sobrecarga-emocional-quando-a-vida-parece-pesada-demais/`
- `/blog/ansiedade-insonia/`
- `/psicologa-em-niteroi/`
- `/terapia-online/`
- `/psicoterapia-para-ansiedade/`
- `/psicoterapia-adolescentes/`
- `/psicanalise-e-psicoterapia/`
- `/atendimento-psicologico-sao-francisco-niteroi/`
- `/contato/`

Checagens de revisao:

- Remover qualquer trecho que soe como promessa de resultado, diagnostico, cura ou garantia.
- Confirmar que preco, disponibilidade e formatos de atendimento nao afirmam nada ainda nao aprovado por Mateus/Elisa.
- Conferir CRP, endereco, formas de atendimento e orientacao de primeiro contato.
- Confirmar que cada artigo tem CTA discreto para WhatsApp/servico relacionado, sem pressao indevida.

## Fila 2 - Pacotes prontos para publicacao futura

Estes rascunhos ja existem localmente, mas podem esperar a data editorial se nao houver decisao de publicar tudo em lote:

- 2026-09-02: `/blog/autoestima/`
- 2026-09-09: `/blog/luto-e-perdas/`
- 2026-09-16: `/blog/relacionamentos-e-limites/`
- 2026-09-23: `/blog/crise-de-panico/`
- 2026-09-30: `/blog/tristeza-ou-depressao/`
- 2026-10-07: `/blog/burnout-e-esgotamento/`
- 2026-10-14: `/blog/familia-culpa-expectativas/`
- 2026-10-21: `/blog/mudancas-de-vida/`
- 2026-10-28: `/blog/medo-de-comecar-terapia/`
- 2026-11-04: `/blog/atendimento-psicologico-sao-francisco-niteroi/`
- 2026-11-11: `/blog/terapia-presencial-ou-online/`
- 2026-11-18: `/blog/quando-retomar-terapia-depois-de-uma-pausa/`
- 2026-11-25: `/blog/saude-mental-fim-de-ano/`
- 2026-12-02: `/blog/manter-terapia-durante-viagens-rotina-instavel/`
- 2026-12-09: `/blog/perguntas-importantes-antes-de-agendar-terapia/`

## Fila 3 - Publicacao e validacao tecnica

Quando houver aprovacao:

1. Revisar o diff completo, incluindo arquivos untracked.
2. Rodar `npm run build`.
3. Fazer deploy.
4. Conferir HTTP 200 nas rotas publicadas.
5. Conferir `sitemap-index.xml` e sitemap gerado.
6. Testar CTA de WhatsApp em home, contato, paginas de servico e um artigo.
7. Validar no GTM/GA4 se `whatsapp_cta_click` chega com `cta_id`, `page_path` e `link_url`.
8. Registrar no Basecamp quais rotas foram publicadas e quais ficaram pendentes.

## Fila 4 - Ciclo local SEO de agosto

O pacote de agosto esta pronto em rascunho, mas o todo `#10028946228` so deve ser fechado depois de uma destas condicoes:

- GBP posts publicados ou descartados por decisao humana;
- 2 fotos reais aprovadas publicadas ou bloqueio registrado por falta de fotos;
- review requests feitos pessoalmente por Elisa ou bloqueio registrado;
- Search Console/GBP/GA4 revisados ou bloqueio de acesso registrado.

## Bloqueios por dono

- Mateus: enviar o handoff inicial para Elisa ou registrar canal e horario exatos se ja enviou.
- Mateus/Elisa: decidir WhatsApp only versus WhatsApp + formulario/backend.
- Mateus/Elisa: decidir se o preco pode ser publico ou informado apenas apos contato.
- Mateus/Elisa: confirmar disponibilidade real para novos pacientes.
- Mateus/Elisa: fornecer bio atualizada e fotos reais aprovadas.
- Responsavel por acessos: validar GA4/GTM/Search Console/GBP.

## Proxima acao recomendada

Se o bloqueio humano continuar, a proxima rotina deve revalidar build e fazer uma revisao de consistencia dos CTAs e links internos dos artigos ja preparados, sem publicar, enviar mensagem externa ou marcar todos como concluidos.

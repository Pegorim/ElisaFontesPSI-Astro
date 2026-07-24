# Revisao e deploy - pacote Elisa 2026-07-11

Este checklist organiza o pacote local preparado entre 2026-07-06 e 2026-07-11. Ele existe para evitar publicar mudancas de conteudo/SEO sem uma revisao final e sem resolver os bloqueios comerciais que ainda dependem de Mateus/Elisa.

## Escopo pronto localmente

- Pagina de contato com processo de primeiro contato, FAQ e CTA rastreavel.
- CTA reutilizavel para artigos do blog, com `data-whatsapp-cta` por slug.
- Artigo `Como saber se eu preciso fazer terapia?`.
- Artigo `Psicologa em Niteroi: como escolher uma profissional para comecar terapia`.
- Pagina `Psicologa em Niteroi`.
- Pagina `Terapia online`.
- Artigo `Ansiedade: sinais de que sua mente esta pedindo cuidado`.
- Pagina `Psicoterapia para ansiedade`.
- Artigo `Terapia online funciona? O que esperar do atendimento a distancia`.
- Rascunho de GBP post e legenda curta para `Terapia online funciona?`.
- Artigo `O Que Acontece na Primeira Sessao de Terapia?`.
- Rascunho de GBP post e legenda curta para `O Que Acontece na Primeira Sessao de Terapia?`.
- Pagina `Psicoterapia para adolescentes a partir de 16 anos`.
- Artigo `Psicanalise na pratica: o que muda na forma de escutar a sua historia`.
- Rascunho de GBP post e legenda curta para `Psicanalise na pratica`.
- Pagina `Psicanalise e psicoterapia`.
- Artigo `Terapia para adolescentes a partir de 16 anos: quando pode ajudar`.
- Rascunho de GBP post e legenda curta para `Terapia para adolescentes a partir de 16 anos`.
- Pagina `Atendimento psicologico em Sao Francisco, Niteroi`.
- Artigo `Sobrecarga Emocional: Quando a Vida Parece Pesada Demais`.
- Rascunho de GBP post e legenda curta para `Sobrecarga Emocional`.
- Artigo revisado `Ansiedade e Insonia: Por Que os Pensamentos Aceleram a Noite`, preservando a slug existente `/blog/ansiedade-insonia/`.
- Rascunho de GBP post e legenda curta para `Ansiedade e Insonia`.
- Artigo revisado `Autoestima e Autocritica: Quando a Cobranca Interna Passa do Limite`, preservando a slug existente `/blog/autoestima/`.
- Rascunho de GBP post e legenda curta para `Autoestima e Autocritica`.
- Artigo `Luto e Perdas: Por Que Algumas Dores Precisam Ser Elaboradas Com Tempo`.
- Rascunho de GBP post e legenda curta para `Luto e Perdas`.
- Artigo `Relacionamentos e Limites: Por Que Dizer Nao Pode Ser Tao Dificil`.
- Rascunho de GBP post e legenda curta para `Relacionamentos e Limites`.
- Artigo `Crise de Panico: Entendendo o Medo do Corpo Perder o Controle`.
- Rascunho de GBP post e legenda curta para `Crise de Panico`.
- Artigo `Tristeza ou Depressao: Quando Procurar Ajuda Profissional`.
- Rascunho de GBP post e legenda curta para `Tristeza ou Depressao`.
- Links internos entre artigos, paginas de servico, contato e sobre.

## Validacao tecnica de hoje

- `npm run build` executado em 2026-07-11 08:32 BRT.
- Build concluido com sucesso.
- 62 paginas geradas em `dist/`.
- Rotas novas confirmadas no build:
  - `/psicologa-em-niteroi/`
  - `/terapia-online/`
  - `/psicoterapia-para-ansiedade/`
  - `/blog/como-saber-se-preciso-fazer-terapia/`
  - `/blog/psicologo-niteroi/`
  - `/blog/ansiedade-sinais-mente-pedindo-cuidado/`
- Apos a rotina de 2026-07-13, validar tambem:
  - `/blog/terapia-online-funciona/`
- Apos a rotina de 2026-07-14, validar tambem:
  - `/blog/o-que-acontece-primeira-sessao-terapia/`
- Apos a rotina de 2026-07-15, validar tambem:
  - `/psicoterapia-adolescentes/`
  - `/blog/psicanalise-na-pratica/`
- Apos a rotina de 2026-07-16, validar tambem:
  - `/psicanalise-e-psicoterapia/`
  - `/blog/terapia-para-adolescentes-a-partir-de-16-anos/`
- Apos a rotina de 2026-07-17, validar tambem:
  - `/atendimento-psicologico-sao-francisco-niteroi/`
  - `/blog/sobrecarga-emocional-quando-a-vida-parece-pesada-demais/`
- Apos a rotina de 2026-07-19, validar tambem:
  - `/blog/ansiedade-insonia/`
- Apos a rotina de 2026-07-20, validar tambem:
  - `/blog/autoestima/`
- Apos a rotina de 2026-07-21, validar tambem:
  - `/blog/luto-e-perdas/`
- Apos a rotina de 2026-07-22, validar tambem:
  - `/blog/relacionamentos-e-limites/`
- Apos a rotina de 2026-07-23, validar tambem:
  - `/blog/crise-de-panico/`
- Apos a rotina de 2026-07-24, validar tambem:
  - `/blog/tristeza-ou-depressao/`
- Os avisos anteriores de `Duplicate id` nao apareceram no build de hoje.

## Revisao editorial antes de publicar

- Conferir se a copy nao promete resultado clinico, cura, diagnostico ou garantia.
- Conferir se todo conteudo sensivel usa linguagem educativa e nao substitui avaliacao profissional.
- Confirmar se os CTAs nao afirmam preco, disponibilidade ou formato ainda nao aprovados por Mateus/Elisa.
- Confirmar se o endereco, CRP e informacoes de atendimento continuam corretos.
- Revisar os artigos de julho contra o calendario do plano de 6 meses.

## Revisao tecnica antes de publicar

- Rodar `npm run build` novamente imediatamente antes do deploy.
- Revisar o diff completo, incluindo arquivos ainda untracked.
- Testar links principais em preview local:
  - Home
  - Contato
  - Sobre
  - Blog
  - Psicologa em Niteroi
  - Terapia online
  - Psicoterapia para ansiedade
- Confirmar que os CTAs usam os identificadores esperados:
  - `contact_main_cta`
  - `terapia_online_hero`
  - `terapia_online_footer`
  - `ansiedade_hero`
  - `ansiedade_footer`
  - `blog_<slug>_cta`
- Depois do deploy, validar no site publico:
  - HTTP 200 nas rotas novas.
  - `sitemap-index.xml` atualizado.
  - CTA de WhatsApp abrindo corretamente.

## Bloqueios que ainda impedem fechar todos comerciais

- Mateus precisa enviar o handoff inicial para Elisa ou registrar canal e horario exatos se ja enviou.
- Mateus/Elisa precisam decidir:
  - WhatsApp only ou WhatsApp + formulario/backend.
  - Preco publico ou informado somente apos primeiro contato.
  - Disponibilidade real para novos pacientes.
  - Bio atualizada e fotos reais do consultorio/profissional.
- Quem controla GTM/GA4/Search Console precisa validar:
  - Preview/DebugView ou Realtime.
  - Evento `whatsapp_cta_click`.
  - Conversao marcada corretamente, se aplicavel.
  - Propriedade do Search Console e consultas reais.

## Proximo passo recomendado

Se os bloqueios comerciais continuarem, a proxima atividade local desbloqueada e revisar ou completar o pacote de 2026-10-07:

- adiantar o proximo pacote datado ainda nao preparado, sobre burnout e esgotamento;
- manter materiais de distribuicao apenas como rascunho, sem publicar nem enviar.

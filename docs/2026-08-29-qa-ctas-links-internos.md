# QA de CTAs e links internos - Elisa

Documento preparado em 2026-08-29 como rotina local segura enquanto os bloqueios humanos seguem abertos.

## Leitura de status

- Nao havia todo ativo com vencimento exatamente em 2026-08-29.
- O ciclo local SEO de agosto continua aberto e vence em 2026-08-31.
- `Current priority` segue bloqueado: Mateus precisa enviar o handoff inicial para Elisa ou registrar canal e horario exatos se ja enviou.
- Os rascunhos locais de blog do calendario atual ja cobrem julho a dezembro; o trabalho local de maior valor hoje foi QA operacional antes de revisao/deploy.

## Validacao executada

- Rodei `npm run build`.
- Resultado: build concluido com sucesso.
- Paginas geradas: 84.
- `sitemap-index.xml` gerado em `dist/`.
- Chequei 30 arquivos Markdown em `src/content/blog`.
- Links internos Markdown quebrados encontrados: 0.
- Rotas conhecidas usadas na validacao: paginas principais, paginas de servico, blog, contato, sobre e posts do blog.

## Achados de CTA e malha interna

- O template de blog injeta `BlogCTA` no fim dos posts com `data-whatsapp-cta` por slug, entao todos os artigos renderizados recebem CTA rastreavel.
- 17 dos 30 posts tambem mencionam CTA/contato/agendamento no corpo do texto.
- Dois posts nao tem link interno Markdown no proprio conteudo:
  - `/blog/autoconhecimento/`
  - `/blog/como-saber-se-preciso-fazer-terapia/`
- Isso nao quebra o site, mas enfraquece a malha editorial. Antes de publicar em lote, vale inserir links contextuais discretos para `/terapia-online/`, `/psicologa-em-niteroi/`, `/sobre/` ou `/contato/`, conforme o trecho.

## CTAs rastreaveis confirmados no codigo

- `header_nav`
- `footer`
- `floating_button`
- `home_hero`
- `home_services`
- `home_final_cta`
- `contact_card`
- `contact_main_cta`
- `terapia_online_hero`
- `terapia_online_footer`
- `ansiedade_hero`
- `ansiedade_footer`
- `adolescentes_hero`
- `adolescentes_footer`
- `psicologa_niteroi_hero`
- `psicologa_niteroi_footer`
- `psicanalise_hero`
- `psicanalise_footer`
- `sao_francisco_hero`
- `sao_francisco_footer`
- `blog_<slug>_cta`

## O que ainda nao deve ser marcado como concluido

- Publicacao de GBP posts, fotos e review requests: dependem de acesso/aprovacao e acao humana.
- Validacao real de GA4/GTM/Search Console: depende de acesso e teste em ambiente publicado.
- Publicacao dos artigos/paginas: depende de revisao clinica/editorial e deploy.
- Current priority: depende de Mateus enviar o handoff inicial ou registrar o envio.

## Proxima acao local recomendada

Se os bloqueios continuarem, revisar manualmente os dois posts sem links internos Markdown e preparar sugestoes de links contextuais para aprovacao, sem publicar e sem alterar promessa clinica, preco, disponibilidade ou formato de atendimento.

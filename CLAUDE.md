# Projeto: Oliveira's Imobiliária (site dos corretores Alex Oliveira e Giselly Oliveira)

Site da Oliveira's Imobiliária, com dois corretores: Alex Oliveira e Giselly Oliveira (generalista: compra, venda e locação). No ar em https://aoliveiracorretor.com.br (push na `main` = publica na Netlify). Responda sempre em português.

## Stack
- Astro 5 (site estático) — páginas em `src/pages`, layout em `src/layouts/Base.astro`
- Imóveis são arquivos Markdown em `src/content/imoveis/` (schema em `src/content.config.ts`)
- Painel Decap CMS em `public/admin/` (config.yml precisa espelhar o schema)
- Hospedagem: Netlify (grátis), build `npm run build`, saída `dist`
- Dados da imobiliária (`SITE`: nome, cidade, e-mail, Instagram) e dos corretores (`CORRETORES`) centralizados em `src/config.ts`

## Corretores (desde 2026-11-25)
- `CORRETORES` em `src/config.ts` é uma lista; cada um tem `id`, `nome`, `creci`, `whatsapp` e `bio` (opcional, aparece na página Sobre).
- O 1º da lista (Alex) é o contato principal: botão flutuante e botões gerais da home usam o WhatsApp dele, com mensagem neutra ("Olá! …").
- Cada imóvel tem o campo `corretor` (o `id`; padrão `alex` para imóveis antigos sem o campo). A página do imóvel mostra "Responsável pelo anúncio", o nome, o CRECI e o botão "Falar com <primeiro nome>" com o WhatsApp da pessoa.
- `creci` vazio esconde a linha de CRECI daquela pessoa. `whatsapp` vazio: na página do imóvel o botão usa o número do principal (o lead não se perde); no rodapé e na página Sobre o botão dela some.
- Rodapé (coluna "Corretores") e página Sobre ("Sobre nós", um card por pessoa) listam todos.
- Para adicionar alguém: novo item em `CORRETORES` E nova opção no campo `corretor` de `public/admin/config.yml` (mesmo `id`). Nunca mudar o `id` de quem já tem imóvel cadastrado.
- Textos neutros quanto a gênero nos rótulos ("Responsável pelo anúncio", "CRECI …"), porque há corretor e corretora.

## Identidade visual (não mudar sem pedir) — preto e dourado, desde 2026-11-11
- Preto #141414 (fundo), dourado #C9A15B (títulos, preços, botões, links), dourado escuro #8F6B32 (bordas e linhas), marfim #EDE6D8 (texto)
- Tons de apoio derivados: superfície #1C1C1C (cards/rodapé), superfície-2 #242424, texto suave #A8A195, linha #34302A
- Fontes: Cinzel (títulos) e Montserrat (texto), via Google Fonts em `Base.astro`
- Tokens em `src/styles/global.css` (`--preto`, `--dourado`, `--dourado-escuro`, `--marfim`, `--fonte-titulo`, `--fonte-texto`…); componentes usam só as variáveis, nada de cor solta
- Nome da marca (desde 2026-11-24): "Oliveira's Imobiliária". No cabeçalho: `nome` "Oliveira's" + `subtitulo` "Imobiliária"; `marca` = nome completo (aba, Google, rodapé). Tudo em `src/config.ts`. O CRECI é de cada pessoa, por isso fica em `CORRETORES`, não na marca.
- Slogan "Seu próximo imóvel está aqui" (título do topo da home) fica em `src/config.ts`
- Estilo elegante e sóbrio
- Logo oficial (desde 2026-11-24): monograma "OI" dourado (casa dentro do O, I em forma de prédio, arco atravessando), fundo #141414 (igual ao do site, sem transparência).
  Arquivos em `public/`: `logo-oi.png` (cabeçalho, recorte 600x375), `favicon.png` (64), `apple-touch-icon.png` (180), `icone-512.png` (imagem padrão de compartilhamento/og:image).
  Fonte editável (SVG, fonte Playfair Display 700): `C:\Users\alexo\alexcorretor\logo\logo-oi.html`; renders em alta na mesma pasta. A logo antiga "AO" está em `logo\antigo\logo-ao-dourado\`. Se o fundo do site mudar de cor, refazer os recortes.

## Contraste (sobre o fundo #141414)
- Marfim ~15:1, dourado ~7,6:1, texto suave ~7:1 → OK para qualquer texto
- Dourado escuro só ~3,8:1 → NUNCA em texto; só bordas, linhas e detalhes
- Botão dourado usa texto preto (~7,6:1); no hover vira marfim com texto preto (não usar dourado escuro como fundo de texto)

## Regras
- Custo zero além do domínio: nada de serviços pagos
- Todo anúncio precisa mostrar o número do CRECI do corretor responsável (exigência legal)
- Contato principal é o WhatsApp (de cada corretor no imóvel dele)
- Mantenha o site leve e funcionando bem no celular
- Ao mudar campos de imóvel, atualize o schema E o `public/admin/config.yml`

## Pendências
- Preencher CRECI do Alex e CRECI + WhatsApp da Giselly em `CORRETORES`
- Trocar a logo do cabeçalho por `logo/cabecalho-site-fundo-escuro.svg` e o favicon por `logo/favicon.svg` (arquivos ainda não recebidos)
- E-mail do domínio (contato@aoliveiracorretor.com.br)
- Instagram: bio, templates de post nas cores da marca, posts semanais

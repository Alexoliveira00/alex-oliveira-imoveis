# Projeto: Oliveira's Negócios Imobiliários

Site da Oliveira's Negócios Imobiliários (generalista: compra, venda e locação). Por enquanto a única corretora listada é a Giselly Oliveira; o Alex Oliveira (dono do projeto) entra como corretor quando o CRECI dele sair. Textos do site na 1ª pessoa do plural ("nós"). No ar em https://aoliveiracorretor.com.br (push na `main` = publica na Netlify). Responda sempre em português.

## Stack
- Astro 5 (site estático) — páginas em `src/pages`, layout em `src/layouts/Base.astro`
- Imóveis são arquivos Markdown em `src/content/imoveis/` (schema em `src/content.config.ts`)
- Painel Decap CMS em `public/admin/` (config.yml precisa espelhar o schema)
- Hospedagem: Netlify (grátis), build `npm run build`, saída `dist`
- Dados da marca (`SITE`: nome, cidade, WhatsApp da empresa, e-mail, Instagram) e dos corretores (`CORRETORES`) centralizados em `src/config.ts`

## Corretores (desde 2026-11-25; só a Giselly desde 2026-11-27)
- Só entra em `CORRETORES` quem tem CRECI. Hoje: só `giselly` (CRECI e WhatsApp dela ainda não informados). O Alex está comentado em `src/config.ts`, com a bio dele, pronto para voltar: descomentar, preencher o CRECI e adicionar a opção `alex` em `public/admin/config.yml`.
- `CORRETORES` é uma lista; cada um tem `id`, `nome`, `creci`, `whatsapp` e `bio` (opcional, aparece na página Sobre).
- `SITE.whatsapp` (hoje o número do Alex) é o WhatsApp da empresa: botão flutuante, botões gerais, rodapé "Fale com a gente" e quem não tem WhatsApp próprio. Mensagem neutra ("Olá! …").
- Cada imóvel tem o campo `corretor` (o `id`; imóveis sem o campo ficam com o 1º da lista, hoje a Giselly). A página do imóvel mostra "Responsável pelo anúncio", o nome, o CRECI e o botão de WhatsApp: "Falar com <primeiro nome>" se a pessoa tem WhatsApp próprio; senão "Quero saber mais", com saudação neutra, para o WhatsApp da empresa.
- `creci` vazio esconde a linha de CRECI daquela pessoa. `whatsapp` vazio esconde o botão dela no rodapé e na página Sobre.
- Rodapé e página Sobre listam todos; o título é "Responsável" com uma pessoa e "Corretores" com mais de uma.
- Para adicionar alguém: novo item em `CORRETORES` E nova opção no campo `corretor` de `public/admin/config.yml` (mesmo `id`). Nunca mudar o `id` de quem já tem imóvel cadastrado.
- Textos neutros quanto a gênero nos rótulos ("Responsável pelo anúncio", "CRECI …"), porque há corretor e corretora.

## Identidade visual (não mudar sem pedir) — preto e dourado, desde 2026-11-11
- Preto #141414 (fundo), dourado #C9A15B (títulos, preços, botões, links), dourado escuro #8F6B32 (bordas e linhas), marfim #EDE6D8 (texto)
- Tons de apoio derivados: superfície #1C1C1C (cards/rodapé), superfície-2 #242424, texto suave #A8A195, linha #34302A
- Fontes: Cinzel (títulos) e Montserrat (texto), via Google Fonts em `Base.astro`
- Tokens em `src/styles/global.css` (`--preto`, `--dourado`, `--dourado-escuro`, `--marfim`, `--fonte-titulo`, `--fonte-texto`…); componentes usam só as variáveis, nada de cor solta
- Nome da marca (desde 2026-11-27): "Oliveira's Negócios Imobiliários". No cabeçalho: `nome` "Oliveira's" + `subtitulo` "Negócios Imobiliários"; `marca` = nome completo (aba, Google, rodapé). Tudo em `src/config.ts`. O CRECI é de cada pessoa, por isso fica em `CORRETORES`, não na marca. Histórico: "Alex Oliveira" → "Oliveira's Imobiliária" (24/11) → "Alex Oliveira & Giselly Oliveira – Corretores de Imóveis" (25/11) → atual.
- Slogan "Seu próximo imóvel está aqui" (título do topo da home) fica em `src/config.ts`
- Estilo elegante e sóbrio
- Logo oficial (desde 2026-11-25, feita fora e recebida em JPEG; não redesenhar): monograma "O" dourado com telhado de casa, prédios dentro e arco. A logo completa recebida junto ("ALEX OLIVEIRA & GISELLY OLIVEIRA – CORRETORES DE IMÓVEIS") está fora de uso desde 27/11 porque o nome mudou; no lugar dela, a assinatura "OLIVEIRA'S – NEGÓCIOS IMOBILIÁRIOS" (monograma + Cinzel/Montserrat). Fundo dos arquivos = #141414 exato (igual ao do site, sem transparência).
  Arquivos em `public/`: `logo-monograma.png` (cabeçalho, recorte 600x378), `favicon.png` (64), `apple-touch-icon.png` (180), `icone-512.png` (monograma quadrado), `logo-oliveiras.png` (assinatura 1200x630: imagem padrão de compartilhamento/og:image e topo da página Sobre).
  Originais em `C:\Users\alexo\alexcorretor\logo\`: `monograma-original.jpeg` (1080x1080), `logo-completa-original.jpeg` (fora de uso) e `assinatura-oliveiras.html` (fonte da assinatura; renderizar com Chrome headless em 1200x630); não há SVG (para impressão grande, pedir o vetor a quem fez). Logos antigas em `logo\antigo\` (`logo-oi\`, `logo-ao-dourado\`). Se o fundo do site mudar de cor, refazer os recortes.

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
- Preencher CRECI + WhatsApp da Giselly em `CORRETORES`
- Quando o CRECI do Alex sair: voltar o Alex para `CORRETORES` e para o `config.yml`
- Domínio oliveirasnegociosimob.com.br: o usuário vai registrar; depois apontar o DNS na Netlify, trocar `site` no `astro.config.mjs` e redirecionar o domínio antigo
- Pedir os arquivos vetoriais (SVG) da logo nova a quem fez, para impressão
- E-mail do domínio (contato@aoliveiracorretor.com.br)
- Instagram: bio, templates de post nas cores da marca, posts semanais

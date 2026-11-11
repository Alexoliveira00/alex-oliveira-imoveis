# Projeto: Alex Oliveira Imóveis

Site do corretor Alex Oliveira (generalista: compra, venda e locação). Responda sempre em português.

## Stack
- Astro 5 (site estático) — páginas em `src/pages`, layout em `src/layouts/Base.astro`
- Imóveis são arquivos Markdown em `src/content/imoveis/` (schema em `src/content.config.ts`)
- Painel Decap CMS em `public/admin/` (config.yml precisa espelhar o schema)
- Hospedagem: Netlify (grátis), build `npm run build`, saída `dist`
- Dados do corretor (CRECI, WhatsApp, cidade) centralizados em `src/config.ts`

## Identidade visual (não mudar sem pedir) — preto e dourado, desde 2026-11-11
- Preto #141414 (fundo), dourado #C9A15B (títulos, preços, botões, links), dourado escuro #8F6B32 (bordas e linhas), marfim #EDE6D8 (texto)
- Tons de apoio derivados: superfície #1C1C1C (cards/rodapé), superfície-2 #242424, texto suave #A8A195, linha #34302A
- Fontes: Cinzel (títulos) e Montserrat (texto), via Google Fonts em `Base.astro`
- Tokens em `src/styles/global.css` (`--preto`, `--dourado`, `--dourado-escuro`, `--marfim`, `--fonte-titulo`, `--fonte-texto`…); componentes usam só as variáveis, nada de cor solta
- Slogan "Seu próximo imóvel está aqui" (título do topo da home) e subtítulo "Negócios Imobiliários" (abaixo do nome no cabeçalho) ficam em `src/config.ts`
- Estilo elegante e sóbrio
- Logo oficial (desde 2026-11-11): monograma "AO" dourado com casa e prédios, fundo #141414 (igual ao do site, por isso não tem transparência e não precisa).
  Arquivos em `public/`: `logo-ao.png` (cabeçalho, recorte 300x155), `favicon.png` (64), `apple-touch-icon.png` (180), `icone-512.png` (imagem padrão de compartilhamento/og:image).
  Original em alta: `C:\Users\alexo\alexcorretor\logo\logo-original.jpeg` (1080x1080). Se o fundo do site mudar de cor, refazer os recortes.

## Contraste (sobre o fundo #141414)
- Marfim ~15:1, dourado ~7,6:1, texto suave ~7:1 → OK para qualquer texto
- Dourado escuro só ~3,8:1 → NUNCA em texto; só bordas, linhas e detalhes
- Botão dourado usa texto preto (~7,6:1); no hover vira marfim com texto preto (não usar dourado escuro como fundo de texto)

## Regras
- Custo zero além do domínio: nada de serviços pagos
- Todo anúncio precisa mostrar o número do CRECI (exigência legal)
- Contato principal é o WhatsApp
- Mantenha o site leve e funcionando bem no celular
- Ao mudar campos de imóvel, atualize o schema E o `public/admin/config.yml`

## Próximos passos planejados
- Colocar no ar na Netlify e liberar o painel /admin
- Registrar domínio quando o CRECI sair
- Instagram: bio, templates de post nas cores da marca, posts semanais

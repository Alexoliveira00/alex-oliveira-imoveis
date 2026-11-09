# Projeto: Alex Oliveira Imóveis

Site do corretor Alex Oliveira (generalista: compra, venda e locação). Responda sempre em português.

## Stack
- Astro 5 (site estático) — páginas em `src/pages`, layout em `src/layouts/Base.astro`
- Imóveis são arquivos Markdown em `src/content/imoveis/` (schema em `src/content.config.ts`)
- Painel Decap CMS em `public/admin/` (config.yml precisa espelhar o schema)
- Hospedagem: Netlify (grátis), build `npm run build`, saída `dist`
- Dados do corretor (CRECI, WhatsApp, cidade) centralizados em `src/config.ts`

## Identidade visual (não mudar sem pedir)
- Azul-marinho #1F2A44, dourado #B08D57, off-white #F5F1EA, grafite #2E2E2E
- Fontes: Libre Caslon Text (títulos) e Public Sans (texto)
- Estilo clássico e confiável

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

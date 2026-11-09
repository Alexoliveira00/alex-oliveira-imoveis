# Alex Oliveira Imóveis – site

Site estático (Astro) + painel para cadastrar imóveis (Decap CMS).
Custo: só o domínio (~R$ 40/ano no Registro.br). Hospedagem grátis na Netlify.

## 1. Antes de tudo: seus dados
Edite `src/config.ts`: CRECI, WhatsApp (55 + DDD + número), cidade, e-mail e Instagram.
No `astro.config.mjs`, troque o `site` pelo seu domínio.

## 2. Subir pro GitHub
1. Crie um repositório chamado `alex-oliveira-imoveis` na conta Alexoliveira00.
2. Na pasta do projeto:
   git init && git add . && git commit -m "site inicial"
   git branch -M main
   git remote add origin https://github.com/Alexoliveira00/alex-oliveira-imoveis.git
   git push -u origin main

## 3. Hospedar na Netlify (grátis)
1. netlify.com → entre com o GitHub → "Add new site" → "Import an existing project" → escolha o repositório.
2. Build command: `npm run build` | Publish directory: `dist` → Deploy.

## 4. Liberar o painel /admin
1. GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
   - Homepage URL: o endereço do seu site
   - Authorization callback URL: https://api.netlify.com/auth/done
2. Copie o Client ID e gere um Client Secret.
3. Netlify → seu site → Project configuration → Access & security → OAuth → Install provider → GitHub → cole os dois.
4. Acesse seusite.com.br/admin e entre com o GitHub.

## 5. Domínio
1. Registre no registro.br (precisa de CPF).
2. Netlify → Domain management → Add domain → siga as instruções e copie os servidores DNS da Netlify para o Registro.br.
3. HTTPS é ativado sozinho.

## Cadastrar um imóvel
/admin → Imóveis → Novo imóvel → preencha, suba as fotos → Publicar.
O site atualiza em ~1 minuto. Quando vender, desmarque "Disponível" (o card vira "Vendido").

Dica: reduza as fotos antes de subir (até ~1600 px de largura, ~300 KB). Use squoosh.app, grátis.
Apague os 3 imóveis de exemplo e as imagens `exemplo-*.svg` quando cadastrar os reais.

## Rodar no seu computador
npm install
npm run dev   → abre em http://localhost:4321

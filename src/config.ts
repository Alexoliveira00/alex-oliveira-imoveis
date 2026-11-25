// ===== EDITE AQUI: seus dados aparecem no site inteiro =====
export const SITE = {
  nome: 'Alex & Giselly Oliveira', // 1ª linha do nome no cabeçalho
  subtitulo: 'Corretores de Imóveis', // 2ª linha do nome no cabeçalho
  marca: 'Alex Oliveira & Giselly Oliveira', // nome completo: título da aba, Google, rodapé
  slogan: 'Seu próximo imóvel está aqui', // título do topo da página inicial
  cidade: 'Itanhaém – SP',
  email: '', // preencher quando criar o e-mail do domínio. Vazio = esconde do rodapé
  instagram: 'alexoliveira.imoveis',
  descricao:
    'Corretores de imóveis em Itanhaém – SP. Compra, venda e locação de casas, apartamentos e terrenos, com atendimento do primeiro contato até a assinatura.',
};

// ===== CORRETORES =====
// id: identificador usado no cadastro do imóvel (não mude depois de usar; se adicionar alguém,
//     inclua também nas opções do campo "corretor" em public/admin/config.yml).
// creci: OBRIGATÓRIO preencher assim que sair (ex.: '123456-F'). Vazio = esconde as linhas de CRECI.
// whatsapp: só números, com 55 + DDD. Vazio = os botões dessa pessoa usam o WhatsApp do 1º da lista.
// O 1º da lista é o contato principal (botão flutuante e botões gerais do site).
export type Corretor = { id: string; nome: string; creci: string; whatsapp: string; bio?: string };

export const CORRETORES = [
  {
    id: 'alex',
    nome: 'Alex Oliveira',
    creci: '',
    whatsapp: '5513996016676',
    bio: 'Antes do mercado imobiliário, trabalhou na gestão de comércio e restaurante, e aprendeu ali que negócio bom é aquele em que as duas partes saem satisfeitas.',
  },
  {
    id: 'giselly',
    nome: 'Giselly Oliveira',
    creci: '',
    whatsapp: '',
  },
] as const satisfies readonly Corretor[];

export type CorretorId = (typeof CORRETORES)[number]['id'];
export const CORRETOR_IDS = CORRETORES.map((c) => c.id) as [CorretorId, ...CorretorId[]];
export const PRINCIPAL: Corretor = CORRETORES[0];

export const corretorPorId = (id?: string): Corretor =>
  CORRETORES.find((c) => c.id === id) ?? PRINCIPAL;

export const primeiroNome = (c: Corretor) => c.nome.split(' ')[0];

export const waLink = (msg: string, corretor: Corretor = PRINCIPAL) =>
  `https://wa.me/${corretor.whatsapp || PRINCIPAL.whatsapp}?text=${encodeURIComponent(msg)}`;

export const brl = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

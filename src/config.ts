// ===== EDITE AQUI: seus dados aparecem no site inteiro =====
export const SITE = {
  nome: "Oliveira's", // 1ª linha do nome no cabeçalho
  subtitulo: 'Negócios Imobiliários', // 2ª linha do nome no cabeçalho
  marca: "Oliveira's Negócios Imobiliários", // nome completo: título da aba, Google, rodapé
  slogan: 'Seu próximo imóvel está aqui', // título do topo da página inicial
  cidade: 'Itanhaém – SP',
  whatsapp: '5513996016676', // WhatsApp da empresa: botão flutuante, botões gerais e quem não tem WhatsApp próprio. Só números, 55 + DDD
  email: '', // preencher quando criar o e-mail do domínio. Vazio = esconde do rodapé
  instagram: 'alexoliveira.imoveis',
  descricao:
    'Negócios imobiliários em Itanhaém – SP. Compra, venda e locação de casas, apartamentos e terrenos, com atendimento do primeiro contato até a assinatura.',
};

// ===== CORRETORES =====
// Só entra aqui quem tem CRECI (ou está com ele saindo): todo anúncio mostra o corretor responsável.
// id: identificador usado no cadastro do imóvel (não mude depois de usar; se adicionar alguém,
//     inclua também nas opções do campo "corretor" em public/admin/config.yml).
// creci: OBRIGATÓRIO preencher (ex.: '123456-F'). Vazio = esconde as linhas de CRECI.
// whatsapp: só números, com 55 + DDD. Vazio = os botões dessa pessoa usam o WhatsApp da empresa (SITE.whatsapp).
// O 1º da lista é o padrão dos imóveis sem o campo "corretor".
export type Corretor = { id: string; nome: string; creci: string; whatsapp: string; bio?: string };

export const CORRETORES = [
  {
    id: 'giselly',
    nome: 'Giselly Oliveira',
    creci: '', // ainda não informado
    whatsapp: '',
  },
  // Alex volta quando o CRECI dele sair (descomentar, preencher o CRECI e
  // adicionar { label: Alex Oliveira, value: alex } no campo "corretor" de public/admin/config.yml):
  // {
  //   id: 'alex',
  //   nome: 'Alex Oliveira',
  //   creci: '',
  //   whatsapp: '5513996016676',
  //   bio: 'Antes do mercado imobiliário, trabalhou na gestão de comércio e restaurante, e aprendeu ali que negócio bom é aquele em que as duas partes saem satisfeitas.',
  // },
] as const satisfies readonly Corretor[];

export type CorretorId = (typeof CORRETORES)[number]['id'];
export const CORRETOR_IDS = CORRETORES.map((c) => c.id) as [CorretorId, ...CorretorId[]];

export const corretorPorId = (id?: string): Corretor =>
  CORRETORES.find((c) => c.id === id) ?? CORRETORES[0];

export const primeiroNome = (c: Corretor) => c.nome.split(' ')[0];

// Sem corretor (ou corretor sem WhatsApp próprio) = WhatsApp da empresa.
export const waLink = (msg: string, corretor?: Corretor) =>
  `https://wa.me/${corretor?.whatsapp || SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const brl = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

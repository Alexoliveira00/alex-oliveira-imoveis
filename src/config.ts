// ===== EDITE AQUI: seus dados aparecem no site inteiro =====
export const SITE = {
  nome: 'Alex Oliveira',
  marca: 'Alex Oliveira Imóveis',
  creci: '', // OBRIGATÓRIO preencher assim que sair (ex.: '123456-F'). Vazio = esconde as linhas de CRECI
  cidade: 'Itanhaém – SP',
  whatsapp: '5513996016676', // só números, com 55 + DDD
  email: '', // preencher quando criar o e-mail do domínio. Vazio = esconde do rodapé
  instagram: 'alexoliveira.imoveis',
  descricao:
    'Corretor de imóveis. Compra, venda e locação de casas, apartamentos e terrenos, com atendimento do primeiro contato até a assinatura.',
};

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const brl = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

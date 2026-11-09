// ===== EDITE AQUI: seus dados aparecem no site inteiro =====
export const SITE = {
  nome: 'Alex Oliveira',
  marca: 'Alex Oliveira Imóveis',
  creci: '00000-F', // OBRIGATÓRIO: troque pelo seu número assim que sair
  cidade: 'Sua Cidade – UF',
  whatsapp: '5511999999999', // só números, com 55 + DDD
  email: 'contato@alexoliveiraimoveis.com.br',
  instagram: 'alexoliveira.imoveis',
  descricao:
    'Corretor de imóveis. Compra, venda e locação de casas, apartamentos e terrenos, com atendimento do primeiro contato até a assinatura.',
};

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const brl = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

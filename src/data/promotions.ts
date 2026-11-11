export interface PromotionHighlight {
  id: string;
  title: string;
  description: string;
}

export const promotionHighlights: PromotionHighlight[] = [
  {
    id: 'funilarias-oficinas',
    title: 'Condições para funilarias e oficinas',
    description:
      'Atendimento comercial com condições especiais para quem compra com frequência ou em maior volume.',
  },
  {
    id: 'acerto-de-cor-incluso',
    title: 'Consultoria de acerto de cor',
    description:
      'Ao comprar seus insumos de pintura na loja, conte com nossa orientação para acertar a tonalidade exata.',
  },
  {
    id: 'novidades-instagram',
    title: 'Novidades no Instagram',
    description:
      'Lançamentos, chegadas de estoque e condições especiais são sempre divulgados primeiro no @dbutintas.',
  },
];

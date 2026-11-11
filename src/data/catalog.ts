import type { ProductCategoryInfo } from '../types/product';

export const categories: ProductCategoryInfo[] = [
  {
    id: 'tintas',
    label: 'Tintas Automotivas',
    description:
      'Tintas de base para reparo e pintura completa, com fidelidade de cor para cada acerto.',
  },
  {
    id: 'vernizes',
    label: 'Vernizes',
    description:
      'Vernizes de alto sólidos e secagem rápida para brilho, proteção e durabilidade do acabamento.',
  },
  {
    id: 'primers',
    label: 'Primers',
    description:
      'Primers de poliuretano e primer surfacer para preparação de superfície e aderência da pintura.',
  },
  {
    id: 'massas-lixas',
    label: 'Massas, Lixas e Acabamento',
    description:
      'Massas plásticas, lixas e produtos de acabamento e proteção para finalizar o reparo com qualidade.',
  },
  {
    id: 'acessorios',
    label: 'Acessórios para Pintura',
    description: 'Pistolas e equipamentos profissionais para aplicação de tinta e verniz.',
  },
];

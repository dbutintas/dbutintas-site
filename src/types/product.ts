export type ProductCategory =
  | 'tintas'
  | 'vernizes'
  | 'primers'
  | 'massas-lixas'
  | 'acessorios';

export interface Brand {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface ProductCategoryInfo {
  id: ProductCategory;
  label: string;
  description: string;
}

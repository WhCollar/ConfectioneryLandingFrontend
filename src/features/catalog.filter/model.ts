import { CategoryResponse } from 'entities/queries';

export type FilterProperties = {
  minPrice: number;
  maxPrice: number;
  categories: CategoryResponse[];
};

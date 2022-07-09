import {Routes} from '../model';

export type ProductsStackParamList = {
  [Routes.Products]: undefined;
  [Routes.Product]: {id: string};
};

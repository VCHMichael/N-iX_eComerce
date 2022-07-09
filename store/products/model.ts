import {GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID} from './types';
export interface ProductsState {
  products: any[];
  currentProduct: {
    name: string;
    colour: string;
    img: string;
    price: number;
  };
}

export interface AllProductsAction {
  type: typeof GET_ALL_PRODUCTS;
  payload: any;
}

export interface GetProductById {
  type: typeof GET_PRODUCT_BY_ID;
  payload: any;
}

export type ProductsActionTypes = AllProductsAction | GetProductById;

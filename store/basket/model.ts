import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from './types';

export interface BasketState {
  products: any[];
}

export interface AddToBasket {
  type: typeof ADD_TO_BASKET;
  payload: any;
}
export interface RemoveFromBasket {
  type: typeof REMOVE_FROM_BASKET;
  id: string;
}

export type BasketActionTypes = AddToBasket | RemoveFromBasket;

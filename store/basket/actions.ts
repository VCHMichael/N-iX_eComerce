import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from './types';

import {AppThunk} from 'store/model';

export class BasketActions {
  static addToBasket =
    (product: {}): AppThunk =>
    dispatch => {
      dispatch({type: ADD_TO_BASKET, payload: product});
    };
  static removeFromBasket =
    (id: string): AppThunk =>
    dispatch => {
      dispatch({type: REMOVE_FROM_BASKET, id});
    };
}

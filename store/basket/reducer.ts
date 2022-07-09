import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from './types';
import {BasketState, BasketActionTypes} from './model';

const initState: BasketState = {
  products: [],
};

const basketReducer = (
  state = initState,
  actions: BasketActionTypes,
): BasketState => {
  switch (actions.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        products: [...state.products, actions.payload],
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        products: state.products.filter(product => product.id !== actions.id),
      };

    default:
      return state;
  }
};

export default basketReducer;

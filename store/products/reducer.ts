import {GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID} from './types';
import {ProductsState, ProductsActionTypes} from './model';
const initState: ProductsState = {
  products: [],
  currentProduct: {
    name: '',
    colour: '',
    img: '',
    price: 0,
  },
};

const productsReducer = (
  state = initState,
  actions: ProductsActionTypes,
): ProductsState => {
  switch (actions.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: actions.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        currentProduct: {
          ...actions.payload,
        },
      };

    default:
      return state;
  }
};

export default productsReducer;

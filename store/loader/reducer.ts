import {LoaderActionTypes, LoaderState} from './model';
import {SET_LOADER_END, SET_LOADER_START} from './types';

const initialState: LoaderState = {
  getProductById: false,
  getAllProducts: false,
};

const loaderReducer = (
  state = initialState,
  actions: LoaderActionTypes,
): LoaderState => {
  switch (actions.type) {
    case SET_LOADER_START:
      return {
        ...state,
        [actions.requestName]: true,
      };
    case SET_LOADER_END:
      return {
        ...state,
        [actions.requestName]: false,
      };
    default:
      return state;
  }
};

export default loaderReducer;

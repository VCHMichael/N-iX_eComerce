import {GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID} from './types';
import {ApiProducts} from './../../net/ApiProducts/index';
import {LoaderActions} from 'store/loader/actions';
import {RequestEnum} from 'store/loader/model';
import {AppThunk} from 'store/model';

export class ProductsActions {
  static getAllProducts = (): AppThunk => async dispatch => {
    const requestName = RequestEnum.GetAllProducts;
    const request = async () => {
      const res = await ApiProducts.getProducts();
      const payload = await res.json();
      dispatch({type: GET_ALL_PRODUCTS, payload});
    };
    await dispatch(LoaderActions.loaderHelper(requestName, request));
  };
  static getProductById =
    (id: string): AppThunk =>
    async dispatch => {
      const requestName = RequestEnum.GetProductById;
      const request = async () => {
        const res = await ApiProducts.getProductById(id);
        const payload = await res.json();
        dispatch({type: GET_PRODUCT_BY_ID, payload});
      };
      await dispatch(LoaderActions.loaderHelper(requestName, request));
    };
}

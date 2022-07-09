import {AppActions, AppThunk} from '../model';
import {RequestEnum} from './model';
import {SET_LOADER_END, SET_LOADER_START} from './types';

export class LoaderActions {
  static setLoaderStart = (requestName: RequestEnum): AppActions => ({
    type: SET_LOADER_START,
    requestName,
  });

  static setLoaderEnd = (requestName: RequestEnum): AppActions => ({
    type: SET_LOADER_END,
    requestName,
  });

  static loaderHelper =
    (requestName: RequestEnum, request: () => Promise<void>): AppThunk =>
    async dispatch => {
      dispatch(LoaderActions.setLoaderStart(requestName));
      try {
        await request();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(requestName, error);
      } finally {
        dispatch(LoaderActions.setLoaderEnd(requestName));
      }
    };
}

import {SET_LOADER_END, SET_LOADER_START} from './types';

export type LoaderState = {
  [name in RequestEnum]: boolean;
};

export enum RequestEnum {
  GetProductById = 'getProductById',
  GetAllProducts = 'getAllProducts',
  GetAllPosts = 'getAllPosts',
}

export interface SetLoaderStartAction {
  type: typeof SET_LOADER_START;
  requestName: RequestEnum;
}

export interface SetLoaderEndAction {
  type: typeof SET_LOADER_END;
  requestName: RequestEnum;
}

export type LoaderActionTypes = SetLoaderEndAction | SetLoaderStartAction;

import {Action, AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {BasketActionTypes} from './basket/model';
import {PostsActionTypes} from './posts/model';
import {ProductsActionTypes} from './products/model';

import {store} from './store';

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<AppState, any, AnyAction>;
export type AppActions =
  | ProductsActionTypes
  | PostsActionTypes
  | BasketActionTypes;

export type ThunkAction<
  TReturnType,
  TState,
  TExtraThunkArg,
  TBasicAction extends Action,
> = (
  dispatch: ThunkDispatch<TState, TExtraThunkArg, TBasicAction>,
  getState: () => TState,
  extraArgument: TExtraThunkArg,
) => TReturnType;

export type AppThunk = ThunkAction<any, AppState, unknown, AppActions>;

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
//Better use Redux toolkit from now
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';

import products from './products/reducer';
import posts from './posts/reducer';
import loader from './loader/reducer';
import basket from './basket/reducer';

const rootReducer = combineReducers({
  products,
  posts,
  loader,
  basket,
});

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

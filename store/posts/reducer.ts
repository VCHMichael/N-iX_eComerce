import {GET_ALL_POSTS} from './types';
import {PostsActionTypes, PostsState} from './model';

const initState: PostsState = {
  posts: [],
};

const productsReducer = (
  state = initState,
  actions: PostsActionTypes,
): PostsState => {
  switch (actions.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: actions.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;

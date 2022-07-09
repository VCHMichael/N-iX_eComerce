import {GET_ALL_POSTS} from './types';

export interface PostsState {
  posts: {type: string; data: string}[];
}

export interface AllPostsAction {
  type: typeof GET_ALL_POSTS;
  payload: {type: string; data: string}[];
}

export type PostsActionTypes = AllPostsAction;

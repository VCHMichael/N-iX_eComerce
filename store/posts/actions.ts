import {ApiPosts} from 'net/ApiPosts/index';
import {GET_ALL_POSTS} from './types';
import {LoaderActions} from 'store/loader/actions';
import {RequestEnum} from 'store/loader/model';
import {AppThunk} from 'store/model';

export class PostsActions {
  static getAllPosts = (): AppThunk => async dispatch => {
    const requestName = RequestEnum.GetAllPosts;
    const request = async () => {
      const res = await ApiPosts.getPosts();
      const payload = await res.json();
      dispatch({type: GET_ALL_POSTS, payload});
    };
    await dispatch(LoaderActions.loaderHelper(requestName, request));
  };
}

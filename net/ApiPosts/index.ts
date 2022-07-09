import {Api} from 'net/Api';
import {GetPosts} from './model';

export class ApiPosts extends Api {
  constructor() {
    super();
  }
  static getPosts() {
    return ApiPosts.instance.httpRequest<GetPosts>('posts', {
      method: 'GET',
    });
  }
}

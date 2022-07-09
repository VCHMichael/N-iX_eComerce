import {Api} from 'net/Api';
import {GetProducts} from './model';

export class ApiProducts extends Api {
  constructor() {
    super();
  }
  static getProducts() {
    return ApiProducts.instance.httpRequest<GetProducts>('products', {
      method: 'GET',
    });
  }
  static getProductById(id: string) {
    return ApiProducts.instance.httpRequest<GetProducts>(`products/${id}`, {
      method: 'GET',
    });
  }
}

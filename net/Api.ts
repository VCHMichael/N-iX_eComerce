import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import {ApiInitParams} from './model';

const BASE_URL = 'https://my-json-server.typicode.com/benirvingplt/products/';

export class Api {
  private static _instance: Api;
  private static headers: {};

  static get instance(): Api {
    if (Api._instance == null) {
      Api._instance = new Api();
    }
    return Api._instance;
  }

  static async init(params: ApiInitParams) {
    this.headers = this.getHeaders(params);
  }

  private static getHeaders(params: ApiInitParams) {
    const defaultOptions = {
      'Content-Type': 'application/json',
      'Device-ID': DeviceInfo.getUniqueId(),
      'User-Agent': params.userAgent,
      version: DeviceInfo.getVersion(),
      build_number: DeviceInfo.getBuildNumber(),
      os: Platform.OS,
    };

    return {
      ...defaultOptions,
    };
  }

  async httpRequest<T>(path: string, args?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`, {
      headers: Api.headers,
      ...args,
    });
    return response as unknown as T;
  }
}

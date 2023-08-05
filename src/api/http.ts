import axios, { AxiosInstance } from 'axios';
import ApiConstant from './apiConstant';

class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: ApiConstant.BASE_API_URL,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}

const http = new Http().instance;
export default http;

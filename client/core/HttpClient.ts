import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

const instance = axios.create();

instance.defaults.baseURL = process.env.NEXT_PUBLIC_HOST;

instance.interceptors.request.use((reqConfig) => {
  reqConfig.headers = {
    'Content-Type': 'application/json',
  };
  return reqConfig;
});

export const HttpClient = {
  get<T = unknown, R = AxiosResponse<T>>(
    url: string,
    reqConfig?: AxiosRequestConfig
  ): Promise<R> {
    return instance.get<T, R>(url, reqConfig);
  },

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    reqConfig?: AxiosRequestConfig
  ): Promise<R> {
    return instance.post<T, R>(url, data, reqConfig);
  },

  delete<T = any, R = AxiosResponse<any>>(
    url: string,
    reqConfig?: AxiosRequestConfig
  ): Promise<R> {
    return instance.delete<T, R>(url, reqConfig);
  },

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data: any,
    reqConfig?: AxiosRequestConfig
  ): Promise<R> {
    return instance.put<T, R>(url, data, reqConfig);
  },

  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data: any,
    reqConfig?: AxiosRequestConfig
  ): Promise<R> {
    return instance.patch<T, R>(url, data, reqConfig);
  },
};

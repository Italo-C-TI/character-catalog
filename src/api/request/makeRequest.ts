import { AxiosRequestConfig } from 'axios';
import { HttpRequest } from './request.types';

export function makeRequest(httpRequest: HttpRequest): AxiosRequestConfig {
    return {
        data: httpRequest.body,
        method: httpRequest.method,
        url: httpRequest.url,
        params: httpRequest.params,
    };
}

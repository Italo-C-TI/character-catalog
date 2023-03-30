import { AxiosResponse } from 'axios';
import { api } from '../config/apiInstance';
import { isAxiosError } from '../utils/axios';
import { makeRequest } from './makeRequest';
import { HttpRequest, HttpResponse } from './request.types';


export async function request<T>(httpRequest: HttpRequest): Promise<HttpResponse<T>> {
    try {
        const requestConfiguration = makeRequest(httpRequest);

        const apiResponse: AxiosResponse<T> = await api(requestConfiguration);

        return {
            body: apiResponse?.data,
            status: apiResponse?.status,
        };
    } catch (error: any) {
        if (!isAxiosError(error)) throw error;

        return {
            status: error.response.status,
            body: error.response.data,
            error,
        };
    }
}

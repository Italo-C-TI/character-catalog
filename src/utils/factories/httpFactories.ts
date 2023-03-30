import { HttpMethods, HttpStatusCodes } from 'api/codes';
import { HttpRequest, HttpResponse } from 'api/request';

export function makeBody<T>(body: T = {} as any) {
    return {
        id: 'any-id',
        ...body,
    };
}

export function makeHttpRequest(request: Partial<HttpRequest> = {}): HttpRequest {
    return {
        method: HttpMethods.Get,
        url: 'any-url',
        body: makeBody(),
        ...request,
    };
}

export function makeHttpResponse<T = any>(response: Partial<HttpResponse<T>> = {}): HttpResponse<T> {
    return {
        body: undefined as any,
        status: HttpStatusCodes.ok,
        ...response,
    };
}

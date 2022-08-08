import { AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps'

export function camelizeResponse(data: any, headers: any) {
    if (data && headers['content-type'] === 'application/json') {
        return camelizeKeys(data);
    }

    return data;
}

export function camelizeInterceptor({ data, headers, ...rest }: AxiosResponse) {
    data = camelizeResponse(data, headers);

    return {
        ...rest,
        data,
        headers
    };
}
import { AxiosResponse } from 'axios';
import { camelize } from 'humps'

function deepCamelize<T>(obj: T): T{
    if(Array.isArray(obj)){
        return obj.map(deepCamelize) as unknown as T
    }
    if(typeof obj === "object" && obj !== null){
        return Object.fromEntries(Object.entries(obj).map(([key, value]) => [camelize(key), deepCamelize(value)])) as T
    }
    return obj;
}

export function camelizeResponse(data: any) {
    if (data) {
        return deepCamelize(data);
    }

    return data;
}

export function camelizeInterceptor({ data, headers, ...rest }: AxiosResponse) {
    data = camelizeResponse(data);

    return {
        ...rest,
        data,
        headers
    };
}
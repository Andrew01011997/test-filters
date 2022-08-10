import { AxiosRequestConfig } from "axios";
import { decamelizeKeys } from "humps";

export function decamelizeInterceptor({ data, ...rest }: AxiosRequestConfig) {
    return { data: decamelizeKeys(data), ...rest }
}
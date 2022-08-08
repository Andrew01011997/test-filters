import { ResponseStatus } from "./response";

interface ResponseError<Fields extends Record<string, any> = Record<string, any>> {
    status: ResponseStatus;
    error: string;
    fieldErrors: Record<keyof Fields, string>;
}

export type { ResponseError }
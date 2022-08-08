interface ResponseError<Fields extends Record<string, any> = Record<string, any>> {
    status: string | "bad_request";
    error: string;
    fieldErrors: Record<keyof Fields, string>;
}

export type { ResponseError }
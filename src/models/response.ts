const enum ResponseStatus {
    SUCCESS = "ok",
    BAD_REQUEST = "bad_request"
}

interface SingleResponse<T> {
    status: ResponseStatus.SUCCESS;
    data: T;
}

interface ListResponse<T> extends SingleResponse<T[]> {}

export type { SingleResponse, ListResponse }
export { ResponseStatus }
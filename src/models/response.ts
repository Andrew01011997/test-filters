interface SingleResponse<T> {
    status: string | "ok";
    data: T;
}

interface ListResponse<T> extends SingleResponse<T[]> {}

export type { SingleResponse, ListResponse }
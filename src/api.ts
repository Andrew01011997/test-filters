import { AxiosInstance } from "axios";
import { httpClient } from "./configs/http-client";
import { Definition } from "./models/definition";
import { ResponseError } from "./models/error";
import { Filter, FilterWithoutId } from "./models/filter";
import { ListResponse, SingleResponse } from "./models/response";

class Api {
    client: AxiosInstance

    constructor(httpClient: AxiosInstance){
        this.client = httpClient;
    }

    getDefinitions(){
        return this.client.get<ListResponse<Definition>>('definitions')
    }

    getFilters() {
        return this.client.get<ListResponse<Filter>>('filters')
    }

    createFilter(body: FilterWithoutId) {
        return this.client.post<SingleResponse<Filter> | ResponseError<Filter>>('filters', body)
    }

    getFilter(id: Get<Filter, "id">) {
        return this.client.get<SingleResponse<Filter>>(`filters/${id}`)
    }

    updateFilter(filter: Filter) {
        return this.client.put<SingleResponse<Filter> | ResponseError<Filter>>(`filters/${filter.id}`, filter)
    }
}

export const api = new Api(httpClient);
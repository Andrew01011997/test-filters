import { httpClient } from "./configs/http-client";
import { Definition } from "./models/definition";
import { ResponseError } from "./models/error";
import { Filter, FilterWithoutId } from "./models/filter";
import { ListResponse, SingleResponse } from "./models/response";

class Api {
    getDefinitions(){
        return httpClient.get<ListResponse<Definition>>('definitions')
    }

    getFilters() {
        return httpClient.get<ListResponse<Filter>>('filters')
    }

    createFilter(data: FilterWithoutId) {
        return httpClient.post<SingleResponse<Filter> | ResponseError<Filter>>('filters', data)
    }

    getFilter(id: Get<Filter, "id">) {
        return httpClient.get<SingleResponse<Filter>>(`filters/${id}`)
    }

    updateFilter(filter: Filter) {
        return httpClient.put<SingleResponse<Filter> | ResponseError<Filter>>(`filters/${filter.id}`, filter)
    }
}

export const api = new Api();
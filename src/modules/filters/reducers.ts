import { createEntityAdapter, ActionReducerMapBuilder, EntityState } from "@reduxjs/toolkit"
import { Filter } from "../../models/filter";
import { createFilterAsync, getFilterByIdAsync, getFiltersAsync, updateFilterAsync } from "./actions"

interface FiltersState extends EntityState<Filter> { }

const filtersAdapter = createEntityAdapter<Filter>()

function getFiltersAsyncReducer(builder: ActionReducerMapBuilder<FiltersState>) {
    builder.addCase(getFiltersAsync.fulfilled, filtersAdapter.upsertMany);
}

function createFilterAsyncReducer(builder: ActionReducerMapBuilder<FiltersState>) {
    builder.addCase(createFilterAsync.fulfilled, filtersAdapter.upsertOne)
}

function getFilterByIdAsyncReducer(builder: ActionReducerMapBuilder<FiltersState>){
    builder.addCase(getFilterByIdAsync.fulfilled, filtersAdapter.upsertOne)
}

function updateFilterAsyncReducer(buildser: ActionReducerMapBuilder<FiltersState>) {
    buildser.addCase(updateFilterAsync.fulfilled, filtersAdapter.upsertOne)
}

export type { FiltersState }
export { 
    filtersAdapter, 
    getFiltersAsyncReducer, 
    createFilterAsyncReducer, 
    getFilterByIdAsyncReducer,
    updateFilterAsyncReducer
}
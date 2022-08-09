import { createSlice } from "@reduxjs/toolkit"
import { FILTERS_SLICE_NAME } from "./actions";
import {
    createFilterAsyncReducer,
    filtersAdapter,
    getFilterByIdAsyncReducer,
    getFiltersAsyncReducer,
    updateFilterAsyncReducer
} from "./reducers";

const initialState = filtersAdapter.getInitialState();

const { reducer } = createSlice({
    name: FILTERS_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: function (builder) {
        getFiltersAsyncReducer(builder)
        createFilterAsyncReducer(builder)
        getFilterByIdAsyncReducer(builder)
        updateFilterAsyncReducer(builder)
    }
})

export default reducer

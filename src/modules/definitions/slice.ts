import { createSlice } from "@reduxjs/toolkit"
import { DEFINTIONS_SLICE_NAME } from "./actions"
import { definitionsAdapter, getDefinitionsAsyncReducer } from "./reducers"

const initialState = definitionsAdapter.getInitialState();

const { reducer } = createSlice({
    name: DEFINTIONS_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: function(builder){
        getDefinitionsAsyncReducer(builder)
    }
})

export default reducer

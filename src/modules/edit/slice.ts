import { createSlice } from "@reduxjs/toolkit"
import { EDIT_SLICE_NAME } from "./actions"
import { editIdReducer, EditState } from "./reducers"

const initialState: EditState = {
    editId: undefined
}

const { reducer } = createSlice({
    name: EDIT_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: function(builder){
        editIdReducer(builder)
    }
})

export default reducer

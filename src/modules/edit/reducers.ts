import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { Filter } from "../../models/filter"
import { removeEditId, setEditId } from './actions';

interface EditState { 
    editId: Get<Filter, 'id'> | undefined;
}

function editIdReducer(builder: ActionReducerMapBuilder<EditState>){
    builder.addCase(setEditId, (state, action) => {
        state.editId = action.payload
    })

    builder.addCase(removeEditId, (state) => {
        state.editId = undefined
    })
}

export type { EditState }
export { editIdReducer }
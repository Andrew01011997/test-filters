import { createSelector } from '@reduxjs/toolkit'
import { selectFilterById } from '../filters/selectors';
import { RootStore } from "../store"
import { EDIT_SLICE_NAME } from "./actions"


const _selectEditState = (store: RootStore) => store[EDIT_SLICE_NAME];

const selectEditId = createSelector(
    _selectEditState,
    (state) => state.editId
)

const selectEditFilter = createSelector(
    selectEditId,
    (root: RootStore) => root,
    (id, state) => id ? selectFilterById(id)(state) : undefined
)


export { selectEditId, selectEditFilter }

import { createAction } from '@reduxjs/toolkit'
import { Filter } from '../../models/filter'

const EDIT_SLICE_NAME = "edit"

const setEditId = createAction<Get<Filter, 'id'>>(`${EDIT_SLICE_NAME}/setEditId`)

const removeEditId = createAction(`${EDIT_SLICE_NAME}/removeEditId`)

export { EDIT_SLICE_NAME, setEditId, removeEditId }
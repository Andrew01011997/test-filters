import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api'
import { ResponseStatus } from '../../models/response'

const DEFINITIONS_SLICE_NAME = "definitions"

const getDefinitionsAsync = createAsyncThunk(
    `${DEFINITIONS_SLICE_NAME}/getDefinitionsAsync`,
    async (_, { rejectWithValue }) => {
        const response = await api.getDefinitions()

        if(response.data.status !== ResponseStatus.SUCCESS)
            return rejectWithValue(response.data)

        return response.data.data
    }
)

export { DEFINITIONS_SLICE_NAME as DEFINTIONS_SLICE_NAME, getDefinitionsAsync }
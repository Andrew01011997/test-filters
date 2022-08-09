import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api'
import { Filter, FilterWithoutId } from '../../models/filter'
import { ResponseStatus } from '../../models/response'

const FILTERS_SLICE_NAME = "filters"

const getFiltersAsync = createAsyncThunk(
    `${FILTERS_SLICE_NAME}/getFiltersAsync`,
    async (_, { rejectWithValue }) => {
        const response = await api.getFilters()

        if (response.data.status !== ResponseStatus.SUCCESS)
            return rejectWithValue(response.data)

        return response.data.data
    }
)

const createFilterAsync = createAsyncThunk(
    `${FILTERS_SLICE_NAME}/createFilterAsync`,
    async (data: FilterWithoutId, { rejectWithValue }) => {
        const response = await api.createFilter(data)

        if (response.data.status !== ResponseStatus.SUCCESS)
            return rejectWithValue(response.data)

        return response.data.data
    }
)

const getFilterByIdAsync = createAsyncThunk(
    `${FILTERS_SLICE_NAME}/getFilterByIdAsync`,
    async (id: Get<Filter, "id">, { rejectWithValue }) => {
        const response = await api.getFilter(id)

        if (response.data.status !== ResponseStatus.SUCCESS)
            return rejectWithValue(response.data)

        return response.data.data
    }
)

const updateFilterAsync = createAsyncThunk(
    `${FILTERS_SLICE_NAME}/updateFilterAsync`,
    async (data: Filter, { rejectWithValue }) => {
        const response = await api.updateFilter(data)

        if (response.data.status !== ResponseStatus.SUCCESS)
            return rejectWithValue(response.data)

        return response.data.data
    }
)

export {
    FILTERS_SLICE_NAME,
    getFiltersAsync,
    createFilterAsync,
    getFilterByIdAsync,
    updateFilterAsync
}
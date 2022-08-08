import { createSelector } from "@reduxjs/toolkit"
import { Filter } from "../../models/filter";
import { RootStore } from "../store"
import { FILTERS_SLICE_NAME } from "./actions";
import { filtersAdapter } from "./reducers";

type FilterId = Get<Filter, "id">
type FiltersState = ReturnType<typeof _selectFiltersState>

const { selectAll, selectById } = filtersAdapter.getSelectors()

const _selectFiltersState = (store: RootStore) => store[FILTERS_SLICE_NAME];
const _selectFilterById = (id: FilterId) => (state: FiltersState) => selectById(state, id);

const selectAllFilters = createSelector(
    _selectFiltersState,
    selectAll
)

const selectFilterById = (id: FilterId) => createSelector(
    _selectFiltersState,
    _selectFilterById(id)
)

export { selectAllFilters, selectFilterById }

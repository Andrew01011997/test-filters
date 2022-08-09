import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import { DEFINTIONS_SLICE_NAME } from "./definitions/actions";
import { FILTERS_SLICE_NAME } from "./filters/actions";

import definitions from './definitions/slice'
import filters from './filters/slice'

export const store = configureStore({
    reducer: combineReducers({
        [DEFINTIONS_SLICE_NAME]: definitions,
        [FILTERS_SLICE_NAME]: filters
    })
})

type RootStore = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootStore, AppDispatch }

import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import { DEFINTIONS_SLICE_NAME } from "./definitions/actions";
import definitions from './definitions/slice'

export const store = configureStore({
    reducer: combineReducers({
        [DEFINTIONS_SLICE_NAME]: definitions
    })
})

type RootStore = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type { RootStore, AppDispatch }

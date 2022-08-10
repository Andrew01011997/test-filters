import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { DEFINTIONS_SLICE_NAME } from "./definitions/actions";
import { FILTERS_SLICE_NAME } from "./filters/actions";
import { EDIT_SLICE_NAME } from "./edit/actions";

import definitions from './definitions/slice'
import filters from './filters/slice'
import edit from './edit/slice'

export const store = configureStore({
    reducer: combineReducers({
        [DEFINTIONS_SLICE_NAME]: definitions,
        [FILTERS_SLICE_NAME]: filters,
        [EDIT_SLICE_NAME]: edit
    })
})

type RootStore = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;


export type { RootStore, AppDispatch }

import { useReducer } from "react";

export function useToggle(initialState = false){
    return useReducer((prev) => !prev, initialState)
}
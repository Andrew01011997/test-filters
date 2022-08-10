import { useEffect } from "react";
import { getFiltersAsync } from "../modules/filters/actions";
import { selectAllFilters } from "../modules/filters/selectors";
import { useAppDispatch, useAppSelector } from "../modules/store";

let isRequestInProcess = false;

export function useFilters() {
    const dispatch = useAppDispatch()
    const filters = useAppSelector(selectAllFilters)


    useEffect(() => {
        if (!filters.length && !isRequestInProcess) {
            isRequestInProcess = true;

            dispatch(getFiltersAsync())
                .finally(() => {
                    isRequestInProcess = false
                })
        }
    }, [filters.length, dispatch])

    return filters
}
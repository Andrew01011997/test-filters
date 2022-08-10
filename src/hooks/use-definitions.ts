import { useEffect } from "react";
import { getDefinitionsAsync } from "../modules/definitions/actions";
import { selectAllDefinitions } from "../modules/definitions/selectors";
import { useAppDispatch, useAppSelector } from "../modules/store";

let isRequestInProcess = false;

export function useDefinitions() {
    const dispatch = useAppDispatch()
    const definitions = useAppSelector(selectAllDefinitions)

    useEffect(() => {
        if (!definitions.length && !isRequestInProcess) {
            isRequestInProcess = true;

            dispatch(getDefinitionsAsync())
                .finally(() => {
                    isRequestInProcess = false
                })
        }
    }, [definitions.length, dispatch])

    return definitions
}
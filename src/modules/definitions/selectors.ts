import { createSelector } from "@reduxjs/toolkit"
import { Definition } from "../../models/definition";
import { RootStore } from "../store"
import { DEFINTIONS_SLICE_NAME } from "./actions"
import { definitionsAdapter } from "./reducers";

type DefinitionId = Get<Definition, "id">
type DefinitionsState = ReturnType<typeof _selectDefinitionsState>

const { selectAll, selectById } = definitionsAdapter.getSelectors()

const _selectDefinitionsState = (store: RootStore) => store[DEFINTIONS_SLICE_NAME];
const _selectDefinitionById = (id: DefinitionId) => (state: DefinitionsState) => selectById(state, id);

const selectAllDefinitions = createSelector(
    _selectDefinitionsState,
    selectAll
)

const selectDefinitionById = (id: DefinitionId) => createSelector(
    _selectDefinitionsState,
    _selectDefinitionById(id)
)

export { selectAllDefinitions, selectDefinitionById }

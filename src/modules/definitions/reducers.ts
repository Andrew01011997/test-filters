import { createEntityAdapter, ActionReducerMapBuilder, EntityState } from "@reduxjs/toolkit"
import { Definition } from "../../models/definition"
import { getDefinitionsAsync } from "./actions"

interface DefinitionsState extends EntityState<Definition> { }

const definitionsAdapter = createEntityAdapter<Definition>()

function getDefinitionsAsyncReducer(builder: ActionReducerMapBuilder<DefinitionsState>) {
    builder.addCase(getDefinitionsAsync.fulfilled, definitionsAdapter.upsertMany);
}

export type { DefinitionsState }
export { definitionsAdapter, getDefinitionsAsyncReducer }
import { Condition } from "./condition";

interface FilterWithoutId {
    name: string;
    conditions: Condition[];
}

interface Filter extends FilterWithoutId {
    id: string;
}

export type { FilterWithoutId, Filter }

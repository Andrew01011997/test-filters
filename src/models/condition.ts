import { DefinitionOperator } from "./definition";

export interface Condition {
    definitionId: string;
    operator: DefinitionOperator;
    value: string | number | Date;
}
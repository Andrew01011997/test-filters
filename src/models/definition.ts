const enum DefinitionType {
    TEXT = "Text",
    NUMBERS = "Numeric",
    DATE = "Date"
}

const enum DefinitionOperator {
    EQUAL = "eq",
    GREATER_THAN = "gt",
    LOWER_THAN = "lt",
    BETWEEN = "between"
}

interface Definition {
    id: string;
    label: string;
    type: DefinitionType;
    operators: DefinitionOperator[];
    defaultValue: null;
}

export type { Definition, DefinitionType, DefinitionOperator }
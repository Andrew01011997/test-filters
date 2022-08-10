import { useMemo } from "react";
import { useDefinitions } from "../../hooks/use-definitions";
import { Definition, DefinitionOperator } from "../../models/definition";
import { Filter } from "../../models/filter";

const OPERATORS = {
    [DefinitionOperator.EQUAL]: 'is equal',
    [DefinitionOperator.GREATER_THAN]: 'greater than',
    [DefinitionOperator.LOWER_THAN]: 'lower than',
    [DefinitionOperator.BETWEEN]: 'between'
}

function getDefinitionLabelById(definitions: Definition[]) {
    return function (id: Get<Definition, "id">) {
        return definitions.find((def) => def.id === id)?.label || "[no-label-found]"
    }
}

interface Props {
    conditions: Get<Filter, 'conditions'>
}

export function HumanReadableConditions({ conditions }: Props) {
    const definitions = useDefinitions()

    const text = useMemo(() => {
        if (!conditions.length)
            return ['no-conditions']

        const getLabel = getDefinitionLabelById(definitions);

        return conditions.map((cond) => {
            const label = getLabel(cond.definitionId)
            const operator = OPERATORS[cond.operator]
            const value = Array.isArray(cond.value) ? cond.value.join(' and ') : cond.value

            return [label, operator, value].join(' ')
        })

    }, [conditions, definitions])

    return <span className="whitespace-pre-line">{text.join('\n')}</span>
}
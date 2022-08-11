import { useField } from 'formik';
import { useAppSelector } from "../../modules/store";
import { selectDefinitionById } from "../../modules/definitions/selectors";
import { useMemo } from "react";
import { DefinitionOperator } from "../../models/definition";
import { SelectField } from "../../components/select/select-field";

const definitionName = "definitionId"

const OPERATORS = {
    [DefinitionOperator.EQUAL]: "Equal",
    [DefinitionOperator.GREATER_THAN]: "Greater than",
    [DefinitionOperator.LOWER_THAN]: "Lower than",
    [DefinitionOperator.BETWEEN]: "Between",
}

interface Props {
    index: number;
}

export function DefinitionOperatorsSelect({ index }: Props) {
    const [{ value: definitionValue }] = useField(`conditions.${index}.${definitionName}`)
    const definition = useAppSelector(selectDefinitionById(definitionValue))

    const options = useMemo(() => {
        if (definition) {
            return definition.operators.map(op => ({ value: op, label: OPERATORS[op] }))
        }
    }, [definition])

    if (!options)
        return null

    return <SelectField name={`conditions.${index}.operator`} label="Operation" options={options} />
}
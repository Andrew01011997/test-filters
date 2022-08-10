import { useField } from 'formik';
import { useAppSelector } from "../../../modules/store";
import { selectDefinitionById } from "../../../modules/definitions/selectors";
import { DefinitionOperator, DefinitionType } from "../../../models/definition";
import { InputField } from '../../../components/input/input-field';
import { DatePickerField } from '../../../components/date-picker/date-picker-field';
import { betweenHOK } from './between-operator-hok';
import { useMemo } from 'react';
import { InputNumberField } from '../../../components/input/input-number-field';

const operatorName = "operator"
const definitionName = "definitionId"

const BASE_STRATEGY = {
    [DefinitionType.TEXT]: InputField,
    [DefinitionType.DATE]: DatePickerField,
    [DefinitionType.NUMBERS]: InputNumberField,
}

const STRATEGIES = {
    [DefinitionOperator.EQUAL]: BASE_STRATEGY,
    [DefinitionOperator.GREATER_THAN]: BASE_STRATEGY,
    [DefinitionOperator.LOWER_THAN]: BASE_STRATEGY,
    [DefinitionOperator.BETWEEN]: {
        [DefinitionType.DATE]: betweenHOK(DefinitionType.DATE),
        [DefinitionType.TEXT]: betweenHOK(DefinitionType.TEXT),
        [DefinitionType.NUMBERS]: betweenHOK(DefinitionType.NUMBERS),
    }
}

interface Props {
    index: number;
}

export function DefinitionOperatorValue({ index }: Props) {
    const [{ value }] = useField(`conditions.${index}.${operatorName}`)
    const [{ value: definitionValue }] = useField(`conditions.${index}.${definitionName}`)
    const definition = useAppSelector(selectDefinitionById(definitionValue))

    const Component = useMemo(() =>
        definition && value ? STRATEGIES[value as DefinitionOperator][definition.type] : null,
        [value, definition])


    if (!Component)
        return null;

    return <Component name={`conditions.${index}.value`} label="Value" />
}
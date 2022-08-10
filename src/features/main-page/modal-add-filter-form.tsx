import { useFormikContext, FieldArray } from 'formik'
import { Dispatch } from 'react';
import { InputField } from '../../components/input/input-field';
import { SelectField } from "../../components/select/select-field";
import { useDefinitions } from "../../hooks/use-definitions";
import { FilterWithoutId } from '../../models/filter';
import { makeOptions } from "../../utils/make-options";
import { DefinitionOperatorValue } from './definition-operator-value/definition-operator-value';
import { DefinitionOperatorsSelect } from './definition-operators-select';

interface Props {
    onRemoveCondition: Dispatch<number>
}

export function ModalAddFilterForm({ onRemoveCondition }: Props) {
    const definitions = useDefinitions()
    const { values } = useFormikContext<FilterWithoutId>()

    return (
        <>
            <InputField name="name" label="Name" className='flex-1' />
            <FieldArray
                name="friends"
                render={() =>
                    values.conditions.map((_, idx) =>
                    (
                        <div key={idx} className="flex flex-row border-t border-gray-700/25 mt-4 pt-4">
                            <div className='flex-1'>
                                <SelectField
                                    name={`conditions.${idx}.definitionId`}
                                    label="Condition Type"
                                    options={makeOptions(definitions ?? [])}
                                />
                                <DefinitionOperatorsSelect index={idx} />
                                <DefinitionOperatorValue index={idx} />
                            </div>
                            <div className='flex items-center'>
                                <span
                                    onClick={() => onRemoveCondition(idx)}
                                    className="py-1 px-2 rounded-full bg-red-200 text-red-700 hover:bg-red-600 hover:text-white cursor-pointer"
                                >
                                    Remove
                                </span>
                            </div>
                        </div>
                    ))}
            />
        </>
    )
}


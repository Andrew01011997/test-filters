import { useFormik, FormikProvider, FieldArray } from 'formik'
import { useCallback, useState } from 'react';
import { Button } from "../../components/button/button";
import { InputField } from '../../components/input/input-field';
import { Modal } from "../../components/modal/modal";
import { SelectField } from "../../components/select/select-field";
import { useDefinitions } from "../../hooks/use-definitions";
import { Filter, FilterWithoutId } from '../../models/filter';
import { createFilterAsync, updateFilterAsync } from '../../modules/filters/actions';
import { useAppDispatch } from '../../modules/store';
import { makeOptions } from "../../utils/make-options";
import { DefinitionOperatorValue } from './definition-operator-value/definition-operator-value';
import { DefinitionOperatorsSelect } from './definition-operators-select';

type Condition = Partial<Get<FilterWithoutId, 'conditions'>[number]>

interface Values {
    name: string;
    conditions: Condition[];
}

const INITIAL_CONDITION: Condition = { value: "", definitionId: undefined, operator: undefined }

interface Props {
    isOpen: boolean;
    onClose: VoidFunction;
    editFilter?: Filter;
}

export function ModalAddFilter({ isOpen, onClose, editFilter }: Props) {
    const dispatch = useAppDispatch()
    const definitions = useDefinitions()
    const [initialValues, setInitialValues] = useState(editFilter ?? { name: "", conditions: [INITIAL_CONDITION] })

    const formik = useFormik<Values>({
        initialValues,
        enableReinitialize: true,
        onSubmit: (val, helpers) => {
            let dispatchedAction;
            if(editFilter !== undefined){
                dispatchedAction = dispatch(updateFilterAsync({...editFilter, ...val} as Filter))
            }
            dispatchedAction = dispatch(createFilterAsync(val as FilterWithoutId))

            dispatchedAction
                .unwrap()
                .then(() => {
                    onClose();
                    helpers.resetForm({ values: { name: "", conditions: [INITIAL_CONDITION] } })
                })
        }
    })

    function onAddCondition() {
        setInitialValues({ ...formik.values, conditions: [...formik.values.conditions, INITIAL_CONDITION] })
    }

    const handleCLose = useCallback(() => {
        formik.resetForm({ values: { name: "", conditions: [INITIAL_CONDITION] } })
        onClose()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onClose, formik.resetForm])

    return (
        <Modal isOpen={isOpen} onClose={handleCLose}>
            <div className="flex flex-row justify-end">
                <Button onClick={formik.submitForm}>Save</Button>
            </div>
            <FormikProvider value={formik}>
                <InputField name="name" label="Name" className='flex-1' />
                <FieldArray
                    name="friends"
                    render={() =>
                        formik.values.conditions.map((_, idx) =>
                        (
                            <div key={idx} className="border-t border-gray-700/25 mt-4 pt-4">
                                <SelectField
                                    name={`conditions.${idx}.definitionId`}
                                    label="Condition Type"
                                    options={makeOptions(definitions ?? [])}
                                />
                                <DefinitionOperatorsSelect index={idx} />
                                <DefinitionOperatorValue index={idx} />
                            </div>
                        ))}
                />

            </FormikProvider>
            <div className="flex flex-row justify-center mt-9">
                <Button onClick={onAddCondition}>Add one more condition</Button>
            </div>
        </Modal>
    )
}


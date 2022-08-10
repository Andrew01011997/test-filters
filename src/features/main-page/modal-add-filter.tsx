import { useFormik, FormikProvider, FormikHelpers } from 'formik'
import { useCallback, useEffect, useState } from 'react';
import { Button } from "../../components/button/button";
import { Modal } from "../../components/modal/modal";
import { Filter, FilterWithoutId } from '../../models/filter';
import { removeEditId } from '../../modules/edit/actions';
import { createFilterAsync, updateFilterAsync } from '../../modules/filters/actions';
import { useAppDispatch } from '../../modules/store';
import { ModalAddFilterForm } from './modal-add-filter-form';

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
    const [initialValues, setInitialValues] = useState({ name: "", conditions: [INITIAL_CONDITION] })

    const onSubmit = useCallback((values: Values, helpers: FormikHelpers<Values>) => {
        let dispatchedAction;
        if(editFilter !== undefined){
            dispatchedAction = dispatch(updateFilterAsync({...editFilter, ...values} as Filter))
        }
        dispatchedAction = dispatch(createFilterAsync(values as FilterWithoutId))

        dispatchedAction
            .unwrap()
            .then(() => {
                onClose();
                helpers.resetForm({ values: { name: "", conditions: [INITIAL_CONDITION] } })
                if(editFilter !== undefined){
                    dispatch(removeEditId())
                }
            })
    }, [editFilter, dispatch, onClose])

    const formik = useFormik<Values>({
        initialValues,
        enableReinitialize: true,
        onSubmit
    })

    function onAddCondition() {
        setInitialValues({ ...formik.values, conditions: [...formik.values.conditions, INITIAL_CONDITION] })
    }

    const handleClose = useCallback(() => {
        formik.resetForm({ values: { name: "", conditions: [INITIAL_CONDITION] } })
        onClose()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onClose, formik.resetForm])

    const handleRemoveCondition = useCallback((idx: number) => {
        const prev = formik.values
        setInitialValues({...prev, conditions: prev.conditions.filter((_, index) => idx !== index) })
    }, [formik.values, setInitialValues])

    useEffect(() => {
        if(editFilter){
            setInitialValues(editFilter)
        }
    }, [editFilter])

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <div className="flex flex-row justify-end">
                <Button onClick={formik.submitForm}>Save</Button>
            </div>
            <FormikProvider value={formik}>
               <ModalAddFilterForm onRemoveCondition={handleRemoveCondition} />
            </FormikProvider>
            <div className="flex flex-row justify-center mt-9">
                <Button onClick={onAddCondition}>Add one more condition</Button>
            </div>
        </Modal>
    )
}


import { useFormik, FormikProvider, FormikHelpers } from 'formik'
import { useCallback, useEffect, useState } from 'react';
import * as yup from 'yup';
import { Button } from "../../components/button/button";
import { Modal } from "../../components/modal/modal";
import { DefinitionOperator } from '../../models/definition';
import { Filter, FilterWithoutId } from '../../models/filter';
import { removeEditId } from '../../modules/edit/actions';
import { createFilterAsync, updateFilterAsync } from '../../modules/filters/actions';
import { useAppDispatch } from '../../modules/store';
import { NotificationService } from '../../services/notification-service';
import { ModalAddFilterForm } from './modal-add-filter-form';


type Condition = Partial<Get<FilterWithoutId, 'conditions'>[number]>

interface Values {
    name: string;
    conditions: Condition[];
}

const validationSchema = yup.object().shape({
    name: yup.string().required('This is a required field'),
    conditions: yup.array(yup.object().shape({
        definitionId: yup.string().required('This is a required field').not([null], 'This is a required field').nullable(),
        operator: yup.string().required('This is a required field').not([null], 'This is a required field').nullable(),
        value: yup.lazy((_, { parent }) => (
            parent.operator === DefinitionOperator.BETWEEN ?
                yup.array(yup.mixed().required('This is a required field'))
                : yup.string().required('This is a required field')
        ))
    }))
})


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

        if (editFilter !== undefined) {
            dispatchedAction = dispatch(updateFilterAsync({ ...editFilter, ...values } as Filter))
        } else {
            dispatchedAction = dispatch(createFilterAsync(values as FilterWithoutId))
        }
        dispatchedAction
            .unwrap()
            .then(() => {
                onClose();
                helpers.resetForm({ values: { name: "", conditions: [INITIAL_CONDITION] } })
                if (editFilter !== undefined) {
                    dispatch(removeEditId())
                    NotificationService.success("Filter successully updated")
                    return
                }
                NotificationService.success("Filter successully created")
            })
            .catch((e: any) => {
                console.log(e)
                NotificationService.error(`Error while creating filter\n ${JSON.stringify(e.fieldErrors)}`)
            })
    }, [editFilter, dispatch, onClose])

    const formik = useFormik<Values>({
        initialValues,
        enableReinitialize: true,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        validateOnChange: true,
    })

    function onAddCondition() {
        const conditions = formik.values.conditions
        formik.setFieldValue('conditions', [...conditions, INITIAL_CONDITION])
    }

    const handleClose = useCallback(() => {
        formik.resetForm({ values: { name: "", conditions: [INITIAL_CONDITION] } })
        onClose()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onClose, formik.resetForm])

    const handleRemoveCondition = useCallback((idx: number) => {
        const conditions = formik.values.conditions
        formik.setFieldValue('conditions', conditions.filter((_, i) => i !== idx))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.conditions, formik.setFieldValue])

    useEffect(() => {
        if (editFilter) {
            setInitialValues(editFilter)
        }
    }, [editFilter])

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <div className="flex flex-row justify-end">
                <Button disabled={!formik.isValid} onClick={formik.submitForm}>Save</Button>
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


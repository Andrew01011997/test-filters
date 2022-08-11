import { useField } from 'formik';
import { useCallback, useMemo } from 'react';
import { FieldError } from '../field-error/field-error';
import { Select } from "./select";

interface Props extends PropsOf<typeof Select> {
    name: string;
}

export function SelectField({ name, ...props }: Props) {
    const [{ value, ...p }, { error, touched }, { setValue, setTouched }] = useField(name)

    const hasError = Boolean(error && touched)

    const selectedOption = useMemo(() => {
        if (value && props.options?.length) {
            return props.options.find(opt => (opt as { value: string | number }).value === value)
        }
        return null;
    }, [value, props.options])

    const setFieldValue = useCallback((opt: unknown) => {
        setValue((opt as { value: string | number })?.value ?? null)
    }, [setValue])

    return (
        <FieldError touched={touched} error={error}>
            <Select
                {...p}
                onBlur={() => setTouched(true)}
                {...props}
                hasError={hasError}
                value={selectedOption}
                defaultValue={selectedOption}
                onChange={setFieldValue}
            />
        </FieldError>
    )
}
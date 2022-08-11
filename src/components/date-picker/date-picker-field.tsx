import { DatePicker } from "./date-picker";
import { useField } from 'formik';
import { FieldError } from "../field-error/field-error";

interface Props extends Omit<PropsOf<typeof DatePicker>, 'onSelect' | 'disabled'> {
    name: string;
    disabled?: boolean;
}

export function DatePickerField({ name, ...props }: Props) {
    const [{ value }, { touched, error }, { setValue }] = useField(name)
    return (
        <FieldError touched={touched} error={error}>
            <DatePicker {...props} selected={new Date(value)} onSelect={setValue} />
        </FieldError>
    )
}
import { DatePicker } from "./date-picker";
import { useField } from 'formik';

interface Props extends Omit<PropsOf<typeof DatePicker>, 'onSelect' | 'disabled'> {
    name: string;
    disabled?: boolean;
}

export function DatePickerField({ name, ...props }: Props) {
    const [{ value }, , { setValue }] = useField(name)
    return <DatePicker {...props} selected={new Date(value)} onSelect={setValue} />
}
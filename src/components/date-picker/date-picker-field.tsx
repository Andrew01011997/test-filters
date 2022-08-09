import { DatePicker } from "./date-picker";

interface Props extends PropsOf<typeof DatePicker>{
    name: string;
}

export function DatePickerField({ name, ...props }: Props){
    return <DatePicker {...props} />
}
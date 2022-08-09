import { Select } from "./select";

interface Props extends PropsOf<typeof Select> {
    name: string;
}

export function SelectField({name, ...props}: Props) {
    
    return <Select {...props} />
}
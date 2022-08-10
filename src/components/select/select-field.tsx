import { useField } from 'formik';
import { useMemo } from 'react';
import { Select } from "./select";

interface Props extends PropsOf<typeof Select> {
    name: string;
}

export function SelectField({ name, ...props }: Props) {
    const [{ value }, , { setValue }] = useField(name)

    console.log(name, value)

    const selectedOption = useMemo(() => {
        if (value && props.options?.length) {
            return props.options.find(opt => (opt as { value: string | number }).value === value)
        }
        return null;
    }, [value, props.options])

    return (
        <Select
            {...props}
            value={selectedOption}
            defaultValue={selectedOption}
            onChange={(opt: unknown) => setValue((opt as { value: string | number })?.value ?? null)}
        />
    )
}
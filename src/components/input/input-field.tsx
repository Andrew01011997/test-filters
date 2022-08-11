import { HTMLProps } from "react";
import { useField } from 'formik';
import { FieldError } from "../field-error/field-error";

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'selected'> {
    name: string;
    label?: string
}

export function InputField({ name, className, label, ...props }: Props) {
    const [{ value, ...p }, { error, touched }] = useField(name)

    const showError = Boolean(error && touched)

    return (
        <FieldError touched={touched} error={error}>
            <div className='flex flex-col relative'>
                <div className='absolute ml-7 p-1 -mt-1.5 bg-white'>{label}</div>
                <input
                    {...p}
                    {...props}
                    defaultValue={value}
                    className={`flex-1 mx-3 my-2 rounded-md min-h-[38px] border border-gray-300 box-border px-2 ${showError ? 'border-red-500' : ''} ${className}`}
                />
            </div>
        </FieldError>
    )
}
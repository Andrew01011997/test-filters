import { HTMLProps } from "react";
import { useField } from 'formik';

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'selected'> {
    name: string;
    label?: string
}

export function InputField({ name, className, label, ...props }: Props) {
    const [{ value, ...p }] = useField(name)
    return (
        <div className='flex flex-col relative'>
            <div className='absolute ml-7 p-1 -mt-1.5 bg-white'>{label}</div>
            <input
                {...p}
                {...props}
                defaultValue={value}
                className={`flex-1 mx-3 my-2 rounded-md min-h-[38px] border border-gray-300 box-border px-2 ${className}`}
            />
        </div>

    )
}
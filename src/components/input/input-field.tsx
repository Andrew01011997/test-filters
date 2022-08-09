import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
    name: string;
}

export function InputField({ name, className, ...props }: Props) {
    return (
        <input
            {...props}
            className={`flex-1 mx-3 my-2 rounded-md min-h-[38px] border border-gray-300 box-border px-2 ${className}`}
        />
    )
}
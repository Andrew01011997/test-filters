import { HTMLAttributes } from "react";

const CLASSES = {
    base: 'border border-gray-300 hover:border-gray-500 rounded-md px-4 py-3 text-sm font-bold',
    disabled: 'opacity-30 select-none hover:border-gray-300'
}

interface Props extends HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}

export function Button({ className, disabled, onClick, ...props }: Props) {
    return (
        <button
            {...props}
            disabled={disabled}
            onClick={!disabled ? onClick : undefined}
            className={`${CLASSES.base} ${disabled ? CLASSES.disabled : ''} ${className}`}
        />
    )
}
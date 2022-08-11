import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    error?: string;
    touched?: boolean;
}

export function FieldError({ children, error, touched }: Props) {

    const hasError = Boolean(touched && error);
    
    return (
        <div>
            {children}
            {hasError && <span className="text-red-700 ml-3" >{error}</span>}
        </div>
    )
}
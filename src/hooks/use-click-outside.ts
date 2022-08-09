import { MutableRefObject, useEffect } from "react";

export function useClickOutside<E extends HTMLElement>(ref: MutableRefObject<E | null>, callback: VoidFunction) {
    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    })
}
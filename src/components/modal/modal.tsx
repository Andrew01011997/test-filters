import { MouseEvent, PropsWithChildren } from "react";
import { ModalOverlay } from "./modal-overlay";

interface Props extends PropsWithChildren {
    onClose: VoidFunction;
    isOpen: boolean;
}

function modalClickStopPropagation(e: MouseEvent) {
    e.stopPropagation()
}

export function Modal({ onClose, isOpen, children }: Props) {
    if (isOpen) {
        return (
            <ModalOverlay onClose={onClose}>
                <div className="w-1/2 my-9 min-w-[250px] bg-white rounded-xl p-4 overflow-y-scroll" onClick={modalClickStopPropagation}>
                    {children}
                </div>
            </ModalOverlay>
        )
    }

    return null
}
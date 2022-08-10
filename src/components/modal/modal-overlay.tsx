interface Props {
    onClose: VoidFunction;
    children: JSX.Element;
}

export function ModalOverlay({ onClose, children }: Props) {
    return (
        <div
            onClick={onClose}
            className="fixed h-screen w-screen bg-gray-700/30 flex flex-row justify-center"
        >
            {children}
        </div>
    )
}
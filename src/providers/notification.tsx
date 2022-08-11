import { PropsWithChildren } from "react"
import { ToastContainer } from "react-toastify"

export function NotificationProvider({ children }: PropsWithChildren) {
    return (
        <>
            <ToastContainer
                className="shadow-2xl"
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {children}
        </>
    )
}
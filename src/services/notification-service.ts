import { toast } from "react-toastify"

export class NotificationService {
    public static success(message: string | JSX.Element) {
        toast(message, { type: "success" })
    }

    public static error(message: string | JSX.Element) {
        toast(message, { type: "error" })
    }
}
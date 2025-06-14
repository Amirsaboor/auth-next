'use client'
import { useFormStatus } from "react-dom"
export default function SubmitButton({ title }) {
    const { pending } = useFormStatus()
    return (
        <div>
            <button type="submit" className="btn btn-primary w-100" disabled={pending}>
                {title}
                {pending && <div className="spinner-border spinner-border-sm ms-2"></div>}
            </button>
        </div>
    )
}

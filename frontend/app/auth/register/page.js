'use client'
import { register } from "@/actions/auth";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";


export default function Register() {
    const [state, formAction] = useFormState(register, {})
    const router = useRouter()
    console.log(state?.error);

    useEffect(() => {
        if (state?.error) toast.error(state.error)
        else if (state?.success) {
            toast.success(state.success)
            router.push('/')
        }
    }, [state])

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4 ">
                    <form action={formAction}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name :</label>
                            <input type="text" className="form-control" id="name" name="name" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email :</label>
                            <input type="email" className="form-control" id="email" name="email" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password :</label>
                            <input type="password" className="form-control" id="password" name="password" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password :</label>
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
                        </div>
                        <SubmitButton title={'Register'} />
                    </form>
                </div>
            </div>
        </div>
    )
}
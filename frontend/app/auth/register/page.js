'use client'
import { register } from "@/actions/auth";
import { useFormState } from "react-dom";


export default function Register() {
    const [state, formAction] = useFormState(register, {})
    console.log(state?.error);

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
                        <button type="submit" className="btn btn-primary w-100">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
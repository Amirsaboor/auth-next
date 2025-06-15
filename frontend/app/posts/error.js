'use client'
export default function Error({ error, reset }) {
    return (
        <div className="text-center">
            <h2>Somthing went wrong! - {error.message}</h2>
            <button className="btn btn-danger" onClick={() => reset()}>
                Try Again
            </button>
        </div>
    )
}


import Link from "next/link";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href="/" className="navbar-brand">
                    webprog.io
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" className="nav-link active">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/posts" className="nav-link">
                                Posts
                            </Link>
                        </li>
                    </ul>

                    <div className="d-flex">
                        <Link href="/auth/login" className="btn btn-sm btn-outline-secondary me-2">
                            Login
                        </Link>
                        <Link href="/auth/register" className="btn btn-sm btn-dark">
                            register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
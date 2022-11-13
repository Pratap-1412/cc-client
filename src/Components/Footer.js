import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const userAuth = localStorage.getItem('users');
    const adminAuth = localStorage.getItem('admins');
    return (
        <div>
            <section className="">
                <footer className="text-center text-white" style={{ "backgroundColor": "#0a4275" }}>
                    {
                        (userAuth || adminAuth) ?
                            <></> :
                            <div className="container p-4 pb-0">
                                <section className="">
                                    <p className="d-flex justify-content-center align-items-center">
                                        <span className="me-3">Register for free</span>
                                        <Link to='/signup' type="button" className="btn btn-outline-light btn-rounded">
                                            Sign up!
                                        </Link>
                                    </p>
                                </section>
                            </div>
                    }
                    <div className="text-center p-3" style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}>
                        Maintained by Abhay Pratap Mishra.
                    </div>
                </footer>
            </section>
        </div>
    )
}

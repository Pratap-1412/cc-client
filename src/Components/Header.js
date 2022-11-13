import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import ProfileIcon from './img-rsrc/profile-icon.png'
import Logo from './img-rsrc/logo.png'

export default function Header() {
    const adminAuth = localStorage.getItem('admins');
    const userAuth = localStorage.getItem('users');
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                            <img src={Logo} height={"40px"} width={"40px"} style={{ borderRadius: "50%" }} alt="" />
                        </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Resources</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="dropdown">
                            <Link className="link-secondary me-3" to='/notification'>
                                <i className="fas fa-bell"></i>
                            </Link>
                        </div>
                        <div className="dropdown">
                            <Link
                                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                to="/"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src={ProfileIcon}
                                    className="rounded-circle"
                                    height="25"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            </Link>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >

                                {
                                    (adminAuth || userAuth) ?
                                        <>
                                            <li>
                                                <Link className="dropdown-item" to="/profile">My profile</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" onClick={logout} to="/">Logout</Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <Link className="dropdown-item" to="/login">Sign In</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/signup">Sign Up</Link>
                                            </li>
                                        </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

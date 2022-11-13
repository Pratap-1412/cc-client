import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import ProfileIcon from './img-rsrc/profile-icon.png'


export default function Profile() {
    const [profile, setProfile] = useState([]);
    const adminAuth = localStorage.getItem('admins');
    const userAuth = localStorage.getItem('users');
    const key = localStorage.getItem('key');
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        if (adminAuth) {
            let result = await fetch("http://localhost:5000/admin-profile");
            result = await result.json();
            setProfile(result);
        }
        else if (userAuth) {
            let result = await fetch("http://localhost:5000/user-profile");
            result = await result.json();
            setProfile(result);

        }
    };
    return (
        <div>
            <Header />
            <section className="vh-100" style={{ "backgroundColor": "#f4f5f7" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" style={{ "borderRadius": ".5rem" }}>
                                {
                                    profile.map((item, index) =>
                                        (`"${item._id}"` === key) ?
                                            <div className="row g-0">
                                                <div className="col-md-4 gradient-custom text-center text-white"
                                                    style={{ "borderTopLeftRadius": ".5rem", "borderBottomLeftRadius": ".5rem" }}>
                                                    <img src={ProfileIcon}
                                                        alt="Avatar" className="img-fluid my-5" style={{ "width": "80px" }} />
                                                    <h5>{item.name}</h5>
                                                    <Link to={`/update-profile/${item._id}`}><i className="far fa-edit mb-5"></i></Link>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body p-4">
                                                        <h6>Information</h6>
                                                        <hr className="mt-0 mb-4" />
                                                        <div className="row pt-1">
                                                            <div className="col-6 mb-3">
                                                                <h6>Email</h6>
                                                                <p className="text-muted">{item.email}</p>
                                                            </div>
                                                            <div className="col-6 mb-3">
                                                                <h6>Phone</h6>
                                                                <p className="text-muted">{item.phone}</p>
                                                            </div>
                                                        </div>
                                                        <h6>Status:</h6>{adminAuth ? <>
                                                            Admin                                                     <hr className="mt-0 mb-4" />
                                                            <div className="row pt-1">
                                                                <Link to="/create-task">Create a Task?</Link>
                                                            </div></> : <>Student</>}
                                                    </div>
                                                </div>
                                            </div> : <></>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

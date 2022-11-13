import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'

export default function UpdateProfile() {
    const params = useParams();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    const adminAuth = localStorage.getItem('admins');
    useEffect(() => {
        getUserDetails();
    }, []);
    const getUserDetails = async () => {
        if (adminAuth) {
            let result = await fetch(`http://localhost:5000/update-admin-profile/${params.id}`)
            result = await result.json();
            setName(result.name);
            setEmail(result.email);
            setPhone(result.phone);
            setPassword(result.password);
        }
        else {
            let result = await fetch(`http://localhost:5000/update-user-profile/${params.id}`)
            result = await result.json();
            setName(result.name);
            setEmail(result.email);
            setPhone(result.phone);
            setPassword(result.password);
        }


    }

    const updateData = async () => {
        if ((name && email && phone && password) !== "") {
            if (adminAuth) {
                let result = await fetch(`http://localhost:5000/update-admin-profile/${params.id}`, {
                    method: 'Put',
                    body: JSON.stringify({name, email, phone, password }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                result = await result.json();
                localStorage.setItem('users', JSON.stringify(result));
                if (result) {
                    navigate(`/profile`);
                }
            }
            else {
                let result = await fetch(`http://localhost:5000/update-user-profile/${params.id}`, {
                    method: 'Put',
                    body: JSON.stringify({ name, email, phone, password }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                result = await result.json();
                localStorage.setItem('users', JSON.stringify(result));
                if (result) {
                    navigate(`/profile`);
                }
            }
            
            alert('Update completed successfully.')
        }
        else {
            alert("Please enter details !!!")
        }
    }
    return (
        <div>
            <Header />
            <section className="vh-100" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update your profile</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="number" id="form3Example5c" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example5c">Your Phone</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 my-3">
                                                    <button type="button" onClick={updateData} className="btn btn-primary btn-lg">Update</button>
                                                </div>
                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

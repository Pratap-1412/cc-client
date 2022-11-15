import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'

export default function Signup() {
  let [admin, setAdmin] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [key, setKey] = useState("");
  const [disable, setdisable] = useState(false);
  const navigate = useNavigate();
  const AsAdmin = () => {
    if (admin) {
      setAdmin(false);
    }
    else {
      setAdmin(true);
    }
  }

  const sendData = async () => {
    if (admin && key === process.env.REACT_APP_KEY) {
      setdisable(true);
      if ((name && password && email && phone) !== "") {
        console.log(name, email, phone, password);
        let result = await fetch("https://codingclubrrsimtservertrue.onrender.com/admin-signup", {
          method: 'POST',
          body: JSON.stringify({ name, email, phone, password }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        result = await result.json();
        localStorage.setItem('admins', JSON.stringify(result));
        localStorage.setItem('key', JSON.stringify(result._id));
        if (result) {
          navigate('/');
        }
        alert('Signup completed successfully.')
      }
      else {
        alert("Please enter details !!!")
      }
    }
    else if (!admin) {
      if ((name && password && email && phone) !== "") {
        console.log(name, email, phone, password);
        let result = await fetch("https://codingclubrrsimtservertrue.onrender.com/signup", {
          method: 'POST',
          body: JSON.stringify({ name, email, phone, password }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        result = await result.json();
        localStorage.setItem('users', JSON.stringify(result));
        localStorage.setItem('key', JSON.stringify(result._id));
        if (result) {
          navigate('/');
        }
        alert('Signup completed successfully.')
      }
      else {
        alert("Please enter details !!!")
      }
    }
    else {
      alert('Key is incorrect!')
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem('users');
    if (auth) {
      navigate('/');
    }
  })
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

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>

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

                        <div className="form-check form-switch">
                          <input className="form-check-input" onClick={AsAdmin} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">SignUp as Admin</label>
                        </div>

                        <div>
                          {
                            admin ?
                              <>
                                <div className="d-flex flex-row align-items-center mb-4 my-3">
                                  <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                  <div className="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4cd" className="form-control" value={key} onChange={(e) => setKey(e.target.value)} />
                                    <label className="form-label" htmlFor="form3Example4cd">Enter Key</label>
                                  </div>
                                </div>
                              </> :
                              <></>
                          }
                        </div>

                        {
                          disable ?
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 my-3">
                              <button type="button" onClick={sendData} className="btn btn-primary btn-lg" disabled>Signing Up...</button>
                            </div> :
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 my-3">
                              <button type="button" onClick={sendData} className="btn btn-primary btn-lg">Sign Up</button>
                            </div>
                        }
                        <div>
                          <Link to='/login'>Already a member? Sign In</Link>
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

import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'

export default function NUpdate() {
    const navigate = useNavigate();
    const params = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    useEffect(() => {
        getUserDetails();
    }, []);
    const getUserDetails = async () => {
        let result = await fetch(`http://localhost:5000/notification-list/${params.id}`)
        result = await result.json();
        setTitle(result.title);
        setDescription(result.description);
        setLink(result.link);

    }

    const updateData = async () => {
        if ((title && link && description) !== "") {
            console.log(title, description, link);
            let result = await fetch(`http://localhost:5000/notification-list/${params.id}`, {
                method: 'Put',
                body: JSON.stringify({ title, description, link }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            localStorage.setItem('users', JSON.stringify(result));
            if (result) {
                navigate(`/notification`);
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
            <section className="vh-100" style={{ "backgroundColor": "#2779e2" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">

                            <h1 className="text-white mb-4">Edit the task</h1>

                            <div className="card" style={{ "borderRadius": "15px" }}>
                                <div className="card-body">

                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Enter Title</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control form-control-lg" />

                                        </div>
                                    </div>

                                    <hr className="mx-n3" />

                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Enter Description</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter the description message"></textarea>

                                        </div>
                                    </div>
                                    <hr className="mx-n3" />

                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">

                                            <h6 className="mb-0">Link of Task</h6>

                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <input type="link" className="form-control form-control-lg" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Enter the link" />

                                        </div>
                                    </div>

                                    <hr className="mx-n3" />

                                    <div className="px-5 py-4">
                                        <button type="submit" onClick={updateData} className="btn btn-primary btn-lg">Done</button>
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

import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

export default function NUpload() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const sendData=async()=>{
        if ((title && description && link) !== "") {
            let result = await fetch("http://localhost:5000/create-task", {
              method: 'POST',
              body: JSON.stringify({ title, description, link}),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            result = await result.json();
            if (result) {
              navigate('/notification');
            }
            alert('Notification uploaded successfully.')
          }
    }
    return (
        <div>
            <Header />
            <section className="vh-100" style={{ "backgroundColor": "#2779e2" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">

                            <h1 className="text-white mb-4">Create a new task.</h1>

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
                                        <button type="submit" onClick={sendData} className="btn btn-primary btn-lg">Done</button>
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

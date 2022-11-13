import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
export default function Notification() {
    const adminAuth = localStorage.getItem('admins');
    const [notification, setNotification] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/notification-list/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getData();
        }
    }

    const getData = async () => {
        let result = await fetch("http://localhost:5000/notification-list");
        result = await result.json();
        setNotification(result);
    };
    return (
        <div>
            <Header />
            {

                notification.map((item, index) =>
                    <div className='container my-5'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href={`${item.link}`} type="button" className="btn btn-primary">Go to Contest</a>
                                {
                                    adminAuth ?
                                        <>
                                            <Link to={`/notification/${item._id}`}>
                                                <button
                                                    type="button"
                                                    className="btn btn-link btn-rounded btn-sm fw-bold mx-2"
                                                    data-mdb-ripple-color="dark"
                                                >
                                                    Edit
                                                </button>
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-rounded btn-sm fw-bold"
                                                data-mdb-ripple-color="dark"
                                                onClick={() => deleteProduct(item._id)}
                                            >
                                                Delete
                                            </button>
                                        </>
                                        : <></>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

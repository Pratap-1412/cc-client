import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
export default function Notification() {
    const adminAuth = localStorage.getItem('admins');
    const [notification, setNotification] = useState([]);
    const [loading, setLoading] = useState(false);
    const [del, setDel] = useState(false);
    useEffect(() => {
        getData();
    }, []);

    const deleteProduct = async (id) => {
        setDel(true);
        let result = await fetch(`https://coding-clubrrsimtserver.onrender.com/notification-list/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getData();
        }
    }

    const getData = async () => {
        let result = await fetch("https://coding-clubrrsimtserver.onrender.com/notification-list");
        result = await result.json();
        setNotification(result);
        if (result) {
            setLoading(true);
        }
    };
    return (
        <div>
            <Header />
            {
                loading ?
                    <div>
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
                    </div>:
                    <div className='my-5'>{<Spinner/>}</div>
            }
        </div>
    )
}

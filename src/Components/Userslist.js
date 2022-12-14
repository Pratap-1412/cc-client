import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProfileIcon from './img-rsrc/profile-icon.png';
import Spinner from './Spinner';

export default function Userlist() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        let result = await fetch("https://coding-clubrrsimtserver.onrender.com/userslist");
        result = await result.json();
        setUser(result);
        if (result) {
            setLoading(true);
        }

    };
    const deleteProduct = async (id) => {
        let result = await fetch(`https://coding-clubrrsimtserver.onrender.com/userslist/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getData();
        }
    }

    return (
        <div>
            <Header />
            {
                loading?
                <div className="my-5">
                <div className='container my-5'>
                    <table className="table align-middle mb-0 my-4 bg-white">
                        <thead className="bg-light">
                            <tr>
                                <th>S. No</th>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {
                            user.map((item, index) =>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="fw-normal mb-1">{1 + index}</p>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={ProfileIcon}
                                                    className="rounded-circle"
                                                    alt=""
                                                    style={{ hieght: "45px", width: "45px" }}
                                                />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">{item.name}</p>
                                                    <p className="text-muted mb-0">{item.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fw-normal mb-1">Student</p>
                                        </td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-rounded btn-sm fw-bold"
                                                data-mdb-ripple-color="dark"
                                                onClick={() => deleteProduct(item._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </div>:
            <div className='my-5'>{<Spinner/>}</div>
            }
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Userlist() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        let result = await fetch("http://localhost:5000/userslist");
        result = await result.json();
        setUser(result);

    };
    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/userslist/${id}`, {
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
            <div className="my-5">
                <div className='container my-5'>
                    <table className="table align-middle mb-0 my-4 bg-white">
                        <thead className="bg-light">
                            <tr>
                                <th>S. No</th>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Status</th>
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
                                                    src="https://mdbootstrap.com/img/new/avatars/18.jpg"
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
                                            <p className="fw-normal mb-1">Designer</p>
                                            <p className="text-muted mb-0">UI/UX</p>
                                        </td>
                                        <td>
                                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                                        </td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <Link to={`/userslist/${item._id}`}>
                                                <button
                                                    type="button"
                                                    className="btn btn-link btn-rounded btn-sm fw-bold"
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
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

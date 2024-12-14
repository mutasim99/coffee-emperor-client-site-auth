import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [user, setUser] = useState(loadedUsers)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffe-emperior-server-site.vercel.app/users/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = user.filter(u => u._id !== id)
                        setUser(remaining) 
                    })

            }
        });
    }





    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <h2 className='text-4xl font-extrabold text-center'>Users details</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>lastSignInTime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(user => <tr>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>
                                    <button className='btn'><MdModeEdit></MdModeEdit></button>
                                    <button className='btn ml-2' onClick={() => handleDelete(user._id)}><RxCross2></RxCross2></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
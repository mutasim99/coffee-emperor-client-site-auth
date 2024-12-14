import { FaRegEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeCurt = ({ coffe, coffeData, setCoffeData }) => {
    const { name, quantity, category, photo } = coffe;
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

                fetch(`https://coffe-emperior-server-site.vercel.app/coffe/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffe has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffeData.filter(coff => coff._id !== id)
                            setCoffeData(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-[#F5F4F1] shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex justify-between items-center w-full">
                    <div className="text-black">
                        <h2 className="">Name: {name}</h2>
                        <p>Availabe quantity: {quantity}</p>
                        <p>Category: {category}</p>
                    </div>

                    <div className="join join-vertical mr-3 ">
                        <button className="btn join-item mb-2 bg-[#D2B48C] text-black"> <FaRegEye></FaRegEye></button>
                        <Link to={`/update/${coffe._id}`}>
                            <button className="btn join-item mb-2 text-white bg-[#3C393B]"><MdEdit></MdEdit></button>
                        </Link>
                        <button className="btn join-item mb-2 text-white bg-[#EA4744]" onClick={() => handleDelete(coffe._id)}><RiDeleteBin4Fill></RiDeleteBin4Fill></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoffeCurt;
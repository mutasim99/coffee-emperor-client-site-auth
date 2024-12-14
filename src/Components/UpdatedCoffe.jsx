import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedCoffe = () => {
    const updatedCOffeData = useLoaderData()
    const {_id,name, quantity, supplier, taste, category, details, photo} = updatedCOffeData
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const coffeData = { name, quantity, supplier, taste, category, details, photo }
       
        fetch(`https://coffe-emperior-server-site.vercel.app/coffe/${_id}`,{
            method:"PUT",
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify(coffeData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success',
                    text: 'Information updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Hot'
                  })
            }
        })
    }
    
   
    return (
        <div className='max-w-6xl mx-auto my-10 bg-[#F4F3F0] p-10 rounded-xl'>
            <h2 className="text-3xl font-semibold text-center">Updated information of {name}</h2>
            <form onSubmit={handleUpdate}>
                <div className='flex flex-col md:flex-row my-4'>
                    <div className="form-control text-black w-full">
                        <label className="label">
                            <span className="label-text text-black">Name</span>
                        </label>
                        <input type="text" placeholder="Name" defaultValue={name} name='name' className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control text-black w-full ml-4">
                        <label className="label">
                            <span className="label-text text-black">Available qunatity</span>
                        </label>
                        <input type="text" placeholder='enter available quantity' defaultValue={quantity} name='quantity' className="input input-bordered bg-white" required />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row my-4'>
                    <div className="form-control text-black w-full">
                        <label className="label">
                            <span className="label-text text-black">Supplier</span>
                        </label>
                        <input type="text" placeholder="Enter supplier name" defaultValue={supplier} name='supplier' className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control text-black w-full ml-4">
                        <label className="label">
                            <span className="label-text text-black">Taste</span>
                        </label>
                        <input type="text" placeholder="enter coffee taste" defaultValue={taste} name='taste' className="input input-bordered bg-white" required />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row my-4'>
                    <div className="form-control text-black w-full">
                        <label className="label">
                            <span className="label-text text-black">category</span>
                        </label>
                        <input type="text" placeholder="enter category" defaultValue={category} name='category' className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control text-black w-full ml-4">
                        <label className="label">
                            <span className="label-text text-black">Dtails</span>
                        </label>
                        <input type="text" name='details' placeholder="enter coffee details" defaultValue={details}  className="input input-bordered bg-white" required />
                    </div>
                </div>
                <div className="form-control text-black w-full ">
                    <label className="label">
                        <span className="label-text text-black">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo url" defaultValue={photo} className="input input-bordered bg-white" required />
                </div>
                <input type="submit" value="Update" className='btn btn-block bg-[#D2B48C] text-black my-4' />
            </form>
        </div>
    );
};

export default UpdatedCoffe;
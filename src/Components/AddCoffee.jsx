import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleSubmit = e => {
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
         fetch('https://coffe-emperior-server-site.vercel.app/addCoffe',{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(coffeData)
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data);
            Swal.fire({
                title: 'Success',
                text: 'Coffe added successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
         })
    }
    return (
        <div className='max-w-6xl mx-auto my-10 bg-[#F4F3F0] p-10 rounded-xl'>
            <h2 className='text-4xl font-extrabold text-center  text-black'>Add new coffee</h2>
            <p className='text-gray-800 text-center mt-4'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row my-4'>
                    <div className="form-control text-black w-full">
                        <label className="label">
                            <span className="label-text text-black">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control text-black w-full ml-4">
                        <label className="label">
                            <span className="label-text text-black">Available qunatity</span>
                        </label>
                        <input type="text" placeholder='enter available quantity' name='quantity' className="input input-bordered bg-white" required />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row my-4'>
                    <div className="form-control text-black w-full">
                        <label className="label">
                            <span className="label-text text-black">Supplier</span>
                        </label>
                        <input type="text" placeholder="Enter supplier name" name='supplier' className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control text-black w-full ml-4">
                        <label className="label">
                            <span className="label-text text-black">Taste</span>
                        </label>
                        <input type="text" placeholder="enter coffee taste" name='taste' className="input input-bordered bg-white" required />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row my-4'>
                    <div className="form-control text-black w-full">
                        <label className="label">
                            <span className="label-text text-black">category</span>
                        </label>
                        <input type="text" placeholder="enter category" name='category' className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control text-black w-full ml-4">
                        <label className="label">
                            <span className="label-text text-black">Dtails</span>
                        </label>
                        <input type="text" name='details' placeholder="enter coffee details" className="input input-bordered bg-white" required />
                    </div>
                </div>
                <div className="form-control text-black w-full ">
                    <label className="label">
                        <span className="label-text text-black">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo url" className="input input-bordered bg-white" required />
                </div>
                <input type="submit" value="Submit" className='btn btn-block bg-[#D2B48C] text-black my-4' />
            </form>
        </div>
    );
};

export default AddCoffee;
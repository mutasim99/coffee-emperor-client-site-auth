import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const { createUsers, setUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(user);

        createUsers(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
                const createdAt = user?.metadata?.creationTime                
                const newUser = {name , photo, email, createdAt}


                fetch('https://coffe-emperior-server-site.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Acoount created successfully',
                                icon: 'success',
                                confirmButtonText: 'OK'
                              })
                        }

                        form.reset()
                    })
            })
            .catch(err => {
                console.log(err.message);
            })

    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full  max-w-sm  shrink-0 shadow-2xl">
                <form className="space-y-4 " onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium ">Name</label>
                        <input
                            type="text"

                            name="name"
                            className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-600 bg-opacity-50  border text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium ">Photo URL</label>
                        <input
                            type="text"

                            name="photo"
                            className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-600 bg-opacity-50  border text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your photoURL"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium ">Email Address</label>
                        <input
                            type="email"

                            name="email"
                            className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-600 bg-opacity-50  border text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div >
                        <label htmlFor="password" className="block text-sm font-medium ">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full  px-4 py-2 mt-1 rounded-lg bg-gray-600 bg-opacity-50  border text-white border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="password"
                            required
                        />

                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                        Register now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
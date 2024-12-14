import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate()

    const { signInUser, setUser } = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)

                const lastSignInTime = user?.metadata?.lastSignInTime
                const userInfo = { lastSignInTime, email }

                fetch('https://coffe-emperior-server-site.vercel.app/users', {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                if (result?.user) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Loggedin successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                navigate('/')
            })
            .catch(err => {
                console.log(err.message);
            })

    }

    return (
        <div className="flex mx-auto min-h-screen items-center justify-center">
            <div class="card bg-base-100 w-full  max-w-sm  shrink-0 shadow-2xl">
                <form class="card-body" onSubmit={handleSignIn}>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" class="input input-bordered" required />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <p>Don't have any account? <Link to='/register'>register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
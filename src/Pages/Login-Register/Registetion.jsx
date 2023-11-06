import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebaseConfig/firebase.config";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
// import { toast } from "react-toastify";

const Register = () => {

    const { loading } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    if(loading){
        return <div className="flex justify-center items-center h-[80vh]"><span className="loading loading-lg loading-spinner text-primary"></span></div>
    }
    
    const handleSignUp = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password);

        if (password.length < 6) {
            alert('password should be 6 charecter')
            return;
        }
        // passWord validation
        else if (!/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(password)) {
            alert('At least one uppercase charecter, one number and one special charecter must be added')
            return;
        }

        // Create User
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/')
                alert('User Created Success !')
                e.target.reset()
            })
            .catch(error => {
                alert(error.message)
            })
    }


    return (
        <div  className="hero h-auto bg-slate-200">
            <div className="h-auto my-12 flex items-center justify-center">
                <div className="border p-8 rounded-lg shadow-xl w-96 bg-white">
                    <h2 className="text-5xl text-center text-blue-600 font-extrabold mb-6">Sign Up</h2>

                    {/* Form */}
                    <form onSubmit={handleSignUp}>
                        {/* name Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-blue-600 text-base font-bold mb-2">Name</label>
                            <input
                                type="text" id="name"
                                name="name"
                                placeholder="Type Your Name" required
                                className="w-full px-3 py-2 border rounded-md bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-700" />
                        </div>
                        {/* PhotoURL Input */}
                        <div className="mb-4">
                            <label htmlFor="photo" className="block text-blue-600 text-base font-bold mb-2">Photo URL</label>
                            <input
                                type="text" id="photo"
                                name="photo"
                                placeholder="Type Your PhotoURL" required
                                className="w-full px-3 py-2 border rounded-md bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-700" />
                        </div>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-blue-600 text-base font-bold mb-2">Email</label>
                            <input
                                type="email" id="email"
                                name="email"
                                placeholder="Type Your Email" required
                                className="w-full px-3 py-2 border rounded-md bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-700" />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-blue-600 text-base font-bold mb-2">Password</label>
                            <div className="flex items-center">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password" placeholder="Type Your Password" required
                                    name="password" 
                                    className="relative w-full px-3 py-2 border rounded-md bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-700" />
                                <span className=" absolute ml-72" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye title="Hide"></FaEye> : <FaEyeSlash title="Show"></FaEyeSlash>
                                    }
                                </span>
                            </div>
                        </div>

                        {/* Sign In Button */}
                        <button type="submit" className="w-full bg-blue-500 text-white text-lg font-semibold p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                            Sign Up
                        </button>

                        <p className="mt-4">You already have an account? Go <Link to='/login' className="text-red-600 underline text-lg font-bold">SignIn</Link></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
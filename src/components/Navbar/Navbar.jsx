import { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successfully');
            })
            .catch(error => {
                toast.error(error.message);

            })
    }

    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg font-bold underline text-blue-800" : "text-lg font-bold"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/rooms"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg font-bold underline text-blue-800" : "text-lg font-bold"
            }
        >
            Rooms
        </NavLink>
        <NavLink
            to="/myBookings"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg font-bold underline text-blue-800" : "text-lg font-bold"
            }
        >
            My Bookings
        </NavLink>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown  z-40">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                
                <img className="lg:h-16 lg:w-48 hidden md:h-14 md:w-36 md:block" src='https://media.discordapp.net/attachments/1163919577130999870/1170396054223605931/hotel-logo-simple-illustration_434503-736.png?ex=6558e344&is=65466e44&hm=fe9399f15b83515992d9c3247cb02e0e403d08b6d8fae247ddb59fb28e1751bb&=' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    user ? <div className="flex items-center font-bold">
                        <p className="pl-3 text-sm">{user?.displayName}</p>
                        <img className="h-10 w-10 mx-2 rounded-full" src={user?.photoURL} alt="" />
                        <button onClick={handleLogOut} className="px-3 py-1 md:px-6 md:py-2 font-bold rounded-lg text-white bg-blue-600 shadow-md hover:bg-blue-700 cursor-pointer">SignOut</button>
                    </div>
                        :
                        <button>
                            <NavLink to='/login' className="px-3 py-1 md:px-6 md:py-2 font-bold rounded-lg text-white bg-blue-600 shadow-md hover:bg-blue-700 cursor-pointer">SignIn</NavLink>
                        </button>
                }

            </div>
            <div className="navbar-end  z-40 lg:hidden">
                {
                    user ? <>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                {
                                    user?.photoURL ?
                                        <img className="cursor-pointer h-10 w-10 mx-2 rounded-full" src={user?.photoURL} alt="" />

                                        :
                                        <FaRegUser></FaRegUser>
                                }
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    user && <li className="pl-3 pb-2 ">{user?.displayName}</li>
                                }
                                {
                                    user && <>
                                        <li className="pl-3 pb-2 ">{user?.email}</li>
                                        <button onClick={handleLogOut} className="px-3 py-1 md:px-6 md:py-2 font-bold rounded-lg text-white bg-blue-600 shadow-md hover:bg-blue-700 cursor-pointer">SignOut</button>
                                    </>

                                }
                            </ul>
                        </div>
                    </>
                        :
                        <button>
                            <NavLink to='/login' className="px-3 py-1 md:px-6 md:py-2 font-bold rounded-lg text-white bg-blue-600 shadow-md hover:bg-blue-700 cursor-pointer">SignIn</NavLink>
                        </button>
                }

            </div>
        </div>

    );
};

export default Navbar;
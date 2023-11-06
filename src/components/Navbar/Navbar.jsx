import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className=" h-16 w-48" src="https://media.discordapp.net/attachments/1163919577130999870/1170396054223605931/hotel-logo-simple-illustration_434503-736.png?ex=6558e344&is=65466e44&hm=fe9399f15b83515992d9c3247cb02e0e403d08b6d8fae247ddb59fb28e1751bb&=" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a></a> */}
                <NavLink to='/login' className="btn text-blue-800">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
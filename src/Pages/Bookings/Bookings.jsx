import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Bookings = () => {

    const { user, loading } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetch(`https://room-booking-server-bice.vercel.app/bookings/${user?.email}`, { credentials: "include" })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBookings(data)
            })
    }, [user?.email])

    let totalPrice = 0;
    useEffect(() => {
        // eslint-disable-next-line no-const-assign, react-hooks/exhaustive-deps
        bookings?.map(item => { totalPrice += item?.price })
        setTotal(totalPrice)
    }, [bookings])

    if (loading) {
        return <div className="flex justify-center items-center h-[80vh]"><span className="loading loading-lg loading-spinner text-primary"></span></div>
    }

    const handleDelete = id => {
        fetch(`https://room-booking-server-bice.vercel.app/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Booking cencel success!');
                    const remaining = bookings?.filter(item => item?._id !== id);
                    setBookings(remaining)
                }
            })
    }

    return (
        <>
            <Helmet>
                <title>Hotle | Bookings</title>
            </Helmet>
            <h1 className="text-3xl md:text-5xl text-center font-bold mt-8 underline">My Bookings</h1>
            <div className="overflow-x-auto md:max-w-6xl mx-auto my-12">
                <table className="table">
                    {/* head */}
                    <thead className="shadow-md h-16">
                        <tr className="md:text-lg font-semibold">
                            <th>Room Images</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(item =>
                                <tr key={item?._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <img className="w-24 h-20 md:w-56 md:h-48" src={item?.image} alt="" />
                                        </div>
                                    </td>
                                    <td className="md:text-xl font-semibold">{item?.name}</td>
                                    <td className="md:text-xl font-semibold">{item?.price}$</td>
                                    <td><button onClick={() => handleDelete(item?._id)} className="btn btn-sm md:btn-md btn-error text-white">Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr className="md:text-2xl font-bold border-t-2">
                            <th></th>
                            <th>Total = </th>
                            <th>{total}$</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default Bookings;
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const Rooms = () => {

    const [rooms, setRooms] = useState([]);
    const {loading} = useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])

    const handleSortPrice = () => {
        fetch('http://localhost:5000/sort?sort=true')
        .then(res => res.json())
        .then(data => setRooms(data))
    }

    if(loading){
        return <div className="flex justify-center items-center h-[80vh]"><span className="loading loading-lg loading-spinner text-primary"></span></div>
    }

    return (
        <div>
            <Helmet>
                <title>Hotel | Rooms</title>
            </Helmet>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Hotel Room Gallery</h1>
                <h3 className="text-2xl font-semibold my-2">Welcome to Hotel Unparalleled Comfort and Elegance!</h3>
                <p className="lg:px-56 mb-6">Indulge in the epitome of luxury with our spacious and meticulously designed deluxe suites. Enjoy breathtaking views, modern furnishings, and personalized service.Elevate your stay with our exclusive special offers. From romantic getaways to family packages, we have tailored options to suit every traveler.</p>
            </div>
            <div className="flex justify-end mb-4">
                <button onClick={handleSortPrice} className="btn btn-primary">Sort By Price</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
                {
                    rooms?.map(room =>
                        <Link to={`/roomDetails/${room._id}`} key={room._id}>
                            <div className="shadow-md rounded-md">
                                <img className="h-64 w-full rounded-md" src={room.image} alt="" />
                                <h3 className="text-xl font-bold text-center p-2 text-blue-500">{room.name}</h3>
                                <p className="text-lg font-semibold px-2">Price: ${room.price} <span className="text-gray-500 text-sm">perday</span></p>
                                <p className="font-semibold p-2">Reviews: {room.reviewCount}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Rooms;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const RoomDetails = () => {

    const { id } = useParams()
    const [roomDetails, setRoomDetails] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    const today = new Date();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/rooms/${id}`)
            .then(res => res.json())
            .then(data => setRoomDetails(data))
    }, [id])
    console.log(roomDetails);
    return (
        <div className="max-w-6xl mx-auto mb-8 shadow-lg">
            <img className="w-full h-[90vh] rounded-md" src={roomDetails?.image} alt="" />

            <div className="flex justify-evenly my-6">
                <div>
                    <h2 className="text-blue-500 text-2xl my-2 font-bold">{roomDetails?.name}</h2>
                    <h4 className="text-lg font-semibold my-2">Price: ${roomDetails?.price} <span className="text-sm text-gray-500">perday</span></h4>
                    <h3 className="text-lg font-semibold mb-2">Reviews: {roomDetails?.reviewCount}</h3>
                </div>
                <div className="text-lg font-semibold my-2">
                    <h2>Room Size: {roomDetails?.roomSize}</h2>
                    <h4 className="my-2">Availability: {roomDetails?.availability}</h4>
                    <h3>Date:{
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            minDate={today}
                            placeholderText="Select a date"
                        />
                    }</h3>
                </div>
            </div>
            
            {/* <div className="flex justify-evenly text-xl font-bold mt-3">
            </div>
            <div className="flex justify-evenly text-lg font-bold mt-3">
            </div>
            <div className="flex justify-evenly text-lg font-bold mt-3 pb-3">

            </div> */}
        </div>
    );
};

export default RoomDetails;
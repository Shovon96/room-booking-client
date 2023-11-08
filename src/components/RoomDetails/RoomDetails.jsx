import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UserReview from "../UserReview/UserReview";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const RoomDetails = () => {

    const { id } = useParams()
    const [roomDetails, setRoomDetails] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [disableBtn, setDisableBtn] = useState(false)
    const { user, loading } = useContext(AuthContext)

    // datePicker
    const today = new Date();
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/rooms/${id}`)
            .then(res => res.json())
            .then(data => setRoomDetails(data))
    }, [id])
    // console.log(roomDetails);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    if (loading) {
        return <div className="flex justify-center items-center h-[80vh]"><span className="loading loading-lg loading-spinner text-primary"></span></div>
    }

    const bookingsData = {
        email: user.email,
        image: roomDetails.image,
        price: roomDetails.price,
        name: roomDetails.name
    }

    const handleBookings = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Book it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch('http://localhost:5000/bookings', {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(bookingsData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    title: "Booked it!",
                                    text: "Your room has been booked.",
                                    icon: "success"
                                });
                            }
                        });
                    setDisableBtn(true)
                }
            })
    }


    return (
        <>
        <Helmet>
            <title>Hotel | RoomDetails</title>
        </Helmet>
            <div className="max-w-6xl mx-auto mb-8 shadow-lg">
                <img className="w-full h-[90vh] rounded-md" src={roomDetails?.image} alt="" />

                <div className="md:flex md:justify-evenly ml-32 md:ml-0 my-3 lg:my-6">
                    <div>
                        <h2 className="text-blue-500 text-2xl my-2 font-bold">{roomDetails?.name}</h2>
                        <h4 className="text-lg font-semibold my-2">Price: ${roomDetails?.price} <span className="text-sm text-gray-500">perday</span></h4>
                        <h3 className="text-lg font-semibold mb-2">Reviews: {reviews.length}</h3>
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
                                required
                            />
                        }</h3>
                    </div>
                </div>
                <h4 className="lg:px-24 px-5 py-3 text-lg text-gray-500 font-medium">{roomDetails?.description}</h4>
                <div className="flex justify-evenly py-3">
                    <div>
                        {
                            disableBtn ?
                                <button className="btn cursor-not-allowed" disabled>Booked</button>
                                : <button onClick={handleBookings} className="btn btn-primary">Book Now</button>
                        }
                    </div>

                    {/* user review modal show */}
                    <UserReview disableBtn={disableBtn}></UserReview>

                </div>
            </div>

            <div>
                <h1 className="text-5xl font-bold text-center my-6">Customer Review</h1>
                <div className="max-w-3xl my-6 mx-auto grid grid-cols-2 gap-12">
                    {
                        reviews.map(review =>
                            <div className=" shadow-xl rounded-lg p-4" key={review._id}>
                                <img className="h-10 w-10 mx-2 rounded-full" src={user?.photoURL} alt="" />
                                <h2 className="font-bold my-2">{review?.name}</h2>
                                <h2 className="text-gray-500">Date: {review?.date}</h2>
                                <Rating
                                    initialRating={review?.rating}
                                    emptySymbol={<span className="text-gray-300 text-xl">☆</span>}
                                    fullSymbol={<span className="text-yellow-500 text-xl">★</span>}
                                    readonly
                                />
                                <p>{review?.comment}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default RoomDetails;
import { useEffect, useState } from "react";

const Featured = () => {
    const [features, setFeatures] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/features')
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-12">
                <h1 className="text-5xl font-bold">Our Featured</h1>
                <h4 className="text-lg font-semibold my-2">Welcome to Hotel Your Gateway to Comfort and Luxury!</h4>
                <p className="text-gray-500 lg:px-72 mb-4">Experience unparalleled convenience and sophistication with our seamless hotel room booking feature. We take pride in offering you a hassle-free and delightful stay from the moment you decide to book. Heres what makes our hotel room booking stand out</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    features.map(feature => 
                        <div className="shadow-md rounded-md" key={feature._id}>
                            <img className="h-72 rounded-md" src={feature.ImageURL} alt="" />
                            <h1 className="p-2 text-center text-blue-600 font-semibold">{feature.title}</h1>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Featured;
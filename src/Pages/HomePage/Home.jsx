import { Helmet } from "react-helmet";
import Featured from "../../components/Featured/Featured";
import NewsLetter from "../../components/Newsletter/NewsLetter";
// import Map from "../../components/GoogleMap/Map";
import Slider from "../../components/Slider_banner/Slider";
import Testimonials from "../../components/UserTestimonials/Testimonials";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div>
            <Helmet>
                <title>Hotel | Home</title>
            </Helmet>
            <Slider></Slider>
            <Featured></Featured>
            {/* <SpecialOffers></SpecialOffers> */}
            <Testimonials></Testimonials>
            <NewsLetter></NewsLetter>
            {/* <Map></Map> */}
        </div>
    );
};

export default Home;
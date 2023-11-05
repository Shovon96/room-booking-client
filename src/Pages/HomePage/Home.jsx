import Featured from "../../components/Featured/Featured";
// import Map from "../../components/GoogleMap/Map";
import Slider from "../../components/Slider_banner/Slider";
import Testimonials from "../../components/UserTestimonials/Testimonials";
// import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Featured></Featured>
            {/* <SpecialOffers></SpecialOffers> */}
            <Testimonials></Testimonials>
            {/* <Map></Map> */}
        </div>
    );
};

export default Home;
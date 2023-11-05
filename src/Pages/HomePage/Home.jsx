import Featured from "../../components/Featured/Featured";
import Slider from "../../components/Slider_banner/Slider";
// import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Featured></Featured>
            {/* <SpecialOffers></SpecialOffers> */}
        </div>
    );
};

export default Home;
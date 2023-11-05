import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider = () => {
    
    return (
        <div>
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                >
                    <SwiperSlide>
                        <img className="w-full h-[50vh] md:h-[90vh]" src="https://media.discordapp.net/attachments/1163919577130999870/1170408566293807124/Hotel-Room-Banner.png?ex=6558eeeb&is=654679eb&hm=886c254181ffb64656e99f7cf3fafcb7be23ff257c55642b01404be5c8e28ecf&=&width=988&height=423" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[50vh] md:h-[90vh]" src="https://media.discordapp.net/attachments/1163919577130999870/1170409675091628203/Room2.png?ex=6558eff3&is=65467af3&hm=d4c7d52aaa2d2120b7be1fd2ae7e75df0833c7f51991fcafb02ca7c5695bcf70&=&width=762&height=423" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[50vh] md:h-[90vh]" src="https://media.discordapp.net/attachments/1163919577130999870/1170408199833260032/Screen-Shot-2022-01-19-at-2.png?ex=6558ee93&is=65467993&hm=d7de61b09b6176bad0b03fbb05c9c184dbb3d04377eaf1df87aca93412a0527a&=&width=945&height=423" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[50vh] md:h-[90vh]" src="https://media.discordapp.net/attachments/1163919577130999870/1170409948472152094/average-room-rates-in-domestic-hotels-are-increasing-01.png?ex=6558f034&is=65467b34&hm=56aedfb3630e52e915c7a725520043075fe0143a90e3d4bf54b4bbb3b2bc83e7&=&width=725&height=423" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
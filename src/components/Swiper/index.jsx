import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Slide } from "./Swiper.styles";

const Swiper_v1 = ({ items }) => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
      }}
      pagination={{ clickable: true }}
    >
      {items.length > 0 &&
        items.map((item, index) => {
          return (
            <SwiperSlide>
              <Slide key={index} src={item.src} />{" "}
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Swiper_v1;

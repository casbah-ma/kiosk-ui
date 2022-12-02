import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { DropdownContainer, Slide } from "./Swiper.styles";
import Dropdown from "../Dropdown";

const Swiper_v1 = ({ items, languages,children }) => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <DropdownContainer>
      <Dropdown languages={languages} />
      </DropdownContainer>
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
    </>
  );
};

export default Swiper_v1;

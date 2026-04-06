import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Images from "../Images";
import banner from '/src/assets/banner.png'

const Banner = () => {

  return (
    <div className="overflow-hidden w-full">
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        modules={[Autoplay]}
        speed={2000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        <SwiperSlide>
          <Link to={"/products_inside"}>
            <Images srcImg={banner} className={"w-full"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products_inside"}>
            <Images srcImg={banner} className={"w-full"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products_inside"}>
            <Images srcImg={banner} className={"w-full"} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

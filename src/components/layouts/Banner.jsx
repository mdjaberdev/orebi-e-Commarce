import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Images from "../Images";
import banner from "/src/assets/banner.png";
import bannerTwo from "/src/assets/bannerTwo.webp";
import bannerThree from "/src/assets/bannerThree.webp";

const Banner = () => {
  return (
    <div className="overflow-hidden w-full relative">
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        speed={2000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            const pageNumber = String(index + 1).padStart(2, "0");
            return `
         <span class="${className}">
        <span class="bullet-num">${pageNumber}</span>
        <span class="bullet-line"></span>
        </span>
         `;
          },
        }}
      >
        <SwiperSlide>
          <Link to={"/products_inside"}>
            <Images srcImg={banner} className={"w-full"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products_inside"}>
            <Images srcImg={bannerTwo} className={"w-full"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/products_inside"}>
            <Images srcImg={bannerThree} className={"w-full"} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

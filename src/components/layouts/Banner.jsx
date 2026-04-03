import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };

  return (
    <div className="overflow-hidden w-full">
      <Slider {...settings}>
        <Link to={"/products_inside"}>
          <div className="relative w-full">
            <img
              src="/src/assets/banner.png"
              alt="Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </Link>
        <Link to={"/products_inside"}>
          <div className="relative w-full">
            <img
              src="/src/assets/banner.png"
              alt="Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;

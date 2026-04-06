import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Product from "../Product";
import productOne from "/src/assets/productOne.png";
import productTwo from "/src/assets/productTwo.png";
import productThree from "/src/assets/productThree.png";
import productFour from "/src/assets/productFour.png";
import Badge from "../Badge";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const Newarrivals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024, // laptop
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div className="pb-9 px-3 lg:px-0">
      <Container>
        <Heading
          className={"text-primary text-[39px] font-dmSans font-bold"}
          text={"New Arrivals"}
          as={"h3"}
        />

        <div className="-mx-2.5 mt-5">
          <Slider {...settings}>
            <div className="relative px-2.5">
              <Product
                productImg={productOne}
                productTitle={"Round Table Clock"}
                productPrice={"$40.00"}
              />
              <Badge className={"absolute top-3 left-5.5"} badgeText={"New"} />
            </div>

            <div className="relative px-2.5">
              <Product
                productImg={productTwo}
                productTitle={"Smart Watch"}
                productPrice={"$44.00"}
              />
            </div>

            <div className="relative px-2.5">
              <Product
                productImg={productThree}
                productTitle={"Cloth Basket"}
                productPrice={"$48.00"}
              />
              <Badge className={"absolute top-3 left-5.5"} badgeText={"New"} />
            </div>

            <div className="relative px-2.5">
              <Product
                productImg={productFour}
                productTitle={"Funny toys for babies"}
                productPrice={"$55.00"}
              />
              <Badge className={"absolute top-3 left-5.5"} badgeText={"New"} />
            </div>

            <div className="relative px-2.5">
              <Product
                productImg={productTwo}
                productTitle={"Smart Watch"}
                productPrice={"$44.00"}
              />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Newarrivals;

import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Images from "../Images";
import aboutOne from "/src/assets/productOne.png";
import aboutTwo from "/src/assets/shopbypriceOne.png";
import Badge from "../Badge";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="">
      <Helmet>
        <title>Orebi About</title>
        <meta name="About" content="welcome to aboutpage" />
      </Helmet>

      <Container>
        {/* Banner */}

        <div className="py-20 lg:py-28">
          <Heading
            className="text-primary text-4xl lg:text-5xl font-bold font-dmSans"
            text={"About"}
            as={"h3"}
          />

          <Heading
            className="text-[#767676] text-[12px] font-dmSans mt-2"
            text={"Home > About"}
            as={"h4"}
          />
        </div>

        {/* Images */}

        <Flex className="flex-col lg:flex-row justify-between gap-6">
          <div className="w-full lg:w-1/2 relative">
            <Images srcImg={aboutOne} className="w-full" />

            <Badge
              className="absolute bottom-6 lg:bottom-15 left-1/2 -translate-x-1/2"
              badgeText="Our Brands"
            />
          </div>

          <div className="w-full lg:w-1/2 relative">
            <Images srcImg={aboutTwo} className="w-full" />

            <Badge
              className="absolute bottom-6 lg:bottom-15 left-1/2 -translate-x-1/2"
              badgeText="Our Stores"
            />
          </div>
        </Flex>

        {/* Description */}

        <Heading
          className="mt-8 text-base lg:text-3xl text-primary font-dmSans leading-7 lg:leading-12"
          text={
            "Orebi is one of the worlds leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
          }
          as={"p"}
        />
        <Flex className="flex-col lg:flex-row items-start gap-10 lg:gap-x-5 mt-10 lg:mt-14">
          {/* Our Vision */}

          <div className="w-full">
            <Heading
              className="text-primary text-2xl font-bold font-dmSans"
              text={"Our Vision"}
              as={"h4"}
            />

            <Heading
              className="text-[#767676] text-base font-dmSans leading-7 lg:leading-8 w-full lg:w-[400px] mt-3"
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book."
              }
              as={"p"}
            />
          </div>

          {/* Our Story */}

          <div className="w-full">
            <Heading
              className="text-primary text-2xl font-bold font-dmSans"
              text={"Our Story"}
              as={"h4"}
            />

            <Heading
              className="text-[#767676] text-base font-dmSans leading-7 lg:leading-8 w-full lg:w-[400px] mt-3"
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
              }
              as={"p"}
            />
          </div>

          {/* Our Brands */}

          <div className="w-full">
            <Heading
              className="text-primary text-2xl font-bold font-dmSans"
              text={"Our Brands"}
              as={"h4"}
            />

            <Heading
              className="text-[#767676] text-base font-dmSans leading-7 lg:leading-8 w-full lg:w-[400px] mt-3"
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
              }
              as={"p"}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default About;

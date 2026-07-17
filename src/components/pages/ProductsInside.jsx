import React, { useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Images from "../Images";
import productsOne from "/src/assets/shopbypriceOne.png";
import productsTwo from "/src/assets/shopbybrandOne.png";
import productsThree from "/src/assets/specialofferThree.png";
import productsFour from "/src/assets/shopcategory.png";
import star from "/src/assets/productsStar.png";
import { FaCaretDown } from "react-icons/fa";
import { Minus, Plus } from "lucide-react";

const ProductsInside = () => {
  const [count, setCount] = useState(1);

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <Container>
      <div className="pb-20">
        <Heading
          className="text-[#767676] text-[12px] font-dmSans mt-10"
          text={"Home  >  Cart"}
          as={"h4"}
        />
      </div>

      {/* Product Images */}

      <Flex className="flex-col lg:flex-row gap-5">
        <Images className="w-full" srcImg={productsOne} />
        <Images className="w-full" srcImg={productsTwo} />
      </Flex>

      <Flex className="flex-col lg:flex-row gap-5 mt-10">
        <Images className="w-full" srcImg={productsThree} />
        <Images className="w-full" srcImg={productsFour} />
      </Flex>

      <div>
        <Heading
          className="text-primary text-[30px] lg:text-[39px] font-bold font-dmSans mt-10"
          text={"Product"}
          as={"h3"}
        />

        <div className="flex items-center gap-x-2 mt-3">
          <Images className="w-[80px]" srcImg={star} />

          <Heading
            className="text-[#767676] text-sm font-dmSans"
            text={"1 Review"}
            as={"h4"}
          />
        </div>

        {/* Price */}

        <div className="flex flex-wrap items-center gap-4 mt-5">
          <div className="relative">
            <Heading
              className="text-[#767676] text-base font-dmSans"
              text={"$88.00"}
              as={"h4"}
            />

            <div className="h-[1px] w-full bg-[#767676] absolute left-0 bottom-3"></div>
          </div>

          <Heading
            className="text-primary text-[20px] font-bold font-dmSans"
            text={"$44.00"}
            as={"h4"}
          />
        </div>

        {/* Color */}

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-5">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"COLOR:"}
            as={"h4"}
          />

          <div className="flex gap-x-2">
            <div className="h-[20px] w-[20px] rounded-full bg-[#979797]"></div>

            <div className="h-[20px] w-[20px] rounded-full bg-[#400bd1]"></div>

            <div className="h-[20px] w-[20px] rounded-full bg-[#d30f0f]"></div>
          </div>
        </div>

        {/* Size */}

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-5">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"SIZE:"}
            as={"h4"}
          />

          <div className="flex justify-between w-[100px] p-2 border border-[#F0F0F0] text-[#767676] text-base font-dmSans">
            S
            <FaCaretDown />
          </div>
        </div>

        {/* Quantity */}

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-5">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"QUANTITY:"}
            as={"h4"}
          />

          <div className="flex justify-between items-center w-[140px] p-2 border border-[#F0F0F0] text-[#767676] text-base font-bold font-dmSans">
            <Minus onClick={minus} className="cursor-pointer" />

            <span>{count}</span>

            <Plus onClick={plus} className="cursor-pointer" />
          </div>
        </div>

        {/* Status */}

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-5">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"STATUS:"}
            as={"h4"}
          />

          <Heading
            className="text-[#767676] text-base font-bold font-dmSans"
            text={"In stock"}
            as={"h4"}
          />
        </div>

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row gap-5 mt-5">
          <button className="py-4 px-10 bg-primary text-white text-sm font-bold font-dmSans hover:text-primary hover:bg-transparent duration-300 cursor-pointer">
            Add to Wish List
          </button>

          <button className="py-4 px-10 bg-primary text-white text-sm font-bold font-dmSans hover:text-primary hover:bg-transparent duration-300 cursor-pointer">
            Add to Cart
          </button>
        </div>
        {/* FEATURES */}

        <div className="border border-[#F0F0F0] mt-10 pb-5 w-full lg:w-[750px] flex justify-between items-center px-4 pt-5">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"FEATURES & DETAILS"}
            as={"h4"}
          />

          <Plus className="cursor-pointer" />
        </div>

        {/* SHIPPING */}

        <div className="border border-[#F0F0F0] mt-10 pb-5 w-full lg:w-[750px] flex justify-between items-center px-4 pt-5">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"SHIPPING & RETURNS"}
            as={"h4"}
          />

          <Plus className="cursor-pointer" />
        </div>

        {/* Short Description */}

        <Heading
          className="text-[#767676] text-base leading-7 w-full lg:w-[765px] font-dmSans mt-5"
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          as={"p"}
        />

        {/* Tabs */}

        <div className="flex flex-wrap gap-5 mt-10">
          <Heading
            className="text-[#767676] text-[20px] font-dmSans cursor-pointer"
            text={"Description"}
            as={"h3"}
          />

          <Heading
            className="text-primary text-[20px] font-bold font-dmSans cursor-pointer"
            text={"Reviews (1)"}
            as={"h3"}
          />
        </div>

        <Heading
          className="text-[#767676] text-sm font-dmSans mt-5"
          text={"1 review for Product"}
          as={"h4"}
        />

        {/* Review Header */}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 mt-10">
          <div className="flex gap-x-5 items-center">
            <Heading
              className="text-primary text-base font-dmSans"
              text={"John Ford"}
              as={"h4"}
            />

            <Images srcImg={star} className="h-2.5" />
          </div>

          <Heading
            className="text-[#767676] text-base font-dmSans"
            text={"6 months ago"}
            as={"h4"}
          />
        </div>

        {/* Review Body */}

        <Heading
          className="text-[#767676] text-base leading-7 w-full lg:w-[1050px] font-dmSans mt-5"
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
          as={"p"}
        />

        {/* Add Review */}

        <div className="mt-10">
          <Heading
            className="text-primary text-[20px] font-bold font-dmSans"
            text={"Add a Review"}
            as={"h3"}
          />
          {/* Name */}

          <div className="mt-5">
            <Heading
              className="text-primary text-base font-bold font-dmSans"
              text={"Name"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="Your name here"
              className="mt-5 outline-0 w-full lg:w-auto border-b border-[#F0F0F0] pb-2"
            />
          </div>

          {/* Email */}

          <div className="mt-5">
            <Heading
              className="text-primary text-base font-bold font-dmSans"
              text={"Email"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="Your email here"
              className="mt-5 outline-0 w-full lg:w-auto border-b border-[#F0F0F0] pb-2"
            />
          </div>

          {/* Review */}

          <div className="mt-5">
            <Heading
              className="text-primary text-base font-bold font-dmSans"
              text={"Review"}
              as={"h4"}
            />

            <textarea
              cols={50}
              rows={6}
              placeholder="Your review here"
              className="mt-5 outline-0 w-full lg:w-auto border border-[#F0F0F0] p-3 resize-none"
            ></textarea>
          </div>

          {/* Button */}

          <button className="py-4 px-21 bg-primary text-white text-sm font-bold font-dmSans mt-5 cursor-pointer hover:text-primary hover:bg-transparent duration-300">
            Post
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ProductsInside;

import React, { useState } from "react";
import Badge from "./Badge";
import Images from "./Images";
// import Flex from "./Flex";
// import Heading from "./Heading";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import { FaCodeCompare } from "react-icons/fa6";

const Product = ({ productImg, badgeText, productTitle, productPrice }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-[#F3F3F3]">
        <Images srcImg={productImg} className={"w-full"} />
        <Badge badgeText={badgeText} className={"absolute"} />
        <div className="absolute text-right bg-white bottom-0 right-0 w-full py-5 opacity-0 group-hover:opacity-100 duration-300 px-4 translate-y-6 group-hover:translate-y-0">
          <div className="flex gap-x-2 items-center justify-end text-base text-[#767676] hover:font-bold hover:text-[#262626] cursor-pointer duration-500">
            <p className="">Add to Wish List</p>
            <FaHeart />
          </div>
          <div className="flex gap-x-2 items-center justify-end text-base text-[#767676] hover:font-bold hover:text-[#262626] cursor-pointer duration-500 py-4">
            <p className="">Compare</p>
            <FaCodeCompare />
          </div>
          <div className="flex gap-x-2 items-center justify-end text-base text-[#767676] hover:font-bold hover:text-[#262626] cursor-pointer duration-500">
            <p className="">Add to Cart</p>
            <FaShoppingCart />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-18.75 py-4 px-2">
        <h4 className="font-bold text-[20px] text-[#262626]">{productTitle}</h4>
        <p className="text-base text-[#767676]">{productPrice}</p>
      </div>
      <p className="text-base text-[#767676] px-2">Black</p>
    </div>
  );
};

export default Product;

import  { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Images from "../Images";
import shopLogo from "../../assets/shoplogo.png";
import bar from "../../assets/bar.png";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Pagination from "../Pagination";


const Shop = () => {
  
  return (
    <div>
      <Container>
        <div className="mt-[225px] mb-[130px]">
          <Heading
            className="text-primary text-5xl font-bold font-dmSans"
            text={"Products"}
            as={"h3"}
          />
          <Heading
            className="text-[#767676] text-[12px] font-dmSans"
            text={"Home > Products"}
            as={"h4"}
          />
        </div>
        <div className="flex items-start gap-x-10  justify-between">
          <div className="">
            {/* Shop by Category  */}
            <div className="">
              <div className="">
                <Heading
                  className="text-[#262626] text-xl font-bold font-dmSans"
                  text={"Shop by Category"}
                  as={"h4"}
                />
              </div>
            </div>
            <div className="w-[375px]">
              <ul className="text-[#767676] text-base font-dmSans mt-[35px] ">
                <li className="border-b border-[#D8D8D8] py-[20px] flex justify-between">
                  Category 1 <span>+</span>
                </li>
                <li className="border-b border-[#D8D8D8] py-[20px]">
                  Category 2
                </li>
                <li className="border-b border-[#D8D8D8] py-[20px] flex justify-between">
                  Category 3 <span>+</span>
                </li>
                <li className="border-b border-[#D8D8D8] py-[20px]">
                  Category 4
                </li>
                <li className="border-b border-[#D8D8D8] py-[20px]">
                  Category 5
                </li>
              </ul>
              {/* Shop by Color  */}
              <div className="mt-[50px]">
                <div className="flex items-center justify-between">
                  <Heading
                    className="text-[#262626] text-xl font-bold font-dmSans"
                    text={"Shop by Color"}
                    as={"h4"}
                  />
                  <FaCaretUp />
                </div>
                <ul className="text-[#767676] text-base font-dmSans mt-[35px] ">
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    <p className="bg-[#000000] h-3 w-3 rounded-full"></p> Color
                    1
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    <p className="bg-[#FF8686] h-3 w-3 rounded-full"></p> Color
                    2
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    <p className="bg-[#7ED321] h-3 w-3 rounded-full"></p> Color
                    3
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    <p className="bg-[#B6B6B6] h-3 w-3 rounded-full"></p> Color
                    4
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    <p className="bg-[#15CBA5] h-3 w-3 rounded-full"></p> Color
                    5
                  </li>
                </ul>
              </div>
              {/* Shop by Brand  */}
              <div className="mt-[50px]">
                <div className="flex items-center justify-between">
                  <Heading
                    className="text-[#262626] text-xl font-bold font-dmSans"
                    text={"Shop by Brand"}
                    as={"h4"}
                  />
                  <FaCaretUp />
                </div>
                <ul className="text-[#767676] text-base font-dmSans mt-[35px] ">
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    Brand 1
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    Brand 2
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    Brand 3
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    Brand 4
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    Brand 5
                  </li>
                </ul>
              </div>
              {/* Shop by Price  */}
              <div className="mt-[50px]">
                <div className="">
                  <Heading
                    className="text-[#262626] text-xl font-bold font-dmSans"
                    text={"Shop by Price"}
                    as={"h4"}
                  />
                </div>
                <ul className="text-[#767676] text-base font-dmSans mt-[35px] ">
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    $0.00 - $9.99
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    $10.00 - $19.99
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    $20.00 - $29.99
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                    $30.00 - $39.99
                  </li>
                  <li className="border-b border-[#D8D8D8] py-[20px] flex items-center gap-x-2">
                $40.00 - $69.99
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-x-[100px] justify-between">
              {" "}
              <div className="flex gap-x-3 ">
                <Images srcImg={shopLogo} />
                <Images srcImg={bar} />
              </div>
              <div className="flex gap-x-10">
                <div className="flex gap-x-3 items-center text-[#767676] text-base font-dmSans">
                  <p>Sort by:</p>
                  <p className="py-[3px] px-[20px] border border-[#F0F0F0] w-[230px] flex justify-between items-center">
                    Featured <FaCaretDown />
                  </p>
                </div>
                <div className="flex gap-x-3 items-center text-[#767676] text-base font-dmSans">
                  <p>Show:</p>
                  <p className="py-[3px] px-[20px] border border-[#F0F0F0] w-[130px] flex justify-between items-center">
                    36 <FaCaretDown />
                  </p>
                </div>
              </div>
            </div>
            <Pagination itemsPerPage={12} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;

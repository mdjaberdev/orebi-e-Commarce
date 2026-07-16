import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Images from "../Images";
import cart from "/src/assets/cart.png";
import Flex from "../Flex";
import { IoCaretDownSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Container>
      {/* Page Title */}
      <div className="py-16 lg:py-28">
        <Heading
          className="text-primary text-5xl font-bold font-dmSans"
          text={"Cart"}
          as={"h3"}
        />
        <Heading
          className="text-[#767676] text-[12px] font-dmSans mt-2"
          text={"Home  >  Cart"}
          as={"h4"}
        />
      </div>

      {/* Table Header */}
      <div className="hidden lg:grid grid-cols-4 bg-[#F5F5F3] py-7">
        <Heading
          className="text-primary text-base font-bold font-dmSans ml-5"
          text={"Product"}
          as={"h4"}
        />
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Price"}
          as={"h4"}
        />
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Quantity"}
          as={"h4"}
        />
        <Heading
          className="text-primary text-base font-bold font-dmSans"
          text={"Total"}
          as={"h4"}
        />
      </div>

      {/* Mobile Card */}
      <div className="block lg:hidden border border-gray-200 rounded-lg p-4 mt-6">
        <div className="flex items-center gap-4">
          <Heading
            className="text-primary text-base font-bold"
            text={"×"}
            as={"h4"}
          />

          <Images srcImg={cart} className="w-24" />
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="font-bold">Product</span>
            <span>Product name</span>
          </div>

          <div className="flex justify-between">
            <span className="font-bold">Price</span>
            <span>$44.00</span>
          </div>

          <div className="flex justify-between">
            <span className="font-bold">Quantity</span>
            <span>1</span>
          </div>

          <div className="flex justify-between">
            <span className="font-bold">Total</span>
            <span>$44.00</span>
          </div>
        </div>
      </div>

      {/* Desktop Row */}
      <div className="hidden lg:block">
        <Flex className="gap-x-4 mt-8 items-center">
          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"x"}
            as={"h4"}
          />

          <Images srcImg={cart} />

          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"Product name"}
            as={"h4"}
          />

          <div className="ml-7">
            <Heading
              className="text-primary text-base font-bold font-dmSans"
              text={"$44.00"}
              as={"h4"}
            />
          </div>

          <div className="ml-[450px]">
            <Heading
              className="text-primary text-base font-bold font-dmSans ml-15"
              text={"$44.00"}
              as={"h4"}
            />
          </div>
        </Flex>
      </div>

      <Flex className="justify-between flex-col lg:flex-row gap-5 mx-3 mt-10">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 sm:items-center">
          <div className="text-[#767676] text-base font-dmSans border border-[#EAEAEA] p-3 flex items-center justify-between lg:gap-x-30 min-w-[220px]">
            <Heading text={"SIZE"} as={"h4"} />
            <IoCaretDownSharp />
          </div>

          <Heading
            className="text-primary text-base font-bold font-dmSans"
            text={"Apply coupon"}
            as={"h4"}
          />
        </div>

        <Heading
          className="text-primary text-sm font-bold font-dmSans"
          text={"Update cart"}
          as={"h4"}
        />
      </Flex>
      {/* Cart Totals */}
      <div className="mt-10">
        <div className="text-center lg:text-right">
          <Heading
            className="text-primary text-[20px] font-bold font-dmSans"
            text={"Cart totals"}
            as={"h4"}
          />
        </div>

        {/* Mobile & Tablet */}
        <div className="lg:hidden border border-[#F0F0F0] mt-5">
          <div className="flex justify-between border-b border-[#F0F0F0] p-4">
            <Heading
              className="text-primary text-base font-bold font-dmSans"
              text={"Subtotal"}
              as={"h4"}
            />
            <Heading
              className="text-primary text-base font-dmSans"
              text={"389.99 $"}
              as={"h4"}
            />
          </div>

          <div className="flex justify-between p-4">
            <Heading
              className="text-primary text-base font-bold font-dmSans"
              text={"Total"}
              as={"h4"}
            />
            <Heading
              className="text-primary text-base font-dmSans"
              text={"389.99 $"}
              as={"h4"}
            />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block ml-[715px]">
          <div className="mt-5 mr-50 flex gap-x-30">
            <Heading
              className="text-primary text-base font-bold font-dmSans"
              text={"Subtotal"}
              as={"h4"}
            />
            <Heading
              className="text-primary hover:text-[#767676] text-base font-dmSans"
              text={"389.99 $"}
              as={"h4"}
            />
          </div>

          <div className="mt-5 mr-50 flex gap-x-37">
            <Heading
              className="text-primary text-base font-bold font-dmSans"
              text={"Total"}
              as={"h4"}
            />
            <Heading
              className="text-primary hover:text-[#767676] text-base font-dmSans"
              text={"389.99 $"}
              as={"h4"}
            />
          </div>
        </div>

        {/* Checkout Button */}
        <div className="text-center lg:text-end mt-9">
          <Link to={"/checkout"}>
            <button className="py-4 px-6 bg-primary text-white text-sm font-bold font-dmSans mt-5 cursor-pointer hover:text-primary hover:bg-transparent duration-300 border border-primary">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
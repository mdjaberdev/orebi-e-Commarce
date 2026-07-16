import Container from "../Container";
import Flex from "../Flex";
import Icons from "../Icons";
import Heading from "../Heading";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import Searchfilter from "../Searchfilter";

const Sharcebar = () => {
  const [show, setShow] = useState(false);
  const [showl, setShowl] = useState(false);

  return (
    <section className="bg-[#F5F5F3] border-y border-[#979797] py-4">
      <Container>
        <Flex className="justify-between flex-col lg:flex-row gap-y-3">
          {/* Shop by Category */}
          <div className="flex items-center relative w-full lg:w-auto">
            <div
              className="flex gap-x-1.5 items-center cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <Icons />
              <Heading
                className="text-primary text-sm font-dmSans"
                text="Shop by Category"
                as="h5"
              />
            </div>

            {/* Overlay */}
            {show && (
              <div
                className="fixed inset-0 z-60"
                onClick={() => setShow(false)}
              ></div>
            )}

            {/* Dropdown */}
            {show && (
              <div className="bg-[#262626] text-[#979797] w-[220px] absolute top-10 left-0 z-20">
                <ul>
                  {[
                    "Accessories",
                    "Furniture",
                    "Electronics",
                    "Clothes",
                    "Bags",
                    "Home appliances",
                  ].map((item) => (
                    <li
                      key={item}
                      className="border-b border-[#D8D8D8] py-2 pl-5 hover:ml-3 hover:text-white duration-150"
                    >
                      <Link>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-auto">
            <Searchfilter />
          </div>

          <div className="flex gap-x-5 items-center relative w-full lg:w-auto justify-end lg:justify-start">
          
            <div className="flex gap-x-1 relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setShowl(!showl)}
              >
                <FaUser />
                <FaCaretDown />
              </div>

              {showl && (
                <div
                  className="fixed inset-0 z-60"
                  onClick={() => setShowl(false)}
                ></div>
              )}

              {showl && (
                <div className="absolute top-10 right-0 z-20">
                  <ul className="text-sm font-bold font-dmSans">
                    <Link to="/myaccount">
                      <li className="bg-[#2B2B2B] text-white py-2 text-center w-[200px] hover:bg-transparent hover:text-black duration-300">
                        My Account
                      </li>
                    </Link>

                    <Link to="/login">
                      <li className="bg-[#2B2B2B] text-white py-2 text-center w-[200px] hover:bg-transparent hover:text-black duration-300">
                        Login
                      </li>
                    </Link>

                    <Link to="/singup">
                      <li className="bg-[#2B2B2B] text-white py-2 text-center w-[200px] hover:bg-transparent hover:text-black duration-300">
                        Sign Up
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Sharcebar;

import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="py-5 md:py-6 lg:py-8">
        <Container>
          <Flex className="items-center justify-between">
            {/* Logo */}
            <div className="w-[30%] sm:w-[32%] md:w-auto flex-shrink-0">
              <Link to={"/"}>
                <Images srcImg={Logo} className="w-full md:w-auto" />
              </Link>
            </div>

            {/* Desktop Menu  */}
            <div className="hidden md:flex">
              <ul className="flex items-center gap-x-5 text-[#767676] text-sm font-dmSans">
                <li className="hover:text-primary hover:font-bold duration-300">
                  <Link to="/">Home</Link>
                </li>

                <li className="hover:text-primary hover:font-bold duration-300">
                  <Link to="/shop">Shop</Link>
                </li>

                <li className="hover:text-primary hover:font-bold duration-300">
                  <Link to="/about">About</Link>
                </li>

                <li className="hover:text-primary hover:font-bold duration-300">
                  <Link to="/contacts">Contacts</Link>
                </li>
              </ul>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-3xl text-primary p-2 rounded-md active:scale-95 duration-200"
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </Flex>

          {/* Mobile Menu */}
          <div
            className={`md:hidden text-center overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-96 mt-5" : "max-h-0"
            }`}
          >
            <ul className="bg-white rounded-xl shadow-lg border border-gray-200 py-3">
              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-[#767676] hover:text-primary hover:bg-gray-100 duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-[#767676] hover:text-primary hover:bg-gray-100 duration-300"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-[#767676] hover:text-primary hover:bg-gray-100 duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contacts"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-[#767676] hover:text-primary hover:bg-gray-100 duration-300"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

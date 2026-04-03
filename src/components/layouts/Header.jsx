import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="py-8 px-3 lg:px-0">
        <Container>
          <Flex className="items-center justify-between">
            {/* Logo */}
            <div className="w-[40%] md:w-auto">
              <Link to={"/"}>
                <Images srcImg={Logo} />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex w-[60%]">
              <ul className="flex items-center gap-x-5 text-[#767676] text-sm font-dmSans">
                <li className="hover:text-primary hover:font-bold duration-300">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:text-primary hover:font-bold duration-300">
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li className="hover:text-primary hover:font-bold duration-300">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="hover:text-primary hover:font-bold duration-300">
                  <Link to={"/contacts"}>Contacts</Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl text-gray-700"
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </Flex>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="flex flex-col items-center gap-y-4 mt-4 md:hidden text-[#767676] text-sm font-dmSans">
              <li className="hover:text-primary hover:font-bold duration-300">
                <Link to={"/"} onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-primary hover:font-bold duration-300">
                <Link to={"/shop"} onClick={() => setMenuOpen(false)}>
                  Shop
                </Link>
              </li>
              <li className="hover:text-primary hover:font-bold duration-300">
                <Link to={"/about"} onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li className="hover:text-primary hover:font-bold duration-300">
                <Link to={"/contacts"} onClick={() => setMenuOpen(false)}>
                  Contacts
                </Link>
              </li>
            </ul>
          )}
        </Container>
      </div>
    </header>
  );
};

export default Header;
import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Images from "../Images";
import shoplogo from "/src/assets/shoplogo.png";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Product from "../Product";
import shopOne from "/src/assets/bestsallerThree.png";
import shopTwo from "/src/assets/specialofferThree.png";
import shopThree from "/src/assets/shopcategory.png";
import shopcolorOne from "/src/assets/specialofferOne.png";
import shopcolorTwo from "/src/assets/shopcolortwo.png";
import shopcolorThree from "/src/assets/bestsallerFour.png";
import shopbrandOne from "/src/assets/shopbybrandOne.png";
import shopbrandTwo from "/src/assets/specialofferTwo.png";
import shopbrandThree from "/src/assets/specialofferOne.png";
import shoppriceOne from "/src/assets/shopbypriceOne.png";
import shoppriceTwo from "/src/assets/productOne.png";
import shoppriceThree from "/src/assets/specialofferFour.png";
import { GoDotFill } from "react-icons/go";

import Badge from "../Badge";
import Pagination from "../Pagination";

const Shop = () => {
  return (
    <>
      <Container>
        <Pagination itemsPerPage={3} />
      </Container>
    </>
  );
};

export default Shop;

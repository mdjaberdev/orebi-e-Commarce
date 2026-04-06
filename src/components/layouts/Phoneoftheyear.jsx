import React from "react";
import Container from "../Container";
import Images from "../Images";
import phoneoftheyear from "/src/assets/phoneoftheyear.png";
import { useNavigate } from "react-router-dom";

const Phoneoftheyear = () => {
  let navigate = useNavigate();
  const handelClick = () => {
    navigate("/products_inside");
  };
  return (
    <div className="lg:py-10">
      <Container>
        <div className="cursor-pointer" onClick={handelClick}>
          <Images srcImg={phoneoftheyear} />
        </div>
      </Container>
    </div>
  );
};

export default Phoneoftheyear;

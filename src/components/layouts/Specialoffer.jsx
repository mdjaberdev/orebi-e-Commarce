import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Product from "../Product";
import specialOne from "/src/assets/specialofferOne.png";
import specialTwo from "/src/assets/specialofferTwo.png";
import specialThree from "/src/assets/specialofferThree.png";
import specialFour from "/src/assets/specialofferFour.png";
import Badge from "../Badge";

const Specialoffer = () => {
  return (
    <div className="py-5">
      <Container>
        <Heading
          className="text-primary text-[39px] font-dmSans font-bold"
          text="Special Offers"
          as="h3"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          <div className="relative">
            <Product
              productImg={specialOne}
              badgeText="New"
              productTitle="Cap"
              productPrice="$40.00"
            />
            <Badge className="absolute top-3 left-3" badgeText="New" />
          </div>

          <div className="relative">
            <Product
              productImg={specialTwo}
              badgeText="New"
              productTitle="Tea Table"
              productPrice="$40.00"
            />
          </div>

          <div className="relative">
            <Product
              productImg={specialThree}
              badgeText="New"
              productTitle="Headphones"
              productPrice="$40.00"
            />
            <Badge className="absolute top-3 left-3" badgeText="New" />
          </div>

          <div className="relative">
            <Product
              productImg={specialFour}
              badgeText="New"
              productTitle="Sun glasses"
              productPrice="$40.00"
            />
            <Badge className="absolute top-3 left-3" badgeText="New" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Specialoffer;

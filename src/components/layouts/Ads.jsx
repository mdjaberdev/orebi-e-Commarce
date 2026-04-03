import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import AdOne from "/src/assets/adone.jpg";
import Adtwo from "/src/assets/adtwo.png";
import Adthree from "/src/assets/adthree.jpg";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <div className="py-5 md:py-[120px]">
      <Container>
        <Flex className="gap-x-6.5 flex-wrap md:flex-nowrap">
          {/* left ad */}
          <div className="w-full md:w-auto">
            <Link>
              <Images srcImg={AdOne} />
            </Link>
          </div>

          {/* right ads */}
          <div className="w-full md:w-auto flex flex-col gap-y-6.5 mt-6 md:mt-0">
            <Link>
              <Images srcImg={Adtwo} />
            </Link>
            <Link>
              <Images srcImg={Adthree} />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Ads;

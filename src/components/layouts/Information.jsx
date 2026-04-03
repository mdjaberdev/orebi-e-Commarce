import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { PiNumberTwoBold } from "react-icons/pi";
import Heading from "../Heading";
import { MdLocalShipping } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

const Information = () => {
  return (
    <div className="py-9 px-3 lg:px-0">
      <Container>
        <Flex className="justify-between flex-wrap gap-y-6 md:gap-y-0">
          <div className="flex items-center w-full md:w-auto gap-x-2">
            <PiNumberTwoBold className="text-2xl" />
            <Heading
              className="text-[#6D6D6D] font-dmSans text-base"
              text="Two years warranty"
              as="h5"
            />
          </div>

          <div className="flex items-center w-full md:w-auto gap-x-2">
            <MdLocalShipping className="text-2xl" />
            <Heading
              className="text-[#6D6D6D] font-dmSans text-base"
              text="Free shipping"
              as="h5"
            />
          </div>

          <div className="flex items-center w-full md:w-auto gap-x-2">
            <TfiReload className="text-2xl" />
            <Heading
              className="text-[#6D6D6D] font-dmSans text-base"
              text="Return policy in 30 days"
              as="h5"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Information;

import React from "react";
import Container from "../Container";
import Heading from "../Heading";

const Login = () => {
  return (
    <Container>
      <div className="py-20 lg:py-28">
        <Heading
          className="text-primary text-4xl lg:text-5xl font-bold font-dmSans"
          text={"Login"}
          as={"h3"}
        />

        <Heading
          className="text-[#767676] text-[12px] font-dmSans mt-2"
          text={"Home  >  Login"}
          as={"h4"}
        />
      </div>

      <div>
        <Heading
          className="text-[#767676] text-base font-dmSans w-full lg:w-[645px] leading-7"
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          }
          as={"p"}
        />
      </div>

      <div>
        <Heading
          className="text-primary text-[30px] lg:text-[39px] font-bold font-dmSans mt-20"
          text={"Returning Customer"}
          as={"h3"}
        />

        <div className="flex flex-col md:flex-row gap-10 md:gap-x-60 mt-20">
          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-2"
              text={"Email address"}
              as={"h4"}
            />

            <Heading
              className="text-[#767676] text-sm font-dmSans mt-3"
              text={"company@domain.com"}
              as={"p"}
            />
          </div>

          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-2"
              text={"Password"}
              as={"h4"}
            />

            <Heading
              className="text-[#767676] text-sm font-dmSans mt-3"
              text={"* * * * * *"}
              as={"p"}
            />
          </div>
        </div>

        <button className="py-4 px-21 w-full sm:w-auto bg-primary text-white text-sm font-bold font-dmSans cursor-pointer hover:text-primary hover:bg-transparent duration-300 mt-10">
          Log in
        </button>
      </div>
      <div>
        <Heading
          className="text-primary text-[30px] lg:text-[39px] font-bold font-dmSans mt-20"
          text={"New Customer"}
          as={"h3"}
        />

        <Heading
          className="text-[#767676] text-base font-dmSans w-full lg:w-[645px] leading-7 mt-5"
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          }
          as={"p"}
        />

        <button className="py-4 px-21 w-full sm:w-auto bg-primary text-white text-sm font-bold font-dmSans cursor-pointer hover:text-primary hover:bg-transparent duration-300 mt-10">
          Continue
        </button>
      </div>
    </Container>
  );
};

export default Login;
import React from "react";
import Container from "../Container";
import Heading from "../Heading";

const Singup = () => {
  return (
    <Container>
      <div className="py-28">
        <Heading
          className="text-primary text-5xl font-bold font-dmSans"
          text={"Sign up"}
          as={"h3"}
        />

        <Heading
          className="text-[#767676] text-[12px] font-dmSans mt-2"
          text={"Home  >  Sign up"}
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
          className="text-primary text-[39px] font-bold font-dmSans mt-20"
          text={"Your Personal Details"}
          as={"h3"}
        />

        {/* First & Last Name */}

        <div className="flex flex-col md:flex-row gap-10 md:gap-x-60 mt-20">
          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-2"
              text={"First Name"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="First Name"
              className="outline-0 mt-2 w-full md:w-52"
            />
          </div>

          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-2"
              text={"Last Name"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="outline-0 mt-2 w-full md:w-52"
            />
          </div>
        </div>

        {/* Email & Phone */}

        <div className="flex flex-col md:flex-row gap-10 md:gap-x-60">
          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Email address"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="company@domain.com"
              className="outline-0 mt-2 w-full md:w-52"
            />
          </div>

          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Telephone"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="Your phone number"
              className="outline-0 mt-2 w-full md:w-52"
            />
          </div>
        </div>
      </div>
      <div>
        <Heading
          className="text-primary text-[39px] font-bold font-dmSans mt-20"
          text={"New Customer"}
          as={"h3"}
        />

        {/* Address */}

        <div className="flex flex-col md:flex-row gap-10 md:gap-x-60">
          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-2"
              text={"Address 1"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="4279 Zboncak Port Suite 6212"
              className="outline-0 mt-2 w-full md:w-52"
            />
          </div>

          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-2"
              text={"Address 2"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="........."
              className="outline-0 mt-2 w-full md:w-52"
            />
          </div>
        </div>

        {/* City */}

        <div className="flex flex-col md:flex-row gap-10 md:gap-x-60 mt-10">
          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-2"
              text={"City"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="Your city"
              className="outline-0 mt-2 w-full md:w-52"
            />
          </div>

          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-2"
              text={"Post Code"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="05228"
              className="outline-0 mt-2 w-full md:w-52"
            />
          </div>
        </div>

        {/* Country */}

        <div className="flex flex-col md:flex-row gap-10 md:gap-x-60 mt-10">
          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-2"
              text={"Country"}
              as={"h4"}
            />

            <select className="outline-0 mt-2 w-full md:w-52">
              <option>Bangladesh</option>
              <option>India</option>
              <option>Pakistan</option>
            </select>
          </div>

          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-2"
              text={"Region/State"}
              as={"h4"}
            />

            <input
              type="text"
              placeholder="Please select"
              className="outline-0 mt-2 w-full md:w-52"
            />
          </div>
        </div>
      </div>
      <Heading
        className="text-primary text-[39px] font-bold font-dmSans mt-20"
        text={"Your Password"}
        as={"h3"}
      />

      <div className="flex flex-col md:flex-row gap-10 md:gap-x-60">
        <div>
          <Heading
            className="text-primary text-base font-bold font-dmSans mt-2"
            text={"Password"}
            as={"h4"}
          />

          <input
            type="password"
            placeholder="Password"
            className="outline-0 mt-2 w-full md:w-52"
          />
        </div>

        <div>
          <Heading
            className="text-primary text-base font-bold font-dmSans mt-2"
            text={"Repeat Password"}
            as={"h4"}
          />

          <input
            type="password"
            placeholder="Repeat password"
            className="outline-0 mt-2 w-full md:w-52"
          />
        </div>
      </div>

      <div className="mt-10 flex items-start gap-3">
        <input type="checkbox" className="mt-1" />

        <Heading
          className="text-[#767676] text-base font-dmSans"
          text={"I have read and agree to the Privacy Policy"}
          as={"p"}
        />
      </div>
      <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-x-7">
        <Heading
          className="text-[#767676] text-base font-dmSans"
          text={"Subscribe Newsletter"}
          as={"p"}
        />

        <div className="flex items-center gap-2">
          <input type="checkbox" name="newsletter" />

          <Heading
            className="text-[#767676] text-base font-dmSans"
            text={"Yes"}
            as={"p"}
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="newsletter" />

          <Heading
            className="text-[#767676] text-base font-dmSans"
            text={"No"}
            as={"p"}
          />
        </div>
      </div>
      <button className="py-4 px-21 w-full sm:w-auto bg-primary text-white text-sm font-bold font-dmSans cursor-pointer hover:text-primary hover:bg-transparent duration-300 mt-10">
        Log in
      </button>
    </Container>
  );
};

export default Singup;
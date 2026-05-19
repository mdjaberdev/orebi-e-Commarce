import React from "react";
import Container from "../Container";
import Heading from "../Heading";

const Contacts = () => {
  return (
    <div className="px-3 lg:px-0">
      <Container>
        <div className="py-28">
          <Heading
            className="text-primary text-5xl font-bold font-dmSans"
            text={"Contacts"}
            as={"h3"}
          />
          <Heading
            className="text-[#767676] text-[12px] font-dmSans"
            text={"Home > About"}
            as={"h4"}
          />
        </div>
        <div className="">
          <Heading
            className="text-primary text-[39px] font-bold font-dmSans"
            text={"Fill up a Form"}
            as={"h3"}
          />
          <div className="">
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Name"}
              as={"h4"}
            />
            <input
              className="mt-5 outline-0"
              type="text"
              placeholder="Your name here"
            />
          </div>
          <div className="">
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Email"}
              as={"h4"}
            />
            <input
              className="mt-5 outline-0"
              type="text"
              placeholder="Your email here"
            />
          </div>
          <div className="">
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Message"}
              as={"h4"}
            />
            <textarea
              className="mt-5 outline-0 w-full lg:w-[300px]"
              type="text"
              placeholder="Your name here"
            />
          </div>
          <button className="py-4 px-21 bg-primary text-white text-sm font-bold font-dmSans cursor-pointer hover:text-primary hover:bg-transparent duration-300 mt-5">
            Post
          </button>
        </div>
        <div className="mt-14">
          <iframe
            className="w-full h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14663.095691470076!2d90.84034398700567!3d23.25131252788696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754f3b88ebb04b9%3A0xdf85d1b06f66f8e!2sHaziganj!5e0!3m2!1sen!2sbd!4v1767871831435!5m2!1sen!2sbd"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;

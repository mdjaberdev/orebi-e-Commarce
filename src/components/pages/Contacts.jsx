import React from "react";
import Container from "../Container";
import Heading from "../Heading";

const Contacts = () => {
  return (
    <div className="">
      <Container>
        <div className="py-20 lg:py-28">
          <Heading
            className="text-primary text-4xl lg:text-5xl font-bold font-dmSans"
            text={"Contacts"}
            as={"h3"}
          />

          <Heading
            className="text-[#767676] text-[12px] font-dmSans mt-2"
            text={"Home > About"}
            as={"h4"}
          />
        </div>

        <div>
          <Heading
            className="text-primary text-[30px] lg:text-[39px] font-bold font-dmSans"
            text={"Fill up a Form"}
            as={"h3"}
          />

          {/* Name */}

          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Name"}
              as={"h4"}
            />

            <input
              className="mt-5 outline-0 w-full lg:w-auto"
              type="text"
              placeholder="Your name here"
            />
          </div>

          {/* Email */}

          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Email"}
              as={"h4"}
            />

            <input
              className="mt-5 outline-0 w-full lg:w-auto"
              type="text"
              placeholder="Your email here"
            />
          </div>

          {/* Message */}

          <div>
            <Heading
              className="text-primary text-base font-bold font-dmSans mt-5"
              text={"Message"}
              as={"h4"}
            />

            <textarea
              className="mt-5 outline-0 w-full lg:w-[300px]"
              placeholder="Your message here"
            />
          </div>
          {/* Submit Button */}

          <button className="py-4 px-21 w-full sm:w-auto bg-primary text-white text-sm font-bold font-dmSans cursor-pointer hover:text-primary hover:bg-transparent duration-300 mt-5">
            Post
          </button>
        </div>

        {/* Google Map */}

        <div className="mt-10 lg:mt-14">
          <iframe
            className="w-full h-[350px] lg:h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14663.095691470076!2d90.84034398700567!3d23.25131252788696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754f3b88ebb04b9%3A0xdf85d1b06f66f8e!2sHaziganj!5e0!3m2!1sen!2sbd!4v1767871831435!5m2!1sen!2sbd"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;

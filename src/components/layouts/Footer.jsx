import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Images from "../Images";
import Logo from "/src/assets/logo.png";
import { FaFacebookF, FaInstagram, FaArrowUp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useLenis } from "lenis/react";

const Footer = () => {
  const lenis = useLenis();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="mt-6 lg:mt-20 mb-5 relative px-3 lg:px-0">
      <Container>
        <Flex className={" items-start flex-col lg:flex-row gap-y-5"}>
          <div className="lg:w-[15%]">
            <Heading
              className={"text-base font-bold font-dmSans text-primaryColor"}
              text={"MENU"}
              as={"h4"}
            />
            <ul className={"text-sm text-[#6D6D6D] font-dmSans mt-5"}>
              <li className="py-1.5 hover:text-primary hover:font-bold duration-300">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="py-1.5 hover:text-primary hover:font-bold duration-300">
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li className="py-1.5 hover:text-primary hover:font-bold duration-300">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="py-1.5 hover:text-primary hover:font-bold duration-300">
                <Link to={"/contacts"}>Contact</Link>
              </li>
              <li className="py-1.5 hover:text-primary hover:font-bold duration-300">
                <Link to={""}>Journal</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-[15%]">
            <Heading
              className={"text-base font-bold font-dmSans text-primaryColor"}
              text={"SHOP"}
              as={"h4"}
            />
            <ul className={"text-sm text-[#6D6D6D] font-dmSans mt-5"}>
              <li className="py-1.5">Category 1</li>
              <li className="py-1.5">Category 2</li>
              <li className="py-1.5">Category 3</li>
              <li className="py-1.5">Category 4</li>
              <li className="py-1.5">Category 5</li>
            </ul>
          </div>
          <div className="lg:w-[20%]">
            <Heading
              className={"text-base font-bold font-dmSans text-primaryColor"}
              text={"HELP"}
              as={"h4"}
            />
            <ul className={"text-sm text-[#6D6D6D] font-dmSans mt-5"}>
              <li className="py-1.5">Privacy Policy</li>
              <li className="py-1.5">Terms & Conditions</li>
              <li className="py-1.5">Special E-shop</li>
              <li className="py-1.5"> Shipping</li>
              <li className="py-1.5"> Secure Payments</li>
            </ul>
          </div>
          <div className="lg:w-[30%]">
            <Heading
              className={"text-base font-bold font-dmSans text-primaryColor"}
              text={"(052) 611-5711"}
              as={"h4"}
            />
            <Heading
              className={
                "text-base font-bold font-dmSans text-primaryColor py-1.5"
              }
              text={"company@domain.com"}
              as={"h4"}
            />
            <Heading
              className={"text-sm text-[#6D6D6D] font-dmSan pt-2"}
              text={"575 Crescent Ave. Quakertown, PA 18951"}
              as={"p"}
            />
          </div>
          <div className="w-[20%]">
            <Link to={"/"}>
              <Images srcImg={Logo} />
            </Link>
          </div>
        </Flex>
        <Flex className={"justify-between flex-col lg:flex-row mt-10"}>
          <div className="flex gap-x-4">
            <div className="relative group ">
              <Link>
                <FaFacebookF />
              </Link>

              <h4
                className="absolute left-1/2 -translate-x-1/2 bottom-4
                   bg-black text-white text-sm px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100
                    duration-300 "
              >
                Facebook
              </h4>
            </div>

            <div className="relative group">
              <Link>
                <FaLinkedinIn />
              </Link>
              <h4 className="absolute left-1/2 -translate-x-1/2 top-4 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 duration-300">
                Linkdin
              </h4>
            </div>
            <div className="relative group">
              <Link>
                <FaInstagram />
              </Link>
              <h4
                className="absolute left-1/2 -translate-x-1/2 bottom-4
                   bg-black text-white text-sm px-2 py-1 rounded
                   opacity-0 group-hover:opacity-100
                    duration-300 "
              >
                Instagram
              </h4>
            </div>
          </div>
          <div className="">
            <Heading
              className={"text-sm text-[#6D6D6D] font-dmSan pt-2"}
              text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"}
              as={"p"}
            />
          </div>
        </Flex>
      </Container>

      {/* bottom to top button */}
      {isVisible && (
        <div className="fixed bottom-10 right-10 z-50">
          <button
            onClick={handleScrollToTop}
            className="bg-black h-12 w-12 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 shadow-lg border-none outline-none"
          >
            <FaArrowUp className="text-white text-lg" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Footer;

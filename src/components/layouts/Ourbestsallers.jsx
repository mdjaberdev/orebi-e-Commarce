import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Product from "../Product";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Ourbestsallers = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("https://dummyjson.com/products");
        setData(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="lg:py-16 px-4 lg:px-0">
      <Container>
        <Heading
          className={"text-primary text-[39px] font-dmSans font-bold"}
          text={"Our Bestsellers"}
          as={"h3"}
        />
        <Flex className="mt-5 flex-wrap">
          {data.slice(10, 14).map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/4 px-2.5 mb-5 lg:mb-0"
            >
              <Product
                badgeText={"New"}
                productImg={item.thumbnail}
                productTitle={item.title}
                productPrice={item.price}
              />
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Ourbestsallers;

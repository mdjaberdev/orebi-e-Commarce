import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Product from "../Product";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Ourbestsallers = () => {
  let [alldata, setalldata] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      // console.log(data.data.products);
      setalldata(data.data.products);
    }
    alldatas();
  });
  return (
    <div className="py-16">
      <Container>
        <Heading
          className={"text-primary text-[39px] font-dmSans font-bold"}
          text={"Our Bestsellers"}
          as={"h3"}
        />
        <Flex  className="mt-5">
            {alldata.slice(10,14).map((item) => (
          <div className="w-1/4 px-2.5">
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

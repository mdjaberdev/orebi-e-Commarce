import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Images from "./Images";
import { Link } from "react-router-dom";

const Searchfilter = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState("");
  // API CALL
  useEffect(() => {
    async function fetchData() {
      try {
        let data = await axios.get("https://dummyjson.com/products");
        setAllData(data.data.products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const getData = (e) => {
    setData(e.target.value);
  };
  let filterOut = allData.filter((curValue) => {
    return curValue.title.toLowerCase().includes(data);
  });
  return (
    <div className="">
      {" "}
      <div className="flex-1 md:flex-none py-2 px-3 bg-[#FFF] rounded-[15px] flex items-center w-full md:w-[400px] justify-between">
        <input
          className="outline-0 w-full md:w-auto"
          type="text"
          placeholder="Search Products"
          onChange={getData}
          value={data}
        />
        <FaSearch className="ml-2" />
      </div>
      <div className="absolute top-45 left-1/2 -translate-x-1/2 z-10">
        {data &&
          filterOut.map((item) => {
            return (
              <Link
                key={item.id}
                to={"/shop"}
                state={filterOut}
                onClick={() => setData("")}
              >
                <div className="bg-[#F5F5F5]  p-1 border border-[#D8D8D8] flex items-center justify-between">
                  <p className="w-[100px] text-primary font-medium">
                    {item.title}
                  </p>
                  <Images className={"w-[90px]"} srcImg={item.thumbnail} />
                  <p>{item.price}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Searchfilter;

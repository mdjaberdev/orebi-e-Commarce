import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Images from "./Images";

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
    console.log(e.target.value);
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
        />
        <FaSearch className="ml-2" />
      </div>
      <div className="absolute top-45 left-1/2 -translate-x-1/2 z-10">
        {data &&
          filterOut.map((item) => {
            return (
              <div key={item.id} className="bg-[#F5F5F5] w-[200px] p-2 border border-[#D8D8D8] ">
                <p>{item.title}</p>
                <Images className={"w-[100px]"} srcImg={item.thumbnail} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Searchfilter;

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Product from "./Product";

function Items({ currentItems }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-[60px]">
      {currentItems.map((item) => (
        <div key={item.id} className="">
          <Product
            badgeText={"New"}
            productImg={item.thumbnail}
            productTitle={item.title}
            productPrice={item.price}
          />
        </div>
      ))}
    </div>
  );
}

// PAGINATION COMPONENT
function Pagination({ itemsPerPage }) {
  const [allData, setAllData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  // API CALL
  useEffect(() => {
    async function fetchData() {
      try {
        let data = await axios.get("https://dummyjson.com/products?limit=120");
        setAllData(data.data.products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  // PAGINATION LOGIC
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = allData.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(allData.length / itemsPerPage);

  // PAGE CHANGE
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allData.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      {/* PRODUCTS */}
      <Items currentItems={currentItems} />

      {/* PAGINATION */}
      <div className="mt-12.5 flex flex-col gap-y-3 lg:flex-row items-center justify-between">
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          previousLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex gap-x-5"
          pageClassName="border px-3 py-1"
          activeClassName="bg-black text-white"
        />

        {/* PRODUCT COUNT */}
        <h4 className="">
          Products from {itemOffset + 1} to{" "}
          {endOffset < allData.length ? endOffset : allData.length} of{" "}
          {allData.length}
        </h4>
      </div>
    </>
  );
}

export default Pagination;

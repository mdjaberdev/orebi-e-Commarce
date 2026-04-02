import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import data from "../data";
import Product from "./Product";

function Items({ currentItems }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-7.5 justify-between mt-10">
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>
                <Product
                  productTitle={item.title}
                  productImg={item.image}
                  productPrice={item.price}
                />
              </h3>
            </div>
          ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {
  // let [allData, set]
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };
 
  return (
    <>
      <Items currentItems={currentItems} />
      <div className="mt-20 flex items-center justify-between">
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          containerClassName="flex gap-x-5"
          pageLinkClassName={" "}
          activeClassName="bg-[#000000] h-8 w-10 flex items-center justify-center text-white"
        />
        <h4>
          Products from {itemOffset + 1} to
          {endOffset < data.length ? endOffset : data.length} of {data.length}
        </h4>
      </div>
    </>
  );
}

export default Pagination;

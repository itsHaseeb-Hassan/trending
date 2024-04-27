'use client'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import jsonData from '../constant/data.json';
import CardList from './CardList';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const ImageCardList = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(jsonData?.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const paginatedData = jsonData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
   <>
     <div>
     <h1 className="palanquin-dark-regular text-xs sm:text-2xs text-center mt-8 mb-2 text-[#242424]">
      TRENDING <span className="text-[#f68c2f]">STICKERS</span>
    </h1>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-4 sm:gap-1 px-8">
  {paginatedData.map((item) => (
    <div key={item.id} className="my-4 sm:my-0">
      <CardList list={item} />
    </div>
  ))}
</div>
<div className="flex text-center justify-center mt-4">
      <div className="pagination-container">
        <ReactPaginate
          breakLabel="..."
          breakClassName="bg-[#F3F3F3]"
          nextLabel={<MdOutlineKeyboardArrowRight />}
          onPageChange={handlePageChange}
          activeClassName="bg-[#FF8C00] text-white rounded"
          nextClassName="px-3 bg-[#F3F3F3] text-[20px] pt-[5px] rounded xxtra-small:mb-4"
          previousClassName="px-3 bg-[#F3F3F3] text-[20px] pt-[5px] rounded xxtra-small:mb-4"
          pageRangeDisplayed={itemsPerPage}
          pageCount={pageCount}
          previousLabel={<MdOutlineKeyboardArrowLeft />}
          className="flex justify-end xxtra-small:w-full xxtra-small:justify-start xtra-small:justify-start xxtra-small:flex-wrap xtra-small:flex-wrap"
          pageClassName="w-[30px] h-[30px] text-center mx-2 pt-[3px] rounded bg-[#F3F3F3] xxtra-small:mb-4 xtra-small:mb-4"
        />
      </div>
    </div>
     </div>
   </>
   
  );
};

export default ImageCardList;
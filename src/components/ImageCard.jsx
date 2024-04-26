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
    <div className='bg-w px-[30px]'>
      <h1 className="text-xl font-bold text-center pt-8 pb-2">TRENDING <span className='text-yellow-400'>STICKERS</span></h1>
      <div className="grid gap-5 max-lx:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {paginatedData.map(item => (
          <CardList key={item.id} list={item} />
        ))}
      </div>
      <div className="flex justify-center mt-4 ">
        <div className="pagination-container">
          <ReactPaginate
            breakLabel="..."
            breakClassName="bg-[#F3F3F3]"
            nextLabel={<MdOutlineKeyboardArrowRight />}
            onPageChange={handlePageChange}
            activeClassName="bg-[#FF8C00] text-white rounded"
            nextClassName="px-3  bg-[#F3F3F3] text-[20px] pt-[5px] rounded xxtra-small:mb-4"
            previousClassName="px-3  bg-[#F3F3F3] text-[20px] pt-[5px] rounded xxtra-small:mb-4"
            pageRangeDisplayed={8}
            pageCount={pageCount}
            previousLabel={<MdOutlineKeyboardArrowLeft />}
            className=" flex justify-end  xxtra-small:w-full xxtra-small:justify-start xtra-small:justify-start xxtra-small:flex-wrap xtra-small:flex-wrap"
            pageClassName=" w-[30px] h-[30px]  text-center mx-2 pt-[3px] rounded bg-[#F3F3F3] xxtra-small:mb-4 xtra-small:mb-4"
            

          />
        </div>
      </div>
    </div>
  );
};

export default ImageCardList;
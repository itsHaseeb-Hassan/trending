'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import jsonData from '../constant/data.json'; 

const ImageCard = ({ imageUrl, imageText }) => (
  <Link href="/products/id">
  <div className="max-w-xl mx-auto w-[300px]">
    <Image src={imageUrl} alt="Your Image" width={200} height={150} className="w-full h-auto" />
    <div className="p-3">
      <p className="text-center text-sm font-bold hover:text-gray-400">{imageText}</p>
    </div>
  </div>
  </Link>
);

const ImageCardList = () => {
    const itemsPerPage = 8; 
    const [currentPage, setCurrentPage] = useState(0);
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    const paginatedData = jsonData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  
    return (
      <div className='bg-[#F1F1F1]'>
        <h1 className="text-xl font-bold text-center pt-8 pb-2">TRENDING <span className='text-yellow-400'>STICKERS</span></h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-2">
          {paginatedData.map(item => (
            <ImageCard key={item.id} imageUrl={item.imageUrl} imageText={item.imageText} />
          ))}
        </div>
        <div className="flex justify-center mt-4 ">
        <div className="pagination-container">
        <ReactPaginate
        previousLabel={(currentPage + 1) * itemsPerPage < jsonData.length ? "" : "<"}
        nextLabel={currentPage > 0 ? "" : ">"}
          breakLabel={"..."}
          pageCount={Math.ceil(jsonData.length / itemsPerPage)}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
        </div>
        </div>
      </div>
    );
  };
  
  export default ImageCardList;
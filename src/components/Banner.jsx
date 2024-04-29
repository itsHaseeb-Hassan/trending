import React from "react";
import { GoArrowRight } from "react-icons/go";
const Banner = () => {
  return (
    <div
    className="w-full h-[200px] bg-cover bg-center bg-no-repeat relative"
    style={{
      backgroundImage: `url('/images/bg-banner.png')`,
    }}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white uppercase text-2xs palanquin-dark-regular flex">
        <span className="flex items-center">
          <span className="ms-2 cursor-pointer">Shoping Cart</span>
          <GoArrowRight />
        </span>
        <span className=" cursor-pointer flex items-center ms-2 text-[#FCD9BA] hover:text-[#FFFFFF]">
          Checkout
          <GoArrowRight />
        </span>
        <span className=" cursor-pointer flex items-center ms-2 text-[#FCD9BA]">Order Complete</span>
      </p>
    </div>
  </div>
  );
};

export default Banner;

"use client";
import React, { useState } from "react";
import jsonData from "@/constant/data.json";
import Image from "next/image";
import CustomSlider from "@/components/CustomeSlider";
import CardList from "@/components/CardList";
import {
  FaFacebook,
  FaPinterest,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Product = ({ params }) => {
  const [activeImag, setActiveImg] = useState(0);
  const { slug } = params;

  const filteredData = jsonData.filter((item) => item.id === Number(slug));
  if (filteredData.length === 0) {
    return <div>No product found for this slug</div>;
  }
  const product = filteredData[0];

  return (
    <div>
      <div className="container flex  flex-col mt-5 mb-16 md:flex-row">
        <div className="mx-8">
  <div className="w-full max-w-[800px] md:max-w-none md:w-[800px] h-[800px] bg-red-400">
    <img
      className="object-cover object-center w-full h-full"
      src={product.productImages[activeImag]?.url}
      alt={product.imageText}
    />
  </div>
  <div className="grid grid-cols-4 gap-2 pt-4">
    {product.productImages?.map((pro) => (
      <Image
      onClick={() => setActiveImg(pro.id)}
      key={pro.id}
      src={pro?.url}
      width={200}
      height={200}
      className={`${
        activeImag === pro?.id ? "opacity-[0.5]" : "opacity-1"
      } cursor-pointer`}
        alt="product_imgs"
      />
    ))}
  </div>
</div>
        <div className="sm: mx-7 md:mx-2">
          <h2 className="palanquin-dark-regular text-4xl my-2 ">
            {product.imageText}
          </h2>
          <h2 className="text-[#f68c31] text-2xs  palanquin-regular ">
            {product.imagePrice}
          </h2>
          <form className="p-4 ">
            <div className="md:mb-4 ">
              <label
                className="block text-[#3a3a3a] palanquin-regular font-normal text-3xs  mb-2 "
                for="inputText"
              >
                Your Text{" "}
                <span class=" right-0 top-0 mt-2 mr-2 text-red-500">*</span>
              </label>
              <input
                className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inputText"
                type="text"
                placeholder="Text Field"
              />
            </div>
            <span className="my-7 text-3xs font-normal">Max 10 Stickers</span>
            <div className="mt-12">
              <label
                className="block text-[#3a3a3a] palanquin-regular font-normal text-3xs  mb-2 "
                for="inputText"
              >
                Quantity{" "}
                <span class=" right-0 top-0 mt-2 mr-2 text-red-500">*</span>
              </label>
              <select
                className="text-3xs mt-5 block appearance-none w-full border border-gray-300 rounded py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dropdown"
              >
                <option> 15 stikers-$30.00</option>
                <option> 25 stikers-$40.00</option>
                <option> 35 stikers-$50.00</option>
              </select>
            </div>
            <button
              className="mt-8 w-full bg-[#F68c31] hover:bg-[#F68c31] text-white font-bold py-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              ADD TO CART
            </button>
          </form>
          <div className="text-3xs flex p-4 palanquin-dark-regular">
            <span>Share:</span>
            <div className=" mt-1 flex ms-2">
              <FaFacebook  />
              <FaPinterest className="ms-2"/>
              <FaLinkedin className="ms-2"/>
              <FaEnvelope className="ms-2"/>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-10">
        <div className="text-center  ">
          <span className="border-yellow-400 border-t-2 text-2xl my-2">
            Description{" "}
          </span>
        </div>
        <h2 className="font-bold text-3xl mb-3">{product.imageText}</h2>
        <p className="mb-3 text-md text-gray-500">
          {product.mainPage[0].mainDescription}
        </p>
        <p className="mb-3 text-md text-gray-500">
          {product.mainPage[0].mainCustom}
        </p>
        <p className="uppercase mt-5  text-gray-500 mb-5">Detials:</p>
        <li className="text-gray-500 ">
          {product.mainPage[0].mainDetail.detail1}
        </li>
        <li className="text-gray-500">
          {product.mainPage[0].mainDetail.detail2}
        </li>
        <li className="text-gray-500">
          {product.mainPage[0].mainDetail.detail3}
        </li>
        <p className="uppercase text-md mt-5 text-gray-500">Note:</p>
        <p className="text-gray-500 mt-3">{product.note}</p>
      </div>

      <div className="px-3">
        <CustomSlider>
          {jsonData?.slice(10).map((list) => (
            <CardList key={list.id} list={list} />
          ))}
        </CustomSlider>
      </div>
    </div>
  );
};

export default Product;

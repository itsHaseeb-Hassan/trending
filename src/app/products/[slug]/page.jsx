"use client"
import React, { useState } from 'react';
import jsonData from '@/constant/data.json';
import Image from 'next/image';
import CustomSlider from '@/components/CustomeSlider';
import CardList from '@/components/CardList';

const Product = ({ params }) => {
    const [activeImag, setActiveImg] = useState(0)
    const { slug } = params;

    const filteredData = jsonData.filter(item => item.id === Number(slug));
    if (filteredData.length === 0) {
        return <div>No product found for this slug</div>;
    }
    const product = filteredData[0];

    return (
        <div>
            <div className="container flex flex-col mt-5 mb-16 md:flex-row">
                <div className='mx-8'>
                    <Image src={product.productImages[activeImag]?.url} alt={product.imageText} width={800} height={50} />
                    <div className='grid grid-cols-4 gap-2 pt-4 '>
                        {
                            product.productImages?.map((pro) => (
                                <Image onClick={() => setActiveImg(pro.id)} key={pro.id} src={pro?.url} width={200} height={200} className={`${activeImag === pro?.id ? 'opacity-[0.5]' : 'opacity-1'} cursor-pointer`} alt="product_imgs" />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2 className='font-bold  my-5 md:font-bold md:text-2xl'>{product.imageText}</h2>
                    <h2 className='text-yellow-400 sm-mb-2 md:text-2xl md:mb-5 md:font-bold '>{product.imagePrice}</h2>
                    <form className="p-4 mt-5">
                        <div className="md:mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="inputText">
                                Your Text
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="inputText" type="text" placeholder="Text Field" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="dropdown">
                                5 stikers-$17.00
                            </label>
                            <select
                                className=" mt-5 block appearance-none w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dropdown">
                                <option> 15 stikers-$30.00</option>
                                <option> 25 stikers-$40.00</option>
                                <option> 35 stikers-$50.00</option>
                            </select>
                        </div>
                        <button
                            className=" w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            ADD TO CART
                        </button>
                    </form>

                </div>
            </div>
            <hr />
            <div className='px-10'>
                <div className="text-center  ">
                   <span className='border-yellow-400 border-t-2 text-2xl my-2' >Description </span>
                    </div>
                <h2 className='font-bold text-3xl mb-3'>{product.imageText}</h2>
                <p className='mb-3 text-md text-gray-500'>{product.mainPage[0].mainDescription}</p>
                <p className='mb-3 text-md text-gray-500'>{product.mainPage[0].mainCustom}</p>
                <p className='uppercase mt-5  text-gray-500 mb-5'>Detials:</p>
                <li className='text-gray-500 '>{product.mainPage[0].mainDetail.detail1}</li>
                <li className='text-gray-500'>{product.mainPage[0].mainDetail.detail2}</li>
                <li className='text-gray-500'>{product.mainPage[0].mainDetail.detail3}</li>
                <p className='uppercase text-md mt-5 text-gray-500'>Note:</p>
                <p className='text-gray-500 mt-3'>{product.note}</p>
            </div>

            <div className='px-3'>
                <CustomSlider>
                    {
                        jsonData?.slice(10).map((list) => (
                                <CardList list={list} />

                        ))
                    }
                </CustomSlider>
            </div>
        </div>
    );
};

export default Product;
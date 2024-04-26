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
            <div className="container flex mt-5 mb-16">
                <div className='mx-8'>
                    <Image src={product.productImages[activeImag]?.url} alt={product.imageText} width={800} height={50} />
                    <div className='flex gap-x-3 pt-4  '>
                        {
                            product.productImages?.map((pro) => (
                                <Image onClick={() => setActiveImg(pro.id)} key={pro.id} src={pro?.url} width={200} height={200} className={`${activeImag === pro?.id ? 'opacity-[0.5]' : 'opacity-1'} cursor-pointer`} alt="product_imgs" />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-2xl'>{product.imageText}</h2>
                    <h2 className='text-yellow-400 text-2xl'>{product.imagePrice}</h2>
                    <form className="p-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="inputText">
                                Your Text
                            </label>
                            <input
                                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="inputText" type="text" placeholder="Text Field" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="dropdown">
                                5 stikers-$17.00
                            </label>
                            <select
                                className="block appearance-none w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <h1 className="text-center ">Description</h1>
                <h2 className='font-bold text-2xl'>{product.imageText}</h2>
                <p>{product.mainPage[0].mainDescription}</p>
                <p className='uppercase mt-5'>Detials:</p>
                <li>{product.mainPage[0].mainDetail.detail1}</li>
                <li>{product.mainPage[0].mainDetail.detail2}</li>
                <li>{product.mainPage[0].mainDetail.detail3}</li>
                <p className='uppercase text-md'>Note:</p>
                <p>{product.note}</p>
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
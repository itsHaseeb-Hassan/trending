import React from 'react';
import jsonData from '../../constant/data.json';
import Image from 'next/image';

const Product = ({ params }) => {
    const { slug } = params;
    let decodedSlug = decodeURIComponent(slug);

    const filteredData = jsonData.filter(item => item.imageText === decodedSlug);
    if (filteredData.length === 0) {
        return <div>No product found for this slug</div>;
    }
    const product = filteredData[0];

    return (
        <div>
              <div className="container justify-around flex mt-5 mb-16">
                <div className='mx-20'>
                <img src={product.imageUrl} alt={product.imageText} width={800} height={50} />
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
                        id="inputText" type="text" placeholder="Text Field"/>
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
              <hr/>
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
        </div>
    );
};

export default Product;
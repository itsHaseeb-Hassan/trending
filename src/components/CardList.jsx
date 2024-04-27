"use client"
import Link from 'next/link';
import React, { useState } from 'react'
const CardList = ({ list }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link href={`/products/${list?.id}`}>
           
            <div className="max-w-xl mx-auto w-[300px] overflow-hidden  ">
                <div
                    className={`w-full h-[300px] bg-cover bg-center ${isHovered ? "transition-all duration-1000 ease-in-out transform hover:scale-110" : ""
                        }`}
                    style={{
                        backgroundImage: isHovered
                            ? `url(${list?.hoverdUrl})`
                            : `url(${list?.imageUrl})`  // Normal image URL
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                ></div>
            </div>
            <div className='w-full md:w-[300px] sm:w-[200px]'>
    <h2 className='palanquin-dark-regular text-3xs pt-2 text-center justify-center hover:text-[#69727d]'>{list?.imageText}</h2>
</div>

        </Link>

    )
}

export default CardList
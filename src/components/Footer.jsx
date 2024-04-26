import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <>
     <footer className="bg-[#F1F1F1] h-full ">
        <div className="border-b border-gray-400 pb-6">
        <div className="w-full mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">PRODUCTS</h2>
            <ul className="text-gray-500 dark:text-gray-400 text-sm">
                <li className="mb-4">
                    <Link href="#" className=" hover:text-black">Custom Stickers</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">Custom Labels</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">Custom Packaging</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">Custom Photo Stickers</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">CustomAny Collections</Link>
                </li>
                
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Who we are</h2>
            <ul className="text-gray-500 dark:text-gray-400 text-sm">
                <li className="mb-4">
                    <Link href="#" className=" hover:text-black">Blog</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">About us</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">Contact us</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">Reviews</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">support</h2>
            <ul className="text-gray-500 dark:text-gray-400 text-sm">
                <li className="mb-4">
                    <Link href="#" className=" hover:text-black">Term of Use</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">Shipping Policy</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">Return and Refund Policy</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:text-black">FAQs</Link>
                </li>
                
            </ul>
        </div>
        <div>
            <Image src="/images/customany-logo-header.png" className="mt-2" width={150} height={200} />
            <ul className="text-gray-500 dark:text-gray-400 text-sm">
                <li className="mb-4 flex items-center mt-5">
                    <Image src="/images/wd-envelope-dark.svg" className=" mr-2" width={12} height={20}/>
                    <Link href="#" className=" hover:text-black">Contact: support@customany.com</Link>
                </li>
                <li className="mb-4 flex items-center">
                    <Image src="/images/wd-cursor-dark.svg" className=" mr-2" width={12} height={20}/>
                    <Link href="#" className=" hover:text-black">Headquater: 3 Coleman Street, #03-24, Peninsula Shopping Complex, Singapore, 179804</Link>
                </li>
                <li className="mb-4 flex items-center">
                    <Image src="/images/wd-cursor-dark.svg" className=" mr-2" width={12} height={20}/>
                    <Link href="#" className=" hover:text-black">Factory: 3318 Red Maple Drive, Alhambra, CA 91801, USA</Link>
                </li>
                <li className="mb-4 flex items-center">
                    <Image src="/images/Untitled-800-×-800-px-2-1-14x14.png" className=" mr-2" width={12} height={20}/>
                    <Link href="#" className=" hover:text-black">Support Time: Mon - Sun 9:00am - 5:30pm (CT)</Link>
                </li>
            </ul>
        </div>
            </div>
           
        </div>
        </div>
        <div className="container mx-auto flex justify-between items-center py-4 ">
        <div className="text-gray-600 uppercase">CUSTOMANY <span>2023 Created by</span> CUSTOMANY</div>
        <div className="flex-grow"></div> 
        <div className="flex items-center">
        
        </div>
        </div>
        </footer>   

    </>
  )
}

export default Footer
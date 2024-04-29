import Image from "next/image";
import { GoCheck } from "react-icons/go";
import { MdClose } from "react-icons/md";
const CartItem = () => {
  return (
    <>
      <div className="container flex w-full items-center bg-[#459647] h-14 mx-auto my-10">
        <div className="text-white ms-5">
          <GoCheck size={40} />
        </div>
        <p className="text-3xs text-white ms-14">
          {`“I'm not like a regular Mom I'm a Cool Mom custom sticker” removed.
          Undo?`}
        </p>
      </div>

      <div className=" container grid grid-cols-1 mt-5 mb-5 md:grid-cols-3">
        <div className="ms-10 overflow-x-auto my-5 col-span-1 md:col-span-2 ">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#E6E6E6]">
                <th></th>
                <th className="px-4 py-2 palanquin-dark-regular text-3xs uppercase">
                  Product
                </th>
                <th className="px-4 py-2 palanquin-dark-regular text-3xs uppercase">
                  Price
                </th>
                <th className="px-4 py-2 palanquin-dark-regular text-3xs uppercase">
                  Quantity
                </th>
                <th className="px-4 py-2 palanquin-dark-regular text-3xs uppercase">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2border-[#E6E6E6] text-center">
                <td className="px-4 py-2 flex justify-center items-center pt-3">
                  {/* <img
                  src="product-image.jpg"
                  alt="Product Image"
                  className="w-16 h-16 object-cover"
                /> */}
                  <MdClose className="" />
                </td>
                <td className="px-4 py-2 max-w-[500px]">
                  <h2 className="text-start text-[14px] font-semibold text-[#333333] hover:text-[#787878]">
                    {`I'm not like a regular Mom I'm a Cool Mom custom sticker
                    [Edit options]`}
                  </h2>
                  <div className="flex flex-col items-start">
                    <h2 className="text-[14px] font-semibold text-[#333333] ">
                      Custom text :{" "}
                      <span className="font-normal">jasuyaia</span>
                    </h2>
                    <h2 className="text-[14px] font-semibold text-[#333333] ">
                      Quantity:{" "}
                      <span className="font-normal">5 stickers ($14.00)</span>
                    </h2>
                  </div>
                </td>
                <td className="px-4 py-2">$10.00</td>
                <td className="px-4 py-2">$10.00</td>
                <td className="px-4 py-2 text-[#F68c31] palanquin-regular text-3xs">
                  $10.00
                </td>
              </tr>
            </tbody>
          </table>
          <div className="grid grid-cols-3 mt-3 overflow-hidden">
            <input
              className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputText"
              type="text"
              placeholder="Coupon Code"
            />
            <button
              className="ms-5 w-[140px] bg-[#F68c31] hover:bg-[#EA732E]  text-white font-semibold py-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              APPLY COUPON
            </button>
            <div className="flex justify-end">
              <button
                className=" uppercase w-[140px] hover:bg-[#EEEEEE] bg-gray-50  text-[#828282] font--normal py-2 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Update Cart
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#E6E6E6] h-auto mx-10 px-10 py-5 w-[420px]">
          <div className="flex flex-col">
            <h1 className="palanquin-dark-regular text-xs uppercase">
              Cart Total
            </h1>
            <div className=" border-b border-gray-300 mt-10 ">
              <div className="flex justify-between mb-5">
                <h3 className="palanquin-dark-regular text-3xs">Subtotal</h3>
                <p className="text-[#777] palanquin-regular">$14.00</p>
              </div>
            </div>
            <div className=" border-b border-gray-300">
              <div className="flex justify-between items-center mb-5">
                <h3 className="palanquin-dark-regular text-3xs">Shipping</h3>

                <div className="flex flex-col justify-end items-end w-full">
                  <div className="w-[200px]">
                    <p className=" text-3xs text-end text-[#242424] font-normal">
                      Secured Shipping (Include Tracking):
                      <span className="text-[#F68c31] palanquin-regular text-3xs">
                        $5.99
                      </span>
                    </p>
                  </div>
                  <div className=" ps-3">
                    <p className="ms-4">
                      Shipping to{" "}
                      <span className=" palanquin-regular text-3xs">TX</span>
                    </p>
                    <p className="text-[#f68c31] font-normal palanquin-regular ">
                      Change address
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-10 ">
              <div className="flex justify-between mb-5">
                <h3 className="palanquin-dark-regular items-center text-3xs mt-2">
                  Total
                </h3>
                <p className="text-[#f68c31] palanquin-regular text-2xs">
                  $19.99
                </p>
              </div>
            </div>
            <button
              className="mt-5 w-full bg-[#FFC439]  hover:bg-[#F2BA36]  text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Image
                src="/images/paypal.svg"
                className="mx-auto"
                width={80}
                height={50}
              />
            </button>
            <button
              className="mt-3 w-full bg-[#FFC439]  hover:bg-[#F2BA36] text-black  py-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <span className="flex justify-center">
                <Image
                  src="/images/pay.svg"
                  className="mt-1"
                  width={15}
                  height={10}
                />
                Pay Later
              </span>
            </button>
            <button
              className="mt-3 w-full bg-[#2C2E2F] text-white  py-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <span className="flex justify-center">
                <Image
                  src="/images/debiticon.svg"
                  className="mt-1"
                  width={30}
                  height={10}
                />
                Debit or Credit Card
              </span>
            </button>
            <div className="flex justify-center mx-auto mt-2">
              Powered By
              <Image
                src="/images/paypal.svg"
                className="mx-auto mt-2 ms-2"
                width={40}
                height={50}
              />
            </div>
            <h1 className="text-center mt-5 text-3xs ">-OR-</h1>
            <button
              className="uppercase my-8 w-full bg-[#F68c31] hover:bg-[#F68c31] text-white font-bold py-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

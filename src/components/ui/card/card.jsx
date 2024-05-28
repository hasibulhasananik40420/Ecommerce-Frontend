import Image from "next/image";
import Link from "next/link";
import { Stars } from "../../../util/Stars";

const ProductCard = () => {
  const specification = ["-15%", "hot", "new", "sold out"];

  return (
    <div className="border w-[300px] h-full bg-white ">
      {/* <div className="px-[30px] mt-2 w-full">
        <div className="progress-title flex justify-between">
          <p className="text-xs text-black font-[500]  leading-6">
            Products Available
          </p>
          <span className="text-sm text-black font-[600] leading-6">20</span>
        </div>
        <div className="progress w-full h-[5px] rounded-[22px] bg-gray-200 relative overflow-hidden">
          <div
            className="h-full absolute left-0 top-0 bg-[#dd2831]"
            style={{ width: `${50}%` }}
          ></div>
        </div>
      </div> */}
      <div className="relative">
        <div className="absolute left-2 top-2 z-50 flex flex-col gap-1 ">
          {specification.map((item, i) => (
            <p
              key={i}
              className={`
              ${item === "hot" && "bg-[#DD2831]"}
              ${item === "new" && "bg-[#19cc40]"}
               ${
                 item === "sold out" && "bg-gray-400"
               } bg-[#0068c8] text-[12px]  font-700 leading-none py-[6px] text-center px-3 uppercase text-[#ffffff] rounded-e-md rounded-b-md tracking-wider `}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div
        className=" group relative overflow-hidden"
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px 0px" }}
      >
        <div className=" w-full h-[300px] relative">
          <Link href="/single-product">
            <Image
              src="https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"
              layout="fill"
              objectFit="cover"
              alt="Product Image"
            />
          </Link>
        </div>
        <div className="px-[15px] pb-[30px] relative">
          <div className="absolute w-full h-10 px-[15px] left-0 top-40 group-hover:top-[85px] transition-all duration-300 ease-in-out">
            <button className=" bg-blue-500 text-white w-full py-2 font-bold rounded-sm hover:text-blue-500 outline outline-blue-500 hover:bg-white outline-1">
              <div className="flex items-center justify-center space-x-3">
                <span>Add To Cart</span>
              </div>
            </button>
          </div>
          <div className="mb-3">
            <Stars
              count={5}
              value={3}
              position="horizontal"
              activeColor="text-orange-600 w-4"
              color="text-gray-200 w-4"
            ></Stars>
          </div>
          <Link href="/single-product">
            <p className="font-bold mb-2 text-[15px] font-600 text-black leading-[24px] line-clamp-2 hover:text-blue-600">
              Xoggle aute et pariatur adipisicing nostrud et excepteur
            </p>
          </Link>
          <p className="price">
            <span className=" text-[#dd2831]  font-[700] text-[18px]">
              $699.99
            </span>
            <span className=" main-price text-[#848484] line-through text-[18px] ml-2 font-semibold">
              $949.99
            </span>
          </p>
        </div>
        <div className="flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20 transition-all duration-300 ease-in-out">
          <span className="w-10 h-10 flex justify-center items-center bg-gray-200 cursor-pointer rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          </span>
          <span className="w-10 h-10 flex justify-center items-center bg-gray-200 cursor-pointer rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </span>
          <span className="w-10 h-10 flex justify-center items-center bg-gray-200 cursor-pointer rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

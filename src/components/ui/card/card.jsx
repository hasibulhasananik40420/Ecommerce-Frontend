import Image from "next/image";
import Link from "next/link";
import { Stars } from "../../../util/Stars";

const ProductCard = () => {
  return (
    <div
      className="border w-[300px] h-full bg-white relative group overflow-hidden"
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px 0px" }}
    >
      <div className="px-[30px] mt-2 w-full">
        <div className="progress-title flex justify-between">
          <p className="text-xs text-black font-[500]  leading-6">
            Products Available
          </p>
          <span className="text-sm text-black font-[600] leading-6">
            {/* {availableProducts} */} 20
          </span>
        </div>
        <div className="progress w-full h-[5px] rounded-[22px] bg-gray-200 relative overflow-hidden">
          <div
            className="h-full absolute left-0 top-0 bg-[#dd2831]"
            style={{ width: `${50}%` }}
          ></div>
        </div>
      </div>
      <div className="product-card-img w-full h-[300px] relative">
        <Image
          src="https://shopo.quomodothemes.website/assets/images/product-img-2.jpg"
          layout="fill"
          objectFit="cover"
          alt="Product Image"
        />
      </div>
      <div className="px-[15px] pb-[30px] relative">
        <div className="absolute w-full h-10 px-[15px] left-0 top-40 group-hover:top-[85px] transition-all duration-300 ease-in-out">
          <button className=" bg-blue-500 text-white w-full py-2 font-bold rounded-sm hover:text-blue-500 outline outline-blue-500 hover:bg-white outline-1">
            <div className="flex items-center justify-center space-x-3">
              <span>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M12.5664 4.14176C12.4665 3.87701 12.2378 3.85413 11.1135 3.85413H10.1792V3.43576C10.1792 2.78532 10.089 2.33099 9.86993 1.86359C9.47367 1.01704 8.81003 0.425438 7.94986 0.150881C7.53106 0.0201398 6.90607 -0.0354253 6.52592 0.0234083C5.47246 0.193372 4.57364 0.876496 4.11617 1.85052C3.89389 2.32772 3.80368 2.78532 3.80368 3.43576V3.8574H2.8662C1.74187 3.8574 1.51313 3.88028 1.41326 4.15483C1.36172 4.32807 0.878481 8.05093 0.6723 9.65578C0.491891 11.0547 0.324369 12.3752 0.201948 13.3688C-0.0106763 15.0815 -0.00423318 15.1077 0.00220999 15.1371V15.1404C0.0312043 15.2515 0.317925 15.5424 0.404908 15.6274L0.781834 16H13.1785L13.4588 15.7483C13.5844 15.6339 14 15.245 14 15.0521C14 14.9214 12.5922 4.21694 12.5664 4.14176ZM12.982 14.8037C12.9788 14.8266 12.953 14.8952 12.9079 14.9443L12.8435 15.0162H1.13943L0.971907 14.8331L1.63233 9.82901C1.86429 8.04766 2.07047 6.4951 2.19289 5.56684C2.24766 5.16154 2.27343 4.95563 2.28631 4.8543C2.72123 4.85103 4.62196 4.84776 6.98661 4.84776H11.6901L11.6966 4.88372C11.7481 5.1452 12.9594 14.5128 12.982 14.8037ZM4.77338 3.8574V3.48479C4.77338 3.23311 4.80559 2.88664 4.84103 2.72649C5.03111 1.90935 5.67864 1.24584 6.48726 1.03339C6.82553 0.948403 7.37964 0.97782 7.71791 1.10202H7.72113C8.0755 1.22296 8.36545 1.41907 8.63284 1.71978C9.06453 2.19698 9.2095 2.62516 9.2095 3.41615V3.8574H4.77338Z"></path>
                </svg>
              </span>
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
  );
};

export default ProductCard;

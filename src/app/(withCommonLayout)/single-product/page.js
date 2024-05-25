"use client";

import Image from "next/image";
import Container from "../../../components/shared/Container/Container";
import { Stars } from "../../../util/Stars";
import { useState } from "react";
import ProductCard from "../../../components/ui/card/card";

const product = {
  name: "Unlocked Apple iPhone11 Pro, 64GB/256GB, 12MP Camera ",
  slug: "sample-product", // Usually, you would generate this using a slugify function
  description: "This is a sample product description.",
  price: 19.99,
  quantity: 100,
  shipping: true,
  sold: 0,
  image:
    "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/112.jpg",
  category: "iPhone",
};

const rating = [1];

const reviews = [
  {
    user: {
      profile: "",
      name: "Omar Faruk",
    },
    productRating: 5,
    description: "Great product!",
    image: [
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/112.jpg",
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/112.jpg",
    ],
    response: "Thank you!",
    date: "2024-01-26 16:39",
  },
  {
    productRating: 4,
    description: "Good value for money.",
    image: [],
    response: null,
    date: "2024-01-25 15:30",
  },
];

const totalRating = reviews.reduce(
  (acc, review) => acc + review.productRating,
  0
);
const ratingArray = reviews.map((review) => review.productRating);

const SingleProduct = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <Container>
        <section className="container mx-auto bg1 p-4">
          <div className="md:flex gap-6">
            <div className="w-1/2 ">
              <div className="main-product-image">
                <div className="border px-2 rounded-sm border-[#0fb232]">
                  <Image
                    src={product.image}
                    width={100}
                    height={100}
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* product content  */}
            <div className="w-1/2">
              <div className="main-product-details">
                <p className="text-[#aaaaaa]">{product.category}</p>
                <div className="border-bottom">
                  <h3 className="text-3xl text-[#000000c9] font-[500]">
                    {" "}
                    {product.name}
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <div className="flex gap-2 justify-start">
                    <div className="flex text-[16px] gap-4 text-[#fdc904] items-center">
                      {rating.length > 0 ? (
                        <div className="flex text-[15px] items-center gap-2">
                          <Stars
                            count={5}
                            value={4}
                            position="horizontal"
                            activeColor="text-orange-600"
                            color="text-gray-200"
                          />

                          <div className="flex justify-center items-center gap-2 text-[#000000c9] font-[600]">
                            <p className="">
                              ({rating.length.toFixed(2)}) {rating.length}{" "}
                              Review{" "}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-red-500">No Ratings</p>
                      )}

                      <div
                        class="text-[#0fb232] font-semibold border px-2 rounded-sm border-[#0fb232]"
                        data-original="9 in stock"
                        data-class="in-stock"
                      >
                        <span class="availability-text">
                          {product.quantity} in stock
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-8">
                    <div className="flex flex-col text-white rounded-md justify-center size-20 items-center bg-[#0068c8] ">
                      <span className="flex justify-center items-center  rounded-full text-2xl font-bold ">
                        {/* {timeLeft.days} */}
                        01
                      </span>
                      <span className="text-[16px] font-[400] -mt-2">Days</span>
                    </div>
                    <div className="flex flex-col text-white rounded-md justify-center size-20 items-center bg-[#0068c8] ">
                      <span className="flex justify-center items-center  rounded-full text-2xl font-bold ">
                        {/* {timeLeft.hours} */}
                        23
                      </span>
                      <span className="text-[16px] font-[400] -mt-2">
                        Hours
                      </span>
                    </div>
                    <div className="flex flex-col text-white rounded-md justify-center size-20 items-center bg-[#0068c8] ">
                      <span className="flex justify-center items-center  rounded-full text-2xl font-bold ">
                        {/* {timeLeft.minutes} */}
                        59
                      </span>
                      <span className="text-[16px] font-[400] -mt-2">
                        Minutes
                      </span>
                    </div>
                    <div className="flex flex-col text-white rounded-md justify-center size-20 items-center bg-[#0068c8] ">
                      <span className="flex justify-center items-center  rounded-full text-2xl font-bold ">
                        59
                        {/* {timeLeft.seconds} */}
                      </span>
                      <span className="text-[16px] font-[400] -mt-2">
                        Seconds
                      </span>
                    </div>
                  </div>

                  <div className="py-4 mt-2">
                    <p className="text-red-500 text-3xl font-bold">
                      <del className="text-xl  font-semibold text-gray-400">
                        {" "}
                        <span>$599.23</span>
                      </del>{" "}
                      $480.99{" "}
                    </p>
                  </div>
                </div>

                <div>
                  <ul className="px-[16px] text-[#a6a6a6] font-[500] list-disc flex gap-2 flex-col mt-6">
                    <li>RAM: 16GB</li>
                    <li>Hard Drive: 256GB SSD</li>
                    <li>Screen Size: 13.3 inches</li>
                  </ul>

                  <ul className="list-disc flex bg-[#e8f3fe] text-[#1273cc] font-[500] gap-2 flex-col mt-6 px-8 py-4 rounded-md">
                    <li>Estimated delivery time 14-30 days</li>
                    <li>18 months warranty at Genuine Warranty Center.</li>
                    <li>Whats in the box: charging cable and block</li>
                  </ul>
                </div>

                <div className="flex gap-4 mt-10">
                  <div className="bg-gray-100 w-[200px] flex items-center justify-around">
                    <button
                      //   onClick={() => handleQuantityChange(-1)}
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="">{product.quantity}</span>
                    <button
                      className="h-full"
                      //   onClick={() => handleQuantityChange(1)}
                    >
                      +
                    </button>
                  </div>
                  <button className=" bg-blue-500 text-white w-full py-2 font-bold rounded-sm hover:text-blue-500 outline outline-blue-500 hover:bg-white outline-1">
                    PLACE ORDER
                  </button>
                </div>

                <div className="border-t mt-8"></div>
                <div>
                  <ul className="px-[16px] text-[#a6a6a6] font-[500] flex gap-2 flex-col mt-6">
                    <li className="flex">
                      <p className="w-20 text-black">SKU :</p> {product.slug}
                    </li>
                    <li className="flex">
                      <p className="w-20 text-black">Tags :</p> 256GB SSD
                    </li>
                    <li className="flex">
                      <p className="w-20 text-black">Share :</p> 13.3 inches
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t mt-8"></div>
        <section id="ratings" className="mx-auto mt-6 bg-white py-6">
          <h3 className="bg-gray-100 p-2 text-[20px] font-semibold">
            Product Ratings
          </h3>

          <div>
            <div className="flex items-center gap-6 bg-[#fffbf8] p-6 mt-4 border border-orange-200">
              <div className="">
                <div className="font-semibold text-orange-500">
                  <span className="text-3xl">
                    {(totalRating / ratingArray.length).toFixed(1)}
                  </span>
                  <span className=""> out of 5</span>
                </div>
                <div className="w-[100%]">
                  <Stars
                    activeColor="text-orange-600"
                    color="text-gray-200"
                    count={5}
                    value={totalRating / ratingArray.length}
                    position="horizontal"
                  ></Stars>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between gap-4">
                  <button
                    onClick={() => setActive(0)}
                    className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActive(5)}
                    className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                  >
                    {`5 star (${
                      ratingArray.filter((value) => value === 5).length
                    })`}
                  </button>
                  <button
                    onClick={() => setActive(4)}
                    className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                  >
                    {`4 star (${
                      ratingArray.filter((value) => value === 4).length
                    })`}
                  </button>
                  <button
                    onClick={() => setActive(3)}
                    className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                  >
                    {`3 star (${
                      ratingArray.filter((value) => value === 3).length
                    })`}
                  </button>
                  <button
                    onClick={() => setActive(2)}
                    className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                  >
                    {`2 star (${
                      ratingArray.filter((value) => value === 2).length
                    })`}
                  </button>
                  <button
                    onClick={() => setActive(1)}
                    className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[100px] text-sm"
                  >
                    {`1 star (${
                      ratingArray.filter((value) => value === 1).length
                    })`}
                  </button>
                </div>
                <div className="flex mt-2 gap-4">
                  <button className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[200px] text-sm">
                    with comments (144)
                  </button>
                  <button className="px-2 py-1 text-black border border-gray-200 focus:border-red-500 bg-white w-[200px] text-sm">
                    With Media (56)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            {reviews
              .filter((item) => item.productRating === active || active === 0)
              .map((item, i) => (
                <div className="flex gap-2 mt-4" key={i}>
                  {/* Avatar */}
                  <div className="w-14 h-14">
                    <Image
                      width={50}
                      height={50}
                      alt="profile"
                      className="rounded-full"
                      src="https://down-my.img.susercontent.com/file/ac25f85470ed49473570bc86d990d4e7_tn"
                    />
                  </div>
                  {/* Main content */}
                  <div className="">
                    <div className="">
                      {item?.user?.name ? item?.user?.name : "User"}{" "}
                    </div>
                    <div className="">
                      {/* Rating stars */}
                      <Stars
                        activeColor="text-orange-600"
                        color="text-gray-200"
                        count={5}
                        value={item.productRating}
                        position="horizontal"
                      ></Stars>
                    </div>
                    <p className="">{item.date}</p>
                    <p className="mt-2">{item.description}</p>
                    <div className="mt-2">
                      <div className="flex flex-row items-center gap-2">
                        {item.image.map((img, ii) => (
                          <div className="w-32 h-16" key={ii}>
                            <Image
                              src={img}
                              className="w-full h-full"
                              alt={`Review image ${ii}`}
                              width={100}
                              height={100}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    {item.response && (
                      <div className="ml-4 p-2 bg-gray-100 mt-4 border">
                        <div className="">Seller's response:</div>
                        <div className="">{item.response}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </section>
      </Container>

      <ProductCard></ProductCard>
    </>
  );
};

export default SingleProduct;

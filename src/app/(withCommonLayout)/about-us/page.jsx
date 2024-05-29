import Image from "next/image";
import Container from "../../../components/shared/Container/Container";
import Link from "next/link";

import { FaArrowRight, FaRegComment, FaRegUser } from "react-icons/fa";
import { blogs } from "../blog/blogsData";

const About = () => {
  return (
    <>
      <Container>
        {" "}
        <div className="flex justify-center pt-10 pb-10 font-400 text-[13px] bg-[#fffaef]">
          <h1 className="text-3xl font-semibold">About Us</h1>
        </div>
        <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
          <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0">
            <Image
              src="https://shopo.quomodothemes.website/assets/images/about-banner.png"
              alt="about"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>
          <div className="content flex-1">
            <h1 className="text-[18px] font-medium mb-2.5">
              What is e-commerce business?
            </h1>
            <p className="text-[15px] text-[#8e93a9] leading-7 mb-2.5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {`industry's`} standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries but also the on leap into
              electronic typesetting.
            </p>
            <ul className="text-[15px] text-[#8e93a9] leading-7 list-disc ml-5 mb-5">
              <li>slim body with metal cover</li>
              <li>
                latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
              </li>
              <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
              <li>
                NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard
              </li>
            </ul>
            <Link
              href="./contact-us#contact"
              className=" bg-blue-500 text-white px-4 py-2 font-bold rounded-sm hover:text-blue-500 outline outline-blue-500 hover:bg-white outline-1"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div>
          <div className="title flex justify-center mb-5">
            <h1 className="text-3xl font-semibold "> Customers Feedback</h1>
          </div>
        </div>
        <div>
          <div className="title flex justify-center mb-5">
            <h1 className="text-3xl font-semibold ">My Latest News</h1>
          </div>

          <div className="w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
              {blogs.slice(0, 2).map((blog, i) => (
                <div className="item w-full " key={i}>
                  <div className="w-full border border-[#D3D3D3]">
                    <div className="img w-full h-[340px]">
                      <Image
                        src={blog?.image}
                        alt={blog?.tag}
                        className="w-full h-full object-cover"
                        width={500}
                        height={200}
                      />
                    </div>
                    <div className="p-[24px]">
                      <div className="flex space-x-9 mb-3">
                        <div className="flex space-x-1.5 items-center">
                          <span>
                            <FaRegUser className="size-[14px] text-orange-500" />
                          </span>
                          <span className=" capitalize">by {blog?.post}</span>
                        </div>
                        <div className="flex space-x-1.5 items-center">
                          <FaRegComment className="size-[14px] text-orange-500" />
                          <span className=" capitalize">
                            {blog.comment} Comments
                          </span>
                        </div>
                      </div>
                      <Link href="#">
                        <h1 className="text-[22px] leading-[32px] font-semibold transition-all hover:text-orange-500">
                          {blog.title}
                        </h1>
                      </Link>
                      <p className="text-[15px] leading-[24px] mt-4">
                        {blog.description}
                      </p>
                      <div className="w-full mt-[30px]">
                        <div
                          href="#"
                          className="flex w-[200px]   items-center font-semibold transition-all"
                        >
                          View More{" "}
                          <span>
                            <FaArrowRight className="size-4 ml-2" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;

import Image from "next/image";
import Container from "../../../components/shared/Container/Container";
import { FaArrowRight, FaRegComment, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { blogs } from "./blogsData";

const Blog = () => {
  return (
    <>
      <Container>
        <div>
          <div className=" flex justify-center mb-5 bg-[#fffaef] py-6">
            <h1 className="text-3xl font-semibold ">Our Blogs</h1>
          </div>

          <div className="w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
              {blogs.map((blog, i) => (
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

export default Blog;

import Image from "next/image";
import Container from "../../shared/Container/Container"
import { IoIosArrowForward } from "react-icons/io";
import image1 from '../../../assets/campaign-cover-countdown.jpg'
import appstore from '../../../assets/apple-store.png'
import playstore from '../../../assets/play-store.png'
import iphone from '../../../assets/app-screen.png'


const FlashSale = () => {
  return (
     <Container>
        <div className="flex justify-center gap-10 mt-10">
            <div className="w-[554px] h-[460px] bg-[#FFF9ED] p-12">
                 <div className="flex justify-center items-center gap-10">
                      <div className="flex flex-col justify-center items-center gap-1">
                      <span className="flex justify-center items-center size-20 bg-white rounded-full text-2xl font-bold text-red-500">
                         30
                      </span>
                       <span className="text-[20px] font-semibold">Days</span>
                      </div>
                      
                       <div className="flex flex-col justify-center items-center gap-1">
                      <span className="flex justify-center items-center size-20 bg-white rounded-full text-2xl font-bold text-[#2E78E5]">
                         23
                      </span>
                       <span className="text-[20px] font-semibold">Hours</span>
                      </div>

                   <div className="flex flex-col justify-center items-center gap-1">
                      <span className="flex justify-center items-center size-20 bg-white rounded-full text-2xl font-bold text-[#219653]">
                         59
                      </span>
                       <span className="text-[20px] font-semibold">Minutes</span>
                      </div>


                     <div className="flex flex-col justify-center items-center gap-1">
                      <span className="flex justify-center items-center size-20 bg-white rounded-full text-2xl font-bold text-[#EF5DA8]">
                         59
                      </span>
                       <span className="text-[20px] font-semibold">Seconds</span>
                      </div>

                 </div>


                      <h1 className="text-[40px] font-bold leading-[70px] mt-10">WOO! Flash Sale</h1>

                       <button className="text-[16px] font-medium flex items-center  gap-1 border-b-[1px] border-b-[#ee3a3a]"><span>Shop Now</span> <IoIosArrowForward className="size-4"/></button>



                


            </div>

                 <div className="w-[554px] h-[460px] bg-[#E5EAEE] p-12">
                
                     
                     <p className="text-[16px] font-medium mb-5">MOBILE APP VERSION</p>
                      <h1 className="text-[30px] font-bold leading-[40px]">Get Our <span className="text-red-500 border-b-[2px] border-b-red-500">Mobile App</span></h1>
                      <h1 className="text-[30px] font-bold">It’s Make easy for you life !</h1>

                      <div className="flex items-center gap-6 mt-7">
                            <Image className="cursor-pointer" src={playstore} alt="play store"/>
                            <Image className="cursor-pointer" src={appstore} alt="app store"/>
                      </div>

                       <div className="mt-10">
                       <Image src={iphone} alt="app store"/>
                       </div>

                


            </div>



            
        </div>
     </Container>
  )
}

export default FlashSale
"use client"

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import watchImage from "../../../assets/slide1-watches.png"
import Ipad from "../../../assets/slide1-ipad.png"
import IPhone from "../../../assets/slide1-iphone.png"
import Image from "next/image"


const SliderCard = () => {
    const settings = {
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    } 
  return (
    
     <div className=''>
        <Slider {...settings}>

             <div className='borer-0 outline-0'>
             <div className="bg-[#2C2C46] lg:h-[450px] h-full rounded-lg lg:flex justify-between items-center lg:px-20 ">
               <div className="lg:w-[550px] w-full">
               <div className="pt-10 lg:pt-0">
                  <p className="w-[140px] mx-auto lg:mx-0 py-[6px] bg-red-600 text-white font-bold text-[10px] uppercase rounded-ee-lg rounded-ss-lg text-center mb-4">weakend deal</p>
                  </div>

                   <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px] text-white text-center lg:text-left">All New </h1>
                   <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px] text-white text-center lg:text-left">For a Better You</h1>
                    <h3 className="text-[18px] font-medium text-white uppercase leading-10 text-center lg:text-left">amazing discount and deals</h3>

                     <div className="text-white text-[20px] mt-5 text-center lg:text-left">Form <span className="font-bold text-[24px] text-[#fcc904]">$399.00</span></div>

                      <div className="w-[170px] mx-auto lg:mx-0">
                      <button className="w-[170px] h-[48px] text-[16px] text-white mt-6 bg-[#0088FF] font-bold rounded-md uppercase">Shop Now</button>
                      </div>
               </div>

                <div className="lg:w-[640px] h-full w-full mt-10 lg:mt-0">
                    <Image className="lg:w-[640px] w-full h-full " src={watchImage} alt="slider image" placeholder="blur"/>
                </div>
           </div>


             </div>

        
            {/* slider 2 */}
           <div className='borer-0 outline-0'>
           <div className="bg-[#192C57] lg:h-[450px] h-full rounded-lg lg:flex justify-between items-center lg:pl-20 ">
               <div className="lg:w-[550px] w-full">
                  <div className="pt-10 lg:pt-0">
                  <p className="w-[140px] mx-auto lg:mx-0 py-[6px] bg-red-600 text-white font-bold text-[10px] uppercase rounded-ee-lg rounded-ss-lg text-center mb-4">today deal</p>
                  </div>

                   <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px] text-white text-center lg:text-left">Best iPad Deals </h1>
                   <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px]  text-white text-center lg:text-left">At A Glance</h1>
                    <h3 className="text-[18px] font-medium text-white uppercase leading-10 text-center lg:text-left">free shipping by Ecomall</h3>

                     <div className="text-white text-[20px] mt-5 text-center lg:text-left">Form <span className="font-bold text-[24px] text-[#fcc904]">$599.00</span></div>

                      <div className="w-[170px] mx-auto lg:mx-0">
                      <button className="w-[170px] h-[48px] text-[16px] text-white mt-6 bg-[#0088FF] font-bold rounded-md uppercase">Shop Now</button>
                      </div>
               </div>

                <div className="lg:w-[700px] w-full h-full mt-10 lg:mt-0 flex items-center overflow-hidden">
                    <Image className="w-full lg:h-[670px] h-full object-cover " src={Ipad} alt="slider image" placeholder="blur"/>
                </div>
           </div>
           </div>



            {/* slider 3 */}
             <div className='borer-0 outline-0'>
             <div className="bg-[#202F22] lg:h-[450px] h-full rounded-lg lg:flex justify-between items-center lg:pl-20 ">
               <div className="lg:w-[550px] w-full">
                  <div className="pt-10 lg:pt-0">
                  <p className="w-[140px] mx-auto lg:mx-0 py-[6px] bg-red-600 text-white font-bold text-[10px] uppercase rounded-ee-lg rounded-ss-lg text-center mb-4">big sale</p>
                  </div>

                   <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px] text-white text-center lg:text-left">IPhone On Sell At </h1>
                   <h1 className="lg:text-[50px] md:text-[50px] text-[37px] font-bold leading-[60px] md:leading-[80px] lg:leading-[60px]  text-white text-center lg:text-left">Up To 25% Off</h1>
                    <h3 className="text-[18px] font-medium text-white uppercase leading-10 text-center lg:text-left">by top product on Ecomall</h3>

                     <div className="text-white text-[20px] mt-5 text-center lg:text-left">Form <span className="font-bold text-[24px] text-[#fcc904]">$499.00</span></div>

                      <div className="w-[170px] mx-auto lg:mx-0">
                      <button className="w-[170px] h-[48px] text-[16px] text-white mt-6 bg-[#0088FF] font-bold rounded-md uppercase">Shop Now</button>
                      </div>
               </div>

                <div className="lg:w-[650px] w-full h-full mt-10 lg:mt-0  overflow-hidden">
                    <Image className="w-full lg:h-[630px] h-full mt-5 object-contain" src={IPhone} alt="slider image" placeholder="blur"/>
                </div>
           </div> 
             </div>

             </Slider>

           </div>




  )
}

export default SliderCard
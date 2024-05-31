
import Link from 'next/link';
import Container from '../Container/Container'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import dynamic from "next/dynamic";


const Navbar = () => {
  

  const AuthInfo = dynamic(() => import('../../ui/AuthInfo/AuthInfo'), { ssr: false })
   
  return (
    <div className=' bg-white'>
        <Container>
            <div className='flex justify-between items-center h-[12vh]'>
               <div>
                 logo
               </div>

                <div>
                 
                <div className="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch className='size-5' />  
        </div>
        <input type="search" className="block w-[450px] p-4 ps-14 text-sm text-gray-900 border-[1.5px] border-[#0169C8] rounded-lg bg-gray-50 outline-0" placeholder="Search products"  />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>

                </div>

                <div className='flex items-center gap-6'>
                   
                  <div className='relative cursor-pointer'>
                  <CiHeart className='size-10 hover:text-[#0169C8] duration-300'/>
                   <span className='absolute top-[-3px] left-6 size-5 bg-[#0169C8] rounded-full  flex justify-center items-center'>
                    <p className='text-[14px] font-semibold text-white'>0</p>
                   </span>
                  </div> 

                  <Link href='/cart' className='relative cursor-pointer'>
                  <CiShoppingCart className='size-10 hover:text-[#0169C8] duration-300'/>
                   <span className='absolute top-[-3px] left-6 size-5 bg-[#0169C8] rounded-full  flex justify-center items-center'>
                    <p className='text-[14px] font-semibold text-white'>0</p>
                   </span>
                  </Link>

                   <Link href='/login' className='cursor-pointer'>
                   <CiUser className='size-9 hover:text-[#0169C8] duration-300'/>
                   </Link>

                    {/* <AuthInfo/> */}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar
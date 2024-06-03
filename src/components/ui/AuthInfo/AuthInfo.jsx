'use client'

import Image from 'next/image';
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { getUserInfo, removeUserFromCookies } from '../../../services/authServices';
import { useRouter } from 'next/navigation';

const AuthInfo = () => {
  const router = useRouter()
  const userInfo = getUserInfo()
  // console.log(userInfo)
  
  const handleLogout =()=>{
    removeUserFromCookies()
    router.refresh()
    router.push("/login")
  }

  return (
    <div>

    
      
      {
        userInfo ?  
        <>
        <Image className='w-[50px] h-[50px] rounded-full' src={userInfo?.user?.image} alt='' width={50} height={50}/>
        <button onClick={handleLogout}>logout</button>
        </>
        
        :
        
        <Link href='/login' className='cursor-pointer'>
        <CiUser className='size-9 hover:text-[#0169C8] duration-300'/>
        </Link>
      }
       </div>
  );
};

export default AuthInfo;

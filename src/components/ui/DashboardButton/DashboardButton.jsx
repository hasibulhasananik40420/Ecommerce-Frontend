'use client'
import Link from 'next/link'
import { getUserInfo } from '../../../services/authServices'
import { useEffect, useState } from 'react';
import { USER_ROLE } from '../../../contants/role';

const DashboardButton = () => {
    const [userInfo, setUserInfo] = useState({});
    const [role, setRole] = useState('');
  
  
    useEffect(() => {
      const info = getUserInfo();
       setUserInfo(info);
      if (info?.user?.isAdmin) {
        setRole(USER_ROLE.admin);
      } else {
        setRole(USER_ROLE.user);
      }
    }, []);
  
    //  console.log(userInfo)
  
  return (
    <div>
           {
            userInfo ? <>
            
            <Link href={`/dashboard/${role}`} className='relative cursor-pointer'>
                      Dashboard
                  </Link>
            </> :""
           }
    </div>
  )
}

export default DashboardButton
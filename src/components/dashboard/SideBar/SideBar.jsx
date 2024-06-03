'use client'
import List from '@mui/material/List';

import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { drawerItems } from '../../../util/drawerItems';
import SidebarItem from './SidebarItem';
import { useEffect, useState } from 'react';
import { USER_ROLE } from '../../../contants/role';
import { getUserInfo } from '../../../services/authServices';





const SideBar = () => {
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
    <Box>
        <Stack component={Link} href='/' py={2} sx={{backgroundColor:'#FFBB38',}}>
            <Typography variant='h6' component='h1'>logo</Typography>
        </Stack>
     

        <List>
            {drawerItems(role).map((item, index) => (
             <SidebarItem key={index} index={index} item={item}/>
            ))}
          </List>



    </Box>
  )
}

export default SideBar
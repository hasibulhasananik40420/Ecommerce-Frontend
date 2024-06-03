import Link from 'next/link'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { usePathname } from 'next/navigation';



const SidebarItem = ({item,index}) => {
    const linkPath = `/dashboard/${item.path}`
    const pathname = usePathname()
  return (
    <Link href={linkPath}>
    
    <ListItem key={index} disablePadding sx={{
        ...(pathname===linkPath ? {borderRight:'3px solid #1586FD', backgroundColor:'#FFBB38', '& svg':{color:'#1586FD'}} : {}),
        mb:1
       
    }}>
                <ListItemButton>
                  <ListItemIcon>
                    {
                        item.icon && <item.icon/>
                    }
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
    </Link>
  )
}

export default SidebarItem
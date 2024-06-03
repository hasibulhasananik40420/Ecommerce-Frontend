import { USER_ROLE } from "../contants/role"
import DashboardIcon from "@mui/icons-material/Dashboard";

export const drawerItems =(role)=>{

    const roleMenus =[]

    switch (role) {
       case USER_ROLE.admin:
        roleMenus.push(
            {
            title:'Dashboard',
            path:`${role}`,
            icon:DashboardIcon
        },
         {
            title:'Create Categories',
            path:`${role}/categories`,
            icon:DashboardIcon
        },
        {
            title:'Create Products',
            path:`${role}/create-products`,
            icon:DashboardIcon
        }
    
    )
        break



        case USER_ROLE.user:
            roleMenus.push(
                {
                    title:'Dashboard',
                    path:`${role}`,
                    icon:DashboardIcon
                },
                {
                title:'My Profile',
                path:`${role}/my-profile`,
                icon:DashboardIcon
            },
             {
                title:'Order List',
                path:`${role}/order-list`,
                icon:DashboardIcon
            }
        
        )
            break

            default:
                break;

    }


    return [...roleMenus]

}
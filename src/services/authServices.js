import { authKey } from "../contants/authKey";
import { decodedToken } from "../util/jwt";
import Cookies from 'js-cookie';

export const storeUserInfo = ({accessToken}) => {

      //use to js-cookies

      if (!accessToken) return;
      Cookies.set(authKey, accessToken); // Set the access token in cookies

  };
  
  
  export const getUserInfo = () => {


    const accessToken = Cookies.get(authKey); // Get the access token from cookies
    if (accessToken) {
        const decodedData = decodedToken(accessToken);
        return { ...decodedData };
    }


      
  };

 
  
  export const isLoggedIn = () => {
    return !!Cookies.get(authKey); // Check if access token exists in cookies
};

  


export const removeUserFromCookies = () => {
  Cookies.remove(authKey); // Remove the access token from cookies
};

  
  
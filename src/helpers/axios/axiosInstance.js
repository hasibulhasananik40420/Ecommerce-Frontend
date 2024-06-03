// import axios from "axios";
// import { getToLocalStorage } from "../../util/local.storage";
// import { authKey } from "../../contants/authKey";

// const instance = axios.create() 
// instance.defaults.headers.post["Content-Type"]= "application/json"
// instance.defaults.headers["Accept"]= "application/json"
// instance.defaults.timeout =60000




// // Add a request interceptor
// instance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//       const accessToken = getToLocalStorage(authKey)
//       // console.log(accessToken)
//        if(accessToken){
//          config.headers.Authorization = `Bearer ${accessToken}`
//        }
//     return config;

//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// instance.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data

//      const responseObject ={
//         // data :response?.data
//         data: response?.data?.payload,
//         success: response?.data?.success,
//         message: response?.data?.message
//      }
     
//     return responseObject;
//   }, function (error) {
//     console.error('Error response:', error.response);
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     const responseObject ={
//       statusCode: error?.response?.status || 500,
//     message: error?.response?.data?.message || "Something went wrong!",
//     errorMessages: error?.response?.data?.message, // Assuming error message is repeated here
//     success: false // Always set success to false for errors
//   }
//   return Promise.reject(responseObject);
//   });







// export {instance}




import axios from "axios";
import { authKey } from "../../contants/authKey";
import Cookies from 'js-cookie';

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get(authKey);
    if (accessToken) {
      config.cookies = {
        accessToken: accessToken
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    const responseObject = {
      data: response?.data?.payload,
      success: response?.data?.success,
      message: response?.data?.message,
    };
    return responseObject;
  },
  function (error) {
    console.error('Error response:', error.response);
    const responseObject = {
      statusCode: error?.response?.status || 500,
      message: error?.response?.data?.message || "Something went wrong!",
      errorMessages: error?.response?.data?.message,
      success: false,
    };
    return Promise.reject(responseObject);
  }
);

export { instance };

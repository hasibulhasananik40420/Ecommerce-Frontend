// import { instance as axiosInstance  } from './axiosInstance'

// export const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params, headers,contentType }) => {
//     try {
//       const result = await axiosInstance({
//         url: baseUrl + url,
//         method,
//         data,
//         params,
//         headers:{
//           "Content-Type":contentType || "application/json",
//           ...headers,
//         },
//       })
//       return { data: result.data }
//     } catch (axiosError) {
//       const err = axiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   }

import { instance as axiosInstance } from './axiosInstance';

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers, contentType }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        // Pass the cookies to the Axios request
        // headers: {
        //   "Content-Type": contentType || "application/json",
        // },
        // Add cookies to the Axios request
        // cookies: cookies
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  }

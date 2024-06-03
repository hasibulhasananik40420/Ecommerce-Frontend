import { baseApi } from "./baseApi";
import { tagTypes } from "./tag-types";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    
    createProduct: build.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
        credentials: "include", // Ensure cookies are sent with the request
      }),
      invalidatesTags: [tagTypes.product],
    }),






  }),
});

export const { useCreateProductMutation } = productApi;

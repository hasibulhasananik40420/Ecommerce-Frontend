import { baseApi } from "./baseApi";
import { tagTypes } from "./tag-types";

const categoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    
    createCategories: build.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
        credentials: "include", // Ensure cookies are sent with the request
      }),
      invalidatesTags: [tagTypes.allCategories],
    }),






  }),
});

export const { useCreateCategoriesMutation } = categoriesApi;

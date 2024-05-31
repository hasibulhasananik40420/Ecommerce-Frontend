import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../helpers/axios/axiosBaseQuery'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: () => ({
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi
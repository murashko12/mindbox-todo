import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiQuery = createApi({
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3000/todos',
        prepareHeaders: (headers) => {
          return headers
        }
    }),
    tagTypes: ["TODO"],
    endpoints: () => ({})
})
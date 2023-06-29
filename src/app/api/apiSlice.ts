import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8010/api' }),
  tagTypes: ['Auth', 'User'],
  endpoints: builder => ({})
})
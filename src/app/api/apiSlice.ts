import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8010/api' }),
  tagTypes: ['Auth', 'User'],
  endpoints: builder => ({})
})
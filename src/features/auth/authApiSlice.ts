import { apiSlice } from "../../app/api/apiSlice"
import { logout } from "./authSlice"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/login/',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: '/logout/',
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          //const { data } = 
          await queryFulfilled
          //console.log(data)
          // dispatch(logout())
          dispatch(apiSlice.util.resetApiState())
        } catch (err) {
          console.log(err)
        }
      }
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/token/refresh/',
        method: 'GET',
      })
    }),
  })
})

export const {
  useLoginMutation,
  useSendLogoutMutation,
  useRefreshMutation,
} = authApiSlice 
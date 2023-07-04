import { apiSlice } from "../../app/api/apiSlice"
import { logout } from "./authSlice"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/login/',
        credentials: 'include',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    registerUser: builder.mutation({
      query: (data: { user_id: string, password: string, name: string, phone: string, email: string }) => ({
        url: '/register/',
        method: 'POST',
        body: data
      })
    }),
    verifyToken: builder.mutation({
      query: (token: string) => ({
        url: '/token/verify/',
        method: 'POST',
        body: { 'token': token }
      })
    }),
    refreshToken: builder.mutation({
      query: (token: string) => ({
        url: '/token/refresh/',
        method: 'POST',
        body: { 'refresh': token }
      })
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: '/logout/',
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(apiSlice.util.resetApiState())
        } catch (err) {
          console.log(err)
        }
      }
    }),
  })
})

export const {
  useLoginMutation,
  useRegisterUserMutation,
  useSendLogoutMutation,
  useVerifyTokenMutation,
  useRefreshTokenMutation,
} = authApiSlice 
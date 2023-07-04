import { BaseQueryFn, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:8010/api',
  credentials: 'include',
})

function getCookie(key: string) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

const baseQueryWithReauth: BaseQueryFn<any, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    try {
      const refreshToken = getCookie('refresh_token')

      const refreshResult: any = await baseQuery({ url: '/token/refresh/', method: 'POST', body: { refresh: refreshToken } }, api, extraOptions);

      if (refreshResult.data) {
        const { access: access_token, refresh: refresh_token } = refreshResult.data;
        document.cookie = `access_token=${access_token}; path=/;`;
        document.cookie = `refresh_token=${refresh_token}; path=/;`;

        if (args.url === '/token/verify/') {
          return refreshResult
        }
        result = await baseQuery(args, api, extraOptions)
      } else {
        if (refreshResult.error && refreshResult.error?.status === 401) {
          console.log("refresh 401")
          console.log(refreshResult.error)
        }
        console.log(refreshResult)
        result = refreshResult
      }
    } catch (err: any) {
      console.log(err)
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Auth', 'User'],
  endpoints: builder => ({})
})

// export const baseApiSlice = createApi({
//   baseQuery: fetchBaseQuery(
//     {
//       baseUrl: 'http://127.0.0.1:8010/api',
//       credentials: 'include',
//     }),
//   tagTypes: ['Auth', 'User'],
//   endpoints: builder => ({})
// })
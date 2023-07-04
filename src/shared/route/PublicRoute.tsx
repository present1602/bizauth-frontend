import { useRefreshTokenMutation, useVerifyTokenMutation } from '../../features/auth/authApiSlice';
// import useAuth from '../../hooks/useAuth'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Outlet } from 'react-router'
import { Navigate } from 'react-router-dom'



const PublicRoute = () => {
  const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [verifyToken] = useVerifyTokenMutation()
  const [refreshToken] = useRefreshTokenMutation()

  useEffect(() => {
    async function checkTokenValid() {
      const accessToken = cookies.access_token
      try {
        const result: any = await verifyToken(accessToken);

        if (result && !result.error) {

          setIsAuthenticated(true)
        }
        // else if (result.error && result.error.status === 401) {

        //   if (cookies.refresh_token) {
        //     const result: any = await refreshToken(cookies.refresh_token)
        //     if (result.data && result.data.token) {
        //       setCookie('access_token', result.data.token.access)
        //       setCookie('refresh_token', result.data.token.refresh)
        //       setIsAuthenticated(true)
        //     }
        //   }
        // }

      } catch (err: any) {
        console.dir(err);
      }
    }

    if (cookies.access_token) {
      checkTokenValid()
    }
  }, [])

  return (
    <div>
      {!isAuthenticated ? <Outlet /> : <Navigate to='/home' />}
    </div>
  );
}

export default PublicRoute;
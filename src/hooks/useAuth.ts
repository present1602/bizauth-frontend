// import { useVerifyTokenMutation } from "../features/auth/authApiSlice";
// import { useCookies } from "react-cookie";


// function useAuth() {
//   const [cookies] = useCookies(['access_token', 'refresh_token']);
//   const [verifyToken, { }] = useVerifyTokenMutation();

//   async function checkTokenValid(token: string): Promise<boolean> {
//     try {
//       const result = await verifyToken(token);
//       return true;
//     } catch (err: any) {
//       console.dir(err);
//       return false;
//     }
//   }

//   if (cookies.access_token) {
//     const accessToken = cookies.access_token;
//     const isAuthenticated = await checkTokenValid(accessToken);
//     return { isAuthenticated };
//   }

//   return { isAuthenticated: false };
// }

// export default useAuth

// function useAuth() {
//   const [cookies] = useCookies(['access_token', 'refresh_token'])
//   const [verifyToken, { }] = useVerifyTokenMutation()
//   let isAuthenticated = false

//   async function checkTokenValid(token: string) {
//     try {
//       const result = await verifyToken(token)
//       return result;
//     } catch (err: any) {
//       console.dir(err)
//       return false;
//     }

//   }
//   if (cookies.access_token) {
//     const accessToken = cookies.access_token
//     return checkTokenValid(accessToken)

//   }

//   return { isAuthenticated }
// }

// export default useAuth


 // const tokenVarified = async (token: string) => {

  //   if (await verifyToken(token)) {
  //     result = true
  //   } else if (cookies.refresh_token && await verifyToken(cookies.refresh_token)) {
  //     result = true
  //   }
  //   return result
  // }



// import { useVerifyTokenMutation } from "../features/auth/authApiSlice";
// import { useCookies } from "react-cookie";


// function useAuth() {
//   const [cookies] = useCookies(['access_token', 'refresh_token'])
//   const [verifyToken, { }] = useVerifyTokenMutation()

//   const tokenVarified = async (token: string) => {
//     let result = false

//     if (await verifyToken(token)) {
//       result = true
//     } else if (cookies.refresh_token && await verifyToken(cookies.refresh_token)) {
//       result = true
//     }
//     return result
//   }
//   return { isAuthenticated: cookies.access_token && tokenVarified(cookies.access_token) }
// }

// export default useAuth
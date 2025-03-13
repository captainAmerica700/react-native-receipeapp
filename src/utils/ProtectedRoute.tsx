
// import { Redirect } from "expo-router"
// import { getItem } from "@/store/mmkv"
// import { ReactNode, useEffect, useState } from "react"

// interface ProtectedRouteProps{
//   children: ReactNode
// }
// const ProtectedRoute =({children}:ProtectedRouteProps)=>{
//   const [token, setToken] = useState<string | null| undefined>(null);
// //   const token =  getItem('tokenData')
// // console.log('token at protec eroute',token)


//   useEffect(() => {
//     const storedToken = getItem("tokenData");
//     console.log("Token at ProtectedRoute:", storedToken);
//     setToken(storedToken);
//   }, []);
//   if(!token){
   
//     return <Redirect href="/login" />;
//   }
//     return children
// }

// export default ProtectedRoute
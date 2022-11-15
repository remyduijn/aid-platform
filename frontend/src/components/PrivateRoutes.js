// import { Outlet, Navigate } from 'react-router-dom'

// const PrivateRoutes = () => {
//     let auth = {'token':true}
//     return(
//         auth.token ? <Outlet/> : <Navigate to="/signin"/>
//     )
// }

// export default PrivateRoutes

import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const user=localStorage.getItem('user')
    if(user){
      return true
    } 
    else {
      return false
    }
}

const  PrivateRoutes=(props) =>{
  const auth=useAuth()

  return auth?<Outlet/>: <Navigate to="/login"/>
}


export default PrivateRoutes;
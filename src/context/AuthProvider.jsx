import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorageData } from '../utiltis/LocalStorage'
export  const userContext = createContext()

const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState(null)

  useEffect(() => {
    // localStorage.clear()
    const { employee, admin } = GetLocalStorageData();
    setuserdata({ employee, admin })
    // console.log(userdata);
    
  }, [])
// console.log(userdata);

  return (
    <userContext.Provider value={userdata} >

      <div>{children}</div>
    </userContext.Provider>
  )
}

export default AuthProvider